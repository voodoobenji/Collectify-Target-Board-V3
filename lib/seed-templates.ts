import type { Chance } from "./types";

export interface SeedEntry {
  chance: Chance;
  window: string;
  reason: string;
}

export const SEED_TEMPLATES: Record<string, Record<string, SeedEntry>> = {
  "monday": {
    "T054": {
      "chance": "Medium",
      "window": "7-10:30AM",
      "reason": "5% hit rate (2/37 Mondays), steady trend. Typically 7-10:30AM. Latest (2026-04-27): Basically exact same time as Weho above! Always either Monday/Tuesdays sells a bit more fairly here but can go quicker  ```"
    },
    "T053": {
      "chance": "Medium",
      "window": "8-11AM",
      "reason": "49% hit rate (18/37 Mondays), decreasing trend. Typically 8-11AM. Latest (2026-02-23): Will usually drop later in the week here"
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (37/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Opening look is still the move then circle back 9:30-12 or later in the afternoon also has not dropped series 2!"
    },
    "T056": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "70% hit rate (26/37 Mondays), decreasing trend. Typically Opening. Latest (2026-04-27): Check primarily second half of the day 1-3 or 6-8 here. Can check around 9ish am but may go later if it drops"
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (37/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): KEEP THIS IN ROTATION ALL DAY LONG. One of the strongest allocation stores around and they rarely unload everything at once. Opening is mandatory and 12 or 2pm"
    },
    "T025": {
      "chance": "Medium",
      "window": "",
      "reason": "54% hit rate (20/37 Mondays), decreasing trend. Latest (2026-06-15): Main focus 8-11 for a shipment to land"
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (36/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Product is here you just need the timing. Best windows remain 8-10, 12-2, and 5-7:30. Sold a bit today in the morning but like always they push and hold back items themselves"
    },
    "T024": {
      "chance": "Medium",
      "window": "",
      "reason": "65% hit rate (24/37 Mondays), decreasing trend. Latest (2026-06-22): Pair these together. Morning checks can pay off but don't sleep on the afternoon window around 3-6 when both stores have hit before. Gardena specifically is overdue and will have m"
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "95% hit rate (35/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Has lately moved back to Monday\u2019s! Heads will be here prior to opening and wait it out. If you see vendor line will stay until they\u2019re done as Poke sometimes gets stocked last"
    },
    "T001": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (36/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Early checks remain strongest. Opening through late morning then another pass around 12-3 HAS ITEMS TO DROP BE READY"
    },
    "T012": {
      "chance": "Medium",
      "window": "",
      "reason": "24% hit rate (9/37 Mondays), decreasing trend. Latest (2026-01-12): May be later on in week here"
    },
    "T013": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "84% hit rate (31/37 Mondays), decreasing trend. Typically Opening. Latest (2026-06-15): Routes have been strange. Easy store to forget but one of the better backup plays if other routes fail. Usually has been Monday or Tuesday typically mid day or a bit after"
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "92% hit rate (34/37 Mondays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-22): Employee push territory. Opening remains the highest percentage play but continue checking later because they don't always unload everything at once. ```"
    },
    "T009": {
      "chance": "Low",
      "window": "Opening",
      "reason": "86% hit rate (32/37 Mondays), decreasing trend. Typically Opening. Latest (2026-06-22): Sneaky option tomorrow. Look for held back inventory and don't be shocked if it sells either opening or mid day. Usually Tuesdays but tends to hold back stock on release days"
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "27% hit rate (10/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-22): Check morning time solid check as store can push a bit themselves."
    },
    "T018": {
      "chance": "Medium",
      "window": "",
      "reason": "57% hit rate (21/37 Mondays), decreasing trend. Latest (2026-06-22): Vendor hit last week so keep eyes and checks from 1-4 usually not the morning stop"
    },
    "T007": {
      "chance": "High",
      "window": "Opening",
      "reason": "78% hit rate (29/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Tends to sell Mondays either through store or vendor! Look for a morning drop or afternoon sneakily and expect employees to act clueless. Last week skipped morning and pushed at no"
    },
    "T138": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "51% hit rate (19/37 Mondays), decreasing trend. Typically Opening. Latest (2026-02-23): Check in tomorrow about 8-11!  Can be smaller stock check by guest services and ask"
    },
    "T132": {
      "chance": "High",
      "window": "",
      "reason": "78% hit rate (29/37 Mondays), steady trend. 1 confirmed actual hit reported in chat. Latest (2026-06-22): Both stores continue receiving early week inventory. Morning checks are strong but 12-2 and later afternoon have produced results too."
    },
    "T121": {
      "chance": "High",
      "window": "",
      "reason": "78% hit rate (29/37 Mondays), steady trend. Latest (2026-06-22): Expect people to commit here and wait. Timing has been unpredictable lately which means patience matters more than ever."
    },
    "T123": {
      "chance": "High",
      "window": "",
      "reason": "30% hit rate (11/37 Mondays), increasing trend. Latest (2026-06-22): Has been multiple Monday\u2019s now as it did hit last week! Usually around 9-11 and 1-4! ```"
    },
    "T108": {
      "chance": "High",
      "window": "",
      "reason": "100% hit rate (37/37 Mondays), steady trend. Latest (2026-06-22): Usually one of the stronger Monday locations! Expect people to stick around regardless of when it hits starting early!"
    },
    "T109": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "65% hit rate (24/37 Mondays), decreasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-03-23): Has seemingly switched off from Monday evenings! Check in if you\u2019d like but so far has hit Tues/Weds/Saturday mornings as we saw yesterday"
    },
    "T100": {
      "chance": "Medium",
      "window": "10:30-11AM",
      "reason": "22% hit rate (8/37 Mondays), decreasing trend. Typically 10:30-11AM. Latest (2026-02-23): Has primarily been hitting Tuesdays"
    },
    "T099": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "14% hit rate (5/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-22): One of the few stores comfortable selling and holding product themselves. Makes it a bit more random but likely to have some form of product at opening. Usual big drop day is Wedne"
    },
    "T116": {
      "chance": "High",
      "window": "",
      "reason": "49% hit rate (18/37 Mondays), increasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-22): Traditionally one of the stronger Monday performers and will have heads/chairs here already!"
    },
    "T095": {
      "chance": "Medium",
      "window": "11-1PM",
      "reason": "14% hit rate (5/37 Mondays), decreasing trend. Typically 11-1PM. Latest (2025-11-17): Be ready 10-12 here would imagine it stocks again before the mall!"
    },
    "T090": {
      "chance": "High",
      "window": "4-6pm",
      "reason": "89% hit rate (33/37 Mondays), steady trend. Typically 4-6pm. Latest (2026-06-15): Has been leaning hard toward Fridays. Small amounts have leaked out during the week but nothing major"
    },
    "T101": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Latest (2025-10-06): Check in at guest services between 11-12 and between 2-3. Usually sells in that time range. Dropped a small pack last Mon too!"
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "54% hit rate (20/37 Mondays), decreasing trend. Typically Opening. Latest (2026-02-23): VQ SHOULD go at opening time"
    },
    "T050": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (37/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Massive Monday reputation and one of the few stores where people will show up night before!"
    },
    "T044": {
      "chance": "Medium",
      "window": "7-8am",
      "reason": "59% hit rate (22/37 Mondays), decreasing trend. Typically 7-8am. Latest (2026-06-15): Light rotations from 7-8AM in case! Usually opening ish if they push some times"
    },
    "T048": {
      "chance": "Medium",
      "window": "",
      "reason": "73% hit rate (27/37 Mondays), steady trend. Latest (2026-06-15): Store has become much more random recently"
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (36/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Shipment-based store. Morning checks remain the best play and the store has no issue selling product as it arrives mid day too"
    },
    "T070": {
      "chance": "Medium",
      "window": "2-4:15PM",
      "reason": "8% hit rate (3/37 Mondays), steady trend. Typically 2-4:15PM. Latest (2025-10-20): Hasn\u2019t stocked since early week. Could go again Monday mid-day (2\u20134PM). Watch this."
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "78% hit rate (29/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Since employees move stock themselves, opening matters. Follow that with another pass around 11:30-2:30 and possibly later as store sells 3-4 days a week now"
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "92% hit rate (34/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Consistent location for smaller waves. Definitely worth a few check-ins throughout the day and AT OPENING"
    },
    "T083": {
      "chance": "Medium",
      "window": "",
      "reason": "84% hit rate (31/37 Mondays), decreasing trend. Latest (2026-06-01): Both morning and evening work. Slight lean toward later checks or possibly Tuesday. Store holds and sells small batches as you saw this morning"
    },
    "T074": {
      "chance": "Medium",
      "window": "",
      "reason": "51% hit rate (19/37 Mondays), decreasing trend. Latest (2026-02-23): Typically Tuesdays sometimes Weds here"
    },
    "T068": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "22% hit rate (8/37 Mondays), decreasing trend. Typically Opening. Latest (2026-03-02): Please open this store! Be here and rotate checks also can drop GREAT stock that people miss"
    },
    "T072": {
      "chance": "Medium",
      "window": "7-9PM",
      "reason": "43% hit rate (16/37 Mondays), decreasing trend. Typically 7-9PM. Latest (2026-02-23): Usually later in the week and morning times. ```"
    },
    "T022": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "73% hit rate (27/37 Mondays), steady trend. Typically Opening. Latest (2026-06-15): Traditionally one of the stronger Monday/Tuesday stores and it stayed quiet this morning. Be there for the 7AM open and see if it hits"
    },
    "T039": {
      "chance": "High",
      "window": "",
      "reason": "54% hit rate (20/37 Mondays), decreasing trend. Latest (2026-05-18): Typically Tuesday-Thursday is best here with strongest day being Thursday. Usually hits around 10-1 if vendor is there. Store occasionally will push items out themselves."
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "49% hit rate (18/37 Mondays), decreasing trend. Typically Opening. Latest (2026-02-23): Seems to be hitting Wednesday here"
    },
    "T094": {
      "chance": "High",
      "window": "",
      "reason": "30% hit rate (11/37 Mondays), increasing trend. Latest (2026-06-22): Has moved to random drops HOWEVER that does mean they can sell tomorrow so keep on your radar from 10-12 or 2-4!"
    },
    "T102": {
      "chance": "Medium",
      "window": "",
      "reason": "27% hit rate (10/37 Mondays), decreasing trend. Latest (2026-05-18): Stores tends to hit either Mondays/Weds usually and typically in afternoon from 2-6. Expect heads to be waiting around a bit before and store sells 2 per sku here so while a diffic"
    },
    "T047": {
      "chance": "High",
      "window": "5-6AM",
      "reason": "38% hit rate (14/37 Mondays), increasing trend. 1 confirmed actual hit reported in chat. Typically 5-6AM. Latest (2026-06-22): Normally follows Seal Beach activity with the hope the vendor is back to normal schedule! Heads will be EARLY and selling happens usually around 9-11"
    },
    "T110": {
      "chance": "Medium",
      "window": "",
      "reason": "24% hit rate (9/37 Mondays), decreasing trend. Latest (2026-02-16): Not expected tomorrow"
    },
    "T098": {
      "chance": "Medium",
      "window": "",
      "reason": "30% hit rate (11/37 Mondays), decreasing trend. Latest (2026-02-16): Usually later in the week here as well"
    },
    "T021": {
      "chance": "Low",
      "window": "Opening",
      "reason": "51% hit rate (19/37 Mondays), decreasing trend. Typically Opening. Latest (2026-05-18): Last week hit around 4pm but store is random and tends to sell in batches out of guest services! Opening checks at 7am then 11-1 for a shift change then again 4-5:30ish"
    },
    "T010": {
      "chance": "Medium",
      "window": "",
      "reason": "57% hit rate (21/37 Mondays), steady trend. Latest (2026-06-15): Focus 8-10 or 12-2. Store loves moving product when nobody is paying attention typically hits Tuesday\u2019s but be ready in case! ```"
    },
    "T071": {
      "chance": "Medium",
      "window": "",
      "reason": "43% hit rate (16/37 Mondays), decreasing trend. Latest (2026-02-23): Usually Wed -Friday here afternoon or evening"
    },
    "T076": {
      "chance": "Medium",
      "window": "",
      "reason": "5% hit rate (2/37 Mondays), steady trend. Latest (2026-06-22): Two stores tends to show more activity through the late morning and midday! Heads will be around lingering at both around 10-12!"
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "81% hit rate (30/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Definition of a wave store. Nothing for hours then suddenly stock appears. Opening is important but every check can pay off here"
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "54% hit rate (20/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Similar to Whitwood store is starting to release stock multiple times a week! Usually hits at opening / morning time"
    },
    "T041": {
      "chance": "Medium",
      "window": "",
      "reason": "73% hit rate (27/37 Mondays), decreasing trend. Latest (2026-05-18): MONDAY NIGHT STORE. Dm me word collect Main checks still around 6-9 for when store gets a shipment but 50/50 whether they let it fly or they hold and sell for Tuesday"
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "65% hit rate (24/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-22): Opening check!. Trends have leaned to multiple days a week recently and they drop at opening! People check daily here ```"
    },
    "T081": {
      "chance": "High",
      "window": "",
      "reason": "49% hit rate (18/37 Mondays), increasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-22): Vendor activity usually from 8-10 be ready! Heads will be waiting in case it hits and will linger the later it gets"
    },
    "T058": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/37 Mondays), steady trend. Latest (2026-05-04): 9-11 or 4-6 usually IF it hits if not very likely Tuesday"
    },
    "T023": {
      "chance": "Medium",
      "window": "",
      "reason": "16% hit rate (6/37 Mondays), decreasing trend. Latest (2026-03-02): Store should restock a bit more tomorrow either morning or afternoon by 12-2 if it didn\u2019t push something out today"
    },
    "T006": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/37 Mondays), steady trend. Latest (2026-03-09): Warned you last week! Should hit tomorrow either morning time or around 1-3! Ask about a VQ"
    },
    "T167": {
      "chance": "Medium",
      "window": "",
      "reason": "24% hit rate (9/37 Mondays), decreasing trend. Latest (2026-02-23): Usually will drop Tuesday to Thursdays as well"
    },
    "T033": {
      "chance": "Medium",
      "window": "",
      "reason": "27% hit rate (10/37 Mondays), decreasing trend. Latest (2026-02-23): Check for activity 11-2 or after Carson Sepulveda if it stocks"
    },
    "T137": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "32% hit rate (12/37 Mondays), decreasing trend. Typically Opening. Latest (2026-02-23): May go later in the week here"
    },
    "T165": {
      "chance": "High",
      "window": "",
      "reason": "68% hit rate (25/37 Mondays), increasing trend. Latest (2026-06-22): Afternoon route store by nature. Even without vendor store can sell but expect it to hit from 11-2 usually! Last week hit at 11"
    },
    "T119": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/37 Mondays), steady trend. Latest (2025-12-22): Check in tomorrow 8-11"
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (25/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-22): Opening VQ with a few heads already here most likely!"
    },
    "T051": {
      "chance": "High",
      "window": "",
      "reason": "76% hit rate (28/37 Mondays), increasing trend. Latest (2026-06-22): Usually benefits from overflow traffic after South St. CHECK EARLY IN CASE IT STOCKS FIRST OR ASK ABOUT A VQ"
    },
    "T049": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "24% hit rate (9/37 Mondays), decreasing trend. Typically Opening. Latest (2026-04-06): MONDAY AFTERNOON HEATER. TCG floor first then GS drop. 3-6 PRIME WINDOW stop sleeeeeping"
    },
    "T069": {
      "chance": "Medium",
      "window": "",
      "reason": "19% hit rate (7/37 Mondays), decreasing trend. Latest (2026-02-23): Usually later in the week here!"
    },
    "T064": {
      "chance": "Medium",
      "window": "",
      "reason": "22% hit rate (8/37 Mondays), decreasing trend. Latest (2026-03-02): Check for a restock in the morning ! Also early afternoon here"
    },
    "T125": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "16% hit rate (6/37 Mondays), decreasing trend. Typically Opening. Latest (2026-02-02): Should hit tomorrow morning to 10 or from 1-4!"
    },
    "T002": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "16% hit rate (6/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-15): Sneaky store. Could do a light employee push at opening CHECK"
    },
    "T114": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Latest (2025-12-15): Other MV store hit so check in"
    },
    "T112": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/37 Mondays), increasing trend. Latest (2026-06-15): Start with Alicia then slide over to Jeronimo. Usually one goes during the morning while the other lands later from 11-2```"
    },
    "T063": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "35% hit rate (13/37 Mondays), decreasing trend. Typically Opening. Latest (2026-04-06): GETS SHIPMENT but holds like their life depends on it. Always check in for some light items but store has been on games"
    },
    "T107": {
      "chance": "Medium",
      "window": "",
      "reason": "8% hit rate (3/37 Mondays), steady trend. Latest (2026-02-02): Store was stating vendor was coming mondays but should still be Thursdays. Can check 2ish in case."
    },
    "T029": {
      "chance": "Medium",
      "window": "",
      "reason": "19% hit rate (7/37 Mondays), decreasing trend. Latest (2026-04-06): Ask at GS here a bit tomorrow usually from 11-2!"
    },
    "T091": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Latest (2026-01-26): May have some items check in 2-5!"
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "8% hit rate (3/37 Mondays), steady trend. Latest (2026-02-16): Check for vendor 12-2 here !"
    },
    "T030": {
      "chance": "Medium",
      "window": "10am-1pm",
      "reason": "8% hit rate (3/37 Mondays), steady trend. Typically 10am-1pm. Latest (2026-02-16): Usually will have a VQ Tuesdays and Fridays HOWEVER can be altered so just one person just swing by and ask between 10-2"
    },
    "T089": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "30% hit rate (11/37 Mondays), decreasing trend. Typically Opening. Latest (2026-06-22): Hit last week at opening so expect heads to be on it! Line was allowed to start last week at 6am"
    },
    "T086": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Latest (2026-02-23): Check for items in the morning 8-10!"
    },
    "T066": {
      "chance": "Medium",
      "window": "6-8pm",
      "reason": "35% hit rate (13/37 Mondays), steady trend. Typically 6-8pm. Latest (2026-06-15): BACH TO RANDOM DROPS. Check are best at opening ,12-2, and 6-8 but realistically lang time as store will be random AND multiple times a day"
    },
    "T055": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "8% hit rate (3/37 Mondays), steady trend. Typically Opening. Latest (2026-06-22): Look for a morning push at opening or 12-2!"
    },
    "T124": {
      "chance": "Low",
      "window": "",
      "reason": "35% hit rate (13/37 Mondays), increasing trend. Latest (2026-06-15): If the rest of IE stays quiet this becomes more attractive. Usually feels more Tuesday/Wednesday with last week landing Tuesday"
    },
    "T080": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/37 Mondays), steady trend. Latest (2026-03-23): Check morning time and mid afternoon here!"
    },
    "T052": {
      "chance": "Low",
      "window": "Opening",
      "reason": "30% hit rate (11/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-15): Quick opening look then rerun later in the morning. If tomorrow stays quiet expect stronger Tuesday action around 9-11 or 1-4```"
    },
    "T133": {
      "chance": "Medium",
      "window": "",
      "reason": "14% hit rate (5/37 Mondays), decreasing trend. 1 confirmed actual hit reported in chat. Latest (2026-04-13): MONDAY/TUESDAY HITTER. Check morning or 12-2 warned you last week too"
    },
    "T166": {
      "chance": "Medium",
      "window": "",
      "reason": "5% hit rate (2/37 Mondays), steady trend. Latest (2026-04-27): Has been dropping Mondays here smaller amounts! Check in 9-11, 2-4, and 6-7:30 here!"
    },
    "T031": {
      "chance": "High",
      "window": "Opening",
      "reason": "22% hit rate (8/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-15): Similar setup to Manhattan. Midday and evening remain strongest with 11-1 and 4-7 doing the most damage. Opening can happen but the later windows are usually better"
    },
    "T142": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Latest (2026-04-06): Check morning time until 9:30-10ish look for vendor!```"
    },
    "T008": {
      "chance": "Medium",
      "window": "",
      "reason": "19% hit rate (7/37 Mondays), increasing trend. Latest (2026-06-15): Basically adopted Tuesdays. Keep that in mind before camping here Monday although employees can still slide smaller items out"
    },
    "T078": {
      "chance": "Medium",
      "window": "5-8pm",
      "reason": "19% hit rate (7/37 Mondays), increasing trend. Typically 5-8pm. Latest (2026-06-15): Morning, 12-3, and 6-7 all remain solid. Usually not a Monday store but still worth checking"
    },
    "T079": {
      "chance": "Medium",
      "window": "",
      "reason": "16% hit rate (6/37 Mondays), increasing trend. Latest (2026-06-15): Usually Monday or Wednesday action. Focus 8-10 then another pass 2-5 if nothing develops"
    },
    "T045": {
      "chance": "High",
      "window": "",
      "reason": "8% hit rate (3/37 Mondays), increasing trend. Latest (2026-06-15): Has not moved yet. Be ready around 9-11 or 1-3 but it can absolutely push later"
    },
    "T038": {
      "chance": "Medium",
      "window": "8:30-11am",
      "reason": "8% hit rate (3/37 Mondays), increasing trend. Typically 8:30-11am. Latest (2026-05-18): Hit Thursday last week but don\u2019t completely ignore tomorrow. Morning 8-10 or later 1-4 checks in case they sneak a small drop but likely will wait till later in the week"
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "11% hit rate (4/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-22): Cochran remains strongest right at opening"
    },
    "T061": {
      "chance": "High",
      "window": "",
      "reason": "19% hit rate (7/37 Mondays), increasing trend. Latest (2026-06-22): Morning through mid afternoon remains strongest. Think 10-12 but don't ignore earlier checks as employees have pushed product themselves. Store drops shipment almost daily when the"
    },
    "T059": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "11% hit rate (4/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-15): Both deserve attention. Opening first then swing back 9-11 once things get unboxed. If nothing checks go from 1-5!"
    },
    "T106": {
      "chance": "High",
      "window": "",
      "reason": "19% hit rate (7/37 Mondays), increasing trend. Latest (2026-06-22): Continues to trend active on M/W/F. Afternoon remains strongest and lines will usually form right after other stores hit as well! Last week vendor arrived around 12"
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "19% hit rate (7/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-22): Nearly daily activity lately. Store can still find ways to move remaining inventory even if quantities are lighter and people just wait here```"
    },
    "T057": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "8% hit rate (3/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-22): Check morning or mid day or later in case they push a bit mkre. If not look later this week"
    },
    "T087": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Latest (2026-05-25): Hits evening typically here if vendor is working"
    },
    "T077": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "8% hit rate (3/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-15): Has been doing more constant drops as they receive shipments and lines form around 11-1 to see what they receive!"
    },
    "T037": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "5% hit rate (2/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-15): Still waiting to drop. Usually opening or 9-11 when it finally happens so stay alert"
    },
    "T026": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "5% hit rate (2/37 Mondays), increasing trend. Typically Opening. Latest (2026-06-22): Usually hits at opening when they do! Check both TCG and guest services, then a mid day day around 2-4. Leaning Towards Tuesday but check in case. Heads line up almost daily regard"
    },
    "T016": {
      "chance": "Medium",
      "window": "8-9am",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Typically 8-9am. Latest (2026-06-15): Usually hits Wednesday but last week stocked Monday so checks from 8-9am or 12-3!"
    },
    "T140": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Latest (2026-06-15): Look for a morning drop and if nothing expect heads to wait around for possible vendor activity around 11-3```"
    },
    "T122": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Latest (2026-06-22): Vendor hit here last week around 1-2. Likely a change due to release week and holiday BUT worthwhile to keep eyes!"
    },
    "T073": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/37 Mondays), steady trend. Latest (2026-06-22): Store holds back product and drops randomly but best times to check are 8-10 and 1-3!"
    }
  },
  "tuesday": {
    "T036": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (25/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Does their morning procedure basically EVERY TUES AND FRI! JUST BE EARLY! EASY HIT IF YOU NEED SOMEWHERE TO GO!!!"
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "73% hit rate (27/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): If they do not push tn, they should sell at 8AM opening unless the line is too deep. Has not sold this week (yet) -- Sells @GS."
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (12/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): People will line up here for 7AM opening. Then, they'll push new shipment between 12-2PM, usually closer to 1PM."
    },
    "T031": {
      "chance": "High",
      "window": "",
      "reason": "35% hit rate (13/37 Tuesdays), increasing trend. Latest (2026-06-30): Consistently active. Main windows remain 11-1 and 4-7. Line forms at tech. Look for regulars who will indicate a restock is imminent."
    },
    "T024": {
      "chance": "High",
      "window": "4-8PM",
      "reason": "65% hit rate (24/37 Tuesdays), steady trend. Typically 4-8PM. Latest (2026-06-30): Will sell tmrw at opening or the vendor will stock very late in the day closer to 4-8PM. Line will form around 4PM like always."
    },
    "T022": {
      "chance": "High",
      "window": "Opening",
      "reason": "49% hit rate (18/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Still due but very random/shady about selling. Check now."
    },
    "T056": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "51% hit rate (19/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-02-24): Check morning time, 8-10 but store plays a lot so can also be randomly like 12-2"
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "86% hit rate (32/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): One of the most active stores in the LA area. They sold lightly today so check at 8AM but we mainly recommend lingering between 10:30-12:30. They should form a line/drop in that ti"
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (36/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): Opening guest services checks first then rerun around 11-1! Same timing as Mall. Sometimes though, Jefferson waits until 4-6 for a new manager to come in to push. Depends who's in "
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "95% hit rate (35/37 Tuesdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-30): Sells almost DAILY at opening! Some mornings the shipment isn't the best, but it's a great gamble because they sell what they receive."
    },
    "T137": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "73% hit rate (27/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-05-05): Trending Wednesday light check only```"
    },
    "T133": {
      "chance": "High",
      "window": "Opening",
      "reason": "89% hit rate (33/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): Been doing opening batches + more once shipment arrives. They did not sell today so check at opening tomorrow! Definitely due for more."
    },
    "T124": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "86% hit rate (32/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-23): One of the biggest focuses tomorrow. Expect people waiting and checking from opening onward."
    },
    "T122": {
      "chance": "Medium",
      "window": "",
      "reason": "84% hit rate (31/37 Tuesdays), decreasing trend. Latest (2026-06-09): SAME ENERGY AS EASTVALE. These remain major stores to watch for activity people will being WAITING"
    },
    "T134": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Typically Opening. Latest (2025-10-07): Check around opening for a guest services drop. Always receives on the same timeframe as Ontario/4th location. Reliable route. LIKELY WEDS BUT FEEL FREE TO CHECK TMW AFTER SAMS."
    },
    "T123": {
      "chance": "Medium",
      "window": "8-11am",
      "reason": "73% hit rate (27/37 Tuesdays), decreasing trend. Typically 8-11am. Latest (2026-06-23): Sleeper option. Could move tomorrow or decide to wait for its usual Wednesday pattern since it missed today"
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "54% hit rate (20/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-30): Still a bit of a mystery. Last updates were that this store sells on random days around opening. Expect a line checking since ppl will line up for BN Redlands ticket procedure in t"
    },
    "T125": {
      "chance": "Medium",
      "window": "2:30-5:30PM",
      "reason": "54% hit rate (20/37 Tuesdays), decreasing trend. Typically 2:30-5:30PM. Latest (2026-06-30): Been hitting Thursdays consistently for 1+ month. Likely drops on Tuesdays as well. Can check at opening but patterns suggest this store's likelihood between 2:30-5:30PM. They rece"
    },
    "T138": {
      "chance": "High",
      "window": "",
      "reason": "70% hit rate (26/37 Tuesdays), steady trend. Latest (2026-06-30): Focus remains around 8:30-10:30 but random employee drops can happen throughout the day."
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "70% hit rate (26/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): DID NOT sell AH Booster Bundles so check at opening in case they trickle out a bit more, which they have done in the past. More of a gamble for after Slover."
    },
    "T121": {
      "chance": "High",
      "window": "8-11AM",
      "reason": "70% hit rate (26/37 Tuesdays), increasing trend. Typically 8-11AM. Latest (2026-06-30): Top priority for the area. Timing has been all over the place recently so patience will be important. A line will form early, same as last week, this is Voodoo's call from last wee"
    },
    "T166": {
      "chance": "Low",
      "window": "",
      "reason": "24% hit rate (9/37 Tuesdays), decreasing trend. Latest (2026-06-16): Last week hit a sneaky Tuesday morning drop so CHECK IN AND UPDATE"
    },
    "T111": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "68% hit rate (25/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-04-07): Trending toward Wednesday mornings now instead of Tuesday."
    },
    "T089": {
      "chance": "Medium",
      "window": "",
      "reason": "65% hit rate (24/37 Tuesdays), decreasing trend. Latest (2026-06-02): STILL HASN'T REALLY MOVED. Watch 12-2 closely"
    },
    "T090": {
      "chance": "Medium",
      "window": "",
      "reason": "32% hit rate (12/37 Tuesdays), decreasing trend. Latest (2026-02-24): Hit today should be quiet tomorrow !"
    },
    "T119": {
      "chance": "High",
      "window": "8-11am",
      "reason": "51% hit rate (19/37 Tuesdays), increasing trend. Typically 8-11am. Latest (2026-06-30): Trending later in the week but still worth checking 8-11 and again 1-3."
    },
    "T103": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "19% hit rate (7/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): They've been selling at opening more often recently, so check in tomorrow. People constantly update their Ws here right after 8AM. Becoming a consistent store!!"
    },
    "T093": {
      "chance": "Medium",
      "window": "8-9AM",
      "reason": "35% hit rate (13/37 Tuesdays), increasing trend. Typically 8-9AM. Latest (2026-06-02): Smaller location but still active. Best checks remain 8-9:30 and 12-2"
    },
    "T114": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "16% hit rate (6/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): Literally the same as Jeronimo but A BIT more consistent for opening time. Expect a line a bit deeper than Jeronimo's at opening tmrw."
    },
    "T012": {
      "chance": "Medium",
      "window": "8-10AM",
      "reason": "51% hit rate (19/37 Tuesdays), decreasing trend. Typically 8-10AM. Latest (2026-02-24): Would imagine it goes a bit later in week"
    },
    "T002": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "46% hit rate (17/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): CHECK AT OPENING! Did not sell much today, they are still due for a drop. People will be here early. They have done VQ recently too. If you are not here by 7-7:30, you won't get th"
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "89% hit rate (33/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): Been straying away from opening but feel free to check then too. Usually 11-1PM, 1 SKU at a time over the course of a few hours."
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "89% hit rate (33/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): Never remove this store from rotation. Product can appear out of nowhere and opening remains one of the best times to catch it."
    },
    "T008": {
      "chance": "High",
      "window": "Opening",
      "reason": "59% hit rate (22/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Opening is the priority. If they delay, don't leave immediately. They have sold 1 SKU at a time to deter long lines and heavy crowds."
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "73% hit rate (27/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): One of the stronger employee push stores for tomorrow. Opening CHECK!! They only sold Mega Zygarde ex Boxes today!"
    },
    "T078": {
      "chance": "High",
      "window": "5-7PM",
      "reason": "84% hit rate (31/37 Tuesdays), steady trend. Typically 5-7PM. Latest (2026-06-30): Selling at opening 7AM 99% so be here early and expect them to drop a pack!"
    },
    "T070": {
      "chance": "High",
      "window": "12-1:30PM",
      "reason": "24% hit rate (9/37 Tuesdays), increasing trend. Typically 12-1:30PM. Latest (2026-06-30): Sold OP today but did not sell Poke. Check in at 8 for a small batch. If not, 12-1:30PM. For those 90 mins, ppl will camp it. 12121 NoHo should hit tmr too, see below!"
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (25/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Morning shipment here. Line is expected before 8AM opening! Check in at opening and be few early!! Sells at guest services."
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "86% hit rate (32/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-30): Like Burbank at 7AM, this store is also going to have a 7AM line. They've strayed away from opening. 12:30-2:30 if it's not at opening, at GS."
    },
    "T069": {
      "chance": "Medium",
      "window": "",
      "reason": "78% hit rate (29/37 Tuesdays), decreasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-02): Can have smaller pushes but more likely to be holding. Keep checks lighter"
    },
    "T083": {
      "chance": "High",
      "window": "Opening",
      "reason": "54% hit rate (20/37 Tuesdays), increasing trend. 2 confirmed actual hits reported in chat. Typically Opening. Latest (2026-06-30): Claiming Friday at opening! They have a sign up by GS too. Still, check, as this store lies sometimes."
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "92% hit rate (34/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-23): Opening, 9-11 and 2-4 remain the key windows. Could still be sitting on additional stock."
    },
    "T068": {
      "chance": "Medium",
      "window": "8-10AM",
      "reason": "59% hit rate (22/37 Tuesdays), steady trend. Typically 8-10AM. Latest (2026-06-30): Sold last week at opening on Tues, sleeper location that will try to spin. Wait until 8:15 if it's not right at opening. Check at open too!"
    },
    "T072": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "43% hit rate (16/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-30): Has shifted from a Fri store to a random store. Be ready for it to hit randomly tmw or Weds. Check at opening + around 10-12."
    },
    "T064": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2025-10-07): Due for stock, but supposedly, the vendor is away right now. Check 12-2 in case employees stock now that the shipment they are sitting on is THICK."
    },
    "T079": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "38% hit rate (14/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-03-24): May have hit today check in and ask ```"
    },
    "T009": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "70% hit rate (26/37 Tuesdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-30): Major vendor focus tomorrow. Opening is important and if nothing happens early continue rotating throughout the day."
    },
    "T007": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "65% hit rate (24/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-30): Did not push much Poke AS OF NOW. Still a chance they do so tonight. If not, expect this store to sell at opening. A line will be formed."
    },
    "T018": {
      "chance": "High",
      "window": "Opening",
      "reason": "92% hit rate (34/37 Tuesdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-30): Will either employee push at/around opening, or they'll wait for the vendor tmrw or Weds. It'll hit between 1-4PM most likely and ppl will linger nearby."
    },
    "T010": {
      "chance": "High",
      "window": "Opening",
      "reason": "92% hit rate (34/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): Morning first! Check at 8AM for anything they received today to sell tmrw, then circle back around 12-2. Employee pushes happen here, so they sell when they want."
    },
    "T025": {
      "chance": "Medium",
      "window": "",
      "reason": "62% hit rate (23/37 Tuesdays), decreasing trend. Latest (2026-06-30): Morning checks remain best but don't forget about afternoon opportunities. Random timing and smaller stock.```"
    },
    "T037": {
      "chance": "Medium",
      "window": "9AM-12PM",
      "reason": "49% hit rate (18/37 Tuesdays), decreasing trend. Typically 9AM-12PM. Latest (2026-02-24): 10-12 just check for when they receive either tomorrow or Thursday , 2 per sku here so great catch"
    },
    "T038": {
      "chance": "Medium",
      "window": "8-10am",
      "reason": "11% hit rate (4/37 Tuesdays), increasing trend. Typically 8-10am. Latest (2026-06-16): Check 8-10am or 1-3 in case they get a shipment!"
    },
    "T053": {
      "chance": "Medium",
      "window": "",
      "reason": "24% hit rate (9/37 Tuesdays), decreasing trend. Latest (2026-06-30): Same situation and timeframe as WeHo; if anything a bit earlier, as in 10-12. Sells at guest services. This, Galaxy, and WeHo are an easy 1-2-3."
    },
    "T109": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "41% hit rate (15/37 Tuesdays), decreasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-03-17): Since did not hit be ready 9-11 or 2-5ish check later too. Store has been switching up a bit"
    },
    "T044": {
      "chance": "Medium",
      "window": "7-8AM",
      "reason": "65% hit rate (24/37 Tuesdays), steady trend. Typically 7-8AM. Latest (2026-06-30): People will line up for opening but the more likely timeframe is 9AM-11:30AM, once UPS delivers, at guest services."
    },
    "T046": {
      "chance": "Medium",
      "window": "",
      "reason": "5% hit rate (2/37 Tuesdays), steady trend. Latest (2026-06-30): Due for their first shipment of the week. YES, this store gets Poke. Has a small cards area where they stock, check from 12-2."
    },
    "T107": {
      "chance": "Medium",
      "window": "",
      "reason": "49% hit rate (18/37 Tuesdays), decreasing trend. Latest (2026-02-24): Should hit here Thursday"
    },
    "T006": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "59% hit rate (22/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): Opening line expected. If it stays quiet lock in another sweep around 1-4! This is Voodoo's take from last week, same situation this week."
    },
    "T085": {
      "chance": "Medium",
      "window": "",
      "reason": "5% hit rate (2/37 Tuesdays), steady trend. Latest (2025-10-28): Rotate these along with Woodland Hills tomorrow"
    },
    "T074": {
      "chance": "High",
      "window": "",
      "reason": "92% hit rate (34/37 Tuesdays), steady trend. 2 confirmed actual hits reported in chat. Latest (2026-06-30): Recently shifted toward midweek drops. Keep an eye on it! 7AM check for a small push, then again between 11-12 and 3-4 for a full stock of the shipment received. SO LIKE..."
    },
    "T076": {
      "chance": "Medium",
      "window": "",
      "reason": "5% hit rate (2/37 Tuesdays), steady trend. Latest (2026-06-30): They'll sell by the middle of the morning; 10:30-1:00. Line will form outside early as it does daily."
    },
    "T047": {
      "chance": "Medium",
      "window": "",
      "reason": "57% hit rate (21/37 Tuesdays), decreasing trend. Latest (2026-06-30): Did not end up restocking so keep eyes! People will form a line early tmrw, same thing happened last week."
    },
    "T092": {
      "chance": "High",
      "window": "Opening",
      "reason": "89% hit rate (33/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-23): Expect the normal Tuesday action. Crowds should start building early and strongest window remains around 10-12."
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "84% hit rate (31/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Saving Poke for Fridays at opening now. No more daily drops."
    },
    "T004": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "32% hit rate (12/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-23): One of the main vendor watches for tomorrow. Opening checks matter and if vendor lands expect people to stick around."
    },
    "T063": {
      "chance": "Medium",
      "window": "",
      "reason": "38% hit rate (14/37 Tuesdays), decreasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-16): Should receive stock tomorrow and is selling randomly again so pls keep eyes!"
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "51% hit rate (19/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): BIG 7AM priority. Expect people lining up by 5AM. Still due after 3 mornings of not selling."
    },
    "T071": {
      "chance": "High",
      "window": "5-7PM",
      "reason": "59% hit rate (22/37 Tuesdays), increasing trend. 2 confirmed actual hits reported in chat. Typically 5-7PM. Latest (2026-06-30): Afternoon focus tomorrow. Last week, they started a VQ by 2-3PM. They will hit tmrw unless they intentionally switch up. You NEED TO BE IN LINE EARL..."
    },
    "T030": {
      "chance": "High",
      "window": "7-8AM",
      "reason": "57% hit rate (21/37 Tuesdays), increasing trend. Typically 7-8AM. Latest (2026-06-30): 7AM check! They unboxed and sold what they received today but there was no Poke. They're likely to do the same tmr but with shipment in this time! Expect a line."
    },
    "T108": {
      "chance": "Medium",
      "window": "",
      "reason": "16% hit rate (6/37 Tuesdays), decreasing trend. Latest (2026-01-06): Peep in the morning ask if vendor ever came by but if nothing high chance it goes tomorrow now!"
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "62% hit rate (23/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Has sold at opening + whenever they want. People will line up for 8AM and people will periodaically ask guest services all day. They pick and choose who to sell to + sell the first"
    },
    "T095": {
      "chance": "High",
      "window": "",
      "reason": "86% hit rate (32/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-30): This store should do a morning VQ. It hits EVERY Tues and receives decent stock - midtier. People are likely to set up a line by tonight/early tmrw morning. NOTE that..."
    },
    "T013": {
      "chance": "High",
      "window": "2:30-5:00PM",
      "reason": "59% hit rate (22/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically 2:30-5:00PM. Latest (2026-06-30): Usually does their first of 2-3 weekly stocks on Tues. It will go down around opening or in the afternoon between 2:30-5:00 PM. People will lurk!"
    },
    "T001": {
      "chance": "High",
      "window": "Opening",
      "reason": "49% hit rate (18/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-23): Sold late tonight and feels like one of those stores that will slowly trickle inventory out. Opening through noon still looks best but do not leave after one check."
    },
    "T086": {
      "chance": "Medium",
      "window": "",
      "reason": "22% hit rate (8/37 Tuesdays), decreasing trend. Latest (2026-01-06): Usually would be Wed-Fri here"
    },
    "T100": {
      "chance": "High",
      "window": "12-1PM",
      "reason": "62% hit rate (23/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically 12-1PM. Latest (2026-06-30): Trend continues to be vendor Tuesday/sale of stock the following Wednesday at opening, but it's always worth monitoring in case timing changes. Best..."
    },
    "T110": {
      "chance": "Medium",
      "window": "",
      "reason": "30% hit rate (11/37 Tuesdays), decreasing trend. Latest (2026-02-24): Should sell on Weds/Thursday here"
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "81% hit rate (30/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): It did not hit today so it is in play tmrw. You can check at 7AM but this store usually goes down at opening or 10-12. Sylmar to here (GV) is a route, vice versa."
    },
    "T054": {
      "chance": "High",
      "window": "Opening",
      "reason": "73% hit rate (27/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Earlier timing still fits this location best. Focus on the morning hours. DID NOT receive Poke today. They'll get it tmrw. Check 7AM (been pushing then now) and check between 10-11"
    },
    "T055": {
      "chance": "High",
      "window": "10AM-12PM",
      "reason": "43% hit rate (16/37 Tuesdays), steady trend. Typically 10AM-12PM. Latest (2026-06-30): Can check between 10AM-12PM and between 3PM and 4PM for new stock at guest services. We'll update tomorrow."
    },
    "T041": {
      "chance": "High",
      "window": "Opening",
      "reason": "73% hit rate (27/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-23): Similar setup to Pico. If it misses opening expect attention later."
    },
    "T098": {
      "chance": "High",
      "window": "",
      "reason": "68% hit rate (25/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-30): Morning checks remain worthwhile but feels more like a Wednesday leaning store lately. This is Voodoo's post from last week and the trends proved it right."
    },
    "T167": {
      "chance": "Medium",
      "window": "",
      "reason": "59% hit rate (22/37 Tuesdays), steady trend. Latest (2026-06-30): Holding for Friday like usual as of the last few weeks."
    },
    "T165": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "32% hit rate (12/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-02-24): Hit today great job catching!"
    },
    "T023": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "59% hit rate (22/37 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-30): Unlikely, but check at 7AM tmrw. The more likely time is between 10-12, when GS has the time to unbox. Smaller store means less employees. They sell on and off when they have time "
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "73% hit rate (27/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): SUCH A HITTER MULTIPLE TIMES A DAY ON SOME DAYS, IT'S CONSTANT HERE! Opening and 10-12 remain strongest while people continue waiting on shipments. JUST LINE UP. EARLY EVEN IF PEOP"
    },
    "T049": {
      "chance": "Medium",
      "window": "",
      "reason": "22% hit rate (8/37 Tuesdays), decreasing trend. Latest (2026-02-03): Check in tomorrow morning and throughout the day"
    },
    "T048": {
      "chance": "Medium",
      "window": "",
      "reason": "38% hit rate (14/37 Tuesdays), steady trend. Latest (2026-06-02): BOTH DESERVE MORNING ATTENTION but stores have been harder catches"
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "38% hit rate (14/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Sold today, not as likely as other stores for tmw.```"
    },
    "T082": {
      "chance": "Medium",
      "window": "",
      "reason": "8% hit rate (3/37 Tuesdays), steady trend. Latest (2026-01-27): Check in prime time is 12-3 here if not on Friday"
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "27% hit rate (10/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Every store around them received today and they have not dropped yet. Check in at opening if they do not sell by closing. Likely for 7AM!"
    },
    "T143": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/37 Tuesdays), steady trend. Latest (2026-06-30): Usually hits Tues/Fri or Sat mornings, Sat more than Fri. People will arrive early. Oftentimes sells via aisle here. Vendor stocks, be early!"
    },
    "T033": {
      "chance": "High",
      "window": "Opening",
      "reason": "54% hit rate (20/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): They now drop daily at GS. A line will form by 10-11AM as it has everyday recently. Hits by 1-2PM."
    },
    "T029": {
      "chance": "Medium",
      "window": "",
      "reason": "27% hit rate (10/37 Tuesdays), increasing trend. Latest (2026-06-30): Likely between 10-12 at guest services tmrw! They still do 2 per SKU at times. Sleeper store that requires checks; 7AM is also a decent time."
    },
    "T026": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "14% hit rate (5/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Pushed later in the day so opening seems unlikely. Check between 2-4:30PM for a late shipment."
    },
    "T091": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-30): Continue checking here in the morning. These smaller stores still love Tuesday and Thursday activity! Voodoo's take from last week, which was also accurate."
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "8% hit rate (3/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-16): Ask about a possible drop tomorrow! May or may not do a VQ or just a straight FCFS drop in the morning or 9-12"
    },
    "T120": {
      "chance": "High",
      "window": "",
      "reason": "19% hit rate (7/37 Tuesdays), increasing trend. Latest (2026-06-30): Hit today! We posted!"
    },
    "T058": {
      "chance": "High",
      "window": "Opening",
      "reason": "46% hit rate (17/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Likely at opening or between 3-5PM. This store gets smacked at guest services because sometimes, they offer 2 per SKU."
    },
    "T105": {
      "chance": "High",
      "window": "Opening",
      "reason": "27% hit rate (10/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Still one of the sneakiest stores around. Can hit morning, afternoon, or even later. Line will form to check opening. Probably opening or 11AM-12PM. If they received today, opening"
    },
    "T043": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2026-03-24): Look for a random drop tomorrow either morning time or 11-2 but if not will be Weds as usual"
    },
    "T066": {
      "chance": "Low",
      "window": "",
      "reason": "19% hit rate (7/37 Tuesdays), steady trend. Latest (2026-06-16): Store is back to random drops so you\u2019ll have to be on it!"
    },
    "T052": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (12/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Pushes what they receive daily at guest services between 11:15-1:30. Just look for Excel boxes."
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "22% hit rate (8/37 Tuesdays), increasing trend. Latest (2026-06-16): Last week hit Tuesday evening instead of Weds! Store has been pushing product themselves so check throughout the day for a switch up!"
    },
    "T039": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2026-04-21): Peep 9:30-11:30 but may go later in week"
    },
    "T131": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "14% hit rate (5/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): More random now but they should hit once shipment lands tmrw. Ask at guest services. Can pair a check with the other Apple Valley location off of the highway as well!"
    },
    "T087": {
      "chance": "Medium",
      "window": "4-7pm",
      "reason": "14% hit rate (5/37 Tuesdays), increasing trend. Typically 4-7pm. Latest (2026-06-30): Vendor should stock tmrw night. and Poke should be put out Weds at opening."
    },
    "T126": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2026-04-28): Hit today as well a bit randomly"
    },
    "T016": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "8% hit rate (3/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-16): Same like Rowland above one of these two should hit in the morning!"
    },
    "T017": {
      "chance": "Low",
      "window": "Opening",
      "reason": "8% hit rate (3/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-02): Morning has value but afternoon tends to be overlooked. Keep eyes on the 1:30-4 window if opening stays quiet"
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "19% hit rate (7/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Night checks tonight between 8PM and closing. If they do not push then, check at 8AM tomorrow. Store has a deep line every morning."
    },
    "T140": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "5% hit rate (2/37 Tuesdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-05-19): Opening checks then linger a bit! Lines can form but may hit either tomorrow or Wednesday!"
    },
    "T035": {
      "chance": "Medium",
      "window": "10AM-1PM",
      "reason": "5% hit rate (2/37 Tuesdays), increasing trend. Typically 10AM-1PM. Latest (2026-06-30): Sleeper that is basically 100% for tm or Weds, usually between 10AM-1PM. Sells @GS."
    },
    "T077": {
      "chance": "High",
      "window": "",
      "reason": "16% hit rate (6/37 Tuesdays), increasing trend. Latest (2026-06-23): Morning first then hammer the 11-2 window. One of the steadier stores lately."
    },
    "T102": {
      "chance": "High",
      "window": "",
      "reason": "16% hit rate (6/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-30): Biggest focus should be vendor timing from 1-4. Expect people lingering and waiting throughout the afternoon. The line is likely to start by 12PM or so. People always ..."
    },
    "T061": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "11% hit rate (4/37 Tuesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-23): Watch for shipment activity from 9-11 with product usually moving shortly after."
    },
    "T051": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2026-05-26): South street for VQ at open (but may do Weds). Bloomfield will be a great check for a random from from 12-2 or 3-5 if nothing early!```"
    },
    "T060": {
      "chance": "High",
      "window": "",
      "reason": "5% hit rate (2/37 Tuesdays), increasing trend. Latest (2026-06-30): DID NOT receive today, leaving them in play for tmrw. Smaller stores receive 2 shipments usually and if it doesn't hit on Mon, it almost ALWAYS hits Tues then Fri."
    },
    "T094": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2026-06-02): Random drops now so CHECK IN FROM 8-11 or later on will be RANDOM"
    },
    "T081": {
      "chance": "High",
      "window": "Opening",
      "reason": "8% hit rate (3/37 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-23): Did not appear to move today. Looks lined up for an opening or morning release tomorrow and should draw attention early."
    },
    "T117": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2026-06-16): Look for a drop tomorrow from 9-12! May push a bit later as well"
    },
    "T106": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2026-06-23): Did not sell Poke today. Light checks are worthwhile in case they are intentionally holding inventory."
    },
    "T059": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Typically 11AM-1PM. Latest (2026-06-30): Been selling frequently between 11AM-1PM at guest services, 1 per SKU. Sleeper check in!"
    },
    "T045": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2026-06-30): Vendor stocked sneakily last Tues night. Check again this week to see if it happens again!"
    },
    "T116": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Latest (2026-06-30): Same situation as Signal Hill. Both stores are due and will be lined up at accordingly. Don't wait to go.```"
    },
    "T112": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): Still due for stock, people will line up here to gamble at opening. This happens everyday. Usually hits Tues/Thurs and some Fri!"
    },
    "T113": {
      "chance": "Medium",
      "window": "10-12PM",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Typically 10-12PM. Latest (2026-06-30): Often slept on, but definitely not forgotten about by locals. Hits by 10-12PM and gets cleaned quickly. Smaller store that receives much less stock than the other 2 Mission Viejo l"
    },
    "T115": {
      "chance": "Medium",
      "window": "12-3PM",
      "reason": "3% hit rate (1/37 Tuesdays), steady trend. Typically 12-3PM. Latest (2026-06-30): Usually pushes between 12-3PM at guest services. This is another smaller location that receives quaint batches of stock in lesser frequency than other South OC stores, like San Cle"
    },
    "T151": {
      "chance": "Medium",
      "window": "",
      "reason": "No formal guide prediction, but 1 confirmed actual hit reported in chat on this weekday."
    },
    "T019": {
      "chance": "Medium",
      "window": "",
      "reason": "No formal guide prediction, but 1 confirmed actual hit reported in chat on this weekday."
    }
  },
  "wednesday": {
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "94% hit rate (32/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Sold Monday, check for more tomorrow. Been pushing when shipment comes in at guest serivces recently. Larger store that did not drop today. Check betwen 8-10AM, especially since S "
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "79% hit rate (27/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Been selling at opening almost daily! You can count on a line waiting for 8AM tomorrow. Be a bit early if you want the best chance of hitting. Also due for a vendor restock."
    },
    "T013": {
      "chance": "Medium",
      "window": "",
      "reason": "29% hit rate (10/34 Wednesdays), decreasing trend. Latest (2026-06-10): Hit today as posted here first!"
    },
    "T008": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been selling at opening these last few days without much of a crowd. Again, they sell 1 SKU at a time, so ppl choose other locations for this reason."
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "82% hit rate (28/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Sells basically everyday at multiple times, and they sell selectively. You can expect a 7AM line, and you can expect more between 11AM-2PM. GS will sell to whoever they want to."
    },
    "T001": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-05-27): Priority Wednesday stop alongside Alhambra. Usually one pops early while the other follows later afternoon"
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "74% hit rate (25/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-06-24): Normally stronger Thursday mornings but has absolutely switched to Wednesday before. Don't write it off"
    },
    "T002": {
      "chance": "High",
      "window": "7-8am",
      "reason": "47% hit rate (16/34 Wednesdays), decreasing trend. Typically 7-8am. Latest (2026-06-17): PRIMED please please be ready heads will be here early update from 7-8am store should confirm prior"
    },
    "T010": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Wednesdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-01): VERY DUE to sell tomorrow! They switch up the timing constantly. Check at opening. Seems more possible tmrw."
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "59% hit rate (20/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-07-01): Generally has a crowd of people checking daily at opening. Receives heavy stock when it does hit!"
    },
    "T124": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "15% hit rate (5/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-04-15): Hasn\u2019t hit so BE READY people will be on it and very likely to form a line like they did today!"
    },
    "T133": {
      "chance": "High",
      "window": "",
      "reason": "76% hit rate (26/34 Wednesdays), steady trend. Latest (2026-07-01): Literally the same as Fontana/Summit, posted directly above. Sells at guest services like Fontana/Summit!"
    },
    "T138": {
      "chance": "Medium",
      "window": "12PM-2PM",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically 12PM-2PM. Latest (2026-07-01): Sold last Weds at opening! Definitely one to be at tomorrow. Not confirmed, but you can expect a line of ppl here. They also push between 12PM-2PM in carts by guest services."
    },
    "T145": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Sells at opening and receives heavy stock. Check tomorrow, people are looking almost every morning."
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "85% hit rate (29/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been selling at opening, sold today at opening for example. They have a line every morning due to the recent consistency of drop time. Feel free to stop by tmrw!"
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "76% hit rate (26/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Been awfully dry to the point it seems like they are holding out for Friday. Many SFV stores have made the switch this week. Feel free to check 1 more time tmrw."
    },
    "T076": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "12% hit rate (4/34 Wednesdays), steady trend. Typically 11AM-1PM. Latest (2026-07-01): Selling by 11AM-1PM. Line will form even earlier since Newbury is not even due for stock tmrw. Going to be busier than usual."
    },
    "T069": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "88% hit rate (30/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-06-24): Received stock today. Can check morning or evening and last week hit at opening so expect heads checking!"
    },
    "T083": {
      "chance": "Medium",
      "window": "8-10AM",
      "reason": "56% hit rate (19/34 Wednesdays), steady trend. Typically 8-10AM. Latest (2026-06-24): Most reliable windows stay 8-10AM and 6-8PM did not hit today unless it goes late tonight! Last week did hit around 12:30-2"
    },
    "T080": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "12% hit rate (4/34 Wednesdays), increasing trend. Typically 10AM-12PM. Latest (2026-07-01): Been selling when shipment comes in, so it's actually a pretty decent check. Usually 10AM-12PM or during the night time."
    },
    "T022": {
      "chance": "Low",
      "window": "Opening",
      "reason": "82% hit rate (28/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-07-01): Unlikely that they sell tm, they sold today. Check time: 3-5PM!"
    },
    "T052": {
      "chance": "Medium",
      "window": "12:30-2:30PM",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically 12:30-2:30PM. Latest (2026-07-01): Has been selling daily recently, including Sat. It hits between 12:30-2:30PM."
    },
    "T053": {
      "chance": "Medium",
      "window": "",
      "reason": "50% hit rate (17/34 Wednesdays), decreasing trend. Latest (2026-07-01): Usually hits Tues or Weds! Not much chatter about this store today, check in at 8AM tmrw. If not, it SHOULD hit between 11-1 at guest services."
    },
    "T020": {
      "chance": "High",
      "window": "",
      "reason": "100% hit rate (34/34 Wednesdays), steady trend. Latest (2026-07-01): Weds are usually when this store starts hitting more! Line forms by 10AM, store sells by 12:30, hits daily, just be early."
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "35% hit rate (12/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Weds is usually a day where they sell at opening/earlier in the day. Check at 7AM and check at 10-12 if it's dry at 7!"
    },
    "T047": {
      "chance": "Low",
      "window": "3-6AM",
      "reason": "59% hit rate (20/34 Wednesdays), decreasing trend. Typically 3-6AM. Latest (2026-07-01): Supposedly still due! It also hit last Weds! Expect people to set up chairs by 3-6AM here. If it hits like last week, stock will be juicy since it's around a week of shipments accu"
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "91% hit rate (31/34 Wednesdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-01): Sells almost everyday. Some stock goes out at opening then people stick around for more once UPS delivers again around 11-12. Store usually sells aga..."
    },
    "T044": {
      "chance": "Low",
      "window": "7-8am",
      "reason": "76% hit rate (26/34 Wednesdays), decreasing trend. Typically 7-8am. Latest (2026-07-01): Stocked today so it seems unlikely that they will sell again tomorrow. Feel free to check in for any held stock between 9AM-12PM which is their most likely time to push randomly at"
    },
    "T045": {
      "chance": "Low",
      "window": "",
      "reason": "15% hit rate (5/34 Wednesdays), steady trend. Latest (2026-07-01): DID NOT stock today, still in play for tmrw. Vendor tends to stock at night. I was wrong yesterday when I said they stock Tues and I apologize. It was Weds, and it can happen again"
    },
    "T046": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "6% hit rate (2/34 Wednesdays), steady trend. Typically 9-11AM. Latest (2026-07-01): Similar to other smaller locations, they have started to receive ALMOST every other day. Check tomorrow at GS + check the card display between 9-11AM and 1-3PM."
    },
    "T038": {
      "chance": "High",
      "window": "1-3pm",
      "reason": "47% hit rate (16/34 Wednesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically 1-3pm. Latest (2026-07-01): Check at opening, alongside 7th & Fig. This store opens at 8AM, Fig is 7AM. If they're dry, prob holding for Fri."
    },
    "T049": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-07-01): Holding inventory it seems, likely Friday at opening! Should have Needohs/Squeezy at the bare minimum tmrw at opening, so it's still worth a check."
    },
    "T028": {
      "chance": "High",
      "window": "8-9AM",
      "reason": "91% hit rate (31/34 Wednesdays), steady trend. Typically 8-9AM. Latest (2026-07-01): Check at opening, but they sold today. 50/50 whether they double back tomorrow. That's your best time to check though!"
    },
    "T031": {
      "chance": "High",
      "window": "",
      "reason": "44% hit rate (15/34 Wednesdays), steady trend. Latest (2026-07-01): Expect a line by the tech area at random times, full of people hoping to catch the vendor.```"
    },
    "T030": {
      "chance": "High",
      "window": "7-8am",
      "reason": "53% hit rate (18/34 Wednesdays), increasing trend. Typically 7-8am. Latest (2026-07-01): FCFS with no VQ now, staff push when stock lands! Usually 7AM or 1-3PM once UPS delivers a 2nd shipment."
    },
    "T100": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (11/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Likely to drop at opening/mid-morning. It does not matter when the product actually goes out, tmrw is the day so expect a long line prior, by 7-8AM... HUGE STOCK STORE!!!"
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (33/34 Wednesdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-01): Hit today but you can peep tomorrow for random small batches! Realistically, their next drop will be Thursday and/or Friday."
    },
    "T098": {
      "chance": "High",
      "window": "8-10am",
      "reason": "74% hit rate (25/34 Wednesdays), increasing trend. Typically 8-10am. Latest (2026-07-01): Expect a line here at opening. This store usually hits on Wednesday by 10:30AM. A line is formed every Weds by around opening! Staff will usually announce a sell time."
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "79% hit rate (27/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): OPENING VQ WILL GO DOWN. Expect a deep line before the doors even open! Hits every M/W/F! Had 15 in line around opening last week."
    },
    "T107": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (23/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Such a big Mond/Weds/Fri hitter. We've seen this store sell towards the afternoon after lines disperse, BUT TMRW, A LINE WILL FORM IN THE MORNING. EASY HIT AS LONG AS YOU ARRIVE ON"
    },
    "T102": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "9% hit rate (3/34 Wednesdays), steady trend. 1 confirmed actual hit reported in chat. Typically 9-11AM. Latest (2025-10-22): Possible drops here. Prefers late morning 9-11AM, but also has a shot at 2-4PM."
    },
    "T119": {
      "chance": "High",
      "window": "5-7AM",
      "reason": "38% hit rate (13/34 Wednesdays), increasing trend. Typically 5-7AM. Latest (2026-07-01): Claims they're doing random but it should still be tomorrow so expect a line to form by 9-10AM. Usually sells by 1PM. Pretty consistent Weds hitter!"
    },
    "T110": {
      "chance": "Medium",
      "window": "10-11:30AM",
      "reason": "32% hit rate (11/34 Wednesdays), decreasing trend. Typically 10-11:30AM. Latest (2026-02-25): Usually will sell Thursday here so expecting it then"
    },
    "T055": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Like we posted today, they hit between 10-11 or from 2-4. Check in those 2 timeframes at GS!"
    },
    "T056": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (23/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been holding their stock for Fridays at opening. They pass #'d tix 30 mins-1 hour before opening."
    },
    "T025": {
      "chance": "High",
      "window": "",
      "reason": "85% hit rate (29/34 Wednesdays), steady trend. Latest (2026-07-01): This and Gardena sell on similar timeframes. GS checks between 11-1 and 4-6."
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "91% hit rate (31/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): CHECK 7AM OPENING. Has not sold this week so realistically, they might be holding until Friday."
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "91% hit rate (31/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-07-01): Midweek remains their best timeframe. Most movement happens around opening, or late afternoon to night time."
    },
    "T039": {
      "chance": "High",
      "window": "12-2PM",
      "reason": "79% hit rate (27/34 Wednesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically 12-2PM. Latest (2026-07-01): Friday motherloads have been consistent here! Thurs is usually the 2nd most consistent day, between 12-2PM. Feel free to checl in that range tmrw."
    },
    "T034": {
      "chance": "Medium",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), steady trend. Latest (2026-03-11): Check in in case of any light leftovers !"
    },
    "T051": {
      "chance": "Medium",
      "window": "",
      "reason": "44% hit rate (15/34 Wednesdays), decreasing trend. Latest (2026-07-01): Usually hits on the same day as Cerritos/South St, shortly after. If South sells, ppl will immediately rush over here to linger, expecting a drop after."
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Similar story to Pomona. Traditionally Thursday but recent employee pushes make it worth attention! People will start lining up tmrw since it hasn't hit these last few days."
    },
    "T012": {
      "chance": "Medium",
      "window": "",
      "reason": "82% hit rate (28/34 Wednesdays), decreasing trend. Latest (2026-05-27): Vendor should land tomorrow or Thursday. Check 9-12 then intensify later because timing has shifted earlier recently"
    },
    "T004": {
      "chance": "Medium",
      "window": "",
      "reason": "26% hit rate (9/34 Wednesdays), steady trend. Latest (2026-06-03): Lines will start early early at both as they are PRIMED to hit"
    },
    "T018": {
      "chance": "Low",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-07-01): Could be a sneaky opening push at guest services which they have done on Weds/Thurs before. Check in! If not, due for a vendor stock in the afternoon. Ppl will lurk by 1-2 esp with"
    },
    "T122": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Wednesdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-01): Due for their 2nd stock of the week tmrw! You can expect a line to be here by 10AM or so. Hits before or after Eastvale."
    },
    "T123": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "38% hit rate (13/34 Wednesdays), decreasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-05-20): Opening checks then rotate. Morning matters most here as it\u2019s last one that hasn\u2019t hit```"
    },
    "T112": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Pushes daily, usually at opening! Sometimes, they switch it up, but every morning, there is a line of people checking. Opens at 8AM. Solid option for where to start."
    },
    "T070": {
      "chance": "High",
      "window": "3-4pm",
      "reason": "59% hit rate (20/34 Wednesdays), increasing trend. Typically 3-4pm. Latest (2026-07-01): Can check for a guest services push between 12PM-2PM! Been selling more frequently when shipment comes in. People spawn here so if you're not waiting on it, you're likely cooked."
    },
    "T067": {
      "chance": "High",
      "window": "8-9am",
      "reason": "74% hit rate (25/34 Wednesdays), steady trend. 1 confirmed actual hit reported in chat. Typically 8-9am. Latest (2026-06-24): Expecting inventory tomorrow. Multiple shipments weekly and strongest windows remain 8-9am and 1-4"
    },
    "T084": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Posted in the LA guide, already a line for 7AM opening."
    },
    "T068": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "88% hit rate (30/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-06-24): Wednesday opening has been hitting lately but did sell today! Store tends to"
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-06-24): Cochran hit today but can go multiple days so people will"
    },
    "T035": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "12% hit rate (4/34 Wednesdays), steady trend. Typically 10AM-12PM. Latest (2026-07-01): X factor between 10AM-12PM if they push at guest services."
    },
    "T114": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "9% hit rate (3/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): SAME AS JERONIMO, THE EXACT SAME. Daily lines at opening here! Due for stock at opening if they received anything today, check in. A line of 10+ forms daily."
    },
    "T064": {
      "chance": "High",
      "window": "Opening",
      "reason": "59% hit rate (20/34 Wednesdays), steady trend. Typically Opening. Latest (2026-06-24): Has lately been holding for Fridays here"
    },
    "T057": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Check at 7AM, this store is still due! It will either hit then or between 10-12 since they have not sold much. If nothing drops tmr, they're prob holding for Fri 7AM."
    },
    "T037": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "35% hit rate (12/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-02-25): Did not seem to hit check tomorrow 9-11!"
    },
    "T095": {
      "chance": "Medium",
      "window": "",
      "reason": "41% hit rate (14/34 Wednesdays), decreasing trend. Latest (2026-05-27): VQ in the morning around 9-10:30 usually! Selling usually happens from 10-12 here!"
    },
    "T089": {
      "chance": "Medium",
      "window": "",
      "reason": "56% hit rate (19/34 Wednesdays), decreasing trend. Latest (2026-05-27): 12-3 remains strongest but store has been leaning towards Friday drops! Not definitive and store will usually disperse a line if nothing hits"
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "76% hit rate (26/34 Wednesdays), steady trend. Typically Opening. Latest (2026-06-24): Stayed quiet today so expect heavy opening attention plus another sweep from 9:30-12. Store often breaks inventory into multiple waves"
    },
    "T090": {
      "chance": "High",
      "window": "8-10am",
      "reason": "56% hit rate (19/34 Wednesdays), steady trend. 1 confirmed actual hit reported in chat. Typically 8-10am. Latest (2026-07-01): Holding for Friday."
    },
    "T071": {
      "chance": "Medium",
      "window": "1-4PM",
      "reason": "53% hit rate (18/34 Wednesdays), decreasing trend. Typically 1-4PM. Latest (2026-07-01): CHECK AT OPENING IN CASE THEY SWITCH UP. If not, they will drop at their usual time, 1-4PM. You can 100% gurantee yourself that a line will form early. As long as you are early, yo"
    },
    "T091": {
      "chance": "Low",
      "window": "",
      "reason": "15% hit rate (5/34 Wednesdays), steady trend. Latest (2026-07-01): Hits very randomly at guest services, can sprinkle in a check if you are in the area."
    },
    "T167": {
      "chance": "Medium",
      "window": "",
      "reason": "26% hit rate (9/34 Wednesdays), decreasing trend. Latest (2026-07-01): Holding for Friday."
    },
    "T072": {
      "chance": "Low",
      "window": "",
      "reason": "41% hit rate (14/34 Wednesdays), decreasing trend. Latest (2026-07-01): Don't really have a timeframe here yet, we're working on it. Adding this store to remind you all that it is now random, and not only on Friday! Check at guest services + in the car"
    },
    "T048": {
      "chance": "High",
      "window": "Opening",
      "reason": "59% hit rate (20/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Store has been holding for Fridays at opening recently. Even pulled OP that got put out on a day before Fri once a surge of ppl came in last week to sell it alongside Poke on Frida"
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "62% hit rate (21/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Still dry today, likely to hit tom. Expect heavy lines, people send it over after Balboa sometimes. Easy route though!"
    },
    "T097": {
      "chance": "High",
      "window": "12:45-2:00PM",
      "reason": "50% hit rate (17/34 Wednesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically 12:45-2:00PM. Latest (2026-07-01): Usually every Wednesday by 1PM! Expect a line to form here early. If Garden Grove/Harbor or Fullerton/Yorba Linda hits, be on HEAVY ALERT HE..."
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Likely Thursday and/or Friday at opening. Might only be Fri this week if they hold for Mega Greninja's release."
    },
    "T003": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Been stocking randomly! Either opening or 11AM-1PM. Gets cleaned out very quickly."
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been hitting almost daily! Check at opening for today's items + between 2-4PM for whatever UPS delivers midday at GS"
    },
    "T063": {
      "chance": "Medium",
      "window": "",
      "reason": "50% hit rate (17/34 Wednesdays), decreasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-17): Normally I\u2019d say Friday hold, but this store feels ready to throw a curveball to avoid crowds. Check it"
    },
    "T043": {
      "chance": "High",
      "window": "",
      "reason": "62% hit rate (21/34 Wednesdays), increasing trend. Latest (2026-07-01): MORNING VQ OR DROP AGAIN. People are arriving absurdly early store will either drop items FCFS or take a VQ! This is @voodoo's take from last week."
    },
    "T116": {
      "chance": "Low",
      "window": "Opening",
      "reason": "12% hit rate (4/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Same situation as Signal Hill. Last week, Signal hit first, then Seal went after, which is usually how it goes down. Both stores will have lines before opening though since they ar"
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Opening check! Did not hit today. Been pushing at opening and throughout the day, between 1-3PM mainly. Lines form outside now."
    },
    "T137": {
      "chance": "High",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-01): Reminder, they switched to random drop times now. Not as likely for tomorrow at opening, but they should sell at some point unless it hit today. ..."
    },
    "T029": {
      "chance": "High",
      "window": "11-2pm",
      "reason": "47% hit rate (16/34 Wednesdays), increasing trend. Typically 11-2pm. Latest (2026-07-01): Ask at GS! This store tends to hold in the back and sell selectively. Usually between 9-11AM."
    },
    "T111": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Wednesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-01): STILL A WEDNESDAY STORE. If nothing happens at opening, make sure to circle back later around 1-4 because store will sell at least a bit at some ..."
    },
    "T093": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Wednesdays), increasing trend. Latest (2026-06-10): Still appears quiet. Focus on 8-9:30 and 1-3 possible tomorrow or Thursday"
    },
    "T113": {
      "chance": "Medium",
      "window": "1-4pm",
      "reason": "38% hit rate (13/34 Wednesdays), increasing trend. Typically 1-4pm. Latest (2026-06-10): Morning first. Focus on Alicia and Jeronimo. If quiet early then watch for a sneaky 1-4PM release still"
    },
    "T066": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-05-06): Random lately. Morning, 12:30-2, or 7-9 all valid. DAILY CHECK STORE as seen today"
    },
    "T059": {
      "chance": "Medium",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), steady trend. Latest (2026-07-01): Dropped today but they have been slow recently. Expecting another drop tomorrow. Check 12-1 and 4-5 tomorrow."
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Daily opening check! Every morning, this store has a line. They usually sell some at 8AM then drop again between 1-3PM. Consistent store, hits almost daily."
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Weds AM continues to be their strongest pattern. Likely received tonight so check at opening, they'll either push at 7AM or from 10-11AM at GS."
    },
    "T117": {
      "chance": "High",
      "window": "",
      "reason": "35% hit rate (12/34 Wednesdays), increasing trend. Latest (2026-06-17): Has leaned Friday hard lately but still deserves a quick look tomorrow in case only had portfolios today"
    },
    "T121": {
      "chance": "Medium",
      "window": "10:30AM-1PM",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically 10:30AM-1PM. Latest (2026-07-01): Guest services will sell when ready and a line will form by opening. Usually, they push stock by 10:30AM-1PM recently. Doesn't matter because the line arrives early."
    },
    "T106": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Wednesdays), steady trend. 1 confirmed actual hit reported in chat. Latest (2026-06-24): Hit today as posted!"
    },
    "T120": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-05-27): As warned did sell today so look for another batch Thursday!"
    },
    "T074": {
      "chance": "High",
      "window": "Opening",
      "reason": "35% hit rate (12/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Supposedly still due for stock! Could be a sneaky 7AM check if you're willing to risk it. If not, check throughout the day. Due for a vendor stock this week so people will wait in "
    },
    "T104": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Wednesdays), steady trend. Latest (2026-06-17): Euclid sold as warned but light stock. Lincoln and Hills can both sell tomorrow earlier or hold for Friday, so check in"
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-01): Giving this store 1 more chance to sell at opening which they have done the last few weeks. Already a line at Walmart Pico Rivera. Ppl will be her..."
    },
    "T007": {
      "chance": "High",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Vendor was spotted here 2 Weds in a row between 1-2:30PM. Last week, they did not sell, and the week before, they trickled stock out 1 SKU at a time. Check in the aisle periodicall"
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Opening checks! They sell their previous morning's shipment each day at opening AND they still allow 2 per SKU. Sold the last 2 days!"
    },
    "T032": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Latest (2026-05-13): Two SOLID checks in the morning very often missed pls check in and update and dm me if you do!"
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Sells daily at this point. Been between 1-3 the last week or so but don't count out an earlier drop. Ask guest services, this store hits daily."
    },
    "T105": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Sold today so it seems unlikely that they will sell tomorrow."
    },
    "T077": {
      "chance": "Low",
      "window": "11AM-2PM",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically 11AM-2PM. Latest (2026-06-24): Best checks remain morning and 11AM-2PM but did sell a bit heavier today"
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Posted in the LA guide; reminder to check at 8AM opening."
    },
    "T041": {
      "chance": "High",
      "window": "8-10am",
      "reason": "21% hit rate (7/34 Wednesdays), increasing trend. Typically 8-10am. Latest (2026-07-01): Unless it surprises everyone tonight, check at opening. Last week, they held a large amount of stock and sold Fri afternoon. Be mindful."
    },
    "T016": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically Opening. Latest (2026-05-20): HIGH chance for a morning drop expect heads before opening and line to be here waiting!"
    },
    "T092": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Latest (2026-05-20): Vendor arrived but said no Poke so look if store pushes some out tomorrow morning time! If not may be holding for Friday"
    },
    "T058": {
      "chance": "High",
      "window": "3-5PM",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically 3-5PM. Latest (2026-07-01): It has been consistent for the afternoon time recently! 3-5PM, closer to 4-5 usually if recent trends follow."
    },
    "T087": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "9% hit rate (3/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Sold today so it's not as likely that they drop tmrw. Feel free to check at opening which is around when they sold today."
    },
    "T094": {
      "chance": "Low",
      "window": "",
      "reason": "12% hit rate (4/34 Wednesdays), increasing trend. Latest (2026-06-24): Hit today great updates and catches!"
    },
    "T115": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "9% hit rate (3/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): As a smaller store, they are prone to selling tmrw at opening. They did not have much today. Sleeper check! If not, rotate from 12-2PM. Same timing as San Clemente."
    },
    "T017": {
      "chance": "High",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. 1 confirmed actual hit reported in chat. Latest (2026-06-24): Has not hit and on occasion will hit in the morning so keep eyes! May also hold here but be ready"
    },
    "T050": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): They will drop again this week! The 2nd drop is usually easier than the Mon one to catch, and hits randomly Weds or Thurs between 12-2PM usually."
    },
    "T159": {
      "chance": "High",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): Weds frequent hitter. People camp out here because they receive solid stock AND hit every Weds!"
    },
    "T148": {
      "chance": "Low",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): M/W/F schededule normally, but schedule this week, it seems random. People will start crowding towards the afternoon and there will be a line checking at opening."
    },
    "T162": {
      "chance": "Low",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): High chance for tom, Balboa peeps jump here when they hear the news. hits randomly. Just go after Balboa and wait it out if you need a move."
    },
    "T146": {
      "chance": "Low",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): Vendor day tom or Thu. Randomly drops but trending Fri afternoon for almost 3 weeks now. People have been prioritizing other stores on Weds recently."
    },
    "T158": {
      "chance": "High",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Ligher drop today! Hits consistently and their regular large drop day is Weds so might be good tom. Check opening and 11-2."
    },
    "T156": {
      "chance": "Low",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): People linger in the toy section to avoid the area where the vendor stocks because they hate lines. Sells randomly but it usually hits Wednesday. Will be lingered!"
    },
    "T161": {
      "chance": "High",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Usually sells when they want at opening. Long lines most mornings. As long as you arrive a bit early, you should be good to grab what they sell, if at all!"
    },
    "T150": {
      "chance": "Low",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): Hits very randomly, receives light stock, and does 2 per SKU. It is only great for first few people to hit. Tougher catch!"
    },
    "T054": {
      "chance": "Medium",
      "window": "7-9:30AM",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically 7-9:30AM. Latest (2026-07-01): Been selling at 7AM recently! Sold at opening today! Double back tmrw between 7-9:30AM."
    },
    "T060": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Only hit with a small amount of OP today. Check between opening and 10AM, UPS delivers in the morning."
    },
    "T019": {
      "chance": "Medium",
      "window": "8-11AM",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically 8-11AM. Latest (2026-07-01): Sleeper store that sells between 8-11AM almost daily."
    },
    "T033": {
      "chance": "Medium",
      "window": "12-1PM",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically 12-1PM. Latest (2026-07-01): Sells almost daily at GS by 12-1PM. They will be on everyday's guide. A line forms outside of the store until UPS delivers."
    },
    "T164": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Latest (2026-07-01): Stocked Monday, likely to stock again Thursday or Friday. Unlikely for tomorrow!```"
    },
    "T166": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Member informed us they've been pushing DAILY at guest services in the morning, at opening or between 10-1. Usually consistent with Fullerton/Orangethorpe's shipment days!"
    },
    "T101": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically 11AM-1PM. Latest (2026-07-01): Fridays and some Wednesdays here! Usually at opening or around 11AM-1PM. They sell at guest services and it's a total sleeper store!"
    },
    "T096": {
      "chance": "Medium",
      "window": "8-9AM",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically 8-9AM. Latest (2026-07-01): Sleeper for Weds/Thursday. On Fri, they run VQ. On Weds or Thurs, they selectively sell at guest services starting around 8-9AM. Check tomorrow morning! Then, if it hits, be on Cyp"
    },
    "T079": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Sold last Weds at opening! Usually sells at 7AM so it's a great check tomorrow at opening. Don't count this store out!"
    },
    "T125": {
      "chance": "Medium",
      "window": "2-5PM",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically 2-5PM. Latest (2026-07-01): Seems VERY likely for a Thursday drop! You can still check tomorrow between 2-5PM which is their daily drop time when it DOES end up hitting."
    },
    "T153": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): The past few weeks, they have been dropping Mon to Wed, so check at opening, as they might still have something tom. People will be here regardless."
    }
  },
  "thursday": {
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "38% hit rate (13/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-25): MULTIPLE WAVE MACHINE. Opening, 9-11, then 1-3. Keep looping they restock constantly"
    },
    "T039": {
      "chance": "High",
      "window": "",
      "reason": "71% hit rate (24/34 Thursdays), increasing trend. 2 confirmed actual hits reported in chat. Latest (2026-07-02): Main focus stays around 10-12. Store MAY hold until Friday but check in and ask as release is not super big!"
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (33/34 Thursdays), steady trend. Typically Opening. Latest (2026-06-25): SAME PLAN AS ALWAYS. Start at opening and keep HEAVY eyes from 11-1 because that remains the danger window here."
    },
    "T024": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "15% hit rate (5/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-04-09): Did not stock up today check tomorrow again opening or more likely 10-12!```"
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "88% hit rate (30/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-07-02): Overdue for a 7am drop so check again and if not expect a HAUL on Friday"
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (23/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Opening is still your best opportunity with backup checks around 10-12 since Gardena stocked but expected for Friday at openjng"
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "44% hit rate (15/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-02-26): Morning VQ should go up at Friday at opening"
    },
    "T043": {
      "chance": "Medium",
      "window": "9-11am",
      "reason": "44% hit rate (15/34 Thursdays), decreasing trend. 1 confirmed actual hit reported in chat. Typically 9-11am. Latest (2026-02-05): Hit Tuesday this week so not expected to go again"
    },
    "T049": {
      "chance": "Low",
      "window": "1-3PM",
      "reason": "29% hit rate (10/34 Thursdays), decreasing trend. Typically 1-3PM. Latest (2026-05-07): HAS NOT HIT. Morning or 4-6 fallback if not lock in Friday morning."
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Morning shipment check. Store has been selling closer to when inventory arrives so keep an eye on opening before circling back later. Is overdueee here"
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (17/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-07-02): Again basically daily checks here at 7am! Store drops whatever they receive"
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (34/34 Thursdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-02): Opening shipment checks remain mandatory but keep circling back around 11-1"
    },
    "T082": {
      "chance": "Medium",
      "window": "",
      "reason": "26% hit rate (9/34 Thursdays), decreasing trend. Latest (2026-01-15): Drops late week usually Friday but can check 8-10!"
    },
    "T065": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-02-26): 11-2 here usually but would imagine they wait a bit"
    },
    "T083": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Likely holding for Friday"
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (33/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Likely holding for Friday here!"
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (33/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): MAY be holding for Friday but can check at opening in case!"
    },
    "T064": {
      "chance": "High",
      "window": "Opening",
      "reason": "82% hit rate (28/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-05-21): More likely Friday but quick checks especially 5-8 if nothing opening. Morning still possible"
    },
    "T072": {
      "chance": "Medium",
      "window": "6-8PM",
      "reason": "29% hit rate (10/34 Thursdays), decreasing trend. Typically 6-8PM. Latest (2026-02-26): May wait until Friday morning here or weekend as is the usual but like Woodland shipments are up so check in"
    },
    "T086": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-02-26): Sherwood"
    },
    "T156": {
      "chance": "Low",
      "window": "8-11am",
      "reason": "6% hit rate (2/34 Thursdays), steady trend. Typically 8-11am. Latest (2025-10-23): Madera/Cochean - Checks  from 8-11am."
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "44% hit rate (15/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Still feels like heavier inventory may be waiting for Friday but opening and 11-1 remain worthwhile especially at Summit!"
    },
    "T121": {
      "chance": "Medium",
      "window": "",
      "reason": "53% hit rate (18/34 Thursdays), decreasing trend. Latest (2026-07-02): Store has been all over the place so expect heads again to be waiting here until"
    },
    "T122": {
      "chance": "Medium",
      "window": "",
      "reason": "32% hit rate (11/34 Thursdays), decreasing trend. Latest (2026-05-14): DID NOT hit today! Be ready for round 2 tomorrow of a line forming!"
    },
    "T138": {
      "chance": "Medium",
      "window": "8-9:30am",
      "reason": "44% hit rate (15/34 Thursdays), decreasing trend. Typically 8-9:30am. Latest (2026-02-26): 8-10 be ready! if it doesn\u2019t hit check 5-7 but should be morning time or Friday store is random all week"
    },
    "T145": {
      "chance": "Medium",
      "window": "11am-2pm",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Typically 11am-2pm. Latest (2025-11-13): Has dropped previously 9-11AM - check in at guest services!"
    },
    "T044": {
      "chance": "High",
      "window": "7-8AM",
      "reason": "68% hit rate (23/34 Thursdays), increasing trend. Typically 7-8AM. Latest (2026-07-02): Thursday remains one of the better patterns here. Get there early as people tend to wait it out here!"
    },
    "T104": {
      "chance": "Medium",
      "window": "",
      "reason": "9% hit rate (3/34 Thursdays), steady trend. Latest (2026-05-21): Euclid hit morning today as warned. Hills as well. Both were in guide. Anaheim Lincoln as posted last night is typical for Friday but can check in case!"
    },
    "T119": {
      "chance": "Medium",
      "window": "9-10am",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. 1 confirmed actual hit reported in chat. Typically 9-10am. Latest (2026-07-02): Staff hinted at more random vendor releases instead of the old schedule. Continue checking in expect people to try and tuck this store a bit so be ..."
    },
    "T117": {
      "chance": "High",
      "window": "",
      "reason": "71% hit rate (24/34 Thursdays), decreasing trend. Latest (2026-06-04): Morning and early afternoon remain strongest has not seemed to hit!"
    },
    "T114": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2025-10-09): Same as Jeronimo. Unfortunately, the 2 major MV stores are grimey/selective with who they sell Pokemon product to."
    },
    "T089": {
      "chance": "Medium",
      "window": "2-6PM",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Typically 2-6PM. Latest (2026-01-29): Did not seem to sell today check in!"
    },
    "T110": {
      "chance": "High",
      "window": "",
      "reason": "100% hit rate (34/34 Thursdays), steady trend. Latest (2026-07-02): Expect another huge allocation. Lottery setup should continue with another large crowd being here right at 8am when line up is allowed to start ."
    },
    "T095": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "21% hit rate (7/34 Thursdays), decreasing trend. Typically 9-11AM. Latest (2025-12-11): Check in tomorrow again 10-12 did not hit today! Or opening time too"
    },
    "T094": {
      "chance": "Medium",
      "window": "10-11AM",
      "reason": "35% hit rate (12/34 Thursdays), decreasing trend. Typically 10-11AM. Latest (2026-01-29): Might receive a restock check in 9-11 in case"
    },
    "T102": {
      "chance": "Medium",
      "window": "12:30-2:30PM",
      "reason": "71% hit rate (24/34 Thursdays), decreasing trend. 1 confirmed actual hit reported in chat. Typically 12:30-2:30PM. Latest (2026-05-07): Morning check in case but may wait until evening or Friday morning"
    },
    "T015": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Never a bad stop. Opening remains strong but later releases continue happening consistently."
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-02): Opening employee push remains one of the safest bets. Continue checking later because store will sell multiple times a day"
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "82% hit rate (28/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Look for a morning drop or vendor! Hit on Monday but store can drop multiple times as we have seen almost weekly! May be limited as they also hold back stock"
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "91% hit rate (31/34 Thursdays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-02): One of tomorrow's biggest targets if today truly stayed quiet. Thursdays continue fitting this store whether it happens early morning or midday 12-3 p..."
    },
    "T013": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Thursdays), steady trend. Latest (2026-06-18): Morning check is solid but pls keep eyes from 12-4 ask at guest services!"
    },
    "T010": {
      "chance": "High",
      "window": "",
      "reason": "29% hit rate (10/34 Thursdays), increasing trend. 1 confirmed actual hit reported in chat. Latest (2026-07-02): Worth watching did not seem to hit today and store sells CONSTANTLY in small batches multiple days a week"
    },
    "T002": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Likely tomorrow! As I\u2019ve posted store hire multiple times a week by employees at opening and then vendor usually stops by around 12-3 as well"
    },
    "T076": {
      "chance": "Medium",
      "window": "8-11am",
      "reason": "6% hit rate (2/34 Thursdays), steady trend. Typically 8-11am. Latest (2025-10-30): Should stock up next after Cochran! Most likely morning 9-11 check in!"
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Cochran may be moving to Friday\u2019s only! Madera still deserves attention from 10-12 as they seem to be not in the Friday wave yet"
    },
    "T124": {
      "chance": "Medium",
      "window": "1-4PM",
      "reason": "44% hit rate (15/34 Thursdays), decreasing trend. Typically 1-4PM. Latest (2026-03-12): Seems to have already stocked up this week"
    },
    "T123": {
      "chance": "Medium",
      "window": "",
      "reason": "26% hit rate (9/34 Thursdays), decreasing trend. Latest (2026-03-12): Has not seemed to hit and with IE schedule being wonky check in the morning!"
    },
    "T088": {
      "chance": "High",
      "window": "",
      "reason": "38% hit rate (13/34 Thursdays), decreasing trend. Latest (2026-07-02): VQ happened exactly as expected today. Next drop Friday here"
    },
    "T115": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2025-10-16): If youre in the area definitely a sleeper store that can drop decent stock. Rotate checks throughout the day as it is random.```"
    },
    "T045": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-04-30): Keep checks in 8-10ish or 2-4 will either sell tomorrow or Friday ```"
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "88% hit rate (30/34 Thursdays), decreasing trend. 2 confirmed actual hits reported in chat. Typically Opening. Latest (2026-07-02): If it stayed quiet this morning then another opening check is deserved but may be holding for Friday"
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-02): Morning attention first, then another sweep around 1-4. The longer the day goes the more people tend to gather here. can hit late into the night i..."
    },
    "T001": {
      "chance": "Medium",
      "window": "",
      "reason": "44% hit rate (15/34 Thursdays), decreasing trend. Latest (2026-06-18): Two stores here keep an eye out for a morning push at both!"
    },
    "T022": {
      "chance": "Low",
      "window": "Opening",
      "reason": "71% hit rate (24/34 Thursdays), steady trend. Typically Opening. Latest (2026-06-18): Worth a quick opening stop if you're already nearby. Never forget this store has randomly gone late at night before"
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "71% hit rate (24/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Broke away from the usual schedule and sold a bit tonight late but expect more Friday!"
    },
    "T037": {
      "chance": "Medium",
      "window": "",
      "reason": "68% hit rate (23/34 Thursdays), decreasing trend. Latest (2026-05-28): More weekend lately. Quick 8:30-10 or 10-12 checks still worthwhile though as they may have stock held back! Again check 8-9 really"
    },
    "T063": {
      "chance": "Medium",
      "window": "",
      "reason": "71% hit rate (24/34 Thursdays), decreasing trend. Latest (2026-05-21): Waiting for Friday here"
    },
    "T007": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "50% hit rate (17/34 Thursdays), steady trend. Typically Opening. Latest (2026-06-25): Store holds product. Look for an opening push by employees or mid day"
    },
    "T008": {
      "chance": "High",
      "window": "1-3pm",
      "reason": "68% hit rate (23/34 Thursdays), increasing trend. 1 confirmed actual hit reported in chat. Typically 1-3pm. Latest (2026-07-02): Quiet sleeper. Best windows remain 8-9:30 and 1-3 with employee pushes making it possible multiple times a week/day"
    },
    "T018": {
      "chance": "Medium",
      "window": "",
      "reason": "35% hit rate (12/34 Thursdays), decreasing trend. Latest (2026-02-26): Hit yesterday but can check in for employee pushes"
    },
    "T033": {
      "chance": "High",
      "window": "",
      "reason": "9% hit rate (3/34 Thursdays), increasing trend. Latest (2026-07-02): Will receive stock tomorrow and 50/50 whether they sell or hold for Friday so expect heads to be here waiting from 8-11ish until store confirms!"
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "82% hit rate (28/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Opening through early afternoon still looks best. Small chance they sit on inventory until Friday so keep that in mind."
    },
    "T058": {
      "chance": "High",
      "window": "6-8PM",
      "reason": "76% hit rate (26/34 Thursdays), increasing trend. Typically 6-8PM. Latest (2026-07-02): Keep both stores active. Opening first, another look around 10-12, then later in the day. Broadway can get later shipments"
    },
    "T048": {
      "chance": "Medium",
      "window": "",
      "reason": "32% hit rate (11/34 Thursdays), steady trend. Latest (2026-07-02): Typcially Fridays in release week but check morning time as they can sell other items!"
    },
    "T046": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Typically Opening. Latest (2025-11-13): Receives Poke now and should be checked/treated accordingly. Check @ opening and between 12-2; usual delivery + drop times here."
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Stayed quiet which makes opening tomorrow even more important."
    },
    "T074": {
      "chance": "Medium",
      "window": "2-4PM",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Typically 2-4PM. Latest (2025-11-13): Vendor has not stocked all week. Has been waiting for Phantasmal to arrive. Will stock tmrw or Fri between 2-4PM."
    },
    "T079": {
      "chance": "Medium",
      "window": "",
      "reason": "12% hit rate (4/34 Thursdays), increasing trend. Latest (2026-07-02): Still feels more like a Friday store but has shown it will occasionally leak inventory beforehand so can cbeck!"
    },
    "T087": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Thursdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-04): Expect people there before opening. If it misses early keep rotating all day"
    },
    "T081": {
      "chance": "Medium",
      "window": "",
      "reason": "6% hit rate (2/34 Thursdays), steady trend. Latest (2026-07-02): May have hit today so check again Friday!"
    },
    "T080": {
      "chance": "High",
      "window": "Opening",
      "reason": "29% hit rate (10/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Opening through 8-10 first then rerun later. They drop as they get shipment!"
    },
    "T166": {
      "chance": "High",
      "window": "Opening",
      "reason": "85% hit rate (29/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Store hits Thursday\u2019s whether or not they take a VQ will depend on employees! Expect heads here at opening 7am and then people to stay until it hits! Usually by 10-11 but sometimes"
    },
    "T032": {
      "chance": "Low",
      "window": "2-5PM",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Typically 2-5PM. Latest (2025-11-13): Just started w/ cards, no PF yet. Check randomly; mainly between 2-5PM."
    },
    "T091": {
      "chance": "Medium",
      "window": "",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. Latest (2026-07-02): Morning through mid-afternoon remains strongest. Expected to hit tomorrow hits Tuesdays / Thursday\u2019s usually"
    },
    "T101": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2025-11-13): Smaller store, vendor usually stocks on Fri here."
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "74% hit rate (25/34 Thursdays), steady trend. Typically Opening. Latest (2026-06-25): Did exactly what was posted and sold at opening today."
    },
    "T055": {
      "chance": "Low",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-02-26): Hit today at opening be on it as stated typically openings here or 1-3"
    },
    "T047": {
      "chance": "High",
      "window": "",
      "reason": "41% hit rate (14/34 Thursdays), decreasing trend. Latest (2026-05-28): When it skips Mondays it tends to Hit Thursday\u2019s so BE READY. EXPECT CHAIRS TONIGHT and heads to wait it out! Does"
    },
    "T107": {
      "chance": "Medium",
      "window": "",
      "reason": "68% hit rate (23/34 Thursdays), decreasing trend. Latest (2026-05-28): Early lines and usually strongest around 11-2. SHOULD FIRE because it seems to have skipped today"
    },
    "T092": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Latest (2026-02-26): Restocked earlier may receive a bit but Friday will be bigger drop"
    },
    "T017": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "62% hit rate (21/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-07-02): Hit this week look for a bit more Friday morning"
    },
    "T051": {
      "chance": "Low",
      "window": "",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Latest (2026-01-29): Just restocked a few days ago anything else may be an employee kush"
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-25): NEVER A BAD CHECK. Store randomizes releases constantly and opening remains the best place to start, but today again proved later pushes are always possible"
    },
    "T053": {
      "chance": "High",
      "window": "1-4PM",
      "reason": "21% hit rate (7/34 Thursdays), increasing trend. Typically 1-4PM. Latest (2026-07-02): Both deserve attention. Morning isn't bad but Thursday afternoons continue to fit these stores best, especially WeHo from 1-4! Sunset always pushed Friday release days so less pres"
    },
    "T059": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2026-01-22): Should have some TCG by registers tomorrow check morning all the way to 12ish"
    },
    "T066": {
      "chance": "Low",
      "window": "",
      "reason": "38% hit rate (13/34 Thursdays), decreasing trend. Latest (2026-06-18): Again another store that may be dropping randomly more and more!"
    },
    "T167": {
      "chance": "High",
      "window": "",
      "reason": "24% hit rate (8/34 Thursdays), increasing trend. Latest (2026-07-02): Store continues saying Friday"
    },
    "T030": {
      "chance": "Medium",
      "window": "8-11am",
      "reason": "18% hit rate (6/34 Thursdays), increasing trend. Typically 8-11am. Latest (2026-07-02): Watch closely for FCFS items store gets tucked a but receives HEAVY stock so always worth checks! Lines start at 7am opening and stay through"
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "38% hit rate (13/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-18): Did not sell today so unless they sell tonight expect a LINE at opening early early"
    },
    "T041": {
      "chance": "Medium",
      "window": "",
      "reason": "9% hit rate (3/34 Thursdays), increasing trend. Latest (2026-07-02): Has been holding for Fridays a bit and also it\u2019s release week but heads will check regardless morning time!"
    },
    "T137": {
      "chance": "Low",
      "window": "",
      "reason": "9% hit rate (3/34 Thursdays), steady trend. Latest (2026-07-02): Store claims to be doing random drops but may be holding for Friday this week but worth a check!"
    },
    "T100": {
      "chance": "Medium",
      "window": "",
      "reason": "35% hit rate (12/34 Thursdays), decreasing trend. Latest (2026-05-21): Hit today as it does on Weds!"
    },
    "T106": {
      "chance": "Medium",
      "window": "5-7pm",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Typically 5-7pm. Latest (2026-04-02): Hit today randomly check tomorrow in case it was just leftovers"
    },
    "T099": {
      "chance": "High",
      "window": "",
      "reason": "29% hit rate (10/34 Thursdays), increasing trend. Latest (2026-07-02): Sold yesterday instead of the usual Wednesday pattern two weeks in a row so pls be aware of that!"
    },
    "T012": {
      "chance": "Medium",
      "window": "",
      "reason": "29% hit rate (10/34 Thursdays), increasing trend. Latest (2026-07-02): Friday morning as it has been dropping the past weeks"
    },
    "T031": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Opening and shortly after remain your best bet. Does drop on release days with opening or later morning though"
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "26% hit rate (9/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Thursday trend continues looking strong. Last week hit but just smaller items. Likely to sell and hold release day items for Friday"
    },
    "T029": {
      "chance": "Medium",
      "window": "",
      "reason": "38% hit rate (13/34 Thursdays), increasing trend. Latest (2026-06-25): Tiny section and hidden inventory city. Ask GS directly because product rarely makes it to the shelf right away. Sold OP today"
    },
    "T133": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Latest (2026-05-07): Both may hold a bit for Friday. Slover sold today earlier in the day. Summit can hit at night like it did lastbweek"
    },
    "T098": {
      "chance": "Medium",
      "window": "8-10am",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. Typically 8-10am. Latest (2026-07-02): Timing call landed today and should hit AGAIN on Friday later morning!"
    },
    "T056": {
      "chance": "High",
      "window": "Opening",
      "reason": "38% hit rate (13/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-25): STILL KEEPING THINGS QUIET. Best looks remain 8-10, then another hard sweep around 12-2, then again 5-7 if they decide to wait for traffic to die down"
    },
    "T120": {
      "chance": "High",
      "window": "",
      "reason": "35% hit rate (12/34 Thursdays), increasing trend. Latest (2026-07-02): Hit Monday but continue checking because these stores appear to be a bit more random and can hit multiple times"
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "26% hit rate (9/34 Thursdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-02): Another major focus. Mayyyy end up pushing to Friday but heads will be checking in case!"
    },
    "T116": {
      "chance": "Medium",
      "window": "",
      "reason": "12% hit rate (4/34 Thursdays), steady trend. Latest (2026-05-28): Likely tomorrow as when it skips Monday\u2019s it tends to"
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "26% hit rate (9/34 Thursdays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-07-02): May have sold a bit late today. Opening and 10-12 remain strongest with additional waves always possible even into the evening"
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "29% hit rate (10/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Inventory is still believed to be sitting. Opening through 8-10 then 1-3."
    },
    "T004": {
      "chance": "High",
      "window": "",
      "reason": "15% hit rate (5/34 Thursdays), increasing trend. Latest (2026-06-04): STILL WAITING. Expect another morning crowd until this finally unloads. Best windows remain 8-9:30 and later around 3-6"
    },
    "T036": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2026-05-07): HAS NOT BEEN HITTING FRIDAYS. CHECK IN THE MORNING ASK FOR A DROP/VQ"
    },
    "T105": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2026-05-07): Two stores here, Hills hit last week in afternoon but rotate both in the morning"
    },
    "T035": {
      "chance": "Medium",
      "window": "",
      "reason": "9% hit rate (3/34 Thursdays), increasing trend. Latest (2026-06-11): Main window still sits around 8-10. Shipments tend to land then with occasional lighter activity later. If tomorrow misses then Friday should be SLEEPER"
    },
    "T077": {
      "chance": "High",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Back to Friday\u2019s here!"
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Hit yesterday opening so can be due! Will either sell again tomorrow morning or Friday! (unless a sneaky Thursday night drop happens but not super likely)"
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "12% hit rate (4/34 Thursdays), increasing trend. Latest (2026-06-25): Was live today and again but off the guide"
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-25): Sold Blisters today and still could have more items, but the store may also choose to save some for Friday"
    },
    "T078": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "12% hit rate (4/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Usually Tuesday\u2019s/Thursdays here! Release weeks they tend to drop Friday\u2019s as well but heads will check be there a bit early!"
    },
    "T016": {
      "chance": "Low",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-04): Sneaky opening option. Expect people before opening and lingering afterward as it did not hit today!"
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Continues proving it can release throughout the morning or later in the day. Definitely keep this in rotation will sell multiple batches even if they sold today can do a bit more"
    },
    "T050": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2026-07-02): Usually hits Thursdays but when it skips the Monday drop. Can check IN CASE as stores have been receiving extra!"
    },
    "T111": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2026-07-02): Did not seem to hit so expect heads early here for a drop tomorrow !"
    },
    "T159": {
      "chance": "Medium",
      "window": "",
      "reason": "No formal guide prediction, but 1 confirmed actual hit reported in chat on this weekday."
    }
  },
  "friday": {
    "T063": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-26): Usually a Friday store, claimed drop would be cancelled if people line up before 5am we shall see"
    },
    "T064": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Friday mornings have become the pattern here so opening movement is likely"
    },
    "T077": {
      "chance": "High",
      "window": "",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Latest (2026-06-26): Start in the morning but don\u2019t ignore afternoon as usually. Timing here has been random lately"
    },
    "T085": {
      "chance": "High",
      "window": "Opening",
      "reason": "77% hit rate (23/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening drop with heads already posted up"
    },
    "T082": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Friday opening drop and chairs will start tonight"
    },
    "T070": {
      "chance": "Medium",
      "window": "4-6PM",
      "reason": "20% hit rate (6/30 Fridays), decreasing trend. Typically 4-6PM. Latest (2026-02-27): May drop tomorrow! If not should be either Saturday or Sunday morning"
    },
    "T086": {
      "chance": "High",
      "window": "Opening",
      "reason": "73% hit rate (22/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Another locked Friday opening option here"
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (29/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening seller and should move as it has not seemed to hit"
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening first, then run it back 12-2 if the morning misses. This store can move early and still have another wave later"
    },
    "T125": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Hit today instead of tomorrow so look for other options"
    },
    "T128": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Typically Opening. Latest (2025-10-03): Be there BEFORE 8AM. Should sell at opening alongside all 3 other Riverside locations. Wll have ETB!"
    },
    "T126": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), decreasing trend. Typically Opening. Latest (2026-04-10): Friday morning drop every time people pull up early don\u2019t be late"
    },
    "T127": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Neither has really hit this week so expect lines at both!"
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): hit today but light pack so CHECK AT OPENING"
    },
    "T138": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (14/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening check but timing can also randomly shift here"
    },
    "T122": {
      "chance": "Medium",
      "window": "",
      "reason": "13% hit rate (4/30 Fridays), steady trend. 1 confirmed actual hit reported in chat. Latest (2026-06-19): Endes up selling today so look for release day product tomorrow"
    },
    "T130": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "83% hit rate (25/30 Fridays), decreasing trend. Typically Opening. Latest (2026-05-15): Opening drop with big stock"
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening first but if they spin you, run it back 10-1 and again 3-6. Multiple days now they have sold around noon even though today\u2019s shipment was slighy"
    },
    "T022": {
      "chance": "High",
      "window": "Opening",
      "reason": "87% hit rate (26/30 Fridays), decreasing trend. Typically Opening. Latest (2026-06-19): Should sell at opening here 7am as well!"
    },
    "T054": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Hit a bit earlier this week and does tend to go quick but can peep at 7am or 9-10"
    },
    "T056": {
      "chance": "Medium",
      "window": "",
      "reason": "7% hit rate (2/30 Fridays), steady trend. Latest (2026-05-08): Did sell today can check in case of a bit more"
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Usually opening here and heads will line up regardless"
    },
    "T028": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "67% hit rate (20/30 Fridays), decreasing trend. Typically Opening. Latest (2026-04-10): Check morning and again 4-7"
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "60% hit rate (18/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening check since Fridays usually hit here and has not hit yet!"
    },
    "T036": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), decreasing trend. Typically Opening. Latest (2026-06-26): May sell items FCFS at opening or take a VQ line will be here EARLY EARLY"
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening and 9-11. Sold Wednesday here but does receive alot of stock! 7am opening PLS UPDATE"
    },
    "T031": {
      "chance": "High",
      "window": "",
      "reason": "40% hit rate (12/30 Fridays), increasing trend. Latest (2026-06-26): Look for a drop 10-12 or 3-6 and expect lines as it hasn\u2019t had a drop so vendor should stop by```"
    },
    "T030": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Expect line by opening with people waiting 7-8 for possible FCFS. Need more heads here who are UPDATING"
    },
    "T033": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Latest (2025-10-03): Slept on store that needs to be checked in with more. Ask throughout the day at guest services + check the aisle.```"
    },
    "T096": {
      "chance": "High",
      "window": "",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Latest (2026-06-26): Stay on it from 9-11ish. This store is known for lying and playing games"
    },
    "T090": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Morning VQ or drop. Store has been selling EARLY lately so chairs already out!"
    },
    "T101": {
      "chance": "High",
      "window": "Opening",
      "reason": "57% hit rate (17/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Consistent Friday morning. Warn you every week. They may take a VQ or sell FCFS at opening so BE READY"
    },
    "T118": {
      "chance": "High",
      "window": "",
      "reason": "100% hit rate (30/30 Fridays), steady trend. 1 confirmed actual hit reported in chat. Latest (2026-06-26): Friday random number draw usually starts at 3PM and can cover 100-200 people."
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "57% hit rate (17/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Store is holding back stock so check again with random timing morning and later but should sell at least a small batch at opening"
    },
    "T095": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "13% hit rate (4/30 Fridays), decreasing trend. Typically 9-11AM. Latest (2025-10-24): Mall just stocked so check in here random times"
    },
    "T094": {
      "chance": "Medium",
      "window": "",
      "reason": "13% hit rate (4/30 Fridays), decreasing trend. Latest (2026-04-10): Check morning time for some items ask them :)"
    },
    "T166": {
      "chance": "Medium",
      "window": "",
      "reason": "10% hit rate (3/30 Fridays), steady trend. Latest (2026-04-17): Skipped today SO CHECK TOMORROW STORE SHOULD CONFIRM IF THEY WILL STOCK OR NOT  ```"
    },
    "T097": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "47% hit rate (14/30 Fridays), decreasing trend. Typically 9-11AM. Latest (2026-04-10): Has not hit usually goes in afternoons for regular shipments keep eyes 1-5!"
    },
    "T044": {
      "chance": "High",
      "window": "7-10am",
      "reason": "87% hit rate (26/30 Fridays), steady trend. Typically 7-10am. Latest (2026-06-19): Morning look in case inventory was held back but there are probably stronger targets available."
    },
    "T045": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. 1 confirmed actual hit reported in chat. Latest (2025-10-03): Same situation as Bellflower. Expecting the drop tomorrow. Please be checking from 10-12."
    },
    "T046": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Latest (2025-10-03): Supposedly received a SMALL shipment of Pokemon last week. Start checking in at guest services here, sleeper store!"
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "77% hit rate (23/30 Fridays), decreasing trend. Typically Opening. Latest (2026-06-19): Treat these as one pair. Both feel primed for opening activity or a morning VQ especially Pomona which has not seemed to drop!"
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "87% hit rate (26/30 Fridays), decreasing trend. Typically Opening. Latest (2026-06-26): Sleeper opening check since it is has been a bit more quiet"
    },
    "T009": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "63% hit rate (19/30 Fridays), decreasing trend. Typically Opening. Latest (2026-06-26): Has not hit and is seeming like a major option for opening through 10am```"
    },
    "T002": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening through 11AM. Look for employees to confirm before opening and push product themselves"
    },
    "T008": {
      "chance": "Medium",
      "window": "",
      "reason": "60% hit rate (18/30 Fridays), decreasing trend. Latest (2026-06-26): Has not stocked Poke so BIG eyes tomorrow! If nothing at open look for vendor 8-10"
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (29/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Both need opening checks. Madera more likely for mid day as usual"
    },
    "T076": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "37% hit rate (11/30 Fridays), decreasing trend. Typically Opening. Latest (2026-02-06): Don\u2019t be surprised to see some items here tomorrow!"
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (29/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Hit today as warned so may be lighter tomorrow but check in in case"
    },
    "T079": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Has been selling sporadically and not as much Fridays but check opening in case"
    },
    "T066": {
      "chance": "High",
      "window": "",
      "reason": "67% hit rate (20/30 Fridays), increasing trend. Latest (2026-06-26): Morning tickets expected and store should still have some form of product. Can also sell small amounts later in the day"
    },
    "T069": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Should sell at opening and chairs will go out tonight"
    },
    "T074": {
      "chance": "High",
      "window": "Opening",
      "reason": "73% hit rate (22/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening is expected and locals will be all over it as it seemed quiet"
    },
    "T098": {
      "chance": "High",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-26): Look for line by opening and ask about drop/shipment store tends to confirm here a bit earlier if they will sell```"
    },
    "T110": {
      "chance": "Medium",
      "window": "",
      "reason": "57% hit rate (17/30 Fridays), decreasing trend. Latest (2026-05-15): Moved today\u2019s drop to tomorrow. Expect heads early and treat it like a real morning priority and again no lining up before 6am"
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "67% hit rate (20/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Morning VQ at opening and long lines will be here"
    },
    "T089": {
      "chance": "High",
      "window": "11-1pm",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically 11-1pm. Latest (2026-06-26): Friday drops seem to be sticking. Usually from 8-11 here. Last week only sold OP but expect them to sell everything they receive tomorrow"
    },
    "T107": {
      "chance": "High",
      "window": "",
      "reason": "30% hit rate (9/30 Fridays), increasing trend. Latest (2026-06-26): Lines usually strongest around 11-2. SHOULD GO and if nothing people will wait it out a bit"
    },
    "T111": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening check again in case as today\u2019s drop was pushed back from Weds so may end up having a bit more. May also receive around 12-4 if nothing else we\u2019ll"
    },
    "T115": {
      "chance": "High",
      "window": "Opening",
      "reason": "83% hit rate (25/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Solid opening option and good rotation through the day if it doesn\u2019t go early"
    },
    "T010": {
      "chance": "High",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Look for opening drop. Always sells batches"
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "60% hit rate (18/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): PRIORITY opening check again. Store should sell"
    },
    "T013": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "23% hit rate (7/30 Fridays), decreasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-04-03): 75/25 they sell something at opening here!"
    },
    "T005": {
      "chance": "Medium",
      "window": "",
      "reason": "23% hit rate (7/30 Fridays), increasing trend. Latest (2026-06-26): Store sold yesterday but likely to have some items tomorrow but will sell sporadically"
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Constant store. If opening misses, 11-2 becomes the next real window"
    },
    "T133": {
      "chance": "High",
      "window": "Opening",
      "reason": "43% hit rate (13/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening is a must. Store holds product so timing is on them but it should be tomorrow as only OP today"
    },
    "T053": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Both should move opening or shortly after. Weho receives solid amounts and sold light today. Sunset will have a solid line prior to opening"
    },
    "T012": {
      "chance": "High",
      "window": "Opening",
      "reason": "37% hit rate (11/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening employee push should go. Stock should be here and chairs already here"
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "87% hit rate (26/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): 7AM opening is a solid option as they should receive more! If nothing then check later in the day will have more product before the weekend is over"
    },
    "T001": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "43% hit rate (13/30 Fridays), steady trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-19): Opening through 11 remains the key stretch. Watch for employee-driven releases."
    },
    "T037": {
      "chance": "High",
      "window": "Opening",
      "reason": "77% hit rate (23/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Has moved off Sundays so check tomorrow opening through 9:30!"
    },
    "T058": {
      "chance": "High",
      "window": "Opening",
      "reason": "80% hit rate (24/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening then 10-12 fallback. Don\u2019t let them spin you because this store holds and sells whenever they choose and can also sell late"
    },
    "T007": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (16/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Morning peep for employee pushed product. Has hit multiple days already though"
    },
    "T071": {
      "chance": "High",
      "window": "Opening",
      "reason": "63% hit rate (19/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Both have sold this week. They both also hold back product but not as locked as others"
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "43% hit rate (13/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Sold a bigger amount this week. Heads will check in case and could sell other items"
    },
    "T014": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "20% hit rate (6/30 Fridays), decreasing trend. Typically Opening. Latest (2026-04-10): Didn\u2019t drop tends to hit evenings so don\u2019t ignore later but obviously morning is a great check 8-10"
    },
    "T083": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (16/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Morning 8-10 check but did sell a bit this week as posted. Store tends to hold back items either way```"
    },
    "T055": {
      "chance": "High",
      "window": "Opening",
      "reason": "43% hit rate (13/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Sleeper opening option here at 7AM as store has been putting small amounts of product out this week"
    },
    "T047": {
      "chance": "Medium",
      "window": "",
      "reason": "20% hit rate (6/30 Fridays), steady trend. Latest (2026-06-12): Last week sold on Friday around 9-11 so please keep eyes here!"
    },
    "T100": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), steady trend. Typically Opening. Latest (2026-06-19): Should do release day items at opening!"
    },
    "T109": {
      "chance": "High",
      "window": "Opening",
      "reason": "40% hit rate (12/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Fridays are back here so BE READY AT OPENING. Chairs ahould already be out"
    },
    "T059": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Usually 9-11 and not right at opening. Don\u2019t make this an opening priority unless nearby```"
    },
    "T029": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (16/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Two stores here and may be either opening or afternoon! Heads will check regardless at both"
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (16/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening check and ASK GS. Should have stock and opens at 7AM. If they spin you go back shortly after. Store tends to sell Weds + Fridays"
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Big store and opening priority. They almost always find a way to sell at least something here"
    },
    "T072": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Friday opening store as well. Skipped last week so heads will be on it but chance it skips again"
    },
    "T034": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (14/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Friday opening VQ usually or may do FCFS so be ready for either line will be here in early"
    },
    "T117": {
      "chance": "Medium",
      "window": "",
      "reason": "17% hit rate (5/30 Fridays), steady trend. Latest (2026-06-19): Morning through 11 remains strongest with another possible window around 2-4."
    },
    "T017": {
      "chance": "High",
      "window": "Opening",
      "reason": "37% hit rate (11/30 Fridays), increasing trend. 1 confirmed actual hit reported in chat. Typically Opening. Latest (2026-06-19): Opening employee push possible. If not then focus again around 12-4 for vendor timing."
    },
    "T018": {
      "chance": "Medium",
      "window": "",
      "reason": "10% hit rate (3/30 Fridays), steady trend. Latest (2026-05-08): Employees have been holding some stuff back so be ready in case"
    },
    "T121": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Latest (2026-03-06): Update posted below check in with them tomorrow!```"
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "40% hit rate (12/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Fri-Sun type store. Opening is worth it but if nothing happens, 4-8 or the weekend becomes stronger"
    },
    "T102": {
      "chance": "High",
      "window": "",
      "reason": "33% hit rate (10/30 Fridays), increasing trend. Latest (2026-06-26): Did not seem to hit today so be ready tomorrow morning or from 1-4 but did hit Tuesday so less priority"
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Sold a bit today so may skip tomorrow ```"
    },
    "T026": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Typically Opening. Latest (2026-04-10): Has not hit check both TCG wall and GS opening and 8-10ish"
    },
    "T048": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Typically Opening. Latest (2026-04-10): Check in with both at opening could be holding a bit ```"
    },
    "T080": {
      "chance": "High",
      "window": "Opening",
      "reason": "30% hit rate (9/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening drop possible if it stayed quiet today"
    },
    "T084": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "10% hit rate (3/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Basically a lock to check every day at opening here!"
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "7% hit rate (2/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-05): The other pair of stores to be ready for by opening heavy heads will be here!"
    },
    "T060": {
      "chance": "High",
      "window": "Opening",
      "reason": "23% hit rate (7/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Usually Fridays here. If not right at opening then 9-11"
    },
    "T057": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Latest (2026-05-08): Quietly holding back stock lately. Keep checking even later at night never a bad check"
    },
    "T104": {
      "chance": "High",
      "window": "Opening",
      "reason": "23% hit rate (7/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Lighter chances for tomorrow but check in! May be small products"
    },
    "T032": {
      "chance": "High",
      "window": "Opening",
      "reason": "20% hit rate (6/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Look for opening drop. Will be limited but likely!"
    },
    "T141": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "17% hit rate (5/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening drop is likely and chairs will go down early"
    },
    "T139": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "17% hit rate (5/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening expected unless they sneak it out tonight since it did not hit today"
    },
    "T108": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "17% hit rate (5/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Can check for small items but may hold until Monday as usual here"
    },
    "T105": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "17% hit rate (5/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Look for opening/morning drop but like other store may be lighter stock as well"
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "13% hit rate (4/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): As always look for shipment 9-11 but check opening for anything held back"
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "13% hit rate (4/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Did not end up selling today. BE READY AT OPENING"
    },
    "T039": {
      "chance": "High",
      "window": "Opening",
      "reason": "13% hit rate (4/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Also did not end up selling today so be ready for opening checks! Wait it out a bit if nothing"
    },
    "T103": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "13% hit rate (4/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Look for an opening drop but may be limited as store is a bit smaller"
    },
    "T106": {
      "chance": "Low",
      "window": "",
      "reason": "7% hit rate (2/30 Fridays), increasing trend. Latest (2026-06-26): Look for a morning drop here people tend to stay quiet but should hit even if limited!"
    },
    "T164": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Typically Opening. Latest (2026-06-19): Sleeper opening option here 8am!"
    },
    "T165": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Typically Opening. Latest (2026-06-19): Should sell at opening here be ready!"
    },
    "T146": {
      "chance": "Medium",
      "window": "",
      "reason": "No formal guide prediction, but 1 confirmed actual hit reported in chat on this weekday."
    }
  }
};
