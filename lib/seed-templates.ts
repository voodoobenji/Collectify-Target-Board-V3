import type { Chance } from "./types";

export interface SeedEntry {
  chance: Chance;
  window: string;
  reason: string;
}

export const SEED_TEMPLATES: Record<string, Record<string, SeedEntry>> = {
  "tuesday": {
    "T004": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the main vendor watches for tomorrow. Opening checks matter and if vendor lands expect people to stick around."
    },
    "T005": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the stronger employee push stores tomorrow. Opening deserves heavy attention and people will be watching closely."
    },
    "T007": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening checks STAY ON EM"
    },
    "T001": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Sold late tonight and feels like one of those stores that will slowly trickle inventory out. Opening through noon still looks best but do not leave after one check."
    },
    "T015": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Never remove this store from rotation. Product can appear out of nowhere and opening remains one of the best times to catch it.```"
    },
    "T014": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Worth checking at opening here!"
    },
    "T018": {
      "chance": "Low",
      "window": "",
      "reason": "Hit today but no Poke so expect them to trickle some Poke out randomly check in!"
    },
    "T017": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Morning has value but afternoon tends to be overlooked. Keep eyes on the 1:30-4 window if opening stays quiet"
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "Employee push store. Opening remains strongest but continue checking through midday because inventory tends to come out in stages."
    },
    "T010": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning first then circle back around 12-2 or later evening. Employee pushes can happen here."
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Morning shipment checks are mandatory. Long lines expected again before opening."
    },
    "T065": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "MASSIVE PRIORITY TOMORROW. Product is there and store has been moving inventory themselves. Opening, 12:30-2:30 and later checks all deserve attention."
    },
    "T069": {
      "chance": "Medium",
      "window": "",
      "reason": "Can have smaller pushes but more likely to be holding. Keep checks lighter"
    },
    "T067": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening, 9-11 and 2-4 remain the key windows. Could still be sitting on additional stock."
    },
    "T073": {
      "chance": "High",
      "window": "Opening",
      "reason": "Continues to sit on inventory and stagger releases. Opening and midday remain strongest."
    },
    "T071": {
      "chance": "Medium",
      "window": "",
      "reason": "Afternoon focus tomorrow. Best attention remains around noon through evening. SELLS ALMOST EVERY TUESDAY"
    },
    "T074": {
      "chance": "Medium",
      "window": "",
      "reason": "Recently shifted toward midweek drops. Keep an eye on it in case!"
    },
    "T075": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Cochran deserves opening attention. Madera tends to wake up later in the morning then again around midday."
    },
    "T083": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Could still lean toward a later release but opening checks are worthwhile before shifting attention elsewhere."
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "BIG opening priority. Expect people lining up before doors open and be ready right at 7AM."
    },
    "T087": {
      "chance": "Medium",
      "window": "",
      "reason": "Keep eyes from 12-4 or 6-8!```"
    },
    "T077": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning first then hammer the 11-2 window. One of the steadier stores lately."
    },
    "T036": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning VQ remains the expectation. Arrive early."
    },
    "T034": {
      "chance": "Medium",
      "window": "",
      "reason": "Ask about a possible drop tomorrow! May or may not do a VQ or just a straight FCFS drop in the morning or 9-12"
    },
    "T033": {
      "chance": "High",
      "window": "8:00-8:30AM",
      "reason": "Biggest change here. Recent trend has shifted heavily toward 8:00-8:30AM drops. Be ready early and if it misses then rotate back later."
    },
    "T030": {
      "chance": "Medium",
      "window": "",
      "reason": "Watch carefully around here they DID sell but had heavy stock and may be holding. Store basically sells to friends and family and allows them to loop so you have to catch it"
    },
    "T029": {
      "chance": "High",
      "window": "",
      "reason": "BOTH DESERVE GS CHECKS. Morning and 2-5 remain the strongest looks"
    },
    "T021": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening GS checks first then rerun around 10-12 and again later in the afternoon unless they sell late tonight"
    },
    "T020": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the most active stores around. Opening matters but this location can fire at practically any point in the day."
    },
    "T058": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening and then another look around 10-12. Store can still unload a decent amount of inventory and other Samo store hit today!"
    },
    "T022": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening if nearby but late afternoon and evening continue to be very live possibilities."
    },
    "T055": {
      "chance": "High",
      "window": "",
      "reason": "Shipment expected. Watch 9-11, 2-5, but if not Wednesday morning"
    },
    "T027": {
      "chance": "High",
      "window": "Opening",
      "reason": "Product continues getting trickled out. Opening and late morning remain strongest but keep rotating throughout the day store receives PACKS but sells in batches"
    },
    "T031": {
      "chance": "High",
      "window": "",
      "reason": "Consistently active. Main windows remain 11-1 and 4-7."
    },
    "T052": {
      "chance": "Medium",
      "window": "",
      "reason": "Both stores remain overdue. Focus remains 9-11 and again 1-4."
    },
    "T060": {
      "chance": "Medium",
      "window": "",
      "reason": "Similar setup to WeHo but tends to favor the morning. Focus 8-11"
    },
    "T040": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening and midday remain strongest. Store did not seem to sell today"
    },
    "T047": {
      "chance": "Medium",
      "window": "",
      "reason": "Did not end up restocking so keep eyes!"
    },
    "T041": {
      "chance": "High",
      "window": "Opening",
      "reason": "Similar setup to Pico. If it misses opening expect attention later."
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "Constant activity. Opening and 10-12 remain strongest while people continue waiting on shipments. ```"
    },
    "T048": {
      "chance": "Medium",
      "window": "",
      "reason": "BOTH DESERVE MORNING ATTENTION but stores have been harder catches"
    },
    "T038": {
      "chance": "Medium",
      "window": "8-10am",
      "reason": "Check 8-10am or 1-3 in case they get a shipment!"
    },
    "T133": {
      "chance": "High",
      "window": "Opening",
      "reason": "Can still move at opening but strongest tendencies remain around 9:30-11 and again later in the day."
    },
    "T122": {
      "chance": "Medium",
      "window": "",
      "reason": "SAME ENERGY AS EASTVALE. These remain major stores to watch for activity people will being WAITING"
    },
    "T124": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the biggest focuses tomorrow. Expect people waiting and checking from opening onward."
    },
    "T121": {
      "chance": "Medium",
      "window": "",
      "reason": "Top priority for the area. Timing has been all over the place recently so patience will be important."
    },
    "T095": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning VQ remains the expectation. Early lines should already be forming. ```"
    },
    "T094": {
      "chance": "Low",
      "window": "",
      "reason": "Random drops now so CHECK IN FROM 8-11 or later on will be RANDOM"
    },
    "T092": {
      "chance": "High",
      "window": "",
      "reason": "Expect the normal Tuesday action. Crowds should start building early and strongest window remains around 10-12."
    },
    "T093": {
      "chance": "Medium",
      "window": "",
      "reason": "Smaller location but still active. Best checks remain 8-9:30 and 12-2"
    },
    "T099": {
      "chance": "Medium",
      "window": "",
      "reason": "Main windows remain 9-11 and 12-2. If nothing develops expect people staying into the afternoon but has been leaning weds"
    },
    "T100": {
      "chance": "High",
      "window": "",
      "reason": "Trend continues to be vendor Tuesday and sale Wednesday but always worth monitoring in case timing changes."
    },
    "T105": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Still one of the sneakiest stores around. Can hit morning, afternoon, or even later. Line will form to check opening"
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "Last week hit Tuesday evening instead of Weds! Store has been pushing product themselves so check throughout the day for a switch up!"
    },
    "T089": {
      "chance": "Medium",
      "window": "",
      "reason": "STILL HASN'T REALLY MOVED. Watch 12-2 closely"
    },
    "T098": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning checks remain worthwhile but feels more like a Wednesday leaning store lately."
    },
    "T002": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning employee push remains possible. Store has a history of letting people know early if product is coming out"
    },
    "T013": {
      "chance": "High",
      "window": "",
      "reason": "Usually not the first route stop but routes can always shift. Morning is still worth it but PLEASE lock in 2-5 checks"
    },
    "T008": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening remains the priority. If they delay, don't leave immediately."
    },
    "T009": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Major vendor focus tomorrow. Opening is important and if nothing happens early continue rotating throughout the day."
    },
    "T070": {
      "chance": "High",
      "window": "",
      "reason": "Store pushed some product already but could still trickle more out. Morning and midday remain strongest."
    },
    "T068": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening remains worthwhile with another strong window around evening.```"
    },
    "T081": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Did not appear to move today. Looks lined up for an opening or morning release tomorrow and should draw attention early."
    },
    "T078": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning remains the best shot with another look around 5-7 if nothing develops early."
    },
    "T028": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening focus. Store has leaned heavily into early releases and should have people waiting regardless"
    },
    "T057": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Did sell today and likely only has smaller items left until another shipment lands. Quick opening check then lighter attention unless more stock appears."
    },
    "T024": {
      "chance": "High",
      "window": "",
      "reason": "HAS NOT HIT. People continue waiting this store out. Morning remains strongest but keep checking because inventory should eventually move."
    },
    "T003": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening remains strongest"
    },
    "T061": {
      "chance": "Medium",
      "window": "",
      "reason": "Watch for shipment activity from 9-11 with product usually moving shortly after."
    },
    "T054": {
      "chance": "Medium",
      "window": "",
      "reason": "Earlier timing still fits this location best. Focus on the morning hours."
    },
    "T044": {
      "chance": "Medium",
      "window": "7-8AM",
      "reason": "Early 7-8AM check then another pass from 12-3."
    },
    "T132": {
      "chance": "Medium",
      "window": "",
      "reason": "As warned this store ended up selling some light product today. May be holding more but may wait a bit"
    },
    "T138": {
      "chance": "Low",
      "window": "",
      "reason": "Focus remains around 8:30-10:30 but random employee drops can happen throughout the day. ```"
    },
    "T102": {
      "chance": "Medium",
      "window": "",
      "reason": "Biggest focus should be vendor timing from 1-4. Expect people lingering and waiting throughout the afternoon."
    },
    "T119": {
      "chance": "Medium",
      "window": "",
      "reason": "Trending later in the week but still worth checking 8-11 and again 1-3."
    },
    "T167": {
      "chance": "High",
      "window": "",
      "reason": "Claimed they are waiting until Friday but still worth checking. Not a release week so be ready for random Poke to drop"
    },
    "T120": {
      "chance": "Medium",
      "window": "",
      "reason": "Store loves Tuesdays. Focus remains 12-3 and again 5-7."
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening traffic expected. If it stays quiet lock in another sweep around 1-4!"
    },
    "T016": {
      "chance": "Medium",
      "window": "",
      "reason": "Same like Rowland above one of these two should hit in the morning!"
    },
    "T066": {
      "chance": "Low",
      "window": "",
      "reason": "Store is back to random drops so you\u2019ll have to be on it!"
    },
    "T063": {
      "chance": "Low",
      "window": "",
      "reason": "Should receive stock tomorrow and is selling randomly again so pls keep eyes!"
    },
    "T026": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening priority. One of the stronger stores to watch first thing tomorrow morning line will be here"
    },
    "T117": {
      "chance": "Medium",
      "window": "",
      "reason": "Look for a drop tomorrow from 9-12! May push a bit later as well"
    },
    "T166": {
      "chance": "Low",
      "window": "",
      "reason": "Last week hit a sneaky Tuesday morning drop so CHECK IN AND UPDATE"
    },
    "T025": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning checks remain best but don't forget about afternoon opportunities."
    },
    "T123": {
      "chance": "Medium",
      "window": "",
      "reason": "Sleeper option. Could move tomorrow or decide to wait for its usual Wednesday pattern since it missed today"
    },
    "T091": {
      "chance": "Medium",
      "window": "",
      "reason": "Continue checking both in the morning. These smaller stores still love Tuesday and Thursday activity."
    },
    "T106": {
      "chance": "Medium",
      "window": "",
      "reason": "Did not sell Poke today. Light checks are worthwhile in case they are intentionally holding inventory."
    },
    "T076": {
      "chance": "Medium",
      "window": "",
      "reason": "They'll sell by the middle of the morning; 10:30-1:00. Line will form outside early as it does daily."
    },
    "T072": {
      "chance": "High",
      "window": "Opening",
      "reason": "Has shifted from a Fri store to a random store. Be ready for it to hit randomly tmw or Weds. Check at opening + around 10-12."
    },
    "T143": {
      "chance": "Medium",
      "window": "",
      "reason": "Usually hits Tues/Fri or Sat mornings, Sat more than Fri. People will arrive early. Oftentimes sells via aisle here. Vendor stocks, be early!"
    },
    "T131": {
      "chance": "Low",
      "window": "",
      "reason": "More random now but they should hit once shipment lands tmrw. Ask at guest services. Can pair a check with the other Apple Valley location off of the highway as well!"
    },
    "T125": {
      "chance": "High",
      "window": "2:30-5:30PM",
      "reason": "Been hitting Thursdays consistently for 1+ month. Likely drops on Tuesdays as well. Can check at opening but patterns suggest this store's likelihood between 2:30-5:30PM. They receive/sell on the late"
    },
    "T129": {
      "chance": "High",
      "window": "Opening",
      "reason": "Still a bit of a mystery. Last updates were that this store sells on random days around opening. Expect a line checking since ppl will line up for BN Redlands ticket procedure in the same plaza.```"
    },
    "T023": {
      "chance": "Low",
      "window": "",
      "reason": "Unlikely, but check at 7AM tmrw. The more likely time is between 10-12, when GS has the time to unbox. Smaller store means less employees. They sell on and off when they have time for it."
    },
    "T053": {
      "chance": "Medium",
      "window": "",
      "reason": "Same situation and timeframe as WeHo; if anything a bit earlier, as in 10-12. Sells at guest services. This, Galaxy, and WeHo are an easy 1-2-3."
    },
    "T059": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Been selling frequently between 11AM-1PM at guest services, 1 per SKU. Sleeper check in!"
    },
    "T035": {
      "chance": "Medium",
      "window": "10AM-1PM",
      "reason": "Sleeper that is basically 100% for tm or Weds, usually between 10AM-1PM. Sells @GS."
    },
    "T046": {
      "chance": "Medium",
      "window": "",
      "reason": "Due for their first shipment of the week. YES, this store gets Poke. Has a small cards area where they stock, check from 12-2."
    },
    "T045": {
      "chance": "Medium",
      "window": "",
      "reason": "Vendor stocked sneakily last Tues night. Check again this week to see if it happens again!"
    },
    "T116": {
      "chance": "Medium",
      "window": "",
      "reason": "Same situation as Signal Hill. Both stores are due and will be lined up at accordingly. Don't wait to go.```"
    },
    "T103": {
      "chance": "High",
      "window": "Opening",
      "reason": "They've been selling at opening more often recently, so check in tomorrow. People constantly update their Ws here right after 8AM. Becoming a consistent store!!"
    },
    "T112": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Still due for stock, people will line up here to gamble at opening. This happens everyday. Usually hits Tues/Thurs and some Fri!"
    },
    "T114": {
      "chance": "High",
      "window": "Opening",
      "reason": "Literally the same as Jeronimo but A BIT more consistent for opening time. Expect a line a bit deeper than Jeronimo's at opening tmrw."
    },
    "T113": {
      "chance": "Medium",
      "window": "10-12PM",
      "reason": "Often slept on, but definitely not forgotten about by locals. Hits by 10-12PM and gets cleaned quickly. Smaller store that receives much less stock than the other 2 Mission Viejo locations."
    },
    "T115": {
      "chance": "Medium",
      "window": "12-3PM",
      "reason": "Usually pushes between 12-3PM at guest services. This is another smaller location that receives quaint batches of stock in lesser frequency than other South OC stores, like San Clemente."
    }
  },
  "wednesday": {
    "T020": {
      "chance": "High",
      "window": "",
      "reason": "Wednesdays are usually when this store starts hitting but has gone two days in a row. Possible switch up tomorrow but as always people will be heavy"
    },
    "T056": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening peek first then circle back 9-11 and again 4-7. Store likes moving product when traffic dies down"
    },
    "T003": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the better stores for multiple waves. Opening is the best first shot, but 9-11 and 1-3 also matter. One check here is not enough"
    },
    "T061": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Same familiar setup. Opening then 9:30-11:30. Both have been finding ways to stock multiple times every week. ```"
    },
    "T057": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "OPENING CHECK. Should drop either tomorrow morning at 7am, or later into the second half of the day. People will be EARLY regardless to check"
    },
    "T023": {
      "chance": "High",
      "window": "Opening",
      "reason": "Wednesday mornings continue to be their strongest pattern. If not right at opening then usually shortly after once they get settled. Only sold partial amount today."
    },
    "T058": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning checks store can be tricky but expect tomorrow!"
    },
    "T031": {
      "chance": "Medium",
      "window": "",
      "reason": "WAY OVERDUE. Expect people watching this all day. Best windows are still 9-11 and 4-7 but heads will be checking nonstop"
    },
    "T027": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "CHECK 7AM OPENING"
    },
    "T028": {
      "chance": "Medium",
      "window": "8-9AM",
      "reason": "Most reliable windows continue to be 8-9AM or later around 3-5PM but may do Thursday or Friday as they recently sold"
    },
    "T044": {
      "chance": "Medium",
      "window": "",
      "reason": "Early morning priority. May hold for Thursday/Friday but they receive a lot so CHECK IN"
    },
    "T048": {
      "chance": "Low",
      "window": "",
      "reason": "Both continue holding inventory. Could wait until Friday or quietly move tomorrow. Stay on top of them!```"
    },
    "T039": {
      "chance": "High",
      "window": "",
      "reason": "Thursday remains strongest but tomorrow is still worth monitoring. Focus on 11-1 and 4-6 windows"
    },
    "T042": {
      "chance": "High",
      "window": "",
      "reason": "Morning shipment checks remain king. 8-10 is strongest and this place is practically a daily hitter now. Would usually hit Wednesdays and did sell today so may be a bit lighter tomorrow"
    },
    "T038": {
      "chance": "Medium",
      "window": "",
      "reason": "Looks like either tomorrow or Thursday depending on how routes fall. Usually either 8-9:30 early or 1-3 later"
    },
    "T041": {
      "chance": "High",
      "window": "",
      "reason": "Unless it surprises everyone tonight expect action tomorrow morning. Most likely windows remain early morning or 10-12"
    },
    "T040": {
      "chance": "Medium",
      "window": "",
      "reason": "Similar setup to Santa Fe Springs. If nothing tonight then tomorrow becomes the focus"
    },
    "T073": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Stayed quiet today so expect heavy opening attention plus another sweep from 9:30-12. Store often breaks inventory into multiple waves"
    },
    "T074": {
      "chance": "Low",
      "window": "Opening",
      "reason": "VQ today that got cancelled so look for a random drop tomorrow! People will be here at opening"
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Basically a daily shipment check now. Opening line forms early then rerun around 10-1"
    },
    "T065": {
      "chance": "High",
      "window": "Opening",
      "reason": "DID NOT MOVE TODAY BUT PRODUCT IS THERE. Strongest windows remain opening, 12-2, and 4-6. Some heads are here and will have chairs for opening tomorrow!"
    },
    "T063": {
      "chance": "Medium",
      "window": "",
      "reason": "Normally I\u2019d say Friday hold, but this store feels ready to throw a curveball to avoid crowds. Check it"
    },
    "T067": {
      "chance": "High",
      "window": "8-9am",
      "reason": "Expecting inventory tomorrow. Multiple shipments weekly and strongest windows remain 8-9am and 1-4"
    },
    "T071": {
      "chance": "Medium",
      "window": "",
      "reason": "Has not hit so pls be on it usually a mid day and evening hitter but small chance it goes in the morning"
    },
    "T070": {
      "chance": "High",
      "window": "",
      "reason": "Morning and midday continue to be the strongest looks for a random push!"
    },
    "T075": {
      "chance": "Medium",
      "window": "",
      "reason": "Cochran hit today but can go multiple days so people will"
    },
    "T078": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Hit at opening today as posted on last nights guide"
    },
    "T087": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Morning pass then evening sweep. If nothing tomorrow, Friday opening becomes stronger"
    },
    "T080": {
      "chance": "Medium",
      "window": "",
      "reason": "Please keep morning eyes here from 8-12"
    },
    "T132": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening through 10AM remains the catch window especially since it stayed quiet today but store may be holding a bit"
    },
    "T137": {
      "chance": "Medium",
      "window": "",
      "reason": "MAJOR WEDNESDAY MORNING LOCATION. Expect people camping ridiculously early"
    },
    "T129": {
      "chance": "Medium",
      "window": "",
      "reason": "All have been all over the place. Expect early checks and people hanging around. Morning is best but they can sell any time. Redlands MAY have sold a bit yesterday but i\u2019d still count for more stock t"
    },
    "T006": {
      "chance": "Medium",
      "window": "",
      "reason": "Normally stronger Thursday mornings but has absolutely switched to Wednesday before. Don't write it off"
    },
    "T009": {
      "chance": "Medium",
      "window": "",
      "reason": "Similar story to Pomona. Traditionally Thursday but recent employee pushes make it worth attention"
    },
    "T004": {
      "chance": "Medium",
      "window": "",
      "reason": "Lines will start early early at both as they are PRIMED to hit"
    },
    "T007": {
      "chance": "Medium",
      "window": "",
      "reason": "Both deserve strong morning looks. Employee pushes and vendor activity are both common. Vendor often lands around 9-10:30."
    },
    "T015": {
      "chance": "Medium",
      "window": "",
      "reason": "Tends to hit openings and Weds usually so KEEP EYES"
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "One of the most active stores in the region. Opening checks are always worthwhile and the store can move product all day long"
    },
    "T111": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "STILL A WEDNESDAY STORE. If nothing happens at opening make sure to circle back later around 1-4 because store will sell at least a bit at some point"
    },
    "T107": {
      "chance": "Medium",
      "window": "",
      "reason": "M/W/F pattern still alive. Expect lines from 9-11 and a line here EARLY last week vendor arrived at 9:30"
    },
    "T088": {
      "chance": "High",
      "window": "Opening",
      "reason": "OPENING VQ EXPECTED. Expect a deep line before the doors even open!"
    },
    "T100": {
      "chance": "High",
      "window": "Opening",
      "reason": "Likely to drop at opening expect a long line prior!!!"
    },
    "T094": {
      "chance": "Medium",
      "window": "",
      "reason": "Hit today great updates and catches!"
    },
    "T099": {
      "chance": "Low",
      "window": "",
      "reason": "Hit today but can peep tomorrow for random small batches!"
    },
    "T097": {
      "chance": "High",
      "window": "",
      "reason": "Unless it quietly sold today be READY tomorrow usually 12-2 but has on occasion hit from 9-11!"
    },
    "T119": {
      "chance": "Medium",
      "window": "",
      "reason": "Typical 10AM VQ setup and people will be there EARLY ask at GS they should confirm"
    },
    "T117": {
      "chance": "Medium",
      "window": "",
      "reason": "Has leaned Friday hard lately but still deserves a quick look tomorrow in case only had portfolios today"
    },
    "T115": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Check opening and throughout the morning"
    },
    "T098": {
      "chance": "Low",
      "window": "",
      "reason": "Morning 8-10 checks and ask staff directly. Last week release week may have altered schedule so expect heads on it a bit more tomorrow !"
    },
    "T021": {
      "chance": "Medium",
      "window": "",
      "reason": "May sell more later in week here as they hit today as warned in guide last night!"
    },
    "T024": {
      "chance": "Medium",
      "window": "",
      "reason": "Midweek remains their best stretch. Most movement happens around 9-11 after product actually reaches the store. Again Wednesdays and Fridays the two most typical days here"
    },
    "T025": {
      "chance": "Medium",
      "window": "",
      "reason": "Mirror Gardena. Keep both stores paired together because they tend to follow similar timing week after week"
    },
    "T026": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "As posted in guide last night sold at opening today"
    },
    "T030": {
      "chance": "High",
      "window": "",
      "reason": "cFCFS straight now so needs consistent checks as store can be a bit sneaky with how it sells as we saw yesterday"
    },
    "T029": {
      "chance": "Medium",
      "window": "",
      "reason": "Ask at GS and this store tends to hold in the back and sell selectively"
    },
    "T055": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Could have received inventory today. Check opening at 7AM then stay active from 11-12 if nothing"
    },
    "T052": {
      "chance": "Medium",
      "window": "",
      "reason": "Neither really got going today. Focus 9-11 and 2-4 but put extra emphasis on WeHo especially later in the afternoon"
    },
    "T043": {
      "chance": "Medium",
      "window": "",
      "reason": "MORNING VQ OR DROP AGAIN. People are arriving absurdly early store will either drop items fcfs or take a VQ"
    },
    "T014": {
      "chance": "High",
      "window": "Opening",
      "reason": "Usually Weds/ Thursday store. Expect a small opening crowd and keep rerunning checks all day if nothing happens immediately"
    },
    "T013": {
      "chance": "Medium",
      "window": "",
      "reason": "Hit today as posted here first!"
    },
    "T017": {
      "chance": "High",
      "window": "",
      "reason": "Has not hit and on occasion will hit in the morning so keep eyes! May also hold here but be ready"
    },
    "T011": {
      "chance": "Medium",
      "window": "",
      "reason": "7AM CHECKS. Posting it again because this store loves employee pushes"
    },
    "T005": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Vendor schedules are weird enough that people will line up early. Opening attention is crucial here"
    },
    "T133": {
      "chance": "Medium",
      "window": "",
      "reason": "Most common windows remain 9-11 and 1-3 store sells in batches usually"
    },
    "T138": {
      "chance": "Medium",
      "window": "",
      "reason": "Great sleeper option. Employees make timing messy so focus 8-10 and again 12-3"
    },
    "T122": {
      "chance": "High",
      "window": "",
      "reason": "Morning remains strongest and turnout should be heavy tomorrow as Corona hit today!"
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "Usually strongest M/W/F afternoons. Opening check first then rerun 12-2 if nothing develops last week hit M/T but should be back to Wednesday this week around"
    },
    "T103": {
      "chance": "Medium",
      "window": "",
      "reason": "Check 8-10 near tech and ask directly. Vendor should hit either tomorrow or Thursday and with no release this week there\u2019s a chance they don\u2019t hold for Friday!"
    },
    "T105": {
      "chance": "Medium",
      "window": "",
      "reason": "Has only sold OP it seems so keep eyes morning time and 10-12 BUT check tonight as well!"
    },
    "T093": {
      "chance": "Low",
      "window": "",
      "reason": "Still appears quiet. Focus on 8-9:30 and 1-3 possible tomorrow or Thursday"
    },
    "T113": {
      "chance": "Low",
      "window": "1-4PM",
      "reason": "Morning first. Focus on Alicia and Jeronimo. If quiet early then watch for a sneaky 1-4PM release still"
    },
    "T064": {
      "chance": "Medium",
      "window": "",
      "reason": "Has lately been holding for Fridays here"
    },
    "T069": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Received stock today. Can check morning or evening and last week hit at opening so expect heads checking!"
    },
    "T068": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Wednesday opening has been hitting lately but did sell today! Store tends to"
    },
    "T083": {
      "chance": "Medium",
      "window": "8-10AM",
      "reason": "Most reliable windows stay 8-10AM and 6-8PM did not hit today unless it goes late tonight! Last week did hit around 12:30-2"
    },
    "T077": {
      "chance": "Medium",
      "window": "11AM-2PM",
      "reason": "Best checks remain morning and 11AM-2PM but did sell a bit heavier today"
    },
    "T047": {
      "chance": "Low",
      "window": "",
      "reason": "Keep eyes 8-11 for a sneaky drop!"
    },
    "T002": {
      "chance": "High",
      "window": "7-8am",
      "reason": "PRIMED please please be ready heads will be here early update from 7-8am store should confirm prior"
    },
    "T008": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening is important. Expect people waiting and don\u2019t leave too quick if nothing shows right away"
    },
    "T010": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Will 100% sell tomorrow but store can choose timing so you\u2019ll have to rotate either opening or mid day are best"
    },
    "T116": {
      "chance": "Low",
      "window": "",
      "reason": "Check in for a sneaky drop in case tomorrow 8-10!"
    },
    "T104": {
      "chance": "Medium",
      "window": "",
      "reason": "Euclid sold as warned but light stock. Lincoln and Hills can both sell tomorrow earlier or hold for Friday, so check in"
    },
    "T050": {
      "chance": "High",
      "window": "Opening",
      "reason": "Did not drop on Monday so look for a VQ to go up at opening be ready and CHECK"
    },
    "T121": {
      "chance": "High",
      "window": "",
      "reason": "Morning remains strongest and turnout should be heavy tomorrow as Corona hit today!"
    },
    "T091": {
      "chance": "Low",
      "window": "",
      "reason": "Two stores and both appear quiet. Focus on 8-9:30 and 1-3 possible tomorrow or Thursday"
    },
    "T106": {
      "chance": "Medium",
      "window": "",
      "reason": "Hit today as posted!"
    },
    "T159": {
      "chance": "Medium",
      "window": "",
      "reason": "The place to be tomorrow and could end up being as big as Encinitas."
    },
    "T148": {
      "chance": "Medium",
      "window": "",
      "reason": "M/W/F pattern store with decent stock. Get in line early."
    },
    "T162": {
      "chance": "Low",
      "window": "",
      "reason": "Stayed quiet today so chances look strong for tomorrow. Timing can still be random."
    },
    "T146": {
      "chance": "Low",
      "window": "",
      "reason": "Vendor day should be tomorrow or Thursday. Can also randomly drop when the store isn't busy."
    },
    "T158": {
      "chance": "High",
      "window": "",
      "reason": "Noon into afternoon remains strongest. Usually the next stop after El Cajon."
    },
    "T156": {
      "chance": "Medium",
      "window": "",
      "reason": "Dropped today but Wednesday is still one of its regular restock days."
    },
    "T161": {
      "chance": "High",
      "window": "",
      "reason": "Didn't drop today and could be due tomorrow. Expect a long line."
    },
    "T150": {
      "chance": "Medium",
      "window": "",
      "reason": "Dropped today but Wednesday is one of its normal restock days.```"
    },
    "T054": {
      "chance": "Medium",
      "window": "7-9:30AM",
      "reason": "Been selling at 7AM recently! Sold at opening today! Double back tmrw between 7-9:30AM."
    },
    "T022": {
      "chance": "Low",
      "window": "3-5PM",
      "reason": "Unlikely that they sell tm, they sold today. Check time: 3-5PM!"
    },
    "T053": {
      "chance": "Medium",
      "window": "",
      "reason": "Usually hits Tues or Weds! Not much chatter about this store today, check in at 8AM tmrw. If not, it SHOULD hit between 11-1 at guest services."
    },
    "T060": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Only hit with a small amount of OP today. Check between opening and 10AM, UPS delivers in the morning."
    },
    "T059": {
      "chance": "Medium",
      "window": "",
      "reason": "Dropped today but they have been slow recently. Expecting another drop tomorrow. Check 12-1 and 4-5 tomorrow."
    },
    "T084": {
      "chance": "Medium",
      "window": "",
      "reason": "Already a small line. Store sells most mornings at 7AM at GS!|"
    },
    "T019": {
      "chance": "Medium",
      "window": "8-11AM",
      "reason": "Sleeper store that sells between 8-11AM almost daily."
    },
    "T033": {
      "chance": "Medium",
      "window": "12-1PM",
      "reason": "Sells almost daily at GS by 12-1PM. They will be on everyday's guide. A line forms outside of the store until UPS delivers."
    },
    "T035": {
      "chance": "Medium",
      "window": "10AM-12PM",
      "reason": "X factor between 10AM-12PM if they push at guest services."
    },
    "T051": {
      "chance": "Medium",
      "window": "",
      "reason": "Usually hits on the same day as Cerritos/South St, shortly after. If South sells, ppl will immediately rush over here to linger, expecting a drop after."
    },
    "T045": {
      "chance": "Low",
      "window": "",
      "reason": "DID NOT stock today, still in play for tmrw. Vendor tends to stock at night. I was wrong yesterday when I said they stock Tues and I apologize. It was Weds, and it can happen again tmrw night!"
    },
    "T046": {
      "chance": "Medium",
      "window": "9-11AM",
      "reason": "Similar to other smaller locations, they have started to receive ALMOST every other day. Check tomorrow at GS + check the card display between 9-11AM and 1-3PM."
    },
    "T049": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Holding inventory it seems, likely Friday at opening! Should have Needohs/Squeezy at the bare minimum tmrw at opening, so it's still worth a check."
    },
    "T164": {
      "chance": "Low",
      "window": "",
      "reason": "Stocked Monday, likely to stock again Thursday or Friday. Unlikely for tomorrow!```"
    },
    "T166": {
      "chance": "High",
      "window": "Opening",
      "reason": "Member informed us they've been pushing DAILY at guest services in the morning, at opening or between 10-1. Usually consistent with Fullerton/Orangethorpe's shipment days!"
    },
    "T101": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Fridays and some Wednesdays here! Usually at opening or around 11AM-1PM. They sell at guest services and it's a total sleeper store!"
    },
    "T096": {
      "chance": "Medium",
      "window": "8-9AM",
      "reason": "Sleeper for Weds/Thursday. On Fri, they run VQ. On Weds or Thurs, they selectively sell at guest services starting around 8-9AM. Check tomorrow morning! Then, if it hits, be on Cypress..."
    },
    "T112": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Pushes daily, usually at opening! Sometimes, they switch it up, but every morning, there is a line of people checking. Opens at 8AM. Solid option for where to start."
    },
    "T114": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "SAME AS JERONIMO, THE EXACT SAME. Daily lines at opening here! Due for stock at opening if they received anything today, check in. A line of 10+ forms daily."
    },
    "T090": {
      "chance": "Medium",
      "window": "",
      "reason": "Holding for Friday."
    },
    "T167": {
      "chance": "Medium",
      "window": "",
      "reason": "Holding for Friday."
    },
    "T072": {
      "chance": "Low",
      "window": "",
      "reason": "Don't really have a timeframe here yet, we're working on it. Adding this store to remind you all that it is now random, and not only on Friday! Check at guest services + in the card case."
    },
    "T076": {
      "chance": "Medium",
      "window": "11AM-1PM",
      "reason": "Selling by 11AM-1PM. Line will form even earlier since Newbury is not even due for stock tmrw. Going to be busier than usual."
    },
    "T079": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Sold last Weds at opening! Usually sells at 7AM so it's a great check tomorrow at opening. Don't count this store out!"
    },
    "T018": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Could be a sneaky opening push at guest services which they have done on Weds/Thurs before. Check in! If not, due for a vendor stock in the afternoon. Ppl will lurk by 1-2 esp with WM Baldwin Park in "
    },
    "T125": {
      "chance": "Medium",
      "window": "2-5PM",
      "reason": "Seems VERY likely for a Thursday drop! You can still check tomorrow between 2-5PM which is their daily drop time when it DOES end up hitting."
    },
    "T145": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Sells at opening and receives heavy stock. Check tomorrow, people are looking almost every morning."
    },
    "T153": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "The past few weeks, they have been dropping Mon to Wed, so check at opening, as they might still have something tom. People will be here regardless."
    }
  },
  "thursday": {
    "T003": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "MULTIPLE WAVE MACHINE. Opening, 9-11, then 1-3. Keep looping they restock constantly"
    },
    "T061": {
      "chance": "Medium",
      "window": "",
      "reason": "Sold Blisters today and still could have more items, but the store may also choose to save some for Friday"
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "SAME PLAN AS ALWAYS. Start at opening and keep HEAVY eyes from 11-1 because that remains the danger window here."
    },
    "T056": {
      "chance": "Low",
      "window": "",
      "reason": "STILL KEEPING THINGS QUIET. Best looks remain 8-10, then another hard sweep around 12-2, then again 5-7 if they decide to wait for traffic to die down"
    },
    "T057": {
      "chance": "High",
      "window": "Opening",
      "reason": "Did not sell today so unless they sell tonight expect a LINE at opening early early"
    },
    "T021": {
      "chance": "High",
      "window": "Opening",
      "reason": "Sold smaller items today and still feels live going into tomorrow. Opening checks remain solid and 10-2 continues to be the strongest stretch if more lands"
    },
    "T058": {
      "chance": "Low",
      "window": "6-8PM",
      "reason": "BOTH deserve attention. Start at opening then rerun around 10-12 and again 2-3. Broadway especially can randomly wake back up around 6-8PM. Wilshire should still be worth eyes"
    },
    "T031": {
      "chance": "Medium",
      "window": "",
      "reason": "Sold earlier this week but can go multiple times"
    },
    "T027": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "One of the top priorities. Opening, shortly after opening, and continuous rotations all day."
    },
    "T030": {
      "chance": "Low",
      "window": "",
      "reason": "Store is confirmed to be moving off from VQ and now selling random FCFS check 7-9"
    },
    "T028": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Skipped today so expect heads before opening here! Good rotation checks throughout the day"
    },
    "T025": {
      "chance": "High",
      "window": "Opening",
      "reason": "DIDN'T GO TODAY. Opening and 10-12 remain strongest with another possible push around 2-4"
    },
    "T026": {
      "chance": "High",
      "window": "Opening",
      "reason": "Usually Tuesdays and Thursdays are strongest so check at opening!"
    },
    "T053": {
      "chance": "High",
      "window": "1-4PM",
      "reason": "Two stores worth watching. Morning checks are fine but strongest windows still look like 1-4PM"
    },
    "T044": {
      "chance": "High",
      "window": "7-8AM",
      "reason": "Thursdays remain one of the strongest days here especially after staying quiet today. Heavy focus from 7-8AM and expect people waiting it out"
    },
    "T042": {
      "chance": "High",
      "window": "Opening",
      "reason": "Did sell today but later in the day. Opening and 10-12 continue being the strongest windows, but don\u2019t leave too quickly because this place reruns drops throughout the week"
    },
    "T039": {
      "chance": "High",
      "window": "",
      "reason": "Main timing remains around 10-12. If quiet early don\u2019t ignore later pushes. Feels expected tomorrow and people will definitely be watching"
    },
    "T041": {
      "chance": "Medium",
      "window": "",
      "reason": "Last week they did hold until Friday so check morning time and ASK"
    },
    "T038": {
      "chance": "Medium",
      "window": "",
      "reason": "Heavy watch from 8-9:30 and if nothing expect heads to be on it from 1-4. The later it gets the longer a line will be ```"
    },
    "T073": {
      "chance": "High",
      "window": "",
      "reason": "Strongest checks remain 8-10 and 1-3. Inventory confirmed to be here just have to catch it"
    },
    "T062": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening shipment checks first then rerun around 11-1 like always. Store sold today as posted"
    },
    "T067": {
      "chance": "Medium",
      "window": "",
      "reason": "DID NOT SELL TODAY. Check from 8-11 tomorrow"
    },
    "T078": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening should hit!"
    },
    "T075": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Cochran can still be checked at opening for another round but may finally cool down. Madera had lighter inventory so morning and especially 12-2 deserve attention"
    },
    "T087": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Expect people there before opening. If it misses early keep rotating all day"
    },
    "T080": {
      "chance": "Medium",
      "window": "",
      "reason": "8-10 first then reruns later. Ventura Main already got active today ```"
    },
    "T004": {
      "chance": "High",
      "window": "",
      "reason": "STILL WAITING. Expect another morning crowd until this finally unloads. Best windows remain 8-9:30 and later around 3-6"
    },
    "T005": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sold today as warned. Still worth checking tomorrow because this store can stay active back to back, but it is NOT on the same level of priority as Pomona / Upland if those stayed quiet. Opening remai"
    },
    "T009": {
      "chance": "High",
      "window": "Opening",
      "reason": "ANOTHER BIG PRIORITY. Stayed quiet and expect another opening crowd because previous stock was mostly employee pushed"
    },
    "T006": {
      "chance": "High",
      "window": "Opening",
      "reason": "One of the strongest targets tomorrow if it really stayed quiet today. Thursdays continue to dominate here whether it happens morning, afternoon, or even gets pushed to Friday opening"
    },
    "T008": {
      "chance": "Low",
      "window": "",
      "reason": "Sneaky option. Most likely windows remain 8-9:30 or 1-3. If it somehow misses tomorrow then Friday becomes very likely"
    },
    "T012": {
      "chance": "Medium",
      "window": "",
      "reason": "Trending earlier lately. Focus 9-12 then revisit 3-6 if needed if not should 100% sell Friday morning"
    },
    "T011": {
      "chance": "High",
      "window": "",
      "reason": "Employee push in the morning and throughout the day always good checks, but after selling today this becomes more of a normal strong check than a top play"
    },
    "T016": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sneaky opening option. Expect people before opening and lingering afterward as it did not hit today!"
    },
    "T015": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sleeper opening option. Stayed quiet today and people may overlook it while chasing bigger stores. Update if you check"
    },
    "T010": {
      "chance": "Medium",
      "window": "",
      "reason": "Sold multiple times today and can still be checked because this store sits on inventory and releases in waves, but it is no longer a top-tier tomorrow priority after cashing today"
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has been hitting every Thursday please check at opening"
    },
    "T132": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Heavier inventory likely saved for Friday but opening and 11-1 remain worthwhile at both stores"
    },
    "T110": {
      "chance": "High",
      "window": "",
      "reason": "EXPECT ANOTHER MASSIVE ALLOCATION. Lottery ticket style setup around 8AM"
    },
    "T166": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "THURSDAY OPENING VQ. Expect lines, chairs, and people showing up early"
    },
    "T098": {
      "chance": "Medium",
      "window": "",
      "reason": "Timing call was dead on today so keep this store on the radar again tomorrow if inventory carried over, but not one of the absolute top priorities after cashing today"
    },
    "T119": {
      "chance": "Low",
      "window": "",
      "reason": "Store claimed they will move to sell a bit more randomly through the vendor so we will remind you to check but paired with 17th/Grand hitting it seems like these stores may hit together now"
    },
    "T099": {
      "chance": "Medium",
      "window": "",
      "reason": "Hit yesterday as it opposed to Wednesday so tomorrow is more of a check since store likes to hold back product"
    },
    "T117": {
      "chance": "High",
      "window": "",
      "reason": "Morning and early afternoon remain strongest has not seemed to hit!"
    },
    "T103": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Sold at opening today as warned on guide and posted in group!"
    },
    "T165": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Watch for another opening or morning release here as store can get sneaky. Today again showed it can become a later-day store too and they sell sporadically"
    },
    "T097": {
      "chance": "Medium",
      "window": "",
      "reason": "Was live today and again but off the guide"
    },
    "T022": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Worth a quick opening stop if you're already nearby. Never forget this store has randomly gone late at night before"
    },
    "T023": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Did exactly what was posted and sold at opening today."
    },
    "T035": {
      "chance": "Medium",
      "window": "",
      "reason": "Main window still sits around 8-10. Shipments tend to land then with occasional lighter activity later. If tomorrow misses then Friday should be SLEEPER"
    },
    "T029": {
      "chance": "Medium",
      "window": "",
      "reason": "Tiny section and hidden inventory city. Ask GS directly because product rarely makes it to the shelf right away. Sold OP today"
    },
    "T040": {
      "chance": "Medium",
      "window": "",
      "reason": "Check morning time for shipment. Store should sell as it receives now, but this is more of a solid check than a top priority"
    },
    "T068": {
      "chance": "High",
      "window": "",
      "reason": "Morning or evening remain strongest. Store still hasn\u2019t really sold and Thursday should be a much better chance than Wednesday was."
    },
    "T077": {
      "chance": "Medium",
      "window": "",
      "reason": "Has been hitting a bit earlier as they sell when they get their shipment so checks from 10-12 remain strong. Did sell today so this is more of a strong follow-up check than a top priority"
    },
    "T083": {
      "chance": "Medium",
      "window": "",
      "reason": "Finally sold today so tomorrow is not as urgent, but still worth checking in case they hold more"
    },
    "T079": {
      "chance": "Medium",
      "window": "",
      "reason": "Likely holding for Friday here but has on occasion sold small stock during the week so keep it in mind like today"
    },
    "T007": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Store holds product. Look for an opening push by employees or mid day"
    },
    "T002": {
      "chance": "Medium",
      "window": "",
      "reason": "Sold today so tomorrow becomes more of a follow-up employee push check than a major priority"
    },
    "T017": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening sleeper option turned into a late vendor hit today around 3-5. Tomorrow can still be worth checking, but I\u2019d keep in mind it may not be an immediate opening play"
    },
    "T014": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Likely did not sell this morning so checks opening again"
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "NEVER A BAD CHECK. Store randomizes releases constantly and opening remains the best place to start, but today again proved later pushes are always possible"
    },
    "T167": {
      "chance": "High",
      "window": "",
      "reason": "Can check in but store did claim they would hold for Friday so always ask and verify"
    },
    "T120": {
      "chance": "Medium",
      "window": "",
      "reason": "Slightly off schedule but hit today usually Tuesdays/Thursdays! paired with SAC update below"
    },
    "T091": {
      "chance": "Medium",
      "window": "",
      "reason": "Focus around 8-9:30 or 2-4. Smaller location but needs more eyes and updates"
    },
    "T084": {
      "chance": "High",
      "window": "Opening",
      "reason": "Becoming a daily opening check here and did hit last week so be ready!"
    },
    "T066": {
      "chance": "Low",
      "window": "",
      "reason": "Again another store that may be dropping randomly more and more!"
    },
    "T013": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning check is solid but pls keep eyes from 12-4 ask at guest services!"
    },
    "T001": {
      "chance": "Medium",
      "window": "",
      "reason": "Two stores here keep an eye out for a morning push at both!"
    },
    "T033": {
      "chance": "High",
      "window": "",
      "reason": "Did not hit be ready morning time!"
    },
    "T088": {
      "chance": "High",
      "window": "",
      "reason": "Today\u2019s VQ hit exactly like expected so tomorrow becomes more of a leftovers / extra wave but next drop Friday```"
    }
  },
  "friday": {
    "T065": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening first, then run it back 12-2 if the morning misses. This store can move early and still have another wave later"
    },
    "T063": {
      "chance": "Medium",
      "window": "",
      "reason": "Usually a Friday store, claimed drop would be cancelled if people line up before 5am we shall see"
    },
    "T064": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Friday mornings have become the pattern here so opening movement is likely"
    },
    "T075": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Both need opening checks. Madera more likely for mid day as usual"
    },
    "T078": {
      "chance": "Medium",
      "window": "",
      "reason": "Hit today as warned so may be lighter tomorrow but check in in case"
    },
    "T079": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has been selling sporadically and not as much Fridays but check opening in case"
    },
    "T080": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening drop possible if it stayed quiet today"
    },
    "T069": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Should sell at opening and chairs will go out tonight"
    },
    "T077": {
      "chance": "Low",
      "window": "",
      "reason": "Start in the morning but don\u2019t ignore afternoon as usually. Timing here has been random lately"
    },
    "T085": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening drop with heads already posted up"
    },
    "T086": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Another locked Friday opening option here"
    },
    "T066": {
      "chance": "High",
      "window": "",
      "reason": "Morning tickets expected and store should still have some form of product. Can also sell small amounts later in the day"
    },
    "T067": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening seller and should move as it has not seemed to hit"
    },
    "T071": {
      "chance": "Medium",
      "window": "",
      "reason": "Both have sold this week. They both also hold back product but not as locked as others"
    },
    "T082": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Friday opening drop and chairs will start tonight"
    },
    "T062": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Constant store. If opening misses, 11-2 becomes the next real window"
    },
    "T074": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening is expected and locals will be all over it as it seemed quiet"
    },
    "T072": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Friday opening store as well. Skipped last week so heads will be on it but chance it skips again"
    },
    "T068": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Fri-Sun type store. Opening is worth it but if nothing happens, 4-8 or the weekend becomes stronger"
    },
    "T083": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning 8-10 check but did sell a bit this week as posted. Store tends to hold back items either way```"
    },
    "T125": {
      "chance": "Medium",
      "window": "",
      "reason": "Hit today instead of tomorrow so look for other options"
    },
    "T127": {
      "chance": "Medium",
      "window": "",
      "reason": "Neither has really hit this week so expect lines at both!"
    },
    "T129": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "hit today but light pack so CHECK AT OPENING"
    },
    "T141": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening drop is likely and chairs will go down early"
    },
    "T139": {
      "chance": "High",
      "window": "Opening",
      "reason": "Opening expected unless they sneak it out tonight since it did not hit today"
    },
    "T138": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Opening check but timing can also randomly shift here"
    },
    "T133": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening is a must. Store holds product so timing is on them but it should be tomorrow as only OP today"
    },
    "T132": {
      "chance": "Medium",
      "window": "",
      "reason": "Sold a bit today so may skip tomorrow ```"
    },
    "T011": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "PRIORITY opening check again. Store should sell"
    },
    "T006": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Treat these as one pair. Both feel primed for opening activity or a morning VQ especially Pomona which has not seemed to drop!"
    },
    "T004": {
      "chance": "High",
      "window": "Opening",
      "reason": "The other pair of stores to be ready for by opening heavy heads will be here!"
    },
    "T012": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening employee push should go. Stock should be here and chairs already here"
    },
    "T001": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening through 11 remains the key stretch. Watch for employee-driven releases."
    },
    "T007": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning peep for employee pushed product. Has hit multiple days already though"
    },
    "T010": {
      "chance": "High",
      "window": "Opening",
      "reason": "Look for opening drop. Always sells batches"
    },
    "T015": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sleeper opening check since it is has been a bit more quiet"
    },
    "T154": {
      "chance": "High",
      "window": "Opening",
      "reason": "Big store and opening priority. They almost always find a way to sell at least something here"
    },
    "T017": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening employee push possible. If not then focus again around 12-4 for vendor timing."
    },
    "T020": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening first but if they spin you, run it back 10-1 and again 3-6. Multiple days now they have sold around noon even though today\u2019s shipment was slighy"
    },
    "T061": {
      "chance": "High",
      "window": "Opening",
      "reason": "As always look for shipment 9-11 but check opening for anything held back"
    },
    "T055": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Sleeper opening option here at 7AM as store has been putting small amounts of product out this week"
    },
    "T053": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Both should move opening or shortly after. Weho receives solid amounts and sold light today. Sunset will have a solid line prior to opening"
    },
    "T060": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Usually Fridays here. If not right at opening then 9-11"
    },
    "T054": {
      "chance": "Medium",
      "window": "",
      "reason": "Hit a bit earlier this week and does tend to go quick but can peep at 7am or 9-10"
    },
    "T021": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "7AM opening is a solid option as they should receive more! If nothing then check later in the day will have more product before the weekend is over"
    },
    "T058": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening then 10-12 fallback. Don\u2019t let them spin you because this store holds and sells whenever they choose and can also sell late"
    },
    "T003": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Usually opening here and heads will line up regardless"
    },
    "T059": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Usually 9-11 and not right at opening. Don\u2019t make this an opening priority unless nearby```"
    },
    "T034": {
      "chance": "High",
      "window": "Opening",
      "reason": "Friday opening VQ usually or may do FCFS so be ready for either line will be here in early"
    },
    "T036": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "May sell items FCFS at opening or take a VQ line will be here EARLY EARLY"
    },
    "T038": {
      "chance": "High",
      "window": "Opening",
      "reason": "Did not end up selling today. BE READY AT OPENING"
    },
    "T039": {
      "chance": "High",
      "window": "Opening",
      "reason": "Also did not end up selling today so be ready for opening checks! Wait it out a bit if nothing"
    },
    "T037": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has moved off Sundays so check tomorrow opening through 9:30!"
    },
    "T027": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening and 9-11. Sold Wednesday here but does receive alot of stock! 7am opening PLS UPDATE"
    },
    "T030": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Expect line by opening with people waiting 7-8 for possible FCFS. Need more heads here who are UPDATING"
    },
    "T029": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Two stores here and may be either opening or afternoon! Heads will check regardless at both"
    },
    "T032": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Look for opening drop. Will be limited but likely!"
    },
    "T025": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening check since Fridays usually hit here and has not hit yet!"
    },
    "T024": {
      "chance": "Medium",
      "window": "",
      "reason": "Sold a bigger amount this week. Heads will check in case and could sell other items"
    },
    "T023": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening check and ASK GS. Should have stock and opens at 7AM. If they spin you go back shortly after. Store tends to sell Weds + Fridays"
    },
    "T031": {
      "chance": "Medium",
      "window": "",
      "reason": "Look for a drop 10-12 or 3-6 and expect lines as it hasn\u2019t had a drop so vendor should stop by```"
    },
    "T044": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning look in case inventory was held back but there are probably stronger targets available."
    },
    "T109": {
      "chance": "High",
      "window": "Opening",
      "reason": "Fridays are back here so BE READY AT OPENING. Chairs ahould already be out"
    },
    "T090": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning VQ or drop. Store has been selling EARLY lately so chairs already out!"
    },
    "T101": {
      "chance": "High",
      "window": "Opening",
      "reason": "Consistent Friday morning. Warn you every week. They may take a VQ or sell FCFS at opening so BE READY"
    },
    "T089": {
      "chance": "Medium",
      "window": "",
      "reason": "Friday drops seem to be sticking. Usually from 8-11 here. Last week only sold OP but expect them to sell everything they receive tomorrow"
    },
    "T088": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Morning VQ at opening and long lines will be here"
    },
    "T096": {
      "chance": "Medium",
      "window": "",
      "reason": "Stay on it from 9-11ish. This store is known for lying and playing games"
    },
    "T118": {
      "chance": "Low",
      "window": "",
      "reason": "Friday random number draw usually starts at 3PM and can cover 100-200 people."
    },
    "T111": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening check again in case as today\u2019s drop was pushed back from Weds so may end up having a bit more. May also receive around 12-4 if nothing else we\u2019ll"
    },
    "T108": {
      "chance": "Medium",
      "window": "",
      "reason": "Can check for small items but may hold until Monday as usual here"
    },
    "T115": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Solid opening option and good rotation through the day if it doesn\u2019t go early"
    },
    "T099": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Store is holding back stock so check again with random timing morning and later but should sell at least a small batch at opening"
    },
    "T102": {
      "chance": "High",
      "window": "",
      "reason": "Did not seem to hit today so be ready tomorrow morning or from 1-4 but did hit Tuesday so less priority"
    },
    "T103": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Look for an opening drop but may be limited as store is a bit smaller"
    },
    "T105": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Look for opening/morning drop but like other store may be lighter stock as well"
    },
    "T104": {
      "chance": "Medium",
      "window": "",
      "reason": "Lighter chances for tomorrow but check in! May be small products"
    },
    "T107": {
      "chance": "High",
      "window": "",
      "reason": "Lines usually strongest around 11-2. SHOULD GO and if nothing people will wait it out a bit"
    },
    "T098": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Look for line by opening and ask about drop/shipment store tends to confirm here a bit earlier if they will sell```"
    },
    "T005": {
      "chance": "Medium",
      "window": "",
      "reason": "Store sold yesterday but likely to have some items tomorrow but will sell sporadically"
    },
    "T002": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening through 11AM. Look for employees to confirm before opening and push product themselves"
    },
    "T047": {
      "chance": "Medium",
      "window": "",
      "reason": "Last week sold on Friday around 9-11 so please keep eyes here!"
    },
    "T106": {
      "chance": "Low",
      "window": "",
      "reason": "Look for a morning drop here people tend to stay quiet but should hit even if limited!"
    },
    "T122": {
      "chance": "Medium",
      "window": "",
      "reason": "Endes up selling today so look for release day product tomorrow"
    },
    "T022": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Should sell at opening here 7am as well!"
    },
    "T164": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Sleeper opening option here 8am!"
    },
    "T165": {
      "chance": "High",
      "window": "Opening",
      "reason": "Should sell at opening here be ready!"
    },
    "T100": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Should do release day items at opening!"
    },
    "T117": {
      "chance": "High",
      "window": "",
      "reason": "Morning through 11 remains strongest with another possible window around 2-4."
    },
    "T084": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Basically a lock to check every day at opening here!"
    },
    "T008": {
      "chance": "Medium",
      "window": "",
      "reason": "Has not stocked Poke so BIG eyes tomorrow! If nothing at open look for vendor 8-10"
    },
    "T009": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has not hit and is seeming like a major option for opening through 10am```"
    }
  },
  "monday": {
    "T003": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening look is still the move then circle back 9:30-12 or later in the afternoon also has not dropped series 2!"
    },
    "T061": {
      "chance": "High",
      "window": "",
      "reason": "Morning through mid afternoon remains strongest. Think 10-12 but don't ignore earlier checks as employees have pushed product themselves. Store drops shipment almost daily when they receive"
    },
    "T020": {
      "chance": "High",
      "window": "Opening",
      "reason": "KEEP THIS IN ROTATION ALL DAY LONG. One of the strongest allocation stores around and they rarely unload everything at once. Opening is mandatory and 12 or 2pm"
    },
    "T057": {
      "chance": "Medium",
      "window": "",
      "reason": "Check morning or mid day or later in case they push a bit mkre. If not look later this week"
    },
    "T027": {
      "chance": "High",
      "window": "",
      "reason": "Product is here you just need the timing. Best windows remain 8-10, 12-2, and 5-7:30. Sold a bit today in the morning but like always they push and hold back items themselves"
    },
    "T024": {
      "chance": "Medium",
      "window": "",
      "reason": "Pair these together. Morning checks can pay off but don't sleep on the afternoon window around 3-6 when both stores have hit before. Gardena specifically is overdue and will have many people looking t"
    },
    "T026": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Usually hits at opening when they do! Check both TCG and guest services, then a mid day day around 2-4. Leaning Towards Tuesday but check in case. Heads line up almost daily regardless for Needoh and "
    },
    "T004": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Has lately moved back to Monday\u2019s! Heads will be here prior to opening and wait it out. If you see vendor line will stay until they\u2019re done as Poke sometimes gets stocked last"
    },
    "T001": {
      "chance": "High",
      "window": "Opening",
      "reason": "Early checks remain strongest. Opening through late morning then another pass around 12-3 HAS ITEMS TO DROP BE READY"
    },
    "T005": {
      "chance": "Medium",
      "window": "",
      "reason": "Check morning time solid check as store can push a bit themselves."
    },
    "T007": {
      "chance": "Medium",
      "window": "",
      "reason": "Tends to sell Mondays either through store or vendor! Look for a morning drop or afternoon sneakily and expect employees to act clueless. Last week skipped morning and pushed at noon but check any tim"
    },
    "T154": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Definition of a wave store. Nothing for hours then suddenly stock appears. Opening is important but every check can pay off here"
    },
    "T009": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sneaky option tomorrow. Look for held back inventory and don't be shocked if it sells either opening or mid day. Usually Tuesdays but tends to hold back stock on release days"
    },
    "T011": {
      "chance": "High",
      "window": "Opening",
      "reason": "Employee push territory. Opening remains the highest percentage play but continue checking later because they don't always unload everything at once. ```"
    },
    "T121": {
      "chance": "Medium",
      "window": "",
      "reason": "Expect people to commit here and wait. Timing has been unpredictable lately which means patience matters more than ever."
    },
    "T132": {
      "chance": "Medium",
      "window": "",
      "reason": "Both stores continue receiving early week inventory. Morning checks are strong but 12-2 and later afternoon have produced results too."
    },
    "T123": {
      "chance": "Medium",
      "window": "",
      "reason": "Has been multiple Monday\u2019s now as it did hit last week! Usually around 9-11 and 1-4! ```"
    },
    "T108": {
      "chance": "Medium",
      "window": "",
      "reason": "Usually one of the stronger Monday locations! Expect people to stick around regardless of when it hits starting early!"
    },
    "T088": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening VQ with a few heads already here most likely!"
    },
    "T106": {
      "chance": "High",
      "window": "",
      "reason": "Continues to trend active on M/W/F. Afternoon remains strongest and lines will usually form right after other stores hit as well! Last week vendor arrived around 12"
    },
    "T090": {
      "chance": "Medium",
      "window": "",
      "reason": "Has been leaning hard toward Fridays. Small amounts have leaked out during the week but nothing major"
    },
    "T116": {
      "chance": "Medium",
      "window": "",
      "reason": "Traditionally one of the stronger Monday performers and will have heads/chairs here already!"
    },
    "T094": {
      "chance": "Low",
      "window": "",
      "reason": "Has moved to random drops HOWEVER that does mean they can sell tomorrow so keep on your radar from 10-12 or 2-4!"
    },
    "T165": {
      "chance": "Medium",
      "window": "",
      "reason": "Afternoon route store by nature. Even without vendor store can sell but expect it to hit from 11-2 usually! Last week hit at 11"
    },
    "T099": {
      "chance": "Low",
      "window": "Opening",
      "reason": "One of the few stores comfortable selling and holding product themselves. Makes it a bit more random but likely to have some form of product at opening. Usual big drop day is Wednesday"
    },
    "T050": {
      "chance": "Medium",
      "window": "",
      "reason": "Massive Monday reputation and one of the few stores where people will show up night before!"
    },
    "T051": {
      "chance": "Medium",
      "window": "",
      "reason": "Usually benefits from overflow traffic after South St. CHECK EARLY IN CASE IT STOCKS FIRST OR ASK ABOUT A VQ"
    },
    "T047": {
      "chance": "Medium",
      "window": "",
      "reason": "Normally follows Seal Beach activity with the hope the vendor is back to normal schedule! Heads will be EARLY and selling happens usually around 9-11"
    },
    "T042": {
      "chance": "Medium",
      "window": "",
      "reason": "Nearly daily activity lately. Store can still find ways to move remaining inventory even if quantities are lighter and people just wait here```"
    },
    "T062": {
      "chance": "Medium",
      "window": "",
      "reason": "Shipment-based store. Morning checks remain the best play and the store has no issue selling product as it arrives mid day too"
    },
    "T065": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Since employees move stock themselves, opening matters. Follow that with another pass around 11:30-2:30 and possibly later as store sells 3-4 days a week now"
    },
    "T067": {
      "chance": "High",
      "window": "Opening",
      "reason": "Consistent location for smaller waves. Definitely worth a few check-ins throughout the day and AT OPENING"
    },
    "T075": {
      "chance": "High",
      "window": "Opening",
      "reason": "Cochran remains strongest right at opening"
    },
    "T081": {
      "chance": "High",
      "window": "",
      "reason": "Vendor activity usually from 8-10 be ready! Heads will be waiting in case it hits and will linger the later it gets"
    },
    "T077": {
      "chance": "Medium",
      "window": "",
      "reason": "Has been doing more constant drops as they receive shipments and lines form around 11-1 to see what they receive!"
    },
    "T084": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Opening check!. Trends have leaned to multiple days a week recently and they drop at opening! People check daily here ```"
    },
    "T022": {
      "chance": "Low",
      "window": "",
      "reason": "Traditionally one of the stronger Monday/Tuesday stores and it stayed quiet this morning. Be there for the 7AM open and see if it hits"
    },
    "T025": {
      "chance": "Medium",
      "window": "",
      "reason": "Main focus 8-11 for a shipment to land"
    },
    "T059": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Both deserve attention. Opening first then swing back 9-11 once things get unboxed. If nothing checks go from 1-5!"
    },
    "T031": {
      "chance": "High",
      "window": "Opening",
      "reason": "Similar setup to Manhattan. Midday and evening remain strongest with 11-1 and 4-7 doing the most damage. Opening can happen but the later windows are usually better"
    },
    "T052": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Quick opening look then rerun later in the morning. If tomorrow stays quiet expect stronger Tuesday action around 9-11 or 1-4```"
    },
    "T002": {
      "chance": "Low",
      "window": "Opening",
      "reason": "Sneaky store. Could do a light employee push at opening CHECK"
    },
    "T013": {
      "chance": "Medium",
      "window": "",
      "reason": "Routes have been strange. Easy store to forget but one of the better backup plays if other routes fail. Usually has been Monday or Tuesday typically mid day or a bit after"
    },
    "T016": {
      "chance": "Medium",
      "window": "8-9am",
      "reason": "Usually hits Wednesday but last week stocked Monday so checks from 8-9am or 12-3!"
    },
    "T008": {
      "chance": "Medium",
      "window": "",
      "reason": "Basically adopted Tuesdays. Keep that in mind before camping here Monday although employees can still slide smaller items out"
    },
    "T010": {
      "chance": "High",
      "window": "",
      "reason": "Focus 8-10 or 12-2. Store loves moving product when nobody is paying attention typically hits Tuesday\u2019s but be ready in case! ```"
    },
    "T124": {
      "chance": "Low",
      "window": "",
      "reason": "If the rest of IE stays quiet this becomes more attractive. Usually feels more Tuesday/Wednesday with last week landing Tuesday"
    },
    "T140": {
      "chance": "Medium",
      "window": "",
      "reason": "Look for a morning drop and if nothing expect heads to wait around for possible vendor activity around 11-3```"
    },
    "T112": {
      "chance": "Medium",
      "window": "",
      "reason": "Start with Alicia then slide over to Jeronimo. Usually one goes during the morning while the other lands later from 11-2```"
    },
    "T048": {
      "chance": "Low",
      "window": "",
      "reason": "Store has become much more random recently"
    },
    "T045": {
      "chance": "High",
      "window": "",
      "reason": "Has not moved yet. Be ready around 9-11 or 1-3 but it can absolutely push later"
    },
    "T037": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Still waiting to drop. Usually opening or 9-11 when it finally happens so stay alert"
    },
    "T044": {
      "chance": "Medium",
      "window": "7-8AM",
      "reason": "Light rotations from 7-8AM in case! Usually opening ish if they push some times"
    },
    "T040": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Similar to Whitwood store is starting to release stock multiple times a week! Usually hits at opening / morning time"
    },
    "T066": {
      "chance": "Low",
      "window": "Opening",
      "reason": "BACH TO RANDOM DROPS. Check are best at opening ,12-2, and 6-8 but realistically lang time as store will be random AND multiple times a day"
    },
    "T078": {
      "chance": "Medium",
      "window": "",
      "reason": "Morning, 12-3, and 6-7 all remain solid. Usually not a Monday store but still worth checking"
    },
    "T079": {
      "chance": "Medium",
      "window": "",
      "reason": "Usually Monday or Wednesday action. Focus 8-10 then another pass 2-5 if nothing develops"
    },
    "T055": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Look for a morning push at opening or 12-2!"
    },
    "T018": {
      "chance": "Medium",
      "window": "",
      "reason": "Vendor hit last week so keep eyes and checks from 1-4 usually not the morning stop"
    },
    "T122": {
      "chance": "Medium",
      "window": "",
      "reason": "Vendor hit here last week around 1-2. Likely a change due to release week and holiday BUT worthwhile to keep eyes!"
    },
    "T089": {
      "chance": "Medium",
      "window": "Opening",
      "reason": "Hit last week at opening so expect heads to be on it! Line was allowed to start last week at 6am"
    },
    "T073": {
      "chance": "Low",
      "window": "",
      "reason": "Store holds back product and drops randomly but best times to check are 8-10 and 1-3!"
    },
    "T076": {
      "chance": "Medium",
      "window": "",
      "reason": "Two stores tends to show more activity through the late morning and midday! Heads will be around lingering at both around 10-12!"
    }
  }
};
