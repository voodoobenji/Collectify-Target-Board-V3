import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getTrackRecords } from "@/lib/kv";

// Per-store, per-weekday track records for every store that has logged outcomes.
// Members see the track record (credibility); admins also use it for suggestions.
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const records = await getTrackRecords();
  return NextResponse.json({ records });
}
