import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getChangeLog } from "@/lib/kv";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const changes = await getChangeLog(100);
  return NextResponse.json({ changes });
}
