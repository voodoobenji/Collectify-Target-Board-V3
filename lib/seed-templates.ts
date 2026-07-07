import type { Chance } from "./types";

export interface SeedEntry {
  chance: Chance;
  window: string;
  reason: string;
  confirmedCount: number;
}

export const SEED_TEMPLATES: Record<string, Record<string, SeedEntry>> = {
  "monday": {
    "T055": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 8% of Mondays (3/38), increasing trend. 2 confirmed recently. Predicted in guides 11% of the time. Typically Opening. Latest guide note (2026-07-06): More likely for Tuesdays/Wednesday but check 12-3 in case",
      "confirmedCount": 2
    },
    "T050": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 71% of Mondays (27/38), steady trend. 5 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-06): Monday reputation remains solid still. People here before opening! Store has shifted some weeks but overall it starts tomorrow. If the...",
      "confirmedCount": 5
    },
    "T059": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 8% of Mondays (3/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Mondays (2/38), increasing trend. 1 confirmed recently. Predicted in guides 11% of the time. Typically Opening. Latest guide note (2026-07-06): Can check at opening but most likely time IF they receive tomorrow would be around mid day so heavy checks from 1:30-4 or evening time",
      "confirmedCount": 1
    },
    "T167": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 13% of Mondays (5/38), predicted in guides 11%.",
      "confirmedCount": 0
    },
    "T124": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 13% of Mondays (5/38), increasing trend. 1 confirmed recently. Predicted in guides 37% of the time. Latest guide note (2026-07-06): Has been hitting Tuesday\u2019s more consistently here",
      "confirmedCount": 1
    },
    "T168": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 63% of Mondays (24/38), decreasing trend. 3 confirmed recently. Predicted in guides 24% of the time. Typically Opening. Latest guide note (2026-07-06): Same as Philly check in at opening",
      "confirmedCount": 3
    },
    "T147": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 8% of Mondays (3/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T002": {
      "chance": "High",
      "window": "6-7:30am",
      "reason": "Confirmed hit 3% of Mondays (1/38), increasing trend. Predicted in guides 18% of the time. Typically 6-7:30am. Latest guide note (2026-07-06): Holds stock back and usually sells morning times at opening. Heads stay here for employees to confirm if they\u2019ll have anything around 6-7:30am.",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 32% of Mondays (12/38), increasing trend. 6 confirmed recently. Predicted in guides 8% of the time. Latest guide note (2026-07-06): Most activity continues showing up between 10-12 with people lingering it before.",
      "confirmedCount": 6
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 8% of Mondays (3/38), increasing trend. 2 confirmed recently. Predicted in guides 16% of the time. Typically Opening. Latest guide note (2026-07-06): Opening can pay off for anything held back, but this location stays unpredictable. Tuesday\u2019s/Wednesdays still look like the best days...",
      "confirmedCount": 2
    },
    "T109": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 24% of Mondays (9/38), predicted in guides 63%.",
      "confirmedCount": 0
    },
    "T032": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T127": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Mondays (2/38), increasing trend. Predicted in guides 13% of the time. Latest guide note (2026-07-06): Another option to check usually after Ventura Main in case they receive! Usually around 11-1 or a bit after",
      "confirmedCount": 0
    },
    "T006": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 11%.",
      "confirmedCount": 0
    },
    "T135": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Mondays (1/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T049": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 5% of Mondays (2/38), predicted in guides 24%.",
      "confirmedCount": 0
    },
    "T053": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Mondays (0/38), predicted in guides 47%.",
      "confirmedCount": 0
    },
    "T107": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Mondays (0/38), predicted in guides 8%.",
      "confirmedCount": 0
    },
    "T072": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Mondays (0/38), predicted in guides 42%.",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 13% of Mondays (5/38), decreasing trend. 2 confirmed recently. Predicted in guides 50% of the time. Latest guide note (2026-06-29): Typically Tuesdays sometimes Weds here",
      "confirmedCount": 2
    },
    "T036": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 58% of Mondays (22/38), increasing trend. 1 confirmed recently. Predicted in guides 32% of the time. Typically Opening. Latest guide note (2026-07-06): Random timing has become the norm here. That makes opening worth checking, but don't forget the 10-12 and 2-4 windows.",
      "confirmedCount": 1
    },
    "T037": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Mondays (2/38), increasing trend. 1 confirmed recently. Predicted in guides 5% of the time. Typically Opening. Latest guide note (2026-06-15): Still waiting to drop. Usually opening or 9-11 when it finally happens so stay alert",
      "confirmedCount": 1
    },
    "T007": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 50% of Mondays (19/38), increasing trend. 4 confirmed recently. Predicted in guides 79% of the time. Typically Opening. Latest guide note (2026-07-06): Tell you all the time this store hits Mondays. Whether employees push or vendor shows some activity will hit either 8-10 (a bit aft...",
      "confirmedCount": 4
    },
    "T112": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 16% of Mondays (6/38), increasing trend. 1 confirmed recently. Predicted in guides 11% of the time. Latest guide note (2026-06-15): Start with Alicia then slide over to Jeronimo. Usually one goes during the morning while the other lands later from 11-2```",
      "confirmedCount": 1
    },
    "T083": {
      "chance": "High",
      "window": "8-10am",
      "reason": "Confirmed hit 24% of Mondays (9/38), decreasing trend. 2 confirmed recently. Predicted in guides 82% of the time. Typically 8-10am. Latest guide note (2026-06-29): Both morning and evening work. Slight lean toward later checks or possibly Tuesday. Store holds and sells small batches as you saw th...",
      "confirmedCount": 2
    },
    "T069": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Mondays (2/38), decreasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Latest guide note (2026-06-01): Usually later in the week here!",
      "confirmedCount": 1
    },
    "T078": {
      "chance": "Medium",
      "window": "5-8pm",
      "reason": "Confirmed hit 21% of Mondays (8/38), increasing trend. Predicted in guides 18% of the time. Typically 5-8pm. Latest guide note (2026-06-15): Morning, 12-3, and 6-7 all remain solid. Usually not a Monday store but still worth checking",
      "confirmedCount": 0
    },
    "T022": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Mondays (5/38), decreasing trend. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-06-15): Traditionally one of the stronger Monday/Tuesday stores and it stayed quiet this morning. Be there for the 7AM open and see if it hits",
      "confirmedCount": 0
    },
    "T136": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 42%.",
      "confirmedCount": 0
    },
    "T079": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 16% of Mondays (6/38), increasing trend. 2 confirmed recently. Predicted in guides 16% of the time. Latest guide note (2026-06-29): Usually Monday or Wednesday action. Focus 8-10 then another pass 2-5 if nothing develops",
      "confirmedCount": 2
    },
    "T047": {
      "chance": "High",
      "window": "4-6AM",
      "reason": "Confirmed hit 34% of Mondays (13/38), increasing trend. 5 confirmed recently. Predicted in guides 39% of the time. Typically 4-6AM. Latest guide note (2026-07-06): Still follows Seal Beach more often than not. Expect people waiting early with activity usually landing somewhere around 9-11.",
      "confirmedCount": 5
    },
    "T091": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T082": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T064": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Mondays (3/38), decreasing trend. 1 confirmed recently. Predicted in guides 21% of the time. Latest guide note (2026-06-29): Check for a restock in the morning ! Also early afternoon here",
      "confirmedCount": 1
    },
    "T030": {
      "chance": "High",
      "window": "10am-1pm",
      "reason": "Confirmed hit 11% of Mondays (4/38), steady trend. 2 confirmed recently. Predicted in guides 8% of the time. Typically 10am-1pm. Latest guide note (2026-07-06): Usually will have a VQ Tuesdays and Fridays HOWEVER can be altered so just one person just swing by and ask between 10-2",
      "confirmedCount": 2
    },
    "T126": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 11% of Mondays (4/38), increasing trend. 3 confirmed recently. Predicted in guides 11% of the time. Latest guide note (2026-07-06): Has been hitting multiple times a week! Usually Tuesday\u2019s / Thursdays when they do but can also check tomorrow around 11-1 or 3-5!",
      "confirmedCount": 3
    },
    "T120": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 5% of Mondays (2/38), decreasing trend. 2 confirmed recently. Predicted in guides 24% of the time. Latest guide note (2026-06-29): Usually will drop Tuesday to Thursdays as well",
      "confirmedCount": 2
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Mondays (8/38), increasing trend. 5 confirmed recently. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-07-06): Still one of the busiest stores around. Opening remains strongest, but this location sells as they receive sometimes twice a day! He...",
      "confirmedCount": 5
    },
    "T051": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 61% of Mondays (23/38), increasing trend. 6 confirmed recently. Predicted in guides 76% of the time. Typically Opening. Latest guide note (2026-07-06): Usually picks up overflow traffic from South St. Check early because this location can occasionally beat South St to inventory or r...",
      "confirmedCount": 6
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Mondays (8/38), increasing trend. 4 confirmed recently. Predicted in guides 29% of the time. Typically Opening. Latest guide note (2026-07-06): Store can self push inventory so people are on it constantly. Usually morning time but truly random. Sold today early as well",
      "confirmedCount": 4
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 63% of Mondays (24/38), steady trend. 4 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-06): Lines will form around 9-10:30 for a possible mid day drop! Store at some point is going to switch off this pattern so be ready for cu...",
      "confirmedCount": 4
    },
    "T118": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Mondays (1/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Mondays (2/38), increasing trend. 2 confirmed recently. Predicted in guides 8% of the time. Typically Opening. Latest guide note (2026-07-06): Usually Tuesdays/Thursdays here but did hit late on a Monday Night previously so keep eyes in case they get a mid day or late shipment...",
      "confirmedCount": 2
    },
    "T101": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Mondays (0/38), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T017": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T113": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T038": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 5% of Mondays (2/38), predicted in guides 8%.",
      "confirmedCount": 0
    },
    "T073": {
      "chance": "High",
      "window": "10-12:30PM",
      "reason": "Confirmed hit 18% of Mondays (7/38), steady trend. 2 confirmed recently. Predicted in guides 58% of the time. Typically 10-12:30PM. Latest guide note (2026-07-06): BOTH stores have claimed they will be moving to the Friday wave. I will be reminding you to check in case (especially Golden Valley w...",
      "confirmedCount": 2
    },
    "T153": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Mondays (3/38), steady trend. 3 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 3
    },
    "T090": {
      "chance": "Medium",
      "window": "4-6pm",
      "reason": "Confirmed hit 53% of Mondays (20/38), decreasing trend. Predicted in guides 87% of the time. Typically 4-6pm. Latest guide note (2026-06-15): Has been leaning hard toward Fridays. Small amounts have leaked out during the week but nothing major",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "High",
      "window": "2-4:15PM",
      "reason": "Confirmed hit 24% of Mondays (9/38), increasing trend. 4 confirmed recently. Predicted in guides 11% of the time. Typically 2-4:15PM. Latest guide note (2026-07-06): Look for a shipment to hit around 11-1 and store to push around there or 3-5! May be limited or they may hold back stock",
      "confirmedCount": 4
    },
    "T137": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Mondays (0/38), predicted in guides 32%.",
      "confirmedCount": 0
    },
    "T108": {
      "chance": "High",
      "window": "10-11am",
      "reason": "Confirmed hit 82% of Mondays (31/38), steady trend. 6 confirmed recently. Predicted in guides 100% of the time. Typically 10-11am. Latest guide note (2026-07-06): Still one of the better Monday stores around as it\u2019s consistent. People usually commit here early and will wait things.",
      "confirmedCount": 6
    },
    "T010": {
      "chance": "High",
      "window": "6-9pm",
      "reason": "Confirmed hit 18% of Mondays (7/38), decreasing trend. 2 confirmed recently. Predicted in guides 55% of the time. Typically 6-9pm. Latest guide note (2026-06-15): Focus 8-10 or 12-2. Store loves moving product when nobody is paying attention typically hits Tuesday\u2019s but be ready in case! ```",
      "confirmedCount": 2
    },
    "T106": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 24% of Mondays (9/38), increasing trend. 6 confirmed recently. Predicted in guides 21% of the time. Latest guide note (2026-07-06): Afternoon remains the stronger play, especially once nearby stores begin selling and people rotate over (Malvern). Last week sold around 12:30-1:30.",
      "confirmedCount": 6
    },
    "T071": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Mondays (2/38), decreasing trend. Predicted in guides 58% of the time. Latest guide note (2026-06-15): More of a Tuesday-Thursday store right now. Usually gets moving around midday",
      "confirmedCount": 0
    },
    "T029": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 11% of Mondays (4/38), predicted in guides 18%.",
      "confirmedCount": 0
    },
    "T154": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Mondays (1/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T100": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 21%.",
      "confirmedCount": 0
    },
    "T056": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 8% of Mondays (3/38), predicted in guides 68%.",
      "confirmedCount": 0
    },
    "T098": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 13% of Mondays (5/38), steady trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-06): Will most likely hold for a mid week drop.",
      "confirmedCount": 1
    },
    "T170": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 0% of Mondays (0/38), increasing trend. Predicted in guides 3% of the time. Latest guide note (2026-06-15): Checks morning time for shipment here!",
      "confirmedCount": 0
    },
    "T068": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 5% of Mondays (2/38), predicted in guides 21%.",
      "confirmedCount": 0
    },
    "T140": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Mondays (1/38), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-06-15): Look for a morning drop and if nothing expect heads to wait around for possible vendor activity around 11-3```",
      "confirmedCount": 1
    },
    "T066": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 34% of Mondays (13/38), steady trend. 2 confirmed recently. Predicted in guides 34% of the time. Typically Opening. Latest guide note (2026-06-29): BACH TO RANDOM DROPS. Check are best at opening ,12-2, and 6-8 but realistically lang time as store will be random AND multiple times a...",
      "confirmedCount": 2
    },
    "T045": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Mondays (2/38), increasing trend. Predicted in guides 8% of the time. Typically Opening. Latest guide note (2026-06-15): Has not moved yet. Be ready around 9-11 or 1-3 but it can absolutely push later",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Mondays (9/38), decreasing trend. 2 confirmed recently. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-07-06): Store has become much more random recently",
      "confirmedCount": 2
    },
    "T148": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Mondays (5/38), decreasing trend. 2 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-06-22): Last week hit around 4pm but store is random and tends to sell in batches out of guest services! Opening checks at 7am then 11-1 for...",
      "confirmedCount": 2
    },
    "T077": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 8% of Mondays (3/38), increasing trend. 3 confirmed recently. Predicted in guides 11% of the time. Typically Opening. Latest guide note (2026-07-06): Claims to be back to Friday drops!",
      "confirmedCount": 3
    },
    "T033": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 21% of Mondays (8/38), decreasing trend. 2 confirmed recently. Predicted in guides 26% of the time. Latest guide note (2026-07-06): Check for activity 11-2 or after Carson Sepulveda if it stocks",
      "confirmedCount": 2
    },
    "T044": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Mondays (0/38), predicted in guides 53%.",
      "confirmedCount": 0
    },
    "T096": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 26%.",
      "confirmedCount": 0
    },
    "T095": {
      "chance": "High",
      "window": "11-1pm",
      "reason": "Confirmed hit 18% of Mondays (7/38), steady trend. 1 confirmed recently. Predicted in guides 13% of the time. Typically 11-1pm. Latest guide note (2026-06-15): Be ready 10-12 here would imagine it stocks again before the mall!",
      "confirmedCount": 1
    },
    "T122": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 18% of Mondays (7/38), increasing trend. 4 confirmed recently. Predicted in guides 5% of the time. Latest guide note (2026-07-06): Has been hitting MULTIPLE mondays in a row! While this does not mean it will stay like that people will form lines and wait",
      "confirmedCount": 4
    },
    "T138": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 8% of Mondays (3/38), predicted in guides 50%.",
      "confirmedCount": 0
    },
    "T092": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T063": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 26% of Mondays (10/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T123": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 24% of Mondays (9/38), increasing trend. 6 confirmed recently. Predicted in guides 32% of the time. Latest guide note (2026-07-06): Has quietly turned into one of the steadier Monday stores as well. Keep eyes on 9-11 and again from 1-4 but expect heads to be here waiting as well",
      "confirmedCount": 6
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 34% of Mondays (13/38), steady trend. 5 confirmed recently. Predicted in guides 92% of the time. Typically Opening. Latest guide note (2026-07-06): Employee pushes remain the story here. Opening first then continue checking because inventory often comes out little by little.",
      "confirmedCount": 5
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Mondays (2/38), steady trend. 1 confirmed recently. Predicted in guides 8% of the time. Latest guide note (2026-06-29): Check for vendor 12-2 here !",
      "confirmedCount": 1
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 16% of Mondays (6/38), steady trend. 3 confirmed recently. Predicted in guides 66% of the time. Typically Opening. Latest guide note (2026-07-06): Keep these paired together. Opening line will check as many go for Needoh or other items. Both can receive an Excel shipment around 10-1...",
      "confirmedCount": 3
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 68% of Mondays (26/38), steady trend. 4 confirmed recently. Predicted in guides 95% of the time. Typically Opening. Latest guide note (2026-07-06): Hitting Mondays again as I have warned. Heads will be here prior to opening g and wait it out. Vendor may show up early or by mid day u...",
      "confirmedCount": 4
    },
    "T116": {
      "chance": "High",
      "window": "8-12PM",
      "reason": "Confirmed hit 34% of Mondays (13/38), increasing trend. 3 confirmed recently. Predicted in guides 50% of the time. Typically 8-12PM. Latest guide note (2026-07-06): One of OC's most dependable Monday locations. Expect early chairs and people hanging around until inventory finally comes out. Last ...",
      "confirmedCount": 3
    },
    "T061": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 16% of Mondays (6/38), increasing trend. 4 confirmed recently. Predicted in guides 21% of the time. Latest guide note (2026-07-06): UPS shipment should land around 9-10 and then heads will be here hawking it to see if they get excel boxes and sell!",
      "confirmedCount": 4
    },
    "T052": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Mondays (5/38), steady trend. 1 confirmed recently. Predicted in guides 29% of the time. Typically Opening. Latest guide note (2026-06-29): Quick opening look then rerun later in the morning. If tomorrow stays quiet expect stronger Tuesday action around 9-11 or 1-4```",
      "confirmedCount": 1
    },
    "T012": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Mondays (2/38), decreasing trend. 1 confirmed recently. Predicted in guides 24% of the time. Latest guide note (2026-06-22): May be later on in week here",
      "confirmedCount": 1
    },
    "T121": {
      "chance": "High",
      "window": "8-10am",
      "reason": "Confirmed hit 79% of Mondays (30/38), increasing trend. 6 confirmed recently. Predicted in guides 79% of the time. Typically 8-10am. Latest guide note (2026-07-06): Has shifted off of their Monday drops recently. This whole area can really be random so keep eyes in case but as of late Tuesday\u2019s a...",
      "confirmedCount": 6
    },
    "T058": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 11% of Mondays (4/38), increasing trend. 1 confirmed recently. Predicted in guides 24% of the time. Typically Opening. Latest guide note (2026-07-06): Check Broadway in case early. If not PLS rotate Wilshire around 11-1 and Broadway around 12-2 and 3-6",
      "confirmedCount": 1
    },
    "T081": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Mondays (12/38), increasing trend. 3 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-07-06): Vendor timing continues pointing toward 8-10. Expect people waiting early and sticking around longer the later the morning goes.",
      "confirmedCount": 3
    },
    "T171": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 11% of Mondays (4/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T086": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Mondays (0/38), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "High",
      "window": "8-9am",
      "reason": "Confirmed hit 32% of Mondays (12/38), increasing trend. 3 confirmed recently. Predicted in guides 18% of the time. Typically 8-9am. Latest guide note (2026-06-22): Basically adopted Tuesdays. Keep that in mind before camping here Monday although employees can still slide smaller items out",
      "confirmedCount": 3
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Mondays (10/38), steady trend. 1 confirmed recently. Predicted in guides 92% of the time. Typically Opening. Latest guide note (2026-07-06): Has been holding for Friday\u2019s here",
      "confirmedCount": 1
    },
    "T018": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 11% of Mondays (4/38), steady trend. 2 confirmed recently. Predicted in guides 58% of the time. Typically Opening. Latest guide note (2026-07-06): Afternoon remains the better play. Focus 1-4 store should be hitting most likely! Earlier checks as well in case",
      "confirmedCount": 2
    },
    "T039": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 53%.",
      "confirmedCount": 0
    },
    "T133": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 21% of Mondays (8/38), steady trend. 3 confirmed recently. Predicted in guides 13% of the time. Latest guide note (2026-06-29): MONDAY/TUESDAY HITTER. Check morning or 12-2 warned you last week too",
      "confirmedCount": 3
    },
    "T031": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Mondays (7/38), steady trend. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-06-15): Similar setup to Manhattan. Midday and evening remain strongest with 11-1 and 4-7 doing the most damage. Opening can happen but the later windows are usually ...",
      "confirmedCount": 0
    },
    "T110": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Mondays (0/38), predicted in guides 24%.",
      "confirmedCount": 0
    },
    "T134": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 11% of Mondays (4/38), predicted in guides 5%.",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 53% of Mondays (20/38), increasing trend. 5 confirmed recently. Predicted in guides 79% of the time. Typically Opening. Latest guide note (2026-07-06): CHECK AT OPENING. afternoon checks still worthwhile if nothing but store has stock to drop so be ready in case it goes tomorrow",
      "confirmedCount": 5
    },
    "T169": {
      "chance": "High",
      "window": "5-6AM",
      "reason": "Confirmed hit 37% of Mondays (14/38), steady trend. 4 confirmed recently. Predicted in guides 97% of the time. Typically 5-6AM. Latest guide note (2026-07-06): Philadelphia may be shifting back towards Monday so check in! Expect heads to be on it from 8-11 but if nothing check back 1-4! Have stoc...",
      "confirmedCount": 4
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Mondays (8/38), increasing trend. 1 confirmed recently. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-07-06): Has claimed they are saving Poke for Fridays. Can check for other items at opening as they should receive and sell non poke still at...",
      "confirmedCount": 1
    },
    "T166": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 13% of Mondays (5/38), steady trend. 1 confirmed recently. Predicted in guides 5% of the time. Latest guide note (2026-07-06): Has been dropping Mondays here smaller amounts! Check in 9-11, 2-4, and 6-7:30 here!",
      "confirmedCount": 1
    },
    "T089": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Mondays (7/38), increasing trend. 4 confirmed recently. Predicted in guides 26% of the time. Typically Opening. Latest guide note (2026-07-06): Opening has become much more likely lately. Expect heads to be here ready and checking! If nothing then rotate a bit",
      "confirmedCount": 4
    },
    "T142": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Mondays (3/38), increasing trend. 1 confirmed recently. Predicted in guides 5% of the time. Latest guide note (2026-07-06): Vendor tends to hit Monday mornings so be ready around 9-11!",
      "confirmedCount": 1
    },
    "T041": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 18% of Mondays (7/38), predicted in guides 71%.",
      "confirmedCount": 0
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Mondays (12/38), decreasing trend. 1 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-06-29): VQ SHOULD go at opening time",
      "confirmedCount": 1
    },
    "T023": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Mondays (2/38), decreasing trend. 1 confirmed recently. Predicted in guides 16% of the time. Latest guide note (2026-06-29): Store should restock a bit more tomorrow either morning or afternoon by 12-2 if it didn\u2019t push something out today",
      "confirmedCount": 1
    },
    "T114": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T087": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 5% of Mondays (2/38), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Mondays (9/38), decreasing trend. 2 confirmed recently. Predicted in guides 87% of the time. Typically Opening. Latest guide note (2026-07-06): Sneaky option. Usually Tuesday. Opening and midday both deserve attention, this is in case they are holding any Poke back",
      "confirmedCount": 2
    },
    "T131": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 0% of Mondays (0/38), increasing trend. Predicted in guides 3% of the time. Latest guide note (2026-06-15): Store is pushing product on their own so reminder to stay on it!",
      "confirmedCount": 0
    },
    "T130": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 16% of Mondays (6/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T119": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Mondays (1/38), predicted in guides 11%.",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Mondays (1/38), decreasing trend. 1 confirmed recently. Predicted in guides 26% of the time. Latest guide note (2026-07-06): Stores tends to hit either Mondays/Weds usually and typically in afternoon from 2-6. Expect heads to be waiting around a bit before and store sells 2 pe...",
      "confirmedCount": 1
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Mondays (8/38), increasing trend. 1 confirmed recently. Predicted in guides 55% of the time. Typically Opening. Latest guide note (2026-07-06): Becoming much more active throughout the week. Mondays not usually opening but check mid day and evening in case stock hits if not 1...",
      "confirmedCount": 1
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 66% of Mondays (25/38), increasing trend. 6 confirmed recently. Predicted in guides 76% of the time. Typically Opening. Latest guide note (2026-07-06): Opening VQ remains the expectation. Be ready before doors open because this location continues pulling a crowd",
      "confirmedCount": 6
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 34% of Mondays (13/38), steady trend. 3 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-06): Heads will be here at open for whatever they receive! Store will also receive more by mid day and push out randomly",
      "confirmedCount": 3
    },
    "T165": {
      "chance": "High",
      "window": "3-6pm",
      "reason": "Confirmed hit 26% of Mondays (10/38), increasing trend. 1 confirmed recently. Predicted in guides 68% of the time. Typically 3-6pm. Latest guide note (2026-07-06): Naturally leans toward late morning into early afternoon once ship",
      "confirmedCount": 1
    },
    "T093": {
      "chance": "Medium",
      "window": "11AM-2PM",
      "reason": "Confirmed hit 3% of Mondays (1/38), decreasing trend. 1 confirmed recently. Predicted in guides 45% of the time. Typically 11AM-2PM. Latest guide note (2026-07-06): Should restock Weds or Tuesday",
      "confirmedCount": 1
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Mondays (2/38), decreasing trend. 1 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-06-22): Seems to be hitting Wednesday here",
      "confirmedCount": 1
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 39% of Mondays (15/38), increasing trend. 3 confirmed recently. Predicted in guides 82% of the time. Typically Opening. Latest guide note (2026-07-06): Classic wave store. Opening matters but random drops throughout the day continue making every check worth it.",
      "confirmedCount": 3
    },
    "T019": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 5% of Mondays (2/38), steady trend. 2 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 2
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 55% of Mondays (21/38), increasing trend. 5 confirmed recently. Predicted in guides 79% of the time. Typically Opening. Latest guide note (2026-07-06): Opening in case but both stores continue to hit through midday and later afternoon. Again they will hit. At least one of the two wi...",
      "confirmedCount": 5
    },
    "T103": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Mondays (1/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T016": {
      "chance": "Medium",
      "window": "8-9am",
      "reason": "Confirmed hit 0% of Mondays (0/38), increasing trend. Predicted in guides 3% of the time. Typically 8-9am. Latest guide note (2026-06-15): Usually hits Wednesday but last week stocked Monday so checks from 8-9am or 12-3!",
      "confirmedCount": 0
    },
    "T001": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Mondays (18/38), steady trend. 4 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-06): Usually hits after Alhambra pls keep on your radar tomorrow. One or the other should hit in the morning ish time so you\u2019ll have to check",
      "confirmedCount": 4
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 42% of Mondays (16/38), steady trend. 4 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-06): Shipment-driven location. Opening remains your best opportunity but this store hand a DAILY line regardless for non Poke items as well....",
      "confirmedCount": 4
    },
    "T054": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 5% of Mondays (2/38), predicted in guides 5%.",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 21% of Mondays (8/38), decreasing trend. 1 confirmed recently. Predicted in guides 53% of the time. Latest guide note (2026-06-15): Main focus 8-11 for a shipment to land",
      "confirmedCount": 1
    },
    "T139": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Mondays (1/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 39% of Mondays (15/38), steady trend. 3 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-06): Usually around 12-2 and 4-6 IF it ever hits on a Monday. Not usually opening for Mondays",
      "confirmedCount": 3
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Mondays (9/38), increasing trend. 3 confirmed recently. Predicted in guides 66% of the time. Typically Opening. Latest guide note (2026-07-06): Opening continues being the move. This location has shifted into one of the more consistent multi day stores, so expect people check...",
      "confirmedCount": 3
    },
    "T125": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 5% of Mondays (2/38), predicted in guides 16%.",
      "confirmedCount": 0
    },
    "T028": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 13% of Mondays (5/38), steady trend. 2 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 2
    },
    "T155": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Mondays (1/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T013": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Mondays (7/38), decreasing trend. 3 confirmed recently. Predicted in guides 82% of the time. Typically Opening. Latest guide note (2026-07-06): Routes have been strange. Easy store to forget but one of the better backup plays if other routes fail. Usually has been Monday or T...",
      "confirmedCount": 3
    }
  },
  "tuesday": {
    "T055": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Confirmed hit 11% of Tuesdays (4/38), increasing trend. Predicted in guides 13% of the time. Typically 10AM-12PM. Latest guide note (2026-06-30): Can check between 10AM-12PM and between 3PM and 4PM for new stock at guest services. We'll update tomorrow.",
      "confirmedCount": 0
    },
    "T050": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), steady trend. 2 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 2
    },
    "T059": {
      "chance": "High",
      "window": "11AM-1PM",
      "reason": "Confirmed hit 11% of Tuesdays (4/38), increasing trend. 2 confirmed recently. Predicted in guides 3% of the time. Typically 11AM-1PM. Latest guide note (2026-06-30): Been selling frequently between 11AM-1PM at guest services, 1 per SKU. Sleeper check in!",
      "confirmedCount": 2
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 16% of Tuesdays (6/38), increasing trend. 3 confirmed recently. Predicted in guides 29% of the time. Typically Opening. Latest guide note (2026-07-07): Did move some product already but has leftovers confirmed for tomorrow opening",
      "confirmedCount": 3
    },
    "T124": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 39% of Tuesdays (15/38), decreasing trend. 3 confirmed recently. Predicted in guides 87% of the time. Typically Opening. Latest guide note (2026-07-07): Remains one of the biggest focuses. Expect people waiting from opening and sticking around until inventory shows.",
      "confirmedCount": 3
    },
    "T167": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 13% of Tuesdays (5/38), increasing trend. Predicted in guides 61% of the time. Latest guide note (2026-07-07): Store mentioned waiting until Friday but last week sold prior so check 8-10! Ask store they should confirm",
      "confirmedCount": 0
    },
    "T168": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-06-30): Still pushing randomly, sometimes at guest services, so anytime you are free is a decent time to check here. No consistency, they sell when they feel li...",
      "confirmedCount": 1
    },
    "T002": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), increasing trend. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-07-07): Sold some Greninja at opening as posted store can sell constantly as they hold back and push items themselves so people check daily. Employees confirm pri...",
      "confirmedCount": 0
    },
    "T076": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 26% of Tuesdays (10/38), increasing trend. 6 confirmed recently. Predicted in guides 8% of the time. Latest guide note (2026-07-07): Madera hits later in the morning and around midday when they get shoulder",
      "confirmedCount": 6
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Tuesdays (9/38), increasing trend. 4 confirmed recently. Predicted in guides 63% of the time. Typically Opening. Latest guide note (2026-07-07): Main windows remain 9-11 and 12-2. Wednesday still fits this store best, but again stores can switch it up",
      "confirmedCount": 4
    },
    "T109": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Tuesdays (7/38), decreasing trend. 4 confirmed recently. Predicted in guides 39% of the time. Typically Opening. Latest guide note (2026-07-07): Since did not hit be ready 9-11 or 2-5ish check later too. Store has been switching up a bit",
      "confirmedCount": 4
    },
    "T127": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Tuesdays (0/38), predicted in guides 50%.",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), increasing trend. 1 confirmed recently. Predicted in guides 55% of the time. Typically Opening. Latest guide note (2026-07-07): Small chance for morning then another run between 1-4. Not usually Tuesdays but schedule is slightly off",
      "confirmedCount": 1
    },
    "T135": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 18% of Tuesdays (7/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T049": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 8% of Tuesdays (3/38), predicted in guides 21%.",
      "confirmedCount": 0
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Tuesdays (7/38), increasing trend. 3 confirmed recently. Predicted in guides 39% of the time. Typically Opening. Latest guide note (2026-07-07): Worth an opening check again. Store continues flying under the radar and will randomly stock as seen tonight",
      "confirmedCount": 3
    },
    "T053": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), steady trend. Predicted in guides 24% of the time. Typically Opening. Latest guide note (2026-06-30): Same situation and timeframe as WeHo; if anything a bit earlier, as in 10-12. Sells at guest services. This, Galaxy, and WeHo are an easy 1-2-3.",
      "confirmedCount": 0
    },
    "T046": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), increasing trend. 2 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-07): Due for their first shipment of the week. YES, this store gets Poke. Has a small cards area where they stock, check from 12-2.",
      "confirmedCount": 2
    },
    "T107": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), decreasing trend. 1 confirmed recently. Predicted in guides 34% of the time. Latest guide note (2026-06-30): Should hit here Thursday",
      "confirmedCount": 1
    },
    "T036": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 76% of Tuesdays (29/38), increasing trend. 5 confirmed recently. Predicted in guides 68% of the time. Typically Opening. Latest guide note (2026-07-07): Opening VQ remains the expectation. Be there early because people continue committing here.",
      "confirmedCount": 5
    },
    "T072": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), steady trend. Predicted in guides 42% of the time. Typically Opening. Latest guide note (2026-06-30): Has shifted from a Fri store to a random store. Be ready for it to hit randomly tmw or Weds. Check at opening + around 10-12.",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 74% of Tuesdays (28/38), decreasing trend. 3 confirmed recently. Predicted in guides 89% of the time. Latest guide note (2026-06-30): Recently shifted toward midweek drops. Keep an eye on it! 7AM check for a small push, then again between 11-12 and 3-4 for a full stock of the shipme...",
      "confirmedCount": 3
    },
    "T094": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), decreasing trend. 2 confirmed recently. Predicted in guides 32% of the time. Latest guide note (2026-06-23): Random drops now so CHECK IN FROM 8-11 or later on will be RANDOM",
      "confirmedCount": 2
    },
    "T037": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Tuesdays (1/38), predicted in guides 47%.",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 16% of Tuesdays (6/38), decreasing trend. 1 confirmed recently. Predicted in guides 63% of the time. Typically Opening. Latest guide note (2026-06-30): Will either sell tomorrow or Wednesday afternoon. Usually hits between 12:30-2:00 PM. Line forms outside here. This store gets STOC...",
      "confirmedCount": 1
    },
    "T112": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Tuesdays (11/38), increasing trend. 4 confirmed recently. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-06-30): Still due for stock, people will line up here to gamble at opening. This happens everyday. Usually hits Tues/Thurs and some Fri!",
      "confirmedCount": 4
    },
    "T083": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Tuesdays (11/38), increasing trend. 2 confirmed recently. Predicted in guides 55% of the time. Typically Opening. Latest guide note (2026-07-07): Cam check for Needohs and other items at opening but store did claim to move Poke to Fridays only",
      "confirmedCount": 2
    },
    "T069": {
      "chance": "Medium",
      "window": "6-8pm",
      "reason": "Confirmed hit 13% of Tuesdays (5/38), decreasing trend. Predicted in guides 76% of the time. Typically 6-8pm. Latest guide note (2026-06-02): Can have smaller pushes but more likely to be holding. Keep checks lighter",
      "confirmedCount": 0
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Tuesdays (11/38), steady trend. 2 confirmed recently. Predicted in guides 87% of the time. Typically Opening. Latest guide note (2026-07-07): Opening continues looking strongest hits Tuesdays/Fridays should have a PACKA of First Partner and possibly more!",
      "confirmedCount": 2
    },
    "T022": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), increasing trend. 1 confirmed recently. Predicted in guides 79% of the time. Typically Opening. Latest guide note (2026-07-07): Worth an opening stop if nearby, but evening may be slightly better!",
      "confirmedCount": 1
    },
    "T136": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Tuesdays (10/38), decreasing trend. Predicted in guides 84% of the time. Typically Opening. Latest guide note (2026-07-07): Both remain early hitters. Mills especially should have people lined up well before opening. Baker usually hits a bit after around 9-10:30 but stay on it!",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Tuesdays (9/38), increasing trend. 4 confirmed recently. Predicted in guides 29% of the time. Typically Opening. Latest guide note (2026-07-07): Check morning time for a push or a bit after opening people will be here!",
      "confirmedCount": 4
    },
    "T079": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 18% of Tuesdays (7/38), predicted in guides 37%.",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), steady trend. Predicted in guides 55% of the time. Latest guide note (2026-06-30): Did not end up restocking so keep eyes! People will form a line early tmrw, same thing happened last week.",
      "confirmedCount": 0
    },
    "T043": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 11% of Tuesdays (4/38), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T091": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), increasing trend. 2 confirmed recently. Predicted in guides 13% of the time. Latest guide note (2026-07-07): Garfield sold today it seems. Heavy eyes on CM 17th tomorrow from 8-10 or a bit later",
      "confirmedCount": 2
    },
    "T082": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 5% of Tuesdays (2/38), predicted in guides 8%.",
      "confirmedCount": 0
    },
    "T064": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 16% of Tuesdays (6/38), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T126": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), decreasing trend. 2 confirmed recently. Predicted in guides 58% of the time. Typically Opening. Latest guide note (2026-06-30): DID NOT end up stocking today, making them in play for tomorrow. Either at opening or between 12:30-3:30. Lines will form during bot...",
      "confirmedCount": 2
    },
    "T030": {
      "chance": "High",
      "window": "7-8AM",
      "reason": "Confirmed hit 32% of Tuesdays (12/38), steady trend. 1 confirmed recently. Predicted in guides 55% of the time. Typically 7-8AM. Latest guide note (2026-06-30): 7AM check! They unboxed and sold what they received today but there was no Poke. They're likely to do the same tmr but with shipment in ...",
      "confirmedCount": 1
    },
    "T060": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), increasing trend. Predicted in guides 5% of the time. Latest guide note (2026-06-30): DID NOT receive today, leaving them in play for tmrw. Smaller stores receive 2 shipments usually and if it doesn't hit on Mon, it almost ALWAYS hits Tues then Fri.",
      "confirmedCount": 0
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 37% of Tuesdays (14/38), increasing trend. 1 confirmed recently. Predicted in guides 74% of the time. Typically Opening. Latest guide note (2026-07-07): Continues behaving like one of the most active stores around. Opening and 10-12 remain strongest while people wait out shipments.",
      "confirmedCount": 1
    },
    "T120": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), increasing trend. 1 confirmed recently. Predicted in guides 21% of the time. Latest guide note (2026-07-07): One of the stronger Tuesday locations. Best windows remain 12-3 and another look around 5-7. Last week was Monday but should be tomorrow if it didn\u2019t h...",
      "confirmedCount": 1
    },
    "T051": {
      "chance": "Low",
      "window": "",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), steady trend. Predicted in guides 3% of the time. Latest guide note (2026-05-26): South street for VQ at open (but may do Weds). Bloomfield will be a great check for a random from from 12-2 or 3-5 if nothing early!```",
      "confirmedCount": 0
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Tuesdays (7/38), increasing trend. 1 confirmed recently. Predicted in guides 74% of the time. Typically Opening. Latest guide note (2026-07-07): Still one of the stronger employee push stores. Opening is the priority but keep rotating because product can appear throughout the...",
      "confirmedCount": 1
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 63% of Tuesdays (24/38), steady trend. 5 confirmed recently. Predicted in guides 87% of the time. Typically Opening. Latest guide note (2026-07-07): One of the easiest stores to leave in rotation all day. Can always sell some small amounts of product even if it hit today",
      "confirmedCount": 5
    },
    "T111": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 37% of Tuesdays (14/38), predicted in guides 66%.",
      "confirmedCount": 0
    },
    "T118": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 0% of Tuesdays (0/38), increasing trend. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-07-07): Opening, then 10-12, then 5-7 checks until it hits! When it does expect them to STAGGER product out so multiple waves",
      "confirmedCount": 0
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 16% of Tuesdays (6/38), increasing trend. 5 confirmed recently. Predicted in guides 16% of the time. Typically Opening. Latest guide note (2026-07-07): Opening remains one of the better plays. Expect another early crowd waiting before doors open.",
      "confirmedCount": 5
    },
    "T017": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 16% of Tuesdays (6/38), increasing trend. 3 confirmed recently. Predicted in guides 11% of the time. Typically Opening. Latest guide note (2026-07-07): Sleeper option for a morning or afternoon drop! Depends on vendor route but if it gets later heads will line up!",
      "confirmedCount": 3
    },
    "T113": {
      "chance": "Medium",
      "window": "10-12PM",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Typically 10-12PM. Latest guide note (2026-06-30): Often slept on, but definitely not forgotten about by locals. Hits by 10-12PM and gets cleaned quickly. Smaller store that receives m...",
      "confirmedCount": 1
    },
    "T038": {
      "chance": "Medium",
      "window": "8-10am",
      "reason": "Confirmed hit 21% of Tuesdays (8/38), steady trend. 1 confirmed recently. Predicted in guides 11% of the time. Typically 8-10am. Latest guide note (2026-06-16): Check 8-10am or 1-3 in case they get a shipment!",
      "confirmedCount": 1
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Tuesdays (11/38), decreasing trend. 1 confirmed recently. Predicted in guides 92% of the time. Typically Opening. Latest guide note (2026-06-30): It did not hit today so it is in play tmrw. You can check at 7AM but this store usually goes down at opening or 10-12. Sylmar to h...",
      "confirmedCount": 1
    },
    "T153": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 21% of Tuesdays (8/38), steady trend. 2 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 2
    },
    "T151": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 11% of Tuesdays (4/38), steady trend. 2 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 2
    },
    "T090": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 11% of Tuesdays (4/38), predicted in guides 32%.",
      "confirmedCount": 0
    },
    "T143": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 21% of Tuesdays (8/38), increasing trend. Predicted in guides 11% of the time. Latest guide note (2026-06-30): Usually hits Tues/Fri or Sat mornings, Sat more than Fri. People will arrive early. Oftentimes sells via aisle here. Vendor stocks, be early!",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "High",
      "window": "12-1:30PM",
      "reason": "Confirmed hit 13% of Tuesdays (5/38), increasing trend. 1 confirmed recently. Predicted in guides 26% of the time. Typically 12-1:30PM. Latest guide note (2026-07-07): Morning and midday remain strongest unless they quietly sold today!",
      "confirmedCount": 1
    },
    "T137": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Tuesdays (10/38), decreasing trend. 2 confirmed recently. Predicted in guides 74% of the time. Typically Opening. Latest guide note (2026-07-07): May have done a random push today early",
      "confirmedCount": 2
    },
    "T108": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Tuesdays (1/38), predicted in guides 16%.",
      "confirmedCount": 0
    },
    "T010": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 37% of Tuesdays (14/38), steady trend. 4 confirmed recently. Predicted in guides 92% of the time. Typically Opening. Latest guide note (2026-07-07): Start with opening then circle back around 12-2 or even later in the evening. This store loves sitting on inventory",
      "confirmedCount": 4
    },
    "T106": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), increasing trend. 3 confirmed recently. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-07-07): Look for a drop around 9-11 or afternoon here!",
      "confirmedCount": 3
    },
    "T071": {
      "chance": "High",
      "window": "2-3PM",
      "reason": "Confirmed hit 39% of Tuesdays (15/38), increasing trend. 4 confirmed recently. Predicted in guides 61% of the time. Typically 2-3PM. Latest guide note (2026-07-07): Continue treating this as an afternoon store. Noon through evening remains the best stretch and Tuesdays continue fitting this locat...",
      "confirmedCount": 4
    },
    "T029": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 11% of Tuesdays (4/38), increasing trend. 1 confirmed recently. Predicted in guides 29% of the time. Typically Opening. Latest guide note (2026-07-07): Both sold a bit later tonight. Heads check Century daily at opening and they do tend to hold back stock",
      "confirmedCount": 1
    },
    "T154": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T100": {
      "chance": "High",
      "window": "12-1PM",
      "reason": "Confirmed hit 42% of Tuesdays (16/38), increasing trend. 3 confirmed recently. Predicted in guides 63% of the time. Typically 12-1PM. Latest guide note (2026-07-07): Vendor Tuesday followed by Wednesday sales continues fitting this store but check in case as they are overdue from Friday",
      "confirmedCount": 3
    },
    "T056": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), decreasing trend. 1 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-06-16): Check morning time, 8-10 but store plays a lot so can also be randomly like 12-2",
      "confirmedCount": 1
    },
    "T098": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Tuesdays (9/38), increasing trend. Predicted in guides 39% of the time. Typically Opening. Latest guide note (2026-07-07): Ended up hitting today!",
      "confirmedCount": 0
    },
    "T170": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 11% of Tuesdays (4/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 11% of Tuesdays (4/38), increasing trend. 3 confirmed recently. Predicted in guides 61% of the time. Typically Opening. Latest guide note (2026-07-07): Opening is still worthwhile but don't forget the evening window because this location sells when it\u2019s least busy usually",
      "confirmedCount": 3
    },
    "T164": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T140": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Tuesdays (1/38), predicted in guides 5%.",
      "confirmedCount": 0
    },
    "T066": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Tuesdays (11/38), decreasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-06-23): Store is back to random drops so you\u2019ll have to be on it!",
      "confirmedCount": 1
    },
    "T045": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), increasing trend. Predicted in guides 3% of the time. Latest guide note (2026-06-30): Vendor stocked sneakily last Tues night. Check again this week to see if it happens again!",
      "confirmedCount": 0
    },
    "T128": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), decreasing trend. 1 confirmed recently. Predicted in guides 50% of the time. Latest guide note (2026-06-09): Fri",
      "confirmedCount": 1
    },
    "T048": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Tuesdays (7/38), increasing trend. 2 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-07-07): Both locations deserve opening attention. Firestone tends to hit opening or a bit after lately when they do receive",
      "confirmedCount": 2
    },
    "T157": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Tuesdays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T148": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Tuesdays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Tuesdays (5/38), steady trend. 1 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-07): Opening Guest Services check first DONT MISS IT! then work it back into your route around 10-12 and again later if nothijg.",
      "confirmedCount": 1
    },
    "T077": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 13% of Tuesdays (5/38), increasing trend. 4 confirmed recently. Predicted in guides 13% of the time. Latest guide note (2026-06-23): Morning first then hammer the 11-2 window. One of the steadier stores lately.",
      "confirmedCount": 4
    },
    "T033": {
      "chance": "High",
      "window": "10-11AM",
      "reason": "Confirmed hit 32% of Tuesdays (12/38), increasing trend. 4 confirmed recently. Predicted in guides 55% of the time. Typically 10-11AM. Latest guide note (2026-07-07): Biggest timing change lately. Expect action around 8-8:30 if it goes early. If not, don't write it off because this store can stil...",
      "confirmedCount": 4
    },
    "T044": {
      "chance": "High",
      "window": "7-8AM",
      "reason": "Confirmed hit 26% of Tuesdays (10/38), increasing trend. 4 confirmed recently. Predicted in guides 66% of the time. Typically 7-8AM. Latest guide note (2026-07-07): Early 7-8AM look then another sweep around 10-11 heads will be here!",
      "confirmedCount": 4
    },
    "T095": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 53% of Tuesdays (20/38), steady trend. 6 confirmed recently. Predicted in guides 87% of the time. Latest guide note (2026-07-07): Morning VQ continues looking most likely. Expect another early line before the doors even open and VQ to go up shortly after. Vendor around 10ish",
      "confirmedCount": 6
    },
    "T122": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 37% of Tuesdays (14/38), decreasing trend. 3 confirmed recently. Predicted in guides 82% of the time. Latest guide note (2026-06-23): SAME ENERGY AS EASTVALE. These remain major stores to watch for activity people will being WAITING",
      "confirmedCount": 3
    },
    "T138": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), increasing trend. 1 confirmed recently. Predicted in guides 71% of the time. Latest guide note (2026-07-07): Focus stays around 8:30-10:30 but never ignore random employee pushes because they happen here more than most stores.",
      "confirmedCount": 1
    },
    "T092": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 76% of Tuesdays (29/38), steady trend. 4 confirmed recently. Predicted in guides 92% of the time. Typically Opening. Latest guide note (2026-07-07): Was flirting with Friday only drops so check tomorrow in case from 8-10 but expect store to either confirm or deny if that\u2019s the plan",
      "confirmedCount": 4
    },
    "T063": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 16% of Tuesdays (6/38), decreasing trend. 1 confirmed recently. Predicted in guides 37% of the time. Typically Opening. Latest guide note (2026-06-16): Should receive stock tomorrow and is selling randomly again so pls keep eyes!",
      "confirmedCount": 1
    },
    "T123": {
      "chance": "High",
      "window": "8-11AM",
      "reason": "Confirmed hit 18% of Tuesdays (7/38), steady trend. 2 confirmed recently. Predicted in guides 76% of the time. Typically 8-11AM. Latest guide note (2026-07-07): Sleeper location. Could finally move tomorrow or continue waiting for its usual Wednesday rhythm.",
      "confirmedCount": 2
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 39% of Tuesdays (15/38), steady trend. 4 confirmed recently. Predicted in guides 89% of the time. Typically Opening. Latest guide note (2026-07-07): Employee pushes continue making this one of the better SGV stores. Opening remains strongest then check back through midday",
      "confirmedCount": 4
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), decreasing trend. 1 confirmed recently. Predicted in guides 21% of the time. Latest guide note (2026-06-16): Last week hit Tuesday evening instead of Weds! Store has been pushing product themselves so check throughout the day for a switch up!",
      "confirmedCount": 1
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), increasing trend. 2 confirmed recently. Predicted in guides 66% of the time. Typically Opening. Latest guide note (2026-07-07): Still overdue and continues drawing attention every morning. Opening first then continue checking because shipment should eventually...",
      "confirmedCount": 2
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Tuesdays (9/38), increasing trend. 1 confirmed recently. Predicted in guides 34% of the time. Typically Opening. Latest guide note (2026-07-07): One of the better vendor watches tomorrow. Opening deserves attention and if vendor shows expect people to stay until everything is...",
      "confirmedCount": 1
    },
    "T085": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Tuesdays (0/38), predicted in guides 5%.",
      "confirmedCount": 0
    },
    "T116": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 0% of Tuesdays (0/38), increasing trend. Predicted in guides 3% of the time. Latest guide note (2026-06-30): Same situation as Signal Hill. Both stores are due and will be lined up at accordingly. Don't wait to go.```",
      "confirmedCount": 0
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Tuesdays (5/38), increasing trend. 3 confirmed recently. Predicted in guides 13% of the time. Typically Opening. Latest guide note (2026-07-07): Keep watching the normal shipment window around 9-11",
      "confirmedCount": 3
    },
    "T159": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 5% of Tuesdays (2/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T149": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T052": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Tuesdays (8/38), increasing trend. 2 confirmed recently. Predicted in guides 34% of the time. Typically Opening. Latest guide note (2026-07-07): Both stores are OVERDUE and should hit! Focus on Weho a bit more. Best attention remains around 9-11 then again from 1-4.",
      "confirmedCount": 2
    },
    "T012": {
      "chance": "High",
      "window": "8-10AM",
      "reason": "Confirmed hit 16% of Tuesdays (6/38), decreasing trend. 2 confirmed recently. Predicted in guides 50% of the time. Typically 8-10AM. Latest guide note (2026-06-16): Would imagine it goes a bit later in week",
      "confirmedCount": 2
    },
    "T121": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 45% of Tuesdays (17/38), increasing trend. 4 confirmed recently. Predicted in guides 68% of the time. Latest guide note (2026-07-07): One of the area's highest priorities. Timing continues bouncing around so patience will be more important than speed.",
      "confirmedCount": 4
    },
    "T058": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Tuesdays (10/38), increasing trend. 1 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-07): Opening first then another pass around 10-12 in case they get more shipment",
      "confirmedCount": 1
    },
    "T081": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), increasing trend. 1 confirmed recently. Predicted in guides 11% of the time. Typically Opening. Latest guide note (2026-07-07): Tuesday continues matching this store well. Expect another solid turnout early with some heads already here",
      "confirmedCount": 1
    },
    "T171": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T086": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Tuesdays (1/38), predicted in guides 21%.",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Tuesdays (9/38), increasing trend. 4 confirmed recently. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-07-07): Opening remains the move. If they delay don't bail immediately because this location has sold later. Warned last week and hit at op...",
      "confirmedCount": 4
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 39% of Tuesdays (15/38), decreasing trend. 4 confirmed recently. Predicted in guides 89% of the time. Typically Opening. Latest guide note (2026-06-23): Opening, 9-11 and 2-4 remain the key windows. Could still be sitting on additional stock.",
      "confirmedCount": 4
    },
    "T018": {
      "chance": "Medium",
      "window": "1-4PM",
      "reason": "Confirmed hit 24% of Tuesdays (9/38), decreasing trend. 1 confirmed recently. Predicted in guides 89% of the time. Typically 1-4PM. Latest guide note (2026-06-30): Did not get Poke today, only more OP-16. Check tmrw & Weds, they are now overdue for their first Poke shipment of the week. You can g...",
      "confirmedCount": 1
    },
    "T039": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 8% of Tuesdays (3/38), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T133": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Tuesdays (7/38), steady trend. 3 confirmed recently. Predicted in guides 89% of the time. Typically Opening. Latest guide note (2026-07-07): Opening remains worthwhile but 9:30-11 and later afternoon continue fitting this location extremely well.",
      "confirmedCount": 3
    },
    "T031": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), increasing trend. Predicted in guides 37% of the time. Latest guide note (2026-07-07): Continues performing multiple times each week. Best windows remain 11-1 and again from 4-7.",
      "confirmedCount": 0
    },
    "T110": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Tuesdays (0/38), predicted in guides 29%.",
      "confirmedCount": 0
    },
    "T134": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 37% of Tuesdays (14/38), increasing trend. 4 confirmed recently. Predicted in guides 5% of the time. Typically Opening. Latest guide note (2026-06-30): Unconfirmed whether or not they sold today. If they DID NOT sell today, be here at opening. Stop by to ask guest services tonight. ...",
      "confirmedCount": 4
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 71% of Tuesdays (27/38), steady trend. 6 confirmed recently. Predicted in guides 87% of the time. Typically Opening. Latest guide note (2026-07-07): RIP store claimed today that they will be shifting to Fridays only",
      "confirmedCount": 6
    },
    "T169": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 53% of Tuesdays (20/38), decreasing trend. 4 confirmed recently. Predicted in guides 82% of the time. Typically Opening. Latest guide note (2026-06-30): Saving Poke for Fridays at opening now. No more daily drops.",
      "confirmedCount": 4
    },
    "T166": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Tuesdays (5/38), steady trend. 2 confirmed recently. Predicted in guides 26% of the time. Typically Opening. Latest guide note (2026-07-07): As posted before store is selling shipment as it receives so check tomorrow from 8-10 or 12-2 for shipment ask at guest services!",
      "confirmedCount": 2
    },
    "T089": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 26% of Tuesdays (10/38), decreasing trend. Predicted in guides 26% of the time. Latest guide note (2026-06-02): STILL HASN'T REALLY MOVED. Watch 12-2 closely",
      "confirmedCount": 0
    },
    "T142": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Tuesdays (1/38), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T041": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 50% of Tuesdays (19/38), steady trend. 3 confirmed recently. Predicted in guides 74% of the time. Typically Opening. Latest guide note (2026-07-07): Similar setup to Pico. Opening first but don't forget later checks if inventory doesn't appear immediately.",
      "confirmedCount": 3
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 39% of Tuesdays (15/38), steady trend. 1 confirmed recently. Predicted in guides 8% of the time. Typically Opening. Latest guide note (2026-06-23): Ask about a possible drop tomorrow! May or may not do a VQ or just a straight FCFS drop in the morning or 9-12",
      "confirmedCount": 1
    },
    "T023": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), decreasing trend. Predicted in guides 58% of the time. Typically Opening. Latest guide note (2026-06-30): Unlikely, but check at 7AM tmrw. The more likely time is between 10-12, when GS has the time to unbox. Smaller store means less employees. They sell on an...",
      "confirmedCount": 0
    },
    "T114": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 11% of Tuesdays (4/38), increasing trend. 4 confirmed recently. Predicted in guides 16% of the time. Typically Opening. Latest guide note (2026-06-30): Literally the same as Jeronimo but A BIT more consistent for opening time. Expect a line a bit deeper than Jeronimo's at opening tmrw.",
      "confirmedCount": 4
    },
    "T087": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), increasing trend. Predicted in guides 16% of the time. Typically Opening. Latest guide note (2026-07-07): Expect heads here waiting throughout the morning for vendor!",
      "confirmedCount": 0
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Tuesdays (18/38), increasing trend. 3 confirmed recently. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-07-07): Sneaky option for opening DONT SLEEP. Really depends what route vendor chooses so should either hit tomorrow or Thursdays!",
      "confirmedCount": 3
    },
    "T131": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), increasing trend. Predicted in guides 13% of the time. Typically Opening. Latest guide note (2026-06-30): More random now but they should hit once shipment lands tmrw. Ask at guest services. Can pair a check with the other Apple Valley location off of the high...",
      "confirmedCount": 0
    },
    "T119": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Tuesdays (9/38), increasing trend. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-07): Recent patterns lean to Wednesdays, but opening through late morning still deserves attention with another worthwhile check around 1-3 justtt in case",
      "confirmedCount": 0
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 42% of Tuesdays (16/38), steady trend. 5 confirmed recently. Predicted in guides 95% of the time. Typically Opening. Latest guide note (2026-07-07): Opening remains the best opportunity. If nothing develops early don't ignore midday because this store has become more active lately.",
      "confirmedCount": 5
    },
    "T088": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), decreasing trend. 2 confirmed recently. Predicted in guides 37% of the time. Latest guide note (2026-06-23): Spectrum DID NOT GO watch 12-2 but timing can be earlier or later. Barranca keep eyes lightly for held back stock",
      "confirmedCount": 2
    },
    "T102": {
      "chance": "High",
      "window": "12-3pm",
      "reason": "Confirmed hit 11% of Tuesdays (4/38), increasing trend. 2 confirmed recently. Predicted in guides 50% of the time. Typically 12-3pm. Latest guide note (2026-06-30): Biggest focus should be vendor timing from 1-4. Expect people lingering and waiting throughout the afternoon. The line is likely to ...",
      "confirmedCount": 2
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Tuesdays (8/38), increasing trend. 4 confirmed recently. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-07-07): Opening continues to be king. Keep looping back because this store also sells multiple rounds",
      "confirmedCount": 4
    },
    "T165": {
      "chance": "Medium",
      "window": "7-10am",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), decreasing trend. 1 confirmed recently. Predicted in guides 32% of the time. Typically 7-10am. Latest guide note (2026-06-16): Hit today great job catching!",
      "confirmedCount": 1
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), decreasing trend. 1 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-07): Still a bit of a mystery. Last updates were that this store sells on random days around opening. Expect a line checking since ppl wi...",
      "confirmedCount": 1
    },
    "T093": {
      "chance": "High",
      "window": "1-3PM",
      "reason": "Confirmed hit 13% of Tuesdays (5/38), steady trend. 2 confirmed recently. Predicted in guides 37% of the time. Typically 1-3PM. Latest guide note (2026-06-30): Still due for stock this week! Will push around opening or randomly towards the afternoon, between 1-3PM. Please be ready on top this one...",
      "confirmedCount": 2
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 50% of Tuesdays (19/38), steady trend. 5 confirmed recently. Predicted in guides 89% of the time. Typically Opening. Latest guide note (2026-07-07): Never take this store off your route. Opening matters but random waves continue making every check worthwhile as seen today",
      "confirmedCount": 5
    },
    "T146": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Tuesdays (10/38), increasing trend. 1 confirmed recently. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-07-07): Did move inventory already. Worth checking again but don't be surprised if they save the next bigger wave.",
      "confirmedCount": 1
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), increasing trend. 1 confirmed recently. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-07-07): Did hit last week at opening so expect a SOLID line here prior to opening to check!",
      "confirmedCount": 1
    },
    "T016": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Tuesdays (1/38), increasing trend. Predicted in guides 11% of the time. Typically Opening. Latest guide note (2026-07-07): CHECK at opening heads will be here don\u2019t wait for an update just check!",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 63% of Tuesdays (24/38), increasing trend. 5 confirmed recently. Predicted in guides 68% of the time. Typically Opening. Latest guide note (2026-07-07): Morning shipment checks remain mandatory. Long lines should be expected again before opening as it has not hit!!!",
      "confirmedCount": 5
    },
    "T001": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Tuesdays (8/38), increasing trend. 3 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-07-07): Either early vendor watch or later afternoon! If Alhambra hits watch for this store or vice versa",
      "confirmedCount": 3
    },
    "T054": {
      "chance": "High",
      "window": "10-11AM",
      "reason": "Confirmed hit 11% of Tuesdays (4/38), increasing trend. 1 confirmed recently. Predicted in guides 74% of the time. Typically 10-11AM. Latest guide note (2026-07-07): Store receives a bit more shipment tomorrow so check in 9-11 here! Will go quick stay on it",
      "confirmedCount": 1
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 16% of Tuesdays (6/38), increasing trend. 2 confirmed recently. Predicted in guides 63% of the time. Typically Opening. Latest guide note (2026-07-07): Morning remains strongest with another worthwhile run around 10-12 or 1-3 depending when shipment lands",
      "confirmedCount": 2
    },
    "T139": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Tuesdays (10/38), increasing trend. 3 confirmed recently. Predicted in guides 34% of the time. Typically Opening. Latest guide note (2026-07-07): Inventory keeps getting trickled out instead of one big release. Opening remains best. May hit Weds here but people will check tom...",
      "confirmedCount": 3
    },
    "T035": {
      "chance": "Medium",
      "window": "10AM-1PM",
      "reason": "Confirmed hit 5% of Tuesdays (2/38), increasing trend. Predicted in guides 5% of the time. Typically 10AM-1PM. Latest guide note (2026-06-30): Sleeper that is basically 100% for tm or Weds, usually between 10AM-1PM. Sells @GS.",
      "confirmedCount": 0
    },
    "T115": {
      "chance": "Medium",
      "window": "12-3PM",
      "reason": "Confirmed hit 0% of Tuesdays (0/38), increasing trend. Predicted in guides 3% of the time. Typically 12-3PM. Latest guide note (2026-06-30): Usually pushes between 12-3PM at guest services. This is another smaller location that receives quaint batches of stock in lesser frequency than other South...",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Tuesdays (10/38), increasing trend. 4 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-07): Big opening focus. Expect people staged before doors open and be ready right at 7AM hits almost daily",
      "confirmedCount": 4
    },
    "T125": {
      "chance": "High",
      "window": "2:30-5:30PM",
      "reason": "Confirmed hit 0% of Tuesdays (0/38), decreasing trend. Predicted in guides 53% of the time. Typically 2:30-5:30PM. Latest guide note (2026-06-30): Been hitting Thursdays consistently for 1+ month. Likely drops on Tuesdays as well. Can check at opening but patterns suggest this store's likelihood ...",
      "confirmedCount": 0
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), steady trend. 2 confirmed recently. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-06-30): If they do not push tn, they should sell at 8AM opening unless the line is too deep. Has not sold this week (yet) -- Sells @GS.",
      "confirmedCount": 2
    },
    "T162": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 8% of Tuesdays (3/38), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T013": {
      "chance": "High",
      "window": "2:30-5:00PM",
      "reason": "Confirmed hit 42% of Tuesdays (16/38), decreasing trend. 2 confirmed recently. Predicted in guides 58% of the time. Typically 2:30-5:00PM. Latest guide note (2026-06-30): Usually does their first of 2-3 weekly stocks on Tues. It will go down around opening or in the afternoon between 2:30-5:00 PM...",
      "confirmedCount": 2
    }
  },
  "wednesday": {
    "T055": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), increasing trend. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-01): Like we posted today, they hit between 10-11 or from 2-4. Check in those 2 timeframes at GS!",
      "confirmedCount": 0
    },
    "T050": {
      "chance": "High",
      "window": "12-2PM",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), increasing trend. 3 confirmed recently. Predicted in guides 6% of the time. Typically 12-2PM. Latest guide note (2026-07-01): They will drop again this week! The 2nd drop is usually easier than the Mon one to catch, and hits randomly Weds or Thurs between 1...",
      "confirmedCount": 3
    },
    "T059": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. 1 confirmed recently. Predicted in guides 6% of the time. Latest guide note (2026-07-01): Dropped today but they have been slow recently. Expecting another drop tomorrow. Check 12-1 and 4-5 tomorrow.",
      "confirmedCount": 1
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Wednesdays (9/34), increasing trend. 2 confirmed recently. Predicted in guides 41% of the time. Typically Opening. Latest guide note (2026-07-01): Check at 7AM, this store is still due! It will either hit then or between 10-12 since they have not sold much. If nothing drops t...",
      "confirmedCount": 2
    },
    "T124": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), decreasing trend. 1 confirmed recently. Predicted in guides 15% of the time. Typically Opening. Latest guide note (2026-07-01): Hasn\u2019t hit so BE READY people will be on it and very likely to form a line like they did today!",
      "confirmedCount": 1
    },
    "T167": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Wednesdays (1/34), increasing trend. Predicted in guides 18% of the time. Latest guide note (2026-07-01): Holding for Friday.",
      "confirmedCount": 0
    },
    "T168": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 3% of Wednesdays (1/34), increasing trend. Predicted in guides 12% of the time. Latest guide note (2026-07-01): Unsure if this store has hit, check it out after Chino/Philadelphia. Ask at guest services.",
      "confirmedCount": 0
    },
    "T147": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Wednesdays (1/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T002": {
      "chance": "High",
      "window": "7-8am",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), decreasing trend. 1 confirmed recently. Predicted in guides 47% of the time. Typically 7-8am. Latest guide note (2026-06-24): PRIMED please please be ready heads will be here early update from 7-8am store should confirm prior",
      "confirmedCount": 1
    },
    "T076": {
      "chance": "High",
      "window": "11AM-1PM",
      "reason": "Confirmed hit 38% of Wednesdays (13/34), increasing trend. 4 confirmed recently. Predicted in guides 12% of the time. Typically 11AM-1PM. Latest guide note (2026-07-01): Selling by 11AM-1PM. Line will form even earlier since Newbury is not even due for stock tmrw. Going to be busier than usual.",
      "confirmedCount": 4
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 41% of Wednesdays (14/34), steady trend. 3 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-01): Hit today but you can peep tomorrow for random small batches! Realistically, their next drop will be Thursday and/or Friday.",
      "confirmedCount": 3
    },
    "T109": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T032": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Wednesdays (1/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T127": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), steady trend. 2 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-01): BOTH HAVE BEEN UNPREDICTABLE. Expect people checking early and hanging around. Morning remains the strongest opportunity but can sell any time",
      "confirmedCount": 2
    },
    "T080": {
      "chance": "High",
      "window": "10AM-12PM",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. Predicted in guides 12% of the time. Typically 10AM-12PM. Latest guide note (2026-07-01): Been selling when shipment comes in, so it's actually a pretty decent check. Usually 10AM-12PM or during the night time.",
      "confirmedCount": 0
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), steady trend. 1 confirmed recently. Predicted in guides 74% of the time. Typically Opening. Latest guide note (2026-06-24): Normally stronger Thursday mornings but has absolutely switched to Wednesday before. Don't write it off",
      "confirmedCount": 1
    },
    "T049": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), steady trend. 1 confirmed recently. Predicted in guides 41% of the time. Typically Opening. Latest guide note (2026-07-01): Holding inventory it seems, likely Friday at opening! Should have Needohs/Squeezy at the bare minimum tmrw at opening, so it's still w...",
      "confirmedCount": 1
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 38% of Wednesdays (13/34), steady trend. 2 confirmed recently. Predicted in guides 94% of the time. Typically Opening. Latest guide note (2026-07-01): Sold Monday, check for more tomorrow. Been pushing when shipment comes in at guest serivces recently. Larger store that did not drop...",
      "confirmedCount": 2
    },
    "T053": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), decreasing trend. 1 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-07-01): Usually hits Tues or Weds! Not much chatter about this store today, check in at 8AM tmrw. If not, it SHOULD hit between 11-1 at gu...",
      "confirmedCount": 1
    },
    "T046": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "Confirmed hit 0% of Wednesdays (0/34), increasing trend. Predicted in guides 6% of the time. Typically 9-11AM. Latest guide note (2026-07-01): Similar to other smaller locations, they have started to receive ALMOST every other day. Check tomorrow at GS + check the card display between 9-11AM and ...",
      "confirmedCount": 0
    },
    "T107": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 41% of Wednesdays (14/34), increasing trend. 5 confirmed recently. Predicted in guides 68% of the time. Typically Opening. Latest guide note (2026-07-01): Such a big Mond/Weds/Fri hitter. We've seen this store sell towards the afternoon after lines disperse, BUT TMRW, A LINE WILL FO...",
      "confirmedCount": 5
    },
    "T072": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), steady trend. Predicted in guides 41% of the time. Typically Opening. Latest guide note (2026-07-01): Don't really have a timeframe here yet, we're working on it. Adding this store to remind you all that it is now random, and not only on Friday! Check at gue...",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Wednesdays (11/34), increasing trend. 2 confirmed recently. Predicted in guides 35% of the time. Typically Opening. Latest guide note (2026-07-01): Supposedly still due for stock! Could be a sneaky 7AM check if you're willing to risk it. If not, check throughout the day. Due ...",
      "confirmedCount": 2
    },
    "T036": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Wednesdays (2/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T094": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 1 confirmed recently. Predicted in guides 12% of the time. Latest guide note (2026-06-24): Hit today great updates and catches!",
      "confirmedCount": 1
    },
    "T037": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Wednesdays (1/34), predicted in guides 35%.",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "High",
      "window": "12-2PM",
      "reason": "Confirmed hit 50% of Wednesdays (17/34), increasing trend. 5 confirmed recently. Predicted in guides 32% of the time. Typically 12-2PM. Latest guide note (2026-07-01): Vendor was spotted here 2 Weds in a row between 1-2:30PM. Last week, they did not sell, and the week before, they trickled stock ...",
      "confirmedCount": 5
    },
    "T112": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), steady trend. 2 confirmed recently. Predicted in guides 35% of the time. Typically Opening. Latest guide note (2026-07-01): Pushes daily, usually at opening! Sometimes, they switch it up, but every morning, there is a line of people checking. Opens at 8AM. ...",
      "confirmedCount": 2
    },
    "T083": {
      "chance": "High",
      "window": "8-10AM",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), decreasing trend. 2 confirmed recently. Predicted in guides 56% of the time. Typically 8-10AM. Latest guide note (2026-06-24): Most reliable windows stay 8-10AM and 6-8PM did not hit today unless it goes late tonight! Last week did hit around 12:30-2",
      "confirmedCount": 2
    },
    "T069": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Wednesdays (9/34), decreasing trend. 3 confirmed recently. Predicted in guides 88% of the time. Typically Opening. Latest guide note (2026-06-24): Received stock today. Can check morning or evening and last week hit at opening so expect heads checking!",
      "confirmedCount": 3
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 2 confirmed recently. Predicted in guides 41% of the time. Typically Opening. Latest guide note (2026-07-01): Likely Thursday and/or Friday at opening. Might only be Fri this week if they hold for Mega Greninja's release.",
      "confirmedCount": 2
    },
    "T022": {
      "chance": "Medium",
      "window": "3-5PM",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), decreasing trend. 1 confirmed recently. Predicted in guides 82% of the time. Typically 3-5PM. Latest guide note (2026-07-01): Unlikely that they sell tm, they sold today. Check time: 3-5PM!",
      "confirmedCount": 1
    },
    "T136": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Wednesdays (2/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), increasing trend. 2 confirmed recently. Predicted in guides 15% of the time. Typically Opening. Latest guide note (2026-07-01): Sold today so it seems unlikely that they will sell tomorrow.",
      "confirmedCount": 2
    },
    "T079": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Wednesdays (6/34), increasing trend. 2 confirmed recently. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-07-01): Sold last Weds at opening! Usually sells at 7AM so it's a great check tomorrow at opening. Don't count this store out!",
      "confirmedCount": 2
    },
    "T047": {
      "chance": "High",
      "window": "3-6AM",
      "reason": "Confirmed hit 26% of Wednesdays (9/34), steady trend. 2 confirmed recently. Predicted in guides 59% of the time. Typically 3-6AM. Latest guide note (2026-07-01): Supposedly still due! It also hit last Weds! Expect people to set up chairs by 3-6AM here. If it hits like last week, stock will be jui...",
      "confirmedCount": 2
    },
    "T043": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 59% of Wednesdays (20/34), steady trend. 6 confirmed recently. Predicted in guides 59% of the time. Typically Opening. Latest guide note (2026-07-01): MORNING VQ OR DROP AGAIN. People are arriving absurdly early store will either drop items fcfs or take a VQ",
      "confirmedCount": 6
    },
    "T091": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 3% of Wednesdays (1/34), increasing trend. Predicted in guides 15% of the time. Latest guide note (2026-07-01): Hits very randomly at guest services, can sprinkle in a check if you are in the area.",
      "confirmedCount": 0
    },
    "T030": {
      "chance": "High",
      "window": "1-3PM",
      "reason": "Confirmed hit 26% of Wednesdays (9/34), increasing trend. Predicted in guides 53% of the time. Typically 1-3PM. Latest guide note (2026-07-01): FCFS with no VQ now, staff push when stock lands! Usually 7AM or 1-3PM once UPS delivers a 2nd shipment.",
      "confirmedCount": 0
    },
    "T064": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Wednesdays (8/34), decreasing trend. 1 confirmed recently. Predicted in guides 59% of the time. Typically Opening. Latest guide note (2026-06-24): Has lately been holding for Fridays here",
      "confirmedCount": 1
    },
    "T126": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 3 confirmed recently. Predicted in guides 6% of the time. Latest guide note (2026-07-01): Hit today, so it seems unlikely they will sell tomorrow. They will go on Thurs or Fri.",
      "confirmedCount": 3
    },
    "T161": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 0% of Wednesdays (0/34), increasing trend. Predicted in guides 6% of the time. Typically Opening. Latest guide note (2026-07-01): Usually sells when they want at opening. Long lines most mornings. As long as you arrive a bit early, you should be good to grab what they sell, if at all!",
      "confirmedCount": 0
    },
    "T060": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-07-01): Only hit with a small amount of OP today. Check between opening and 10AM, UPS delivers in the morning.",
      "confirmedCount": 1
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 62% of Wednesdays (21/34), steady trend. 1 confirmed recently. Predicted in guides 91% of the time. Typically Opening. Latest guide note (2026-07-01): Sells almost everyday. Some stock goes out at opening then people stick around for more once UPS delivers again around 11-12. Store ...",
      "confirmedCount": 1
    },
    "T120": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), decreasing trend. 2 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-06-24): As warned did sell today so look for another batch Thursday!",
      "confirmedCount": 2
    },
    "T051": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Wednesdays (1/34), steady trend. 1 confirmed recently. Predicted in guides 44% of the time. Typically Opening. Latest guide note (2026-07-01): Usually hits on the same day as Cerritos/South St, shortly after. If South sells, ppl will immediately rush over here to linger, expec...",
      "confirmedCount": 1
    },
    "T158": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 0% of Wednesdays (0/34), increasing trend. Predicted in guides 6% of the time. Typically Opening. Latest guide note (2026-07-01): Ligher drop today! Hits consistently and their regular large drop day is Weds so might be good tom. Check opening and 11-2.",
      "confirmedCount": 0
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Wednesdays (8/34), increasing trend. 2 confirmed recently. Predicted in guides 79% of the time. Typically Opening. Latest guide note (2026-07-01): Been selling at opening almost daily! You can count on a line waiting for 8AM tomorrow. Be a bit early if you want the best chanc...",
      "confirmedCount": 2
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 59% of Wednesdays (20/34), steady trend. 3 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-01): Weds are usually when this store starts hitting more! Line forms by 10AM, store sells by 12:30, hits daily, just be early.",
      "confirmedCount": 3
    },
    "T111": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Wednesdays (16/34), increasing trend. 5 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-01): STILL A WEDNESDAY STORE. If nothing happens at opening, make sure to circle back later around 1-4 because store will sell at lea...",
      "confirmedCount": 5
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 2 confirmed recently. Predicted in guides 56% of the time. Typically Opening. Latest guide note (2026-07-01): Been hitting almost daily! Check at opening for today's items + between 2-4PM for whatever UPS delivers midday at GS",
      "confirmedCount": 2
    },
    "T101": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Confirmed hit 3% of Wednesdays (1/34), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Typically 11AM-1PM. Latest guide note (2026-07-01): Fridays and some Wednesdays here! Usually at opening or around 11AM-1PM. They sell at guest services and it's a total sleeper store!",
      "confirmedCount": 1
    },
    "T017": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 1 confirmed recently. Predicted in guides 6% of the time. Latest guide note (2026-06-24): Has not hit and on occasion will hit in the morning so keep eyes! May also hold here but be ready",
      "confirmedCount": 1
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Wednesdays (11/34), increasing trend. 1 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-07-01): Check at opening, alongside 7th & Fig. This store opens at 8AM, Fig is 7AM. If they're dry, prob holding for Fri.",
      "confirmedCount": 1
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 35% of Wednesdays (12/34), steady trend. 3 confirmed recently. Predicted in guides 91% of the time. Typically Opening. Latest guide note (2026-07-01): This store holds back product and drops randomly. The best times to check are 8-10AM and 1-3PM!",
      "confirmedCount": 3
    },
    "T153": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), increasing trend. 3 confirmed recently. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-07-01): The past few weeks, they have been dropping Mon to Wed, so check at opening, as they might still have something tom. People will b...",
      "confirmedCount": 3
    },
    "T090": {
      "chance": "Medium",
      "window": "7-9am",
      "reason": "Confirmed hit 38% of Wednesdays (13/34), decreasing trend. Predicted in guides 56% of the time. Typically 7-9am. Latest guide note (2026-07-01): Holding for Friday.",
      "confirmedCount": 0
    },
    "T143": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Wednesdays (2/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "High",
      "window": "12PM-2PM",
      "reason": "Confirmed hit 24% of Wednesdays (8/34), increasing trend. 1 confirmed recently. Predicted in guides 59% of the time. Typically 12PM-2PM. Latest guide note (2026-07-01): Can check for a guest services push between 12PM-2PM! Been selling more frequently when shipment comes in. People spawn here so ...",
      "confirmedCount": 1
    },
    "T137": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 44% of Wednesdays (15/34), increasing trend. 5 confirmed recently. Predicted in guides 56% of the time. Typically Opening. Latest guide note (2026-07-01): Reminder, they switched to random drop times now. Not as likely for tomorrow at opening, but they should sell at some point unle...",
      "confirmedCount": 5
    },
    "T108": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Wednesdays (2/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T010": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 44% of Wednesdays (15/34), increasing trend. 4 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-07-01): VERY DUE to sell tomorrow! They switch up the timing constantly. Check at opening. Seems more possible tmrw.",
      "confirmedCount": 4
    },
    "T144": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Wednesdays (1/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T106": {
      "chance": "High",
      "window": "8-9am",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), increasing trend. Predicted in guides 24% of the time. Typically 8-9am. Latest guide note (2026-06-24): Hit today as posted!",
      "confirmedCount": 0
    },
    "T071": {
      "chance": "Medium",
      "window": "1-4PM",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), decreasing trend. Predicted in guides 53% of the time. Typically 1-4PM. Latest guide note (2026-07-01): CHECK AT OPENING IN CASE THEY SWITCH UP. If not, they will drop at their usual time, 1-4PM. You can 100% gurantee yourself that a line will form early. As...",
      "confirmedCount": 0
    },
    "T029": {
      "chance": "High",
      "window": "9-11AM",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), increasing trend. 2 confirmed recently. Predicted in guides 47% of the time. Typically 9-11AM. Latest guide note (2026-07-01): Ask at GS! This store tends to hold in the back and sell selectively. Usually between 9-11AM.",
      "confirmedCount": 2
    },
    "T154": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-01): Still dry today, likely to hit tom. Expect heavy lines, people send it over after Balboa sometimes. Easy route though!",
      "confirmedCount": 1
    },
    "T100": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 53% of Wednesdays (18/34), increasing trend. 6 confirmed recently. Predicted in guides 32% of the time. Typically Opening. Latest guide note (2026-07-01): Likely to drop at opening/mid-morning. It does not matter when the product actually goes out, tmrw is the day so expect a long l...",
      "confirmedCount": 6
    },
    "T098": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 35% of Wednesdays (12/34), increasing trend. 3 confirmed recently. Predicted in guides 74% of the time. Typically Opening. Latest guide note (2026-07-01): Expect a line here at opening. This store usually hits on Wednesday by 10:30AM. A line is formed every Weds by around opening! S...",
      "confirmedCount": 3
    },
    "T056": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), increasing trend. 1 confirmed recently. Predicted in guides 68% of the time. Typically Opening. Latest guide note (2026-07-01): Been holding their stock for Fridays at opening. They pass #'d tix 30 mins-1 hour before opening.",
      "confirmedCount": 1
    },
    "T170": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. 1 confirmed recently. Predicted in guides 6% of the time. Typically Opening. Latest guide note (2026-07-01): If they didn't drop at opening today, they will sell at opening tomorrow. One of the last 2 per SKU stores out there, don't sleep!",
      "confirmedCount": 1
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), decreasing trend. 2 confirmed recently. Predicted in guides 88% of the time. Typically Opening. Latest guide note (2026-06-24): Wednesday opening has been hitting lately but did sell today! Store tends to",
      "confirmedCount": 2
    },
    "T164": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. 2 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-01): Stocked Monday, likely to stock again Thursday or Friday. Unlikely for tomorrow!```",
      "confirmedCount": 2
    },
    "T140": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Wednesdays (1/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T066": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 35% of Wednesdays (12/34), predicted in guides 24%.",
      "confirmedCount": 0
    },
    "T045": {
      "chance": "Medium",
      "window": "9-11am",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), increasing trend. 1 confirmed recently. Predicted in guides 15% of the time. Typically 9-11am. Latest guide note (2026-07-01): DID NOT stock today, still in play for tmrw. Vendor tends to stock at night. I was wrong yesterday when I said they stock Tues and ...",
      "confirmedCount": 1
    },
    "T128": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Wednesdays (1/34), increasing trend. Predicted in guides 3% of the time. Latest guide note (2026-07-01): Has hit multiple days in a row so check tomorrow. Tues/Weds & Fri are frequent drop days. 9:30-12:00 usually!",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), increasing trend. 2 confirmed recently. Predicted in guides 59% of the time. Typically Opening. Latest guide note (2026-07-01): Store has been holding for Fridays at opening recently. Even pulled OP that got put out on a day before Fri once a surge of ppl ca...",
      "confirmedCount": 2
    },
    "T148": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 0% of Wednesdays (0/34), increasing trend. Predicted in guides 6% of the time. Typically Opening. Latest guide note (2026-07-01): M/W/F schededule normally, but schedule this week, it seems random. People will start crowding towards the afternoon and there will be a line checking at...",
      "confirmedCount": 0
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Wednesdays (9/34), increasing trend. 1 confirmed recently. Predicted in guides 35% of the time. Typically Opening. Latest guide note (2026-07-01): Weds is usually a day where they sell at opening/earlier in the day. Check at 7AM and check at 10-12 if it's dry at 7!",
      "confirmedCount": 1
    },
    "T077": {
      "chance": "High",
      "window": "11AM-2PM",
      "reason": "Confirmed hit 18% of Wednesdays (6/34), increasing trend. 3 confirmed recently. Predicted in guides 15% of the time. Typically 11AM-2PM. Latest guide note (2026-06-24): Best checks remain morning and 11AM-2PM but did sell a bit heavier today",
      "confirmedCount": 3
    },
    "T033": {
      "chance": "Medium",
      "window": "12-1PM",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Typically 12-1PM. Latest guide note (2026-07-01): MORNING VQ OR DROP AGAIN. People are arriving absurdly early store will either drop items FCFS or take a VQ! This is @voodoo's take ...",
      "confirmedCount": 1
    },
    "T044": {
      "chance": "Medium",
      "window": "9AM-12PM",
      "reason": "Confirmed hit 38% of Wednesdays (13/34), decreasing trend. 1 confirmed recently. Predicted in guides 50% of the time. Typically 9AM-12PM. Latest guide note (2026-07-01): Stocked today so it seems unlikely that they will sell again tomorrow. Feel free to check in for any held stock between 9AM-12P...",
      "confirmedCount": 1
    },
    "T096": {
      "chance": "High",
      "window": "8-9AM",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 2 confirmed recently. Predicted in guides 3% of the time. Typically 8-9AM. Latest guide note (2026-07-01): Sleeper for Weds/Thursday. On Fri, they run VQ. On Weds or Thurs, they selectively sell at guest services starting around 8-9AM. Che...",
      "confirmedCount": 2
    },
    "T095": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), decreasing trend. 1 confirmed recently. Predicted in guides 41% of the time. Latest guide note (2026-05-27): VQ in the morning around 9-10:30 usually! Selling usually happens from 10-12 here!",
      "confirmedCount": 1
    },
    "T122": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), decreasing trend. 2 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-01): Due for their 2nd stock of the week tmrw! You can expect a line to be here by 10AM or so. Hits before or after Eastvale.",
      "confirmedCount": 2
    },
    "T138": {
      "chance": "High",
      "window": "12PM-2PM",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 3 confirmed recently. Predicted in guides 15% of the time. Typically 12PM-2PM. Latest guide note (2026-07-01): Sold last Weds at opening! Definitely one to be at tomorrow. Not confirmed, but you can expect a line of ppl here. They also pus...",
      "confirmedCount": 3
    },
    "T092": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 12% of Wednesdays (4/34), predicted in guides 6%.",
      "confirmedCount": 0
    },
    "T063": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 35% of Wednesdays (12/34), decreasing trend. 2 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-07-01): Normally I\u2019d say Friday hold, but this store feels ready to throw a curveball to avoid crowds. Check it",
      "confirmedCount": 2
    },
    "T123": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Wednesdays (8/34), increasing trend. Predicted in guides 44% of the time. Typically Opening. Latest guide note (2026-07-01): Same situation as Mission Valley above!",
      "confirmedCount": 0
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 38% of Wednesdays (13/34), increasing trend. 2 confirmed recently. Predicted in guides 82% of the time. Typically Opening. Latest guide note (2026-07-01): Always at opening, line up early to hit best, always a line beforehand due to the consistency of how it hits.",
      "confirmedCount": 2
    },
    "T097": {
      "chance": "High",
      "window": "12:45-2:00PM",
      "reason": "Confirmed hit 35% of Wednesdays (12/34), increasing trend. 5 confirmed recently. Predicted in guides 50% of the time. Typically 12:45-2:00PM. Latest guide note (2026-07-01): Usually every Wednesday by 1PM! Expect a line to form here early. If Garden Grove/Harbor or Fullerton/Yorba Linda hits, be ...",
      "confirmedCount": 5
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Wednesdays (8/34), steady trend. 1 confirmed recently. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-07-01): Midweek remains their best timeframe. Most movement happens around opening, or late afternoon to night time.",
      "confirmedCount": 1
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), decreasing trend. 2 confirmed recently. Predicted in guides 26% of the time. Typically Opening. Latest guide note (2026-06-24): Lines will start early early at both as they are PRIMED to hit",
      "confirmedCount": 2
    },
    "T116": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. 2 confirmed recently. Predicted in guides 12% of the time. Typically Opening. Latest guide note (2026-07-01): Same situation as Signal Hill. Last week, Signal hit first, then Seal went after, which is usually how it goes down. Both stores w...",
      "confirmedCount": 2
    },
    "T061": {
      "chance": "High",
      "window": "8-9AM",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), increasing trend. 2 confirmed recently. Predicted in guides 12% of the time. Typically 8-9AM. Latest guide note (2026-07-01): Posted in the LA guide; reminder to check at 8AM opening.",
      "confirmedCount": 2
    },
    "T159": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 18% of Wednesdays (6/34), increasing trend. 2 confirmed recently. Predicted in guides 6% of the time. Latest guide note (2026-07-01): Weds frequent hitter. People camp out here because they receive solid stock AND hit every Weds!",
      "confirmedCount": 2
    },
    "T149": {
      "chance": "Low",
      "window": "",
      "reason": "Confirmed hit 0% of Wednesdays (0/34), increasing trend. Predicted in guides 3% of the time. Latest guide note (2026-07-01): In play as well, just random timing. We'll work on gathering more info here.```",
      "confirmedCount": 0
    },
    "T052": {
      "chance": "High",
      "window": "12:30-2:30PM",
      "reason": "Confirmed hit 32% of Wednesdays (11/34), increasing trend. 3 confirmed recently. Predicted in guides 15% of the time. Typically 12:30-2:30PM. Latest guide note (2026-07-01): Has been selling daily recently, including Sat. It hits between 12:30-2:30PM.",
      "confirmedCount": 3
    },
    "T012": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 29% of Wednesdays (10/34), decreasing trend. 1 confirmed recently. Predicted in guides 82% of the time. Latest guide note (2026-07-01): Vendor should land tomorrow or Thursday. Check 9-12 then intensify later because timing has shifted earlier recently",
      "confirmedCount": 1
    },
    "T121": {
      "chance": "High",
      "window": "10:30AM-1PM",
      "reason": "Confirmed hit 29% of Wednesdays (10/34), increasing trend. 3 confirmed recently. Predicted in guides 15% of the time. Typically 10:30AM-1PM. Latest guide note (2026-07-01): Guest services will sell when ready and a line will form by opening. Usually, they push stock by 10:30AM-1PM recently. Doesn...",
      "confirmedCount": 3
    },
    "T058": {
      "chance": "High",
      "window": "3-5PM",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), increasing trend. 3 confirmed recently. Predicted in guides 15% of the time. Typically 3-5PM. Latest guide note (2026-07-01): It has been consistent for the afternoon time recently! 3-5PM, closer to 4-5 usually if recent trends follow.",
      "confirmedCount": 3
    },
    "T081": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 32% of Wednesdays (11/34), increasing trend. 4 confirmed recently. Predicted in guides 6% of the time. Latest guide note (2026-07-01): Same flow as Collection. Be ready for morning lines at both to see if they fire",
      "confirmedCount": 4
    },
    "T086": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Wednesdays (2/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 1 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-01): Been selling at opening these last few days without much of a crowd. Again, they sell 1 SKU at a time, so ppl choose other locati...",
      "confirmedCount": 1
    },
    "T039": {
      "chance": "High",
      "window": "12-2PM",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), increasing trend. Predicted in guides 79% of the time. Typically 12-2PM. Latest guide note (2026-07-01): Friday motherloads have been consistent here! Thurs is usually the 2nd most consistent day, between 12-2PM. Feel free to checl in that range tmrw.",
      "confirmedCount": 0
    },
    "T018": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Wednesdays (10/34), decreasing trend. Predicted in guides 56% of the time. Typically Opening. Latest guide note (2026-07-01): Could be a sneaky opening push at guest services which they have done on Weds/Thurs before. Check in! If not, due for a vendor stock in the afternoon....",
      "confirmedCount": 0
    },
    "T067": {
      "chance": "High",
      "window": "8-9am",
      "reason": "Confirmed hit 26% of Wednesdays (9/34), steady trend. 4 confirmed recently. Predicted in guides 74% of the time. Typically 8-9am. Latest guide note (2026-06-24): Expecting inventory tomorrow. Multiple shipments weekly and strongest windows remain 8-9am and 1-4",
      "confirmedCount": 4
    },
    "T133": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 32% of Wednesdays (11/34), steady trend. 3 confirmed recently. Predicted in guides 76% of the time. Latest guide note (2026-07-01): Literally the same as Fontana/Summit, posted directly above. Sells at guest services like Fontana/Summit!",
      "confirmedCount": 3
    },
    "T031": {
      "chance": "High",
      "window": "9-10AM",
      "reason": "Confirmed hit 35% of Wednesdays (12/34), steady trend. 3 confirmed recently. Predicted in guides 65% of the time. Typically 9-10AM. Latest guide note (2026-07-01): Expect a line by the tech area at random times, full of people hoping to catch the vendor.```",
      "confirmedCount": 3
    },
    "T117": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), decreasing trend. Predicted in guides 29% of the time. Latest guide note (2026-06-10): Hit today as posted!",
      "confirmedCount": 0
    },
    "T110": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Wednesdays (2/34), predicted in guides 32%.",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 35% of Wednesdays (12/34), increasing trend. 4 confirmed recently. Predicted in guides 76% of the time. Typically Opening. Latest guide note (2026-07-01): Been awfully dry to the point it seems like they are holding out for Friday. Many SFV stores have made the switch this week. Fee...",
      "confirmedCount": 4
    },
    "T169": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), increasing trend. 2 confirmed recently. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-07-01): Check for the 2nd round of stock this week around opening. Expect a line here!",
      "confirmedCount": 2
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Wednesdays (16/34), increasing trend. 4 confirmed recently. Predicted in guides 41% of the time. Typically Opening. Latest guide note (2026-06-24): Cochran hit today but can go multiple days so people will",
      "confirmedCount": 4
    },
    "T166": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Wednesdays (8/34), increasing trend. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-07-01): Member informed us they've been pushing DAILY at guest services in the morning, at opening or between 10-1. Usually consistent with Fullerton/Orangethor...",
      "confirmedCount": 0
    },
    "T089": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), decreasing trend. 1 confirmed recently. Predicted in guides 53% of the time. Latest guide note (2026-05-27): 12-3 remains strongest but store has been leaning towards Friday drops! Not definitive and store will usually disperse a line if nothing hits",
      "confirmedCount": 1
    },
    "T142": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Wednesdays (1/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T041": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), increasing trend. 2 confirmed recently. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-07-01): Unless it surprises everyone tonight, check at opening. Last week, they held a large amount of stock and sold Fri afternoon. Be mi...",
      "confirmedCount": 2
    },
    "T034": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Wednesdays (2/34), predicted in guides 6%.",
      "confirmedCount": 0
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Wednesdays (8/34), increasing trend. 5 confirmed recently. Predicted in guides 41% of the time. Typically Opening. Latest guide note (2026-07-01): Weds AM continues to be their strongest pattern. Likely received tonight so check at opening, they'll either push at 7AM or from ...",
      "confirmedCount": 5
    },
    "T114": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Wednesdays (7/34), increasing trend. 2 confirmed recently. Predicted in guides 9% of the time. Typically Opening. Latest guide note (2026-07-01): SAME AS JERONIMO, THE EXACT SAME. Daily lines at opening here! Due for stock at opening if they received anything today, check in....",
      "confirmedCount": 2
    },
    "T087": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), increasing trend. 2 confirmed recently. Predicted in guides 9% of the time. Typically Opening. Latest guide note (2026-07-01): Sold today so it's not as likely that they drop tmrw. Feel free to check at opening which is around when they sold today.",
      "confirmedCount": 2
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), steady trend. Predicted in guides 56% of the time. Typically Opening. Latest guide note (2026-07-01): Similar story to Pomona. Traditionally Thursday but recent employee pushes make it worth attention! People will start lining up tmrw since it hasn't hit th...",
      "confirmedCount": 0
    },
    "T131": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Wednesdays (1/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T130": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Wednesdays (1/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T119": {
      "chance": "High",
      "window": "9-10AM",
      "reason": "Confirmed hit 32% of Wednesdays (11/34), increasing trend. 4 confirmed recently. Predicted in guides 38% of the time. Typically 9-10AM. Latest guide note (2026-07-01): Claims they're doing random but it should still be tomorrow so expect a line to form by 9-10AM. Usually sells by 1PM. Pretty cons...",
      "confirmedCount": 4
    },
    "T150": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 0% of Wednesdays (0/34), increasing trend. Predicted in guides 6% of the time. Latest guide note (2026-07-01): Hits very randomly, receives light stock, and does 2 per SKU. It is only great for first few people to hit. Tougher catch!",
      "confirmedCount": 0
    },
    "T102": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), steady trend. 1 confirmed recently. Predicted in guides 9% of the time. Typically 9-11AM. Latest guide note (2026-06-17): Possible drops here. Prefers late morning 9-11AM, but also has a shot at 2-4PM.",
      "confirmedCount": 1
    },
    "T145": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. 2 confirmed recently. Predicted in guides 6% of the time. Typically Opening. Latest guide note (2026-07-01): Sells at opening and receives heavy stock. Check tomorrow, people are looking almost every morning.",
      "confirmedCount": 2
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 76% of Wednesdays (26/34), increasing trend. 4 confirmed recently. Predicted in guides 82% of the time. Typically Opening. Latest guide note (2026-07-01): OPENING VQ WILL GO DOWN. Expect a deep line before the doors even open! Hits every M/W/F! Had 15 in line around opening last week.",
      "confirmedCount": 4
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 2 confirmed recently. Predicted in guides 24% of the time. Typically Opening. Latest guide note (2026-07-01): Giving this store 1 more chance to sell at opening which they have done the last few weeks. Already a line at Walmart Pico Rivera...",
      "confirmedCount": 2
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Wednesdays (9/34), increasing trend. 3 confirmed recently. Predicted in guides 62% of the time. Typically Opening. Latest guide note (2026-07-01): Been stocking randomly! Either opening or 11AM-1PM. Gets cleaned out very quickly.",
      "confirmedCount": 3
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), increasing trend. Predicted in guides 15% of the time. Typically Opening. Latest guide note (2026-07-01): Sells daily at this point. Been between 1-3 the last week or so but don't count out an earlier drop. Ask guest services, this store hits daily.",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), decreasing trend. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-01): Generally has a crowd of people checking daily at opening. Receives heavy stock when it does hit!",
      "confirmedCount": 0
    },
    "T093": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), steady trend. Predicted in guides 26% of the time. Latest guide note (2026-07-01): Likely hit today alongside Adams so it's probably a skip. Feel free to check in though.",
      "confirmedCount": 0
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 41% of Wednesdays (14/34), steady trend. 4 confirmed recently. Predicted in guides 65% of the time. Typically Opening. Latest guide note (2026-07-01): Daily opening check! Every morning, this store has a line. They usually sell some at 8AM then drop again between 1-3PM. Consistent s...",
      "confirmedCount": 4
    },
    "T146": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), increasing trend. 2 confirmed recently. Predicted in guides 6% of the time. Latest guide note (2026-07-01): Vendor day tom or Thu. Randomly drops but trending Fri afternoon for almost 3 weeks now. People have been prioritizing other stores on Weds recently.",
      "confirmedCount": 2
    },
    "T019": {
      "chance": "Medium",
      "window": "8-11AM",
      "reason": "Confirmed hit 0% of Wednesdays (0/34), increasing trend. Predicted in guides 3% of the time. Typically 8-11AM. Latest guide note (2026-07-01): Sleeper store that sells between 8-11AM almost daily.",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Wednesdays (8/34), increasing trend. 1 confirmed recently. Predicted in guides 56% of the time. Typically Opening. Latest guide note (2026-07-01): Opening check! Did not hit today. Been pushing at opening and throughout the day, between 1-3PM mainly. Lines form outside now.",
      "confirmedCount": 1
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 2 confirmed recently. Predicted in guides 24% of the time. Typically Opening. Latest guide note (2026-07-01): Opening checks! They sell their previous morning's shipment each day at opening AND they still allow 2 per SKU. Sold the last 2 d...",
      "confirmedCount": 2
    },
    "T016": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), increasing trend. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-06-24): Tends to hit openings and Weds usually so KEEP EYES",
      "confirmedCount": 0
    },
    "T001": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 44% of Wednesdays (15/34), decreasing trend. 1 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-05-27): Priority Wednesday stop alongside Alhambra. Usually one pops early while the other follows later afternoon",
      "confirmedCount": 1
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 41% of Wednesdays (14/34), increasing trend. 3 confirmed recently. Predicted in guides 85% of the time. Typically Opening. Latest guide note (2026-07-01): Been selling at opening, sold today at opening for example. They have a line every morning due to the recent consistency of drop...",
      "confirmedCount": 3
    },
    "T054": {
      "chance": "Medium",
      "window": "7-9:30AM",
      "reason": "Confirmed hit 3% of Wednesdays (1/34), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Typically 7-9:30AM. Latest guide note (2026-07-01): Been selling at 7AM recently! Sold at opening today! Double back tmrw between 7-9:30AM.",
      "confirmedCount": 1
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Wednesdays (6/34), decreasing trend. 1 confirmed recently. Predicted in guides 85% of the time. Typically Opening. Latest guide note (2026-07-01): This and Gardena sell on similar timeframes. GS checks between 11-1 and 4-6.",
      "confirmedCount": 1
    },
    "T139": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Wednesdays (1/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Wednesdays (8/34), steady trend. 3 confirmed recently. Predicted in guides 91% of the time. Typically Opening. Latest guide note (2026-07-01): CHECK 7AM OPENING. Has not sold this week so realistically, they might be holding until Friday.",
      "confirmedCount": 3
    },
    "T156": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 9% of Wednesdays (3/34), increasing trend. 1 confirmed recently. Predicted in guides 6% of the time. Latest guide note (2026-07-01): People linger in the toy section to avoid the area where the vendor stocks because they hate lines. Sells randomly but it usually hits Wednesday. Will...",
      "confirmedCount": 1
    },
    "T035": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "Confirmed hit 15% of Wednesdays (5/34), increasing trend. 1 confirmed recently. Predicted in guides 12% of the time. Typically 10AM-12PM. Latest guide note (2026-07-01): X factor between 10AM-12PM if they push at guest services.",
      "confirmedCount": 1
    },
    "T115": {
      "chance": "High",
      "window": "12-2PM",
      "reason": "Confirmed hit 0% of Wednesdays (0/34), increasing trend. Predicted in guides 9% of the time. Typically 12-2PM. Latest guide note (2026-07-01): As a smaller store, they are prone to selling tmrw at opening. They did not have much today. Sleeper check! If not, rotate from 12-2PM. Same timing as San...",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Wednesdays (4/34), increasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-07-01): Posted in the LA guide, already a line for 7AM opening.",
      "confirmedCount": 1
    },
    "T125": {
      "chance": "Medium",
      "window": "2-5PM",
      "reason": "Confirmed hit 0% of Wednesdays (0/34), increasing trend. Predicted in guides 3% of the time. Typically 2-5PM. Latest guide note (2026-07-01): Seems VERY likely for a Thursday drop! You can still check tomorrow between 2-5PM which is their daily drop time when it DOES end up hitting.",
      "confirmedCount": 0
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Wednesdays (9/34), steady trend. 1 confirmed recently. Predicted in guides 91% of the time. Typically Opening. Latest guide note (2026-07-01): Check at opening, but they sold today. 50/50 whether they double back tomorrow. That's your best time to check though!",
      "confirmedCount": 1
    },
    "T104": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. Predicted in guides 18% of the time. Latest guide note (2026-06-17): Euclid sold as warned but light stock. Lincoln and Hills can both sell tomorrow earlier or hold for Friday, so check in",
      "confirmedCount": 0
    },
    "T162": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 6% of Wednesdays (2/34), increasing trend. Predicted in guides 6% of the time. Latest guide note (2026-07-01): High chance for tom, Balboa peeps jump here when they hear the news. hits randomly. Just go after Balboa and wait it out if you need a move.",
      "confirmedCount": 0
    },
    "T013": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Wednesdays (11/34), decreasing trend. 2 confirmed recently. Predicted in guides 29% of the time. Typically Opening. Latest guide note (2026-06-17): Hit today as posted here first!",
      "confirmedCount": 2
    }
  },
  "thursday": {
    "T055": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Thursdays (4/34), decreasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-06-25): Hit today at opening be on it as stated typically openings here or 1-3",
      "confirmedCount": 1
    },
    "T050": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Thursdays (1/34), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-02): Usually hits Thursdays but when it skips the Monday drop. Can check IN CASE as stores have been receiving extra!",
      "confirmedCount": 1
    },
    "T059": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Thursdays (2/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Thursdays (8/34), steady trend. 3 confirmed recently. Predicted in guides 38% of the time. Typically Opening. Latest guide note (2026-07-02): Did not sell today so unless they sell tonight expect a LINE at opening early early",
      "confirmedCount": 3
    },
    "T124": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 44%.",
      "confirmedCount": 0
    },
    "T167": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 12% of Thursdays (4/34), increasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Latest guide note (2026-07-02): Store continues saying Friday",
      "confirmedCount": 1
    },
    "T168": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Thursdays (6/34), decreasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-05-28): Two stores. Both have been dropping randomly so may hold for Friday but check 8-10 or 12-3 in case PLEASE",
      "confirmedCount": 1
    },
    "T147": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 15% of Thursdays (5/34), steady trend. 3 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 3
    },
    "T002": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Thursdays (6/34), steady trend. 1 confirmed recently. Predicted in guides 56% of the time. Typically Opening. Latest guide note (2026-07-02): Likely tomorrow! As I\u2019ve posted store hire multiple times a week by employees at opening and then vendor usually stops by around 12-3 ...",
      "confirmedCount": 1
    },
    "T076": {
      "chance": "High",
      "window": "8-11am",
      "reason": "Confirmed hit 18% of Thursdays (6/34), steady trend. 2 confirmed recently. Predicted in guides 6% of the time. Typically 8-11am. Latest guide note (2026-06-18): Should stock up next after Cochran! Most likely morning 9-11 check in!",
      "confirmedCount": 2
    },
    "T099": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 12% of Thursdays (4/34), increasing trend. 1 confirmed recently. Predicted in guides 29% of the time. Latest guide note (2026-07-02): Sold yesterday instead of the usual Wednesday pattern two weeks in a row so pls be aware of that!",
      "confirmedCount": 1
    },
    "T109": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 9% of Thursdays (3/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T032": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T127": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Thursdays (0/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 6% of Thursdays (2/34), increasing trend. Predicted in guides 29% of the time. Typically Opening. Latest guide note (2026-07-02): Opening through 8-10 first then rerun later. They drop as they get shipment!",
      "confirmedCount": 0
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Thursdays (11/34), steady trend. 4 confirmed recently. Predicted in guides 91% of the time. Typically Opening. Latest guide note (2026-07-02): One of tomorrow's biggest targets if today truly stayed quiet. Thursdays continue fitting this store whether it happens early morning...",
      "confirmedCount": 4
    },
    "T049": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 9% of Thursdays (3/34), predicted in guides 29%.",
      "confirmedCount": 0
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Thursdays (10/34), steady trend. 2 confirmed recently. Predicted in guides 88% of the time. Typically Opening. Latest guide note (2026-07-02): If it stayed quiet this morning then another opening check is deserved but may be holding for Friday",
      "confirmedCount": 2
    },
    "T053": {
      "chance": "High",
      "window": "1-4PM",
      "reason": "Confirmed hit 12% of Thursdays (4/34), increasing trend. 2 confirmed recently. Predicted in guides 21% of the time. Typically 1-4PM. Latest guide note (2026-07-02): Both deserve attention. Morning isn't bad but Thursday afternoons continue to fit these stores best, especially WeHo from 1-4! Sunse...",
      "confirmedCount": 2
    },
    "T046": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Thursdays (0/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T107": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 62% of Thursdays (21/34), decreasing trend. 1 confirmed recently. Predicted in guides 68% of the time. Typically Opening. Latest guide note (2026-05-28): Early lines and usually strongest around 11-2. SHOULD FIRE because it seems to have skipped today",
      "confirmedCount": 1
    },
    "T072": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Thursdays (2/34), predicted in guides 29%.",
      "confirmedCount": 0
    },
    "T074": {
      "chance": "High",
      "window": "2-4PM",
      "reason": "Confirmed hit 18% of Thursdays (6/34), steady trend. 2 confirmed recently. Predicted in guides 3% of the time. Typically 2-4PM. Latest guide note (2026-06-18): Vendor has not stocked all week. Has been waiting for Phantasmal to arrive. Will stock tmrw or Fri between 2-4PM.",
      "confirmedCount": 2
    },
    "T036": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Thursdays (2/34), steady trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-05-28): HAS NOT BEEN HITTING FRIDAYS. CHECK IN THE MORNING ASK FOR A DROP/VQ",
      "confirmedCount": 1
    },
    "T094": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 9% of Thursdays (3/34), predicted in guides 35%.",
      "confirmedCount": 0
    },
    "T037": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Thursdays (2/34), decreasing trend. Predicted in guides 68% of the time. Latest guide note (2026-05-28): More weekend lately. Quick 8:30-10 or 10-12 checks still worthwhile though as they may have stock held back! Again check 8-9 really",
      "confirmedCount": 0
    },
    "T007": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Thursdays (11/34), increasing trend. 3 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-06-25): Store holds product. Look for an opening push by employees or mid day",
      "confirmedCount": 3
    },
    "T112": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 9% of Thursdays (3/34), increasing trend. 2 confirmed recently. Predicted in guides 26% of the time. Latest guide note (2026-07-02): Alicia and Jer\u00f3nimo hit today and should have more Friday! San Juan likely for Friday whenever they receive shipment. San Clemente also likely for Fri...",
      "confirmedCount": 2
    },
    "T083": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Thursdays (10/34), increasing trend. 4 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-02): Likely holding for Friday",
      "confirmedCount": 4
    },
    "T069": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 9% of Thursdays (3/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Thursdays (11/34), increasing trend. 5 confirmed recently. Predicted in guides 12% of the time. Typically Opening. Latest guide note (2026-07-02): Usually Tuesday\u2019s/Thursdays here! Release weeks they tend to drop Friday\u2019s as well but heads will check be there a bit early!",
      "confirmedCount": 5
    },
    "T022": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Thursdays (3/34), decreasing trend. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-06-18): Worth a quick opening stop if you're already nearby. Never forget this store has randomly gone late at night before",
      "confirmedCount": 0
    },
    "T136": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Thursdays (2/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Thursdays (1/34), steady trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-02): Two stores here, Hills hit last week in afternoon but rotate both in the morning",
      "confirmedCount": 1
    },
    "T079": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 0% of Thursdays (0/34), increasing trend. Predicted in guides 12% of the time. Typically Opening. Latest guide note (2026-07-02): Still feels more like a Friday store but has shown it will occasionally leak inventory beforehand so can cbeck!",
      "confirmedCount": 0
    },
    "T047": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 12% of Thursdays (4/34), decreasing trend. 1 confirmed recently. Predicted in guides 41% of the time. Latest guide note (2026-05-28): When it skips Mondays it tends to Hit Thursday\u2019s so BE READY. EXPECT CHAIRS TONIGHT and heads to wait it out! Does",
      "confirmedCount": 1
    },
    "T043": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 18% of Thursdays (6/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T091": {
      "chance": "High",
      "window": "6-9PM",
      "reason": "Confirmed hit 15% of Thursdays (5/34), increasing trend. 1 confirmed recently. Predicted in guides 32% of the time. Typically 6-9PM. Latest guide note (2026-07-02): Morning through mid-afternoon remains strongest. Expected to hit tomorrow hits Tuesdays / Thursday\u2019s usually",
      "confirmedCount": 1
    },
    "T082": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 26%.",
      "confirmedCount": 0
    },
    "T064": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 18% of Thursdays (6/34), predicted in guides 82%.",
      "confirmedCount": 0
    },
    "T030": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Thursdays (10/34), increasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-07-02): Watch closely for FCFS items store gets tucked a but receives HEAVY stock so always worth checks! Lines start at 7am opening and ...",
      "confirmedCount": 1
    },
    "T161": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Thursdays (2/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T120": {
      "chance": "High",
      "window": "3-5pm",
      "reason": "Confirmed hit 21% of Thursdays (7/34), increasing trend. Predicted in guides 76% of the time. Typically 3-5pm. Latest guide note (2026-07-02): Hit Monday but continue checking because these stores appear to be a bit more random and can hit multiple times",
      "confirmedCount": 0
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 35% of Thursdays (12/34), increasing trend. 5 confirmed recently. Predicted in guides 26% of the time. Typically Opening. Latest guide note (2026-07-02): May have sold a bit late today. Opening and 10-12 remain strongest with additional waves always possible even into the evening",
      "confirmedCount": 5
    },
    "T051": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Thursdays (0/34), predicted in guides 18%.",
      "confirmedCount": 0
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 59% of Thursdays (20/34), increasing trend. 5 confirmed recently. Predicted in guides 74% of the time. Typically Opening. Latest guide note (2026-07-02): Look for a morning drop or vendor! Hit on Monday but store can drop multiple times as we have seen almost weekly! May be limited ...",
      "confirmedCount": 5
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 59% of Thursdays (20/34), decreasing trend. 3 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-06-25): SAME PLAN AS ALWAYS. Start at opening and keep HEAVY eyes from 11-1 because that remains the danger window here.",
      "confirmedCount": 3
    },
    "T111": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 9% of Thursdays (3/34), increasing trend. 3 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-02): Did not seem to hit so expect heads early here for a drop tomorrow !",
      "confirmedCount": 3
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Thursdays (3/34), increasing trend. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-07-02): Broke away from the usual schedule and sold a bit tonight late but expect more Friday!",
      "confirmedCount": 0
    },
    "T101": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T017": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Thursdays (5/34), steady trend. 1 confirmed recently. Predicted in guides 76% of the time. Typically Opening. Latest guide note (2026-07-02): Hit this week look for a bit more Friday morning",
      "confirmedCount": 1
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 35% of Thursdays (12/34), increasing trend. 5 confirmed recently. Predicted in guides 38% of the time. Typically Opening. Latest guide note (2026-07-02): Morning attention first, then another sweep around 1-4. The longer the day goes the more people tend to gather here. can hit late...",
      "confirmedCount": 5
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Thursdays (16/34), increasing trend. 3 confirmed recently. Predicted in guides 68% of the time. Typically Opening. Latest guide note (2026-07-02): Inventory is still believed to be sitting. Opening through 8-10 then 1-3.",
      "confirmedCount": 3
    },
    "T090": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Thursdays (2/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T143": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T070": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 9% of Thursdays (3/34), steady trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-06-25): A sleeper store that does indeed stock Pokemon. They just started receiving it, and we have not caught it yet. Check whenever you are free to!",
      "confirmedCount": 1
    },
    "T137": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Thursdays (1/34), increasing trend. 1 confirmed recently. Predicted in guides 9% of the time. Typically Opening. Latest guide note (2026-07-02): Store claims to be doing random drops but may be holding for Friday this week but worth a check!",
      "confirmedCount": 1
    },
    "T010": {
      "chance": "High",
      "window": "8-10am",
      "reason": "Confirmed hit 41% of Thursdays (14/34), increasing trend. 2 confirmed recently. Predicted in guides 29% of the time. Typically 8-10am. Latest guide note (2026-07-02): Worth watching did not seem to hit today and store sells CONSTANTLY in small batches multiple days a week",
      "confirmedCount": 2
    },
    "T106": {
      "chance": "High",
      "window": "5-7pm",
      "reason": "Confirmed hit 38% of Thursdays (13/34), decreasing trend. 1 confirmed recently. Predicted in guides 82% of the time. Typically 5-7pm. Latest guide note (2026-06-18): Morning and early afternoon remain strongest has not seemed to hit!",
      "confirmedCount": 1
    },
    "T071": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Thursdays (7/34), steady trend. Predicted in guides 41% of the time. Typically Opening. Latest guide note (2026-07-02): Midday and evening remain the better windows but usually sticks to Tuesday drops even on release weeks. People will check regardless tomorrow and Friday",
      "confirmedCount": 0
    },
    "T029": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Thursdays (2/34), steady trend. Predicted in guides 38% of the time. Latest guide note (2026-06-25): Tiny section and hidden inventory city. Ask GS directly because product rarely makes it to the shelf right away. Sold OP today",
      "confirmedCount": 0
    },
    "T100": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 35% of Thursdays (12/34), predicted in guides 35%.",
      "confirmedCount": 0
    },
    "T056": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Thursdays (4/34), increasing trend. Predicted in guides 38% of the time. Typically Opening. Latest guide note (2026-06-25): STILL KEEPING THINGS QUIET. Best looks remain 8-10, then another hard sweep around 12-2, then again 5-7 if they decide to wait for traffic to die down",
      "confirmedCount": 0
    },
    "T098": {
      "chance": "High",
      "window": "8-10am",
      "reason": "Confirmed hit 24% of Thursdays (8/34), increasing trend. 1 confirmed recently. Predicted in guides 26% of the time. Typically 8-10am. Latest guide note (2026-07-02): Timing call landed today and should hit AGAIN on Friday later morning!",
      "confirmedCount": 1
    },
    "T170": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 12% of Thursdays (4/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Thursdays (4/34), steady trend. 2 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-02): MAY be holding for Friday but can check at opening in case!",
      "confirmedCount": 2
    },
    "T164": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 9% of Thursdays (3/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T140": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 12% of Thursdays (4/34), steady trend. 3 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 3
    },
    "T066": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Thursdays (10/34), steady trend. 2 confirmed recently. Predicted in guides 38% of the time. Typically Opening. Latest guide note (2026-06-18): Again another store that may be dropping randomly more and more!",
      "confirmedCount": 2
    },
    "T045": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Thursdays (3/34), decreasing trend. 1 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-06-25): Keep checks in 8-10ish or 2-4 will either sell tomorrow or Friday ```",
      "confirmedCount": 1
    },
    "T128": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T048": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Thursdays (7/34), steady trend. 3 confirmed recently. Predicted in guides 32% of the time. Typically Opening. Latest guide note (2026-07-02): Typcially Fridays in release week but check morning time as they can sell other items!",
      "confirmedCount": 3
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Thursdays (7/34), increasing trend. 2 confirmed recently. Predicted in guides 82% of the time. Typically Opening. Latest guide note (2026-07-02): Opening through early afternoon still looks best. Small chance they sit on inventory until Friday so keep that in mind.",
      "confirmedCount": 2
    },
    "T077": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 6% of Thursdays (2/34), increasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-07-02): Back to Friday\u2019s here!",
      "confirmedCount": 1
    },
    "T033": {
      "chance": "High",
      "window": "11-2PM",
      "reason": "Confirmed hit 12% of Thursdays (4/34), increasing trend. 1 confirmed recently. Predicted in guides 50% of the time. Typically 11-2PM. Latest guide note (2026-07-02): Will receive stock tomorrow and 50/50 whether they sell or hold for Friday so expect heads to be here waiting from 8-11ish until st...",
      "confirmedCount": 1
    },
    "T044": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 56% of Thursdays (19/34), decreasing trend. 6 confirmed recently. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-07-02): BE READY check in the morning at opening does not seemed to have hit great store here",
      "confirmedCount": 6
    },
    "T096": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 12% of Thursdays (4/34), steady trend. 1 confirmed recently. Predicted in guides 6% of the time. Latest guide note (2026-06-04): Typically sells around 9:30-10:30 but recently sold so may hold for friday. Check in and ask",
      "confirmedCount": 1
    },
    "T095": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 12% of Thursdays (4/34), predicted in guides 21%.",
      "confirmedCount": 0
    },
    "T122": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Thursdays (6/34), decreasing trend. 1 confirmed recently. Predicted in guides 32% of the time. Typically Opening. Latest guide note (2026-06-25): DID NOT hit today! Be ready for round 2 tomorrow of a line forming!",
      "confirmedCount": 1
    },
    "T138": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 9% of Thursdays (3/34), predicted in guides 44%.",
      "confirmedCount": 0
    },
    "T092": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Thursdays (2/34), decreasing trend. 1 confirmed recently. Predicted in guides 29% of the time. Latest guide note (2026-05-28): Restocked earlier may receive a bit but Friday will be bigger drop",
      "confirmedCount": 1
    },
    "T063": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Thursdays (6/34), decreasing trend. 3 confirmed recently. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-06-11): Waiting for Friday here",
      "confirmedCount": 3
    },
    "T123": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Thursdays (1/34), decreasing trend. 1 confirmed recently. Predicted in guides 26% of the time. Latest guide note (2026-06-04): Has not seemed to hit and with IE schedule being wonky check in the morning!",
      "confirmedCount": 1
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 21% of Thursdays (7/34), increasing trend. 1 confirmed recently. Predicted in guides 38% of the time. Typically Opening. Latest guide note (2026-07-02): Opening employee push remains one of the safest bets. Continue checking later because store will sell multiple times a day",
      "confirmedCount": 1
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Thursdays (2/34), increasing trend. Predicted in guides 12% of the time. Latest guide note (2026-06-25): Was live today and again but off the guide",
      "confirmedCount": 0
    },
    "T024": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Thursdays (1/34), decreasing trend. 1 confirmed recently. Predicted in guides 15% of the time. Typically Opening. Latest guide note (2026-07-02): Did not stock up today check tomorrow again opening or more likely 10-12!```",
      "confirmedCount": 1
    },
    "T004": {
      "chance": "High",
      "window": "8-9:30am",
      "reason": "Confirmed hit 15% of Thursdays (5/34), decreasing trend. 3 confirmed recently. Predicted in guides 15% of the time. Typically 8-9:30am. Latest guide note (2026-06-25): STILL WAITING. Expect another morning crowd until this finally unloads. Best windows remain 8-9:30 and later around 3-6",
      "confirmedCount": 3
    },
    "T085": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Thursdays (2/34), decreasing trend. 1 confirmed recently. Predicted in guides 47% of the time. Latest guide note (2026-06-18): Sherwood",
      "confirmedCount": 1
    },
    "T116": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Thursdays (4/34), steady trend. 1 confirmed recently. Predicted in guides 12% of the time. Typically Opening. Latest guide note (2026-06-11): Likely tomorrow as when it skips Monday\u2019s it tends to",
      "confirmedCount": 1
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Thursdays (3/34), increasing trend. 2 confirmed recently. Predicted in guides 24% of the time. Typically Opening. Latest guide note (2026-06-25): Sold Blisters today and still could have more items, but the store may also choose to save some for Friday",
      "confirmedCount": 2
    },
    "T159": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 15% of Thursdays (5/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T052": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 18% of Thursdays (6/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T012": {
      "chance": "Medium",
      "window": "12-2pm",
      "reason": "Confirmed hit 44% of Thursdays (15/34), steady trend. 1 confirmed recently. Predicted in guides 29% of the time. Typically 12-2pm. Latest guide note (2026-07-02): Friday morning as it has been dropping the past weeks",
      "confirmedCount": 1
    },
    "T121": {
      "chance": "Medium",
      "window": "2-4pm",
      "reason": "Confirmed hit 29% of Thursdays (10/34), decreasing trend. 1 confirmed recently. Predicted in guides 53% of the time. Typically 2-4pm. Latest guide note (2026-07-02): Store has been all over the place so expect heads again to be waiting here until",
      "confirmedCount": 1
    },
    "T058": {
      "chance": "High",
      "window": "6-8PM",
      "reason": "Confirmed hit 12% of Thursdays (4/34), increasing trend. Predicted in guides 76% of the time. Typically 6-8PM. Latest guide note (2026-07-02): Keep both stores active. Opening first, another look around 10-12, then later in the day. Broadway can get later shipments",
      "confirmedCount": 0
    },
    "T081": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Thursdays (1/34), increasing trend. 1 confirmed recently. Predicted in guides 6% of the time. Latest guide note (2026-07-02): May have hit today so check again Friday!",
      "confirmedCount": 1
    },
    "T171": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 12% of Thursdays (4/34), steady trend. 3 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 3
    },
    "T086": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 9%.",
      "confirmedCount": 0
    },
    "T008": {
      "chance": "High",
      "window": "1-3pm",
      "reason": "Confirmed hit 15% of Thursdays (5/34), increasing trend. 1 confirmed recently. Predicted in guides 79% of the time. Typically 1-3pm. Latest guide note (2026-07-02): Quiet sleeper. Best windows remain 8-9:30 and 1-3 with employee pushes making it possible multiple times a week/day",
      "confirmedCount": 1
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Thursdays (4/34), steady trend. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-02): Likely holding for Friday here!",
      "confirmedCount": 0
    },
    "T039": {
      "chance": "High",
      "window": "11am-1pm",
      "reason": "Confirmed hit 41% of Thursdays (14/34), increasing trend. 5 confirmed recently. Predicted in guides 71% of the time. Typically 11am-1pm. Latest guide note (2026-07-02): Main focus stays around 10-12. Store MAY hold until Friday but check in and ask as release is not super big!",
      "confirmedCount": 5
    },
    "T018": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 35% of Thursdays (12/34), decreasing trend. 2 confirmed recently. Predicted in guides 35% of the time. Latest guide note (2026-07-02): Hit yesterday but can check in for employee pushes",
      "confirmedCount": 2
    },
    "T133": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 12% of Thursdays (4/34), decreasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Latest guide note (2026-06-25): Both may hold a bit for Friday. Slover sold today earlier in the day. Summit can hit at night like it did lastbweek",
      "confirmedCount": 1
    },
    "T117": {
      "chance": "Medium",
      "window": "2-6pm",
      "reason": "Confirmed hit 6% of Thursdays (2/34), decreasing trend. 1 confirmed recently. Predicted in guides 47% of the time. Typically 2-6pm. Latest guide note (2026-07-02): Has not been hitting Thursdays so should be friday or Monday but still check in in case",
      "confirmedCount": 1
    },
    "T031": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Thursdays (11/34), increasing trend. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-07-02): Opening and shortly after remain your best bet. Does drop on release days with opening or later morning though",
      "confirmedCount": 0
    },
    "T110": {
      "chance": "High",
      "window": "5-6AM",
      "reason": "Confirmed hit 74% of Thursdays (25/34), steady trend. 6 confirmed recently. Predicted in guides 100% of the time. Typically 5-6AM. Latest guide note (2026-07-02): Expect another huge allocation. Lottery setup should continue with another large crowd being here right at 8am when line up is allowed...",
      "confirmedCount": 6
    },
    "T134": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Thursdays (0/34), predicted in guides 6%.",
      "confirmedCount": 0
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 35% of Thursdays (12/34), decreasing trend. 3 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-06-25): 11-2 here usually but would imagine they wait a bit",
      "confirmedCount": 3
    },
    "T169": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 9% of Thursdays (3/34), increasing trend. 2 confirmed recently. Predicted in guides 15% of the time. Latest guide note (2026-06-25): Both have a shot from 8-10 or 12-3. Worth checking both locations as they can sell randomly",
      "confirmedCount": 2
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Thursdays (16/34), increasing trend. 2 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-07-02): Cochran may be moving to Friday\u2019s only! Madera still deserves attention from 10-12 as they seem to be not in the Friday wave yet",
      "confirmedCount": 2
    },
    "T166": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 74% of Thursdays (25/34), increasing trend. 5 confirmed recently. Predicted in guides 85% of the time. Typically Opening. Latest guide note (2026-07-02): Store hits Thursday\u2019s whether or not they take a VQ will depend on employees! Expect heads here at opening 7am and then people to...",
      "confirmedCount": 5
    },
    "T089": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Thursdays (2/34), predicted in guides 18%.",
      "confirmedCount": 0
    },
    "T041": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Thursdays (1/34), increasing trend. 1 confirmed recently. Predicted in guides 12% of the time. Latest guide note (2026-07-02): Has been holding for Fridays a bit and also it\u2019s release week but heads will check regardless morning time!",
      "confirmedCount": 1
    },
    "T034": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Thursdays (9/34), decreasing trend. 1 confirmed recently. Predicted in guides 44% of the time. Typically Opening. Latest guide note (2026-05-28): Morning VQ should go up at Friday at opening",
      "confirmedCount": 1
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Thursdays (5/34), steady trend. 2 confirmed recently. Predicted in guides 74% of the time. Typically Opening. Latest guide note (2026-07-02): Did exactly what was posted and sold at opening today.",
      "confirmedCount": 2
    },
    "T114": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 15% of Thursdays (5/34), steady trend. 2 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-06-25): Same as Jeronimo. Unfortunately, the 2 major MV stores are grimey/selective with who they sell Pokemon product to.",
      "confirmedCount": 2
    },
    "T087": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 24% of Thursdays (8/34), decreasing trend. 1 confirmed recently. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-06-04): Expect people there before opening. If it misses early keep rotating all day",
      "confirmedCount": 1
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 29% of Thursdays (10/34), increasing trend. 4 confirmed recently. Predicted in guides 26% of the time. Typically Opening. Latest guide note (2026-07-02): Another major focus. Mayyyy end up pushing to Friday but heads will be checking in case!",
      "confirmedCount": 4
    },
    "T131": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Thursdays (1/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T130": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T119": {
      "chance": "High",
      "window": "9-10am",
      "reason": "Confirmed hit 24% of Thursdays (8/34), increasing trend. Predicted in guides 47% of the time. Typically 9-10am. Latest guide note (2026-07-02): Staff hinted at more random vendor releases instead of the old schedule. Continue checking in expect people to try and tuck this store a bit so be the up...",
      "confirmedCount": 0
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 9% of Thursdays (3/34), increasing trend. 3 confirmed recently. Predicted in guides 44% of the time. Typically Opening. Latest guide note (2026-07-02): Morning shipment check. Store has been selling closer to when inventory arrives so keep an eye on opening before circling back late...",
      "confirmedCount": 3
    },
    "T145": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "Confirmed hit 3% of Thursdays (1/34), decreasing trend. 1 confirmed recently. Predicted in guides 18% of the time. Typically 9-11AM. Latest guide note (2026-06-25): Has dropped previously 9-11AM - check in at guest services!",
      "confirmedCount": 1
    },
    "T102": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 26% of Thursdays (9/34), decreasing trend. 4 confirmed recently. Predicted in guides 71% of the time. Typically Opening. Latest guide note (2026-07-02): Morning check in case but may wait until evening or Friday morning",
      "confirmedCount": 4
    },
    "T088": {
      "chance": "High",
      "window": "1-3pm",
      "reason": "Confirmed hit 9% of Thursdays (3/34), increasing trend. 3 confirmed recently. Predicted in guides 38% of the time. Typically 1-3pm. Latest guide note (2026-07-02): VQ happened exactly as expected today. Next drop Friday here",
      "confirmedCount": 3
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 32% of Thursdays (11/34), increasing trend. 5 confirmed recently. Predicted in guides 38% of the time. Typically Opening. Latest guide note (2026-07-02): MULTIPLE WAVE MACHINE. Opening, 9-11, then 1-3. Keep looping they restock constantly",
      "confirmedCount": 5
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Thursdays (1/34), increasing trend. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-07-02): Continues proving it can release throughout the morning or later in the day. Definitely keep this in rotation will sell multiple batches even if they sol...",
      "confirmedCount": 0
    },
    "T093": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Thursdays (0/34), predicted in guides 21%.",
      "confirmedCount": 0
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Thursdays (5/34), increasing trend. 3 confirmed recently. Predicted in guides 24% of the time. Typically Opening. Latest guide note (2026-07-02): Thursday trend continues looking strong. Last week hit but just smaller items. Likely to sell and hold release day items for Friday",
      "confirmedCount": 3
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 44% of Thursdays (15/34), increasing trend. 3 confirmed recently. Predicted in guides 65% of the time. Typically Opening. Latest guide note (2026-07-02): Never a bad stop. Opening remains strong but later releases continue happening consistently.",
      "confirmedCount": 3
    },
    "T146": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 6% of Thursdays (2/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T019": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Thursdays (5/34), increasing trend. Predicted in guides 44% of the time. Typically Opening. Latest guide note (2026-07-02): Still feels like heavier inventory may be waiting for Friday but opening and 11-1 remain worthwhile especially at Summit!",
      "confirmedCount": 0
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Thursdays (4/34), increasing trend. 2 confirmed recently. Predicted in guides 21% of the time. Typically Opening. Latest guide note (2026-07-02): Hit yesterday opening so can be due! Will either sell again tomorrow morning or Friday! (unless a sneaky Thursday night drop happe...",
      "confirmedCount": 2
    },
    "T016": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Confirmed hit 15% of Thursdays (5/34), steady trend. Predicted in guides 29% of the time. Typically Opening. Latest guide note (2026-06-18): Sleeper opening option. Stayed quiet today and people may overlook it while chasing bigger stores. Update if you check",
      "confirmedCount": 0
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 59% of Thursdays (20/34), steady trend. 5 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-02): Opening shipment checks remain mandatory but keep circling back around 11-1",
      "confirmedCount": 5
    },
    "T001": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Thursdays (1/34), steady trend. 1 confirmed recently. Predicted in guides 44% of the time. Latest guide note (2026-06-18): Two stores here keep an eye out for a morning push at both!",
      "confirmedCount": 1
    },
    "T054": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Thursdays (6/34), increasing trend. 2 confirmed recently. Predicted in guides 65% of the time. Typically Opening. Latest guide note (2026-07-02): Opening is still your best opportunity with backup checks around 10-12 since Gardena stocked but expected for Friday at openjng",
      "confirmedCount": 2
    },
    "T139": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 9% of Thursdays (3/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Thursdays (16/34), decreasing trend. 4 confirmed recently. Predicted in guides 88% of the time. Typically Opening. Latest guide note (2026-07-02): Overdue for a 7am drop so check again and if not expect a HAUL on Friday",
      "confirmedCount": 4
    },
    "T035": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 6% of Thursdays (2/34), steady trend. Predicted in guides 9% of the time. Latest guide note (2026-06-11): Main window still sits around 8-10. Shipments tend to land then with occasional lighter activity later. If tomorrow misses then Friday should be SLEEPER",
      "confirmedCount": 0
    },
    "T115": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 9% of Thursdays (3/34), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 12% of Thursdays (4/34), increasing trend. 1 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-07-02): Again basically daily checks here at 7am! Store drops whatever they receive",
      "confirmedCount": 1
    },
    "T125": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Thursdays (1/34), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 18% of Thursdays (6/34), increasing trend. 1 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-07-02): Stayed quiet which makes opening tomorrow even more important.",
      "confirmedCount": 1
    },
    "T155": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T104": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Thursdays (1/34), predicted in guides 9%.",
      "confirmedCount": 0
    },
    "T013": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Thursdays (1/34), increasing trend. Predicted in guides 18% of the time. Typically Opening. Latest guide note (2026-06-18): Morning check is solid but pls keep eyes from 12-4 ask at guest services!",
      "confirmedCount": 0
    }
  },
  "friday": {
    "T055": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 37% of Fridays (11/30), increasing trend. 4 confirmed recently. Predicted in guides 43% of the time. Typically Opening. Latest guide note (2026-07-03): Sleeper opening option here at 7AM as store has been putting small amounts of product out this week",
      "confirmedCount": 4
    },
    "T167": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 10% of Fridays (3/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T147": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Fridays (1/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T076": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Fridays (14/30), decreasing trend. 3 confirmed recently. Predicted in guides 37% of the time. Typically Opening. Latest guide note (2026-07-03): Don\u2019t be surprised to see some items here tomorrow!",
      "confirmedCount": 3
    },
    "T099": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 37% of Fridays (11/30), increasing trend. 5 confirmed recently. Predicted in guides 57% of the time. Typically Opening. Latest guide note (2026-07-03): Store is holding back stock so check again with random timing morning and later but should sell at least a small batch at opening",
      "confirmedCount": 5
    },
    "T109": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 40% of Fridays (12/30), increasing trend. 3 confirmed recently. Predicted in guides 40% of the time. Typically Opening. Latest guide note (2026-06-26): Fridays are back here so BE READY AT OPENING. Chairs ahould already be out",
      "confirmedCount": 3
    },
    "T127": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 7% of Fridays (2/30), steady trend. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-06-26): Neither has really hit this week so expect lines at both!",
      "confirmedCount": 0
    },
    "T080": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Fridays (1/30), increasing trend. Predicted in guides 30% of the time. Typically Opening. Latest guide note (2026-06-26): Opening drop possible if it stayed quiet today",
      "confirmedCount": 0
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 33% of Fridays (10/30), decreasing trend. 1 confirmed recently. Predicted in guides 77% of the time. Typically Opening. Latest guide note (2026-07-03): Treat these as one pair. Both feel primed for opening activity or a morning VQ especially Pomona which has not seemed to drop!",
      "confirmedCount": 1
    },
    "T135": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 7% of Fridays (2/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T049": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 23% of Fridays (7/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T046": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Fridays (0/30), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T107": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 17% of Fridays (5/30), increasing trend. 4 confirmed recently. Predicted in guides 30% of the time. Latest guide note (2026-07-03): Lines usually strongest around 11-2. SHOULD GO and if nothing people will wait it out a bit",
      "confirmedCount": 4
    },
    "T074": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 23% of Fridays (7/30), increasing trend. 3 confirmed recently. Predicted in guides 73% of the time. Typically Opening. Latest guide note (2026-06-26): Opening is expected and locals will be all over it as it seemed quiet",
      "confirmedCount": 3
    },
    "T007": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 30% of Fridays (9/30), steady trend. 2 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-06-26): Morning peep for employee pushed product. Has hit multiple days already though",
      "confirmedCount": 2
    },
    "T069": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Fridays (14/30), steady trend. 2 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-07-03): Should sell at opening and chairs will go out tonight",
      "confirmedCount": 2
    },
    "T022": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 3% of Fridays (1/30), decreasing trend. Predicted in guides 87% of the time. Typically Opening. Latest guide note (2026-06-19): Should sell at opening here 7am as well!",
      "confirmedCount": 0
    },
    "T105": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 23% of Fridays (7/30), increasing trend. 3 confirmed recently. Predicted in guides 17% of the time. Typically Opening. Latest guide note (2026-06-26): Look for opening/morning drop but like other store may be lighter stock as well",
      "confirmedCount": 3
    },
    "T079": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 20% of Fridays (6/30), steady trend. 3 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-07-03): Has been selling sporadically and not as much Fridays but check opening in case",
      "confirmedCount": 3
    },
    "T047": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 20% of Fridays (6/30), steady trend. 2 confirmed recently. Predicted in guides 20% of the time. Latest guide note (2026-07-03): Last week sold on Friday around 9-11 so please keep eyes here!",
      "confirmedCount": 2
    },
    "T082": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 60% of Fridays (18/30), steady trend. 4 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-03): Friday opening drop and chairs will start tonight",
      "confirmedCount": 4
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 77% of Fridays (23/30), steady trend. 5 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-03): Opening first but if they spin you, run it back 10-1 and again 3-6. Multiple days now they have sold around noon even though today\u2019s s...",
      "confirmedCount": 5
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 27% of Fridays (8/30), steady trend. 2 confirmed recently. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-07-03): Has not hit check both TCG wall and GS opening and 8-10ish",
      "confirmedCount": 2
    },
    "T101": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 60% of Fridays (18/30), increasing trend. 3 confirmed recently. Predicted in guides 57% of the time. Typically Opening. Latest guide note (2026-06-26): Consistent Friday morning. Warn you every week. They may take a VQ or sell FCFS at opening so BE READY",
      "confirmedCount": 3
    },
    "T017": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Fridays (14/30), decreasing trend. 1 confirmed recently. Predicted in guides 90% of the time. Typically Opening. Latest guide note (2026-07-03): Opening employee push possible. If not then focus again around 12-4 for vendor timing.",
      "confirmedCount": 1
    },
    "T141": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 27% of Fridays (8/30), increasing trend. 4 confirmed recently. Predicted in guides 17% of the time. Typically Opening. Latest guide note (2026-07-03): Opening drop is likely and chairs will go down early",
      "confirmedCount": 4
    },
    "T143": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Fridays (1/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T137": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 17% of Fridays (5/30), increasing trend. 2 confirmed recently. Predicted in guides 13% of the time. Typically Opening. Latest guide note (2026-07-03): Sold today a bigger pack so tomorrow may not drop tomorrow",
      "confirmedCount": 2
    },
    "T010": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 30% of Fridays (9/30), increasing trend. 3 confirmed recently. Predicted in guides 33% of the time. Typically Opening. Latest guide note (2026-07-03): Look for opening drop. Always sells batches",
      "confirmedCount": 3
    },
    "T152": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Fridays (1/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T071": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 7% of Fridays (2/30), increasing trend. Predicted in guides 73% of the time. Typically Opening. Latest guide note (2026-06-26): Both have sold this week. They both also hold back product but not as locked as others",
      "confirmedCount": 0
    },
    "T098": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 57% of Fridays (17/30), increasing trend. 3 confirmed recently. Predicted in guides 33% of the time. Typically Opening. Latest guide note (2026-06-26): Look for line by opening and ask about drop/shipment store tends to confirm here a bit earlier if they will sell```",
      "confirmedCount": 3
    },
    "T100": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 53% of Fridays (16/30), steady trend. 1 confirmed recently. Predicted in guides 33% of the time. Typically Opening. Latest guide note (2026-07-03): Should do release day items at opening!",
      "confirmedCount": 1
    },
    "T140": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Fridays (1/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T045": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 67% of Fridays (20/30), steady trend. 5 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-03): Same situation as Bellflower. Expecting the drop tomorrow. Please be checking from 10-12.",
      "confirmedCount": 5
    },
    "T128": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Fridays (1/30), predicted in guides 3%.",
      "confirmedCount": 0
    },
    "T077": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 93% of Fridays (28/30), steady trend. 4 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-03): Start in the morning but don\u2019t ignore afternoon as usually. Timing here has been random lately",
      "confirmedCount": 4
    },
    "T092": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 57% of Fridays (17/30), steady trend. 4 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-07-03): Like CM Harbor this has been selling EARLY now so expect heads and chairs ready. People will wait it out and store can sell whenever it...",
      "confirmedCount": 4
    },
    "T063": {
      "chance": "High",
      "window": "4-5am",
      "reason": "Confirmed hit 80% of Fridays (24/30), steady trend. 5 confirmed recently. Predicted in guides 100% of the time. Typically 4-5am. Latest guide note (2026-06-26): Usually a Friday store, claimed drop would be cancelled if people line up before 5am we shall see",
      "confirmedCount": 5
    },
    "T123": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 7% of Fridays (2/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T097": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 50% of Fridays (15/30), predicted in guides 47%.",
      "confirmedCount": 0
    },
    "T159": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Fridays (1/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T052": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 20% of Fridays (6/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T058": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 30% of Fridays (9/30), increasing trend. 1 confirmed recently. Predicted in guides 80% of the time. Typically Opening. Latest guide note (2026-07-03): Opening then 10-12 fallback. Don\u2019t let them spin you because this store holds and sells whenever they choose and can also sell late",
      "confirmedCount": 1
    },
    "T081": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 20% of Fridays (6/30), steady trend. 3 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 3
    },
    "T008": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 30% of Fridays (9/30), decreasing trend. 2 confirmed recently. Predicted in guides 67% of the time. Typically Opening. Latest guide note (2026-06-26): Has not stocked Poke so BIG eyes tomorrow! If nothing at open look for vendor 8-10",
      "confirmedCount": 2
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 80% of Fridays (24/30), steady trend. 3 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-03): Opening seller and should move as it has not seemed to hit",
      "confirmedCount": 3
    },
    "T018": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 47% of Fridays (14/30), steady trend. 3 confirmed recently. Predicted in guides 10% of the time. Latest guide note (2026-07-03): Employees have been holding some stuff back so be ready in case",
      "confirmedCount": 3
    },
    "T039": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 33% of Fridays (10/30), increasing trend. 4 confirmed recently. Predicted in guides 13% of the time. Typically Opening. Latest guide note (2026-07-03): Also did not end up selling today so be ready for opening checks! Wait it out a bit if nothing",
      "confirmedCount": 4
    },
    "T117": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 7% of Fridays (2/30), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-06-26): Morning through 11 remains strongest with another possible window around 2-4.",
      "confirmedCount": 1
    },
    "T110": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 10% of Fridays (3/30), decreasing trend. 1 confirmed recently. Predicted in guides 57% of the time. Typically Opening. Latest guide note (2026-06-19): Moved today\u2019s drop to tomorrow. Expect heads early and treat it like a real morning priority and again no lining up before 6am",
      "confirmedCount": 1
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 60% of Fridays (18/30), steady trend. 5 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-07-03): Opening first, then run it back 12-2 if the morning misses. This store can move early and still have another wave later",
      "confirmedCount": 5
    },
    "T169": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 10% of Fridays (3/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 40% of Fridays (12/30), steady trend. 3 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-03): Both need opening checks. Madera more likely for mid day as usual",
      "confirmedCount": 3
    },
    "T089": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 50% of Fridays (15/30), increasing trend. 3 confirmed recently. Predicted in guides 77% of the time. Typically Opening. Latest guide note (2026-06-26): Friday drops seem to be sticking. Usually from 8-11 here. Last week only sold OP but expect them to sell everything they receive to...",
      "confirmedCount": 3
    },
    "T034": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 37% of Fridays (11/30), increasing trend. 4 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-07-03): Friday opening VQ usually or may do FCFS so be ready for either line will be here in early",
      "confirmedCount": 4
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 50% of Fridays (15/30), increasing trend. 3 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-03): Opening check and ASK GS. Should have stock and opens at 7AM. If they spin you go back shortly after. Store tends to sell Weds + Fr...",
      "confirmedCount": 3
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 20% of Fridays (6/30), decreasing trend. 3 confirmed recently. Predicted in guides 63% of the time. Typically Opening. Latest guide note (2026-06-26): Has not hit and is seeming like a major option for opening through 10am```",
      "confirmedCount": 3
    },
    "T130": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 0% of Fridays (0/30), predicted in guides 83%.",
      "confirmedCount": 0
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 77% of Fridays (23/30), steady trend. 5 confirmed recently. Predicted in guides 87% of the time. Typically Opening. Latest guide note (2026-07-03): Morning VQ at opening and long lines will be here",
      "confirmedCount": 5
    },
    "T145": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 13% of Fridays (4/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T093": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 7% of Fridays (2/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T015": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 50% of Fridays (15/30), decreasing trend. 6 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-03): Big store and opening priority. They almost always find a way to sell at least something here",
      "confirmedCount": 6
    },
    "T146": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 13% of Fridays (4/30), steady trend. 2 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 2
    },
    "T019": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 13% of Fridays (4/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T132": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 53% of Fridays (16/30), increasing trend. 4 confirmed recently. Predicted in guides 33% of the time. Typically Opening. Latest guide note (2026-06-26): Sold a bit today so may skip tomorrow ```",
      "confirmedCount": 4
    },
    "T016": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Fridays (4/30), increasing trend. Predicted in guides 20% of the time. Typically Opening. Latest guide note (2026-06-26): Sleeper opening check since it is has been a bit more quiet",
      "confirmedCount": 0
    },
    "T054": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 17% of Fridays (5/30), steady trend. 1 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-07-03): Hit a bit earlier this week and does tend to go quick but can peep at 7am or 9-10",
      "confirmedCount": 1
    },
    "T115": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 17% of Fridays (5/30), increasing trend. 1 confirmed recently. Predicted in guides 83% of the time. Typically Opening. Latest guide note (2026-06-26): Solid opening option and good rotation through the day if it doesn\u2019t go early",
      "confirmedCount": 1
    },
    "T084": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 7% of Fridays (2/30), increasing trend. 1 confirmed recently. Predicted in guides 10% of the time. Typically Opening. Latest guide note (2026-07-03): Basically a lock to check every day at opening here!",
      "confirmedCount": 1
    },
    "T050": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 10% of Fridays (3/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T059": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 20% of Fridays (6/30), increasing trend. 2 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-07-03): Usually 9-11 and not right at opening. Don\u2019t make this an opening priority unless nearby```",
      "confirmedCount": 2
    },
    "T057": {
      "chance": "High",
      "window": "5-8pm",
      "reason": "Confirmed hit 23% of Fridays (7/30), decreasing trend. 2 confirmed recently. Predicted in guides 37% of the time. Typically 5-8pm. Latest guide note (2026-06-26): Sold today so not super likely. Tend to sell again on the weekend usually Sunday. They sell at their own discretion though so never a ...",
      "confirmedCount": 2
    },
    "T124": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 20% of Fridays (6/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T168": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Fridays (4/30), decreasing trend. 1 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-06-26): Two stores, possible for some items with a slight lean to Grand but usually both would hold for Monday ```",
      "confirmedCount": 1
    },
    "T002": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 33% of Fridays (10/30), increasing trend. Predicted in guides 33% of the time. Typically Opening. Latest guide note (2026-06-26): Opening through 11AM. Look for employees to confirm before opening and push product themselves",
      "confirmedCount": 0
    },
    "T032": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 23% of Fridays (7/30), increasing trend. 3 confirmed recently. Predicted in guides 20% of the time. Typically Opening. Latest guide note (2026-07-03): Look for opening drop. Will be limited but likely!",
      "confirmedCount": 3
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 27% of Fridays (8/30), decreasing trend. 4 confirmed recently. Predicted in guides 20% of the time. Typically Opening. Latest guide note (2026-07-03): Didn\u2019t drop tends to hit evenings so don\u2019t ignore later but obviously morning is a great check 8-10",
      "confirmedCount": 4
    },
    "T053": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 33% of Fridays (10/30), steady trend. 4 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-07-03): Both should move opening or shortly after. Weho receives solid amounts and sold light today. Sunset will have a solid line prior to ope...",
      "confirmedCount": 4
    },
    "T036": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 67% of Fridays (20/30), steady trend. 3 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-06-26): May sell items FCFS at opening or take a VQ line will be here EARLY EARLY",
      "confirmedCount": 3
    },
    "T072": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 63% of Fridays (19/30), increasing trend. 4 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-06-26): Friday opening store as well. Skipped last week so heads will be on it but chance it skips again",
      "confirmedCount": 4
    },
    "T094": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 23% of Fridays (7/30), steady trend. 3 confirmed recently. Predicted in guides 13% of the time. Latest guide note (2026-07-03): Check morning time for some items ask them :)",
      "confirmedCount": 3
    },
    "T037": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 33% of Fridays (10/30), increasing trend. 3 confirmed recently. Predicted in guides 77% of the time. Typically Opening. Latest guide note (2026-07-03): Has moved off Sundays so check tomorrow opening through 9:30!",
      "confirmedCount": 3
    },
    "T112": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 20% of Fridays (6/30), steady trend. 3 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 3
    },
    "T083": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 63% of Fridays (19/30), increasing trend. 4 confirmed recently. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-07-03): Morning 8-10 check but did sell a bit this week as posted. Store tends to hold back items either way```",
      "confirmedCount": 4
    },
    "T078": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 33% of Fridays (10/30), steady trend. 3 confirmed recently. Predicted in guides 97% of the time. Typically Opening. Latest guide note (2026-06-26): Hit today as warned so may be lighter tomorrow but check in in case",
      "confirmedCount": 3
    },
    "T136": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 13% of Fridays (4/30), steady trend. 1 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-03): Check in at open! 7-9 in general here",
      "confirmedCount": 1
    },
    "T043": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 13% of Fridays (4/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T091": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 7% of Fridays (2/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T064": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 57% of Fridays (17/30), steady trend. 4 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-06-26): Friday mornings have become the pattern here so opening movement is likely",
      "confirmedCount": 4
    },
    "T126": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Fridays (14/30), steady trend. 5 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-06-26): Opening drop and people will line up early. Store sold Monday but may still",
      "confirmedCount": 5
    },
    "T030": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 53% of Fridays (16/30), steady trend. 4 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-07-03): Expect line by opening with people waiting 7-8 for possible FCFS. Need more heads here who are UPDATING",
      "confirmedCount": 4
    },
    "T060": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Fridays (4/30), increasing trend. 3 confirmed recently. Predicted in guides 23% of the time. Typically Opening. Latest guide note (2026-07-03): Usually Fridays here. If not right at opening then 9-11",
      "confirmedCount": 3
    },
    "T042": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 17% of Fridays (5/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T120": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 10% of Fridays (3/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T051": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 10% of Fridays (3/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T005": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 40% of Fridays (12/30), increasing trend. 4 confirmed recently. Predicted in guides 23% of the time. Typically Opening. Latest guide note (2026-07-03): Store sold yesterday but likely to have some items tomorrow but will sell sporadically",
      "confirmedCount": 4
    },
    "T118": {
      "chance": "High",
      "window": "2-3PM",
      "reason": "Confirmed hit 80% of Fridays (24/30), steady trend. 6 confirmed recently. Predicted in guides 100% of the time. Typically 2-3PM. Latest guide note (2026-07-03): Friday random number draw usually starts at 3PM and can cover 100-200 people.",
      "confirmedCount": 6
    },
    "T111": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 67% of Fridays (20/30), steady trend. 3 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-07-03): Opening check again in case as today\u2019s drop was pushed back from Weds so may end up having a bit more. May also receive around 12-4 if ...",
      "confirmedCount": 3
    },
    "T113": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 7% of Fridays (2/30), predicted in guides 13%.",
      "confirmedCount": 0
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 43% of Fridays (13/30), increasing trend. 5 confirmed recently. Predicted in guides 20% of the time. Typically Opening. Latest guide note (2026-07-03): Did not end up selling today. BE READY AT OPENING",
      "confirmedCount": 5
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Fridays (14/30), increasing trend. 3 confirmed recently. Predicted in guides 57% of the time. Typically Opening. Latest guide note (2026-07-03): Opening first, then 8-10 and 2-5 if nothing",
      "confirmedCount": 3
    },
    "T153": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 13% of Fridays (4/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T090": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 80% of Fridays (24/30), steady trend. 6 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-07-03): Morning VQ or drop. Store has been selling EARLY lately so chairs already out!",
      "confirmedCount": 6
    },
    "T070": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 43% of Fridays (13/30), decreasing trend. 4 confirmed recently. Predicted in guides 33% of the time. Typically Opening. Latest guide note (2026-07-03): May drop tomorrow! If not should be either Saturday or Sunday morning",
      "confirmedCount": 4
    },
    "T108": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 27% of Fridays (8/30), increasing trend. 1 confirmed recently. Predicted in guides 17% of the time. Typically Opening. Latest guide note (2026-07-03): Can check for small items but may hold until Monday as usual here",
      "confirmedCount": 1
    },
    "T106": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 17% of Fridays (5/30), increasing trend. 3 confirmed recently. Predicted in guides 47% of the time. Latest guide note (2026-07-03): Look for a morning drop here people tend to stay quiet but should hit even if limited!",
      "confirmedCount": 3
    },
    "T029": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 10% of Fridays (3/30), increasing trend. Predicted in guides 53% of the time. Typically Opening. Latest guide note (2026-06-26): Two stores here and may be either opening or afternoon! Heads will check regardless at both",
      "confirmedCount": 0
    },
    "T154": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 3% of Fridays (1/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T056": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Fridays (4/30), steady trend. 3 confirmed recently. Predicted in guides 90% of the time. Typically Opening. Latest guide note (2026-07-03): Opening check as they have not sold the whole week!",
      "confirmedCount": 3
    },
    "T170": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 7% of Fridays (2/30), increasing trend. 1 confirmed recently. Predicted in guides 10% of the time. Typically Opening. Latest guide note (2026-06-19): Expect people staged before doors open. Get there early.",
      "confirmedCount": 1
    },
    "T068": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 63% of Fridays (19/30), increasing trend. 4 confirmed recently. Predicted in guides 40% of the time. Typically Opening. Latest guide note (2026-07-03): Fri-Sun type store. Opening is worth it but if nothing happens, 4-8 or the weekend becomes stronger",
      "confirmedCount": 4
    },
    "T164": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 23% of Fridays (7/30), increasing trend. 1 confirmed recently. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-06-19): Sleeper opening option here 8am!",
      "confirmedCount": 1
    },
    "T066": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 63% of Fridays (19/30), increasing trend. 5 confirmed recently. Predicted in guides 67% of the time. Typically Opening. Latest guide note (2026-07-03): Morning tickets expected and store should still have some form of product. Can also sell small amounts later in the day",
      "confirmedCount": 5
    },
    "T048": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 37% of Fridays (11/30), steady trend. 2 confirmed recently. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-06-26): Check in with both at opening could be holding a bit ```",
      "confirmedCount": 2
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 33% of Fridays (10/30), steady trend. 3 confirmed recently. Predicted in guides 90% of the time. Typically Opening. Latest guide note (2026-06-26): 7AM opening is a solid option as they should receive more! If nothing then check later in the day will have more product before the wee...",
      "confirmedCount": 3
    },
    "T033": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 23% of Fridays (7/30), steady trend. 2 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-03): Slept on store that needs to be checked in with more. Ask throughout the day at guest services + check the aisle.```",
      "confirmedCount": 2
    },
    "T044": {
      "chance": "High",
      "window": "7-10am",
      "reason": "Confirmed hit 40% of Fridays (12/30), decreasing trend. 1 confirmed recently. Predicted in guides 87% of the time. Typically 7-10am. Latest guide note (2026-07-03): Morning look in case inventory was held back but there are probably stronger targets available.",
      "confirmedCount": 1
    },
    "T096": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 103% of Fridays (31/30), steady trend. 3 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-03): Stay on it from 9-11ish. This store is known for lying and playing games",
      "confirmedCount": 3
    },
    "T095": {
      "chance": "High",
      "window": "9-11AM",
      "reason": "Confirmed hit 20% of Fridays (6/30), steady trend. 2 confirmed recently. Predicted in guides 13% of the time. Typically 9-11AM. Latest guide note (2026-06-26): Mall just stocked so check in here random times",
      "confirmedCount": 2
    },
    "T122": {
      "chance": "Medium",
      "window": "11-2PM",
      "reason": "Confirmed hit 23% of Fridays (7/30), increasing trend. 1 confirmed recently. Predicted in guides 13% of the time. Typically 11-2PM. Latest guide note (2026-07-03): Endes up selling today so look for release day product tomorrow",
      "confirmedCount": 1
    },
    "T138": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 27% of Fridays (8/30), increasing trend. 2 confirmed recently. Predicted in guides 47% of the time. Typically Opening. Latest guide note (2026-07-03): Opening check but timing can also randomly shift here",
      "confirmedCount": 2
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 60% of Fridays (18/30), increasing trend. 4 confirmed recently. Predicted in guides 60% of the time. Typically Opening. Latest guide note (2026-07-03): PRIORITY opening check again. Store should sell",
      "confirmedCount": 4
    },
    "T024": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Fridays (14/30), increasing trend. 2 confirmed recently. Predicted in guides 43% of the time. Typically Opening. Latest guide note (2026-07-03): Sold a bigger amount this week. Heads will check in case and could sell other items",
      "confirmedCount": 2
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 40% of Fridays (12/30), steady trend. 4 confirmed recently. Predicted in guides 7% of the time. Typically Opening. Latest guide note (2026-07-03): The other pair of stores to be ready for by opening heavy heads will be here!",
      "confirmedCount": 4
    },
    "T085": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 77% of Fridays (23/30), increasing trend. 5 confirmed recently. Predicted in guides 77% of the time. Typically Opening. Latest guide note (2026-07-03): Opening drop with heads already posted up",
      "confirmedCount": 5
    },
    "T116": {
      "chance": null,
      "window": "",
      "reason": "No current read \u2014 nothing recent enough to go on. Historically confirmed 17% of Fridays (5/30), predicted in guides 0%.",
      "confirmedCount": 0
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Fridays (4/30), increasing trend. 4 confirmed recently. Predicted in guides 13% of the time. Typically Opening. Latest guide note (2026-07-03): As always look for shipment 9-11 but check opening for anything held back",
      "confirmedCount": 4
    },
    "T012": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 47% of Fridays (14/30), increasing trend. 6 confirmed recently. Predicted in guides 37% of the time. Typically Opening. Latest guide note (2026-07-03): Opening employee push should go. Stock should be here and chairs already here",
      "confirmedCount": 6
    },
    "T121": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 63% of Fridays (19/30), steady trend. 5 confirmed recently. Predicted in guides 3% of the time. Latest guide note (2026-07-03): Update posted below check in with them tomorrow!```",
      "confirmedCount": 5
    },
    "T086": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 77% of Fridays (23/30), increasing trend. 6 confirmed recently. Predicted in guides 73% of the time. Typically Opening. Latest guide note (2026-07-03): Another locked Friday opening option here",
      "confirmedCount": 6
    },
    "T133": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 33% of Fridays (10/30), increasing trend. 4 confirmed recently. Predicted in guides 43% of the time. Typically Opening. Latest guide note (2026-07-03): Opening is a must. Store holds product so timing is on them but it should be tomorrow as only OP today",
      "confirmedCount": 4
    },
    "T031": {
      "chance": "High",
      "window": "12-2pm",
      "reason": "Confirmed hit 40% of Fridays (12/30), increasing trend. 4 confirmed recently. Predicted in guides 47% of the time. Typically 12-2pm. Latest guide note (2026-07-03): Look for a drop 10-12 or 3-6 and expect lines as it hasn\u2019t had a drop so vendor should stop by```",
      "confirmedCount": 4
    },
    "T134": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 20% of Fridays (6/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T166": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 20% of Fridays (6/30), steady trend. 2 confirmed recently. Predicted in guides 10% of the time. Latest guide note (2026-06-19): Skipped today SO CHECK TOMORROW STORE SHOULD CONFIRM IF THEY WILL STOCK OR NOT  ```",
      "confirmedCount": 2
    },
    "T142": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Fridays (1/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T041": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 17% of Fridays (5/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T114": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 27% of Fridays (8/30), steady trend. 3 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 3
    },
    "T087": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 10% of Fridays (3/30), steady trend. 2 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 2
    },
    "T119": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 27% of Fridays (8/30), steady trend. 2 confirmed recently. Predicted in guides 87% of the time. Typically Opening. Latest guide note (2026-06-26): Santa Ana College usually VQ at 10am on Friday so check in but ask as they claimed they will sell when vendor comes now. Bristol confirm...",
      "confirmedCount": 2
    },
    "T102": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 23% of Fridays (7/30), increasing trend. 1 confirmed recently. Predicted in guides 33% of the time. Typically Opening. Latest guide note (2026-06-26): Did not seem to hit today so be ready tomorrow morning or from 1-4 but did hit Tuesday so less priority",
      "confirmedCount": 1
    },
    "T040": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 23% of Fridays (7/30), steady trend. 3 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 3
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 57% of Fridays (17/30), increasing trend. 5 confirmed recently. Predicted in guides 50% of the time. Typically Opening. Latest guide note (2026-07-03): Usually opening here and heads will line up regardless",
      "confirmedCount": 5
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 10% of Fridays (3/30), increasing trend. 2 confirmed recently. Predicted in guides 3% of the time. Typically Opening. Latest guide note (2026-06-26): Should sell at opening here be ready!",
      "confirmedCount": 2
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 30% of Fridays (9/30), steady trend. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-06-26): hit today but light pack so CHECK AT OPENING",
      "confirmedCount": 0
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 20% of Fridays (6/30), increasing trend. 4 confirmed recently. Predicted in guides 13% of the time. Typically Opening. Latest guide note (2026-07-03): Look for an opening drop but may be limited as store is a bit smaller",
      "confirmedCount": 4
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 67% of Fridays (20/30), steady trend. 4 confirmed recently. Predicted in guides 93% of the time. Typically Opening. Latest guide note (2026-07-03): Constant store. If opening misses, 11-2 becomes the next real window",
      "confirmedCount": 4
    },
    "T001": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 57% of Fridays (17/30), steady trend. 3 confirmed recently. Predicted in guides 43% of the time. Typically Opening. Latest guide note (2026-06-26): Opening through 11 remains the key stretch. Watch for employee-driven releases.",
      "confirmedCount": 3
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 30% of Fridays (9/30), increasing trend. 1 confirmed recently. Predicted in guides 60% of the time. Typically Opening. Latest guide note (2026-06-26): Opening check since Fridays usually hit here and has not hit yet!",
      "confirmedCount": 1
    },
    "T139": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 13% of Fridays (4/30), increasing trend. 2 confirmed recently. Predicted in guides 17% of the time. Typically Opening. Latest guide note (2026-06-26): Opening expected unless they sneak it out tonight since it did not hit today",
      "confirmedCount": 2
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 53% of Fridays (16/30), steady trend. 4 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-03): Opening and 9-11. Sold Wednesday here but does receive alot of stock! 7am opening PLS UPDATE",
      "confirmedCount": 4
    },
    "T035": {
      "chance": "High",
      "window": "",
      "reason": "Confirmed hit 17% of Fridays (5/30), steady trend. 2 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 2
    },
    "T125": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 10% of Fridays (3/30), steady trend. 1 confirmed recently. Predicted in guides 100% of the time. Typically Opening. Latest guide note (2026-07-03): Hit today instead of tomorrow so look for other options",
      "confirmedCount": 1
    },
    "T028": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 57% of Fridays (17/30), decreasing trend. 5 confirmed recently. Predicted in guides 67% of the time. Typically Opening. Latest guide note (2026-07-03): Check morning and again 4-7",
      "confirmedCount": 5
    },
    "T104": {
      "chance": "High",
      "window": "Opening",
      "reason": "Confirmed hit 20% of Fridays (6/30), increasing trend. 2 confirmed recently. Predicted in guides 23% of the time. Typically Opening. Latest guide note (2026-07-03): Lighter chances for tomorrow but check in! May be small products",
      "confirmedCount": 2
    },
    "T162": {
      "chance": "Medium",
      "window": "",
      "reason": "Confirmed hit 3% of Fridays (1/30), steady trend. 1 confirmed recently. Predicted in guides 0% of the time.",
      "confirmedCount": 1
    },
    "T013": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Confirmed hit 17% of Fridays (5/30), decreasing trend. 1 confirmed recently. Predicted in guides 23% of the time. Typically Opening. Latest guide note (2026-06-26): 75/25 they sell something at opening here!",
      "confirmedCount": 1
    }
  }
};
