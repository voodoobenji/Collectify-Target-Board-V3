import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { importTemplate, applyTemplateToBoard, getBoard } from "@/lib/kv";
import { WEEKDAYS } from "@/lib/types";

function todayWeekday(): string {
  return new Date()
    .toLocaleDateString("en-US", { weekday: "long", timeZone: "America/Los_Angeles" })
    .toLowerCase();
}

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const body = await req.json();
  const results: string[] = [];
  for (const day of WEEKDAYS) {
    const entries = body[day];
    if (entries && typeof entries === "object") {
      await importTemplate(day, entries);
      results.push(day);
    }
  }

  const wd = todayWeekday();
  let board = await getBoard();
  if ((WEEKDAYS as readonly string[]).includes(wd) && results.includes(wd)) {
    board = await applyTemplateToBoard(wd, session.discordId ?? "unknown");
  }

  return NextResponse.json({ imported: results, board });
}
