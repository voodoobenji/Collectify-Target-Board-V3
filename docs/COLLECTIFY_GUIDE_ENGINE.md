# Collectify SoCal Target Guide — Engine Spec

Everything needed to generate the daily Target guides, hit lists, and weekend guides automatically. This is the brain; `collectify_stores.json` is the store database; `collectify_drops_log.csv` is the running confirmed-drop feed. Feed all three to the generator.

---

## 1. What this system does

Every day it produces a **Target restock guide** for the next day and, on demand, **time-windowed hit lists**, predicting which SoCal Target stores will stock Pokémon/TCG product and when. Predictions come from three layers, in priority order:

1. **Confirmed recent drops** (`collectify_drops_log.csv`, last ~4 weeks) — hard data, trust first.
2. **Delivery intel** (UPS sort sheets, when available) — confirms which stores get a shipment that day.
3. **Frozen cadence tally** (`weekday_hits` in the store DB, June–Sept) — soft signal, OVER-counts, use only to fill gaps and order stores.

The output is Discord-ready text, posted the **night before** the day it covers.

---

## 2. Data sources & model

- **`collectify_stores.json`** — the roster. Per store: `name`, `region`, `cadence` label, `window` (AM 7-9 / LateAM 9-12 / PM 12-4 / Eve 4-9), `weekday_hits` (frozen tally), `confirmed_recent` (distinct days hit in the log), plus optional `open_time`, `address`, `aliases`, `day_lock`, `heavy_watch`, `friday_only`.
- **`collectify_drops_log.csv`** — one row per confirmed drop. Columns: `date, weekday, store, region, window, time, items, notes`. **Append every day** from the activity export. This is the growing dataset; `weekday_hits` is a frozen seed, not the source of truth.
- **Activity export (Discrub / new format)** — the Discord channel export (HTML). Parse into (store, timestamp, content) messages. The new export format splits a day into time-chunked parts (part1of2, etc.) — grab all parts, they do not overlap.
- **UPS delivery sort sheets** (photos) — packages routed to each Target by address. Count of rows per address = shipment size inbound that day. Match by ADDRESS not street name (see §11 traps).

`weekday_hits` counts OVER-count: the keyword parser counted "no poke / holds back / keep eyes / line forming" as drops. They are a soft ordering signal only. `confirmed_recent` from the log is the real evidence.

---

## 3. Regions & Discord ping map

Five areas. Ping role IDs go ABOVE each code fence (outside it) so they tag.

| Area | Ping role IDs |
|---|---|
| SGV + IE | `<@&1425166052496642260>` `<@&1536831574551560304>` |
| LA / WLA | `<@&1425166183841140873>` `<@&1425625697141133334>` |
| South Bay / South LA / LBC | `<@&1425625697141133334>` `<@&1425166140966965248>` |
| SFV / 805 | `<@&1425165995575742634>` `<@&1488964203103522997>` |
| OC / LBC | `<@&1425166056766439528>` |

Do NOT add role pings at the end of a post (Anthony adds those himself). Per-section pings in weekend/hit-list formats are fine.

---

## 4. Guide types & formats

### 4a. Normal-day guide (3 parts)
- **Part 1** = SGV + IE | **Part 2** = LA/WLA + South Bay | **Part 3** = SFV/805 + OC
- Each part is one Discord message, **under 4000 characters** (hard ceiling). If a part exceeds it, split at a region seam, never drop content.
- Each part: `# **Target Guide – MM/DD (Part N)**`, then a bold intro paragraph on Part 1 only, then per region: `**Region Name:**` then a ```` ``` ```` fenced block of store lines, one blank line between each.
- Store line: `Store Name - note`. The ` - ` separator is the ONLY dash; no dashes inside the note.
- Closer paragraph after the last part.

### 4b. Release-day guide (4 parts) — DIFFERENT format
- 4 parts split by region, and within each region stores are grouped under **7AM** and **8AM** opening-time buckets.
- On release days every store sells at open — frame every store as an opening drop, no hedging, no "may not sell." Where a later wave is likely add "swing back for a second drop around X."
- Do NOT reference previous release-day patterns in the text; it reads as our own predictions.

### 4c. Weekend guide (concise, one post)
- Title `**Target Weekend Guide (MM/DD – MM/DD)**`, short intro, then five area blocks: region header, ping IDs, then a ```` ``` ```` fence of weekend-proven stores only. Em-dash `—` separators in this format.
- Only stores with a real Sat/Sun track record. Reference this week's status ("owed all week", "went Friday so lighter") — day references ARE allowed in weekend guides.

