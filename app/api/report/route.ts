import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { addReport, clearReports } from "@/lib/kv";
import { STORES } from "@/lib/stores";
import type { ReportCategory, StoreReport } from "@/lib/types";

const CATEGORIES: ReportCategory[] = ["address", "hours", "duplicate", "other"];

// Members submit a report about a store.
export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  const { storeId, category, note } = body as {
    storeId?: string;
    category?: string;
    note?: string;
  };

  if (!storeId || !STORES.find((s) => s.id === storeId)) {
    return NextResponse.json({ error: "Unknown store" }, { status: 400 });
  }
  const cat: ReportCategory = CATEGORIES.includes(category as ReportCategory)
    ? (category as ReportCategory)
    : "other";
  const cleanNote = String(note ?? "").trim().slice(0, 400);
  if (cat === "other" && !cleanNote) {
    return NextResponse.json({ error: "A note is required for 'other'." }, { status: 400 });
  }

  const report: StoreReport = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    category: cat,
    note: cleanNote,
    reportedBy: session.username ?? session.discordId ?? "member",
    reportedAt: new Date().toISOString(),
  };

  const board = await addReport(storeId, report);
  return NextResponse.json(board);
}

// Admins clear a single report (by id) or all reports for a store.
export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session?.isMember || !session?.isAdmin) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }
  const body = await req.json().catch(() => null);
  const { storeId, reportId } = (body ?? {}) as { storeId?: string; reportId?: string };
  if (!storeId) {
    return NextResponse.json({ error: "Missing storeId" }, { status: 400 });
  }
  const board = await clearReports(storeId, reportId);
  return NextResponse.json(board);
}
