# Guide engine on the website — plan

Goal (owner, Nov 2026): stop posting the daily Discord guides. Members use the guide site, which updates itself
from the day's activity export that the owner imports. The engine rules live in `docs/COLLECTIFY_GUIDE_ENGINE.md`.

## Stages
1. **One store list (done).** `lib/store-profiles.ts`: the engine's 160 stores keyed by board store id (cadence,
   window, open time, day locks, Friday-only, heavy watch, frozen weekday tally) + nickname aliases.
   `resolveStoreName()` in `lib/drops.ts`. Not on the board yet: Oxnard (Friday store), Perris (need addresses).
2. **Daily import (done, AI part untested until ANTHROPIC_API_KEY is set).** `/admin/import`: upload the export
   (.zip/.html, Discrub layout or the compact exporter, all parts) → browser extracts messages → Claude Opus 5.5
   lists each store report as drop / light / dry → admin reviews → saved per day (`drops:<date>` + `drops:days`).
   Also imports the old drops-log CSV. Light stock is never a drop (engine §6).
3. **Predictions rebuild themselves (done, see docs/HOW_PREDICTIONS_WORK.md).** Per store per weekday:
   - baseline: long-run hit rate on that weekday + usual window/open time (frozen tally only fills gaps);
   - last week's same weekday ("Mondays follow Mondays"): dropped → leans up; missed its usual day → owed;
   - this week so far: big drop the day before → lighter (unless NEAR_DAILY); went early in the week → lighter later;
     hasn't gone yet → leans up;
   - day locks (Tustin Marketplace Wed, SFV holds for Friday, San Pedro Wed/Fri...) and the holiday playbook.
   Cards: general note + a short "this week" line only when something shifted. Wording follows engine §5
   (no product names, hedged, no time ranges for openings, never discouraging). Admin can still override any card.
   Recompute on import and on the nightly rollover; cache the result (keep KV transfer low).
4. **Views:** tomorrow's guide the night before; Right Now = hit list; weekend view; release-day switch (7AM/8AM).
5. **Later:** UPS sort-sheet photos → shipment size tags.

## Costs (estimated from the example exports, 120–580 messages/day)
AI read of one day's export ≈ $0.15–0.40 on Claude Opus 5.5 → ~$5–12/month. The import page shows the real cost.

## Store list decisions (owner, Nov 2026)
- Address-based matches confirmed (Bonnie Brae = Westlake LA, Silverlake = Dillon St, Koreatown = Virgil Ave,
  Glassell Park = T189 on Eagle Rock Blvd, Beverly Center = Beverly Blvd, UC Irvine = Campus Dr, USC Village = Hoover).
- Oxnard: one store, Oxnard Collection / RiverPark (T087, 2850 N Oxnard Blvd), Wednesday opener + Friday.
- Perris: new store T196, 1688 N Perris Blvd (opened July 2026). Coordinates approximate.
- Carson Mall (T179, Avalon) and Carson Sepulveda (T034) are two stores; T033 was a duplicate (hidden).
- Westminster Beach (T176, Beach Blvd) and Westminster Mall (T094); T095 was a duplicate (hidden).
- Eagle Rock = T003 on Colorado Blvd; T189 renamed Glassell Park.
- Ontario Mills (T134, 4200 E 4th) and Ontario Baker (T135, 1670 E 4th, 4th & Baker) are two stores; T136 hidden dup.
- Redondo Beach = Kingsdale (T175); T031 was a duplicate (hidden). Rolling Hills (T032, 43 Peninsula Center) is right.
- Santa Ana: 17th/Grand T120 = 1330 E 17th St, College T119 = 1441 W 17th St, Bristol T186 = 3300 S Bristol St;
  T167 "17th/Bristol" was a duplicate (hidden).
- San Diego stores are hidden for now (`STORES` filters region SD; `ALL_STORES` keeps them).

## Still open
- Engine regions: USC Village listed as OC (it's LA); Chino Grand/Montclair as SGV.