### 4d. Hit list (time-windowed, on demand)
- Title `**Shipment hit list, [window]!**`, short intro, then per area: ping tag, then a ```` ``` ```` fence of stores, one blank line between each.
- Only stores whose window falls in the requested time range. Tag confirmed-shipment stores (from delivery sheets) with size (BIG / solid / lighter).
- Deliver as a file so the backtick blocks paste intact.

### 4e. Recap / index post
- Link each part with a masked markdown link `[Part 1 here](url)` (one per part, labeled by region), close with one wrap-up paragraph.

Formatting constants: no emojis anywhere. Title is a single `# **Title**` line; no other line uses `#`. Never put spaces between triple backticks. Keep each message under 4000 chars.

---

## 5. The wording rulebook (apply to every store line)

**Banned words/phrasing:**
- Never "truck" or "vendor" — say "shipment" for the delivery and "drops / gets a shipment / stocks" for the act.
- Never "sits / sitting / has X sitting / still has it / still going" — stores sell, they don't hold product standing.
- Never "doors" phrasing for openers ("get to the doors") — say "be there before open."
- Never "today" or "yesterday" in store lines — the guide posts the night before, so name the day or phrase it day-neutrally. (Weekend guides are the exception — day references allowed there.)

**Never discourage:**
- Never write a store "didn't sell / was dry / only put out light items / never dropped" on a prior day. If it didn't hit, give CADENCE only. Most-negative allowed framing is "due for a drop" / "owed."

**No specific items in store lines:**
- Product names (UPC, ETB, sleeves, bundles, 30th Figure Collection, EB-05, etc.) go in the INTRO only, never in a store's standing line. The generic word "Poke" is fine. Pattern lines describe BEHAVIOR, not products (products rotate weekly).

**Hedge unless near-certain:**
- Soften any line that asserts a store WILL drop at a set time: "Goes at open" → "can go", "hits midday" → "can hit / tends to / usually / leans". Keep genuine near-locks assertive: overnight camps (Tustin Marketplace), factual 7AM/8AM open times, near-daily frequency stores.
- Predictions are tendencies. Put "if it runs" on shipment-dependent calls.

**Openings get no time range:**
- Write just "open" / "opening" — only give a clock window for a restock at 9AM or later. Anything 7-8:45AM counts as an opening drop. You can always add "check at open" to any store, then layer its cadence window on top ("check at open then 2 to 4").

**Anti-copy-paste (critical):**
- Vary wording store to store — rotate verbs and sentence structure, never stamp the same template ("check at open then X") on every line.
- Each new guide must NOT reuse the previous same-type guide's phrasing. Diff every new guide against the prior same-type guide and reword any note that is identical OR shares a 6-word run. Target: zero identical, zero echoes. It should read like it was retyped fresh from memory.
- Keep notes plain and flat, how a collector types ("A strong opener, be there for open then a late morning look"). No flowery / AI-sounding prose.

**Anthony's edit style to emulate:** caveat tails like "usually", "if nothing at open", "has been more sporadic", "heavy eyes can go earlier"; conditional/hedged phrasing on uncertain windows.

---

## 6. Prediction logic

**Build order each day:**
1. Start from the full roster for the target weekday (not just who pinged), so regulars never get dropped.
2. Pull each store's window from its cadence.
3. Overlay this week's confirmed data: sold the day before = lighter (soften); dry/owed = elevated.
4. Overlay delivery intel if available (shipment inbound = elevate, tag size).

**Cross-check (every guide, before posting):** compare the draft against the prior day's confirmed drops. Any store that put out a real drop the day before must NOT be a strong next-day call or carry a confident window — soften to lighter odds, UNLESS it's a confirmed near-daily store (Brea Birch, Culver City Mall, Whittier Whitwood, 3121 Pasadena, Pico Rivera, Eagle Rock, Costa Mesa Harbor; Gardena reloads; Manhattan Beach holds huge). A store that ran its WHOLE vendor haul (big drop) = basically done, a light pass, not just "lighter."

**Light stock is NOT a drop** — booster sleeves, blister packs, Needohs, squishies/squeezes, dumplings, singles, premium collections (Mega Zygarde ex, Mega Greninja — low demand, can sit). A store putting these out is still OWED the real drop. Never log these as a confirmed drop or call them "sold."

**Trust recent over old cadence (last 4 weeks):** when the frozen `weekday_hits` and recent confirmed data disagree, go with recent and reframe. Never label a store a "[weekday] regular/heavy store" off the old tally alone if recent same-weekday data doesn't back it.

