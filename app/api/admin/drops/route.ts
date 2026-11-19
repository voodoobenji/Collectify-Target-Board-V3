import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getDropDays, getDropsForDay, setDropsForDay } from "@/lib/kv";
import { DROP_KINDS, storeNameOf, windowFor, type DropKind, type DropRecord } from "@/lib/drops";
import { STORES } from "@/lib/stores";

// Admin: read / save the drops log. One key per day; a save replaces that whole day.
// GET            -> { days: [{date, count}] }   (counts read per day, fine for the few weeks we keep)
// GET ?date=...  -> { date, drops }
// POST { days: { [date]: DropRecord[] } } -> replaces each listed day

export const dynamic = "force-dynamic";

async function guard() {
  const session = await getServerSession(authOptions);
  return session?.isMember && session?.isAdmin ? session : null;
}

const isDate = (d: unknown): d is string => typeof d === "string" && /^\d{4}-\d{2}-\d{2}$/.test(d);
const known = new Set(STORES.map((s) => s.id));

function clean(date: string, r: Partial<DropRecord>): DropRecord | null {
  if (!r.storeId || !known.has(r.storeId)) return null;
  const kind = DROP_KINDS.includes(r.kind as DropKind) ? (r.kind as DropKind) : null;
  if (!kind) return null;
  const time = typeof r.time === "string" && /^\d{2}:\d{2}$/.test(r.time) ? r.time : "00:00";
  return {
    date,
    time,
    storeId: r.storeId,
    storeName: storeNameOf(r.storeId),
    kind,
    window: windowFor(time),
    items: String(r.items ?? "").slice(0, 300),
    notes: String(r.notes ?? "").slice(0, 300),
    source: r.source === "csv" || r.source === "manual" ? r.source : "export",
  };
}

export async function GET(req: NextRequest) {
  if (!(await guard())) return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  const date = req.nextUrl.searchParams.get("date");
  if (date) {
    if (!isDate(date)) return NextResponse.json({ error: "bad date" }, { status: 400 });
    return NextResponse.json({ date, drops: await getDropsForDay(date) });
  }
  const dates = await getDropDays();
  const days = await Promise.all(dates.slice(-60).map(async (d) => ({ date: d, count: (await getDropsForDay(d)).length })));
  return NextResponse.json({ days: days.reverse() });
}

export async function POST(req: NextRequest) {
  if (!(await guard())) return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  const body = (await req.json().catch(() => ({}))) as { days?: Record<string, Partial<DropRecord>[]> };
  const entries = Object.entries(body.days ?? {}).filter(([d, rows]) => isDate(d) && Array.isArray(rows));
  if (!entries.length || entries.length > 120) return NextResponse.json({ error: "nothing to save" }, { status: 400 });
  const saved: Record<string, number> = {};
  for (const [date, rows] of entries) {
    const drops = rows.map((r) => clean(date, r)).filter((r): r is DropRecord => !!r).slice(0, 400);
    drops.sort((a, b) => a.time.localeCompare(b.time));
    await setDropsForDay(date, drops);
    saved[date] = drops.length;
  }
  return NextResponse.json({ ok: true, saved });
}
