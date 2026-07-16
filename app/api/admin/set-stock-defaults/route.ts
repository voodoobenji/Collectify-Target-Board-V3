import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { applyStockDefaults } from "@/lib/kv";

// One-time (re-runnable) admin sweep: set every store to a shared stock
// location + item limit, on the live board and all weekday templates.
export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const board = await applyStockDefaults("both", "1 per person");
  return NextResponse.json({ ok: true, board });
}
