# Best Buy Shipments Board — Deep Plan (grounded in the real channel export)

*Based on analysis of your Best Buy channel: 709 messages, Jun 18 – Jul 21 (~5 weeks). This replaces the earlier speculative draft — everything below is pulled from how you actually post.*

---

## North star: one app, a grid of boards

The Best Buy shipments board isn't a standalone product — it's **board #2** in a bigger app. The end state is a single Collectify app with a two-axis structure:

```
                 Best Buy         Target            Other retailers …
  SHIPMENTS      allocations      "landing now"     …
  GUIDE          (maybe)          current guide     …
  MAP            ———————— shared Collectify map ————————
```

- **Top-level nav:** Shipments · Guide · Map.
- Inside **Shipments** and **Guide**, you tab by **retailer** (Best Buy, Target, …).
- **Map** is the shared Collectify map (embed/link).

**Every cell is the same underlying thing — a store board** — differing only in:
- **type** — `shipments` (product / quantity / in-transit→on-hand) vs `guide` (chance / window / prediction),
- **retailer** — which store list + regions,
- **entry model + card renderer** for that type.

**Governing principle (your call):** *the app is the structured reference; Discord stays the live layer.* The Shipments board shows what's **allocated / in transit / landed** — not the minute-to-minute "it's a go, 20 in line" hype, which stays in Discord. This simplifies the board: the **bulk allocation ingest is the heart**, not a real-time ticker.

**Architecture recommendation:** build Best Buy as **board #2 in a configurable board system**, where a board = `{ retailer, type, storeList, entryModel }`. The existing Target guide becomes board #1 retroactively. Wrap them in the Shipments/Guide/Map nav shell once there are two. Adding retailer #3 later is then mostly a store list + config — no rewrite. This reaches the unified app incrementally instead of via one big-bang refactor.

*Everything below designs the Best Buy shipments board specifically — the first concrete instance of this system.*

---

## Decisions locked (planning session)

1. **Build approach — incremental.** Best Buy ships as a standalone board now; it folds into the unified Shipments/Guide/Map app down the road. Don't refactor the live Target board for a foundation we won't use for months.
2. **Coverage — everything you post.** All 7 SoCal regions (LA Area, South of LA, SFV/805/AV, SGV/IE, High Desert, OC, SD) **plus Central California, Northern California, and Las Vegas.**
3. **Refresh — auto-expire.** Shipments age off on their own after ~5–7 days (tunable) unless a new allocation paste refreshes them. Self-cleaning; no daily rollover.
4. **Layout — both, toggle.** Product view (pick a set → every store getting it, qty + status) and store view (region → store → inbound products), with a toggle. **Default: product view.**
5. **Product catalog — mined + grows.** Seed the set list from the export; unknown sets get named once and remembered. Aliases merge "AH ex Box" → "Ascended Heroes ex Box," etc.
6. **Set images — one per set.** Admin drops a single image into the catalog when a set is added; it shows everywhere for that set.
7. **Access — same server, role-gated.** Same Discord server as Target, but only members with a specific role see it. *Implementation note: role-checking needs either the `guilds.members.read` OAuth scope or a bot in the server — a step beyond the current guild-membership check.*
8. **Maintenance — paste + light manual.** The allocation paste does the heavy lifting (populate + status from IN TRANSIT/ON HAND + auto-expire); admins can quickly mark a store/product sold-out, hide it, or tweak a line.
9. **Ingest flow — quick confirm, then publish.** Paste → preview of what matched (stores / sets / quantities) with unmatched items flagged → one click to publish. The confirm screen is *also* where unmatched stores/sets get mapped once — which is how the alias tables and product catalog grow over time.

