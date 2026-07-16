import { NextRequest, NextResponse } from "next/server";
import { startNewDay } from "@/lib/kv";

// Nightly auto-rollover: archives today, saves it as the weekday template, and
// creates a fresh board from the incoming weekday's pattern (statuses reset to
// No Update/Hasn't Sold). Same as an admin clicking "Start New Day" — just
// automatic, so nobody has to remember.
//
// Scheduled at 08:00 UTC (see vercel.json) = midnight PT in winter, ~1am PT in
// summer. Deliberately after midnight so the PT date has already rolled over
// before startNewDay reads "today".
export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const board = await startNewDay("auto (midnight rollover)");
  const summary = { ok: true, date: board.date, version: board.version };
  console.log("[cron/new-day]", JSON.stringify(summary));
  return NextResponse.json(summary);
}
