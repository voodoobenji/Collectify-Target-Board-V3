import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getFavorites, toggleFavorite } from "@/lib/kv";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.discordId) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const favorites = await getFavorites(session.discordId);
  return NextResponse.json({ favorites });
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.discordId) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const body = await req.json();
  const { storeId } = body as { storeId: string };
  if (!storeId) {
    return NextResponse.json({ error: "Missing storeId" }, { status: 400 });
  }
  const favorites = await toggleFavorite(session.discordId, storeId);
  return NextResponse.json({ favorites });
}
