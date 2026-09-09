import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {
  recordPresence,
  recordDeviceSighting,
  refcodeFor,
  resolveRefcode,
  recordReferral,
} from "@/lib/kv";

function clientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

// Lightweight heartbeat from the client so admins can see who's active,
// enriched with device + coarse (IP-based) location for shared-login detection,
// and the covert referral tag for "who shared the link to whom".
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = await req.json().catch(() => ({}) as Record<string, unknown>);
  const deviceId = typeof body.deviceId === "string" ? body.deviceId.slice(0, 80) : undefined;
  const ref = typeof body.ref === "string" ? body.ref.slice(0, 16) : undefined;

  const ip = clientIp(req);
  const city = decodeURIComponent(req.headers.get("x-vercel-ip-city") ?? "").trim() || undefined;
  const region = req.headers.get("x-vercel-ip-country-region") ?? undefined;
  const ua = req.headers.get("user-agent") ?? undefined;

  const id = session.discordId ?? "unknown";
  const username = session.username ?? "member";

  await recordPresence(id, { username, isAdmin: Boolean(session.isAdmin), ip, city, region, deviceId });
  await recordDeviceSighting(id, username, { deviceId, ua, city, region });

  // Covert referral attribution: this member arrived carrying someone else's code.
  if (ref) {
    const who = await resolveRefcode(ref);
    if (who && who.id && who.id !== id) {
      await recordReferral({
        referredId: id,
        referredName: username,
        referrerId: who.id,
        referrerName: who.name ?? "member",
        at: new Date().toISOString(),
      });
    }
  }

  const refcode = await refcodeFor(id, username);
  return NextResponse.json({ ok: true, refcode });
}
