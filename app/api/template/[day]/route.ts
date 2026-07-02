import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getTemplate } from "@/lib/kv";
import { WEEKDAYS } from "@/lib/types";

export async function GET(req: NextRequest, { params }: { params: { day: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const day = params.day.toLowerCase();
  if (!(WEEKDAYS as readonly string[]).includes(day)) {
    return NextResponse.json({ error: "Invalid day" }, { status: 400 });
  }
  const template = await getTemplate(day);
  return NextResponse.json({ weekday: day, template });
}
