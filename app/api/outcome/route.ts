import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { recordOutcome, patchEntry, getTrackRecords } from "@/lib/kv";
import type { Outcome, Status } from "@/lib/types";

// Admin logs what actually happened at a store today: "hit" (it dropped),
// "no_drop" (checked, nothing), or null (clear today's log). This appends to the
// store's outcome history AND mirrors into the live board's status so the daily
// rollover archive and the status filter stay consistent.
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const storeId = typeof body.storeId === "string" ? body.storeId : null;
  const result: Outcome | null | undefined =
    body.result === "hit" || body.result === "no_drop"
      ? (body.result as Outcome)
      : body.result === null
        ? null
        : undefined;

  if (!storeId || result === undefined) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }

  const by = session.username ?? "admin";
  await recordOutcome(storeId, result, by);

  const status: Status = result === "hit" ? "hit" : result === "no_drop" ? "no_hit" : "pending";
  await patchEntry(storeId, { status }, by);

  const records = await getTrackRecords();
  return NextResponse.json({ ok: true, records });
}
