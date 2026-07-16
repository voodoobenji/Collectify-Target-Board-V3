import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { recordPresence } from "@/lib/kv";

function clientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

// Lightweight heartbeat from the client so admins can see who's active.
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  await recordPresence(session.discordId ?? "unknown", {
    username: session.username ?? "member",
    isAdmin: Boolean(session.isAdmin),
    ip: clientIp(req),
  });
  return NextResponse.json({ ok: true });
}
