import type { Chance } from "./types";

export interface SeedEntry {
  chance: Chance;
  window: string;
  reason: string;
  confirmedCount: number;
}

export const SEED_TEMPLATES: Record<string, Record<string, SeedEntry>> = {
  "monday": {
    "T054": {
      "chance": "High",
      "window": "7-10:30AM",
      "reason": "5% hit rate (2/38 Mondays), steady trend. Typically 7-10:30AM. Latest (2026-04-27): Basically exact same time as Weho above! Always either Monday/Tuesdays sells a bit more fairly here but can go quicker  ```",
      "confirmedCount": 0
    },
    "T053": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (18/38 Mondays), decreasing trend. Typically Opening. Latest (2026-02-23): Will usually drop later in the week here",
      "confirmedCount": 0
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (38/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Heads will be here at open for whatever they receive! Store will also receive more by mid day and push out randomly",
      "confirmedCount": 0
    },
    "T056": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "68% hit rate (26/38 Mondays), decreasing trend. Typically Opening. Latest (2026-04-27): Check primarily second half of the day 1-3 or 6-8 here. Can check around 9ish am but may go later if it drops",
      "confirmedCount": 0
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (38/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Lines will form around 9-10:30 for a possible mid day drop! Store at some point is going to switch off this pattern so be ready for curveballs",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "Medium",
      "window": "",
      "reason": "53% hit rate (20/38 Mondays), decreasing trend. Latest (2026-06-15): Main focus 8-11 for a shipment to land",
      "confirmedCount": 0
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (37/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Usually around 12-2 and 4-6 IF it ever hits on a Monday. Not usually opening for Mondays",
      "confirmedCount": 0
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "66% hit rate (25/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Keep these paired together. Opening line will check as many go for Needoh or other items. Both can receive an Excel shipment around 10-12 and sell around there or 3-5ish",
      "confirmedCount": 0
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "95% hit rate (36/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Hitting Mondays again as I have warned. Heads will be here prior to opening g and wait it out. Vendor may show up early or by mid day usually",
      "confirmedCount": 0
    },
    "T001": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (37/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Usually hits after Alhambra pls keep on your radar tomorrow. One or the other should hit in the morning ish time so you\u2019ll have to check",
      "confirmedCount": 0
    },
    "T012": {
      "chance": "Medium",
      "window": "",
      "reason": "24% hit rate (9/38 Mondays), decreasing trend. Latest (2026-01-12): May be later on in week here",
      "confirmedCount": 0
    },
    "T013": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "82% hit rate (31/38 Mondays), decreasing trend. Typically Opening. Latest (2026-06-15): Routes have been strange. Easy store to forget but one of the better backup plays if other routes fail. Usually has been Monday or Tuesday typically mid day or a bit after",
      "confirmedCount": 0
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "92% hit rate (35/38 Mondays), steady trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-06): Employee pushes remain the story here. Opening first then continue checking because inventory often comes out little by little.",
      "confirmedCount": 1
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "87% hit rate (33/38 Mondays), decreasing trend. Typically Opening. Latest (2026-07-06): Sneaky option. Usually Tuesday. Opening and midday both deserve attention, this is in case they are holding any Poke back",
      "confirmedCount": 0
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "29% hit rate (11/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Store can self push inventory so people are on it constantly. Usually morning time but truly random. Sold today early as well",
      "confirmedCount": 0
    },
    "T018": {
      "chance": "High",
      "window": "Opening",
      "reason": "58% hit rate (22/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Afternoon remains the better play. Focus 1-4 store should be hitting most likely! Earlier checks as well in case",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "High",
      "window": "Opening",
      "reason": "79% hit rate (30/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Tell you all the time this store hits Mondays. Whether employees push or vendor shows some activity will hit either 8-10 (a bit after opening) or 1-4",
      "confirmedCount": 0
    },
    "T138": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "50% hit rate (19/38 Mondays), decreasing trend. Typically Opening. Latest (2026-02-23): Check in tomorrow about 8-11!  Can be smaller stock check by guest services and ask",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "79% hit rate (30/38 Mondays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-06): Opening in case but both stores continue to hit through midday and later afternoon. Again they will hit. At least one of the two will get stocked tomorrow p...",
      "confirmedCount": 1
    },
    "T121": {
      "chance": "High",
      "window": "8-10am",
      "reason": "79% hit rate (30/38 Mondays), increasing trend. Typically 8-10am. Latest (2026-07-06): Has shifted off of their Monday drops recently. This whole area can really be random so keep eyes in case but as of late Tuesday\u2019s are a bit better",
      "confirmedCount": 0
    },
    "T123": {
      "chance": "High",
      "window": "",
      "reason": "32% hit rate (12/38 Mondays), increasing trend. Latest (2026-07-06): Has quietly turned into one of the steadier Monday stores as well. Keep eyes on 9-11 and again from 1-4 but expect heads to be here waiting as well",
      "confirmedCount": 0
    },
    "T108": {
      "chance": "High",
      "window": "10-11am",
      "reason": "100% hit rate (38/38 Mondays), steady trend. Typically 10-11am. Latest (2026-07-06): Still one of the better Monday stores around as it\u2019s consistent. People usually commit here early and will wait things.",
      "confirmedCount": 0
    },
    "T109": {
      "chance": "Medium",
      "window": "5-7pm",
      "reason": "63% hit rate (24/38 Mondays), decreasing trend. 1 confirmed actual hit reported. Typically 5-7pm. Latest (2026-03-23): Has seemingly switched off from Monday evenings! Check in if you\u2019d like but so far has hit Tues/Weds/Saturday mornings as we saw yesterday",
      "confirmedCount": 1
    },
    "T100": {
      "chance": "Medium",
      "window": "10:30-11AM",
      "reason": "21% hit rate (8/38 Mondays), decreasing trend. Typically 10:30-11AM. Latest (2026-02-23): Has primarily been hitting Tuesdays",
      "confirmedCount": 0
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "16% hit rate (6/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Opening can pay off for anything held back, but this location stays unpredictable. Tuesday\u2019s/Wednesdays still look like the best days here",
      "confirmedCount": 0
    },
    "T116": {
      "chance": "High",
      "window": "8-12PM",
      "reason": "50% hit rate (19/38 Mondays), increasing trend. 1 confirmed actual hit reported. Typically 8-12PM. Latest (2026-07-06): One of OC's most dependable Monday locations. Expect early chairs and people hanging around until inventory finally comes out. Last week hit Tuesday",
      "confirmedCount": 1
    },
    "T095": {
      "chance": "High",
      "window": "11-1pm",
      "reason": "13% hit rate (5/38 Mondays), steady trend. Typically 11-1pm. Latest (2025-11-17): Be ready 10-12 here would imagine it stocks again before the mall!",
      "confirmedCount": 0
    },
    "T090": {
      "chance": "Medium",
      "window": "4-6pm",
      "reason": "87% hit rate (33/38 Mondays), decreasing trend. Typically 4-6pm. Latest (2026-06-15): Has been leaning hard toward Fridays. Small amounts have leaked out during the week but nothing major",
      "confirmedCount": 0
    },
    "T101": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Mondays), steady trend. Latest (2025-10-06): Check in at guest services between 11-12 and between 2-3. Usually sells in that time range. Dropped a small pack last Mon too!",
      "confirmedCount": 0
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "53% hit rate (20/38 Mondays), decreasing trend. Typically Opening. Latest (2026-02-23): VQ SHOULD go at opening time",
      "confirmedCount": 0
    },
    "T050": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (38/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Monday reputation remains solid still. People here before opening! Store has shifted some weeks but overall it starts tomorrow. If they sell usually will be by 11 or 1-2",
      "confirmedCount": 0
    },
    "T044": {
      "chance": "Medium",
      "window": "7-8AM",
      "reason": "58% hit rate (22/38 Mondays), decreasing trend. Typically 7-8AM. Latest (2026-06-15): Light rotations from 7-8AM in case! Usually opening ish if they push some times",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "Low",
      "window": "Opening",
      "reason": "71% hit rate (27/38 Mondays), decreasing trend. Typically Opening. Latest (2026-06-15): Store has become much more random recently",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (37/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Shipment-driven location. Opening remains your best opportunity but this store hand a DAILY line regardless for non Poke items as well. Can also drop a sneaky mid day shipment.",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "Medium",
      "window": "2-4:15PM",
      "reason": "11% hit rate (4/38 Mondays), increasing trend. Typically 2-4:15PM. Latest (2026-07-06): Look for a shipment to hit around 11-1 and store to push around there or 3-5! May be limited or they may hold back stock",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "79% hit rate (30/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): CHECK AT OPENING. afternoon checks still worthwhile if nothing but store has stock to drop so be ready in case it goes tomorrow",
      "confirmedCount": 0
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "92% hit rate (35/38 Mondays), steady trend. Typically Opening. Latest (2026-07-06): Has been holding for Friday\u2019s here",
      "confirmedCount": 0
    },
    "T083": {
      "chance": "Medium",
      "window": "8-10am",
      "reason": "82% hit rate (31/38 Mondays), decreasing trend. Typically 8-10am. Latest (2026-06-01): Both morning and evening work. Slight lean toward later checks or possibly Tuesday. Store holds and sells small batches as you saw this morning",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "Medium",
      "window": "",
      "reason": "53% hit rate (20/38 Mondays), decreasing trend. Latest (2026-07-06): BOTH stores have claimed they will be moving to the Friday wave. I will be reminding you to check in case (especially Golden Valley who back doors) but for now be wary",
      "confirmedCount": 0
    },
    "T068": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "21% hit rate (8/38 Mondays), decreasing trend. Typically Opening. Latest (2026-03-02): Please open this store! Be here and rotate checks also can drop GREAT stock that people miss",
      "confirmedCount": 0
    },
    "T072": {
      "chance": "Low",
      "window": "7-9PM",
      "reason": "42% hit rate (16/38 Mondays), decreasing trend. Typically 7-9PM. Latest (2026-02-23): Usually later in the week and morning times. ```",
      "confirmedCount": 0
    },
    "T022": {
      "chance": "Low",
      "window": "Opening",
      "reason": "71% hit rate (27/38 Mondays), decreasing trend. Typically Opening. Latest (2026-06-15): Traditionally one of the stronger Monday/Tuesday stores and it stayed quiet this morning. Be there for the 7AM open and see if it hits",
      "confirmedCount": 0
    },
    "T039": {
      "chance": "Low",
      "window": "",
      "reason": "53% hit rate (20/38 Mondays), decreasing trend. Latest (2026-05-18): Typically Tuesday-Thursday is best here with strongest day being Thursday. Usually hits around 10-1 if vendor is there. Store occasionally will push items out themselves.",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (18/38 Mondays), decreasing trend. Typically Opening. Latest (2026-02-23): Seems to be hitting Wednesday here",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (12/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Random timing has become the norm here. That makes opening worth checking, but don't forget the 10-12 and 2-4 windows.",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "Medium",
      "window": "",
      "reason": "26% hit rate (10/38 Mondays), decreasing trend. Latest (2026-05-18): Stores tends to hit either Mondays/Weds usually and typically in afternoon from 2-6. Expect heads to be waiting around a bit before and store sells 2 per sku here so while a diffic",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "High",
      "window": "4-6AM",
      "reason": "39% hit rate (15/38 Mondays), increasing trend. 1 confirmed actual hit reported. Typically 4-6AM. Latest (2026-07-06): Still follows Seal Beach more often than not. Expect people waiting early with activity usually landing somewhere around 9-11.",
      "confirmedCount": 1
    },
    "T110": {
      "chance": "High",
      "window": "",
      "reason": "24% hit rate (9/38 Mondays), decreasing trend. Latest (2026-02-16): Not expected tomorrow",
      "confirmedCount": 0
    },
    "T098": {
      "chance": "Medium",
      "window": "",
      "reason": "29% hit rate (11/38 Mondays), decreasing trend. Latest (2026-02-16): Usually later in the week here as well",
      "confirmedCount": 0
    },
    "T021": {
      "chance": "Low",
      "window": "Opening",
      "reason": "50% hit rate (19/38 Mondays), decreasing trend. Typically Opening. Latest (2026-05-18): Last week hit around 4pm but store is random and tends to sell in batches out of guest services! Opening checks at 7am then 11-1 for a shift change then again 4-5:30ish",
      "confirmedCount": 0
    },
    "T010": {
      "chance": "High",
      "window": "6-9pm",
      "reason": "55% hit rate (21/38 Mondays), decreasing trend. 1 confirmed actual hit reported. Typically 6-9pm. Latest (2026-06-15): Focus 8-10 or 12-2. Store loves moving product when nobody is paying attention typically hits Tuesday\u2019s but be ready in case! ```",
      "confirmedCount": 1
    },
    "T071": {
      "chance": "Medium",
      "window": "",
      "reason": "42% hit rate (16/38 Mondays), decreasing trend. Latest (2026-02-23): Usually Wed -Friday here afternoon or evening",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "High",
      "window": "",
      "reason": "8% hit rate (3/38 Mondays), increasing trend. Latest (2026-07-06): Most activity continues showing up between 10-12 with people lingering it before.",
      "confirmedCount": 0
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "82% hit rate (31/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Classic wave store. Opening matters but random drops throughout the day continue making every check worth it.",
      "confirmedCount": 0
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "55% hit rate (21/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Becoming much more active throughout the week. Mondays not usually opening but check mid day and evening in case stock hits if not 100% Tuesday\u2019s",
      "confirmedCount": 0
    },
    "T041": {
      "chance": "Medium",
      "window": "6-9pm",
      "reason": "71% hit rate (27/38 Mondays), decreasing trend. Typically 6-9pm. Latest (2026-05-18): MONDAY NIGHT STORE. Dm me word collect Main checks still around 6-9 for when store gets a shipment but 50/50 whether they let it fly or they hold and sell for Tuesday",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "66% hit rate (25/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Opening continues being the move. This location has shifted into one of the more consistent multi day stores, so expect people checking every morning basically.",
      "confirmedCount": 0
    },
    "T081": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (19/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Vendor timing continues pointing toward 8-10. Expect people waiting early and sticking around longer the later the morning goes.",
      "confirmedCount": 0
    },
    "T058": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "11% hit rate (4/38 Mondays), steady trend. Typically Opening. Latest (2026-05-04): 9-11 or 4-6 usually IF it hits if not very likely Tuesday",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "Medium",
      "window": "",
      "reason": "16% hit rate (6/38 Mondays), decreasing trend. Latest (2026-03-02): Store should restock a bit more tomorrow either morning or afternoon by 12-2 if it didn\u2019t push something out today",
      "confirmedCount": 0
    },
    "T006": {
      "chance": "High",
      "window": "",
      "reason": "11% hit rate (4/38 Mondays), steady trend. Latest (2026-03-09): Warned you last week! Should hit tomorrow either morning time or around 1-3! Ask about a VQ",
      "confirmedCount": 0
    },
    "T167": {
      "chance": "Medium",
      "window": "",
      "reason": "24% hit rate (9/38 Mondays), decreasing trend. Latest (2026-02-23): Usually will drop Tuesday to Thursdays as well",
      "confirmedCount": 0
    },
    "T033": {
      "chance": "Medium",
      "window": "",
      "reason": "26% hit rate (10/38 Mondays), decreasing trend. Latest (2026-02-23): Check for activity 11-2 or after Carson Sepulveda if it stocks",
      "confirmedCount": 0
    },
    "T137": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "32% hit rate (12/38 Mondays), decreasing trend. Typically Opening. Latest (2026-02-23): May go later in the week here",
      "confirmedCount": 0
    },
    "T165": {
      "chance": "High",
      "window": "3-6pm",
      "reason": "68% hit rate (26/38 Mondays), increasing trend. Typically 3-6pm. Latest (2026-07-06): Naturally leans toward late morning into early afternoon once ship",
      "confirmedCount": 0
    },
    "T119": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/38 Mondays), steady trend. Latest (2025-12-22): Check in tomorrow 8-11",
      "confirmedCount": 0
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (26/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Opening VQ remains the expectation. Be ready before doors open because this location continues pulling a crowd",
      "confirmedCount": 0
    },
    "T051": {
      "chance": "High",
      "window": "Opening",
      "reason": "76% hit rate (29/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Usually picks up overflow traffic from South St. Check early because this location can occasionally beat South St to inventory or run a VQ at opening before they do!",
      "confirmedCount": 0
    },
    "T049": {
      "chance": "Medium",
      "window": "3-6pm",
      "reason": "24% hit rate (9/38 Mondays), decreasing trend. Typically 3-6pm. Latest (2026-04-06): MONDAY AFTERNOON HEATER. TCG floor first then GS drop. 3-6 PRIME WINDOW stop sleeeeeping",
      "confirmedCount": 0
    },
    "T069": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (7/38 Mondays), decreasing trend. Latest (2026-02-23): Usually later in the week here!",
      "confirmedCount": 0
    },
    "T064": {
      "chance": "High",
      "window": "",
      "reason": "21% hit rate (8/38 Mondays), decreasing trend. Latest (2026-03-02): Check for a restock in the morning ! Also early afternoon here",
      "confirmedCount": 0
    },
    "T125": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "16% hit rate (6/38 Mondays), decreasing trend. Typically Opening. Latest (2026-02-02): Should hit tomorrow morning to 10 or from 1-4!",
      "confirmedCount": 0
    },
    "T002": {
      "chance": "High",
      "window": "6-7:30am",
      "reason": "18% hit rate (7/38 Mondays), increasing trend. Typically 6-7:30am. Latest (2026-07-06): Holds stock back and usually sells morning times at opening. Heads stay here for employees to confirm if they\u2019ll have anything around 6-7:30am.",
      "confirmedCount": 0
    },
    "T114": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Mondays), steady trend. Latest (2025-12-15): Other MV store hit so check in",
      "confirmedCount": 0
    },
    "T112": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/38 Mondays), increasing trend. Latest (2026-06-15): Start with Alicia then slide over to Jeronimo. Usually one goes during the morning while the other lands later from 11-2```",
      "confirmedCount": 0
    },
    "T063": {
      "chance": "High",
      "window": "Opening",
      "reason": "34% hit rate (13/38 Mondays), decreasing trend. Typically Opening. Latest (2026-04-06): GETS SHIPMENT but holds like their life depends on it. Always check in for some light items but store has been on games",
      "confirmedCount": 0
    },
    "T107": {
      "chance": "Medium",
      "window": "",
      "reason": "8% hit rate (3/38 Mondays), steady trend. Latest (2026-02-02): Store was stating vendor was coming mondays but should still be Thursdays. Can check 2ish in case.",
      "confirmedCount": 0
    },
    "T029": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (7/38 Mondays), decreasing trend. Latest (2026-04-06): Ask at GS here a bit tomorrow usually from 11-2!",
      "confirmedCount": 0
    },
    "T091": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Mondays), steady trend. Latest (2026-01-26): May have some items check in 2-5!",
      "confirmedCount": 0
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "8% hit rate (3/38 Mondays), steady trend. Latest (2026-02-16): Check for vendor 12-2 here !",
      "confirmedCount": 0
    },
    "T030": {
      "chance": "Medium",
      "window": "10am-1pm",
      "reason": "8% hit rate (3/38 Mondays), steady trend. Typically 10am-1pm. Latest (2026-02-16): Usually will have a VQ Tuesdays and Fridays HOWEVER can be altered so just one person just swing by and ask between 10-2",
      "confirmedCount": 0
    },
    "T089": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (12/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Opening has become much more likely lately. Expect heads to be here ready and checking! If nothing then rotate a bit",
      "confirmedCount": 0
    },
    "T086": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Mondays), steady trend. Latest (2026-02-23): Check for items in the morning 8-10!",
      "confirmedCount": 0
    },
    "T066": {
      "chance": "Low",
      "window": "Opening",
      "reason": "34% hit rate (13/38 Mondays), steady trend. Typically Opening. Latest (2026-06-15): BACH TO RANDOM DROPS. Check are best at opening ,12-2, and 6-8 but realistically lang time as store will be random AND multiple times a day",
      "confirmedCount": 0
    },
    "T055": {
      "chance": "High",
      "window": "Opening",
      "reason": "11% hit rate (4/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): More likely for Tuesdays/Wednesday but check 12-3 in case",
      "confirmedCount": 0
    },
    "T124": {
      "chance": "High",
      "window": "",
      "reason": "37% hit rate (14/38 Mondays), increasing trend. Latest (2026-07-06): Has been hitting Tuesday\u2019s more consistently here",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "Medium",
      "window": "",
      "reason": "13% hit rate (5/38 Mondays), increasing trend. Latest (2026-07-06): Another option to check usually after Ventura Main in case they receive! Usually around 11-1 or a bit after",
      "confirmedCount": 0
    },
    "T052": {
      "chance": "Low",
      "window": "Opening",
      "reason": "29% hit rate (11/38 Mondays), steady trend. Typically Opening. Latest (2026-06-15): Quick opening look then rerun later in the morning. If tomorrow stays quiet expect stronger Tuesday action around 9-11 or 1-4```",
      "confirmedCount": 0
    },
    "T133": {
      "chance": "Medium",
      "window": "",
      "reason": "13% hit rate (5/38 Mondays), steady trend. 1 confirmed actual hit reported. Latest (2026-04-13): MONDAY/TUESDAY HITTER. Check morning or 12-2 warned you last week too",
      "confirmedCount": 1
    },
    "T166": {
      "chance": "Medium",
      "window": "",
      "reason": "5% hit rate (2/38 Mondays), steady trend. Latest (2026-04-27): Has been dropping Mondays here smaller amounts! Check in 9-11, 2-4, and 6-7:30 here!",
      "confirmedCount": 0
    },
    "T031": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (8/38 Mondays), steady trend. Typically Opening. Latest (2026-06-15): Similar setup to Manhattan. Midday and evening remain strongest with 11-1 and 4-7 doing the most damage. Opening can happen but the later windows are usually better",
      "confirmedCount": 0
    },
    "T142": {
      "chance": "High",
      "window": "",
      "reason": "5% hit rate (2/38 Mondays), increasing trend. Latest (2026-07-06): Vendor tends to hit Monday mornings so be ready around 9-11!",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "Medium",
      "window": "8-9am",
      "reason": "18% hit rate (7/38 Mondays), increasing trend. Typically 8-9am. Latest (2026-06-15): Basically adopted Tuesdays. Keep that in mind before camping here Monday although employees can still slide smaller items out",
      "confirmedCount": 0
    },
    "T078": {
      "chance": "Medium",
      "window": "5-8pm",
      "reason": "18% hit rate (7/38 Mondays), increasing trend. Typically 5-8pm. Latest (2026-06-15): Morning, 12-3, and 6-7 all remain solid. Usually not a Monday store but still worth checking",
      "confirmedCount": 0
    },
    "T079": {
      "chance": "Medium",
      "window": "",
      "reason": "16% hit rate (6/38 Mondays), increasing trend. Latest (2026-06-15): Usually Monday or Wednesday action. Focus 8-10 then another pass 2-5 if nothing develops",
      "confirmedCount": 0
    },
    "T045": {
      "chance": "High",
      "window": "Opening",
      "reason": "8% hit rate (3/38 Mondays), increasing trend. Typically Opening. Latest (2026-06-15): Has not moved yet. Be ready around 9-11 or 1-3 but it can absolutely push later",
      "confirmedCount": 0
    },
    "T038": {
      "chance": "Medium",
      "window": "8:30-11am",
      "reason": "8% hit rate (3/38 Mondays), steady trend. Typically 8:30-11am. Latest (2026-05-18): Hit Thursday last week but don\u2019t completely ignore tomorrow. Morning 8-10 or later 1-4 checks in case they sneak a small drop but likely will wait till later in the week",
      "confirmedCount": 0
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "13% hit rate (5/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Has claimed they are saving Poke for Fridays. Can check for other items at opening as they should receive and sell non poke still at opening and you never know maybe one day they s",
      "confirmedCount": 0
    },
    "T061": {
      "chance": "High",
      "window": "",
      "reason": "21% hit rate (8/38 Mondays), increasing trend. Latest (2026-07-06): UPS shipment should land around 9-10 and then heads will be here hawking it to see if they get excel boxes and sell!",
      "confirmedCount": 0
    },
    "T059": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "11% hit rate (4/38 Mondays), increasing trend. Typically Opening. Latest (2026-06-15): Both deserve attention. Opening first then swing back 9-11 once things get unboxed. If nothing checks go from 1-5!",
      "confirmedCount": 0
    },
    "T106": {
      "chance": "High",
      "window": "",
      "reason": "21% hit rate (8/38 Mondays), increasing trend. Latest (2026-07-06): Afternoon remains the stronger play, especially once nearby stores begin selling and people rotate over (Malvern). Last week sold around 12:30-1:30.",
      "confirmedCount": 0
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (8/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Still one of the busiest stores around. Opening remains strongest, but this location sells as they receive sometimes twice a day! Heads just wait here until store receives shipment",
      "confirmedCount": 0
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "11% hit rate (4/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Can check at opening but most likely time IF they receive tomorrow would be around mid day so heavy checks from 1:30-4 or evening time",
      "confirmedCount": 0
    },
    "T087": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Mondays), steady trend. Latest (2026-05-25): Hits evening typically here if vendor is working",
      "confirmedCount": 0
    },
    "T077": {
      "chance": "High",
      "window": "Opening",
      "reason": "11% hit rate (4/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Claims to be back to Friday drops!",
      "confirmedCount": 0
    },
    "T037": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "5% hit rate (2/38 Mondays), increasing trend. Typically Opening. Latest (2026-06-15): Still waiting to drop. Usually opening or 9-11 when it finally happens so stay alert",
      "confirmedCount": 0
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "8% hit rate (3/38 Mondays), increasing trend. Typically Opening. Latest (2026-07-06): Usually Tuesdays/Thursdays here but did hit late on a Monday Night previously so keep eyes in case they get a mid day or late shipment tomorrow! If not pls be ready Tuesday opening",
      "confirmedCount": 0
    },
    "T016": {
      "chance": "Medium",
      "window": "8-9am",
      "reason": "3% hit rate (1/38 Mondays), increasing trend. Typically 8-9am. Latest (2026-06-15): Usually hits Wednesday but last week stocked Monday so checks from 8-9am or 12-3!",
      "confirmedCount": 0
    },
    "T140": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Mondays), increasing trend. Latest (2026-06-15): Look for a morning drop and if nothing expect heads to wait around for possible vendor activity around 11-3```",
      "confirmedCount": 0
    },
    "T122": {
      "chance": "High",
      "window": "",
      "reason": "5% hit rate (2/38 Mondays), increasing trend. Latest (2026-07-06): Has been hitting MULTIPLE mondays in a row! While this does not mean it will stay like that people will form lines and wait",
      "confirmedCount": 0
    },
    "T073": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/38 Mondays), increasing trend. Latest (2026-06-22): Store holds back product and drops randomly but best times to check are 8-10 and 1-3!",
      "confirmedCount": 0
    }
  },
  "tuesday": {
    "T036": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (26/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Opening VQ remains the expectation. Be there early because people continue committing here.",
      "confirmedCount": 0
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "71% hit rate (27/38 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): If they do not push tn, they should sell at 8AM opening unless the line is too deep. Has not sold this week (yet) -- Sells @GS.",
      "confirmedCount": 0
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "34% hit rate (13/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Inventory keeps getting trickled out instead of one big release. Opening remains best. May hit Weds here but people will check tomorrow either way so be ready in case!",
      "confirmedCount": 0
    },
    "T031": {
      "chance": "High",
      "window": "",
      "reason": "37% hit rate (14/38 Tuesdays), increasing trend. Latest (2026-07-07): Continues performing multiple times each week. Best windows remain 11-1 and again from 4-7.",
      "confirmedCount": 0
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "66% hit rate (25/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Still overdue and continues drawing attention every morning. Opening first then continue checking because shipment should eventually hit.",
      "confirmedCount": 0
    },
    "T022": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (19/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Worth an opening stop if nearby, but evening may be slightly better!",
      "confirmedCount": 0
    },
    "T056": {
      "chance": "Low",
      "window": "Opening",
      "reason": "50% hit rate (19/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-02-24): Check morning time, 8-10 but store plays a lot so can also be randomly like 12-2",
      "confirmedCount": 0
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "87% hit rate (33/38 Tuesdays), steady trend. Typically Opening. Latest (2026-07-07): One of the easiest stores to leave in rotation all day. Can always sell some small amounts of product even if it hit today",
      "confirmedCount": 0
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (37/38 Tuesdays), steady trend. Typically Opening. Latest (2026-07-07): Opening Guest Services check first DONT MISS IT! then work it back into your route around 10-12 and again later if nothijg.",
      "confirmedCount": 0
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "95% hit rate (36/38 Tuesdays), steady trend. Typically Opening. Latest (2026-07-07): Opening remains the best opportunity. If nothing develops early don't ignore midday because this store has become more active lately.",
      "confirmedCount": 0
    },
    "T137": {
      "chance": "Low",
      "window": "Opening",
      "reason": "74% hit rate (28/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-07-07): May have done a random push today early",
      "confirmedCount": 0
    },
    "T133": {
      "chance": "High",
      "window": "Opening",
      "reason": "89% hit rate (34/38 Tuesdays), steady trend. Typically Opening. Latest (2026-07-07): Opening remains worthwhile but 9:30-11 and later afternoon continue fitting this location extremely well.",
      "confirmedCount": 0
    },
    "T124": {
      "chance": "High",
      "window": "Opening",
      "reason": "87% hit rate (33/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-07-07): Remains one of the biggest focuses. Expect people waiting from opening and sticking around until inventory shows.",
      "confirmedCount": 0
    },
    "T122": {
      "chance": "Medium",
      "window": "",
      "reason": "82% hit rate (31/38 Tuesdays), decreasing trend. Latest (2026-06-09): SAME ENERGY AS EASTVALE. These remain major stores to watch for activity people will being WAITING",
      "confirmedCount": 0
    },
    "T134": {
      "chance": "High",
      "window": "Opening",
      "reason": "3% hit rate (1/38 Tuesdays), steady trend. Typically Opening. Latest (2025-10-07): Check around opening for a guest services drop. Always receives on the same timeframe as Ontario/4th location. Reliable route. LIKELY WEDS BUT FEEL FREE TO CHECK TMW AFTER SAMS.",
      "confirmedCount": 0
    },
    "T123": {
      "chance": "High",
      "window": "8-11am",
      "reason": "74% hit rate (28/38 Tuesdays), steady trend. Typically 8-11am. Latest (2026-07-07): Sleeper location. Could finally move tomorrow or continue waiting for its usual Wednesday rhythm.",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (20/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-30): Still a bit of a mystery. Last updates were that this store sells on random days around opening. Expect a line checking since ppl will line up for BN Redlands ticket procedure in t",
      "confirmedCount": 0
    },
    "T125": {
      "chance": "High",
      "window": "2:30-5:30PM",
      "reason": "53% hit rate (20/38 Tuesdays), decreasing trend. Typically 2:30-5:30PM. Latest (2026-06-30): Been hitting Thursdays consistently for 1+ month. Likely drops on Tuesdays as well. Can check at opening but patterns suggest this store's likelihood between 2:30-5:30PM. They rece",
      "confirmedCount": 0
    },
    "T138": {
      "chance": "High",
      "window": "",
      "reason": "71% hit rate (27/38 Tuesdays), increasing trend. Latest (2026-07-07): Focus stays around 8:30-10:30 but never ignore random employee pushes because they happen here more than most stores.",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "71% hit rate (27/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Did move inventory already. Worth checking again but don't be surprised if they save the next bigger wave.",
      "confirmedCount": 0
    },
    "T121": {
      "chance": "High",
      "window": "8-11AM",
      "reason": "71% hit rate (27/38 Tuesdays), increasing trend. 1 confirmed actual hit reported. Typically 8-11AM. Latest (2026-07-07): One of the area's highest priorities. Timing continues bouncing around so patience will be more important than speed.",
      "confirmedCount": 1
    },
    "T166": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "26% hit rate (10/38 Tuesdays), steady trend. Typically Opening. Latest (2026-07-07): As posted before store is selling shipment as it receives so check tomorrow from 8-10 or 12-2 for shipment ask at guest services!",
      "confirmedCount": 0
    },
    "T111": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "66% hit rate (25/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-04-07): Trending toward Wednesday mornings now instead of Tuesday.",
      "confirmedCount": 0
    },
    "T089": {
      "chance": "Medium",
      "window": "",
      "reason": "63% hit rate (24/38 Tuesdays), decreasing trend. Latest (2026-06-02): STILL HASN'T REALLY MOVED. Watch 12-2 closely",
      "confirmedCount": 0
    },
    "T090": {
      "chance": "Low",
      "window": "",
      "reason": "32% hit rate (12/38 Tuesdays), decreasing trend. Latest (2026-02-24): Hit today should be quiet tomorrow !",
      "confirmedCount": 0
    },
    "T119": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (20/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Recent patterns lean to Wednesdays, but opening through late morning still deserves attention with another worthwhile check around 1-3 justtt in case",
      "confirmedCount": 0
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (8/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Did hit last week at opening so expect a SOLID line here prior to opening to check!",
      "confirmedCount": 0
    },
    "T093": {
      "chance": "Medium",
      "window": "8-9AM",
      "reason": "34% hit rate (13/38 Tuesdays), decreasing trend. Typically 8-9AM. Latest (2026-06-02): Smaller location but still active. Best checks remain 8-9:30 and 12-2",
      "confirmedCount": 0
    },
    "T114": {
      "chance": "High",
      "window": "Opening",
      "reason": "16% hit rate (6/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Literally the same as Jeronimo but A BIT more consistent for opening time. Expect a line a bit deeper than Jeronimo's at opening tmrw.",
      "confirmedCount": 0
    },
    "T012": {
      "chance": "Medium",
      "window": "8-10AM",
      "reason": "50% hit rate (19/38 Tuesdays), decreasing trend. Typically 8-10AM. Latest (2026-02-24): Would imagine it goes a bit later in week",
      "confirmedCount": 0
    },
    "T002": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (18/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Sold some Greninja at opening as posted store can sell constantly as they hold back and push items themselves so people check daily. Employees confirm prior to opening early",
      "confirmedCount": 0
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "89% hit rate (34/38 Tuesdays), steady trend. Typically Opening. Latest (2026-07-07): Employee pushes continue making this one of the better SGV stores. Opening remains strongest then check back through midday",
      "confirmedCount": 0
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "89% hit rate (34/38 Tuesdays), steady trend. Typically Opening. Latest (2026-07-07): CHECK at opening heads will be here don\u2019t wait for an update just check!",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "High",
      "window": "Opening",
      "reason": "61% hit rate (23/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Opening remains the move. If they delay don't bail immediately because this location has sold later. Warned last week and hit at opening",
      "confirmedCount": 0
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "74% hit rate (28/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Still one of the stronger employee push stores. Opening is the priority but keep rotating because product can appear throughout the day multiple times",
      "confirmedCount": 0
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "84% hit rate (32/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Opening continues looking strongest hits Tuesdays/Fridays should have a PACKA of First Partner and possibly more!",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "High",
      "window": "12-1:30PM",
      "reason": "26% hit rate (10/38 Tuesdays), increasing trend. Typically 12-1:30PM. Latest (2026-07-07): Morning and midday remain strongest unless they quietly sold today!",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (26/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Morning shipment checks remain mandatory. Long lines should be expected again before opening as it has not hit!!!",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "87% hit rate (33/38 Tuesdays), steady trend. 2 confirmed actual hits reported. Typically Opening. Latest (2026-07-07): RIP store claimed today that they will be shifting to Fridays only",
      "confirmedCount": 2
    },
    "T069": {
      "chance": "Medium",
      "window": "6-8pm",
      "reason": "76% hit rate (29/38 Tuesdays), decreasing trend. 1 confirmed actual hit reported. Typically 6-8pm. Latest (2026-06-02): Can have smaller pushes but more likely to be holding. Keep checks lighter",
      "confirmedCount": 1
    },
    "T083": {
      "chance": "High",
      "window": "Opening",
      "reason": "55% hit rate (21/38 Tuesdays), increasing trend. 3 confirmed actual hits reported. Typically Opening. Latest (2026-07-07): Cam check for Needohs and other items at opening but store did claim to move Poke to Fridays only",
      "confirmedCount": 3
    },
    "T067": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "89% hit rate (34/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-23): Opening, 9-11 and 2-4 remain the key windows. Could still be sitting on additional stock.",
      "confirmedCount": 0
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "61% hit rate (23/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Opening is still worthwhile but don't forget the evening window because this location sells when it\u2019s least busy usually",
      "confirmedCount": 0
    },
    "T072": {
      "chance": "High",
      "window": "Opening",
      "reason": "42% hit rate (16/38 Tuesdays), steady trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-30): Has shifted from a Fri store to a random store. Be ready for it to hit randomly tmw or Weds. Check at opening + around 10-12.",
      "confirmedCount": 1
    },
    "T064": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Tuesdays), steady trend. 1 confirmed actual hit reported. Latest (2025-10-07): Due for stock, but supposedly, the vendor is away right now. Check 12-2 in case employees stock now that the shipment they are sitting on is THICK.",
      "confirmedCount": 1
    },
    "T079": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "37% hit rate (14/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-03-24): May have hit today check in and ask ```",
      "confirmedCount": 0
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "71% hit rate (27/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Sneaky option for opening DONT SLEEP. Really depends what route vendor chooses so should either hit tomorrow or Thursdays!",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "63% hit rate (24/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-30): Did not push much Poke AS OF NOW. Still a chance they do so tonight. If not, expect this store to sell at opening. A line will be formed.",
      "confirmedCount": 0
    },
    "T018": {
      "chance": "Medium",
      "window": "1-4PM",
      "reason": "89% hit rate (34/38 Tuesdays), decreasing trend. Typically 1-4PM. Latest (2026-06-30): Will either employee push at/around opening, or they'll wait for the vendor tmrw or Weds. It'll hit between 1-4PM most likely and ppl will linger nearby.",
      "confirmedCount": 0
    },
    "T010": {
      "chance": "High",
      "window": "Opening",
      "reason": "92% hit rate (35/38 Tuesdays), steady trend. Typically Opening. Latest (2026-07-07): Start with opening then circle back around 12-2 or even later in the evening. This store loves sitting on inventory",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "63% hit rate (24/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Morning remains strongest with another worthwhile run around 10-12 or 1-3 depending when shipment lands",
      "confirmedCount": 0
    },
    "T037": {
      "chance": "Medium",
      "window": "9AM-12PM",
      "reason": "47% hit rate (18/38 Tuesdays), decreasing trend. Typically 9AM-12PM. Latest (2026-02-24): 10-12 just check for when they receive either tomorrow or Thursday , 2 per sku here so great catch",
      "confirmedCount": 0
    },
    "T038": {
      "chance": "Medium",
      "window": "8-10am",
      "reason": "11% hit rate (4/38 Tuesdays), steady trend. Typically 8-10am. Latest (2026-06-16): Check 8-10am or 1-3 in case they get a shipment!",
      "confirmedCount": 0
    },
    "T053": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "24% hit rate (9/38 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): Same situation and timeframe as WeHo; if anything a bit earlier, as in 10-12. Sells at guest services. This, Galaxy, and WeHo are an easy 1-2-3.",
      "confirmedCount": 0
    },
    "T109": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "39% hit rate (15/38 Tuesdays), decreasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-03-17): Since did not hit be ready 9-11 or 2-5ish check later too. Store has been switching up a bit",
      "confirmedCount": 1
    },
    "T044": {
      "chance": "High",
      "window": "7-8AM",
      "reason": "66% hit rate (25/38 Tuesdays), increasing trend. Typically 7-8AM. Latest (2026-07-07): Early 7-8AM look then another sweep around 10-11 heads will be here!",
      "confirmedCount": 0
    },
    "T046": {
      "chance": "Medium",
      "window": "",
      "reason": "5% hit rate (2/38 Tuesdays), increasing trend. Latest (2026-06-30): Due for their first shipment of the week. YES, this store gets Poke. Has a small cards area where they stock, check from 12-2.",
      "confirmedCount": 0
    },
    "T107": {
      "chance": "Medium",
      "window": "",
      "reason": "47% hit rate (18/38 Tuesdays), decreasing trend. Latest (2026-02-24): Should hit here Thursday",
      "confirmedCount": 0
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "61% hit rate (23/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Small chance for morning then another run between 1-4. Not usually Tuesdays but schedule is slightly off",
      "confirmedCount": 0
    },
    "T085": {
      "chance": "Medium",
      "window": "",
      "reason": "5% hit rate (2/38 Tuesdays), steady trend. Latest (2025-10-28): Rotate these along with Woodland Hills tomorrow",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "High",
      "window": "",
      "reason": "89% hit rate (34/38 Tuesdays), decreasing trend. Latest (2026-06-30): Recently shifted toward midweek drops. Keep an eye on it! 7AM check for a small push, then again between 11-12 and 3-4 for a full stock of the shipment received. SO LIKELY TO HIT T",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "High",
      "window": "",
      "reason": "8% hit rate (3/38 Tuesdays), increasing trend. Latest (2026-07-07): Madera hits later in the morning and around midday when they get shoulder",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "High",
      "window": "",
      "reason": "55% hit rate (21/38 Tuesdays), steady trend. Latest (2026-06-30): Did not end up restocking so keep eyes! People will form a line early tmrw, same thing happened last week.",
      "confirmedCount": 0
    },
    "T092": {
      "chance": "High",
      "window": "Opening",
      "reason": "89% hit rate (34/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-07-07): Was flirting with Friday only drops so check tomorrow in case from 8-10 but expect store to either confirm or deny if that\u2019s the plan",
      "confirmedCount": 0
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "82% hit rate (31/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-30): Saving Poke for Fridays at opening now. No more daily drops.",
      "confirmedCount": 0
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "34% hit rate (13/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): One of the better vendor watches tomorrow. Opening deserves attention and if vendor shows expect people to stay until everything is stocked. Vendor sometimes shows around 9-11 or l",
      "confirmedCount": 0
    },
    "T063": {
      "chance": "Low",
      "window": "Opening",
      "reason": "37% hit rate (14/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-16): Should receive stock tomorrow and is selling randomly again so pls keep eyes!",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (20/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Big opening focus. Expect people staged before doors open and be ready right at 7AM hits almost daily",
      "confirmedCount": 0
    },
    "T071": {
      "chance": "High",
      "window": "2-3PM",
      "reason": "61% hit rate (23/38 Tuesdays), increasing trend. 3 confirmed actual hits reported. Typically 2-3PM. Latest (2026-07-07): Continue treating this as an afternoon store. Noon through evening remains the best stretch and Tuesdays continue fitting this location well.",
      "confirmedCount": 3
    },
    "T030": {
      "chance": "High",
      "window": "7-8AM",
      "reason": "55% hit rate (21/38 Tuesdays), steady trend. Typically 7-8AM. Latest (2026-06-30): 7AM check! They unboxed and sold what they received today but there was no Poke. They're likely to do the same tmr but with shipment in this time! Expect a line.",
      "confirmedCount": 0
    },
    "T108": {
      "chance": "Medium",
      "window": "",
      "reason": "16% hit rate (6/38 Tuesdays), decreasing trend. Latest (2026-01-06): Peep in the morning ask if vendor ever came by but if nothing high chance it goes tomorrow now!",
      "confirmedCount": 0
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "63% hit rate (24/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Main windows remain 9-11 and 12-2. Wednesday still fits this store best, but again stores can switch it up",
      "confirmedCount": 0
    },
    "T095": {
      "chance": "High",
      "window": "",
      "reason": "87% hit rate (33/38 Tuesdays), steady trend. Latest (2026-07-07): Morning VQ continues looking most likely. Expect another early line before the doors even open and VQ to go up shortly after. Vendor around 10ish",
      "confirmedCount": 0
    },
    "T013": {
      "chance": "Medium",
      "window": "2:30-5:00PM",
      "reason": "58% hit rate (22/38 Tuesdays), decreasing trend. 1 confirmed actual hit reported. Typically 2:30-5:00PM. Latest (2026-06-30): Usually does their first of 2-3 weekly stocks on Tues. It will go down around opening or in the afternoon between 2:30-5:00 PM. People will lurk!",
      "confirmedCount": 1
    },
    "T001": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (19/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Either early vendor watch or later afternoon! If Alhambra hits watch for this store or vice versa",
      "confirmedCount": 0
    },
    "T086": {
      "chance": "Medium",
      "window": "",
      "reason": "21% hit rate (8/38 Tuesdays), decreasing trend. Latest (2026-01-06): Usually would be Wed-Fri here",
      "confirmedCount": 0
    },
    "T100": {
      "chance": "High",
      "window": "12-1PM",
      "reason": "63% hit rate (24/38 Tuesdays), increasing trend. 1 confirmed actual hit reported. Typically 12-1PM. Latest (2026-07-07): Vendor Tuesday followed by Wednesday sales continues fitting this store but check in case as they are overdue from Friday",
      "confirmedCount": 1
    },
    "T110": {
      "chance": "Medium",
      "window": "",
      "reason": "29% hit rate (11/38 Tuesdays), decreasing trend. Latest (2026-02-24): Should sell on Weds/Thursday here",
      "confirmedCount": 0
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "79% hit rate (30/38 Tuesdays), steady trend. Typically Opening. Latest (2026-06-30): It did not hit today so it is in play tmrw. You can check at 7AM but this store usually goes down at opening or 10-12. Sylmar to here (GV) is a route, vice versa.",
      "confirmedCount": 0
    },
    "T054": {
      "chance": "High",
      "window": "10-11AM",
      "reason": "74% hit rate (28/38 Tuesdays), increasing trend. Typically 10-11AM. Latest (2026-07-07): Store receives a bit more shipment tomorrow so check in 9-11 here! Will go quick stay on it",
      "confirmedCount": 0
    },
    "T055": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "42% hit rate (16/38 Tuesdays), steady trend. Typically 10AM-12PM. Latest (2026-06-30): Can check between 10AM-12PM and between 3PM and 4PM for new stock at guest services. We'll update tomorrow.",
      "confirmedCount": 0
    },
    "T041": {
      "chance": "High",
      "window": "Opening",
      "reason": "74% hit rate (28/38 Tuesdays), steady trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-07): Similar setup to Pico. Opening first but don't forget later checks if inventory doesn't appear immediately.",
      "confirmedCount": 1
    },
    "T098": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (26/38 Tuesdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-07): Ended up hitting today!",
      "confirmedCount": 1
    },
    "T167": {
      "chance": "High",
      "window": "",
      "reason": "61% hit rate (23/38 Tuesdays), increasing trend. Latest (2026-07-07): Store mentioned waiting until Friday but last week sold prior so check 8-10! Ask store they should confirm",
      "confirmedCount": 0
    },
    "T165": {
      "chance": "Medium",
      "window": "7-10am",
      "reason": "32% hit rate (12/38 Tuesdays), decreasing trend. Typically 7-10am. Latest (2026-02-24): Hit today great job catching!",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "Low",
      "window": "Opening",
      "reason": "58% hit rate (22/38 Tuesdays), decreasing trend. Typically Opening. Latest (2026-06-30): Unlikely, but check at 7AM tmrw. The more likely time is between 10-12, when GS has the time to unbox. Smaller store means less employees. They sell on and off when they have time ",
      "confirmedCount": 0
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "74% hit rate (28/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Continues behaving like one of the most active stores around. Opening and 10-12 remain strongest while people wait out shipments.",
      "confirmedCount": 0
    },
    "T049": {
      "chance": "Medium",
      "window": "",
      "reason": "21% hit rate (8/38 Tuesdays), decreasing trend. Latest (2026-02-03): Check in tomorrow morning and throughout the day",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "Medium",
      "window": "",
      "reason": "37% hit rate (14/38 Tuesdays), decreasing trend. Latest (2026-06-02): BOTH DESERVE MORNING ATTENTION but stores have been harder catches",
      "confirmedCount": 0
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "39% hit rate (15/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Worth an opening check again. Store continues flying under the radar and will randomly stock as seen tonight",
      "confirmedCount": 0
    },
    "T082": {
      "chance": "Medium",
      "window": "",
      "reason": "8% hit rate (3/38 Tuesdays), steady trend. Latest (2026-01-27): Check in prime time is 12-3 here if not on Friday",
      "confirmedCount": 0
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "29% hit rate (11/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Did move some product already but has leftovers confirmed for tomorrow opening",
      "confirmedCount": 0
    },
    "T143": {
      "chance": "Medium",
      "window": "",
      "reason": "11% hit rate (4/38 Tuesdays), increasing trend. Latest (2026-06-30): Usually hits Tues/Fri or Sat mornings, Sat more than Fri. People will arrive early. Oftentimes sells via aisle here. Vendor stocks, be early!",
      "confirmedCount": 0
    },
    "T033": {
      "chance": "High",
      "window": "10-11AM",
      "reason": "55% hit rate (21/38 Tuesdays), increasing trend. Typically 10-11AM. Latest (2026-07-07): Biggest timing change lately. Expect action around 8-8:30 if it goes early. If not, don't write it off because this store can still sell later.",
      "confirmedCount": 0
    },
    "T029": {
      "chance": "High",
      "window": "Opening",
      "reason": "29% hit rate (11/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Both sold a bit later tonight. Heads check Century daily at opening and they do tend to hold back stock",
      "confirmedCount": 0
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "16% hit rate (6/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Opening remains one of the better plays. Expect another early crowd waiting before doors open.",
      "confirmedCount": 0
    },
    "T091": {
      "chance": "High",
      "window": "",
      "reason": "13% hit rate (5/38 Tuesdays), increasing trend. 1 confirmed actual hit reported. Latest (2026-07-07): Garfield sold today it seems. Heavy eyes on CM 17th tomorrow from 8-10 or a bit later",
      "confirmedCount": 1
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "8% hit rate (3/38 Tuesdays), steady trend. Typically Opening. Latest (2026-06-16): Ask about a possible drop tomorrow! May or may not do a VQ or just a straight FCFS drop in the morning or 9-12",
      "confirmedCount": 0
    },
    "T120": {
      "chance": "High",
      "window": "",
      "reason": "21% hit rate (8/38 Tuesdays), increasing trend. Latest (2026-07-07): One of the stronger Tuesday locations. Best windows remain 12-3 and another look around 5-7. Last week was Monday but should be tomorrow if it didn\u2019t hit today",
      "confirmedCount": 0
    },
    "T058": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (18/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Opening first then another pass around 10-12 in case they get more shipment",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "High",
      "window": "Opening",
      "reason": "29% hit rate (11/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Check morning time for a push or a bit after opening people will be here!",
      "confirmedCount": 0
    },
    "T043": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/38 Tuesdays), steady trend. Latest (2026-03-24): Look for a random drop tomorrow either morning time or 11-2 but if not will be Weds as usual",
      "confirmedCount": 0
    },
    "T066": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "18% hit rate (7/38 Tuesdays), decreasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-16): Store is back to random drops so you\u2019ll have to be on it!",
      "confirmedCount": 1
    },
    "T052": {
      "chance": "High",
      "window": "Opening",
      "reason": "34% hit rate (13/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Both stores are OVERDUE and should hit! Focus on Weho a bit more. Best attention remains around 9-11 then again from 1-4.",
      "confirmedCount": 0
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "21% hit rate (8/38 Tuesdays), decreasing trend. Latest (2026-06-16): Last week hit Tuesday evening instead of Weds! Store has been pushing product themselves so check throughout the day for a switch up!",
      "confirmedCount": 0
    },
    "T039": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Tuesdays), steady trend. Latest (2026-04-21): Peep 9:30-11:30 but may go later in week",
      "confirmedCount": 0
    },
    "T131": {
      "chance": "Low",
      "window": "Opening",
      "reason": "13% hit rate (5/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): More random now but they should hit once shipment lands tmrw. Ask at guest services. Can pair a check with the other Apple Valley location off of the highway as well!",
      "confirmedCount": 0
    },
    "T087": {
      "chance": "High",
      "window": "Opening",
      "reason": "16% hit rate (6/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Expect heads here waiting throughout the morning for vendor!",
      "confirmedCount": 0
    },
    "T126": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/38 Tuesdays), steady trend. Latest (2026-04-28): Hit today as well a bit randomly",
      "confirmedCount": 0
    },
    "T016": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "8% hit rate (3/38 Tuesdays), steady trend. Typically Opening. Latest (2026-06-16): Same like Rowland above one of these two should hit in the morning!",
      "confirmedCount": 0
    },
    "T017": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "11% hit rate (4/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Sleeper option for a morning or afternoon drop! Depends on vendor route but if it gets later heads will line up!",
      "confirmedCount": 0
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (8/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Opening continues to be king. Keep looping back because this store also sells multiple rounds",
      "confirmedCount": 0
    },
    "T140": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "5% hit rate (2/38 Tuesdays), steady trend. Typically Opening. Latest (2026-05-19): Opening checks then linger a bit! Lines can form but may hit either tomorrow or Wednesday!",
      "confirmedCount": 0
    },
    "T035": {
      "chance": "Medium",
      "window": "10AM-1PM",
      "reason": "5% hit rate (2/38 Tuesdays), increasing trend. Typically 10AM-1PM. Latest (2026-06-30): Sleeper that is basically 100% for tm or Weds, usually between 10AM-1PM. Sells @GS.",
      "confirmedCount": 0
    },
    "T077": {
      "chance": "High",
      "window": "",
      "reason": "16% hit rate (6/38 Tuesdays), increasing trend. Latest (2026-06-23): Morning first then hammer the 11-2 window. One of the steadier stores lately.",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "High",
      "window": "",
      "reason": "16% hit rate (6/38 Tuesdays), increasing trend. 1 confirmed actual hit reported. Latest (2026-06-30): Biggest focus should be vendor timing from 1-4. Expect people lingering and waiting throughout the afternoon. The line is likely to start by 12PM or so. People always catch th...",
      "confirmedCount": 1
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "13% hit rate (5/38 Tuesdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-07): Keep watching the normal shipment window around 9-11",
      "confirmedCount": 1
    },
    "T051": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/38 Tuesdays), steady trend. Latest (2026-05-26): South street for VQ at open (but may do Weds). Bloomfield will be a great check for a random from from 12-2 or 3-5 if nothing early!```",
      "confirmedCount": 0
    },
    "T060": {
      "chance": "High",
      "window": "",
      "reason": "5% hit rate (2/38 Tuesdays), increasing trend. Latest (2026-06-30): DID NOT receive today, leaving them in play for tmrw. Smaller stores receive 2 shipments usually and if it doesn't hit on Mon, it almost ALWAYS hits Tues then Fri.",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/38 Tuesdays), steady trend. Latest (2026-06-02): Random drops now so CHECK IN FROM 8-11 or later on will be RANDOM",
      "confirmedCount": 0
    },
    "T081": {
      "chance": "High",
      "window": "Opening",
      "reason": "8% hit rate (3/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-23): Did not appear to move today. Looks lined up for an opening or morning release tomorrow and should draw attention early.",
      "confirmedCount": 0
    },
    "T117": {
      "chance": "Medium",
      "window": "",
      "reason": "5% hit rate (2/38 Tuesdays), increasing trend. Latest (2026-07-07): Look for a drop around 9-11 or afternoon here!",
      "confirmedCount": 0
    },
    "T106": {
      "chance": "High",
      "window": "Opening",
      "reason": "5% hit rate (2/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Did not appear to move Pok\u00e9mon today. Worth opening checks in case inventory is being intentionally held back.",
      "confirmedCount": 0
    },
    "T059": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "3% hit rate (1/38 Tuesdays), increasing trend. Typically 11AM-1PM. Latest (2026-06-30): Been selling frequently between 11AM-1PM at guest services, 1 per SKU. Sleeper check in!",
      "confirmedCount": 0
    },
    "T045": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Tuesdays), increasing trend. Latest (2026-06-30): Vendor stocked sneakily last Tues night. Check again this week to see if it happens again!",
      "confirmedCount": 0
    },
    "T116": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/38 Tuesdays), increasing trend. Latest (2026-06-30): Same situation as Signal Hill. Both stores are due and will be lined up at accordingly. Don't wait to go.```",
      "confirmedCount": 0
    },
    "T112": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-06-30): Still due for stock, people will line up here to gamble at opening. This happens everyday. Usually hits Tues/Thurs and some Fri!",
      "confirmedCount": 0
    },
    "T113": {
      "chance": "Medium",
      "window": "10-12PM",
      "reason": "3% hit rate (1/38 Tuesdays), increasing trend. Typically 10-12PM. Latest (2026-06-30): Often slept on, but definitely not forgotten about by locals. Hits by 10-12PM and gets cleaned quickly. Smaller store that receives much less stock than the other 2 Mission Viejo l",
      "confirmedCount": 0
    },
    "T115": {
      "chance": "Medium",
      "window": "12-3PM",
      "reason": "3% hit rate (1/38 Tuesdays), increasing trend. Typically 12-3PM. Latest (2026-06-30): Usually pushes between 12-3PM at guest services. This is another smaller location that receives quaint batches of stock in lesser frequency than other South OC stores, like San Cle",
      "confirmedCount": 0
    },
    "T118": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/38 Tuesdays), increasing trend. Typically Opening. Latest (2026-07-07): Opening, then 10-12, then 5-7 checks until it hits! When it does expect them to STAGGER product out so multiple waves",
      "confirmedCount": 0
    },
    "T019": {
      "chance": "Medium",
      "window": "",
      "reason": "No formal guide prediction, but 1 confirmed actual hit reported on this weekday.",
      "confirmedCount": 1
    }
  },
  "wednesday": {
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "94% hit rate (32/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Sold Monday, check for more tomorrow. Been pushing when shipment comes in at guest serivces recently. Larger store that did not drop today. Check betwen 8-10AM, especially since S ",
      "confirmedCount": 0
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "79% hit rate (27/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been selling at opening almost daily! You can count on a line waiting for 8AM tomorrow. Be a bit early if you want the best chance of hitting. Also due for a vendor restock.",
      "confirmedCount": 0
    },
    "T013": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "29% hit rate (10/34 Wednesdays), decreasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-10): Hit today as posted here first!",
      "confirmedCount": 1
    },
    "T008": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been selling at opening these last few days without much of a crowd. Again, they sell 1 SKU at a time, so ppl choose other locations for this reason.",
      "confirmedCount": 0
    },
    "T011": {
      "chance": "High",
      "window": "11AM-2PM",
      "reason": "82% hit rate (28/34 Wednesdays), increasing trend. Typically 11AM-2PM. Latest (2026-07-01): Sells basically everyday at multiple times, and they sell selectively. You can expect a 7AM line, and you can expect more between 11AM-2PM. GS will sell to whoever they want to.",
      "confirmedCount": 0
    },
    "T001": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-05-27): Priority Wednesday stop alongside Alhambra. Usually one pops early while the other follows later afternoon",
      "confirmedCount": 0
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "74% hit rate (25/34 Wednesdays), steady trend. Typically Opening. Latest (2026-06-24): Normally stronger Thursday mornings but has absolutely switched to Wednesday before. Don't write it off",
      "confirmedCount": 0
    },
    "T002": {
      "chance": "High",
      "window": "7-8am",
      "reason": "47% hit rate (16/34 Wednesdays), decreasing trend. Typically 7-8am. Latest (2026-06-17): PRIMED please please be ready heads will be here early update from 7-8am store should confirm prior",
      "confirmedCount": 0
    },
    "T010": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-01): VERY DUE to sell tomorrow! They switch up the timing constantly. Check at opening. Seems more possible tmrw.",
      "confirmedCount": 1
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "59% hit rate (20/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Generally has a crowd of people checking daily at opening. Receives heavy stock when it does hit!",
      "confirmedCount": 0
    },
    "T124": {
      "chance": "High",
      "window": "Opening",
      "reason": "15% hit rate (5/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-04-15): Hasn\u2019t hit so BE READY people will be on it and very likely to form a line like they did today!",
      "confirmedCount": 0
    },
    "T133": {
      "chance": "High",
      "window": "",
      "reason": "76% hit rate (26/34 Wednesdays), steady trend. Latest (2026-07-01): Literally the same as Fontana/Summit, posted directly above. Sells at guest services like Fontana/Summit!",
      "confirmedCount": 0
    },
    "T138": {
      "chance": "High",
      "window": "12PM-2PM",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically 12PM-2PM. Latest (2026-07-01): Sold last Weds at opening! Definitely one to be at tomorrow. Not confirmed, but you can expect a line of ppl here. They also push between 12PM-2PM in carts by guest services.",
      "confirmedCount": 0
    },
    "T145": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Sells at opening and receives heavy stock. Check tomorrow, people are looking almost every morning.",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "85% hit rate (29/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been selling at opening, sold today at opening for example. They have a line every morning due to the recent consistency of drop time. Feel free to stop by tmrw!",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "76% hit rate (26/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been awfully dry to the point it seems like they are holding out for Friday. Many SFV stores have made the switch this week. Feel free to check 1 more time tmrw.",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "12% hit rate (4/34 Wednesdays), increasing trend. Typically 11AM-1PM. Latest (2026-07-01): Selling by 11AM-1PM. Line will form even earlier since Newbury is not even due for stock tmrw. Going to be busier than usual.",
      "confirmedCount": 0
    },
    "T069": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "88% hit rate (30/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-06-24): Received stock today. Can check morning or evening and last week hit at opening so expect heads checking!",
      "confirmedCount": 0
    },
    "T083": {
      "chance": "Low",
      "window": "8-10AM",
      "reason": "56% hit rate (19/34 Wednesdays), decreasing trend. Typically 8-10AM. Latest (2026-06-24): Most reliable windows stay 8-10AM and 6-8PM did not hit today unless it goes late tonight! Last week did hit around 12:30-2",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "High",
      "window": "10AM-12PM",
      "reason": "12% hit rate (4/34 Wednesdays), increasing trend. Typically 10AM-12PM. Latest (2026-07-01): Been selling when shipment comes in, so it's actually a pretty decent check. Usually 10AM-12PM or during the night time.",
      "confirmedCount": 0
    },
    "T022": {
      "chance": "Low",
      "window": "3-5PM",
      "reason": "82% hit rate (28/34 Wednesdays), decreasing trend. Typically 3-5PM. Latest (2026-07-01): Unlikely that they sell tm, they sold today. Check time: 3-5PM!",
      "confirmedCount": 0
    },
    "T052": {
      "chance": "Medium",
      "window": "12:30-2:30PM",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically 12:30-2:30PM. Latest (2026-07-01): Has been selling daily recently, including Sat. It hits between 12:30-2:30PM.",
      "confirmedCount": 0
    },
    "T053": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "50% hit rate (17/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-07-01): Usually hits Tues or Weds! Not much chatter about this store today, check in at 8AM tmrw. If not, it SHOULD hit between 11-1 at guest services.",
      "confirmedCount": 0
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (34/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Weds are usually when this store starts hitting more! Line forms by 10AM, store sells by 12:30, hits daily, just be early.",
      "confirmedCount": 0
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "35% hit rate (12/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Weds is usually a day where they sell at opening/earlier in the day. Check at 7AM and check at 10-12 if it's dry at 7!",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "High",
      "window": "3-6AM",
      "reason": "59% hit rate (20/34 Wednesdays), steady trend. Typically 3-6AM. Latest (2026-07-01): Supposedly still due! It also hit last Weds! Expect people to set up chairs by 3-6AM here. If it hits like last week, stock will be juicy since it's around a week of shipments accu",
      "confirmedCount": 0
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "91% hit rate (31/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Sells almost everyday. Some stock goes out at opening then people stick around for more once UPS delivers again around 11-12. Store usually sells again by 1. Easy double up!",
      "confirmedCount": 0
    },
    "T044": {
      "chance": "High",
      "window": "9AM-12PM",
      "reason": "76% hit rate (26/34 Wednesdays), steady trend. Typically 9AM-12PM. Latest (2026-07-01): Stocked today so it seems unlikely that they will sell again tomorrow. Feel free to check in for any held stock between 9AM-12PM which is their most likely time to push randomly at",
      "confirmedCount": 0
    },
    "T045": {
      "chance": "Low",
      "window": "9-11am",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically 9-11am. Latest (2026-07-01): DID NOT stock today, still in play for tmrw. Vendor tends to stock at night. I was wrong yesterday when I said they stock Tues and I apologize. It was Weds, and it can happen again",
      "confirmedCount": 0
    },
    "T046": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically 9-11AM. Latest (2026-07-01): Similar to other smaller locations, they have started to receive ALMOST every other day. Check tomorrow at GS + check the card display between 9-11AM and 1-3PM.",
      "confirmedCount": 0
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-01): Check at opening, alongside 7th & Fig. This store opens at 8AM, Fig is 7AM. If they're dry, prob holding for Fri.",
      "confirmedCount": 1
    },
    "T049": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Holding inventory it seems, likely Friday at opening! Should have Needohs/Squeezy at the bare minimum tmrw at opening, so it's still worth a check.",
      "confirmedCount": 0
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "91% hit rate (31/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Check at opening, but they sold today. 50/50 whether they double back tomorrow. That's your best time to check though!",
      "confirmedCount": 0
    },
    "T031": {
      "chance": "High",
      "window": "9-10AM",
      "reason": "44% hit rate (15/34 Wednesdays), increasing trend. Typically 9-10AM. Latest (2026-07-01): Expect a line by the tech area at random times, full of people hoping to catch the vendor.```",
      "confirmedCount": 0
    },
    "T030": {
      "chance": "High",
      "window": "1-3PM",
      "reason": "53% hit rate (18/34 Wednesdays), increasing trend. Typically 1-3PM. Latest (2026-07-01): FCFS with no VQ now, staff push when stock lands! Usually 7AM or 1-3PM once UPS delivers a 2nd shipment.",
      "confirmedCount": 0
    },
    "T100": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (11/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Likely to drop at opening/mid-morning. It does not matter when the product actually goes out, tmrw is the day so expect a long line prior, by 7-8AM... HUGE STOCK STORE!!!",
      "confirmedCount": 0
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (33/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Hit today but you can peep tomorrow for random small batches! Realistically, their next drop will be Thursday and/or Friday.",
      "confirmedCount": 0
    },
    "T098": {
      "chance": "High",
      "window": "Opening",
      "reason": "74% hit rate (25/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Expect a line here at opening. This store usually hits on Wednesday by 10:30AM. A line is formed every Weds by around opening! Staff will usually announce a sell time.",
      "confirmedCount": 0
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "79% hit rate (27/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): OPENING VQ WILL GO DOWN. Expect a deep line before the doors even open! Hits every M/W/F! Had 15 in line around opening last week.",
      "confirmedCount": 0
    },
    "T107": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (23/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-01): Such a big Mond/Weds/Fri hitter. We've seen this store sell towards the afternoon after lines disperse, BUT TMRW, A LINE WILL FORM IN THE MORNING. EASY H...",
      "confirmedCount": 1
    },
    "T102": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "9% hit rate (3/34 Wednesdays), steady trend. 1 confirmed actual hit reported. Typically 9-11AM. Latest (2025-10-22): Possible drops here. Prefers late morning 9-11AM, but also has a shot at 2-4PM.",
      "confirmedCount": 1
    },
    "T119": {
      "chance": "High",
      "window": "9-10AM",
      "reason": "38% hit rate (13/34 Wednesdays), increasing trend. Typically 9-10AM. Latest (2026-07-01): Claims they're doing random but it should still be tomorrow so expect a line to form by 9-10AM. Usually sells by 1PM. Pretty consistent Weds hitter!",
      "confirmedCount": 0
    },
    "T110": {
      "chance": "Medium",
      "window": "10-11:30AM",
      "reason": "32% hit rate (11/34 Wednesdays), decreasing trend. Typically 10-11:30AM. Latest (2026-02-25): Usually will sell Thursday here so expecting it then",
      "confirmedCount": 0
    },
    "T055": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Like we posted today, they hit between 10-11 or from 2-4. Check in those 2 timeframes at GS!",
      "confirmedCount": 0
    },
    "T056": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (23/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been holding their stock for Fridays at opening. They pass #'d tix 30 mins-1 hour before opening.",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "85% hit rate (29/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-07-01): This and Gardena sell on similar timeframes. GS checks between 11-1 and 4-6.",
      "confirmedCount": 0
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "91% hit rate (31/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): CHECK 7AM OPENING. Has not sold this week so realistically, they might be holding until Friday.",
      "confirmedCount": 0
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "91% hit rate (31/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-07-01): Midweek remains their best timeframe. Most movement happens around opening, or late afternoon to night time.",
      "confirmedCount": 0
    },
    "T039": {
      "chance": "High",
      "window": "12-2PM",
      "reason": "79% hit rate (27/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically 12-2PM. Latest (2026-07-01): Friday motherloads have been consistent here! Thurs is usually the 2nd most consistent day, between 12-2PM. Feel free to checl in that range tmrw.",
      "confirmedCount": 1
    },
    "T034": {
      "chance": "Medium",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), steady trend. Latest (2026-03-11): Check in in case of any light leftovers !",
      "confirmedCount": 0
    },
    "T051": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "44% hit rate (15/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Usually hits on the same day as Cerritos/South St, shortly after. If South sells, ppl will immediately rush over here to linger, expecting a drop after.",
      "confirmedCount": 0
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Similar story to Pomona. Traditionally Thursday but recent employee pushes make it worth attention! People will start lining up tmrw since it hasn't hit these last few days.",
      "confirmedCount": 0
    },
    "T012": {
      "chance": "Medium",
      "window": "",
      "reason": "82% hit rate (28/34 Wednesdays), decreasing trend. Latest (2026-05-27): Vendor should land tomorrow or Thursday. Check 9-12 then intensify later because timing has shifted earlier recently",
      "confirmedCount": 0
    },
    "T004": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "26% hit rate (9/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-06-03): Lines will start early early at both as they are PRIMED to hit",
      "confirmedCount": 0
    },
    "T018": {
      "chance": "Low",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-07-01): Could be a sneaky opening push at guest services which they have done on Weds/Thurs before. Check in! If not, due for a vendor stock in the afternoon. Ppl will lurk by 1-2 esp with",
      "confirmedCount": 0
    },
    "T122": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Wednesdays), decreasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-01): Due for their 2nd stock of the week tmrw! You can expect a line to be here by 10AM or so. Hits before or after Eastvale.",
      "confirmedCount": 1
    },
    "T123": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "38% hit rate (13/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-05-20): Opening checks then rotate. Morning matters most here as it\u2019s last one that hasn\u2019t hit```",
      "confirmedCount": 0
    },
    "T112": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Pushes daily, usually at opening! Sometimes, they switch it up, but every morning, there is a line of people checking. Opens at 8AM. Solid option for where to start.",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "High",
      "window": "12PM-2PM",
      "reason": "59% hit rate (20/34 Wednesdays), increasing trend. Typically 12PM-2PM. Latest (2026-07-01): Can check for a guest services push between 12PM-2PM! Been selling more frequently when shipment comes in. People spawn here so if you're not waiting on it, you're likely cooked.",
      "confirmedCount": 0
    },
    "T067": {
      "chance": "High",
      "window": "8-9am",
      "reason": "74% hit rate (25/34 Wednesdays), steady trend. 1 confirmed actual hit reported. Typically 8-9am. Latest (2026-06-24): Expecting inventory tomorrow. Multiple shipments weekly and strongest windows remain 8-9am and 1-4",
      "confirmedCount": 1
    },
    "T084": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Posted in the LA guide, already a line for 7AM opening.",
      "confirmedCount": 0
    },
    "T068": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "88% hit rate (30/34 Wednesdays), decreasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-24): Wednesday opening has been hitting lately but did sell today! Store tends to",
      "confirmedCount": 1
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-06-24): Cochran hit today but can go multiple days so people will",
      "confirmedCount": 0
    },
    "T035": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "12% hit rate (4/34 Wednesdays), increasing trend. Typically 10AM-12PM. Latest (2026-07-01): X factor between 10AM-12PM if they push at guest services.",
      "confirmedCount": 0
    },
    "T114": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "9% hit rate (3/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): SAME AS JERONIMO, THE EXACT SAME. Daily lines at opening here! Due for stock at opening if they received anything today, check in. A line of 10+ forms daily.",
      "confirmedCount": 0
    },
    "T064": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "59% hit rate (20/34 Wednesdays), decreasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-24): Has lately been holding for Fridays here",
      "confirmedCount": 1
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Check at 7AM, this store is still due! It will either hit then or between 10-12 since they have not sold much. If nothing drops tmr, they're prob holding for Fri 7AM.",
      "confirmedCount": 0
    },
    "T037": {
      "chance": "Medium",
      "window": "10-12am",
      "reason": "35% hit rate (12/34 Wednesdays), decreasing trend. Typically 10-12am. Latest (2026-02-25): Did not seem to hit check tomorrow 9-11!",
      "confirmedCount": 0
    },
    "T095": {
      "chance": "Medium",
      "window": "",
      "reason": "41% hit rate (14/34 Wednesdays), decreasing trend. Latest (2026-05-27): VQ in the morning around 9-10:30 usually! Selling usually happens from 10-12 here!",
      "confirmedCount": 0
    },
    "T089": {
      "chance": "Low",
      "window": "",
      "reason": "56% hit rate (19/34 Wednesdays), decreasing trend. Latest (2026-05-27): 12-3 remains strongest but store has been leaning towards Friday drops! Not definitive and store will usually disperse a line if nothing hits",
      "confirmedCount": 0
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "76% hit rate (26/34 Wednesdays), steady trend. Typically Opening. Latest (2026-06-24): Stayed quiet today so expect heavy opening attention plus another sweep from 9:30-12. Store often breaks inventory into multiple waves",
      "confirmedCount": 0
    },
    "T090": {
      "chance": "Medium",
      "window": "7-9am",
      "reason": "56% hit rate (19/34 Wednesdays), decreasing trend. Typically 7-9am. Latest (2026-07-01): Holding for Friday.",
      "confirmedCount": 0
    },
    "T071": {
      "chance": "Medium",
      "window": "1-4PM",
      "reason": "53% hit rate (18/34 Wednesdays), decreasing trend. Typically 1-4PM. Latest (2026-07-01): CHECK AT OPENING IN CASE THEY SWITCH UP. If not, they will drop at their usual time, 1-4PM. You can 100% gurantee yourself that a line will form early. As long as you are early, yo",
      "confirmedCount": 0
    },
    "T091": {
      "chance": "High",
      "window": "",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Latest (2026-07-01): Hits very randomly at guest services, can sprinkle in a check if you are in the area.",
      "confirmedCount": 1
    },
    "T167": {
      "chance": "Medium",
      "window": "",
      "reason": "26% hit rate (9/34 Wednesdays), steady trend. Latest (2026-07-01): Holding for Friday.",
      "confirmedCount": 0
    },
    "T072": {
      "chance": "Low",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Don't really have a timeframe here yet, we're working on it. Adding this store to remind you all that it is now random, and not only on Friday! Check at guest services + in the car",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "High",
      "window": "Opening",
      "reason": "59% hit rate (20/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Store has been holding for Fridays at opening recently. Even pulled OP that got put out on a day before Fri once a surge of ppl came in last week to sell it alongside Poke on Frida",
      "confirmedCount": 0
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "62% hit rate (21/34 Wednesdays), steady trend. Typically Opening. Latest (2026-07-01): Still dry today, likely to hit tom. Expect heavy lines, people send it over after Balboa sometimes. Easy route though!",
      "confirmedCount": 0
    },
    "T097": {
      "chance": "High",
      "window": "12:45-2:00PM",
      "reason": "50% hit rate (17/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically 12:45-2:00PM. Latest (2026-07-01): Usually every Wednesday by 1PM! Expect a line to form here early. If Garden Grove/Harbor or Fullerton/Yorba Linda hits, be on HEAVY ALERT HERE! Usua...",
      "confirmedCount": 1
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Likely Thursday and/or Friday at opening. Might only be Fri this week if they hold for Mega Greninja's release.",
      "confirmedCount": 0
    },
    "T003": {
      "chance": "High",
      "window": "11AM-1PM",
      "reason": "53% hit rate (18/34 Wednesdays), increasing trend. Typically 11AM-1PM. Latest (2026-07-01): Been stocking randomly! Either opening or 11AM-1PM. Gets cleaned out very quickly.",
      "confirmedCount": 0
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Been hitting almost daily! Check at opening for today's items + between 2-4PM for whatever UPS delivers midday at GS",
      "confirmedCount": 0
    },
    "T063": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "50% hit rate (17/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-06-17): Normally I\u2019d say Friday hold, but this store feels ready to throw a curveball to avoid crowds. Check it",
      "confirmedCount": 0
    },
    "T043": {
      "chance": "High",
      "window": "Opening",
      "reason": "62% hit rate (21/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): MORNING VQ OR DROP AGAIN. People are arriving absurdly early store will either drop items FCFS or take a VQ! This is @voodoo's take from last week.",
      "confirmedCount": 0
    },
    "T116": {
      "chance": "High",
      "window": "Opening",
      "reason": "12% hit rate (4/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Same situation as Signal Hill. Last week, Signal hit first, then Seal went after, which is usually how it goes down. Both stores will have lines before opening though since they ar",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Opening check! Did not hit today. Been pushing at opening and throughout the day, between 1-3PM mainly. Lines form outside now.",
      "confirmedCount": 0
    },
    "T137": {
      "chance": "High",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Reminder, they switched to random drop times now. Not as likely for tomorrow at opening, but they should sell at some point unless it hit today. If it hit today, Thurs and Fri will",
      "confirmedCount": 0
    },
    "T029": {
      "chance": "High",
      "window": "9-11AM",
      "reason": "47% hit rate (16/34 Wednesdays), increasing trend. Typically 9-11AM. Latest (2026-07-01): Ask at GS! This store tends to hold in the back and sell selectively. Usually between 9-11AM.",
      "confirmedCount": 0
    },
    "T111": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-01): STILL A WEDNESDAY STORE. If nothing happens at opening, make sure to circle back later around 1-4 because store will sell at least a bit at some point! E...",
      "confirmedCount": 1
    },
    "T093": {
      "chance": "Low",
      "window": "",
      "reason": "18% hit rate (6/34 Wednesdays), decreasing trend. Latest (2026-06-10): Still appears quiet. Focus on 8-9:30 and 1-3 possible tomorrow or Thursday",
      "confirmedCount": 0
    },
    "T113": {
      "chance": "Low",
      "window": "1-4PM",
      "reason": "38% hit rate (13/34 Wednesdays), decreasing trend. Typically 1-4PM. Latest (2026-06-10): Morning first. Focus on Alicia and Jeronimo. If quiet early then watch for a sneaky 1-4PM release still",
      "confirmedCount": 0
    },
    "T066": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-05-06): Random lately. Morning, 12:30-2, or 7-9 all valid. DAILY CHECK STORE as seen today",
      "confirmedCount": 0
    },
    "T059": {
      "chance": "Medium",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): Dropped today but they have been slow recently. Expecting another drop tomorrow. Check 12-1 and 4-5 tomorrow.",
      "confirmedCount": 0
    },
    "T015": {
      "chance": "High",
      "window": "1-3PM",
      "reason": "24% hit rate (8/34 Wednesdays), increasing trend. Typically 1-3PM. Latest (2026-07-01): Daily opening check! Every morning, this store has a line. They usually sell some at 8AM then drop again between 1-3PM. Consistent store, hits almost daily.",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Weds AM continues to be their strongest pattern. Likely received tonight so check at opening, they'll either push at 7AM or from 10-11AM at GS.",
      "confirmedCount": 0
    },
    "T117": {
      "chance": "Medium",
      "window": "",
      "reason": "35% hit rate (12/34 Wednesdays), steady trend. Latest (2026-06-17): Has leaned Friday hard lately but still deserves a quick look tomorrow in case only had portfolios today",
      "confirmedCount": 0
    },
    "T121": {
      "chance": "High",
      "window": "10:30AM-1PM",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically 10:30AM-1PM. Latest (2026-07-01): Guest services will sell when ready and a line will form by opening. Usually, they push stock by 10:30AM-1PM recently. Doesn't matter because the line...",
      "confirmedCount": 1
    },
    "T106": {
      "chance": "Medium",
      "window": "8-9am",
      "reason": "18% hit rate (6/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically 8-9am. Latest (2026-06-24): Hit today as posted!",
      "confirmedCount": 1
    },
    "T120": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), decreasing trend. Typically Opening. Latest (2026-05-27): As warned did sell today so look for another batch Thursday!",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "High",
      "window": "Opening",
      "reason": "35% hit rate (12/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Supposedly still due for stock! Could be a sneaky 7AM check if you're willing to risk it. If not, check throughout the day. Due for a vendor stock this week so people will wait in ",
      "confirmedCount": 0
    },
    "T104": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Latest (2026-06-17): Euclid sold as warned but light stock. Lincoln and Hills can both sell tomorrow earlier or hold for Friday, so check in",
      "confirmedCount": 1
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-01): Giving this store 1 more chance to sell at opening which they have done the last few weeks. Already a line at Walmart Pico Rivera. Ppl will be here to che...",
      "confirmedCount": 1
    },
    "T007": {
      "chance": "High",
      "window": "1-2:30PM",
      "reason": "24% hit rate (8/34 Wednesdays), increasing trend. Typically 1-2:30PM. Latest (2026-07-01): Vendor was spotted here 2 Weds in a row between 1-2:30PM. Last week, they did not sell, and the week before, they trickled stock out 1 SKU at a time. Check in the aisle periodicall",
      "confirmedCount": 0
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "24% hit rate (8/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Opening checks! They sell their previous morning's shipment each day at opening AND they still allow 2 per SKU. Sold the last 2 days!",
      "confirmedCount": 0
    },
    "T032": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Latest (2026-05-13): Two SOLID checks in the morning very often missed pls check in and update and dm me if you do!",
      "confirmedCount": 0
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Sells daily at this point. Been between 1-3 the last week or so but don't count out an earlier drop. Ask guest services, this store hits daily.",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "High",
      "window": "Opening",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Sold today so it seems unlikely that they will sell tomorrow.",
      "confirmedCount": 0
    },
    "T077": {
      "chance": "Medium",
      "window": "11AM-2PM",
      "reason": "15% hit rate (5/34 Wednesdays), increasing trend. Typically 11AM-2PM. Latest (2026-06-24): Best checks remain morning and 11AM-2PM but did sell a bit heavier today",
      "confirmedCount": 0
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Posted in the LA guide; reminder to check at 8AM opening.",
      "confirmedCount": 0
    },
    "T041": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-01): Unless it surprises everyone tonight, check at opening. Last week, they held a large amount of stock and sold Fri afternoon. Be mindful.",
      "confirmedCount": 1
    },
    "T016": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Typically Opening. Latest (2026-05-20): HIGH chance for a morning drop expect heads before opening and line to be here waiting!",
      "confirmedCount": 0
    },
    "T092": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Wednesdays), steady trend. Latest (2026-05-20): Vendor arrived but said no Poke so look if store pushes some out tomorrow morning time! If not may be holding for Friday",
      "confirmedCount": 0
    },
    "T058": {
      "chance": "High",
      "window": "3-5PM",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically 3-5PM. Latest (2026-07-01): It has been consistent for the afternoon time recently! 3-5PM, closer to 4-5 usually if recent trends follow.",
      "confirmedCount": 0
    },
    "T087": {
      "chance": "High",
      "window": "Opening",
      "reason": "9% hit rate (3/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Sold today so it's not as likely that they drop tmrw. Feel free to check at opening which is around when they sold today.",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "High",
      "window": "",
      "reason": "12% hit rate (4/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Latest (2026-06-24): Hit today great updates and catches!",
      "confirmedCount": 1
    },
    "T115": {
      "chance": "High",
      "window": "12-2PM",
      "reason": "9% hit rate (3/34 Wednesdays), increasing trend. Typically 12-2PM. Latest (2026-07-01): As a smaller store, they are prone to selling tmrw at opening. They did not have much today. Sleeper check! If not, rotate from 12-2PM. Same timing as San Clemente.",
      "confirmedCount": 0
    },
    "T017": {
      "chance": "High",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. 1 confirmed actual hit reported. Latest (2026-06-24): Has not hit and on occasion will hit in the morning so keep eyes! May also hold here but be ready",
      "confirmedCount": 1
    },
    "T050": {
      "chance": "High",
      "window": "12-2PM",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically 12-2PM. Latest (2026-07-01): They will drop again this week! The 2nd drop is usually easier than the Mon one to catch, and hits randomly Weds or Thurs between 12-2PM usually.",
      "confirmedCount": 0
    },
    "T159": {
      "chance": "High",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): Weds frequent hitter. People camp out here because they receive solid stock AND hit every Weds!",
      "confirmedCount": 0
    },
    "T148": {
      "chance": "High",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): M/W/F schededule normally, but schedule this week, it seems random. People will start crowding towards the afternoon and there will be a line checking at opening.",
      "confirmedCount": 0
    },
    "T162": {
      "chance": "High",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): High chance for tom, Balboa peeps jump here when they hear the news. hits randomly. Just go after Balboa and wait it out if you need a move.",
      "confirmedCount": 0
    },
    "T146": {
      "chance": "High",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): Vendor day tom or Thu. Randomly drops but trending Fri afternoon for almost 3 weeks now. People have been prioritizing other stores on Weds recently.",
      "confirmedCount": 0
    },
    "T158": {
      "chance": "High",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Ligher drop today! Hits consistently and their regular large drop day is Weds so might be good tom. Check opening and 11-2.",
      "confirmedCount": 0
    },
    "T156": {
      "chance": "High",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): People linger in the toy section to avoid the area where the vendor stocks because they hate lines. Sells randomly but it usually hits Wednesday. Will be lingered!",
      "confirmedCount": 0
    },
    "T161": {
      "chance": "High",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Usually sells when they want at opening. Long lines most mornings. As long as you arrive a bit early, you should be good to grab what they sell, if at all!",
      "confirmedCount": 0
    },
    "T150": {
      "chance": "High",
      "window": "",
      "reason": "6% hit rate (2/34 Wednesdays), increasing trend. Latest (2026-07-01): Hits very randomly, receives light stock, and does 2 per SKU. It is only great for first few people to hit. Tougher catch!",
      "confirmedCount": 0
    },
    "T054": {
      "chance": "Medium",
      "window": "7-9:30AM",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically 7-9:30AM. Latest (2026-07-01): Been selling at 7AM recently! Sold at opening today! Double back tmrw between 7-9:30AM.",
      "confirmedCount": 0
    },
    "T060": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Only hit with a small amount of OP today. Check between opening and 10AM, UPS delivers in the morning.",
      "confirmedCount": 0
    },
    "T019": {
      "chance": "Medium",
      "window": "8-11AM",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically 8-11AM. Latest (2026-07-01): Sleeper store that sells between 8-11AM almost daily.",
      "confirmedCount": 0
    },
    "T033": {
      "chance": "Medium",
      "window": "12-1PM",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically 12-1PM. Latest (2026-07-01): Sells almost daily at GS by 12-1PM. They will be on everyday's guide. A line forms outside of the store until UPS delivers.",
      "confirmedCount": 0
    },
    "T164": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Latest (2026-07-01): Stocked Monday, likely to stock again Thursday or Friday. Unlikely for tomorrow!```",
      "confirmedCount": 0
    },
    "T166": {
      "chance": "High",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Member informed us they've been pushing DAILY at guest services in the morning, at opening or between 10-1. Usually consistent with Fullerton/Orangethorpe's shipment days!",
      "confirmedCount": 0
    },
    "T101": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically 11AM-1PM. Latest (2026-07-01): Fridays and some Wednesdays here! Usually at opening or around 11AM-1PM. They sell at guest services and it's a total sleeper store!",
      "confirmedCount": 0
    },
    "T096": {
      "chance": "Medium",
      "window": "8-9AM",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically 8-9AM. Latest (2026-07-01): Sleeper for Weds/Thursday. On Fri, they run VQ. On Weds or Thurs, they selectively sell at guest services starting around 8-9AM. Check tomorrow morning! Then, if it hits, be on Cyp",
      "confirmedCount": 0
    },
    "T079": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): Sold last Weds at opening! Usually sells at 7AM so it's a great check tomorrow at opening. Don't count this store out!",
      "confirmedCount": 0
    },
    "T125": {
      "chance": "Medium",
      "window": "2-5PM",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically 2-5PM. Latest (2026-07-01): Seems VERY likely for a Thursday drop! You can still check tomorrow between 2-5PM which is their daily drop time when it DOES end up hitting.",
      "confirmedCount": 0
    },
    "T153": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Wednesdays), increasing trend. Typically Opening. Latest (2026-07-01): The past few weeks, they have been dropping Mon to Wed, so check at opening, as they might still have something tom. People will be here regardless.",
      "confirmedCount": 0
    }
  },
  "thursday": {
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "38% hit rate (13/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-25): MULTIPLE WAVE MACHINE. Opening, 9-11, then 1-3. Keep looping they restock constantly",
      "confirmedCount": 0
    },
    "T039": {
      "chance": "High",
      "window": "11am-1pm",
      "reason": "71% hit rate (24/34 Thursdays), increasing trend. 1 confirmed actual hit reported. Typically 11am-1pm. Latest (2026-07-02): Main focus stays around 10-12. Store MAY hold until Friday but check in and ask as release is not super big!",
      "confirmedCount": 1
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (33/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-06-25): SAME PLAN AS ALWAYS. Start at opening and keep HEAVY eyes from 11-1 because that remains the danger window here.",
      "confirmedCount": 0
    },
    "T024": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "15% hit rate (5/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-04-09): Did not stock up today check tomorrow again opening or more likely 10-12!```",
      "confirmedCount": 0
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "88% hit rate (30/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-07-02): Overdue for a 7am drop so check again and if not expect a HAUL on Friday",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "68% hit rate (23/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Opening is still your best opportunity with backup checks around 10-12 since Gardena stocked but expected for Friday at openjng",
      "confirmedCount": 0
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "44% hit rate (15/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-02-26): Morning VQ should go up at Friday at opening",
      "confirmedCount": 0
    },
    "T043": {
      "chance": "Low",
      "window": "9-11am",
      "reason": "44% hit rate (15/34 Thursdays), decreasing trend. Typically 9-11am. Latest (2026-02-05): Hit Tuesday this week so not expected to go again",
      "confirmedCount": 0
    },
    "T049": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "29% hit rate (10/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-05-07): HAS NOT HIT. Morning or 4-6 fallback if not lock in Friday morning.",
      "confirmedCount": 0
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Morning shipment check. Store has been selling closer to when inventory arrives so keep an eye on opening before circling back later. Is overdueee here",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (17/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Again basically daily checks here at 7am! Store drops whatever they receive",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (34/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Opening shipment checks remain mandatory but keep circling back around 11-1",
      "confirmedCount": 0
    },
    "T082": {
      "chance": "Medium",
      "window": "",
      "reason": "26% hit rate (9/34 Thursdays), decreasing trend. Latest (2026-01-15): Drops late week usually Friday but can check 8-10!",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-02-26): 11-2 here usually but would imagine they wait a bit",
      "confirmedCount": 0
    },
    "T083": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (18/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Likely holding for Friday",
      "confirmedCount": 0
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (33/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Likely holding for Friday here!",
      "confirmedCount": 0
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (33/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): MAY be holding for Friday but can check at opening in case!",
      "confirmedCount": 0
    },
    "T064": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "82% hit rate (28/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-05-21): More likely Friday but quick checks especially 5-8 if nothing opening. Morning still possible",
      "confirmedCount": 0
    },
    "T072": {
      "chance": "Medium",
      "window": "6-8PM",
      "reason": "29% hit rate (10/34 Thursdays), decreasing trend. Typically 6-8PM. Latest (2026-02-26): May wait until Friday morning here or weekend as is the usual but like Woodland shipments are up so check in",
      "confirmedCount": 0
    },
    "T086": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-02-26): Sherwood",
      "confirmedCount": 0
    },
    "T156": {
      "chance": "Medium",
      "window": "8-11am",
      "reason": "6% hit rate (2/34 Thursdays), steady trend. Typically 8-11am. Latest (2025-10-23): Madera/Cochean - Checks  from 8-11am.",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "44% hit rate (15/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Still feels like heavier inventory may be waiting for Friday but opening and 11-1 remain worthwhile especially at Summit!",
      "confirmedCount": 0
    },
    "T121": {
      "chance": "Medium",
      "window": "2-4pm",
      "reason": "53% hit rate (18/34 Thursdays), decreasing trend. Typically 2-4pm. Latest (2026-07-02): Store has been all over the place so expect heads again to be waiting here until",
      "confirmedCount": 0
    },
    "T122": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (11/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-05-14): DID NOT hit today! Be ready for round 2 tomorrow of a line forming!",
      "confirmedCount": 0
    },
    "T138": {
      "chance": "Low",
      "window": "8-9:30am",
      "reason": "44% hit rate (15/34 Thursdays), decreasing trend. Typically 8-9:30am. Latest (2026-02-26): 8-10 be ready! if it doesn\u2019t hit check 5-7 but should be morning time or Friday store is random all week",
      "confirmedCount": 0
    },
    "T145": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Typically 9-11AM. Latest (2025-11-13): Has dropped previously 9-11AM - check in at guest services!",
      "confirmedCount": 0
    },
    "T044": {
      "chance": "High",
      "window": "7-8AM",
      "reason": "68% hit rate (23/34 Thursdays), increasing trend. Typically 7-8AM. Latest (2026-07-02): Thursday remains one of the better patterns here. Get there early as people tend to wait it out here!",
      "confirmedCount": 0
    },
    "T104": {
      "chance": "Medium",
      "window": "",
      "reason": "9% hit rate (3/34 Thursdays), steady trend. Latest (2026-05-21): Euclid hit morning today as warned. Hills as well. Both were in guide. Anaheim Lincoln as posted last night is typical for Friday but can check in case!",
      "confirmedCount": 0
    },
    "T119": {
      "chance": "High",
      "window": "9-10am",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. Typically 9-10am. Latest (2026-07-02): Staff hinted at more random vendor releases instead of the old schedule. Continue checking in expect people to try and tuck this store a bit so be the update!",
      "confirmedCount": 0
    },
    "T117": {
      "chance": "Low",
      "window": "2-6pm",
      "reason": "71% hit rate (24/34 Thursdays), decreasing trend. Typically 2-6pm. Latest (2026-06-04): Morning and early afternoon remain strongest has not seemed to hit!",
      "confirmedCount": 0
    },
    "T114": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2025-10-09): Same as Jeronimo. Unfortunately, the 2 major MV stores are grimey/selective with who they sell Pokemon product to.",
      "confirmedCount": 0
    },
    "T089": {
      "chance": "Medium",
      "window": "2-6PM",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Typically 2-6PM. Latest (2026-01-29): Did not seem to sell today check in!",
      "confirmedCount": 0
    },
    "T110": {
      "chance": "High",
      "window": "5-6AM",
      "reason": "100% hit rate (34/34 Thursdays), steady trend. Typically 5-6AM. Latest (2026-07-02): Expect another huge allocation. Lottery setup should continue with another large crowd being here right at 8am when line up is allowed to start .",
      "confirmedCount": 0
    },
    "T095": {
      "chance": "Low",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Thursdays), decreasing trend. Typically Opening. Latest (2025-12-11): Check in tomorrow again 10-12 did not hit today! Or opening time too",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "Medium",
      "window": "10-11AM",
      "reason": "35% hit rate (12/34 Thursdays), decreasing trend. Typically 10-11AM. Latest (2026-01-29): Might receive a restock check in 9-11 in case",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "71% hit rate (24/34 Thursdays), decreasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-05-07): Morning check in case but may wait until evening or Friday morning",
      "confirmedCount": 1
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Never a bad stop. Opening remains strong but later releases continue happening consistently.",
      "confirmedCount": 0
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. 2 confirmed actual hits reported. Typically Opening. Latest (2026-07-02): Opening employee push remains one of the safest bets. Continue checking later because store will sell multiple times a day",
      "confirmedCount": 2
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "82% hit rate (28/34 Thursdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-02): Look for a morning drop or vendor! Hit on Monday but store can drop multiple times as we have seen almost weekly! May be limited as they also hold back stock",
      "confirmedCount": 1
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "91% hit rate (31/34 Thursdays), steady trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-02): One of tomorrow's biggest targets if today truly stayed quiet. Thursdays continue fitting this store whether it happens early morning or midday 12-3 pls be on...",
      "confirmedCount": 1
    },
    "T013": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-18): Morning check is solid but pls keep eyes from 12-4 ask at guest services!",
      "confirmedCount": 0
    },
    "T010": {
      "chance": "High",
      "window": "8-10am",
      "reason": "29% hit rate (10/34 Thursdays), increasing trend. 1 confirmed actual hit reported. Typically 8-10am. Latest (2026-07-02): Worth watching did not seem to hit today and store sells CONSTANTLY in small batches multiple days a week",
      "confirmedCount": 1
    },
    "T002": {
      "chance": "High",
      "window": "Opening",
      "reason": "56% hit rate (19/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Likely tomorrow! As I\u2019ve posted store hire multiple times a week by employees at opening and then vendor usually stops by around 12-3 as well",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "Medium",
      "window": "8-11am",
      "reason": "6% hit rate (2/34 Thursdays), steady trend. Typically 8-11am. Latest (2025-10-30): Should stock up next after Cochran! Most likely morning 9-11 check in!",
      "confirmedCount": 0
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Cochran may be moving to Friday\u2019s only! Madera still deserves attention from 10-12 as they seem to be not in the Friday wave yet",
      "confirmedCount": 0
    },
    "T124": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "44% hit rate (15/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-03-12): Seems to have already stocked up this week",
      "confirmedCount": 0
    },
    "T123": {
      "chance": "Medium",
      "window": "",
      "reason": "26% hit rate (9/34 Thursdays), decreasing trend. Latest (2026-03-12): Has not seemed to hit and with IE schedule being wonky check in the morning!",
      "confirmedCount": 0
    },
    "T088": {
      "chance": "High",
      "window": "1-3pm",
      "reason": "38% hit rate (13/34 Thursdays), increasing trend. Typically 1-3pm. Latest (2026-07-02): VQ happened exactly as expected today. Next drop Friday here",
      "confirmedCount": 0
    },
    "T115": {
      "chance": "Low",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2025-10-16): If youre in the area definitely a sleeper store that can drop decent stock. Rotate checks throughout the day as it is random.```",
      "confirmedCount": 0
    },
    "T045": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-04-30): Keep checks in 8-10ish or 2-4 will either sell tomorrow or Friday ```",
      "confirmedCount": 0
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "88% hit rate (30/34 Thursdays), steady trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-02): If it stayed quiet this morning then another opening check is deserved but may be holding for Friday",
      "confirmedCount": 1
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-02): Morning attention first, then another sweep around 1-4. The longer the day goes the more people tend to gather here. can hit late into the night if they d...",
      "confirmedCount": 1
    },
    "T001": {
      "chance": "Medium",
      "window": "",
      "reason": "44% hit rate (15/34 Thursdays), steady trend. Latest (2026-06-18): Two stores here keep an eye out for a morning push at both!",
      "confirmedCount": 0
    },
    "T022": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "71% hit rate (24/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-06-18): Worth a quick opening stop if you're already nearby. Never forget this store has randomly gone late at night before",
      "confirmedCount": 0
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "71% hit rate (24/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Broke away from the usual schedule and sold a bit tonight late but expect more Friday!",
      "confirmedCount": 0
    },
    "T037": {
      "chance": "Medium",
      "window": "",
      "reason": "68% hit rate (23/34 Thursdays), decreasing trend. Latest (2026-05-28): More weekend lately. Quick 8:30-10 or 10-12 checks still worthwhile though as they may have stock held back! Again check 8-9 really",
      "confirmedCount": 0
    },
    "T063": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "71% hit rate (24/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-05-21): Waiting for Friday here",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (17/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-25): Store holds product. Look for an opening push by employees or mid day",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "High",
      "window": "1-3pm",
      "reason": "68% hit rate (23/34 Thursdays), increasing trend. 2 confirmed actual hits reported. Typically 1-3pm. Latest (2026-07-02): Quiet sleeper. Best windows remain 8-9:30 and 1-3 with employee pushes making it possible multiple times a week/day",
      "confirmedCount": 2
    },
    "T018": {
      "chance": "Medium",
      "window": "",
      "reason": "35% hit rate (12/34 Thursdays), decreasing trend. Latest (2026-02-26): Hit yesterday but can check in for employee pushes",
      "confirmedCount": 0
    },
    "T033": {
      "chance": "High",
      "window": "11-2PM",
      "reason": "9% hit rate (3/34 Thursdays), increasing trend. Typically 11-2PM. Latest (2026-07-02): Will receive stock tomorrow and 50/50 whether they sell or hold for Friday so expect heads to be here waiting from 8-11ish until store confirms!",
      "confirmedCount": 0
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "82% hit rate (28/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Opening through early afternoon still looks best. Small chance they sit on inventory until Friday so keep that in mind.",
      "confirmedCount": 0
    },
    "T058": {
      "chance": "High",
      "window": "6-8PM",
      "reason": "76% hit rate (26/34 Thursdays), increasing trend. Typically 6-8PM. Latest (2026-07-02): Keep both stores active. Opening first, another look around 10-12, then later in the day. Broadway can get later shipments",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "32% hit rate (11/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Typcially Fridays in release week but check morning time as they can sell other items!",
      "confirmedCount": 0
    },
    "T046": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Typically Opening. Latest (2025-11-13): Receives Poke now and should be checked/treated accordingly. Check @ opening and between 12-2; usual delivery + drop times here.",
      "confirmedCount": 0
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (16/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Stayed quiet which makes opening tomorrow even more important.",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "Medium",
      "window": "2-4PM",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Typically 2-4PM. Latest (2025-11-13): Vendor has not stocked all week. Has been waiting for Phantasmal to arrive. Will stock tmrw or Fri between 2-4PM.",
      "confirmedCount": 0
    },
    "T079": {
      "chance": "High",
      "window": "Opening",
      "reason": "12% hit rate (4/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Still feels more like a Friday store but has shown it will occasionally leak inventory beforehand so can cbeck!",
      "confirmedCount": 0
    },
    "T087": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-06-04): Expect people there before opening. If it misses early keep rotating all day",
      "confirmedCount": 0
    },
    "T081": {
      "chance": "Medium",
      "window": "",
      "reason": "6% hit rate (2/34 Thursdays), increasing trend. Latest (2026-07-02): May have hit today so check again Friday!",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "High",
      "window": "Opening",
      "reason": "29% hit rate (10/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Opening through 8-10 first then rerun later. They drop as they get shipment!",
      "confirmedCount": 0
    },
    "T166": {
      "chance": "High",
      "window": "Opening",
      "reason": "85% hit rate (29/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Store hits Thursday\u2019s whether or not they take a VQ will depend on employees! Expect heads here at opening 7am and then people to stay until it hits! Usually by 10-11 but sometimes",
      "confirmedCount": 0
    },
    "T032": {
      "chance": "Low",
      "window": "2-5PM",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Typically 2-5PM. Latest (2025-11-13): Just started w/ cards, no PF yet. Check randomly; mainly between 2-5PM.",
      "confirmedCount": 0
    },
    "T091": {
      "chance": "High",
      "window": "6-9PM",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. Typically 6-9PM. Latest (2026-07-02): Morning through mid-afternoon remains strongest. Expected to hit tomorrow hits Tuesdays / Thursday\u2019s usually",
      "confirmedCount": 0
    },
    "T101": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2025-11-13): Smaller store, vendor usually stocks on Fri here.",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "74% hit rate (25/34 Thursdays), steady trend. Typically Opening. Latest (2026-06-25): Did exactly what was posted and sold at opening today.",
      "confirmedCount": 0
    },
    "T055": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-02-26): Hit today at opening be on it as stated typically openings here or 1-3",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "Low",
      "window": "",
      "reason": "41% hit rate (14/34 Thursdays), decreasing trend. Latest (2026-05-28): When it skips Mondays it tends to Hit Thursday\u2019s so BE READY. EXPECT CHAIRS TONIGHT and heads to wait it out! Does",
      "confirmedCount": 0
    },
    "T107": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "68% hit rate (23/34 Thursdays), decreasing trend. Typically Opening. Latest (2026-05-28): Early lines and usually strongest around 11-2. SHOULD FIRE because it seems to have skipped today",
      "confirmedCount": 0
    },
    "T092": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Latest (2026-02-26): Restocked earlier may receive a bit but Friday will be bigger drop",
      "confirmedCount": 0
    },
    "T017": {
      "chance": "High",
      "window": "Opening",
      "reason": "62% hit rate (21/34 Thursdays), steady trend. Typically Opening. Latest (2026-07-02): Hit this week look for a bit more Friday morning",
      "confirmedCount": 0
    },
    "T051": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Latest (2026-01-29): Just restocked a few days ago anything else may be an employee kush",
      "confirmedCount": 0
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "41% hit rate (14/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-25): NEVER A BAD CHECK. Store randomizes releases constantly and opening remains the best place to start, but today again proved later pushes are always possible",
      "confirmedCount": 0
    },
    "T053": {
      "chance": "High",
      "window": "1-4PM",
      "reason": "21% hit rate (7/34 Thursdays), increasing trend. Typically 1-4PM. Latest (2026-07-02): Both deserve attention. Morning isn't bad but Thursday afternoons continue to fit these stores best, especially WeHo from 1-4! Sunset always pushed Friday release days so less pres",
      "confirmedCount": 0
    },
    "T059": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2026-01-22): Should have some TCG by registers tomorrow check morning all the way to 12ish",
      "confirmedCount": 0
    },
    "T066": {
      "chance": "Low",
      "window": "Opening",
      "reason": "38% hit rate (13/34 Thursdays), steady trend. Typically Opening. Latest (2026-06-18): Again another store that may be dropping randomly more and more!",
      "confirmedCount": 0
    },
    "T167": {
      "chance": "High",
      "window": "",
      "reason": "24% hit rate (8/34 Thursdays), increasing trend. Latest (2026-07-02): Store continues saying Friday",
      "confirmedCount": 0
    },
    "T030": {
      "chance": "High",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Watch closely for FCFS items store gets tucked a but receives HEAVY stock so always worth checks! Lines start at 7am opening and stay through",
      "confirmedCount": 0
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "38% hit rate (13/34 Thursdays), steady trend. Typically Opening. Latest (2026-06-18): Did not sell today so unless they sell tonight expect a LINE at opening early early",
      "confirmedCount": 0
    },
    "T041": {
      "chance": "Medium",
      "window": "",
      "reason": "9% hit rate (3/34 Thursdays), increasing trend. Latest (2026-07-02): Has been holding for Fridays a bit and also it\u2019s release week but heads will check regardless morning time!",
      "confirmedCount": 0
    },
    "T137": {
      "chance": "Low",
      "window": "Opening",
      "reason": "9% hit rate (3/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Store claims to be doing random drops but may be holding for Friday this week but worth a check!",
      "confirmedCount": 0
    },
    "T100": {
      "chance": "Medium",
      "window": "",
      "reason": "35% hit rate (12/34 Thursdays), decreasing trend. Latest (2026-05-21): Hit today as it does on Weds!",
      "confirmedCount": 0
    },
    "T106": {
      "chance": "Medium",
      "window": "5-7pm",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Typically 5-7pm. Latest (2026-04-02): Hit today randomly check tomorrow in case it was just leftovers",
      "confirmedCount": 0
    },
    "T099": {
      "chance": "High",
      "window": "",
      "reason": "29% hit rate (10/34 Thursdays), increasing trend. Latest (2026-07-02): Sold yesterday instead of the usual Wednesday pattern two weeks in a row so pls be aware of that!",
      "confirmedCount": 0
    },
    "T012": {
      "chance": "Medium",
      "window": "12-2pm",
      "reason": "29% hit rate (10/34 Thursdays), steady trend. Typically 12-2pm. Latest (2026-07-02): Friday morning as it has been dropping the past weeks",
      "confirmedCount": 0
    },
    "T031": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Opening and shortly after remain your best bet. Does drop on release days with opening or later morning though",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "26% hit rate (9/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Thursday trend continues looking strong. Last week hit but just smaller items. Likely to sell and hold release day items for Friday",
      "confirmedCount": 0
    },
    "T029": {
      "chance": "Medium",
      "window": "",
      "reason": "38% hit rate (13/34 Thursdays), steady trend. Latest (2026-06-25): Tiny section and hidden inventory city. Ask GS directly because product rarely makes it to the shelf right away. Sold OP today",
      "confirmedCount": 0
    },
    "T133": {
      "chance": "Medium",
      "window": "",
      "reason": "18% hit rate (6/34 Thursdays), decreasing trend. Latest (2026-05-07): Both may hold a bit for Friday. Slover sold today earlier in the day. Summit can hit at night like it did lastbweek",
      "confirmedCount": 0
    },
    "T098": {
      "chance": "High",
      "window": "8-10am",
      "reason": "32% hit rate (11/34 Thursdays), increasing trend. Typically 8-10am. Latest (2026-07-02): Timing call landed today and should hit AGAIN on Friday later morning!",
      "confirmedCount": 0
    },
    "T056": {
      "chance": "High",
      "window": "Opening",
      "reason": "38% hit rate (13/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-25): STILL KEEPING THINGS QUIET. Best looks remain 8-10, then another hard sweep around 12-2, then again 5-7 if they decide to wait for traffic to die down",
      "confirmedCount": 0
    },
    "T120": {
      "chance": "High",
      "window": "",
      "reason": "35% hit rate (12/34 Thursdays), increasing trend. Latest (2026-07-02): Hit Monday but continue checking because these stores appear to be a bit more random and can hit multiple times",
      "confirmedCount": 0
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "26% hit rate (9/34 Thursdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-02): Another major focus. Mayyyy end up pushing to Friday but heads will be checking in case!",
      "confirmedCount": 1
    },
    "T116": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "12% hit rate (4/34 Thursdays), steady trend. Typically Opening. Latest (2026-05-28): Likely tomorrow as when it skips Monday\u2019s it tends to",
      "confirmedCount": 0
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "26% hit rate (9/34 Thursdays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-07-02): May have sold a bit late today. Opening and 10-12 remain strongest with additional waves always possible even into the evening",
      "confirmedCount": 1
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "29% hit rate (10/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Inventory is still believed to be sitting. Opening through 8-10 then 1-3.",
      "confirmedCount": 0
    },
    "T004": {
      "chance": "High",
      "window": "8-9:30am",
      "reason": "15% hit rate (5/34 Thursdays), decreasing trend. Typically 8-9:30am. Latest (2026-06-04): STILL WAITING. Expect another morning crowd until this finally unloads. Best windows remain 8-9:30 and later around 3-6",
      "confirmedCount": 0
    },
    "T036": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2026-05-07): HAS NOT BEEN HITTING FRIDAYS. CHECK IN THE MORNING ASK FOR A DROP/VQ",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), steady trend. Latest (2026-05-07): Two stores here, Hills hit last week in afternoon but rotate both in the morning",
      "confirmedCount": 0
    },
    "T035": {
      "chance": "Medium",
      "window": "",
      "reason": "9% hit rate (3/34 Thursdays), steady trend. Latest (2026-06-11): Main window still sits around 8-10. Shipments tend to land then with occasional lighter activity later. If tomorrow misses then Friday should be SLEEPER",
      "confirmedCount": 0
    },
    "T077": {
      "chance": "High",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Back to Friday\u2019s here!",
      "confirmedCount": 0
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "21% hit rate (7/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Hit yesterday opening so can be due! Will either sell again tomorrow morning or Friday! (unless a sneaky Thursday night drop happens but not super likely)",
      "confirmedCount": 0
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "12% hit rate (4/34 Thursdays), increasing trend. Latest (2026-06-25): Was live today and again but off the guide",
      "confirmedCount": 0
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), increasing trend. Typically Opening. Latest (2026-06-25): Sold Blisters today and still could have more items, but the store may also choose to save some for Friday",
      "confirmedCount": 0
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "12% hit rate (4/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Usually Tuesday\u2019s/Thursdays here! Release weeks they tend to drop Friday\u2019s as well but heads will check be there a bit early!",
      "confirmedCount": 0
    },
    "T016": {
      "chance": "Low",
      "window": "Opening",
      "reason": "6% hit rate (2/34 Thursdays), steady trend. Typically Opening. Latest (2026-06-04): Sneaky opening option. Expect people before opening and lingering afterward as it did not hit today!",
      "confirmedCount": 0
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "18% hit rate (6/34 Thursdays), increasing trend. Typically Opening. Latest (2026-07-02): Continues proving it can release throughout the morning or later in the day. Definitely keep this in rotation will sell multiple batches even if they sold today can do a bit more",
      "confirmedCount": 0
    },
    "T050": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), increasing trend. Latest (2026-07-02): Usually hits Thursdays but when it skips the Monday drop. Can check IN CASE as stores have been receiving extra!",
      "confirmedCount": 0
    },
    "T111": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/34 Thursdays), increasing trend. Latest (2026-07-02): Did not seem to hit so expect heads early here for a drop tomorrow !",
      "confirmedCount": 0
    },
    "T159": {
      "chance": "Medium",
      "window": "",
      "reason": "No formal guide prediction, but 1 confirmed actual hit reported on this weekday.",
      "confirmedCount": 1
    }
  },
  "friday": {
    "T063": {
      "chance": "High",
      "window": "4-5am",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically 4-5am. Latest (2026-06-26): Usually a Friday store, claimed drop would be cancelled if people line up before 5am we shall see",
      "confirmedCount": 0
    },
    "T064": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Friday mornings have become the pattern here so opening movement is likely",
      "confirmedCount": 0
    },
    "T077": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Start in the morning but don\u2019t ignore afternoon as usually. Timing here has been random lately",
      "confirmedCount": 0
    },
    "T085": {
      "chance": "High",
      "window": "Opening",
      "reason": "77% hit rate (23/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening drop with heads already posted up",
      "confirmedCount": 0
    },
    "T082": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Friday opening drop and chairs will start tonight",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "20% hit rate (6/30 Fridays), decreasing trend. Typically Opening. Latest (2026-02-27): May drop tomorrow! If not should be either Saturday or Sunday morning",
      "confirmedCount": 0
    },
    "T086": {
      "chance": "High",
      "window": "Opening",
      "reason": "73% hit rate (22/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Another locked Friday opening option here",
      "confirmedCount": 0
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (29/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening seller and should move as it has not seemed to hit",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening first, then run it back 12-2 if the morning misses. This store can move early and still have another wave later",
      "confirmedCount": 0
    },
    "T125": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Hit today instead of tomorrow so look for other options",
      "confirmedCount": 0
    },
    "T128": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Typically Opening. Latest (2025-10-03): Be there BEFORE 8AM. Should sell at opening alongside all 3 other Riverside locations. Wll have ETB!",
      "confirmedCount": 0
    },
    "T126": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), decreasing trend. Typically Opening. Latest (2026-04-10): Friday morning drop every time people pull up early don\u2019t be late",
      "confirmedCount": 0
    },
    "T127": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Neither has really hit this week so expect lines at both!",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): hit today but light pack so CHECK AT OPENING",
      "confirmedCount": 0
    },
    "T138": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (14/30 Fridays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-26): Opening check but timing can also randomly shift here",
      "confirmedCount": 1
    },
    "T122": {
      "chance": "Medium",
      "window": "11-2PM",
      "reason": "13% hit rate (4/30 Fridays), increasing trend. Typically 11-2PM. Latest (2026-06-19): Endes up selling today so look for release day product tomorrow",
      "confirmedCount": 0
    },
    "T130": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "83% hit rate (25/30 Fridays), decreasing trend. Typically Opening. Latest (2026-05-15): Opening drop with big stock",
      "confirmedCount": 0
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening first but if they spin you, run it back 10-1 and again 3-6. Multiple days now they have sold around noon even though today\u2019s shipment was slighy",
      "confirmedCount": 0
    },
    "T022": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "87% hit rate (26/30 Fridays), decreasing trend. Typically Opening. Latest (2026-06-19): Should sell at opening here 7am as well!",
      "confirmedCount": 0
    },
    "T054": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Hit a bit earlier this week and does tend to go quick but can peep at 7am or 9-10",
      "confirmedCount": 0
    },
    "T056": {
      "chance": "Medium",
      "window": "",
      "reason": "7% hit rate (2/30 Fridays), steady trend. Latest (2026-05-08): Did sell today can check in case of a bit more",
      "confirmedCount": 0
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Usually opening here and heads will line up regardless",
      "confirmedCount": 0
    },
    "T028": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "67% hit rate (20/30 Fridays), decreasing trend. Typically Opening. Latest (2026-04-10): Check morning and again 4-7",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "60% hit rate (18/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening check since Fridays usually hit here and has not hit yet!",
      "confirmedCount": 0
    },
    "T036": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): May sell items FCFS at opening or take a VQ line will be here EARLY EARLY",
      "confirmedCount": 0
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening and 9-11. Sold Wednesday here but does receive alot of stock! 7am opening PLS UPDATE",
      "confirmedCount": 0
    },
    "T031": {
      "chance": "High",
      "window": "12-2pm",
      "reason": "40% hit rate (12/30 Fridays), increasing trend. Typically 12-2pm. Latest (2026-06-26): Look for a drop 10-12 or 3-6 and expect lines as it hasn\u2019t had a drop so vendor should stop by```",
      "confirmedCount": 0
    },
    "T030": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Expect line by opening with people waiting 7-8 for possible FCFS. Need more heads here who are UPDATING",
      "confirmedCount": 0
    },
    "T033": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Latest (2025-10-03): Slept on store that needs to be checked in with more. Ask throughout the day at guest services + check the aisle.```",
      "confirmedCount": 0
    },
    "T096": {
      "chance": "High",
      "window": "Opening",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Stay on it from 9-11ish. This store is known for lying and playing games",
      "confirmedCount": 0
    },
    "T090": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Morning VQ or drop. Store has been selling EARLY lately so chairs already out!",
      "confirmedCount": 0
    },
    "T101": {
      "chance": "High",
      "window": "Opening",
      "reason": "57% hit rate (17/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Consistent Friday morning. Warn you every week. They may take a VQ or sell FCFS at opening so BE READY",
      "confirmedCount": 0
    },
    "T118": {
      "chance": "High",
      "window": "2-3PM",
      "reason": "100% hit rate (30/30 Fridays), steady trend. Typically 2-3PM. Latest (2026-06-26): Friday random number draw usually starts at 3PM and can cover 100-200 people.",
      "confirmedCount": 0
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "57% hit rate (17/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Store is holding back stock so check again with random timing morning and later but should sell at least a small batch at opening",
      "confirmedCount": 0
    },
    "T095": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "13% hit rate (4/30 Fridays), steady trend. Typically 9-11AM. Latest (2025-10-24): Mall just stocked so check in here random times",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "Medium",
      "window": "",
      "reason": "13% hit rate (4/30 Fridays), steady trend. Latest (2026-04-10): Check morning time for some items ask them :)",
      "confirmedCount": 0
    },
    "T166": {
      "chance": "Medium",
      "window": "",
      "reason": "10% hit rate (3/30 Fridays), steady trend. Latest (2026-04-17): Skipped today SO CHECK TOMORROW STORE SHOULD CONFIRM IF THEY WILL STOCK OR NOT  ```",
      "confirmedCount": 0
    },
    "T097": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "47% hit rate (14/30 Fridays), decreasing trend. Typically 9-11AM. Latest (2026-04-10): Has not hit usually goes in afternoons for regular shipments keep eyes 1-5!",
      "confirmedCount": 0
    },
    "T044": {
      "chance": "High",
      "window": "7-10am",
      "reason": "87% hit rate (26/30 Fridays), decreasing trend. Typically 7-10am. Latest (2026-06-19): Morning look in case inventory was held back but there are probably stronger targets available.",
      "confirmedCount": 0
    },
    "T045": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Latest (2025-10-03): Same situation as Bellflower. Expecting the drop tomorrow. Please be checking from 10-12.",
      "confirmedCount": 0
    },
    "T046": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Latest (2025-10-03): Supposedly received a SMALL shipment of Pokemon last week. Start checking in at guest services here, sleeper store!",
      "confirmedCount": 0
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "77% hit rate (23/30 Fridays), decreasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-19): Treat these as one pair. Both feel primed for opening activity or a morning VQ especially Pomona which has not seemed to drop!",
      "confirmedCount": 1
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "87% hit rate (26/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Sleeper opening check since it is has been a bit more quiet",
      "confirmedCount": 0
    },
    "T009": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "63% hit rate (19/30 Fridays), decreasing trend. Typically Opening. Latest (2026-06-26): Has not hit and is seeming like a major option for opening through 10am```",
      "confirmedCount": 0
    },
    "T002": {
      "chance": "High",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening through 11AM. Look for employees to confirm before opening and push product themselves",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "60% hit rate (18/30 Fridays), decreasing trend. Typically Opening. Latest (2026-06-26): Has not stocked Poke so BIG eyes tomorrow! If nothing at open look for vendor 8-10",
      "confirmedCount": 0
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (29/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Both need opening checks. Madera more likely for mid day as usual",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "37% hit rate (11/30 Fridays), decreasing trend. Typically Opening. Latest (2026-02-06): Don\u2019t be surprised to see some items here tomorrow!",
      "confirmedCount": 0
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "97% hit rate (29/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Hit today as warned so may be lighter tomorrow but check in in case",
      "confirmedCount": 0
    },
    "T079": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Has been selling sporadically and not as much Fridays but check opening in case",
      "confirmedCount": 0
    },
    "T066": {
      "chance": "High",
      "window": "Opening",
      "reason": "67% hit rate (20/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Morning tickets expected and store should still have some form of product. Can also sell small amounts later in the day",
      "confirmedCount": 0
    },
    "T069": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Should sell at opening and chairs will go out tonight",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "High",
      "window": "Opening",
      "reason": "73% hit rate (22/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening is expected and locals will be all over it as it seemed quiet",
      "confirmedCount": 0
    },
    "T098": {
      "chance": "High",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Look for line by opening and ask about drop/shipment store tends to confirm here a bit earlier if they will sell```",
      "confirmedCount": 0
    },
    "T110": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "57% hit rate (17/30 Fridays), decreasing trend. Typically Opening. Latest (2026-05-15): Moved today\u2019s drop to tomorrow. Expect heads early and treat it like a real morning priority and again no lining up before 6am",
      "confirmedCount": 0
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "67% hit rate (20/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Morning VQ at opening and long lines will be here",
      "confirmedCount": 0
    },
    "T089": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Friday drops seem to be sticking. Usually from 8-11 here. Last week only sold OP but expect them to sell everything they receive tomorrow",
      "confirmedCount": 0
    },
    "T107": {
      "chance": "High",
      "window": "",
      "reason": "30% hit rate (9/30 Fridays), increasing trend. Latest (2026-06-26): Lines usually strongest around 11-2. SHOULD GO and if nothing people will wait it out a bit",
      "confirmedCount": 0
    },
    "T111": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Opening check again in case as today\u2019s drop was pushed back from Weds so may end up having a bit more. May also receive around 12-4 if nothing else we\u2019ll",
      "confirmedCount": 0
    },
    "T115": {
      "chance": "High",
      "window": "Opening",
      "reason": "83% hit rate (25/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Solid opening option and good rotation through the day if it doesn\u2019t go early",
      "confirmedCount": 0
    },
    "T010": {
      "chance": "High",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-26): Look for opening drop. Always sells batches",
      "confirmedCount": 1
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "60% hit rate (18/30 Fridays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-26): PRIORITY opening check again. Store should sell",
      "confirmedCount": 1
    },
    "T013": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "23% hit rate (7/30 Fridays), decreasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-04-03): 75/25 they sell something at opening here!",
      "confirmedCount": 1
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "23% hit rate (7/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Store sold yesterday but likely to have some items tomorrow but will sell sporadically",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Constant store. If opening misses, 11-2 becomes the next real window",
      "confirmedCount": 0
    },
    "T133": {
      "chance": "High",
      "window": "Opening",
      "reason": "43% hit rate (13/30 Fridays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-26): Opening is a must. Store holds product so timing is on them but it should be tomorrow as only OP today",
      "confirmedCount": 1
    },
    "T053": {
      "chance": "High",
      "window": "Opening",
      "reason": "93% hit rate (28/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): Both should move opening or shortly after. Weho receives solid amounts and sold light today. Sunset will have a solid line prior to opening",
      "confirmedCount": 0
    },
    "T012": {
      "chance": "High",
      "window": "Opening",
      "reason": "37% hit rate (11/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening employee push should go. Stock should be here and chairs already here",
      "confirmedCount": 0
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "87% hit rate (26/30 Fridays), steady trend. Typically Opening. Latest (2026-06-26): 7AM opening is a solid option as they should receive more! If nothing then check later in the day will have more product before the weekend is over",
      "confirmedCount": 0
    },
    "T001": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "43% hit rate (13/30 Fridays), steady trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-19): Opening through 11 remains the key stretch. Watch for employee-driven releases.",
      "confirmedCount": 1
    },
    "T037": {
      "chance": "High",
      "window": "Opening",
      "reason": "77% hit rate (23/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Has moved off Sundays so check tomorrow opening through 9:30!",
      "confirmedCount": 0
    },
    "T058": {
      "chance": "High",
      "window": "Opening",
      "reason": "80% hit rate (24/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening then 10-12 fallback. Don\u2019t let them spin you because this store holds and sells whenever they choose and can also sell late",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (16/30 Fridays), increasing trend. 1 confirmed actual hit reported. Typically Opening. Latest (2026-06-26): Morning peep for employee pushed product. Has hit multiple days already though",
      "confirmedCount": 1
    },
    "T071": {
      "chance": "High",
      "window": "Opening",
      "reason": "63% hit rate (19/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Both have sold this week. They both also hold back product but not as locked as others",
      "confirmedCount": 0
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "43% hit rate (13/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Sold a bigger amount this week. Heads will check in case and could sell other items",
      "confirmedCount": 0
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "20% hit rate (6/30 Fridays), decreasing trend. Typically Opening. Latest (2026-04-10): Didn\u2019t drop tends to hit evenings so don\u2019t ignore later but obviously morning is a great check 8-10",
      "confirmedCount": 0
    },
    "T083": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (16/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Morning 8-10 check but did sell a bit this week as posted. Store tends to hold back items either way```",
      "confirmedCount": 0
    },
    "T055": {
      "chance": "High",
      "window": "Opening",
      "reason": "43% hit rate (13/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Sleeper opening option here at 7AM as store has been putting small amounts of product out this week",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "Medium",
      "window": "",
      "reason": "20% hit rate (6/30 Fridays), steady trend. Latest (2026-06-12): Last week sold on Friday around 9-11 so please keep eyes here!",
      "confirmedCount": 0
    },
    "T100": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), steady trend. Typically Opening. Latest (2026-06-19): Should do release day items at opening!",
      "confirmedCount": 0
    },
    "T109": {
      "chance": "High",
      "window": "Opening",
      "reason": "40% hit rate (12/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Fridays are back here so BE READY AT OPENING. Chairs ahould already be out",
      "confirmedCount": 0
    },
    "T059": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Usually 9-11 and not right at opening. Don\u2019t make this an opening priority unless nearby```",
      "confirmedCount": 0
    },
    "T029": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (16/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Two stores here and may be either opening or afternoon! Heads will check regardless at both",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "53% hit rate (16/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening check and ASK GS. Should have stock and opens at 7AM. If they spin you go back shortly after. Store tends to sell Weds + Fridays",
      "confirmedCount": 0
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Big store and opening priority. They almost always find a way to sell at least something here",
      "confirmedCount": 0
    },
    "T072": {
      "chance": "High",
      "window": "Opening",
      "reason": "50% hit rate (15/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Friday opening store as well. Skipped last week so heads will be on it but chance it skips again",
      "confirmedCount": 0
    },
    "T034": {
      "chance": "High",
      "window": "Opening",
      "reason": "47% hit rate (14/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Friday opening VQ usually or may do FCFS so be ready for either line will be here in early",
      "confirmedCount": 0
    },
    "T117": {
      "chance": "High",
      "window": "",
      "reason": "17% hit rate (5/30 Fridays), increasing trend. Latest (2026-06-19): Morning through 11 remains strongest with another possible window around 2-4.",
      "confirmedCount": 0
    },
    "T017": {
      "chance": "High",
      "window": "Opening",
      "reason": "37% hit rate (11/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-19): Opening employee push possible. If not then focus again around 12-4 for vendor timing.",
      "confirmedCount": 0
    },
    "T018": {
      "chance": "High",
      "window": "",
      "reason": "10% hit rate (3/30 Fridays), steady trend. Latest (2026-05-08): Employees have been holding some stuff back so be ready in case",
      "confirmedCount": 0
    },
    "T121": {
      "chance": "Medium",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. 1 confirmed actual hit reported. Latest (2026-03-06): Update posted below check in with them tomorrow!```",
      "confirmedCount": 1
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "40% hit rate (12/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Fri-Sun type store. Opening is worth it but if nothing happens, 4-8 or the weekend becomes stronger",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "High",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Did not seem to hit today so be ready tomorrow morning or from 1-4 but did hit Tuesday so less priority",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "33% hit rate (10/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Sold a bit today so may skip tomorrow ```",
      "confirmedCount": 0
    },
    "T026": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Typically Opening. Latest (2026-04-10): Has not hit check both TCG wall and GS opening and 8-10ish",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Typically Opening. Latest (2026-04-10): Check in with both at opening could be holding a bit ```",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "High",
      "window": "Opening",
      "reason": "30% hit rate (9/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening drop possible if it stayed quiet today",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "10% hit rate (3/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Basically a lock to check every day at opening here!",
      "confirmedCount": 0
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "7% hit rate (2/30 Fridays), steady trend. Typically Opening. Latest (2026-06-05): The other pair of stores to be ready for by opening heavy heads will be here!",
      "confirmedCount": 0
    },
    "T060": {
      "chance": "High",
      "window": "Opening",
      "reason": "23% hit rate (7/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Usually Fridays here. If not right at opening then 9-11",
      "confirmedCount": 0
    },
    "T057": {
      "chance": "High",
      "window": "",
      "reason": "3% hit rate (1/30 Fridays), steady trend. Latest (2026-05-08): Quietly holding back stock lately. Keep checking even later at night never a bad check",
      "confirmedCount": 0
    },
    "T104": {
      "chance": "High",
      "window": "Opening",
      "reason": "23% hit rate (7/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Lighter chances for tomorrow but check in! May be small products",
      "confirmedCount": 0
    },
    "T032": {
      "chance": "High",
      "window": "Opening",
      "reason": "20% hit rate (6/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Look for opening drop. Will be limited but likely!",
      "confirmedCount": 0
    },
    "T141": {
      "chance": "High",
      "window": "Opening",
      "reason": "17% hit rate (5/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening drop is likely and chairs will go down early",
      "confirmedCount": 0
    },
    "T139": {
      "chance": "High",
      "window": "Opening",
      "reason": "17% hit rate (5/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Opening expected unless they sneak it out tonight since it did not hit today",
      "confirmedCount": 0
    },
    "T108": {
      "chance": "High",
      "window": "Opening",
      "reason": "17% hit rate (5/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Can check for small items but may hold until Monday as usual here",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "High",
      "window": "Opening",
      "reason": "17% hit rate (5/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Look for opening/morning drop but like other store may be lighter stock as well",
      "confirmedCount": 0
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "13% hit rate (4/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): As always look for shipment 9-11 but check opening for anything held back",
      "confirmedCount": 0
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "13% hit rate (4/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Did not end up selling today. BE READY AT OPENING",
      "confirmedCount": 0
    },
    "T039": {
      "chance": "High",
      "window": "Opening",
      "reason": "13% hit rate (4/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Also did not end up selling today so be ready for opening checks! Wait it out a bit if nothing",
      "confirmedCount": 0
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "13% hit rate (4/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-26): Look for an opening drop but may be limited as store is a bit smaller",
      "confirmedCount": 0
    },
    "T106": {
      "chance": "High",
      "window": "",
      "reason": "7% hit rate (2/30 Fridays), increasing trend. Latest (2026-06-26): Look for a morning drop here people tend to stay quiet but should hit even if limited!",
      "confirmedCount": 0
    },
    "T164": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-19): Sleeper opening option here 8am!",
      "confirmedCount": 0
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "3% hit rate (1/30 Fridays), increasing trend. Typically Opening. Latest (2026-06-19): Should sell at opening here be ready!",
      "confirmedCount": 0
    },
    "T146": {
      "chance": "Medium",
      "window": "",
      "reason": "No formal guide prediction, but 1 confirmed actual hit reported on this weekday.",
      "confirmedCount": 1
    }
  }
};
