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

## Where the baseline comes from: your posted guides
Most stores don't get a post every day, so the baseline comes from the guides themselves. `lib/guide-baseline.ts`
is generated from 3 months of posted guides (8/21–11/18/2026: 50 daily-guide days + weekend guides, 6,247 store
lines). For every store and weekday it records:
- how often the store was in that weekday's guide and how strongly it was called (0–1). "Heavy / strong / one of
  the best / expect a line / its day" counts full, "a check" 0.7, "random / can / possible" 0.55, "lighter /
  leftover / if it runs" 0.45. The last 4 weeks count 1.5x.
- the usual window the guides gave ("opening", "11 to 1", "midday", "evening 5 to 7"…).
- habits mentioned in 2+ guides: check guest services, goes in waves, lines form early, limits, TCG aisle, VQ /
  tickets, holds stock back. These are added to the card note.

The guides list most stores most days, so the score is stretched: on weekdays roughly the top ~10–15% land High
(more on Fridays); weekend guides only list weekend stores, so being on them counts for more.
To refresh with a newer export: `python3 -I scripts/extract-guides.py <export index.html> guides.json` then
`npx tsx scripts/build-guide-baseline.ts guides.json`, check, commit, push, then "Rebuild predictions now".

## How one store's chance is worked out (for one date)
1. **Baseline for that weekday:** the guide baseline above (stores never in the guides fall back to the old
   June–Sept tally). It counts like 4 weeks of evidence.
2. **Imported drops for that weekday:** the recent same weekdays with imports (up to 6, newest count most) move it
   up or down. A store nobody posted about on a thinly imported day isn't proof it didn't drop: its "no" counts
   in proportion to how well that day was covered (60+ entries = full weight).
3. **Last week's same weekday** ("Mondays follow Mondays"). A regular counts as **owed** only with evidence:
   someone posted it was dry / light stock, or that day was well covered (45+ entries).
4. **This week so far.**
   - Real drop the day before → **lighter** (×0.55), unless it's a near-daily store (Brea Birch, Culver City
     Mall, Whittier Whitwood, 3121 Pasadena, Pico Rivera, Eagle Rock, Costa Mesa Harbor, Gardena, Manhattan Beach).
   - Already had its real drop earlier this week and it's a once-a-week store → lighter (×0.75).
   - Only light stock so far this week → owed (small boost).
   - Thursday/Friday, nothing yet this week from a weekly store, and every earlier day this week imported → owed.
5. **Day locks** (engine §10) override everything: Tustin Marketplace Wed only; San Pedro Wed/Fri; Irvine
   Barranca Fri; Fullerton Malvern Mon (capped); Rosemead leans Fri + Wed open (capped other days); Murrieta Cal
   Oaks Tue/Thu; Camarillo & Newbury Park Tue + Fri; Oxnard Wed + Fri; UC Irvine & USC Village Mon (soft);
   Friday-only stores. A locked store on its own day is at least Medium.
6. **Valley (SFV/805) rule (owner):** Valley stores drop big on Fridays. On the Friday guides most weeks → High on
   Friday. Other days: at most Medium. Valley stores other than Van Nuys Sepulveda, Simi Madera, Glendale
   Galleria, Burbank, Woodland Hills, Camarillo, Newbury Park, Oxnard, 12121 NoHo, Van Nuys Raymer are Friday-only.

Score → chance: **High** ≥ 0.50, **Medium** ≥ 0.28, **Low** ≥ 0.12, below that "Not expected".
Typical result: ~12–25 High on Mon–Thu, ~45 on Friday (about half Valley), ~13 on Saturday.

## Window
Two or more real drops on that weekday → their usual time; else the window the guides gave for that weekday;
else one real drop's time; else the guides' window on any day; else the engine's cadence window.
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
- Admin notes are kept separately and never overwritten by predictions. Notes read like the guides: any sentence
  tied to a specific time (dates, "since July", "last week", "today", "overdue"), history phrasing ("Has sold …
  before") or product names is dropped (`lib/cleanNote.ts`), on display and whenever the engine writes a card.
  Lasting tips ("Holds back stock, check 8AM then circle back") stay.

## Tuning
All numbers live at the top of the functions in `lib/predict.ts` (weights, boosts, thresholds, day locks).
The run log + the "Why" line show whether a change helps. As more days are imported, the baseline relies on
real data and the old tally fades out.
