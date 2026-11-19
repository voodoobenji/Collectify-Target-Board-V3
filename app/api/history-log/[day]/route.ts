import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { HISTORY_LOG } from "@/lib/history-log";
import { getRecentDrops, type RecentDrop } from "@/lib/kv";
import { WEEKDAYS } from "@/lib/types";

// Week view log for one weekday: the drops-log entries from imports (newest), then the older static
// history from the July-Sept Discord exports. Recent drops come from one small cached key (engine:recent).
let recentCache: { at: number; v: Record<string, RecentDrop[]> } | null = null;
async function recent(): Promise<Record<string, RecentDrop[]>> {
  if (recentCache && Date.now() - recentCache.at < 5 * 60_000) return recentCache.v;
  const v = await getRecentDrops().catch(() => ({}));
  recentCache = { at: Date.now(), v };
  return v;
}

const fmtTime = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return `${h % 12 === 0 ? 12 : h % 12}:${String(m).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
};
const LABEL = { drop: "Real drop", light: "Light stock only (still owed)", dry: "Checked: nothing out" } as const;

export async function GET(req: NextRequest, { params }: { params: { day: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const day = params.day.toLowerCase();
  if (!(WEEKDAYS as readonly string[]).includes(day)) {
    return NextResponse.json({ error: "Invalid day" }, { status: 400 });
  }
  const log: Record<string, { date: string; type: string; snippet: string; url: string | null }[]> = {};
  const dayIdx = (WEEKDAYS as readonly string[]).indexOf(day); // monday = 0
  for (const [storeId, rows] of Object.entries(await recent())) {
    const mine = rows.filter((r) => (new Date(`${r.d}T12:00:00Z`).getUTCDay() + 6) % 7 === dayIdx);
    if (mine.length)
      log[storeId] = mine.map((r) => ({ date: r.d, type: r.k === "drop" ? "confirmed" : r.k, snippet: `${LABEL[r.k]} · ${fmtTime(r.t)}`, url: null }));
  }
  for (const [storeId, rows] of Object.entries(HISTORY_LOG[day] ?? {})) log[storeId] = [...(log[storeId] ?? []), ...rows];
  return NextResponse.json({ day, log });
}
