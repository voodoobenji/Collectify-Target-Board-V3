import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSecurityLog, getPresence } from "@/lib/kv";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const [log, presence] = await Promise.all([getSecurityLog(250), getPresence()]);
  return NextResponse.json({ log, presence });
}
