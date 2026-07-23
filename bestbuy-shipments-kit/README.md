# Collectify · Best Buy Shipments — build kit

Everything a fresh chat needs to build the **Best Buy Shipments** board. Read this first, then `bestbuy-shipments-plan.md` for the full reasoning.

## What we're building
A Discord-gated board where members see **what Pokemon TCG stock is shipping to Best Buy stores** (in transit vs on hand + quantity), and admins **paste raw allocation posts** that auto-populate it. It also **auto-generates the branded "stock sheet" graphics** admins currently make by hand for Discord.

It's a sibling to the existing **Collectify Target board** (the guide). Reuse that codebase's patterns.

## Tech stack (same as the Target board)
- Next.js 14 (App Router), TypeScript, TailwindCSS (CSS-variable theme, dark default)
- Vercel KV (Upstash Redis) for storage
- next-auth with Discord OAuth for gating
- Deploys on Vercel from GitHub (user pushes via GitHub Desktop; Vercel auto-builds)
- NOTE: `next.config.mjs` has `typescript.ignoreBuildErrors: true` — type errors won't fail the build, so verify logic yourself.

## Locked decisions (do not re-litigate)
1. Build **incrementally** — standalone board now; folds into a unified Shipments/Guide/Map app later.
2. Coverage: **all regions** — SoCal (LA, South of LA, SFV/805/AV, SGV/IE, High Desert, OC, SD) + Central CA + NorCal + Las Vegas. Store list in `data/bestbuy-stores.json` (66 seeded; grows via ingest).
3. Refresh: **auto-expire** ~5 days per shipment unless refreshed by a new paste. No daily rollover.
4. Layout: **product view + store view, toggle**. Default = product view.
5. Product catalog: **mined + grows** (unknown set named once on confirm screen).
6. Set images: **one box-art per set**, added once.
7. Access: **same Discord server, role-gated** (needs `guilds.members.read` scope or a bot to read roles — see gotchas). For a fast first ship it's fine to gate like Target (any member) and add the role check after.
8. Maintenance: **paste + light manual** (mark hidden / tweak a line).
9. Ingest flow: **quick confirm, then publish** (preview matches, flag + map unmatched, one-click publish).
10. Card signal: **In transit / On hand only** + "updated X ago". No sold, no late/locked, no line counts (that stays in Discord).
11. Empty stores **hidden by default**, findable by search ("Nothing inbound yet — as of [update]").
12. Discord graphic: **auto-generate the stock sheet** (Vercel OG/Satori). Everyday sheet = no price/SKU; release-day variant adds SKU+price+on-sale date. Admin picks product/region/digest per post.
Name: **Collectify · Best Buy Shipments**. Admins: same list as Target.

## Data model (suggested)
```ts
type ShipStatus = "on_hand" | "in_transit";
interface Shipment { storeId: string; productId: string; qty: number; status: ShipStatus; updatedAt: string; }
interface Product { id: string; name: string; aliases: string[]; boxArt?: string; sku?: string; price?: number; }
interface BestBuyBoard { shipments: Shipment[]; products: Record<string, Product>; version: number; }
```
- On read, drop shipments whose `updatedAt` is older than 5 days (auto-expire).
- Product view: group by product, newest product first (max updatedAt), split on_hand above in_transit.
- Store view: group by store region; each store lists its shipments (on_hand first). Hide stores with zero shipments unless searched.
- Ingest publish = upsert shipments with `updatedAt = now`.

## Files in this kit
- `bestbuy-shipments-plan.md` — full plan, decisions, data findings, all four screen designs.
- `data/bestbuy-stores.json` — 66 seeded stores (id, name, region, regionLabel).
- `reference/parser-notes.md` — the allocation parser algorithm, status vocab, alias table, product catalog seeds.
- `reference/design-spec.md` — palette, fonts, and per-screen layout so it matches the Target board's look.

## Build order (fastest path to something real)
1. **Shell + store list + regions** — stand up the board route with the 66 stores grouped by region (reuse Target's region-section UI).
2. **Data model + KV** — board get/set, auto-expire on read.
3. **Ingest parser + confirm screen** — paste -> parse (see parser-notes) -> preview -> publish. THIS is the core value.
4. **Product view + store view** (toggle) — see design-spec.
5. **Member features** — Favorites, Search, Near Me (port from Target). No compact mode.
6. **Stock-sheet graphic generator** (Vercel OG/Satori) — the auto-generated sheet.
7. **Security parity** — port watermark + OCR canary + audit/presence from Target.
8. **Role-gated auth** — add the Discord role check.

## Gotchas
- **Store/set matching** must be fuzzy + alias-backed (typos + BB internal names). Unmatched -> confirm screen -> becomes a permanent alias.
- **Role-gating**: OAuth `guilds` scope gives membership but NOT roles. To check a role, add `guilds.members.read` scope and call `GET /users/@me/guilds/{guildId}/member`, or run a bot. Ship without it first if needed.
- **Satori** (image gen) supports flexbox + images + custom fonts only — the stock-sheet layout is flex-friendly; load the fonts explicitly.
- Reuse the Target board's KV helpers, next-auth config, theme system, and security components rather than rewriting.
