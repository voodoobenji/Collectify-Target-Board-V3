import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { startNewDay } from "@/lib/kv";

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const board = await startNewDay(session.discordId ?? "unknown");
  return NextResponse.json(board);
}
