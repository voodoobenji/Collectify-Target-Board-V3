# Design spec — Collectify look (match the Target board)

Reuse the exact visual language of the existing Collectify Target board so the two feel like one product line.

## Palette (dark theme; light theme flips via CSS vars)
- page/ink: #0b1220
- card/panel: #111b2e   secondary/panel2: #16223a   line: #22314d
- text primary: #e8ecf4   text muted: #a3b1cc   text faint: #7d8aa5
- gold (brand accent): #c9a876
- green / on-hand / live: #2fbe8f
- amber / in-transit: #ffb238  (label text darker: #c69a3e)
- blue: #5b8def   red: #ff5a4e   purple: #c084fc
Status = two states only: ON HAND (green), IN TRANSIT (amber).

## Fonts (Google Fonts, already imported in the Target app)
- Fraunces (serif) — store/set names, headers
- Inter — body
- JetBrains Mono — labels, quantities, statuses (uppercase, letter-spaced)
- Poppins — the COLLECTIFY brand wordmark
- Barlow Condensed — optional display

## Screens (all in the plan doc; specs here)

### Product view (default)
Toggle [PRODUCT | STORE] top-right; region filter chips. Then per set, newest first:
- Header: box-art thumb (52px) + set name (Fraunces ~19px, part in gold) + mono subtitle ("SUPER PREMIUM COLLECTION - 14 STORES") + "updated Xh ago".
- Group "ON HAND NOW - N" (green dot + green mono label). Rows highlighted (bg #2fbe8f0f): store (14px) + region (mono muted) ..... qty (mono ~17px green) + "ON HAND".
- Group "IN TRANSIT - N" (amber). Rows: same but amber qty + "IN TRANSIT".
On-hand groups sort ABOVE in-transit.

### Store view
Region section header (Fraunces) + gold rule (like Target). Store cards with a LEFT BORDER color = hottest state (green if any on-hand, else amber). Card: star + store name (Fraunces) + "updated Xh ago"; product rows (dot + product + qty + status), on-hand first. Empty stores are HIDDEN by default; searching surfaces them showing "Nothing inbound yet - as of [last update]".

### Ingest / confirm screen
"Review allocation" + "AS OF MM/DD". Summary: "✓ 3 products - 40 stores matched - 68 lines". "NEEDS YOUR ATTENTION" section (amber cards) for unmatched store (best-guess dropdown + MAP) and new set (ADD TO CATALOG + optional image). "READY TO PUBLISH" per-product rows (green check + "21 stores - 2 on hand - 19 in transit"). Footer: "expires in 5 days" + [DISCARD] [PUBLISH 66].

### Auto-generated stock sheet (Discord graphic)
Server-side image (Vercel OG / Satori). Near-black bg (#0a0d12) with subtle Best Buy yellow diagonal streaks; tiled faint COLLECTIFY watermark. Header: Best Buy yellow logo tag + product title (Poppins 900) + "BEST BUY STOCK SHEET" + "AS OF [time]" + box art. Body: 3-column table (# / Store / Qty[status]) with green ON HAND / orange IN TRANSIT. Footer: "N STORES - SO CAL" + guide.collectifyapp.xyz. Everyday sheet has NO price/SKU; release-day variant adds SKU + price + on-sale date.
