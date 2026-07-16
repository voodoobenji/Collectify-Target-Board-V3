import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getBoard, patchEntry, bumpRate, logSecurityEvent } from "@/lib/kv";

function clientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  // Rate-limit / scrape detection. Normal polling is ~5 requests/min; well
  // above that suggests a scraper, so we flag it once and throttle hard cases.
  const id = session.discordId ?? "unknown";
  const n = await bumpRate(id);
  if (n === 41) {
    await logSecurityEvent({
      type: "scrape",
      discordId: id,
      username: session.username ?? "member",
      isAdmin: Boolean(session.isAdmin),
      ip: clientIp(req),
      detail: "40+ board requests in one minute",
      at: new Date().toISOString(),
    });
  }
  if (n > 150) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }
  const board = await getBoard();
  return NextResponse.json(board);
}

export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const body = await req.json();
  const { storeId, patch } = body as { storeId: string; patch: Record<string, unknown> };
  if (!storeId || !patch) {
    return NextResponse.json({ error: "Missing storeId or patch" }, { status: 400 });
  }
  const allowedKeys = ["chance", "window", "reason", "vendorNotes", "randomNotes", "sourceType", "stockLocation", "itemLimit", "multiSeller", "confirmedCount", "flagged", "status", "soldCount", "lastSoldAt"];
  const safePatch: Record<string, unknown> = {};
  for (const k of allowedKeys) {
    if (k in patch) safePatch[k] = patch[k];
  }
  const board = await patchEntry(storeId, safePatch, session.username ?? session.discordId ?? "unknown");
  return NextResponse.json(board);
}