**Release-week windows don't transfer:** "sold at open" on a 30th/release day is a release artifact, not the store's normal window. Keep an opening call on a normal day only if the roster cadence is genuinely AM, that week's own day-before data showed it opening, or a store note says it opens. Otherwise put the store back on its real window. Release days tell you WHICH stores drop and midday-and-on behavior, not opening times.

**Read the full thread, last word wins** — a store can open with sleeves / "sports only" then drop the real thing hours later. Verify both a "sold" claim and an "owed/dry" claim. Don't carry a same-day "sold" claim from a prior guide into a new one; re-verify against the current export. A single shipment stop or one-off drop does NOT make a store a new regular.

---

## 7. Delivery-sheet method (UPS sort → shipment prediction)

When sort-sheet photos are provided (early-AM package routing by store address):
1. OCR / read each row: Route, Center, Address, Consignee, count the rows per address = packages inbound that store today.
2. Match address → store (see §11; street names are traps — match the exact address). Confirm uncertain ones with Anthony.
3. Size: ~9+ = BIG, ~6-8 = solid, ~3-5 = moderate, ~1-2 = light. "Forecast" rows = expected, "Package" rows = confirmed; count both for total inbound.
4. Stores with inbound shipments go on the hit list tagged by size, framed "shipment landing." These are the strongest same-day signal we have — a confirmed shipment beats cadence.
5. The sheets only cover the delivery centers in the photos (e.g. Hermosa/Harbor = South Bay, West LA/Atlantic/Manchester = LA). For other areas, fall back to cadence. Grabbing sheets for all centers would let us tag the whole board.

Future: log inbound shipment counts per store alongside drops to learn which stores convert a shipment into a Poke drop vs. sit on it.

---

## 8. Daily workflow

1. Receive the day's activity export (all parts). Parse to (store, timestamp, content).
2. Identify confirmed Poke/OP drops (real product, not light stock). Append each to `collectify_drops_log.csv` with date, weekday, store, region, window, time, items, notes.
3. Build the next day's guide: roster for that weekday → windows → overlay recent data → cross-check vs today's drops → apply all §5 rules.
4. Run the audit (§9). Reword until the diff is clean.
5. Deliver as a .txt file (so markdown/backticks paste intact).
6. Fold any of Anthony's posted edits back into the roster/rules (the corrections log).

---

## 9. Automated audit checklist (run before every post)

Parse the draft into `{store: note}` and verify:
- [ ] **Echo check:** 0 notes identical to the prior same-type guide; 0 notes sharing a 6-gram with it. (Also check the immediately-prior guide of any type.)
- [ ] **Banned words:** no `truck|vendor|sitting|sits|doors` (case-insensitive).
- [ ] **No "today"/"yesterday"** in store lines (normal/hit-list; allowed in weekend).
- [ ] **No specific items** in store lines (UPC, ETB, sleeve, bundle, tin, 30th, EB-05, TS-03, figure collection, charizard, ditto, booster, blister).
- [ ] **Openings have no time range** (just "open"/"opening"; clock windows only 9AM+).
- [ ] **Char limit:** every part < 4000.
- [ ] **No duplicate store names.**
- [ ] **Cross-check:** no store that sold the prior day is framed as a strong opener (unless near-daily).
- [ ] **Day-locked stores correct** for the weekday (§10).
- [ ] **Code fences balanced**, no spaces between backticks.

---

## 10. Day-locked / special cadence

- **Tustin Marketplace** = WEDNESDAY morning only (camps Tue night for Wed open). Never on Tuesday. Light/no check other days.
- **San Pedro** = Wednesday & Friday (not Tuesday anymore).
- **Irvine Barranca** = Friday (every Friday).
- **Fullerton Malvern** = Monday only, erratic — never on Tue/Wed.
- **Rosemead** = Friday-leaning + can go at open Wednesdays ("Can go at open on Wednesdays, be there early"); light other days. Not Thursday.
- **Murrieta Cal Oaks** = Tue/Thu (random lately).
- **Camarillo** = Tuesday-morning opener. **Newbury Park** = Tuesday. **Oxnard Collection (RiverPark)** = Wednesday-morning opener (separate from the Friday Oxnard).
- **UC Irvine, USC Village** = Monday stores (newer to TCG); don't default onto Thu/Fri.
- **SFV holds its real drop for FRIDAYS.** On non-Friday guides only these SFV carry midweek: Van Nuys Sepulveda, Simi Madera, Glendale Galleria, Burbank, Woodland Hills, Camarillo (Tue), Newbury Park (Tue), Oxnard Collection (Wed), 12121 NoHo, Van Nuys Raymer (leans Thu). All other SFV = Friday only (Mission Hills, Sylmar, Topanga, Simi Cochran, Granada, Pacoima, Northridge Corbin/Sherwood, Encino, Valencia, Oxnard, Golden Valley, Fallbrook, 11051 NoHo, Moorpark, Northridge Sherwood).