### Finer decisions
- **Name:** *Collectify · Best Buy Shipments.*
- **Admins:** same allow-list as the Target board.
- **Expiry window:** ~5 days.
- **Member features carried over:** Favorites, Search, Near Me. *(No compact mode — the product-first layout is already dense.)*
- **Product-view order:** newest allocation first — the board leads with what just dropped.
- **Card signal:** exactly two shipment states — **In transit** and **On hand** — plus **"updated X ago"** for freshness. *No* sold/sold-out, *no* late/locked status, no line counts. Anything about selling stays in Discord; the board is strictly "what's shipping and how current is it." On-hand rows sort above in-transit.
- **Empty stores hidden by default.** A store with nothing inbound doesn't show in the default views (keeps the board tight). It's still **findable by search** — searching it surfaces the store with "Nothing inbound yet — as of [last update]," so the answer's always available on demand.

## Discord graphic export — auto-generate the stock sheets you already make

**Reframed after seeing a real example.** You already hand-build polished per-product "Best Buy Stock Sheet" graphics (Best Buy logo, big product title, SKU, price, box art, a 3-column store/quantity/status table, tiled Collectify watermark, yellow accent streaks). The app should **generate that exact sheet automatically** from the allocation you just ingested — one tap, no Photoshop. This is the single strongest version of the feature: it automates work you're already doing every drop.

- **Format:** full per-product stock sheet — **every store**, not a teaser. The app-pull comes from the built-in Collectify branding/watermark, not from withholding data.
- **Everyday (regular allocation) sheet — the primary one:** header (Best Buy logo · product title · box art · **"as of [time]"**) + the multi-column `# · Store / Location · Quantity [status]` table + tiled COLLECTIFY watermark + yellow-on-dark accent. **No price, no SKU, no register-lock date** — those aren't part of the day-to-day sheet.
- **Release-day sheet — a variant:** for official release days (all stores sell the same day), the same generator adds **SKU, price, and the on-sale date**. This is the special case the shared example showed; it's a toggle/variant of the regular renderer, not the default.
- **Status colors:** green **ON HAND**, orange **IN TRANSIT** — our exact two-state model.
- **How:** server-side image generation (Vercel OG / Satori) renders it to PNG. Flexbox + images + custom fonts map cleanly; the multi-column table is flex, the watermark is a tiled layer.

### Data-model addition
The **product catalog gains box art per set** (in addition to canonical name + aliases). **SKU + price are optional fields**, filled only for release-day sheets. Everything is set once when a set enters the catalog (the "add to catalog" step on the confirm screen).

---

## The single most important finding

Your Best Buy data is **structured and gorgeous for automation** — far more than the Target guides. The core posts are **allocation dumps** shaped like this:

```
# Best Buy Current So Cal Allocations AS OF 07/10

**Prismatic Evolutions SPC:**
```Cerritos: 2
Lakewood: 2
Costa Mesa: 3
West Covina: 2 ...```

**Prismatic Evolutions Poster Collection:**
```Cerritos: 76
Costa Mesa: 117 ...```
```

And the two-line grammar is dead simple: **Product → Store → Quantity → Status.** Status is almost always literally **`IN TRANSIT`** (≈200 occurrences) or **`ON HAND`** (≈90). That means "drop the data and it does all the work" isn't a stretch goal — it's the *natural* shape of what you already write. This board's whole thesis works.

---

## Two distinct data layers (both matter)

**Layer 1 — Bulk allocation posts (the backbone).**
Product-by-product, region-grouped, `Store: qty [IN TRANSIT/ON HAND]`. Sometimes with DDC-level insider intel on top ("`5,046` units arrived to So Cal DDC, sent out tonight," "register locks the SKU until July 3," "expect Mon/Tues"). One paste of this = the entire board's expected-shipment picture.

**Layer 2 — Live per-store updates (the money moments).**
Short, freeform, real-time:
- *"BB Orange Chapman is a go for all 3 SKUs! — 15+ Pitch Black ETBs, 6 Ascended ex Boxes, 33 Ascended Booster Bundles — selling to the line."*
- *"BB West Covina confirmed since yesterday! Passing tix for 40 AH Booster Bundles and 7 AH ex Boxes."*
- *"BB Atwater Village is holding AH. Selling Pitch Black though!"*
- *"BB Mission Valley has 20 people in line."*
- *"Best Buy West Covina also sold 1 Prismatic SPC."*

These flip a store from *expected* → *here/selling*, add **line counts**, and carry insider nuance ("holding," "likely employees," "a go").

