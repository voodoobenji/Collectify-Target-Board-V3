import { NextRequest, NextResponse } from "next/server";
import { patchEntryRaw } from "@/lib/kv";
import { matchStoreByAddress } from "@/lib/store-matching";

// ============================================================================
// Nightly poll of Benny's map platform for current Target write-ups /
// predictions, synced into our BoardEntry.externalGuide field.
//
// This exists because guide write-ups aren't a discrete event on his side -
// they just autopopulate as his AI gets more info - so there's no clean
// moment to hook a webhook to. Polling once a night (see vercel.json) is the
// fit here instead. Line Forming is still handled by the webhook
// (app/api/webhooks/map-reports/route.ts) since that IS a real event.
//
// IMPORTANT: the response shape below (MAP_GUIDES_ENDPOINT payload) is a
// GUESS pending confirmation from Benny - see "ADJUST" comments. Until he
// gives us a real endpoint + example response, this route just no-ops.
// ============================================================================

interface GuideItem {
  address?: string;
  store?: string;
  retailer?: string;
  text?: string;
  writeup?: string;
  updatedAt?: string;
  storeUrl?: string;
  mapUrl?: string;
  url?: string;
}

export async function GET(req: NextRequest) {
  // Vercel automatically sends the CRON_SECRET env var as a Bearer token
  // when it invokes a scheduled cron job - see vercel.json for the schedule.
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const endpoint = process.env.MAP_GUIDES_ENDPOINT;
  if (!endpoint) {
    // Not configured yet - waiting on Benny's endpoint URL. No-op rather
    // than error, so this can deploy safely before that's ready.
    return NextResponse.json({ ok: true, skipped: "MAP_GUIDES_ENDPOINT not set" });
  }

  let items: GuideItem[];
  try {
    // ADJUST: confirm the actual auth mechanism Benny wants for a read
    // endpoint, if any - this assumes an optional API key header.
    const apiKey = process.env.MAP_GUIDES_API_KEY;
    const res = await fetch(endpoint, {
      headers: apiKey ? { "X-API-Key": apiKey } : undefined,
      cache: "no-store",
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Fetch to map guides endpoint failed: ${res.status}` },
        { status: 502 }
      );
    }
    // ADJUST: confirm whether the response is a bare array or wrapped in an
    // envelope like { data: [...] } / { guides: [...] }.
    const body = await res.json();
    items = Array.isArray(body) ? body : (body.data ?? body.guides ?? []);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch or parse map guides endpoint", detail: String(err) },
      { status: 502 }
    );
  }

  const now = new Date().toISOString();
  let matched = 0;
  let skippedNoAddress = 0;
  let skippedNotFound = 0;
  let skippedOtherRetailer = 0;

  for (const item of items) {
    const retailer = (item.retailer ?? "").toLowerCase();
    if (retailer && !retailer.includes("target")) {
      skippedOtherRetailer++;
      continue;
    }

    const address = item.address ?? item.store ?? "";
    if (!address) {
      skippedNoAddress++;
      continue;
    }

    const store = matchStoreByAddress(address);
    if (!store) {
      skippedNotFound++;
      continue;
    }

    const text = item.text ?? item.writeup ?? "";
    if (!text) continue;

    await patchEntryRaw(store.id, {
      externalGuide: {
        text,
        updatedAt: item.updatedAt ?? now,
        source: "Collectify Map",
        storeUrl: item.storeUrl ?? item.mapUrl ?? item.url ?? null,
      },
    });
    matched++;
  }

  const summary = {
    ok: true,
    total: items.length,
    matched,
    skippedNoAddress,
    skippedNotFound,
    skippedOtherRetailer,
  };
  console.log("[sync-guides]", JSON.stringify(summary));
  return NextResponse.json(summary);
}
