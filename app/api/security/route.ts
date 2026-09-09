import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getSecurityLog, getPresence, getDeviceStats, getReferrals } from "@/lib/kv";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const [log, presence, devices, referrals] = await Promise.all([
    getSecurityLog(250),
    getPresence(),
    getDeviceStats(),
    getReferrals(250),
  ]);
  return NextResponse.json({ log, presence, devices, referrals });
}