**Design consequence:** the board needs a **bulk ingest** (Layer 1) *and* a **fast per-store update** (Layer 2). Together they're the entire admin workflow — no hand-editing.

---

## The shipment lifecycle (straight from your status vocabulary)

Richer than a simple expected→arrived, and your words define it:

| State | Your language | Meaning |
|---|---|---|
| **Allocated / In transit** | "IN TRANSIT", "allocated, in transit still" | Coming — expected |
| **On hand** | "ON HAND", "ON HAND NOW! CHECK NOW!" | Physically at the store |
| **Selling / A go** | "is a go", "selling to the line", "passing tix" | Live and moving now |
| **Holding** | "is holding AH" | Has it, not releasing yet |
| **Sold / through** | "sold", "sold through stock" | Done |

Plus modifiers that are worth first-class support:
- **Quantity per product per store** (2 SPCs vs 117 posters — members triage on this).
- **Line count** ("20 people in line," "room for 25+ more").
- **"9" sentinel** — a quantity of 9 means *likely-late / register-locked*, not a real 9. The parser must treat `9` specially (flag as "late/locked," don't show as stock).
- **"likely employees"** — arrived but employees likely grabbed it (low member value).

---

## Store universe (pulled from the posts)

**54 SoCal Best Buys across 7 regions**, cleanly region-tagged in your allocation posts:

- **Los Angeles Area (8):** Atwater Village, Culver City/Washington, Culver City/Westfield Mall, Hawthorne, Montebello, Torrance, West Hollywood, West LA/Sawtelle
- **South of LA (5):** Cerritos, Compton, Downey, Lakewood, Signal Hill
- **SFV / 805 / AV (12):** Burbank, Goleta, Northridge, Oxnard, Pacoima, Palmdale, Porter Ranch, Santa Clarita, Sherman Oaks, Simi Valley, Thousand Oaks, Woodland Hills
- **SGV / IE (7):** City of Industry, Corona, Glendora, Pasadena, Riverside/Tyler, San Bernardino, West Covina
- **High Desert (7):** Beaumont, La Quinta, Menifee, Moreno Valley, Murrieta, Palm Desert, Victorville
- **Orange County (9):** Anaheim, Costa Mesa, Fullerton/Imperial, Irvine/Lake Forest, Mission Viejo, Orange/West Chapman, Tustin Marketplace, Westminster Mall, Yorba Linda
- **San Diego (6+):** El Cajon, Encinitas Ranch, Mira Mesa, Mission Valley, Oceanside, San Marcos (+ Chula Vista/SD, Otay Ranch/SD appear elsewhere)

You also post NorCal + Las Vegas allocations — we'd decide whether to include those regions or keep it SoCal-only (my lean: SoCal to start, structured so NorCal/Vegas can be switched on later).

**Naming caveat (important for the parser):** stores are referred to loosely and with typos — "Bakersfied," "Cotona," "Wesminster," "Costa Msa," "Miliptas" — and Best Buy's internal names differ from yours (you noted "Anaheim" = Orangefair Mall). So the store list needs **canonical names + an alias table**, and the ingest needs **fuzzy matching** (same technique that hit 95%+ on the Target rebuild). I'll build the alias map from the export.

---

## Product / set catalog (from the data)

Consistent set names appear throughout — Prismatic Evolutions (SPC / Poster Collection / Tech Stickers), Ascended Heroes (ex Box / Mega EX Collection / Booster Bundles), Chaos Rising (ETB / 3-Pack Blister / Booster Bundles), Mega Greninja ex Premium Collection, Mega Moonlit Tins, 151 Mini Tins, Lumiose City Mini Tins, Pitch Black ETB, First Partner Illustration Series 2.

Because product is the hero, we build a **product catalog** (canonical name + aliases like "AH ex Box" = "Ascended Heroes ex Box", "SPC" = "Super Premium Collection") + optionally an **image per set** for graphics. The catalog can be mined from the export and grown over time (unknown set → name it once → remembered).

---

## The ingest engine (the star feature)

**Mode A — Paste an allocation post → populate everything.**
1. Admin pastes the raw allocation post into an admin box.
2. Parser walks it: detects **product headers**, then **region headers**, then `Store: qty [status]` lines inside code blocks.
3. **Resolve** each store (fuzzy → canonical) and product (alias → catalog).
4. **Interpret status**: `IN TRANSIT` → Expected, `ON HAND` → On hand; `9` → late/locked flag; capture qty.
5. **Populate** every matched store's card with that product-shipment (product, qty, status), grouped under the store.
6. **Report** what matched, what didn't (unknown stores/SKUs surfaced, never silently dropped), and let the admin confirm before it goes live.

One paste → the whole board's expected picture. This is the maintainability win you asked for.

**Mode B — Quick per-store update.**
A fast box (or even paste one of your short "BB X is a go..." lines) to flip a store to **Selling/On hand/Holding/Sold**, set a **line count**, or tweak quantities — for the live Layer-2 moments during a drop.

**Why this is very achievable here (vs. Target):** the allocation grammar is rigid (`Store: N [STATUS]`), the statuses are a tiny controlled vocabulary, and quantities are explicit. This parses cleanly and deterministically — unlike the Target freeform prose that needed heavy interpretation.

---

## Card design (product-forward)

> **Best Buy — Orange/Chapman** · Orange County · `SELLING` · 30+ in line
> 🟢 **Pitch Black ETB** — 15+ · on hand
> 🟢 **Ascended ex Box** — 6 · on hand
> 🟡 **Ascended Booster Bundles** — 33 · in transit
> *updated 4m ago*

Per-store card lists each product line with quantity + per-product status + (optional) thumbnail, a store-level state (Expected / On hand / Selling / Sold), region, line count when known, and freshness. Compact mode collapses to store + top product + state.

---

## Graphics

Since product is the hero, **set thumbnails** make the board instantly scannable. Feasible via the product catalog (name → image URL). Fast-follow after the core works; I'd confirm an allowed image source before wiring it.

---

## Reuse vs. build

**Reuse wholesale:** Discord gating, the region/board/card UI shell, admin tools, live polling + the scale optimizations, and the **entire security stack** — watermark, OCR canary, audit log, presence, scrape detection. This matters *more* here: DDC-level insider allocation data is a premium leak target, and the canary/watermark protect exactly what makes it valuable.

**Build new:**
- Best Buy store list (54 SoCal, region-tagged) + alias table.
- Product catalog + aliases (+ images later).
- Shipment entry model: per store, a list of product-shipments with qty + lifecycle status + source + line count.
- **The ingest engine** (Modes A + B) — the centerpiece.
- Relabeled, product-forward UI (lifecycle badges instead of High/Med/Low).

---

## Still open (app-level, down the road)
- **The Map tab** — embed Benny's Collectify map vs. build our own store map view.
- **Target "Shipments — landing now" cell** — needs a Target allocation/landing data source we don't have yet.
- **The unified Shipments/Guide/Map nav shell** and folding the Target guide in as board #1 — only once the app itself is on the roadmap.

---

## Suggested build phases (once you approve the shape)
1. **Fork + rebrand + store list + regions** — stand up the Best Buy shell with the real 54 stores.
2. **Shipment entry model + product-forward card UI** — the lifecycle + quantities + line counts.
3. **Ingest Mode A (bulk allocation paste)** — the maintainability centerpiece; parser + store/product resolver + confirm screen.
4. **Ingest Mode B (quick per-store update)** — the live-drop layer.
5. **Product catalog + graphics** — richer, scannable cards.
6. **Security parity + polish** — carry over watermark/canary/audit, tuned for this board.

---

### Bottom line
The Best Buy data is *tailor-made* for the "drop it in and it does the work" board you described. The status vocabulary is a controlled set, the allocations are rigidly structured, quantities are explicit, and stores/regions are already tagged. The hard part isn't feasibility — it's the small stuff (alias/typo mapping, the "9" sentinel, product catalog), all of which I can mine from this same export. This is a very buildable, high-value sibling to the Target board.
