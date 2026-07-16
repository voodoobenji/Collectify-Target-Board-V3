import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import type { Board } from "@/lib/types";
import { getBoard, patchEntry, logSecurityEvent } from "@/lib/kv";

function clientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

// In-memory board cache (per warm function instance). The board is identical
// for every member, so serving a ~5s-old copy from memory turns hundreds of
// polls into one KV read every few seconds. Members already tolerate ~12s via
// their poll interval, so a few seconds of cache is invisible.
let boardCache: { board: Board; ts: number } | null = null;
const BOARD_TTL_MS = 5000;
async function getCachedBoard(): Promise<Board> {
  const now = Date.now();
  if (boardCache && now - boardCache.ts < BOARD_TTL_MS) return boardCache.board;
  const board = await getBoard();
  boardCache = { board, ts: now };
  return board;
}

// In-memory rate limiter (per instance) — keeps scrape detection off the KV
// hot path so normal polling costs no extra writes.
const rlMap = new Map<string, { count: number; reset: number }>();
function bumpRateMem(id: string): number {
  const now = Date.now();
  const e = rlMap.get(id);
  if (!e || now > e.reset) {
    rlMap.set(id, { count: 1, reset: now + 60000 });
    return 1;
  }
  e.count += 1;
  return e.count;
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  // Rate-limit / scrape detection. Normal polling is ~5 requests/min; well
  // above that suggests a scraper, so we flag it once and throttle hard cases.
  const id = session.discordId ?? "unknown";
  const n = bumpRateMem(id);
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
  const board = await getCachedBoard();
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
  boardCache = { board, ts: Date.now() };
  return NextResponse.json(board);
}
