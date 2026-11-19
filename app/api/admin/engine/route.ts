import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getEngineLog } from "@/lib/kv";
import { rebuildPredictions } from "@/lib/engine";

// Admin: the prediction engine's run log, and a manual "Rebuild predictions now".
export const dynamic = "force-dynamic";
export const maxDuration = 60;

async function guard() {
  const session = await getServerSession(authOptions);
  return session?.isMember && session?.isAdmin ? session : null;
}

export async function GET() {
  if (!(await guard())) return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  return NextResponse.json({ log: await getEngineLog(30) });
}

export async function POST() {
  const session = await guard();
  if (!session) return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  const run = await rebuildPredictions("manual", session.username ?? "admin");
  return NextResponse.json({ run, log: await getEngineLog(30) });
}
