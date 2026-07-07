import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { getTemplate, patchTemplateEntry } from "@/lib/kv";
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

export async function PATCH(req: NextRequest, { params }: { params: { day: string } }) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const day = params.day.toLowerCase();
  if (!(WEEKDAYS as readonly string[]).includes(day)) {
    return NextResponse.json({ error: "Invalid day" }, { status: 400 });
  }
  const body = await req.json();
  const { storeId, patch } = body as { storeId: string; patch: Record<string, unknown> };
  if (!storeId || !patch) {
    return NextResponse.json({ error: "Missing storeId or patch" }, { status: 400 });
  }
  const allowedKeys = ["chance", "window", "reason", "vendorNotes", "randomNotes", "sourceType", "confirmedCount"];
  const safePatch: Record<string, unknown> = {};
  for (const k of allowedKeys) {
    if (k in patch) safePatch[k] = patch[k];
  }
  const tpl = await patchTemplateEntry(day, storeId, safePatch);
  return NextResponse.json(tpl);
}
