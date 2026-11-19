# How the guide board's predictions work

Plain-English explainer for the owner and for future sessions. Code: `lib/predict.ts` (the math),
`lib/engine.ts` (reads the log, writes the board), `lib/store-profiles.ts` (per-store engine data).

## The daily loop
1. Owner uploads the day's #target export on `/admin/import` (or the old CSV).
2. AI reads the chat and lists each store report: **drop** (real product), **light** (sleeves, blisters,
   Needoh, singles… the store is still owed), or **dry** (checked, nothing). Owner reviews and saves.
3. Saving rebuilds the predictions right away. The nightly rollover (~1am PT) rebuilds again, because a new day
   changes "this week so far".
4. Every run is logged on the import page (what data it used, how many High/Medium/Low today, what changed and why).

Days that were never imported count as **unknown**, not as "no drop".

## How one store's chance is worked out (for one date)
1. **Baseline for that weekday.** Of the recent same weekdays we have imports for (up to 6), how many had a real
   drop. Newer weeks count more. The old June–Sept tally from the engine files is blended in as a weak starting
   point (it over-counts); with only 1 week of data it counts more, with 4+ weeks it barely matters.
2. **Last week's same weekday** ("Mondays follow Mondays"). Last week counts the most. If a store that usually
   drops on this weekday missed last week, it's **owed** (small boost, note: "Owed: missed its usual Monday
   last week.").
3. **This week so far.**
   - Real drop the day before → **lighter** (×0.55), unless it's a near-daily store (Brea Birch, Culver City
     Mall, Whittier Whitwood, 3121 Pasadena, Pico Rivera, Eagle Rock, Costa Mesa Harbor, Gardena, Manhattan Beach).
   - Already had its real drop earlier this week and it's a once-a-week store → lighter (×0.75).
   - Only light stock so far this week → owed (small boost).
   - Thursday/Friday and no real drop yet this week from a weekly store → owed (small boost).
4. **Day locks** (engine §10) override everything: Tustin Marketplace Wed only; San Pedro Wed/Fri; Irvine
   Barranca Fri; Fullerton Malvern Mon (capped, erratic); Rosemead leans Fri + Wed open (capped other days);
   Murrieta Cal Oaks Tue/Thu; Camarillo & Newbury Park Tue; Oxnard Wed + Fri; UC Irvine & USC Village Mon
   (soft); Friday-only stores; SFV stores hold for Friday except Van Nuys Sepulveda, Simi Madera, Glendale
   Galleria, Burbank, Woodland Hills, Camarillo, Newbury Park, Oxnard, 12121 NoHo, Van Nuys Raymer.

Score → chance: **High** ≥ 0.50, **Medium** ≥ 0.28, **Low** ≥ 0.12, below that "Not expected".

## Window
That weekday's real drop times if there are any, else all its drop times, else the engine's cadence window.
Typical time before 9AM = "Opening" (with "7AM"/"8AM" when known); later = a 3-hour range around the usual time.

## What members see on a card
- Chance + window.
- **Prediction** note: general, per weekday, written by the engine's wording rules (no product names, hedged,
  no time range for openings, never "didn't sell").
- **This week** line (amber) only when something shifted: lighter after a drop the day before, owed, etc.
- The week view's log shows the real dated drops / light / dry entries from imports, then the older history.

## What admins also see / can do
- **Why:** the numbers behind the call (e.g. "3/4 recent Mons · dropped last Mon · 1.5 drops/wk · score 0.71").
- Setting a card's chance or window by hand **pins** it: the engine stops changing it. "Use engine" un-pins.
- Admin notes are kept separately and never overwritten. On the first engine run, any hand-written text in the
  old note field was moved to the admin notes; old auto-mined seed text was replaced.

## Tuning
All numbers live at the top of the functions in `lib/predict.ts` (weights, boosts, thresholds, day locks).
The run log + the "Why" line show whether a change helps. As more days are imported, the baseline relies on
real data and the old tally fades out.
