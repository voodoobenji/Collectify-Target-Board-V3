import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getBoard, patchEntry } from "@/lib/kv";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
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
  const allowedKeys = ["chance", "window", "reason", "vendorNotes", "randomNotes", "sourceType", "stockLocation", "itemLimit", "confirmedCount", "flagged", "status", "soldCount", "lastSoldAt"];
  const safePatch: Record<string, unknown> = {};
  for (const k of allowedKeys) {
    if (k in patch) safePatch[k] = patch[k];
  }
  const board = await patchEntry(storeId, safePatch, session.discordId ?? "unknown");
  return NextResponse.json(board);
}
