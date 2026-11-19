import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import Anthropic from "@anthropic-ai/sdk";
import { betaZodOutputFormat } from "@anthropic-ai/sdk/helpers/beta/zod";
import { z } from "zod";
import { authOptions } from "@/lib/auth";
import { STORES } from "@/lib/stores";
import { STORE_ALIASES, STORE_PROFILES } from "@/lib/store-profiles";

// Admin uploads a day's Discord export; the browser turns it into plain messages and sends them here.
// Claude reads the chat and lists, per store, what happened: a real drop, light stock only, or dry.
// Nothing is saved here; the admin reviews the list and saves it with /api/admin/drops.
// Needs ANTHROPIC_API_KEY in Vercel (the owner sets it). Model: Claude Opus 5.5.

export const dynamic = "force-dynamic";
export const maxDuration = 300;

const Event = z.object({
  storeId: z.string().nullable().describe("Board store id like T054, or null if the store is not in the list"),
  storeText: z.string().describe("How the messages named the store"),
  time: z.string().describe("HH:MM 24h, when it happened (first message that reported the drop)"),
  kind: z.enum(["drop", "light", "dry"]),
  items: z.string().describe("Products mentioned, short"),
  note: z.string().describe("Short context: line size, limits, guest services, vendor on site, restocked later..."),
  confidence: z.enum(["high", "medium", "low"]),
  messageNumbers: z.array(z.number()).describe("The [#n] numbers of the messages this is based on"),
});
const Result = z.object({ events: z.array(Event) });

const RULES = `You read one day of the Collectify #target Discord channel (SoCal Target stores, Pokemon/One Piece TCG restocks) and log what each store did.

For every store that messages report on, output events:
- kind "drop": real product went out (ETBs, UPCs, booster bundles, boxes, tins, figure/poster collections, 30th items, "selling", "sold at open", "restocked", shipment stocked, vendor selling to the line).
- kind "light": ONLY light stock went out: booster sleeves, blisters, Needoh/squishies/squeezes/dumplings/clouds, singles, stickers, low-demand premium collections (Mega Zygarde ex, Mega Greninja). The store is still owed a real drop. If a store first had light stock and later a real drop, log the real drop (last word wins).
- kind "dry": someone checked and there was nothing, or "no poke", "dry", "holding for Friday".
- Line reports alone ("70+ heads", "line forming", "waiting") are NOT drops. Only log them as "drop" if a later message says it sold/started selling. A line that never got product is not an event unless it says dry.
- If a store dropped twice at clearly different times (morning and again in the evening), output two "drop" events.
- Read the whole thread; later messages correct earlier ones. Messages are oldest first.
- Ignore the admin's long guide posts for the next day (titles like "Target Guide", "CLICK HERE"), chat, questions, and anything not about a specific store.
- Stores outside SoCal (Las Vegas, Bay Area, Texas, Arizona, Hawaii) or not in the list: storeId null.
- Match stores using the list below (name, other names). Nicknames are common: "Spectrum" = Irvine Spectrum, "Bristol" = Santa Ana Bristol, "Sherman Oaks" = Van Nuys Sepulveda, "DTLA"/"7th & Fig" = 7th/Figueroa, "CPT" = Compton, "GG Harbor" = Garden Grove Harbor. If two stores could match and the messages don't settle it, pick the likelier one and set confidence "low".
- time: when the drop/light/dry was first reported, HH:MM 24h.
- Keep items and note short and factual.`;

function roster(): string {
  const aliasesById = new Map<string, string[]>();
  for (const [a, id] of Object.entries(STORE_ALIASES)) aliasesById.set(id, [...(aliasesById.get(id) ?? []), a]);
  return STORES.map((s) => {
    const p = STORE_PROFILES[s.id];
    const other = [...new Set([p?.engineName, ...(p?.aliases ?? []), ...(aliasesById.get(s.id) ?? [])].filter((x): x is string => !!x && x !== s.name))];
    return `${s.id} | ${s.name} | ${s.address ?? ""}${other.length ? ` | also: ${other.join(", ")}` : ""}`;
  }).join("\n");
}

interface InMsg { time: string; author: string; text: string; forwarded?: boolean; images?: number }

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  // The owner saved it as "anthropic_api_key" in Vercel; accept either spelling.
  const apiKey = process.env.ANTHROPIC_API_KEY || process.env.anthropic_api_key;
  if (!apiKey) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY is not set in Vercel yet." }, { status: 400 });
  }
  const body = (await req.json().catch(() => ({}))) as { date?: string; messages?: InMsg[] };
  const date = typeof body.date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(body.date) ? body.date : null;
  const msgs = Array.isArray(body.messages) ? body.messages.slice(0, 3000) : [];
  if (!date || !msgs.length) return NextResponse.json({ error: "date and messages are required" }, { status: 400 });

  // Long posts (the nightly guide itself) are cut short: they're not reports and would only add cost.
  const lines = msgs.map((m, i) => {
    const text = String(m.text ?? "").slice(0, 600);
    return `[#${i + 1} ${m.time}${m.forwarded ? " fwd" : ""}${m.images ? ` +${m.images} photo` : ""}] ${String(m.author ?? "").slice(0, 40)}: ${text}`;
  });

  const client = new Anthropic({ apiKey });
  try {
    const res = await client.beta.messages.parse({
      model: "claude-opus-5-5",
      max_tokens: 16000,
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      output_config: { effort: "medium", format: betaZodOutputFormat(Result) },
      system: [
        // Rules + store list are identical every day: cache them.
        { type: "text", text: `${RULES}\n\nSTORES (id | name | address | other names):\n${roster()}`, cache_control: { type: "ephemeral" } },
      ],
      messages: [{ role: "user", content: `Messages from ${date} (Los Angeles time), oldest first:\n\n${lines.join("\n")}` }],
    });
    if (res.stop_reason === "refusal") return NextResponse.json({ error: "The AI declined this export. Try again or log drops by hand." }, { status: 502 });
    const parsed = res.parsed_output;
    if (!parsed) return NextResponse.json({ error: "The AI reply could not be read. Try again." }, { status: 502 });
    const known = new Set(STORES.map((s) => s.id));
    const events = parsed.events.map((e) => ({ ...e, storeId: e.storeId && known.has(e.storeId) ? e.storeId : null }));
    const u = res.usage;
    // Opus 5.5: $4 / 1M input, $20 / 1M output; cache reads $0.20 / 1M, cache writes 1.25x input.
    const cost =
      ((u.input_tokens ?? 0) * 4 + (u.cache_creation_input_tokens ?? 0) * 5 + (u.cache_read_input_tokens ?? 0) * 0.2 + (u.output_tokens ?? 0) * 20) / 1e6;
    return NextResponse.json({ events, messages: msgs.length, usage: u, costUsd: Math.round(cost * 1000) / 1000 });
  } catch (e) {
    if (e instanceof Anthropic.AuthenticationError) return NextResponse.json({ error: "ANTHROPIC_API_KEY was rejected. Check it in Vercel." }, { status: 502 });
    if (e instanceof Anthropic.RateLimitError) return NextResponse.json({ error: "AI rate limit hit. Wait a minute and try again." }, { status: 429 });
    if (e instanceof Anthropic.APIError) return NextResponse.json({ error: `AI error ${e.status}: ${e.message}` }, { status: 502 });
    throw e;
  }
}
