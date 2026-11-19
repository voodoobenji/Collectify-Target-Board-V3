import { NextRequest, NextResponse } from "next/server";

import { startNewDay } from "@/lib/kv";
import { rebuildPredictions } from "@/lib/engine";

// Runs the prediction engine on some requests (a few seconds).
export const maxDuration = 60;

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
  // New day = new "this week so far" context: rebuild predictions from the drops log.
  const run = await rebuildPredictions("rollover", "auto").catch((e) => ({ error: String(e) }));
  const summary = { ok: true, date: board.date, version: board.version, engine: run };
  console.log("[cron/new-day]", JSON.stringify(summary));
  return NextResponse.json(summary);
}
