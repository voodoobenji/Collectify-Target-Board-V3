import type { Chance } from "./types";

export interface SeedEntry {
  chance: Chance;
  window: string;
  reason: string;
  confirmedCount: number;
}

export const SEED_TEMPLATES: Record<string, Record<string, SeedEntry>> = {
  "monday": {
    "T001": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Usually follows Alhambra once activity starts. Keep it in your rotation because one of these two stores normally gets moving first.",
      "confirmedCount": 1
    },
    "T002": {
      "chance": "High",
      "window": "6AM-7AM",
      "reason": "HEADS LINE UP DAILY. Be here 6-7am and employees will confirm if they’ll push stock out",
      "confirmedCount": 2
    },
    "T003": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening continues to be king. Keep looping back because this store also sells multiple rounds",
      "confirmedCount": 0
    },
    "T004": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Had shifted back toward Mondays. People will be here before opening and wait it out whether employees push or the vendor arrives first. hit on Tuesday though but people will wait",
      "confirmedCount": 0
    },
    "T005": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Employees continue pushing inventory themselves. Morning remains strongest for an employee push of items",
      "confirmedCount": 0
    },
    "T006": {
      "chance": "Low",
      "window": "1PM-4PM",
      "reason": "Small chance for morning then another run between 1-4. Not usually Tuesdays but schedule is slightly off",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "Medium",
      "window": "8AM-10AM",
      "reason": "Monday continues matching this location perfectly. Whether employees move it or the vendor arrives, look around 8-10 or again from 1-4. employees pushed around 1-2pm",
      "confirmedCount": 2
    },
    "T008": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening remains the move. If they delay don't bail immediately because this location has sold later. Warned and hit at opening",
      "confirmedCount": 0
    },
    "T009": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sneaky option for opening DONT SLEEP. Really depends what route vendor chooses so should either hit or Thursdays!",
      "confirmedCount": 0
    },
    "T010": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Always worth leaving in rotation. Opening remains strongest, but this location loves sitting on inventory before dropping another batch later. They push multiple times a week and most often Tuesdays-Thursdays",
      "confirmedCount": 0
    },
    "T011": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Employee pushes remain the story. Check opening first, then continue circling back because inventory usually comes out in smaller waves.",
      "confirmedCount": 1
    },
    "T012": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, decreasing trend. 1 confirmed recently. Last confirmed: 2026-06-22. Latest guide note (2026-06-22): May be later on in week here",
      "confirmedCount": 1
    },
    "T013": {
      "chance": "Medium",
      "window": "2PM-3PM",
      "reason": "Usually does their first of 2-3 weekly stocks on Tues. It will go down around opening or in the afternoon between 2:30-5:00 PM. People will lurk!",
      "confirmedCount": 2
    },
    "T014": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Worth an opening check again. Store continues flying under the radar and will randomly stock as seen",
      "confirmedCount": 1
    },
    "T015": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the best wave stores around. Opening matters, but random drops throughout the day make every stop worthwhile.",
      "confirmedCount": 3
    },
    "T016": {
      "chance": "Low",
      "window": "Opening",
      "reason": "CHECK at opening heads will be here don’t wait for an update just check!",
      "confirmedCount": 0
    },
    "T017": {
      "chance": "Low",
      "window": "",
      "reason": "Sleeper option for a morning or afternoon drop! Depends on vendor route but if it gets later heads will line up!",
      "confirmedCount": 0
    },
    "T018": {
      "chance": "Low",
      "window": "1PM-4PM",
      "reason": "Afternoon continues fitting this store best. Focus mainly from 1-4 but store hit Friday so less likely",
      "confirmedCount": 0
    },
    "T019": {
      "chance": "High",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, steady trend. 2 confirmed recently. Last confirmed: 2026-06-22.",
      "confirmedCount": 2
    },
    "T020": {
      "chance": "High",
      "window": "10AM-12PM",
      "reason": "One of the easiest stores to leave in rotation all day. Can always sell some small amounts of product even if it hit",
      "confirmedCount": 6
    },
    "T021": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Opening Guest Services check first DONT MISS IT! then work it back into your route around 10-12 and again later if nothijg.",
      "confirmedCount": 0
    },
    "T022": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Worth an opening stop if nearby, but evening may be slightly better!",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Unlikely, but check at 7AM tmrw. The more likely time is between 10-12, when GS has the time to unbox. Smaller store means less employees. They sell on and off when they have time for it.",
      "confirmedCount": 0
    },
    "T024": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Still overdue and continues drawing attention every morning. Opening first then continue checking because shipment should eventually hit.",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Morning remains strongest with another worthwhile run around 10-12 or 1-3 depending when shipment lands",
      "confirmedCount": 0
    },
    "T026": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening remains one of the better plays. Expect another early crowd waiting before doors open.",
      "confirmedCount": 1
    },
    "T027": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Inventory keeps getting trickled out instead of one big release. Opening remains best. May hit Weds here but people will check either way so be ready in case!",
      "confirmedCount": 1
    },
    "T028": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Both sold a bit later. Heads check Century daily at opening and they do tend to hold back stock",
      "confirmedCount": 0
    },
    "T029": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T030": {
      "chance": "High",
      "window": "12PM-2PM",
      "reason": "7AM check! They unboxed and sold what they received but there was no Poke. They're likely to do the same tmr but with shipment in this time! Expect a line.",
      "confirmedCount": 4
    },
    "T031": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Occasionally hits on Mondays, steady trend. Typically Opening. Last confirmed: 2026-04-20. Latest guide note (2026-06-15): Similar setup to Manhattan. Midday and evening remain strongest with 11-1 and 4-7 doing the most damage. Opening can happen but the later windows are usually better",
      "confirmedCount": 0
    },
    "T032": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T033": {
      "chance": "High",
      "window": "8AM-8PM",
      "reason": "Biggest timing change lately. Expect action around 8-8:30 if it goes early. If not, don't write it off because this store can still sell later.",
      "confirmedCount": 2
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Hits Mondays fairly often, decreasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-06-29. Latest guide note (2026-06-29): VQ SHOULD go at opening time",
      "confirmedCount": 1
    },
    "T035": {
      "chance": "Low",
      "window": "10AM-1PM",
      "reason": "Sleeper that is basically 100% for tm or Weds, usually between 10AM-1PM. Sells @GS.",
      "confirmedCount": 0
    },
    "T036": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening VQ remains the expectation. Be there early because people continue committing here.",
      "confirmedCount": 0
    },
    "T037": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has hit on Mondays, but rarely, increasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-06-01. Latest guide note (2026-06-15): Still waiting to drop. Usually opening or 9-11 when it finally happens so stay alert",
      "confirmedCount": 1
    },
    "T038": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Two different stores here. Stores used to hit Mondays but have shifted off. Please check in in case as they both can run VQ’s in case vendors show",
      "confirmedCount": 0
    },
    "T039": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T040": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Has become much more active throughout the week. Monday usually isn't an opening play, but midday into evening deserves attention. Tends to drop shipment when they receive it or hold it for opening the next day.",
      "confirmedCount": 0
    },
    "T041": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Similar setup to Pico. Opening first but don't forget later checks if inventory doesn't appear immediately.",
      "confirmedCount": 0
    },
    "T042": {
      "chance": "High",
      "window": "11AM-1PM",
      "reason": "One of the busiest stores around. Store sells when they receive almost daily. Locals stay quiet and form a line and wait it out",
      "confirmedCount": 2
    },
    "T043": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T044": {
      "chance": "Low",
      "window": "7AM-8AM",
      "reason": "Check 7-8am for employee push but best checks will be 11-2pm! Will be receiving more stock every week so will sell multiple times a week",
      "confirmedCount": 0
    },
    "T045": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Vendor stocked sneakily last Tues night. Check again to see if it happens again!",
      "confirmedCount": 0
    },
    "T046": {
      "chance": "Medium",
      "window": "10AM-12AM",
      "reason": "Will also receive more shipments albeit more randomly! Look for them to stock around 10-12 or 4-7!",
      "confirmedCount": 1
    },
    "T047": {
      "chance": "High",
      "window": "9AM-11AM",
      "reason": "Continues following Seal Beach more often than not. Expect people waiting early with the usual activity falling around 9-11.",
      "confirmedCount": 5
    },
    "T048": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Firestone already moved, putting most attention back on Imperial. Opening remains the best starting point.",
      "confirmedCount": 1
    },
    "T049": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T050": {
      "chance": "High",
      "window": "10AM-12PM",
      "reason": "Still one of 's biggest opening watches. Didn't move earlier in the week and feels ready for either a VQ or FCFS release.",
      "confirmedCount": 2
    },
    "T051": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Two different stores here. Stores used to hit Mondays but have shifted off. Please check in in case as they both can run VQ’s in case vendors show",
      "confirmedCount": 1
    },
    "T164": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T052": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Both stores are OVERDUE and should hit! Focus on Weho a bit more. Best attention remains around 9-11 then again from 1-4.",
      "confirmedCount": 0
    },
    "T053": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Both stores are OVERDUE and should hit! Focus on Weho a bit more. Best attention remains around 9-11 then again from 1-4.",
      "confirmedCount": 0
    },
    "T054": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Store receives a bit more shipment so check in 9-11 here! Will go quick stay on it",
      "confirmedCount": 1
    },
    "T055": {
      "chance": "Low",
      "window": "10AM-12PM",
      "reason": "Can check between 10AM-12PM and between 3PM and 4PM for new stock at guest services. We'll update.",
      "confirmedCount": 0
    },
    "T056": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T057": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Did move some product already but has leftovers confirmed for opening",
      "confirmedCount": 1
    },
    "T058": {
      "chance": "Medium",
      "window": "10AM-12AM",
      "reason": "Opening first then another pass around 10-12 in case they get more shipment",
      "confirmedCount": 1
    },
    "T059": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Been selling frequently between 11AM-1PM at guest services, 1 per SKU. Sleeper check in!",
      "confirmedCount": 1
    },
    "T060": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "DID NOT receive, leaving them in play for tmrw. Smaller stores receive 2 shipments usually and if it doesn't hit on Mon, it almost ALWAYS hits Tues then Fri.",
      "confirmedCount": 0
    },
    "T061": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Keep watching the normal shipment window around 9-11",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Shipment-driven location with a daily crowd even outside of Pokémon. Opening remains strongest, but don't ignore random midday shipments.",
      "confirmedCount": 0
    },
    "T063": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Mondays, steady trend. 1 confirmed recently. Last confirmed: 2026-06-01.",
      "confirmedCount": 1
    },
    "T064": {
      "chance": "High",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, decreasing trend. 1 confirmed recently. Last confirmed: 2026-06-29. Latest guide note (2026-06-29): Check for a restock in the morning ! Also early afternoon here",
      "confirmedCount": 1
    },
    "T065": {
      "chance": "Low",
      "window": "12AM-2PM",
      "reason": "RIP store claimed that they will be shifting to Fridays only",
      "confirmedCount": 0
    },
    "T066": {
      "chance": "High",
      "window": "Opening",
      "reason": "Hits Mondays fairly often, steady trend. 2 confirmed recently. Typically Opening. Last confirmed: 2026-06-29. Latest guide note (2026-06-29): BACH TO RANDOM DROPS. Check are best at opening ,12-2, and 6-8 but realistically lang time as store will be random AND multiple times a day",
      "confirmedCount": 2
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally hits on Mondays, steady trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-06-29. Latest guide note (2026-07-06): Has been holding for Friday’s here",
      "confirmedCount": 1
    },
    "T068": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening is still worthwhile but don't forget the evening window because this location sells when it’s least busy usually",
      "confirmedCount": 0
    },
    "T069": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, decreasing trend. 1 confirmed recently. Last confirmed: 2026-06-01. Latest guide note (2026-06-01): Usually later in the week here!",
      "confirmedCount": 1
    },
    "T070": {
      "chance": "Low",
      "window": "11AM-1PM",
      "reason": "Look for shipments around 11-1 with inventory possibly coming out then or later around 3-5. More likely they hold h til Friday here",
      "confirmedCount": 0
    },
    "T071": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Continue treating this as an afternoon store. Noon through evening remains the best stretch and Tuesdays continue fitting this location well.",
      "confirmedCount": 0
    },
    "T072": {
      "chance": "Low",
      "window": "",
      "reason": "Store has moved to selling more randomly and is worth morning and evening checks!",
      "confirmedCount": 0
    },
    "T073": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "It did not hit so it is in play tmrw. You can check at 7AM but this store usually goes down at opening or 10-12. Sylmar to here (GV) is a route, vice versa.",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "Low",
      "window": "11AM-12AM",
      "reason": "Recently shifted toward midweek drops. Keep an eye on it! 7AM check for a small push, then again between 11-12 and 3-4 for a full stock of the shipment received. SO LIKELY TO HIT TMRW!",
      "confirmedCount": 0
    },
    "T075": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Saving Poke for Fridays at opening now. No more daily drops.",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "High",
      "window": "10AM-12AM",
      "reason": "Most activity still falls around 10-12 with people lingering throughout late morning waiting for shipments.",
      "confirmedCount": 2
    },
    "T077": {
      "chance": "High",
      "window": "Opening",
      "reason": "Has hit on Mondays, but rarely, increasing trend. 3 confirmed recently. Typically Opening. Last confirmed: 2026-06-15. Latest guide note (2026-07-06): Claims to be back to Friday drops!",
      "confirmedCount": 3
    },
    "T078": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening continues looking strongest hits Tuesdays/Fridays should have a PACKA of First Partner and possibly more!",
      "confirmedCount": 0
    },
    "T079": {
      "chance": "Medium",
      "window": "2PM-4PM",
      "reason": "Has become much more random lately. Opening is still worthwhile, although Fridays haven't been as automatic recently.",
      "confirmedCount": 1
    },
    "T080": {
      "chance": "Low",
      "window": "11AM-1PM",
      "reason": "Good secondary stop after Ventura Main. Usually becomes active around 11-1 if inventory reaches the floor.",
      "confirmedCount": 0
    },
    "T081": {
      "chance": "Medium",
      "window": "8AM-10AM",
      "reason": "Vendor timing still points toward 8-10. People usually wait it out here as the morning goes on. confirmed around 11-12.",
      "confirmedCount": 2
    },
    "T082": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T083": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Cam check for Needohs and other items at opening but store did claim to move Poke to Fridays only",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening remains the move.",
      "confirmedCount": 2
    },
    "T085": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T086": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has come up in guides for Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T087": {
      "chance": "Low",
      "window": "",
      "reason": "Expect heads here waiting throughout the morning for vendor!",
      "confirmedCount": 0
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening VQ remains the expectation. Be there before doors open because this location continues drawing one of the bigger Monday crowds. There was some issues last Friday so also be ready in case of a switch to",
      "confirmedCount": 5
    },
    "T089": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening has become much more common lately. Also they sold Friday so may not be much but heads will check morning time regardless",
      "confirmedCount": 2
    },
    "T090": {
      "chance": "Medium",
      "window": "4-6pm",
      "reason": "Hits Mondays fairly often, decreasing trend. Typically 4-6pm. Last confirmed: 2026-05-04. Latest guide note (2026-06-15): Has been leaning hard toward Fridays. Small amounts have leaked out during the week but nothing major",
      "confirmedCount": 0
    },
    "T091": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Garfield has sold it seems. Heavy eyes on CM 17th from 8-10 or a bit later",
      "confirmedCount": 0
    },
    "T092": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Was flirting with Friday only drops so check in case from 8-10 but expect store to either confirm or deny if that’s the plan",
      "confirmedCount": 0
    },
    "T093": {
      "chance": "Medium",
      "window": "8AM-10AM",
      "reason": "Garfield has sold it seems. Heavy eyes on CM 17th from 8-10 or a bit later",
      "confirmedCount": 1
    },
    "T094": {
      "chance": "Medium",
      "window": "10AM-12AM",
      "reason": "Random timing continues hitting this location. Opening is worth checking, then work it back into your route around 10-12 and again from 2-4. Again it is a bit more random",
      "confirmedCount": 2
    },
    "T095": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Morning VQ continues looking most likely. Expect another early line before the doors even open and VQ to go up shortly after. Vendor around 10ish",
      "confirmedCount": 0
    },
    "T096": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-29. Latest guide note (2026-06-29): Check for vendor 12-2 here !",
      "confirmedCount": 1
    },
    "T166": {
      "chance": "Medium",
      "window": "9AM-12AM",
      "reason": "Two different stores here. Both are selling shipment as they receive it. Check opening in case anything held back but best bet is 9-12.",
      "confirmedCount": 2
    },
    "T098": {
      "chance": "High",
      "window": "9AM-11AM",
      "reason": "Hit mid - late morning so expect heads checking in case again!",
      "confirmedCount": 3
    },
    "T099": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening can still pay off for anything held back, but timing remains unpredictable. Tuesdays/Weds and Fridays continue matching this store best.",
      "confirmedCount": 0
    },
    "T165": {
      "chance": "High",
      "window": "10AM-1PM",
      "reason": "One of the stronger OC stores once shipments land. Opening is fine for held-back inventory, but the real window continues being 10-1. This store has no problem selling multiple times a week or even multiple times in one day.",
      "confirmedCount": 2
    },
    "T100": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Vendor Tuesday followed by Wednesday sales continues fitting this store but check in case as they are overdue from Friday",
      "confirmedCount": 0
    },
    "T101": {
      "chance": "Low",
      "window": "1PM-4PM",
      "reason": "Biggest focus should be vendor timing from 1-4. Expect people lingering and waiting throughout the afternoon. The line is likely to start by 12PM or so. People always catch the vendor first. PROB BY 1PM!!",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "Medium",
      "window": "12PM-3PM",
      "reason": "Look for vendor to land around 12:30-3pm! If nothing will either hit Tuesday or hold for Friday",
      "confirmedCount": 2
    },
    "T103": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Did hit at opening so expect a SOLID line here prior to opening to check!",
      "confirmedCount": 0
    },
    "T104": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Check morning time for a push or a bit after opening people will be here!",
      "confirmedCount": 0
    },
    "T106": {
      "chance": "Medium",
      "window": "3PM-4PM",
      "reason": "Afternoon continues fitting this location much better. Expect activity after nearby stores begin selling, vendor hit around 3-4 but they held back Poke",
      "confirmedCount": 1
    },
    "T107": {
      "chance": "Low",
      "window": "9AM-12AM",
      "reason": "Two different stores here. Both are selling shipment as they receive it. Check opening in case anything held back but best bet is 9-12.",
      "confirmedCount": 0
    },
    "T108": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Continues being one of the better Monday stores. People commit here early and usually wait it out until inventory finally comes out.",
      "confirmedCount": 1
    },
    "T109": {
      "chance": "Medium",
      "window": "12AM-3PM",
      "reason": "Mondays have become relevant here again. Keep HEAVY eyes from 12-3 with another strong window around 5-8 because this store has been quietly selling late in the day.",
      "confirmedCount": 1
    },
    "T110": {
      "chance": "Low",
      "window": "8AM-11AM",
      "reason": "Also moving to random drops! Expect morning drops either from 8-11 but check any time for now!",
      "confirmedCount": 0
    },
    "T111": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T112": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Still due for stock, people will line up here to gamble at opening. This happens everyday. Usually hits Tues/Thurs and some Fri!",
      "confirmedCount": 0
    },
    "T113": {
      "chance": "Low",
      "window": "10PM-12PM",
      "reason": "Often slept on, but definitely not forgotten about by locals. Hits by 10-12PM and gets cleaned quickly. Smaller store that receives much less stock than the other 2 Mission Viejo locations.",
      "confirmedCount": 0
    },
    "T114": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Literally the same as Jeronimo but A BIT more consistent for opening time. Expect a line a bit deeper than Jeronimo's at opening tmrw.",
      "confirmedCount": 0
    },
    "T115": {
      "chance": "Low",
      "window": "12PM-3PM",
      "reason": "Usually pushes between 12-3PM at guest services. This is another smaller location that receives quaint batches of stock in lesser frequency than other South OC stores, like San Clemente.",
      "confirmedCount": 0
    },
    "T116": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Still one of Orange County's most dependable Monday stores. hit around 10am.",
      "confirmedCount": 1
    },
    "T117": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T118": {
      "chance": "Medium",
      "window": "3PM-6PM",
      "reason": "Now selling randomly FCFS! Check opening and if nothing then 3-6 are most likely!",
      "confirmedCount": 1
    },
    "T119": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Store claimed they will see when vendor arrives so check in usually 9-11 or 2-4!",
      "confirmedCount": 0
    },
    "T120": {
      "chance": "Low",
      "window": "11AM-1PM",
      "reason": "Possible vendor around 11-1 please keep eyes here store does play games and back door so people try to stay quiet but CHECK",
      "confirmedCount": 0
    },
    "T167": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T121": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has moved away from consistent Monday drops lately. Tuesday still feels stronger, although random activity is always possible. hit Tuesday as well",
      "confirmedCount": 1
    },
    "T122": {
      "chance": "High",
      "window": "11AM-12AM",
      "reason": "Has now strung together multiple active Mondays. No guarantee it continues, but expect another crowd waiting to find out. Vendor hit around 11-12. Line waited throughout most of the morning so be early and ready",
      "confirmedCount": 2
    },
    "T123": {
      "chance": "High",
      "window": "9AM-11AM",
      "reason": "Watch 9-11 first, then another run around 1-4 because people will wait in line hoping it hits here. did not hit on Monday",
      "confirmedCount": 2
    },
    "T124": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Tuesday continues fitting this store better, but keep it on the radar if you're already nearby. Hit Tuesday as well",
      "confirmedCount": 0
    },
    "T125": {
      "chance": "Low",
      "window": "2PM-5PM",
      "reason": "Been hitting Thursdays consistently for 1+ month. Likely drops on Tuesdays as well. Can check at opening but patterns suggest this store's likelihood between 2:30-5:30PM. They receive/sell on the later side.",
      "confirmedCount": 0
    },
    "T126": {
      "chance": "High",
      "window": "11AM-1PM",
      "reason": "Continues finding ways to sell multiple times each week. vendor arrived around noon but check earlier and expect heads lingering until store drops",
      "confirmedCount": 3
    },
    "T127": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T128": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "High",
      "window": "4PM-6PM",
      "reason": "Is now selling as it receives stock! Check morning time and wait until shipment lands to see what pops up for the day!",
      "confirmedCount": 2
    },
    "T130": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Tuesday continues matching this store well. Expect another solid turnout early with some heads already here",
      "confirmedCount": 0
    },
    "T131": {
      "chance": "Low",
      "window": "Opening",
      "reason": "More random now but they should hit once shipment lands tmrw. Ask at guest services. Can pair a check with the other Apple Valley location off of the highway as well!",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening is worthwhile, but both stores continue seeing activity through midday and later afternoon. Expect at least one of them to receive inventory.",
      "confirmedCount": 4
    },
    "T133": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening is worthwhile, but both stores continue seeing activity through midday and later afternoon. Expect at least one of them to receive inventory.",
      "confirmedCount": 0
    },
    "T134": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Looking like! Extremely possible for opening but regardless, it should hit by 11:30AM-1PM. A line will form outside beforehand. DID NOT hit!",
      "confirmedCount": 0
    },
    "T135": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-01.",
      "confirmedCount": 1
    },
    "T136": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T137": {
      "chance": "Low",
      "window": "Opening",
      "reason": "May have done a random push early",
      "confirmedCount": 0
    },
    "T138": {
      "chance": "Medium",
      "window": "1PM-3PM",
      "reason": "Store sold yesterday morning (Satursay). They hold product and push themselves so always good checks here",
      "confirmedCount": 1
    },
    "T139": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening continues looking strongest as shipment came in but Poke was held back!",
      "confirmedCount": 1
    },
    "T140": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, increasing trend. 1 confirmed recently. Last confirmed: 2026-06-08. Latest guide note (2026-06-15): Look for a morning drop and if nothing expect heads to wait around for possible vendor activity around 11-3```",
      "confirmedCount": 1
    },
    "T141": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Pushed out some product Wednesday mid day! Can check in for more but may be light",
      "confirmedCount": 1
    },
    "T142": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Vendor usually reaches this location Monday morning. Best window remains around 9-11.",
      "confirmedCount": 0
    },
    "T143": {
      "chance": "Low",
      "window": "",
      "reason": "Usually hits Tues/Fri or Sat mornings, Sat more than Fri. People will arrive early. Oftentimes sells via aisle here. Vendor stocks, be early!",
      "confirmedCount": 0
    },
    "T144": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T145": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T146": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T147": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-01.",
      "confirmedCount": 1
    },
    "T148": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Mondays before, just not recently.",
      "confirmedCount": 0
    },
    "T149": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T150": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T151": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T152": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T153": {
      "chance": "High",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, steady trend. 3 confirmed recently. Last confirmed: 2026-06-29.",
      "confirmedCount": 3
    },
    "T154": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-08.",
      "confirmedCount": 1
    },
    "T155": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Mondays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-29.",
      "confirmedCount": 1
    },
    "T156": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T157": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T158": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T159": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T160": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T161": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T162": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T163": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T168": {
      "chance": "High",
      "window": "11AM-1PM",
      "reason": "Still pushing randomly, sometimes at guest services, so anytime you are free is a decent time to check here. No consistency, they sell when they feel like it, so don't ever count this store out! Chino/Philadelphia is the consistent hitter.",
      "confirmedCount": 4
    },
    "T169": {
      "chance": "Medium",
      "window": "8AM-11AM",
      "reason": "Philadelphia hit in the mei if. Check from 8-11, then circle back 1-4 if nothing develops. Grand remains random but also hit after Philly!",
      "confirmedCount": 1
    },
    "T170": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally flagged in guides for Mondays, increasing trend. Latest guide note (2026-06-15): Checks morning time for shipment here!",
      "confirmedCount": 0
    },
    "T171": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Mondays, steady trend. 1 confirmed recently. Last confirmed: 2026-06-08.",
      "confirmedCount": 1
    },
    "T172": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T173": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T174": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T175": {
      "chance": "Low",
      "window": "11AM-1PM",
      "reason": "Continues performing multiple times each week. Best windows remain 11-1 and again from 4-7.",
      "confirmedCount": 0
    },
    "T176": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T177": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T178": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T179": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T180": {
      "chance": "High",
      "window": "10AM-1PM",
      "reason": "Heads will check opening in case but strongest time is 10-1",
      "confirmedCount": 2
    },
    "T181": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T182": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T183": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T184": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T185": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T186": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Store mentioned waiting until Friday but sold prior so check 8-10! Ask store they should confirm",
      "confirmedCount": 0
    },
    "T187": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T188": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T189": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T190": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T191": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T192": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T193": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T194": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T195": {
      "chance": "Low",
      "window": "12PM-2PM",
      "reason": "Will either sell or Wednesday afternoon. Usually hits between 12:30-2:00 PM. Line forms outside here. This store gets STOCK!",
      "confirmedCount": 0
    }
  },
  "tuesday": {
    "T001": {
      "chance": "Medium",
      "window": "4PM-6PM",
      "reason": "Vendor stopped here but Pokémon never came out. Look for a possible morning employee push or another small wave if inventory stayed behind.",
      "confirmedCount": 1
    },
    "T002": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the strongest opening plays. Be there early because employees usually confirm whether product is coming out before the doors even open. Store continues holding inventory back and pushing it themselves.",
      "confirmedCount": 2
    },
    "T003": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening continues being the strongest opportunity. This store remains one of the better multi-wave locations in LA.",
      "confirmedCount": 1
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "Vendor never stocked, making one of the better vendor watches. Check opening, then stay through the normal vendor window because they could easily circle back.",
      "confirmedCount": 7
    },
    "T005": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Employee pushes continue making this one of the stronger SGV locations. Opening is the priority, but don't hesitate to check back because multiple waves remain possible.",
      "confirmedCount": 1
    },
    "T006": {
      "chance": "Low",
      "window": "",
      "reason": "Has primarily been Fridays here and sometimes Thursdays. Would expect that pattern to hold but feel free to chefk",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening remains worthwhile. Employee pushes continue making this one a dependable morning stop.",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening remains the move store quickly put out stock late so check for leftovers.",
      "confirmedCount": 2
    },
    "T009": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Last time it hit on a Tuesday was a month ago so not a huge priority but solid check it around",
      "confirmedCount": 1
    },
    "T010": {
      "chance": "High",
      "window": "12AM-2PM",
      "reason": "Opening remains strongest, then work it back into your route around 12-2 or later in the evening. This store loves sitting on inventory before finally releasing it.",
      "confirmedCount": 2
    },
    "T011": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Another strong employee-push location. Opening deserves priority and don't forget another pass through midday if nothing develops early.",
      "confirmedCount": 1
    },
    "T012": {
      "chance": "High",
      "window": "8-10AM",
      "reason": "Occasionally hits on Tuesdays, decreasing trend. 2 confirmed recently. Typically 8-10AM. Last confirmed: 2026-06-16. Latest guide note (2026-06-16): Would imagine it goes a bit later in week",
      "confirmedCount": 2
    },
    "T013": {
      "chance": "High",
      "window": "2:30-5:00PM",
      "reason": "Hits Tuesdays fairly often, decreasing trend. 2 confirmed recently. Typically 2:30-5:00PM. Last confirmed: 2026-06-09. Latest guide note (2026-06-30): Usually does their first of 2-3 weekly stocks on Tues. It will go down around opening or in the afternoon between 2:30-5:00 PM. People will lurk!",
      "confirmedCount": 2
    },
    "T014": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Quiet enough to deserve another opening check. This store continues slipping inventory out without much attention.",
      "confirmedCount": 0
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "Continue checking every opportunity. Opening matters but this store continues rewarding people who stay patient.",
      "confirmedCount": 5
    },
    "T016": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening deserves attention. People will already be checking here so don't wait around for updates before heading over if they don’t hold for Friday",
      "confirmedCount": 1
    },
    "T017": {
      "chance": "Low",
      "window": "",
      "reason": "Sleeper location depending on vendor timing. Not the biggest priority but can check",
      "confirmedCount": 0
    },
    "T018": {
      "chance": "Low",
      "window": "1PM-2PM",
      "reason": "Could be a sneaky opening push at guest services which they have done on Weds/Thurs before. Check in! If not, due for a vendor stock in the afternoon. Ppl will lurk by 1-2 esp with WM Baldwin Park in play.",
      "confirmedCount": 0
    },
    "T019": {
      "chance": "Low",
      "window": "8AM-11AM",
      "reason": "Sleeper store that sells between 8-11AM almost daily.",
      "confirmedCount": 0
    },
    "T020": {
      "chance": "High",
      "window": "9AM-11AM",
      "reason": "Easy store to leave in rotation all day. Even after selling, it continues finding ways to trickle inventory out in smaller batches and did not sell",
      "confirmedCount": 3
    },
    "T021": {
      "chance": "High",
      "window": "10AM-12AM",
      "reason": "Opening Guest Services check remains the priority. If nothing develops, swing back around 10-12",
      "confirmedCount": 2
    },
    "T022": {
      "chance": "Low",
      "window": "3PM-5PM",
      "reason": "Unlikely that they sell tm, they has sold. Check time: 3-5PM!",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Wednesday mornings remain the sweet spot. If nothing happens right at opening check back a bit after",
      "confirmedCount": 1
    },
    "T024": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Still overdue and continues pulling people in every morning. Opening deserves priority with another check later if shipment doesn't arrive immediately.",
      "confirmedCount": 2
    },
    "T025": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Morning continues fitting this location best with another worthwhile sweep around 10-12 or 1-3 depending on when shipment lands.",
      "confirmedCount": 0
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "Didn't sell and immediately becomes one of 's stronger South Bay checks. Be there at opening, then circle back around midday if nothing develops.",
      "confirmedCount": 4
    },
    "T027": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Continues trickling inventory out instead of unloading everything at once. Opening remains strongest with another worthwhile look later.",
      "confirmedCount": 1
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "La Brea is confirmed to be holding inventory back, making it one of the stronger opening checks. Century remains worth checking daily because it has also been staggering releases.",
      "confirmedCount": 2
    },
    "T029": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally hits on Tuesdays, increasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-06-23. Latest guide note (2026-07-07): Both sold a bit later tonight. Heads check Century daily at opening and they do tend to hold back stock",
      "confirmedCount": 1
    },
    "T030": {
      "chance": "Low",
      "window": "8AM-9AM",
      "reason": "Should sell or Friday here! Usually around opening or 8-9ish heads will be here waiting and stay here. Be the update here just check!",
      "confirmedCount": 0
    },
    "T031": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Expect a line by the tech area at random times, full of people hoping to catch the vendor.",
      "confirmedCount": 0
    },
    "T032": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T033": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Timing has shifted toward earlier releases lately. Did hit but can chef",
      "confirmedCount": 3
    },
    "T034": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Been selling at opening, has sold at opening for example. They have a line every morning due to the recent consistency of drop time. Feel free to stop by tmrw!",
      "confirmedCount": 0
    },
    "T035": {
      "chance": "Low",
      "window": "10AM-12PM",
      "reason": "X factor between 10AM-12PM if they push at guest services.",
      "confirmedCount": 0
    },
    "T036": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening VQ continues looking most likely. Expect another committed group before doors open.",
      "confirmedCount": 2
    },
    "T037": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T038": {
      "chance": "Medium",
      "window": "8AM-9AM",
      "reason": "Usually Thursday depending on vendor timing. Focus around 8-9:30 first, then another pass from 1-3 in case it shifts similar to HP",
      "confirmedCount": 1
    },
    "T039": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Thursday continues being the best day but still deserves attention. Best windows remain 11-1 and 4-6 in case they shift early",
      "confirmedCount": 1
    },
    "T040": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening remains the highest percentage play. If nothing develops don't ignore midday because activity here continues increasing.",
      "confirmedCount": 1
    },
    "T041": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Similar setup to Pico Rivera. Opening first, then don't forget another look later if inventory doesn't appear immediately.",
      "confirmedCount": 0
    },
    "T042": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Continues behaving like one of the busiest stores around. Opening and 10-12 remain the strongest windows while people wait for shipment.",
      "confirmedCount": 0
    },
    "T043": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening VQ or FCFS remains the expectation. People will continue showing up extremely early so don't arrive late.",
      "confirmedCount": 0
    },
    "T044": {
      "chance": "Medium",
      "window": "7AM-8AM",
      "reason": "Check between 7-8AM, then work it back into your route around 10-11. Expect people waiting regardless heavy eyes!",
      "confirmedCount": 2
    },
    "T045": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Still waiting on a bigger drop. Best windows remain 10-12 and 4-6. If misses, Friday is most likely.",
      "confirmedCount": 0
    },
    "T046": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Similar to other smaller locations, they have started to receive ALMOST every other day. Check at GS + check the card display between 9-11AM and 1-3PM.",
      "confirmedCount": 2
    },
    "T047": {
      "chance": "Low",
      "window": "3AM-6AM",
      "reason": "Supposedly still due! It also hit last Weds! Expect people to set up chairs by 3-6AM here. If it hits like, stock will be juicy since it's around a week of shipments accumulated into 1 drop.",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "High",
      "window": "Opening",
      "reason": "Firestone hit so heavy eyes on Imperial location! Checks start at opening. hit at 2pm",
      "confirmedCount": 2
    },
    "T049": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Firestone hit so heavy eyes on Imperial location! Checks start at opening. hit at 2pm",
      "confirmedCount": 0
    },
    "T050": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Didn't move Monday which immediately puts it back on the radar. Watch carefully for an opening VQ or early release.",
      "confirmedCount": 0
    },
    "T051": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Usually hits on the same day as Cerritos/South St, shortly after. If South sells, ppl will immediately rush over here to linger, expecting a drop after.",
      "confirmedCount": 0
    },
    "T164": {
      "chance": "Medium",
      "window": "1PM-4PM",
      "reason": "Look for a quiet stock morning or late morning here! Also from 1-4",
      "confirmedCount": 1
    },
    "T052": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Both remain overdue. WeHo gets the slight edge, but continue checking both around 9-11 and again from 1-4.",
      "confirmedCount": 1
    },
    "T053": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Both remain overdue. WeHo gets the slight edge, but continue checking both around 9-11 and again from 1-4.",
      "confirmedCount": 3
    },
    "T054": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "More shipment should be landing. Best window remains around 9-11 and inventory usually disappears quickly once it comes out.",
      "confirmedCount": 1
    },
    "T055": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Expecting a solid First Partner release either opening or afternoon be on it! Sleeper spot here",
      "confirmedCount": 1
    },
    "T056": {
      "chance": "Low",
      "window": "",
      "reason": "Chance they are holding for Friday but stock is here so you’ll have to catch it! They’re a bit sneaky with stock",
      "confirmedCount": 0
    },
    "T057": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Received another shipment but never has sold. One of the better sleeper checks. Be there at opening, then keep it in rotation",
      "confirmedCount": 1
    },
    "T058": {
      "chance": "High",
      "window": "10AM-12AM",
      "reason": "Opening first, then another pass around 10-12 if additional shipment lands.",
      "confirmedCount": 2
    },
    "T059": {
      "chance": "High",
      "window": "4PM-6PM",
      "reason": "Both stores sold product. Small chance they receive more if not check Thursday/Friday really",
      "confirmedCount": 2
    },
    "T060": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Only hit with a small amount of OP. Check between opening and 10AM, UPS delivers in the morning.",
      "confirmedCount": 0
    },
    "T061": {
      "chance": "High",
      "window": "9AM-11AM",
      "reason": "Continue watching the usual shipment window around 9-11. Opening is still worthwhile in case they held inventory overnight.",
      "confirmedCount": 5
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Morning shipment checks remain mandatory. Store still hasn't really gotten going so expect another heavy opening crowd.",
      "confirmedCount": 4
    },
    "T063": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has sold and is back to doing random drops don’t let the store spin. Will likely hold on until Friday now but moving forward",
      "confirmedCount": 1
    },
    "T064": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Has leaned more toward holding inventory for Fridays lately. is still worth checking as people go for Needoh and more",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "Low",
      "window": "12AM-2PM",
      "reason": "As posted yesterday may be moving to Fridays only as well",
      "confirmedCount": 0
    },
    "T066": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Occasionally hits on Tuesdays, decreasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-06-23. Latest guide note (2026-06-23): Store is back to random drops so you’ll have to be on it!",
      "confirmedCount": 1
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "Hits Tuesdays fairly often, decreasing trend. 4 confirmed recently. Typically Opening. Last confirmed: 2026-06-23. Latest guide note (2026-06-23): Opening, 9-11 and 2-4 remain the key windows. Could still be sitting on additional stock.",
      "confirmedCount": 4
    },
    "T068": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening remains worthwhile, but don't forget the evening because this location continues selling when traffic dies down.",
      "confirmedCount": 1
    },
    "T069": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Received inventory. Chance they sell opening but if not expect it Friday as well",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "Low",
      "window": "",
      "reason": "Morning and midday continue fitting this store best. Employee pushes remain very possible throughout the day as stayed quiet",
      "confirmedCount": 0
    },
    "T071": {
      "chance": "Medium",
      "window": "1PM-4PM",
      "reason": "CHECK AT OPENING IN CASE THEY SWITCH UP. If not, they will drop at their usual time, 1-4PM. You can 100% gurantee yourself that a line will form early. As long as you are early, you will be good. You can also ask staff nicely if anything came in. They usually announce the status of everything to the line once it grows to enough ppl.",
      "confirmedCount": 1
    },
    "T072": {
      "chance": "Low",
      "window": "",
      "reason": "Don't really have a timeframe here yet, we're working on it. Adding this store to remind you all that it is now random, and not only on Friday! Check at guest services + in the card case.",
      "confirmedCount": 0
    },
    "T073": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Two stores both claimed to be moving to Fridays only feel free to check in and confirmed",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Two stores both claimed to be moving to Fridays only feel free to check in and confirmed",
      "confirmedCount": 0
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "Hits Tuesdays fairly often, decreasing trend. 4 confirmed recently. Typically Opening. Last confirmed: 2026-06-23. Latest guide note (2026-06-30): Saving Poke for Fridays at opening now. No more daily drops.",
      "confirmedCount": 4
    },
    "T076": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Late morning through midday continues fitting this location much better than opening.",
      "confirmedCount": 1
    },
    "T077": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Tuesdays, increasing trend. 4 confirmed recently. Last confirmed: 2026-06-23. Latest guide note (2026-06-23): Morning first then hammer the 11-2 window. One of the steadier stores lately.",
      "confirmedCount": 4
    },
    "T078": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Tuesday and Friday continue matching this location. Expect another strong opening with plenty of First Partner inventory if shipment lands.",
      "confirmedCount": 1
    },
    "T079": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sold last Weds at opening! Usually sells at 7AM so it's a great check at opening. Don't count this store out!",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "Low",
      "window": "10AM-12PM",
      "reason": "Been selling when shipment comes in, so it's actually a pretty decent check. Usually 10AM-12PM or during the night time.",
      "confirmedCount": 0
    },
    "T081": {
      "chance": "High",
      "window": "Opening",
      "reason": "Has hit on Tuesdays, but rarely, increasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-06-09. Latest guide note (2026-07-07): Tuesday continues matching this store well. Expect another solid turnout early with some heads already here",
      "confirmedCount": 1
    },
    "T082": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T083": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Worth checking for Needohs and smaller items at opening, but Pokémon still appears to be moving toward a Friday schedule.",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "Low",
      "window": "Opening",
      "reason": "One of the better daily opening stores. Expect another crowd before doors open.",
      "confirmedCount": 0
    },
    "T085": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has come up in guides for Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T086": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T087": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Vendor remains the focus here. Expect people staying well into the morning waiting for inventory.",
      "confirmedCount": 1
    },
    "T088": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening VQ remains the expectation. Expect another deep line before the doors even open",
      "confirmedCount": 1
    },
    "T089": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Tuesdays, decreasing trend. Last confirmed: 2026-04-07. Latest guide note (2026-06-02): STILL HASN'T REALLY MOVED. Watch 12-2 closely",
      "confirmedCount": 0
    },
    "T090": {
      "chance": "Low",
      "window": "8AM-9AM",
      "reason": "Sleeper for Weds/Thursday. On Fri, they run VQ. On Weds or Thurs, they selectively sell at guest services starting around 8-9AM. Check morning! Then, if it hits, be on Cypress...",
      "confirmedCount": 0
    },
    "T091": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Garfield appeared to sell, putting the focus back on Costa Mesa 17th. Best windows remain 8-10 and again later if vendor timing shifts.",
      "confirmedCount": 0
    },
    "T092": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has been holding for Friday-only drops.",
      "confirmedCount": 1
    },
    "T093": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Garfield appeared to sell, putting the focus back on Costa Mesa 17th. Best windows remain 8-10 and again later if vendor timing shifts.",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "Medium",
      "window": "8AM-11AM",
      "reason": "Please keep eyes from 8-11 for a possible drop!",
      "confirmedCount": 3
    },
    "T095": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening VQ or FCFS remains the expectation. Be there early because people will already be lined up, although there's still a chance they choose to hold everything for Friday instead.",
      "confirmedCount": 5
    },
    "T096": {
      "chance": "Medium",
      "window": "8AM-9AM",
      "reason": "Sleeper for Weds/Thursday. On Fri, they run VQ. On Weds or Thurs, they selectively sell at guest services starting around 8-9AM. Check morning! Then, if it hits, be on Cypress...",
      "confirmedCount": 2
    },
    "T097": {
      "chance": "Low",
      "window": "12AM-2PM",
      "reason": "Unless inventory quietly moved, deserves plenty of attention. Typical window remains 12-2, but morning drops between 8:30-11 have happened enough to stay on the radar so don’t get caught sleeping",
      "confirmedCount": 0
    },
    "T166": {
      "chance": "High",
      "window": "8AM-10AM",
      "reason": "Continues selling shipment as it arrives. Focus on 8-10 first, then another run around 12-2. Ask Guest Services because they've been fairly upfront lately.",
      "confirmedCount": 4
    },
    "T098": {
      "chance": "Low",
      "window": "",
      "reason": "Can check in the morning but more likely for Weds or Friday",
      "confirmedCount": 0
    },
    "T099": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Wednesday continues matching this store well. Main windows remain 9-11 and again 12-2, although they aren't afraid to switch timing up.",
      "confirmedCount": 1
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "La Brea is confirmed to be holding inventory back, making it one of the stronger opening checks. Century remains worth checking daily because it has also been staggering releases.",
      "confirmedCount": 3
    },
    "T100": {
      "chance": "Medium",
      "window": "7PM-9PM",
      "reason": "Vendor Tuesday followed by Wednesday sales still fits this location, but after missing Friday it now feels overdue enough to deserve another check.",
      "confirmedCount": 1
    },
    "T101": {
      "chance": "Low",
      "window": "11AM-1PM",
      "reason": "Fridays and some Wednesdays here! Usually at opening or around 11AM-1PM. They sell at guest services and it's a total sleeper store!",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "High",
      "window": "12-3pm",
      "reason": "Occasionally hits on Tuesdays, increasing trend. 2 confirmed recently. Typically 12-3pm. Last confirmed: 2026-06-23. Latest guide note (2026-06-30): Biggest focus should be vendor timing from 1-4. Expect people lingering and waiting throughout the afternoon. The line is likely to start by 12PM or...",
      "confirmedCount": 2
    },
    "T103": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Strong opening check again. Inventory has been lighter lately, but there is still room for another solid release before the weekend.",
      "confirmedCount": 0
    },
    "T104": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening remains the best opportunity. People will be checking early and this store still feels capable of unloading more inventory than it has so far.",
      "confirmedCount": 0
    },
    "T106": {
      "chance": "High",
      "window": "Opening",
      "reason": "Didn't appear to move Pokémon. Opening should be the move!",
      "confirmedCount": 4
    },
    "T107": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Selling inventory as they receive so check opening + 9-11 until it lands!",
      "confirmedCount": 1
    },
    "T108": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T109": {
      "chance": "Medium",
      "window": "12AM-2PM",
      "reason": "Check for a sneaky drop either 12-2 or 4-6!",
      "confirmedCount": 1
    },
    "T110": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has come up in guides for Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T111": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Used to hit Weds but seems to have shifted to Thursdays but feel free to check at opening in case!",
      "confirmedCount": 0
    },
    "T112": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Both will have long lines prior to opening be ready for an opening drop!",
      "confirmedCount": 1
    },
    "T113": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Often slept on, but definitely not forgotten about by locals. Hits by 10-12PM and gets cleaned quickly. Smaller store that receives much less stock than the other 2 Mission Viejo locations.",
      "confirmedCount": 1
    },
    "T114": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Both will have long lines prior to opening be ready for an opening drop!",
      "confirmedCount": 1
    },
    "T115": {
      "chance": "Low",
      "window": "12PM-2PM",
      "reason": "As a smaller store, they are prone to selling tmrw at opening. They did not have much. Sleeper check! If not, rotate from 12-2PM. Same timing as San Clemente.",
      "confirmedCount": 0
    },
    "T116": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Same situation as Signal Hill., Signal hit first, then Seal went after, which is usually how it goes down. Both stores will have lines before opening though since they are equally due!",
      "confirmedCount": 1
    },
    "T117": {
      "chance": "Low",
      "window": "",
      "reason": "Delivered exactly like expected. becomes more of a lighter follow-up while waiting for the next bigger wave.",
      "confirmedCount": 0
    },
    "T118": {
      "chance": "Medium",
      "window": "10AM-12AM",
      "reason": "Opening is now the better play after moving away from the Friday lottery format. Check early for any held-back stock, then another pass around 10-12.",
      "confirmedCount": 1
    },
    "T119": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Still doesn't appear to have really gotten going. One of the stronger Orange County checks with opening through late morning looking best. Could easily become a vendor stop if they don't hold for Friday.",
      "confirmedCount": 0
    },
    "T120": {
      "chance": "Medium",
      "window": "12AM-3PM",
      "reason": "Normally one of the stronger Tuesday stores. If it stayed quiet, becomes a worthwhile follow-up with the best windows around 12-3 and again 5-7.",
      "confirmedCount": 1
    },
    "T167": {
      "chance": "Low",
      "window": "",
      "reason": "Holding for Friday.",
      "confirmedCount": 0
    },
    "T121": {
      "chance": "High",
      "window": "11AM-1PM",
      "reason": "Another top priority for the region. Timing continues bouncing around, so patience will matter more than speed.",
      "confirmedCount": 4
    },
    "T122": {
      "chance": "Medium",
      "window": "",
      "reason": "Already has sold, so becomes more of a follow-up check instead of a major priority.",
      "confirmedCount": 0
    },
    "T123": {
      "chance": "Low",
      "window": "",
      "reason": "Sleeper location. Could finally move or continue holding toward its usual Wednesday timing.",
      "confirmedCount": 0
    },
    "T124": {
      "chance": "High",
      "window": "Opening",
      "reason": "One of 's biggest priorities. Expect people waiting before opening and sticking around until inventory appears.",
      "confirmedCount": 3
    },
    "T125": {
      "chance": "Low",
      "window": "2PM-5PM",
      "reason": "Seems VERY likely for a Thursday drop! You can still check between 2-5PM which is their daily drop time when it DOES end up hitting.",
      "confirmedCount": 0
    },
    "T126": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Stayed quiet and immediately becomes one of the stronger IE opening options.",
      "confirmedCount": 0
    },
    "T127": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Didn't appear to move. Strong opening check with another look later if needed.",
      "confirmedCount": 0
    },
    "T128": {
      "chance": "Low",
      "window": "9AM-12AM",
      "reason": "Has hit multiple days in a row so check. Tues/Weds & Fri are frequent drop days. 9:30-12:00 usually!",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "Medium",
      "window": "",
      "reason": "Has started selling inventory almost immediately after receiving shipment. This is becoming a daily shipment check, so don't overlook it.",
      "confirmedCount": 0
    },
    "T130": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Tuesday continues fitting this store well. Expect another solid crowd waiting before opening.",
      "confirmedCount": 1
    },
    "T131": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Has hit on Tuesdays, but rarely, increasing trend. Typically Opening. Last confirmed: 2026-04-21. Latest guide note (2026-06-30): More random now but they should hit once shipment lands tmrw. Ask at guest services. Can pair a check with the other Apple Valley location off of the highway as well!",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Already sold some inventory but still worth checking. Don't be surprised if the next larger wave gets pushed toward Friday.",
      "confirmedCount": 0
    },
    "T133": {
      "chance": "High",
      "window": "9AM-11AM",
      "reason": "Opening remains one of the better IE plays. If nothing develops early, another run around 9:30-11 remains worthwhile.",
      "confirmedCount": 2
    },
    "T134": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening drop for release day items!",
      "confirmedCount": 3
    },
    "T135": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Tuesdays, steady trend. 1 confirmed recently. Last confirmed: 2026-06-23.",
      "confirmedCount": 1
    },
    "T136": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally hits on Tuesdays, decreasing trend. Typically Opening. Last confirmed: 2026-04-07. Latest guide note (2026-07-07): Both remain early hitters. Mills especially should have people lined up well before opening. Baker usually hits a bit after around 9-10:30 but stay on it!",
      "confirmedCount": 0
    },
    "T137": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "May have quietly pushed inventory. Worth checking again to see if anything remains.",
      "confirmedCount": 1
    },
    "T138": {
      "chance": "High",
      "window": "8AM-10AM",
      "reason": "Continue focusing around 8:30-10:30, but never ignore employee pushes because this store continues surprising people.",
      "confirmedCount": 4
    },
    "T139": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Tuesdays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-02.",
      "confirmedCount": 1
    },
    "T140": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Already moved inventory so becomes more of a follow-up check than a major priority.",
      "confirmedCount": 1
    },
    "T141": {
      "chance": "High",
      "window": "Opening",
      "reason": "Pushed out some product Wednesday mid day! Can check in for more but may be light",
      "confirmedCount": 2
    },
    "T142": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T143": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Tuesdays, increasing trend. Last confirmed: 2026-05-19. Latest guide note (2026-06-30): Usually hits Tues/Fri or Sat mornings, Sat more than Fri. People will arrive early. Oftentimes sells via aisle here. Vendor stocks, be early!",
      "confirmedCount": 0
    },
    "T144": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T145": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Should sell at opening at GS here easy option for locals",
      "confirmedCount": 1
    },
    "T146": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Tuesdays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-02.",
      "confirmedCount": 1
    },
    "T147": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T148": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T149": {
      "chance": "Low",
      "window": "",
      "reason": "In play as well, just random timing. We'll work on gathering more info here.",
      "confirmedCount": 0
    },
    "T150": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T151": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Tuesdays, steady trend. 2 confirmed recently. Last confirmed: 2026-06-30.",
      "confirmedCount": 2
    },
    "T152": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T153": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Has been active on Tuesdays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T154": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Tuesdays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-02.",
      "confirmedCount": 1
    },
    "T155": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T156": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T157": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T158": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T159": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Tuesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T160": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T161": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has been active on Tuesdays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T162": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Tuesdays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-16.",
      "confirmedCount": 1
    },
    "T163": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T168": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Check for the 2nd round of stock around opening. Expect a line here!",
      "confirmedCount": 0
    },
    "T169": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Check for the 2nd round of stock around opening. Expect a line here!",
      "confirmedCount": 0
    },
    "T170": {
      "chance": "Low",
      "window": "",
      "reason": "Keep both stores paired together. Santa Barbara usually becomes the first vendor stop before activity shifts over toward Goleta later.",
      "confirmedCount": 0
    },
    "T171": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Tuesdays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-09.",
      "confirmedCount": 1
    },
    "T172": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T173": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T174": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T175": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "Expect a line by the tech area at random times, full of people hoping to catch the vendor.",
      "confirmedCount": 1
    },
    "T176": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T177": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T178": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T179": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T180": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Heads will check opening in case but strongest time is 10-1",
      "confirmedCount": 1
    },
    "T181": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T182": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T183": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "No sell so expected for a bigger drop! If not opening mid day",
      "confirmedCount": 1
    },
    "T184": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T185": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T186": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Store continues telling people they're waiting until Friday, but they sold beforehand. Check 8-10 and ask directly because plans can change quickly.",
      "confirmedCount": 0
    },
    "T187": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T188": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T189": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T190": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T191": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T192": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T193": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T194": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T195": {
      "chance": "Low",
      "window": "12PM-2PM",
      "reason": "Usually a Wednesday and Friday store! Check in between 12-2PM, a line forms between this time EVERY WEEK. Timeframe is super consistent here. Receives solid stock too! POSSIBLE THEY HOLD FOR FRI MORNING SINCE IT'S A RELEASE WEEK, THEY'VE DONE IT HERE.",
      "confirmedCount": 0
    }
  },
  "wednesday": {
    "T001": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Vendor stopped here but Pokémon never came out. Look for a possible morning employee push or another small wave if inventory stayed behind.",
      "confirmedCount": 1
    },
    "T002": {
      "chance": "Medium",
      "window": "6AM-7AM",
      "reason": "Biggest SGV opening priority. Be there around 6-7AM and ask employees if product is coming out because they usually confirm before opening. Stayed quiet so run it right back.",
      "confirmedCount": 1
    },
    "T003": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Same formula continues working. Opening first, then another run around 9:30-11:30 at both",
      "confirmedCount": 1
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally hits on Wednesdays, decreasing trend. 2 confirmed recently. Typically Opening. Last confirmed: 2026-06-24. Latest guide note (2026-06-24): Lines will start early early at both as they are PRIMED to hit",
      "confirmedCount": 2
    },
    "T005": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Employee pushes continue making this one a dependable stop. Opening first, then check back later because this store is known for multiple waves.",
      "confirmedCount": 2
    },
    "T006": {
      "chance": "Low",
      "window": "",
      "reason": "Thursday and Friday continue fitting this store much better than Wednesday. Feel free to check but expectations remain slightly higher later in the week.",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "Medium",
      "window": "12PM-2PM",
      "reason": "Both remain some of the better morning stops. Employee pushes continue being common and both stores still feel due for more inventory, especially La Verne.",
      "confirmedCount": 2
    },
    "T008": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Both remain some of the better morning stops. Employee pushes continue being common and both stores still feel due for more inventory, especially La Verne.",
      "confirmedCount": 1
    },
    "T009": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Thursday and Friday continue fitting this location best. Keep it on the radar but feels more like a setup for the rest of the week.",
      "confirmedCount": 1
    },
    "T010": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "This store should hit. Opening is the highest percentage play but keep rotating because this store loves choosing its own timing if it doesn't move immediately.",
      "confirmedCount": 2
    },
    "T011": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Continues selling multiple times throughout the week. Expect another employee push at opening with additional chances later in the day.",
      "confirmedCount": 0
    },
    "T012": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Friday morning as it has been dropping the past weeks",
      "confirmedCount": 1
    },
    "T013": {
      "chance": "High",
      "window": "Opening",
      "reason": "Hits Wednesdays fairly often, decreasing trend. 2 confirmed recently. Typically Opening. Last confirmed: 2026-06-17. Latest guide note (2026-06-17): Hit today as posted here first!",
      "confirmedCount": 2
    },
    "T014": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Wednesdays and Thursdays continue matching this location. Opening deserves attention with another sweep later if vendor timing changes.",
      "confirmedCount": 0
    },
    "T015": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the safest stores to leave in rotation all day. Opening matters, but random employee pushes and vendor timing continue rewarding repeat checks.",
      "confirmedCount": 2
    },
    "T016": {
      "chance": "Low",
      "window": "",
      "reason": "Already has sold, so expectations cool off slightly. Still worth checking if you're nearby because this store isn't afraid to stagger inventory.",
      "confirmedCount": 0
    },
    "T017": {
      "chance": "Low",
      "window": "",
      "reason": "Morning first, then another look later in the day if vendor timing slips. People will continue checking regardless.",
      "confirmedCount": 0
    },
    "T018": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Occasionally hits on Wednesdays, decreasing trend. Typically Opening. Last confirmed: 2026-05-13. Latest guide note (2026-07-01): Could be a sneaky opening push at guest services which they have done on Weds/Thurs before. Check in! If not, due for a vendor stock in the afternoon. Ppl will lurk by...",
      "confirmedCount": 0
    },
    "T019": {
      "chance": "Medium",
      "window": "8-11AM",
      "reason": "Occasionally flagged in guides for Wednesdays, increasing trend. Typically 8-11AM. Latest guide note (2026-07-01): Sleeper store that sells between 8-11AM almost daily.",
      "confirmedCount": 0
    },
    "T020": {
      "chance": "High",
      "window": "10AM-12PM",
      "reason": "Sold multiple times so becomes more of a follow-up check.",
      "confirmedCount": 6
    },
    "T021": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Did not sell product so should still have more waiting. Opening at 7AM remains your best opportunity before checking back later.",
      "confirmedCount": 0
    },
    "T022": {
      "chance": "Medium",
      "window": "3-5PM",
      "reason": "Occasionally hits on Wednesdays, decreasing trend. 1 confirmed recently. Typically 3-5PM. Last confirmed: 2026-06-24. Latest guide note (2026-07-01): Unlikely that they sell tm, they sold today. Check time: 3-5PM!",
      "confirmedCount": 1
    },
    "T023": {
      "chance": "Medium",
      "window": "2PM-3PM",
      "reason": "Opening first. If nothing happens don't leave because this store sells completely on its own schedule. inventory didn't come out until around 2-3PM.",
      "confirmedCount": 2
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally hits on Wednesdays, steady trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-06-24. Latest guide note (2026-07-01): Midweek remains their best timeframe. Most movement happens around opening, or late afternoon to night time.",
      "confirmedCount": 1
    },
    "T025": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Continues moving up the priority list after Gardena almost sold. Opening remains your best shot.",
      "confirmedCount": 1
    },
    "T026": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Now one of 's bigger priorities after staying quiet. Be there at opening, then check back around midday if nothing develops because timing has become less predictable.",
      "confirmedCount": 1
    },
    "T027": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "MASSIVE opening priority. Store is way overdue and unless they intentionally hold everything for Friday, expect a serious crowd before 7AM.",
      "confirmedCount": 1
    },
    "T028": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the strongest opening checks. Store is overdue, lines will already be forming before opening, and people will continue waiting if nothing happens immediately.",
      "confirmedCount": 1
    },
    "T029": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "Small section but plenty of hidden inventory. Sold Monday night but can sell more still",
      "confirmedCount": 1
    },
    "T030": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Expect people waiting from 7AM onward because this store continues sitting on heavy back stock before finally releasing it. may hold inventory back",
      "confirmedCount": 1
    },
    "T031": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Has sold so less likely unless small items",
      "confirmedCount": 0
    },
    "T032": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T033": {
      "chance": "Low",
      "window": "",
      "reason": "Quiet, making a much stronger morning option. Get there early because timing has shifted toward earlier drops.",
      "confirmedCount": 0
    },
    "T034": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T035": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Occasionally hits on Wednesdays, increasing trend. 1 confirmed recently. Typically 10AM-12PM. Last confirmed: 2026-06-24. Latest guide note (2026-07-01): X factor between 10AM-12PM if they push at guest services.",
      "confirmedCount": 1
    },
    "T036": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T037": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T038": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Has sold at opening tends to hit either Tuesdays or Thursday’s usually",
      "confirmedCount": 0
    },
    "T039": {
      "chance": "Low",
      "window": "11AM-1PM",
      "reason": "Thursday still fits this location best, but remains worthwhile around 11-1 and again from 4-6 if they shift timing.",
      "confirmedCount": 0
    },
    "T040": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Similar setup to Santa Fe Springs. Held back stock so check in for product",
      "confirmedCount": 1
    },
    "T041": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening through noon remains strongest unless inventory sneaks out.",
      "confirmedCount": 0
    },
    "T042": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening through 10AM continues leading the way. Locals stay here until inventory finally appears so don't expect the line to disappear quickly.",
      "confirmedCount": 1
    },
    "T043": {
      "chance": "High",
      "window": "Opening",
      "reason": "Classic Wednesday behavior continues. Be ready early because this store can surprise with either opening FCFS, VQ, or an early morning release. Looking for updates here.",
      "confirmedCount": 8
    },
    "T044": {
      "chance": "High",
      "window": "10AM-2PM",
      "reason": "Overdue for another PACK. Opening remains worthwhile, but the strongest activity still tends to fall between 10-2 when people commit and wait it out.",
      "confirmedCount": 2
    },
    "T045": {
      "chance": "Medium",
      "window": "10AM-12AM",
      "reason": "Still waiting on another meaningful wave. Best windows remain 10-12 and again 4-6, with Friday becoming stronger if misses.",
      "confirmedCount": 1
    },
    "T046": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "Occasionally flagged in guides for Wednesdays, increasing trend. Typically 9-11AM. Latest guide note (2026-07-01): Similar to other smaller locations, they have started to receive ALMOST every other day. Check tomorrow at GS + check the card display between 9-11AM and 1-3PM.",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Continues following Seal Beach more often than not. Expect people waiting early with the usual activity falling around 9-11.",
      "confirmedCount": 1
    },
    "T048": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Firestone already moved, putting most attention back on Imperial. Opening remains the best starting point.",
      "confirmedCount": 0
    },
    "T049": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Firestone already moved, putting most attention back on Imperial. Opening remains the best starting point.",
      "confirmedCount": 1
    },
    "T050": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Still one of 's biggest opening watches. Didn't move earlier in the week and feels ready for either a VQ or FCFS release.",
      "confirmedCount": 1
    },
    "T051": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Overdue along with South Street. Opening deserves heavy attention because either location could finally decide to move inventory.",
      "confirmedCount": 0
    },
    "T164": {
      "chance": "Low",
      "window": "",
      "reason": "Newer location worth adding into your route. Vendor has been stocking while the store holds some inventory back, making random pushes very possible.",
      "confirmedCount": 0
    },
    "T052": {
      "chance": "Low",
      "window": "",
      "reason": "Sold this afternoon as expected, making a lighter follow-up than Sunset.",
      "confirmedCount": 0
    },
    "T053": {
      "chance": "Low",
      "window": "1PM-4PM",
      "reason": "Overdue for another Pokémon release. Opening deserves attention with another strong window from 1-4 if they decide to wait.",
      "confirmedCount": 0
    },
    "T054": {
      "chance": "Medium",
      "window": "7-9:30AM",
      "reason": "Has hit on Wednesdays, but rarely, increasing trend. 1 confirmed recently. Typically 7-9:30AM. Last confirmed: 2026-06-24. Latest guide note (2026-07-01): Been selling at 7AM recently! Sold at opening today! Double back tmrw between 7-9:30AM.",
      "confirmedCount": 1
    },
    "T055": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Strong First Partner watch. Could easily go at opening or later in the afternoon, making it one of LA's better sleeper checks.",
      "confirmedCount": 0
    },
    "T056": {
      "chance": "Low",
      "window": "",
      "reason": "Stock is here but this store continues playing games with timing. May hold for Friday",
      "confirmedCount": 0
    },
    "T057": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "If they don't quietly move inventory, becomes one of the better opening sleeper checks. Received more shipment",
      "confirmedCount": 1
    },
    "T058": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Both remain solid rotation stores but do also sell on Fridays so may hold until then",
      "confirmedCount": 0
    },
    "T059": {
      "chance": "Low",
      "window": "11AM-1PM",
      "reason": "Both remain solid rotation stores but do also sell on Fridays so may hold until then",
      "confirmedCount": 0
    },
    "T060": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has hit on Wednesdays, but rarely, increasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-05-27. Latest guide note (2026-07-01): Only hit with a small amount of OP today. Check between opening and 10AM, UPS delivers in the morning.",
      "confirmedCount": 1
    },
    "T061": {
      "chance": "High",
      "window": "9AM-11AM",
      "reason": "Same formula continues working. Opening first, then another run around 9:30-11:30 at both",
      "confirmedCount": 3
    },
    "T062": {
      "chance": "Medium",
      "window": "10AM-1PM",
      "reason": "Continues behaving like one of the best daily shipment stores around. Opening is mandatory, then another sweep around 10-1 because additional inventory keeps landing.",
      "confirmedCount": 1
    },
    "T063": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Has sold and is back to doing random drops don’t let the store spin. Will likely hold on until Friday now but moving forward",
      "confirmedCount": 1
    },
    "T064": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Has leaned more toward holding inventory for Fridays lately. is still worth checking as people go for Needoh and more",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "Hits Wednesdays fairly often, increasing trend. 4 confirmed recently. Typically Opening. Last confirmed: 2026-06-24. Latest guide note (2026-07-01): Been awfully dry to the point it seems like they are holding out for Friday. Many SFV stores have made the switch this week. Feel free to check 1 mo...",
      "confirmedCount": 4
    },
    "T066": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T067": {
      "chance": "Low",
      "window": "",
      "reason": "Likely holding for Friday here!",
      "confirmedCount": 0
    },
    "T068": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Store continues playing games with inventory. Opening deserves another look because this location still hasn't fully shifted into the Friday-only pattern.",
      "confirmedCount": 0
    },
    "T069": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Received inventory. Opening is worthwhile, but likely for Friday",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "Medium",
      "window": "2PM-4PM",
      "reason": "Likely holding for Friday",
      "confirmedCount": 1
    },
    "T071": {
      "chance": "Low",
      "window": "Opening",
      "reason": "May possibly be moving to Friday morning drops as well 🪦",
      "confirmedCount": 0
    },
    "T072": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Has hit on Wednesdays, but rarely, steady trend. Typically Opening. Last confirmed: 2026-04-22. Latest guide note (2026-07-01): Don't really have a timeframe here yet, we're working on it. Adding this store to remind you all that it is now random, and not only on Friday! Check at guest services +...",
      "confirmedCount": 0
    },
    "T073": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Two stores both claimed to be moving to Fridays only feel free to check in and confirmed",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Two stores both claimed to be moving to Fridays only feel free to check in and confirmed",
      "confirmedCount": 0
    },
    "T075": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Cochran may be moving to Friday’s only! Madera still deserves attention from 10-12 as they seem to be not in the Friday wave yet",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "Low",
      "window": "11AM-12AM",
      "reason": "Continues selling almost daily through Guest Services. Expect another line waiting during the morning with the strongest window around 11-12:30, although later pushes remain possible.",
      "confirmedCount": 0
    },
    "T077": {
      "chance": "Low",
      "window": "",
      "reason": "Back to Friday’s here!",
      "confirmedCount": 0
    },
    "T078": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Likely to hit at opening usually goes Tuesday/Thursday be ready!",
      "confirmedCount": 0
    },
    "T079": {
      "chance": "Medium",
      "window": "12PM-2PM",
      "reason": "Still feels more like a Friday store but has shown it will occasionally leak inventory beforehand so can cbeck!",
      "confirmedCount": 1
    },
    "T080": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Opening through 8-10 first then rerun later. They drop as they get shipment!",
      "confirmedCount": 0
    },
    "T081": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "May have hit so check again Friday!",
      "confirmedCount": 0
    },
    "T082": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T083": {
      "chance": "Low",
      "window": "",
      "reason": "Continue checking mornings. Store claims Pokémon is Friday only, but still finds ways to move other product throughout the week so keep eyes here.",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening continues being the move. Heads already here again almost a daily check",
      "confirmedCount": 0
    },
    "T085": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T086": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T087": {
      "chance": "High",
      "window": "Opening",
      "reason": "Has hit on Wednesdays, but rarely, increasing trend. 2 confirmed recently. Typically Opening. Last confirmed: 2026-06-24. Latest guide note (2026-07-01): Sold today so it's not as likely that they drop tmrw. Feel free to check at opening which is around when they sold today.",
      "confirmedCount": 2
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "Strong opening VQ watch again. this could be the day because inventory should be ready and another deep line is expected before doors open.",
      "confirmedCount": 2
    },
    "T089": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Wednesdays, decreasing trend. 1 confirmed recently. Last confirmed: 2026-05-27. Latest guide note (2026-05-27): 12-3 remains strongest but store has been leaning towards Friday drops! Not definitive and store will usually disperse a line if nothing hits",
      "confirmedCount": 1
    },
    "T090": {
      "chance": "Medium",
      "window": "7-9am",
      "reason": "Hits Wednesdays fairly often, decreasing trend. Typically 7-9am. Last confirmed: 2026-05-06. Latest guide note (2026-07-01): Holding for Friday.",
      "confirmedCount": 0
    },
    "T091": {
      "chance": "Low",
      "window": "",
      "reason": "Check in with both stores for light product but may be holding!",
      "confirmedCount": 0
    },
    "T092": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T093": {
      "chance": "Low",
      "window": "",
      "reason": "Check in with both stores for light product but may be holding!",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "Low",
      "window": "",
      "reason": "Only sold Needoh early check unless they choose to hold!",
      "confirmedCount": 0
    },
    "T095": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Wednesdays, decreasing trend. 1 confirmed recently. Last confirmed: 2026-05-27. Latest guide note (2026-05-27): VQ in the morning around 9-10:30 usually! Selling usually happens from 10-12 here!",
      "confirmedCount": 1
    },
    "T096": {
      "chance": "Medium",
      "window": "6PM-8PM",
      "reason": "Stay on it from roughly 9-11. Store loves giving mixed information, so don't leave after the first answer.",
      "confirmedCount": 1
    },
    "T097": {
      "chance": "High",
      "window": "8AM-10AM",
      "reason": "Major timing change here. Store has shifted toward morning releases, so be ready from 8-10 because this has quickly become one of the better early checks.",
      "confirmedCount": 3
    },
    "T166": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Continues selling shipment through Guest Services as inventory lands. Check opening / morning",
      "confirmedCount": 0
    },
    "T098": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "Morning remains the strongest play here!",
      "confirmedCount": 4
    },
    "T099": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Sold very minimal amount sneakily check in case of more!",
      "confirmedCount": 1
    },
    "T165": {
      "chance": "High",
      "window": "12AM-2PM",
      "reason": "Sold multiple times, making more of a follow-up than a major priority. Opening is still worthwhile with another sweep around 12-2 if fresh shipment lands.",
      "confirmedCount": 2
    },
    "T100": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of 's stronger Orange County opening checks. Stock is already sitting there and another long line should be waiting before doors open.",
      "confirmedCount": 4
    },
    "T101": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Usually sells Fridays but did not so check in case",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "Low",
      "window": "12PM-3PM",
      "reason": "Usually either Tuesdays/Thursdays but did sell Monday so be weary",
      "confirmedCount": 0
    },
    "T103": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Worthan opening check here as they have been quiet!",
      "confirmedCount": 0
    },
    "T104": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Wednesdays, but rarely, increasing trend. Last confirmed: 2026-04-08. Latest guide note (2026-06-17): Euclid sold as warned but light stock. Lincoln and Hills can both sell tomorrow earlier or hold for Friday, so check in",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Morning remains the best opportunity. If nothing quietly came out expect people checking opening because this store still has room for another solid wave.",
      "confirmedCount": 1
    },
    "T106": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "Sold exactly as expected. becomes more of a lighter follow-up while waiting for another shipment.",
      "confirmedCount": 1
    },
    "T107": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Store continues turning into a daily shipment check. Expect another line with the strongest activity around 9-11, but don't be surprised if Guest Services starts releasing inventory as it arrives.",
      "confirmedCount": 1
    },
    "T108": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T109": {
      "chance": "Medium",
      "window": "12AM-2PM",
      "reason": "Sneaky check around 12-2 or even 4-6. Store continues holding inventory before letting smaller batches go.",
      "confirmedCount": 1
    },
    "T110": {
      "chance": "Low",
      "window": "8AM-11AM",
      "reason": "Rumor has it that they randomly sold Monday. This honestly was not verified. For the time being treat it like any other Thursday and be ready for a 8am line for lottery tickets. Update pls!",
      "confirmedCount": 0
    },
    "T111": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Has leaned more toward Thursdays lately. Feel free to peek at opening, but feels like the stronger opportunity.",
      "confirmedCount": 0
    },
    "T112": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Jerónimo has sold so less likely for. Alicia sold yesterday so back on watch opening! San Clemente either hit late or is due along with San Juan Capistrano.",
      "confirmedCount": 1
    },
    "T113": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T114": {
      "chance": "Low",
      "window": "",
      "reason": "Jerónimo has sold so be ready for Alicia!",
      "confirmedCount": 0
    },
    "T115": {
      "chance": "High",
      "window": "12-2PM",
      "reason": "Occasionally flagged in guides for Wednesdays, increasing trend. Typically 12-2PM. Latest guide note (2026-07-01): As a smaller store, they are prone to selling tmrw at opening. They did not have much today. Sleeper check! If not, rotate from 12-2PM. Same timing as San Clemente.",
      "confirmedCount": 0
    },
    "T116": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Still one of Orange County's most dependable Monday stores. hit around 10am.",
      "confirmedCount": 1
    },
    "T117": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Wednesdays, but rarely, decreasing trend. Last confirmed: 2026-04-08. Latest guide note (2026-06-10): Hit today as posted!",
      "confirmedCount": 0
    },
    "T118": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T119": {
      "chance": "Medium",
      "window": "2PM-4PM",
      "reason": "Continues claiming they're selling randomly now, but historically Wednesday has always been one of their strongest days. Stay on them because inventory should appear at some point.",
      "confirmedCount": 1
    },
    "T120": {
      "chance": "Low",
      "window": "10AM-2PM",
      "reason": "Vendor did not actually stop by yesterday so keep eyes especially from 10-2pm!",
      "confirmedCount": 0
    },
    "T167": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Wednesdays, but rarely, increasing trend. Last confirmed: 2026-01-21. Latest guide note (2026-07-01): Holding for Friday.",
      "confirmedCount": 0
    },
    "T121": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Can check in case of any held back product but has been selling",
      "confirmedCount": 1
    },
    "T122": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally hits on Wednesdays, decreasing trend. 2 confirmed recently. Typically Opening. Last confirmed: 2026-06-10. Latest guide note (2026-07-01): Due for their 2nd stock of the week tmrw! You can expect a line to be here by 10AM or so. Hits before or after Eastvale.",
      "confirmedCount": 2
    },
    "T123": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Sleeper location. Could finally move or continue holding toward its usual Wednesday timing.",
      "confirmedCount": 1
    },
    "T124": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "One of 's biggest priorities. Expect people waiting before opening and sticking around until inventory appears.",
      "confirmedCount": 1
    },
    "T125": {
      "chance": "Medium",
      "window": "2-5PM",
      "reason": "Occasionally flagged in guides for Wednesdays, increasing trend. Typically 2-5PM. Latest guide note (2026-07-01): Seems VERY likely for a Thursday drop! You can still check tomorrow between 2-5PM which is their daily drop time when it DOES end up hitting.",
      "confirmedCount": 0
    },
    "T126": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Similar to Arlington. Store continues selling inventory as it arrives, making opening one of 's better opportunities after not hitting",
      "confirmedCount": 0
    },
    "T127": {
      "chance": "High",
      "window": "Opening",
      "reason": "HEAVY opening priority. Stayed quiet and should draw attention immediately morning.",
      "confirmedCount": 5
    },
    "T128": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Wednesdays, but rarely, increasing trend. Last confirmed: 2025-10-22. Latest guide note (2026-07-01): Has hit multiple days in a row so check tomorrow. Tues/Weds & Fri are frequent drop days. 9:30-12:00 usually!",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Becoming one of the strongest daily shipment stores in the IE. They continue selling as inventory arrives, making another priority check both morning and afternoon.",
      "confirmedCount": 1
    },
    "T130": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T131": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Wednesdays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-10.",
      "confirmedCount": 1
    },
    "T132": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Stayed quiet and should still draw people at opening. If nothing develops early don't be surprised if inventory gets held for later in the week.",
      "confirmedCount": 1
    },
    "T133": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Already has sold so expectations come down slightly, but this store is still known for holding inventory back and releasing it in batches.",
      "confirmedCount": 1
    },
    "T134": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T135": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T136": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T137": {
      "chance": "High",
      "window": "Opening",
      "reason": "Received more inventory and remains one of the better Wednesday opening checks. Expect another crowd before opening.",
      "confirmedCount": 2
    },
    "T138": {
      "chance": "High",
      "window": "8AM-10AM",
      "reason": "Sleeper location that continues rewarding patient checks. Focus around 8-10, then another pass between 12-3 because employee timing remains unpredictable.",
      "confirmedCount": 4
    },
    "T139": {
      "chance": "Medium",
      "window": "12PM-2PM",
      "reason": "Opening continues looking strongest as shipment came in but Poke was held back!",
      "confirmedCount": 1
    },
    "T140": {
      "chance": "Low",
      "window": "",
      "reason": "Already moved inventory so becomes more of a follow-up check than a major priority.",
      "confirmedCount": 0
    },
    "T141": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Pushed out some product Wednesday mid day! Can check in for more but may be light",
      "confirmedCount": 1
    },
    "T142": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T143": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T144": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T145": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Should sell at opening at GS here easy option for locals",
      "confirmedCount": 1
    },
    "T146": {
      "chance": "Medium",
      "window": "12PM-2PM",
      "reason": "Has been active on Wednesdays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T147": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Wednesdays before, just not recently.",
      "confirmedCount": 0
    },
    "T148": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally flagged in guides for Wednesdays, increasing trend. Typically Opening. Latest guide note (2026-07-01): M/W/F schededule normally, but schedule this week, it seems random. People will start crowding towards the afternoon and there will be a line checking at opening.",
      "confirmedCount": 0
    },
    "T149": {
      "chance": "Low",
      "window": "",
      "reason": "Occasionally flagged in guides for Wednesdays, increasing trend. Latest guide note (2026-07-01): In play as well, just random timing. We'll work on gathering more info here.```",
      "confirmedCount": 0
    },
    "T150": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally flagged in guides for Wednesdays, increasing trend. Latest guide note (2026-07-01): Hits very randomly, receives light stock, and does 2 per SKU. It is only great for first few people to hit. Tougher catch!",
      "confirmedCount": 0
    },
    "T151": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T152": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T153": {
      "chance": "Medium",
      "window": "1PM-3PM",
      "reason": "Has been active on Wednesdays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T154": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Wednesdays, but rarely, increasing trend. 1 confirmed recently. Last confirmed: 2026-05-27. Latest guide note (2026-07-01): Still dry today, likely to hit tom. Expect heavy lines, people send it over after Balboa sometimes. Easy route though!",
      "confirmedCount": 1
    },
    "T155": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T156": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Has been active on Wednesdays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T157": {
      "chance": "Medium",
      "window": "6PM-8PM",
      "reason": "Has been active on Wednesdays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T158": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally flagged in guides for Wednesdays, increasing trend. Typically Opening. Latest guide note (2026-07-01): Ligher drop today! Hits consistently and their regular large drop day is Weds so might be good tom. Check opening and 11-2.",
      "confirmedCount": 0
    },
    "T159": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Wednesdays, increasing trend. 2 confirmed recently. Last confirmed: 2026-07-01. Latest guide note (2026-07-01): Weds frequent hitter. People camp out here because they receive solid stock AND hit every Weds!",
      "confirmedCount": 2
    },
    "T160": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T161": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally flagged in guides for Wednesdays, increasing trend. Typically Opening. Latest guide note (2026-07-01): Usually sells when they want at opening. Long lines most mornings. As long as you arrive a bit early, you should be good to grab what they sell, if at all!",
      "confirmedCount": 0
    },
    "T162": {
      "chance": "High",
      "window": "",
      "reason": "Has hit on Wednesdays, but rarely, increasing trend. Last confirmed: 2026-05-13. Latest guide note (2026-07-01): High chance for tom, Balboa peeps jump here when they hear the news. hits randomly. Just go after Balboa and wait it out if you need a move.",
      "confirmedCount": 0
    },
    "T163": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T168": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Both deserve attention. Philly remains the stronger play while Grand already delivered Monday. Best windows continue being 8-10 and again around 12-3.",
      "confirmedCount": 0
    },
    "T169": {
      "chance": "Medium",
      "window": "8AM-10AM",
      "reason": "Both deserve attention. Philly remains the stronger play while Grand already delivered Monday. Best windows continue being 8-10 and again around 12-3.",
      "confirmedCount": 1
    },
    "T170": {
      "chance": "Low",
      "window": "",
      "reason": "Continue pairing these together. Santa Barbara usually becomes the first vendor stop before activity shifts toward Goleta later.",
      "confirmedCount": 0
    },
    "T171": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T172": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T173": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T174": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T175": {
      "chance": "Medium",
      "window": "4PM-6PM",
      "reason": "Continues performing multiple times each week. Best windows remain 11-1 and again from 4-7.",
      "confirmedCount": 1
    },
    "T176": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T177": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T178": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T179": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T180": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T181": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T182": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T183": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T184": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T185": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T186": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Store states they are holding until Friday but they did randomly go to Thursday. Vendor stopped by earlier already so check in case at opening but expected Friday",
      "confirmedCount": 0
    },
    "T187": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T188": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T189": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T190": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T191": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T192": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T193": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T194": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T195": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "Open for release day items here and a bit more!",
      "confirmedCount": 1
    }
  },
  "thursday": {
    "T001": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "BOTH stores should already have stock and should move at open",
      "confirmedCount": 1
    },
    "T002": {
      "chance": "High",
      "window": "Opening",
      "reason": "Biggest SGV opening priority. Be there around 6-7AM and ask employees if product is coming out because they usually confirm before opening. Stayed quiet so run it right back.",
      "confirmedCount": 6
    },
    "T003": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "OPENING STORE, watch for a second drop later too as they ALWAYS restock more items",
      "confirmedCount": 1
    },
    "T004": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening or shortly after pushed by employees!",
      "confirmedCount": 0
    },
    "T005": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "CHECK IN. Store holds back insane amounts of stock. Should sell at open then trickle out small batches through the day!",
      "confirmedCount": 7
    },
    "T006": {
      "chance": "Medium",
      "window": "2PM-4PM",
      "reason": "Vendor expected. Morning or later afternoon, line forms either way and should sell a PACK",
      "confirmedCount": 1
    },
    "T007": {
      "chance": "Medium",
      "window": "1PM-3PM",
      "reason": "Should sell at open! Or a bit after if they want to purposely spin people",
      "confirmedCount": 1
    },
    "T008": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Should have multiple items at opening here",
      "confirmedCount": 0
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "Stock should be there but only release items!",
      "confirmedCount": 6
    },
    "T010": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "SHOULD MOVE AT OPEN. CHECK LATER FOR A SECOND DROP TOO THEY ALWAYS SELL MULTIPLE TIMES",
      "confirmedCount": 1
    },
    "T011": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Pretty much locked in as an opening store",
      "confirmedCount": 1
    },
    "T012": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Employees push items at open, expect release day items and MORE",
      "confirmedCount": 0
    },
    "T013": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening hit here! May only have release day items!",
      "confirmedCount": 0
    },
    "T014": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Expected but could be open OR a bit later depending on the store!",
      "confirmedCount": 1
    },
    "T015": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Lines expected and HIGH chance of release day items + more!",
      "confirmedCount": 0
    },
    "T016": {
      "chance": "Low",
      "window": "",
      "reason": "Lines expected and HIGH chance of release day items + more!",
      "confirmedCount": 0
    },
    "T017": {
      "chance": "Low",
      "window": "Opening",
      "reason": "OPENING CONFIRMED, should have items at opening here",
      "confirmedCount": 0
    },
    "T018": {
      "chance": "Low",
      "window": "1PM-4PM",
      "reason": "SHOULD DROP but could push to afternoon if not at open, heads will be checking it",
      "confirmedCount": 0
    },
    "T019": {
      "chance": "Low",
      "window": "",
      "reason": "Sleeper spot. Hit or miss but a great open since they've already been selling Fridays and more consistently in general!",
      "confirmedCount": 0
    },
    "T020": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Usually not the best opening option BUT has switched up before on release days so expect heads to check. Likely to sell mid day as usual",
      "confirmedCount": 1
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed opening drop! Should have a lot of product but store might hold some back for a later sale too",
      "confirmedCount": 3
    },
    "T022": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening drop, likely just release day item!",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Opening first. If nothing happens don't leave because this store sells completely on its own schedule. inventory didn't come out until around 2-3PM.",
      "confirmedCount": 1
    },
    "T024": {
      "chance": "Low",
      "window": "Opening",
      "reason": "EXPECT OPENING, likely only release day items",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "Medium",
      "window": "2PM-4PM",
      "reason": "Same as Gardena, will sell at open but may just be release items",
      "confirmedCount": 1
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "Has hit on Thursdays, but rarely, increasing trend. Typically Opening. Last confirmed: 2026-03-19. Latest guide note (2026-07-02): Broke away from the usual schedule and sold a bit tonight late but expect more Friday!",
      "confirmedCount": 0
    },
    "T027": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening drop but may sell only release day items as it hit",
      "confirmedCount": 1
    },
    "T028": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening drop here! Check later for a second batch too as they hold back stock.",
      "confirmedCount": 2
    },
    "T029": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Should sell at opening but store plays games as well so may stay emptier for a bit but heads will check at opening regardless",
      "confirmedCount": 0
    },
    "T030": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Expect people waiting from 7AM onward because this store continues sitting on heavy back stock before finally releasing it. may hold inventory back",
      "confirmedCount": 1
    },
    "T031": {
      "chance": "High",
      "window": "Opening",
      "reason": "Hits Thursdays fairly often, increasing trend. Typically Opening. Last confirmed: 2026-05-21. Latest guide note (2026-07-02): Opening and shortly after remain your best bet. Does drop on release days with opening or later morning though",
      "confirmedCount": 0
    },
    "T032": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Another sleeper, usually sells in the morning too!",
      "confirmedCount": 1
    },
    "T033": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Expect an earlier drop; if not right at open should hit between 9-11 for multiple items!!!",
      "confirmedCount": 0
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Occasionally hits on Thursdays, decreasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-05-28. Latest guide note (2026-05-28): Morning VQ should go up at Friday at opening",
      "confirmedCount": 1
    },
    "T035": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sleeper. Will sell in the morning! Lower stock but they receive!",
      "confirmedCount": 0
    },
    "T036": {
      "chance": "Low",
      "window": "Opening",
      "reason": "OPENING VQ/DROP POSSIBLE. Should hit since it's release day, just a matter of timing",
      "confirmedCount": 0
    },
    "T037": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening check. 2 per SKU, should move right away and store has been dropping on release days a bit more recently",
      "confirmedCount": 0
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "OPENING DROP here too, stock's already in!",
      "confirmedCount": 2
    },
    "T039": {
      "chance": "Low",
      "window": "11AM-1PM",
      "reason": "Already got stock in, should sell release items + other items at open as it didn’t hit!",
      "confirmedCount": 0
    },
    "T040": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Will sell at open, may have extra items here as well!",
      "confirmedCount": 1
    },
    "T041": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "May sell at opening or around 9-11",
      "confirmedCount": 1
    },
    "T042": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Opening through 10AM continues leading the way. Locals stay here until inventory finally appears so don't expect the line to disappear quickly.",
      "confirmedCount": 1
    },
    "T043": {
      "chance": "Low",
      "window": "Opening",
      "reason": "CHECK for a possible opening VQ if they don't sell right at open!",
      "confirmedCount": 0
    },
    "T044": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Release items at open with possible other items as well!",
      "confirmedCount": 2
    },
    "T045": {
      "chance": "High",
      "window": "9AM-11AM",
      "reason": "Open, otherwise later 9-11 or 2-6 for release jtems + a few extras",
      "confirmedCount": 2
    },
    "T046": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has come up in guides for Thursdays before, just not recently.",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "MAY end up stocking around 9-11 or 4-6 but slightly better chance it waits until next week",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "BOTH opening sleeper checks. Lines before open. Both have sold a bit already",
      "confirmedCount": 1
    },
    "T049": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "BOTH opening sleeper checks. Lines before open. Both have sold a bit already",
      "confirmedCount": 1
    },
    "T050": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Likely VQ if it doesn't sell immediately at open!",
      "confirmedCount": 2
    },
    "T051": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "SHOULD SELL AT OPEN OR TAKE A VQ",
      "confirmedCount": 1
    },
    "T164": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Thursdays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-25.",
      "confirmedCount": 1
    },
    "T052": {
      "chance": "Low",
      "window": "",
      "reason": "Same deal as Sunset, great store, gets great stock too but more tucked away so less updates don’t be deterred!",
      "confirmedCount": 0
    },
    "T053": {
      "chance": "High",
      "window": "Opening",
      "reason": "Sleeper for opening, multiple items here and heads are here EVERY friday already!",
      "confirmedCount": 2
    },
    "T054": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "1 per SKU, should move at open or shortly has not sold much!",
      "confirmedCount": 0
    },
    "T055": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening drop, may be lower stock but sleeper location",
      "confirmedCount": 0
    },
    "T056": {
      "chance": "Low",
      "window": "4AM-5AM",
      "reason": "SHOULD SELL AT OPEN, may hand out tickets beforehand too have handed tickets as early at 4-5am previously but likely to pass em around 6:30-7:30",
      "confirmedCount": 0
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "MAY sell at opening release day items but usually not the safest option. Has done it recently but be wary",
      "confirmedCount": 2
    },
    "T058": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "On opening or 10-12ish if not unboxed yet! Don't let them spin you, they'll have product",
      "confirmedCount": 0
    },
    "T059": {
      "chance": "Low",
      "window": "11AM-1PM",
      "reason": "Similar timing to Broadway, could randomly go later at night too if they hold some back",
      "confirmedCount": 0
    },
    "T060": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Sells Fridays at open or shortly after, should have multiple items!",
      "confirmedCount": 0
    },
    "T061": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening drop or a bit after if they wait to unbox but have not sold so expected! Line will be here early",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening drop, may push towards weekend so stronger options around",
      "confirmedCount": 3
    },
    "T063": {
      "chance": "Low",
      "window": "4AM-5AM",
      "reason": "OPENING STORE. Might cap total qty per person but should have a good variety of skus line starts 4-5am",
      "confirmedCount": 0
    },
    "T064": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sat on stock for this drop, so expect more than just release day items right at open!",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "Low",
      "window": "Opening",
      "reason": "EXPECT OPENING DROP, should sell multiple items, 1 per sku",
      "confirmedCount": 0
    },
    "T066": {
      "chance": "Low",
      "window": "Opening",
      "reason": "EXPECT ANOTHER BIG DAY. Line's already forming because of the 2 per person limit",
      "confirmedCount": 0
    },
    "T067": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Confirmed opening drop, chairs already out, haven't sold anything all week so BE READY",
      "confirmedCount": 0
    },
    "T068": {
      "chance": "Low",
      "window": "Opening",
      "reason": "RELEASE DAY OPENING STORE, will sell release day items but probably not much else and sell more on the weekend",
      "confirmedCount": 0
    },
    "T069": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening expected with limits in place! Should be DECENT amount of stock",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "Low",
      "window": "",
      "reason": "SHOULD HIT AT OPEN with a LARGE stock",
      "confirmedCount": 0
    },
    "T071": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Smaller inventory but should still move, may hand out tickets before opening as well!",
      "confirmedCount": 0
    },
    "T072": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening drop here too may only have release day items but check!",
      "confirmedCount": 0
    },
    "T073": {
      "chance": "Medium",
      "window": "4PM-6PM",
      "reason": "Has fully leaned into Friday drops. Opening is the priority, then another run around 8-10 and again from 2-5 if needed as usually they can go multiple rounds",
      "confirmedCount": 2
    },
    "T074": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Expect a VQ/opening setup here no matter what!",
      "confirmedCount": 0
    },
    "T075": {
      "chance": "Low",
      "window": "Opening",
      "reason": "OPENING DROP AND HEAVY PACK",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "Low",
      "window": "11AM-12AM",
      "reason": "Also selling at open and could go again later in the afternoon!",
      "confirmedCount": 0
    },
    "T077": {
      "chance": "Low",
      "window": "12AM-1PM",
      "reason": "Opening drop first, possible second wave around 12-1!",
      "confirmedCount": 0
    },
    "T078": {
      "chance": "Low",
      "window": "Opening",
      "reason": "HEAVY OPENING LOCK. Product's there and the line will build early",
      "confirmedCount": 0
    },
    "T079": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening drop, should be a solid pack as they’ve held!",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Check at 8AM opening should drop decent amount!",
      "confirmedCount": 0
    },
    "T081": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Likely only release day items here!",
      "confirmedCount": 0
    },
    "T082": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Big stock expected. Usually 1 per SKU and they let people loop back through the line, should move a lot of product!",
      "confirmedCount": 0
    },
    "T083": {
      "chance": "Low",
      "window": "",
      "reason": "1 per SKU, should definitely sell at open and may only have limited amount of stock",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Be ready at open here! You should be able to see stock through the window too expecting a decent drop!",
      "confirmedCount": 0
    },
    "T085": {
      "chance": "Low",
      "window": "Opening",
      "reason": "BIG PRODUCT LOADS. Chairs going down too",
      "confirmedCount": 0
    },
    "T086": {
      "chance": "Low",
      "window": "Opening",
      "reason": "CONFIRMED OPENING DROP. No longer a sleeper, should have solid stock and plenty of items beyond just release day. Line up starts at 10pm",
      "confirmedCount": 0
    },
    "T087": {
      "chance": "Low",
      "window": "",
      "reason": "Selling at open but may just be release day items",
      "confirmedCount": 0
    },
    "T088": {
      "chance": "Low",
      "window": "Opening",
      "reason": "VQ AT OPENING, still sell later in the day but WILL DROP",
      "confirmedCount": 0
    },
    "T089": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Either GS at open or line waits BUT has been trending towards opening / morning time",
      "confirmedCount": 0
    },
    "T090": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Should sell at opening or shortly after!",
      "confirmedCount": 0
    },
    "T091": {
      "chance": "Low",
      "window": "",
      "reason": "Should move but might wait on vendor. Otherwise possible next week. Smaller store that doesn’t get updated as much",
      "confirmedCount": 0
    },
    "T092": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "DROPPING. Chairs + line at open, sells earlier now around 9:30-11",
      "confirmedCount": 0
    },
    "T093": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has come up in guides for Thursdays before, just not recently.",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "Low",
      "window": "",
      "reason": "Early drop expected. Likely to have people here EARLY EARLY as they may have a PACK",
      "confirmedCount": 0
    },
    "T095": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Thursdays before, just not recently.",
      "confirmedCount": 0
    },
    "T096": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "LINE AT OPEN. Hits around 9:30-11:30 PLS don’t let this store or anyone else spin you",
      "confirmedCount": 0
    },
    "T097": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "Lines form early, may just sell at open unless waiting on vendor, but already sold so likely just release items pushed by staff",
      "confirmedCount": 0
    },
    "T166": {
      "chance": "High",
      "window": "Opening",
      "reason": "Look for release day items at open here!",
      "confirmedCount": 5
    },
    "T098": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Will sell later morning around 9:30–11:30 line will be here ready!",
      "confirmedCount": 0
    },
    "T099": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Morning/opening checks for MANY items, 2 per sku here! Saw stock just need to wait on vendor to arrive",
      "confirmedCount": 0
    },
    "T165": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "Sold multiple times, making more of a follow-up than a major priority. Opening is still worthwhile with another sweep around 12-2 if fresh shipment lands.",
      "confirmedCount": 1
    },
    "T100": {
      "chance": "Low",
      "window": "Opening",
      "reason": "SHOULD SELL AT OPEN",
      "confirmedCount": 0
    },
    "T101": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Morning/opening checks for MANY items, 2 per sku here! Saw stock just need to wait on vendor to arrive",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "Medium",
      "window": "2PM-4PM",
      "reason": "Look for vendor to land around 12:30-3pm! If nothing will either hit Tuesday or hold for Friday",
      "confirmedCount": 4
    },
    "T103": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening check for release items, if nothing then rotate for possibly weekend as they do drop weekends here",
      "confirmedCount": 1
    },
    "T104": {
      "chance": "Low",
      "window": "",
      "reason": "Dropping, CHANCE it's at open but if not it'll go midday, listed twice",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "High",
      "window": "Opening",
      "reason": "Morning check, line expected. Should move at open or shortly after for release day items!",
      "confirmedCount": 4
    },
    "T106": {
      "chance": "Low",
      "window": "",
      "reason": "Yorba Linda St - Morning check for release day items only",
      "confirmedCount": 0
    },
    "T107": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Hits most Thursdays, decreasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-05-28. Latest guide note (2026-05-28): Early lines and usually strongest around 11-2. SHOULD FIRE because it seems to have skipped today",
      "confirmedCount": 1
    },
    "T108": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T109": {
      "chance": "Low",
      "window": "12AM-2PM",
      "reason": "1 per SKU likely then again Saturday! Multiple items expected",
      "confirmedCount": 0
    },
    "T110": {
      "chance": "High",
      "window": "Opening",
      "reason": "Also moving to random drops! Expect morning drops either from 8-11 but check any time for now!",
      "confirmedCount": 4
    },
    "T111": {
      "chance": "High",
      "window": "Opening",
      "reason": "Likely at open or late morning but only release jtems",
      "confirmedCount": 7
    },
    "T112": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Jeronimo - 1 per SKU, likely only release day",
      "confirmedCount": 0
    },
    "T113": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T114": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Thursdays, steady trend. 2 confirmed recently. Last confirmed: 2026-06-25. Latest guide note (2026-06-25): Same as Jeronimo. Unfortunately, the 2 major MV stores are grimey/selective with who they sell Pokemon product to.",
      "confirmedCount": 2
    },
    "T115": {
      "chance": "Low",
      "window": "Opening",
      "reason": "1 per SKU, 2 items total, likely open and only release day",
      "confirmedCount": 0
    },
    "T116": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening or a bit after IF they sell. Similar to Signal they may just wait for next week. High risk high reward since 2 per here",
      "confirmedCount": 0
    },
    "T117": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Delivered exactly like expected. becomes more of a lighter follow-up while waiting for the next bigger wave.",
      "confirmedCount": 1
    },
    "T118": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "HUGE PRODUCT + HUGE LINES. 3PM random number draw. Sells around 6pmish",
      "confirmedCount": 2
    },
    "T119": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Either opening or will wait for vendor to arrived mid day ish!",
      "confirmedCount": 1
    },
    "T120": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Both expected at open! Philadelphia will sell 100% if not opening then abut after. Both sleeper stores to hit!",
      "confirmedCount": 0
    },
    "T167": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Thursdays, increasing trend. 1 confirmed recently. Last confirmed: 2026-07-02. Latest guide note (2026-07-02): Store continues saying Friday",
      "confirmedCount": 1
    },
    "T121": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Line forms outside until vendor arrives. SHOULD arrive in the morning but possibly later. Has not really sold it seems!",
      "confirmedCount": 1
    },
    "T122": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Should move at open for release day only as sold already but chance it receives more stock mid day",
      "confirmedCount": 2
    },
    "T123": {
      "chance": "Low",
      "window": "",
      "reason": "Release day items at open here!",
      "confirmedCount": 0
    },
    "T124": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Could follow Eastvale after. Check at open for release day items, then vendor later",
      "confirmedCount": 0
    },
    "T125": {
      "chance": "Low",
      "window": "",
      "reason": "7AM open, solid stock expected. 1 per SKU",
      "confirmedCount": 0
    },
    "T126": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Should drop release day items but sold some other smaller items late afternoon",
      "confirmedCount": 0
    },
    "T127": {
      "chance": "Low",
      "window": "Opening",
      "reason": "OPENING DROP expected but also only release day items",
      "confirmedCount": 0
    },
    "T128": {
      "chance": "Low",
      "window": "",
      "reason": "Morning release day checks",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "DIDN'T HIT. Expect HEAVY lines",
      "confirmedCount": 1
    },
    "T130": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Thursdays before, just not recently.",
      "confirmedCount": 0
    },
    "T131": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Bear Valley - Likely for opening but has been a bit more random",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "Low",
      "window": "Opening",
      "reason": "SHOULD GO AT OPEN, likely FCFS and likely to sell a smaller batch of items",
      "confirmedCount": 0
    },
    "T133": {
      "chance": "Low",
      "window": "",
      "reason": "Stock's already there, should move right at open!",
      "confirmedCount": 0
    },
    "T134": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening drop for release day items!",
      "confirmedCount": 0
    },
    "T135": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T136": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Around 7AM at GS. Expect a real line before open but not too many people super early",
      "confirmedCount": 0
    },
    "T137": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Morning stock expected, heavy lines and expecting a PACK",
      "confirmedCount": 1
    },
    "T138": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Release day items at open!",
      "confirmedCount": 1
    },
    "T139": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Release day items, sold other smaller items",
      "confirmedCount": 0
    },
    "T140": {
      "chance": "High",
      "window": "Opening",
      "reason": "1 per SKU, will sell at open release day items only likely",
      "confirmedCount": 3
    },
    "T141": {
      "chance": "Low",
      "window": "",
      "reason": "Physical line until it stocks later. Easy local option but heads are EARLY EARLY EARLY",
      "confirmedCount": 0
    },
    "T142": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Release day opening drops here!",
      "confirmedCount": 0
    },
    "T143": {
      "chance": "Low",
      "window": "",
      "reason": "Vendor aisle stock. Morning line waits on vendor if store doesn't sell themselves!",
      "confirmedCount": 0
    },
    "T144": {
      "chance": "Low",
      "window": "",
      "reason": "Should move at open with or weekend",
      "confirmedCount": 0
    },
    "T145": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Should sell at opening at GS here easy option for locals",
      "confirmedCount": 0
    },
    "T146": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Thursdays before, just not recently.",
      "confirmedCount": 0
    },
    "T147": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Thursdays, steady trend. 3 confirmed recently. Last confirmed: 2026-06-11.",
      "confirmedCount": 3
    },
    "T148": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T149": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T150": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T151": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T152": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T153": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T154": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T155": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Thursdays before, just not recently.",
      "confirmedCount": 0
    },
    "T156": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T157": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T158": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T159": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Thursdays, steady trend. 1 confirmed recently. Last confirmed: 2026-06-18.",
      "confirmedCount": 1
    },
    "T160": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T161": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has been active on Thursdays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T162": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T163": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T168": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Occasionally hits on Thursdays, decreasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-05-28. Latest guide note (2026-05-28): Two stores. Both have been dropping randomly so may hold for Friday but check 8-10 or 12-3 in case PLEASE",
      "confirmedCount": 1
    },
    "T169": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Both expected at open! Philadelphia will sell 100% if not opening then abut after. Both sleeper stores to hit!",
      "confirmedCount": 0
    },
    "T170": {
      "chance": "Low",
      "window": "",
      "reason": "Locals will be here a bit early should sell!",
      "confirmedCount": 0
    },
    "T171": {
      "chance": "High",
      "window": "3PM-5PM",
      "reason": "Has been active on Thursdays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 2
    },
    "T172": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T173": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T174": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T175": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T176": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T177": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T178": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T179": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T180": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Heads will check opening in case but strongest time is 10-1",
      "confirmedCount": 1
    },
    "T181": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T182": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T183": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Release day and possibly other smaller items at opening!",
      "confirmedCount": 0
    },
    "T184": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T185": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T186": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Store continues telling people they're waiting until Friday, but they sold beforehand. Check 8-10 and ask directly because plans can change quickly.",
      "confirmedCount": 2
    },
    "T187": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T188": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T189": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T190": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T191": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T192": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T193": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T194": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T195": {
      "chance": "Low",
      "window": "",
      "reason": "Open for release day items here and a bit more!",
      "confirmedCount": 0
    }
  },
  "friday": {
    "T001": {
      "chance": "Low",
      "window": "",
      "reason": "Push lowers expectations unless they intentionally held inventory back.",
      "confirmedCount": 0
    },
    "T002": {
      "chance": "Medium",
      "window": "6AM-7AM",
      "reason": "Opening remains worthwhile. Employees have continued confirming inventory before doors open around 6-7am so be early!",
      "confirmedCount": 1
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "One of the biggest bounce-back stores. Extremely overdue and should finally move at opening or shortly after. Keep it in rotation because multiple waves are always possible.",
      "confirmedCount": 2
    },
    "T004": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Vendor never stocked, making one of the better vendor watches. Check opening, then stay through the normal vendor window because they could easily circle back.",
      "confirmedCount": 1
    },
    "T005": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Already has sold so expectations come down slightly. Still capable of a random employee push.",
      "confirmedCount": 0
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "One of 's biggest priorities. Store is becoming extremely overdue and Friday continues matching it perfectly if not right at opening then later",
      "confirmedCount": 4
    },
    "T007": {
      "chance": "Low",
      "window": "",
      "reason": "Morning employee push remains possible here reminder this store purposely spins or will sell after a line clears",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "Medium",
      "window": "8AM-10AM",
      "reason": "Still hasn't stocked Pokémon and immediately becomes one of the stronger SGV targets. Opening through the 8-10 vendor window is where I'd focus.",
      "confirmedCount": 1
    },
    "T009": {
      "chance": "Low",
      "window": "",
      "reason": "Has sold so expectations cool off, although held-back inventory remains possible.",
      "confirmedCount": 0
    },
    "T010": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening remains strongest but this store continues unloading inventory in batches throughout the day.",
      "confirmedCount": 2
    },
    "T011": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Still one of the better SGV stores. Product has been moving lightly all week so expect more inventory to come out as they have!",
      "confirmedCount": 1
    },
    "T012": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening employee push continues looking likely. Chairs are already forming and inventory is here.",
      "confirmedCount": 2
    },
    "T013": {
      "chance": "Low",
      "window": "",
      "reason": "Extremely overdue. One of the strongest Friday plays after staying quiet all week.",
      "confirmedCount": 0
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "Another overdue location. Opening becomes much stronger after staying quiet",
      "confirmedCount": 2
    },
    "T015": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Never remove this store from rotation. Opening remains strongest but late waves continue happening regularly.",
      "confirmedCount": 1
    },
    "T016": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Quiet sleeper again. Opening remains the best chance or weekend",
      "confirmedCount": 0
    },
    "T017": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Morning first, then another look later in the day if vendor timing slips. People will continue checking regardless.",
      "confirmedCount": 2
    },
    "T018": {
      "chance": "High",
      "window": "Opening",
      "reason": "Afternoon continues fitting this store best. Focus mainly from 1-4 but store hit Friday so less likely",
      "confirmedCount": 2
    },
    "T019": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 1 confirmed recently. Last confirmed: 2026-07-03.",
      "confirmedCount": 1
    },
    "T020": {
      "chance": "High",
      "window": "9AM-10AM",
      "reason": "Opening first, but if they send everyone away don't give up. Circle back a line will form around 9-10am like it did and people will WAIT until it hits which is now way overdue",
      "confirmedCount": 4
    },
    "T021": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Strong 7AM opening option has only sold light items!",
      "confirmedCount": 2
    },
    "T022": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has hit on Fridays, but rarely, decreasing trend. Typically Opening. Last confirmed: 2025-11-14. Latest guide note (2026-06-19): Should sell at opening here 7am as well!",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening first and ask Guest Services. If they tell everyone no, swing back shortly after because this store continues favoring Wednesday and Friday releases.",
      "confirmedCount": 0
    },
    "T024": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Already sold a larger batch, but smaller follow-up waves are possible.",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Fridays continue matching this location well and it still hasn't really gotten going. Skipped but has not seemed to hit yet!",
      "confirmedCount": 0
    },
    "T026": {
      "chance": "Medium",
      "window": "1PM-3PM",
      "reason": "Didn’t seem to sell so primed!",
      "confirmedCount": 1
    },
    "T027": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Opening and 9-11 remain the strongest windows. Store receives large shipments and continues holding inventory back between waves and has not hit since Tuesday!",
      "confirmedCount": 0
    },
    "T028": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Both stores remain worthwhile. Timing could be opening or later in the afternoon, so keep both in rotation.",
      "confirmedCount": 1
    },
    "T029": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally hits on Fridays, increasing trend. Typically Opening. Last confirmed: 2026-03-27. Latest guide note (2026-06-26): Two stores here and may be either opening or afternoon! Heads will check regardless at both",
      "confirmedCount": 0
    },
    "T030": {
      "chance": "High",
      "window": "Opening",
      "reason": "Large back stock remains here. Expect locals before the 7AM opening and be ready for either FCFS or another random morning release.",
      "confirmedCount": 5
    },
    "T031": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Best windows remain 10-12 and again 3-6 but this would likely only be held back product",
      "confirmedCount": 0
    },
    "T032": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Another smaller store worth adding into the rotation. Limited inventory but definitely capable of surprising at opening.",
      "confirmedCount": 0
    },
    "T033": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Timing has shifted toward earlier releases lately. Did hit but can chef",
      "confirmedCount": 1
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Friday usually means either an opening VQ or FCFS release. Get there early because locals will already be lined up.",
      "confirmedCount": 1
    },
    "T035": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Smaller-format store that deserves more eyes. Quiet sleeper opening check if you're nearby.",
      "confirmedCount": 0
    },
    "T036": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening remains the expectation whether they choose FCFS or VQ. Expect another very early crowd.",
      "confirmedCount": 2
    },
    "T037": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "New pattern continues. Opening through roughly 9:30 remains your best opportunity although they may hold here since release week next friday",
      "confirmedCount": 1
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "Stayed quiet again, making it one of 's stronger priorities. Heavy opening focus with another pass later if needed.",
      "confirmedCount": 4
    },
    "T039": {
      "chance": "Medium",
      "window": "10AM-12AM",
      "reason": "Still doesn't appear to have really dropped. Opening immediately becomes one of the better checks if not then 10-12",
      "confirmedCount": 1
    },
    "T040": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 3 confirmed recently. Last confirmed: 2026-06-19.",
      "confirmedCount": 3
    },
    "T041": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 1 confirmed recently. Last confirmed: 2026-05-29.",
      "confirmedCount": 1
    },
    "T042": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T043": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Classic Wednesday behavior continues. Be ready early because this store can surprise with either opening FCFS, VQ, or an early morning release. Looking for updates here.",
      "confirmedCount": 1
    },
    "T044": {
      "chance": "High",
      "window": "7-10am",
      "reason": "Hits Fridays fairly often, decreasing trend. 1 confirmed recently. Typically 7-10am. Last confirmed: 2026-07-03. Latest guide note (2026-07-03): Morning look in case inventory was held back but there are probably stronger targets available.",
      "confirmedCount": 1
    },
    "T045": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Finally has sold! May have small held back stock but likely",
      "confirmedCount": 0
    },
    "T046": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Smaller Target that deserves more attention. Good sleeper opening/morning check if you're already in the area.",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 2 confirmed recently. Last confirmed: 2026-07-03. Latest guide note (2026-07-03): Last week sold on Friday around 9-11 so please keep eyes here!",
      "confirmedCount": 2
    },
    "T048": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Both deserve another opening look but have sold. Would lean Firestone since Imperial may have has sold",
      "confirmedCount": 1
    },
    "T049": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Both deserve another opening look but have sold. Would lean Firestone since Imperial may have has sold",
      "confirmedCount": 0
    },
    "T050": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T051": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 1 confirmed recently. Last confirmed: 2026-06-12.",
      "confirmedCount": 1
    },
    "T164": {
      "chance": "Low",
      "window": "Opening",
      "reason": "New location that deserves attention as they have been selling more fairly now! Store appears to hold inventory back and release smaller amounts, making it one to begin tracking closely usually mid day or after. Release days at opening",
      "confirmedCount": 0
    },
    "T052": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Sold this afternoon as expected, making a lighter follow-up than Sunset.",
      "confirmedCount": 1
    },
    "T053": {
      "chance": "Low",
      "window": "1PM-4PM",
      "reason": "Both have sold sporadically throughout the week, so expectations are a bit lighter. Still worth checking because held-back inventory remains possible.",
      "confirmedCount": 0
    },
    "T054": {
      "chance": "Low",
      "window": "9AM-10AM",
      "reason": "7AM opening stop and another look around 9-10.",
      "confirmedCount": 0
    },
    "T055": {
      "chance": "Medium",
      "window": "3PM-5PM",
      "reason": "Has not sold but HAS POKE check!",
      "confirmedCount": 2
    },
    "T056": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Biggest sleeper in the area. Still hasn't sold all week, making opening one of the strongest opportunities.",
      "confirmedCount": 1
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "Received additional shipment. Check right at opening unless they quietly move inventory. One of the better sleeper checks.",
      "confirmedCount": 2
    },
    "T058": {
      "chance": "Low",
      "window": "10AM-12AM",
      "reason": "Opening first, then another pass around 10-12. They receive shipment 3x a week",
      "confirmedCount": 0
    },
    "T059": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Better suited for 9-11 than opening. Keep it as a secondary stop unless you're already nearby.",
      "confirmedCount": 0
    },
    "T060": {
      "chance": "High",
      "window": "9AM-11AM",
      "reason": "Fridays continue fitting this location. Opening is preferred, but don't leave before checking again around 9-11.",
      "confirmedCount": 2
    },
    "T061": {
      "chance": "Low",
      "window": "9AM-11AM",
      "reason": "Due for a release. Look for an opening push or the usual 9-11 shipment window.",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "Medium",
      "window": "11AM-2PM",
      "reason": "Shipment-based location. Opening first, then another heavy look around 11-2 and did not hit so DUE",
      "confirmedCount": 1
    },
    "T063": {
      "chance": "Low",
      "window": "4AM-5AM",
      "reason": "Fridays continue fitting this location well line up starts at 4-5am",
      "confirmedCount": 0
    },
    "T064": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Friday mornings continue matching this store best. Opening remains likely",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "Medium",
      "window": "12AM-2PM",
      "reason": "Opening remains the priority, then circle back around 12-2 if nothing develops early. Reminder this one may have shifted to Fridays so let’s see how it plays out 7am opening. Some people have tried to start a “list”",
      "confirmedCount": 1
    },
    "T066": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening first, then keep it in rotation because smaller batches can still appear later in the day here",
      "confirmedCount": 1
    },
    "T067": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has moved to Friday morning drops again it seems!",
      "confirmedCount": 1
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "Friday through Sunday remains the strongest stretch. Opening first, then another pass later in the evening or the weekend too",
      "confirmedCount": 2
    },
    "T069": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening remains the play and expect chairs before doors open.",
      "confirmedCount": 1
    },
    "T070": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Both remain worthwhile checks at opening, but keep in mind either location could simply hold inventory for next week's larger release instead especially at 11051.",
      "confirmedCount": 0
    },
    "T071": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Both remain worthwhile checks at opening, but keep in mind either location could simply hold inventory for next week's larger release instead especially at 11051.",
      "confirmedCount": 0
    },
    "T072": {
      "chance": "Low",
      "window": "",
      "reason": "Has been more sporadic feel free to check but they have been selling more randomly",
      "confirmedCount": 0
    },
    "T073": {
      "chance": "Medium",
      "window": "8AM-10AM",
      "reason": "Has fully leaned into Friday drops. Opening is the priority, then another run around 8-10 and again from 2-5 if needed as usually they can go multiple rounds",
      "confirmedCount": 1
    },
    "T074": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Has shifted almost entirely toward Fridays. Opening should be busy and locals will already be waiting.",
      "confirmedCount": 0
    },
    "T075": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Cochran has become one of the better Friday stores and should have a LARGE pack. Madera remains more of a late morning into midday location.",
      "confirmedCount": 1
    },
    "T076": {
      "chance": "Low",
      "window": "11AM-12AM",
      "reason": "Cochran has become one of the better Friday stores and should have a LARGE pack. Madera remains more of a late morning into midday location.",
      "confirmedCount": 0
    },
    "T077": {
      "chance": "Low",
      "window": "",
      "reason": "Morning first, then another pass later in the afternoon.",
      "confirmedCount": 0
    },
    "T078": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Can check morning time but may be stronger options",
      "confirmedCount": 0
    },
    "T079": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Has become much more random lately. Opening is still worthwhile, although Fridays haven't been as automatic recently.",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "Low",
      "window": "Opening",
      "reason": "If inventory stayed quiet this becomes a solid opening option.",
      "confirmedCount": 0
    },
    "T081": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 3 confirmed recently. Last confirmed: 2026-06-26.",
      "confirmedCount": 3
    },
    "T082": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Friday opening continues matching this store well with chairs expected.",
      "confirmedCount": 0
    },
    "T083": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has shifted heavily toward Friday drops. Morning remains the best bet",
      "confirmedCount": 1
    },
    "T084": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Basically an everyday opening check now. Continues finding ways to move inventory and is always worth a quick stop.",
      "confirmedCount": 0
    },
    "T085": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Strong Friday opening option with people already expected as well.",
      "confirmedCount": 2
    },
    "T086": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Friday lock. Official line can't form until 10PM, but people wait throughout the parking lot beforehand and rush over once they're allowed. Expect another opening drop.",
      "confirmedCount": 1
    },
    "T087": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 2 confirmed recently. Last confirmed: 2026-07-03.",
      "confirmedCount": 2
    },
    "T088": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Morning VQ remains the expectation. Long lines should be forming before opening.",
      "confirmedCount": 1
    },
    "T089": {
      "chance": "Low",
      "window": "8AM-9AM",
      "reason": "Friday continues matching this store well. Expect activity between 8-9 and a much stronger sell than 's opening-only release.",
      "confirmedCount": 0
    },
    "T090": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening VQ or immediate FCFS remains the expectation. did a straight fcfs line",
      "confirmedCount": 1
    },
    "T091": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T092": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Like Costa Mesa Harbor, expect early chairs and plenty of people waiting. Store has been selling earlier lately!",
      "confirmedCount": 1
    },
    "T093": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Only sold Needoh early check unless they choose to hold!",
      "confirmedCount": 2
    },
    "T095": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Should be releasing after holding back",
      "confirmedCount": 0
    },
    "T096": {
      "chance": "Medium",
      "window": "9AM-11AM",
      "reason": "Stay on it from roughly 9-11. Store loves giving mixed information, so don't leave after the first answer.",
      "confirmedCount": 1
    },
    "T097": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T166": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Due for another wave of inventory. One of the stronger Orange County checks after staying quiet with only weak stock.",
      "confirmedCount": 0
    },
    "T098": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Expect another line before opening as drop earlier was light! Staff should confirm",
      "confirmedCount": 0
    },
    "T099": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Continues holding inventory back. Opening remains worthwhile, then rotate back throughout the day because this store rarely unloads everything at once.",
      "confirmedCount": 2
    },
    "T165": {
      "chance": "Medium",
      "window": "11AM-2PM",
      "reason": "Shipment should be landing and this store continues fitting Friday well. Opening first, then another look around 11-2 because it stocks after they receive so could even do multiple rounds",
      "confirmedCount": 2
    },
    "T100": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of 's stronger Orange County opening checks. Stock is already sitting there and another long line should be waiting before doors open.",
      "confirmedCount": 1
    },
    "T101": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the most reliable Friday stores. Could choose VQ or FCFS at opening, so be prepared for either.",
      "confirmedCount": 1
    },
    "T102": {
      "chance": "Low",
      "window": "1PM-4PM",
      "reason": "Didn't appear to move, making another worthwhile check. Opening first, then another pass around 1-4 if nothing develops.",
      "confirmedCount": 0
    },
    "T103": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Good opening option. Inventory has been lighter lately but there's still room for another solid release.",
      "confirmedCount": 1
    },
    "T104": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Lower odds than nearby stores but still worth checking. Small batches remain possible if inventory carried over.",
      "confirmedCount": 1
    },
    "T105": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Morning remains the best opportunity. Store has been lighter but still feels capable of selling much more. Expect opening checks and another pass later if needed.",
      "confirmedCount": 0
    },
    "T106": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Morning remains the best play. Can be a bit more random especially on non release week but expected to sell either morning or mid day",
      "confirmedCount": 1
    },
    "T107": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Crowds usually build between. Store still feels positioned to move more inventory that should hit either opening or late morning",
      "confirmedCount": 1
    },
    "T108": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Historically this location prefers holding inventory until Monday.",
      "confirmedCount": 1
    },
    "T109": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has inventory waiting to be sold. Opening becomes one of the better Orange County plays with heads expected before doors open.",
      "confirmedCount": 2
    },
    "T110": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Occasionally hits on Fridays, decreasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-06-19. Latest guide note (2026-06-19): Moved today’s drop to tomorrow. Expect heads early and treat it like a real morning priority and again no lining up before 6am",
      "confirmedCount": 1
    },
    "T111": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has leaned more toward Thursdays lately. Feel free to peek at opening, but feels like the stronger opportunity.",
      "confirmedCount": 1
    },
    "T112": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Both already sold but are likely to receive more shipment! Whether it hits opening or later",
      "confirmedCount": 0
    },
    "T113": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T114": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Both already sold but are likely to receive more shipment! Whether it hits opening or later",
      "confirmedCount": 0
    },
    "T115": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Strong opening option with another worthwhile check later if the morning stays quiet.",
      "confirmedCount": 0
    },
    "T116": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T117": {
      "chance": "High",
      "window": "",
      "reason": "Has hit on Fridays, but rarely, increasing trend. 1 confirmed recently. Last confirmed: 2026-06-26. Latest guide note (2026-06-26): Morning through 11 remains strongest with another possible window around 2-4.",
      "confirmedCount": 1
    },
    "T118": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "No longer doing the Friday lottery. Sold FCFS, so becomes more of an opening follow-up in case held-back inventory remains.",
      "confirmedCount": 2
    },
    "T119": {
      "chance": "Low",
      "window": "",
      "reason": "One of the better Orange County priorities. Still doesn't appear to have really dropped and continues looking overdue whether employees sell or the vendor handles it.",
      "confirmedCount": 0
    },
    "T120": {
      "chance": "Low",
      "window": "12AM-3PM",
      "reason": "Already sold, making expectations lighter heading into.",
      "confirmedCount": 0
    },
    "T167": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T121": {
      "chance": "High",
      "window": "11AM-1PM",
      "reason": "Can check in case of any held back product but has been selling",
      "confirmedCount": 3
    },
    "T122": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Already has sold, so becomes more of a follow-up check instead of a major priority.",
      "confirmedCount": 2
    },
    "T123": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Fridays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-19.",
      "confirmedCount": 1
    },
    "T124": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 1 confirmed recently. Last confirmed: 2026-06-12.",
      "confirmedCount": 1
    },
    "T125": {
      "chance": "Low",
      "window": "",
      "reason": "Have dropped a couple times seems to be pushing by employees so check for a batch!",
      "confirmedCount": 0
    },
    "T126": {
      "chance": "High",
      "window": "7PM-9PM",
      "reason": "Only sold Monday it seems to primed for a bigger drop!",
      "confirmedCount": 2
    },
    "T127": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Arlington sold yesterday but should have a bit more. Canyon is due!",
      "confirmedCount": 0
    },
    "T128": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "Low",
      "window": "",
      "reason": "Has sold but inventory looked lighter than as they sold two other days already. If they sell would be light",
      "confirmedCount": 0
    },
    "T130": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has come up in guides for Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T131": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "Medium",
      "window": "12PM-2PM",
      "reason": "Already sold a bit store is not the most consistent for Fridays. People will check regardless",
      "confirmedCount": 1
    },
    "T133": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Only pushed small inventory it seems. still feels very due.",
      "confirmedCount": 4
    },
    "T134": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening drop for release day items!",
      "confirmedCount": 4
    },
    "T135": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T136": {
      "chance": "Medium",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 1 confirmed recently. Last confirmed: 2026-07-03. Latest guide note (2026-07-03): Check in at open! 7-9 in general here",
      "confirmedCount": 1
    },
    "T137": {
      "chance": "High",
      "window": "Opening",
      "reason": "Occasionally hits on Fridays, increasing trend. 2 confirmed recently. Typically Opening. Last confirmed: 2026-07-03. Latest guide note (2026-07-03): Sold today a bigger pack so tomorrow may not drop tomorrow",
      "confirmedCount": 2
    },
    "T138": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening remains worthwhile, but timing can still shift randomly.",
      "confirmedCount": 2
    },
    "T139": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening continues looking strongest as shipment came in but Poke was held back!",
      "confirmedCount": 3
    },
    "T140": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T141": {
      "chance": "High",
      "window": "Opening",
      "reason": "Pushed out some product Wednesday mid day! Can check in for more but may be light",
      "confirmedCount": 2
    },
    "T142": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Fridays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-05-29.",
      "confirmedCount": 1
    },
    "T143": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T144": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T145": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Should sell at opening at GS here easy option for locals",
      "confirmedCount": 2
    },
    "T146": {
      "chance": "High",
      "window": "",
      "reason": "Occasionally hits on Fridays, steady trend. 2 confirmed recently. Last confirmed: 2026-07-03.",
      "confirmedCount": 2
    },
    "T147": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Fridays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-05-29.",
      "confirmedCount": 1
    },
    "T148": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T149": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T150": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T151": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T152": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has been active on Fridays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T153": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T154": {
      "chance": null,
      "window": "",
      "reason": "No current read — nothing recent enough to go on. Has hit on Fridays before, just not recently.",
      "confirmedCount": 0
    },
    "T155": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T156": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T157": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T158": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T159": {
      "chance": "Medium",
      "window": "",
      "reason": "Has hit on Fridays, but rarely, steady trend. 1 confirmed recently. Last confirmed: 2026-06-05.",
      "confirmedCount": 1
    },
    "T160": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T161": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T162": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has been active on Fridays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T163": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T168": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Occasionally hits on Fridays, decreasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-06-26. Latest guide note (2026-06-26): Two stores, possible for some items with a slight lean to Grand but usually both would hold for Monday ```",
      "confirmedCount": 1
    },
    "T169": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Philadelphia hit in the mei if. Check from 8-11, then circle back 1-4 if nothing develops. Grand remains random but also hit after Philly!",
      "confirmedCount": 1
    },
    "T170": {
      "chance": "High",
      "window": "Opening",
      "reason": "Has hit on Fridays, but rarely, increasing trend. 1 confirmed recently. Typically Opening. Last confirmed: 2026-05-29. Latest guide note (2026-06-19): Expect people staged before doors open. Get there early.",
      "confirmedCount": 1
    },
    "T171": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T172": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T173": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T174": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T175": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T176": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T177": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Has been active on Fridays recently — check opening and rotate as inventory can land throughout the day.",
      "confirmedCount": 1
    },
    "T178": {
      "chance": "Low",
      "window": "",
      "reason": "Set to receive stock! If not in the morning should hit late!",
      "confirmedCount": 0
    },
    "T179": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T180": {
      "chance": "High",
      "window": "Opening",
      "reason": "Heads will check opening in case but strongest time is 10-1",
      "confirmedCount": 2
    },
    "T181": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T182": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T183": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "No sell so expected for a bigger drop! If not opening mid day",
      "confirmedCount": 1
    },
    "T184": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T185": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T186": {
      "chance": "Low",
      "window": "8AM-10AM",
      "reason": "May have has sold despite continuing to tell people they're waiting for Friday. Definitely check because this store has been selling before the date they advertise.",
      "confirmedCount": 0
    },
    "T187": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T188": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T189": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T190": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T191": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T192": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T193": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T194": {
      "chance": null,
      "window": "",
      "reason": "",
      "confirmedCount": 0
    },
    "T195": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Open for release day items here and a bit more!",
      "confirmedCount": 1
    }
  }
};