**Open times:** 777 Pasadena opens 7AM Fridays, 8AM other days — store open times vary by day, flag 7AM vs 8AM when building. Verified 7AM: 3535 Cienega, Torrance, Burbank Empire, Santa Ana Bristol, Buena Park, Costa Mesa Harbor, Garden Grove Harbor, Westminster Beach, Long Beach Bellflower, USC Village, Rancho Cucamonga, Murrieta Clinton Keith, Hesperia Main, Apple Valley Hwy 18. Verified 8AM: Cal Oaks, Jess Ranch, Corona, Fontana Slover/Summit, Redlands, San Bernardino, Moreno Valley.

---

## 11. Known traps & do-not-confuse

**Address traps (street name ≠ the city we use):**
- 2169 W Redondo Beach Blvd = **Gardena** (not Redondo).
- 1601 Kingsdale Ave = **Redondo Kingsdale** (the real Redondo one).
- 5700 Firestone Blvd = **South Gate** (#190), NOT Norwalk Firestone.
- 14310 Hawthorne Blvd = **Lawndale**, not a Hawthorne store (2700 W 120th = Hawthorne 120th #2280).
- 3433 Sepulveda Blvd = **Torrance Del Amo**. 1200 N Sepulveda = Manhattan Beach. 651 W Sepulveda = Carson Sepulveda. 8900 S Sepulveda = Westchester. (Van Nuys Sepulveda is SFV.)
- 220 N La Brea Ave = **Inglewood La Brea** (#3343).
- 1621 S Alameda St = **Compton** (#2275).

**Same store, one entry:**
- Van Nuys Sepulveda = Sherman Oaks (NEVER list Sherman Oaks separately — it is not its own store).
- Apple Valley Hwy 18 = CA-18 = Apple Valley North (store 2260, 7AM). Apple Valley Jess Ranch (store 939, 8AM) is a DIFFERENT store.
- Santa Ana Bristol = South Coast Plaza.

**Two different stores (keep separate):** Burbank Empire (1800 W Empire, 7AM) vs Burbank West/Hollywood Way (1033 N Hollywood Way); Cerritos South vs Cerritos Bloomfield; Fullerton Yorba Linda vs Yorba Linda Blvd; Santa Ana 17th/Grand vs Santa Ana College vs Santa Ana Bristol; Oxnard (Fri) vs Oxnard Collection/RiverPark (Wed); Huntington Beach Adams vs Garfield.

**Region fixes:** 3535 Cienega = LA (not SGV). Rancho Santa Margarita = OC (not IE).

**Mention-only / low-confidence (don't list as real calls):** San Juan Capistrano, Palm Desert, La Quinta.

**Out of area — never list:** San Leandro, Dublin, Rancho Cordova, San Diego (Balboa/Mission Valley/Encinitas/Santee), El Paso, San Antonio/Blanco TX, Hawaii, Tempe AZ, Las Vegas (Tenaya/Spring Mountain/N Decatur/Silverado).

**Roster is built from stores that POST** — sweep the last two weeks of the drops log for any store name before finalizing; small/rare stores (Silverlake, HB Adams) slip through otherwise.

---

## 12. Holiday playbook

- Federal-holiday Mondays are the quietest (no UPS, vendors off) — anything selling is held/employee-push stock. Keep the holiday guide SHORT, only proven held-stock stores. Known pushers: Upland, Brea, 11051 NoHo, San Dimas, Eagle Rock, Westchester, La Verne, Sawtelle, Santa Monica, Cerritos South.
- The DAY AFTER a holiday = catch-up, backlog lands, cast a wide net.
- Veterans Day (Wed) and other midweek holidays: vendors may be off but stores still stock their own shipments — lean on self-stocking stores, frame the day as live.

---

## 13. Voice & quality bar

Plain, flat, how a SoCal collector types. Confident but hedged where uncertain. No emojis, no AI-sounding prose, no copy-paste templates. The finished guide should read like Anthony retyped it fresh from memory — because members compare day to day, and repetition or robotic phrasing is the fastest way to lose them.
