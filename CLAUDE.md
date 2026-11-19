# Collectify Target Guide Board — notes for Claude

Discord-gated Target restock **prediction** guide for SoCal (the sibling of the Best Buy Shipment Board,
`voodoobenji/Shipment-Board`; keep them separate for now). Live at https://guide.collectifyapp.xyz.
Vercel team `collectify` (`team_vYTchJOc7S8N072ks2cQHxR7`), project `collectify-target-board-nwba`
(`prj_A548PgDFqH56rh4pXrZhrkoCS5ui`). Pushing to `main` auto-deploys.

## Owner working style
- Short, direct replies. Say exact file paths you changed. Say plainly when something is unverified.
- Never ask for, print, or commit secrets (`DISCORD_CLIENT_SECRET`, `NEXTAUTH_SECRET`, `CRON_SECRET`,
  `MAP_WEBHOOK_SECRET`, `MAP_GUIDES_API_KEY`, KV tokens). The owner sets them in Vercel.
- Never build a way around the Discord login.
- Important decisions / lessons go into this file (or README.md) in the same push.

## Before every push
- `next.config.mjs` has `typescript.ignoreBuildErrors: true`, so type errors deploy silently.
  Run `npx tsc --noEmit -p .` (must be clean) and `npm run build` (must pass).
- Commit straight to `main`, small focused commits. Never commit `node_modules/`, `.next/`, `.env*` (see `.gitignore`).
- There is no lockfile in the repo; Vercel installs fresh from `package.json` ranges.
- After pushing, check the deploy is READY with the Vercel MCP (`list_deployments`).

## Conventions (from the owner)
- Predictions are **general per weekday**, never tied to a specific day's events. No "hit last week" /
  "sold today" wording on cards.
- Chances are hit-driven (`Chance = High | Medium | Low | null`). `Status = pending | hit | no_hit` only
  (no sold / late / locked states).
- Every card shows Stock Location (`both` reads "TCG + Guest Services") and Item Limit ("Not set" if unset).
- Auto-rollover cron at 08:00 UTC (`/api/cron/new-day`, ~1am PT). Flags and member reports carry over
  the rollover until an admin clears them.
- Dark mode by default, same palette/fonts as the Shipment Board (cohesive Collectify look). Light mode only
  when a member picks it with the toggle; don't follow the device setting.
- Design language = the Shipment Board's: left-aligned header (logo, gold COLLECTIFY, serif "Collectify <gold>Target
  Guide</gold>", small mono subtitle), max-w-3xl single-column cards (rounded-xl, 3px colored left edge), small
  mono uppercase buttons/labels (10px, tracking 0.08em, rounded-lg), GOLD = selected, GREEN only means hit/live
  status, flat background (no scanline/glow), sign-in page = the same card. Keep new UI in this style.
- Watermark is covert on purpose (tiled name + OCR canary lines, `components/Watermark.tsx`).
- No "live" / auto-refresh hype; Discord owns live calls, this board is predictions + outcome log.

## Layout
- `components/BoardView.tsx` main board; `Filters.tsx`, `StoreSearch.tsx`, `StoreRow.tsx` (card),
  `StoreWeekModal.tsx`, `SecurityDashboard.tsx`.
- `lib/types.ts` data model, `lib/kv.ts` all storage (Vercel KV, no in-memory fallback: local dev needs KV env),
  `lib/seed-templates.ts` weekday templates, `lib/stores.ts` store list, `lib/auth.ts` next-auth Discord.
- `types-next-auth.d.ts` augments next-auth's Session/JWT. Don't name it `next-auth.d.ts`: with `baseUrl: "."`
  that file shadows the real `next-auth` package for TypeScript.
- `bestbuy-shipments-kit*`, `*-plan.md`, `guide-rebuild-review.md` are old planning docs, not app code.

## Guide engine (Nov 2026) — see docs/GUIDE_ENGINE_PLAN.md
- Goal: the site replaces the hand-posted Discord guides and updates itself from the daily export the owner imports.
  Engine rules: `docs/COLLECTIFY_GUIDE_ENGINE.md` (wording rules §5, prediction logic §6, day locks §10, traps §11).
- `lib/store-profiles.ts` = engine data per board store id + aliases; `lib/drops.ts` = drops log types, name resolver,
  light-stock check; `lib/exportParse.ts` = reads both Discord export formats in the browser (fflate for zips).
- `/admin/import` (`components/ImportClient.tsx`): export → `/api/admin/import-export` (Claude Opus 5.5, structured
  output, server-side fallback, needs `ANTHROPIC_API_KEY` set by the owner in Vercel; it is saved there as lowercase `anthropic_api_key`, the route reads both) → review → `/api/admin/drops`.
  Drops are stored one key per day (`drops:<YYYY-MM-DD>`) + `drops:days` index. Kinds: drop / light / dry.
- Light stock (sleeves, blisters, Needoh, singles...) is never a drop; the store stays owed.
- Store list: `STORES` = what members see (no San Diego, no hidden duplicates); `ALL_STORES` = everything.
  Store decisions are in docs/GUIDE_ENGINE_PLAN.md.
- Predictions must adapt: weekday baseline + last week's same weekday + this week so far (see the plan).

## Local preview
- No dev auth bypass (don't add one). To see the UI, add a temporary uncommitted page that renders
  `BoardView` with a board built from `SEED_TEMPLATES` + `EMPTY_ENTRY`, run `npx next dev`, screenshot with
  Playwright, then delete the page.
