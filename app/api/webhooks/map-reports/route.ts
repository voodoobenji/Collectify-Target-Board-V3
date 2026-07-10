import { NextRequest, NextResponse } from "next/server";
import { patchEntryRaw } from "@/lib/kv";
import { matchStoreByAddress, resolveBennyUrl } from "@/lib/store-matching";

// ============================================================================
// IMPORTANT: this endpoint's payload parsing is a BEST GUESS based on
// screenshots of the map app's UI, not a confirmed real payload. Once you get
// an actual example JSON body from your friend, this file will very likely
// need small adjustments to the field names below (search for "ADJUST").
// Nothing else in the app depends on this being perfect on the first try.
//
// NOTE: write-ups/predictions ("Guide" content) are handled separately now,
// via a nightly poll (app/api/cron/sync-guides/route.ts) instead of this
// webhook - they're not a discrete event on Benny's side, they just
// autopopulate as his AI gets more info, so there's nothing to push here.
// The contentType === "guide" branch below is left in place in case that
// ever changes on his end, but it's not the primary path anymore.
// ============================================================================

const WEBHOOK_SECRET = process.env.MAP_WEBHOOK_SECRET;

export async function POST(req: NextRequest) {
  // ADJUST: confirm the actual header/param name their app uses, if any -
  // this assumes a simple shared-secret header.
  const providedSecret = req.headers.get("x-webhook-secret");
  if (!WEBHOOK_SECRET || providedSecret !== WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // ADJUST: these field names are guesses based on the UI (Status, Store,
  // Store History link, Notes, retailer). Update once the real payload is known.
  const status = String(body.status ?? body.Status ?? "").toLowerCase();
  const retailer = String(body.retailer ?? body.Retailer ?? "").toLowerCase();
  const address = String(body.store ?? body.Store ?? body.address ?? "");
  const storeUrl = resolveBennyUrl((body.storeUrl ?? body.mapUrl ?? body.url ?? null) as string | null);
  const notes = String(body.notes ?? body.Notes ?? body.text ?? "");
  const contentType = String(body.contentType ?? body.type ?? "update").toLowerCase();

  // We only care about Target reports for this board - everything else
  // (Barnes & Noble, CVS, etc.) isn't relevant to us and should be ignored
  // rather than erroring, since the same webhook likely fires for all retailers.
  if (retailer && !retailer.includes("target")) {
    return NextResponse.json({ ok: true, skipped: "not a Target report" });
  }

  const store = matchStoreByAddress(address);
  if (!store) {
    return NextResponse.json({ ok: true, skipped: "store not found in our list", address });
  }

  const now = new Date().toISOString();

  if (contentType === "guide") {
    await patchEntryRaw(store.id, {
      externalGuide: {
        text: notes || "No details provided.",
        updatedAt: now,
        source: "Collectify Map",
        storeUrl: storeUrl,
      },
    });
    return NextResponse.json({ ok: true, matched: store.id, applied: "externalGuide" });
  }

  if (status === "line" || status === "line active") {
    await patchEntryRaw(store.id, {
      lineForming: {
        reportedAt: now,
        storeUrl: storeUrl,
      },
    });
    return NextResponse.json({ ok: true, matched: store.id, applied: "lineForming" });
  }

  // Dry / In Stock / Low Stock / etc. - intentionally ignored per scope
  // (their map already covers this better than duplicating it here)
  return NextResponse.json({ ok: true, matched: store.id, skipped: "status not tracked on this board" });
}
