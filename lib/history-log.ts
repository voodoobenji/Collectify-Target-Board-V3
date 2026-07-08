// SERVER-ONLY. This is a substantial dataset (500KB+) and should never be
// imported by a "use client" component - doing so would bundle it into every
// visitor's JS, even though it is only needed on-demand when someone expands
// the trend log for a specific store. Only app/api/history-log/[day]/route.ts
// should import this file.

export interface LogEntry {
  date: string;
  type: "guide" | "confirmed";
  snippet: string;
}

export const HISTORY_LOG: Record<string, Record<string, LogEntry[]>> = {
  "monday": {
    "T054": [
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "Basically exact same time as Weho above! Always either Monday/Tuesdays sells a bit more fairly here but can go quicker  "
      },
      {
        "date": "2026-04-20",
        "type": "confirmed",
        "snippet": "__**Target LA/Figueroa Update:**__\n\n- ETBs are OOS.\n- AH 2-Packs are still going.\n- 16 ETBs sold, team took most!\n\n<#142"
      },
      {
        "date": "2026-02-23",
        "type": "confirmed",
        "snippet": "**Target DTLA 7th & Figueroa**\n\n- Ascended Heroes Mini Tins\n- Ascended Heroes 2-Pack Blisters\n- Available at guest servi"
      },
      {
        "date": "2025-10-06",
        "type": "guide",
        "snippet": "Usually drops on Mon or Tues morning between 7-10:30AM. Check at guest services for hot items and check in the aisle for"
      }
    ],
    "T053": [
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Will usually drop later in the week here"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Will usually drop later in the week here"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Would expect next shipment Tuesday/Wednessay"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "Would not expect restock except for possible sleeves sitting"
      },
      {
        "date": "2026-01-12",
        "type": "guide",
        "snippet": "Recently stocked can check in morning but may be Tuesday - Thursday"
      },
      {
        "date": "2026-01-05",
        "type": "guide",
        "snippet": "Will usually drop later in the week here"
      }
    ],
    "T003": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Heads will be here at open for whatever they receive! Store will also receive more by mid day and push out randomly"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Eagle Rock Mall only sold Squeezy so far.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Opening look is still the move then circle back 9:30-12 or later in the afternoon also has not dropped series 2!"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "MONDAY CLASSIC. Opening has been the sweet spot lately but 9:30-12 still hits. Store has no issue doing multiple rounds "
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Opening look is still the move then circle back 9:30-12 or later in the afternoon."
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Eagle Rock\u2019s vendor is stocking now!!***\n\n> - So far, smaller items are going out.\n> - Perfect Order Sleeved B"
      }
    ],
    "T056": [
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "Check primarily second half of the day 1-3 or 6-8 here. Can check around 9ish am but may go later if it drops"
      },
      {
        "date": "2026-04-20",
        "type": "confirmed",
        "snippet": "**Target 1833 La Cienega NOW!**\n\n- Ascended Heroes ETB (GONE once live!)\n- Ascended Heroes Premium Poster Collection\n- A"
      },
      {
        "date": "2026-04-06",
        "type": "guide",
        "snippet": "ACTIVE RECENTLY. Store avoids crowds so prioritize morning. If nothing, re-hit 12-2. Will drop limits to 1 if a line for"
      },
      {
        "date": "2026-03-30",
        "type": "guide",
        "snippet": "Store should not hold other items this week! Check at open or 11-1 usually!"
      },
      {
        "date": "2026-03-23",
        "type": "guide",
        "snippet": "Tends to put product out when it is not heavily checked great checks!"
      },
      {
        "date": "2026-03-16",
        "type": "guide",
        "snippet": "Hit last week as well! Store tries to avoid a crowd so check morning time and if nothing try 12-2. Will change limits to"
      }
    ],
    "T020": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Lines will form around 9-10:30 for a possible mid day drop! Store at some point is going to switch off this pattern so b"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Culver Mall**\n\n\u2022 Daily line has started to form up\n\u2022 4 heads in line\n\u2022 Reminder posted about an 45 mins ago as "
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Culver Mall still going!** <@&1425166183841140873>"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Culver City Mall still going with OP DP-11 Double Pack and Mega Moonlight Tins** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall\u2019s line is likely to form on the earlier side today.***\n\n> - Be on top of this store soon!\n> -"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall has lingering going on and a line will form soon too. Culver/Jefferson hot time is 11-1 and 4"
      }
    ],
    "T025": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Main focus 8-11 for a shipment to land"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Lawndale AND Target Hawthorne/120th are due! Ask each at guest services this afternoon.*** <@&1425166183841140"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Check in from 8-11! Store may need to unbox so if nothing keep eyes"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Lawndale on Hawthorne Blvd**\n\n- Phantasmal Flames Mini Portfolios\n- Available now at guest services, 1 per.\n- P"
      },
      {
        "date": "2026-05-11",
        "type": "confirmed",
        "snippet": "***Target Lawndale is now selling Ascended Hero Ex Boxes ; they are pulling from the back so the stock is UNKNOWN*** <@&"
      },
      {
        "date": "2026-04-27",
        "type": "confirmed",
        "snippet": "**Target Lawndale**\n\n- Ascended Heroes Deluxe Pin Collection\n- **2 per person,** only 1 box worth of stock.\n- 8-12 units"
      }
    ],
    "T027": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Usually around 12-2 and 4-6 IF it ever hits on a Monday. Not usually opening for Mondays"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Manhattan Beach update.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Product is here you just need the timing. Best windows remain 8-10, 12-2, and 5-7:30. Sold a bit today in the morning bu"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Manhattan Beach nothing at opening!**"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "One of the biggest holdback stores around. Vendor windows usually land 12-2 or 4-7 but employees regularly drop product "
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Product is here you just need the timing. Best windows remain 8-10, 12-2, and 5-7:30. Sold a bit today in the morning bu"
      }
    ],
    "T024": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Keep these paired together. Opening line will check as many go for Needoh or other items. Both can receive an Excel ship"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Gardena update.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Pair these together. Morning checks can pay off but don't sleep on the afternoon window around 3-6 when both stores have"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "***Target Gardena is still in play for tomorrow. A full guide listing tomorrow\u2019s stores will be posted tonight.***"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Gardena no drop at opening but please keep eyes from 8-10 for a shipment and from 11-3 as well !**"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Gardena has a line forming up once again! No confirmation just heads waiting as they have the past days** <@&14"
      }
    ],
    "T004": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Hitting Mondays again as I have warned. Heads will be here prior to opening g and wait it out. Vendor may show up early "
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Alhambra***\n\n- Vendor is there and stocking, has been there for over 30+ mins.\n- Line is at 15+ as of now.\n- S"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Alhambra is now letting people inside as they are finally selling after 2 hours!***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Alhambra sold as pictured for reference!!***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Has lately moved back to Monday\u2019s! Heads will be here prior to opening and wait it out. If you see vendor line will stay"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Alhambra line is still sub 10 people currently expect it to build up a bit more before opening!** <@&1425166052"
      }
    ],
    "T001": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Usually hits after Alhambra pls keep on your radar tomorrow. One or the other should hit in the morning ish time so you\u2019"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target 777 Pasadena***\n\n- Vendor is there and stocking.\n- Currently over 20+ heads.\n- Stop by if near if you\u2019d like.\n"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Early checks remain strongest. Opening through late morning then another pass around 12-3 HAS ITEMS TO DROP BE READY"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Morning or afternoon checks both work but feels more like later week right now"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target 777 Pasadena vendor was also on site but no Poke hehe**"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Early checks remain strongest. Opening through late morning then another pass around 12-3 if activity starts picking up."
      }
    ],
    "T012": [
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Rosemead**\n\n\u2022 Vendor should be here on site\n\u2022 Line has formed up here\n\u2022 Keep in mind store has been holding Pok"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Rosemead has Chaos Rising Booster Sleeves and OP-16 Booster Sleeves leftover** <@&1425166052496642260>"
      },
      {
        "date": "2026-01-12",
        "type": "guide",
        "snippet": "May be later on in week here"
      },
      {
        "date": "2025-12-22",
        "type": "confirmed",
        "snippet": "**Target Rosemead**\n\u2022 Vendor is here restocking again it seems! \n\u2022 Wanded that schedules can be a bit wonky rn \n\u2022 Not ma"
      },
      {
        "date": "2025-12-22",
        "type": "confirmed",
        "snippet": "**Target Rosemead Item List: ** \n\n\u2022 Charizard ex UPC\n\u2022 Destined Rivals Booster Bundles \n\u2022 Prismatic Poster Collection\n\u2022 "
      },
      {
        "date": "2025-12-15",
        "type": "guide",
        "snippet": "May be later on in week here"
      }
    ],
    "T013": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Montclair**\n\n\u2022 Vendor is here on site now\n\u2022 A bit off schedule here\n\u2022 Only 8 heads on site right now! No VQ has"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Montclair will not do a VQ today and just keep their FCFS line** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Montclair**\n\n\u2022 Vendor is on site \n\u2022 Line is still sub 20\n\u2022 Make your way over if around! <@&1425166052496642260"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Routes have been strange. Easy store to forget but one of the better backup plays if other routes fail. Usually has been"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Routes have been weird lately. Easy store to overlook but definitely one of the better backup options if vendor dodges e"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Montclair**\n\n\u2022 15+ heads in line right now\n\u2022 Vendor should be confirmed soon \n\u2022 Either hit it here or lmk where"
      }
    ],
    "T011": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Employee pushes remain the story here. Opening first then continue checking because inventory often comes out little by "
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target El Monte was sporadically selling OP-13 at guest services. This store always sells small amounts a time so can "
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target El Monte only had some Needoh product per opening - still valid enough to perform another check or so througho"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Employee push territory. Opening remains the highest percentage play but continue checking later because they don't alwa"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target El Monte has no Poke but good stock of Needoh and Squishy** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Employees have been consistently moving product on Monday mornings. Strong early stop"
      }
    ],
    "T009": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Sneaky option. Usually Tuesday. Opening and midday both deserve attention, this is in case they are holding any Poke bac"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Sneaky option tomorrow. Look for held back inventory and don't be shocked if it sells either opening or mid day. Usually"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Upland had no Poke at opening**"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Sneaky option tomorrow. Look for held back inventory and don't be shocked if it sells either opening or mid day!"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Upland no Poke at opening**"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Upland**\n\n\u2022 Chaos Rising Booster Sleeves \n\u2022.Chaos Rising Blister Pack \n\u2022 Phantasmal Flames Mini Portfolio \n\n<@&"
      }
    ],
    "T005": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Store can self push inventory so people are on it constantly. Usually morning time but truly random. Sold today early as"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Duarte confirmed some Poke stock for 8AM!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Duarte is selling now.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Duarte has Mega Zygarde ex so far.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Check morning time solid check as store can push a bit themselves."
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Duarte seemed to push out product at opening!** <@&1425166052496642260>"
      }
    ],
    "T018": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Afternoon remains the better play. Focus 1-4 store should be hitting most likely! Earlier checks as well in case"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Vendor hit last week so keep eyes and checks from 1-4 usually not the morning stop"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Baldwin Park vendor is on site with a line building up already!**\n\nPlease note store always holds a bit of Poke"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Baldwin Park**\n\n\u2022 Vendor is here on site now\n\u2022 About 5-10 heads currently \n\u2022 Ask about joining a VQ! <@&1425166"
      },
      {
        "date": "2026-03-02",
        "type": "guide",
        "snippet": "Typically does not hit Mondays besides small employees pushes"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Can check in primarily afternoon 12-2 and 3-5 employees can push product out so always a good check. A chance for mornin"
      }
    ],
    "T007": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Tell you all the time this store hits Mondays. Whether employees push or vendor shows some activity will hit either 8-10"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target San Dimas needs to be checked later**"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target San Dimas as warned**\n\n\u2022 Mega Greninja Premium Collection \n\u2022 Pokeball Tins\n\u2022 Another small pushed you were warn"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target San Dimas vendor showed up to stock up and stated their was unfortunately no Pokemon per today\u2019s shipment.*** "
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target San Dimas has not pushed Poke yet. It will be at 4PM or around opening tomorrow. Most likely times!!*** <@&142"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Tends to sell Mondays either through store or vendor! Look for a morning drop or afternoon sneakily and expect employees"
      }
    ],
    "T169": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Philadelphia may be shifting back towards Monday so check in! Expect heads to be on it from 8-11 but if nothing check ba"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia put out OP-13 and OP DP-11 Double Pack** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Chino/Philadelphia\u2019s vendor is stocking Poke & other TCG now! They also have Needohs, but the line will accoun"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Chino Philadelphia***\n\nStocked on card section :\n\n- Op-13 Sleeves \n- Chaos Rising Sleeves\n- Perfect Order Slee"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Grand has been carrying more of the action lately while Philly has stayed random. Both stores have shown they can still "
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia as warned in guide has vendor here! Please note store has been holding items back as well** "
      }
    ],
    "T168": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Chino Grand restocked yesterday a bit later in the day (purposely at a very random time) so focus on Chino Phil"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Chino Grand has a line forming but if you missed the guide store did restock a bit last night so be mindful** <"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Chino Grand should be a go today!** <@&1425166052496642260>"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Chino Grand still going with First Partner Illustration Series 2** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Chino/Grand has 4 waiting on the vendor today.***"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Chino Grand pushed out product earlier with no vendor around 12**"
      }
    ],
    "T138": [
      {
        "date": "2026-03-09",
        "type": "confirmed",
        "snippet": "**Target San Bernardino**\n\u2022 One Piece EB-03 Sleeves \n\u2022 Available now at GS\n\u2022 Head on over and pick these up! <@&14251660"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Check in tomorrow about 8-11!  Can be smaller stock check by guest services and ask"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Usually later in week here"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Check in on Wednesday here or Friday !"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Usually later in week here"
      },
      {
        "date": "2026-02-02",
        "type": "confirmed",
        "snippet": "**Target San Bernardino**\n\u2022 Mega Charizard ex UPC \n\u2022 Journey Together 3 Pack\n\u2022 Stay on your stores all listed in the gui"
      }
    ],
    "T132": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Opening in case but both stores continue to hit through midday and later afternoon. Again they will hit. At least one of"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Fontana Summit**\n\n\u2022 Line is starting to form for a drop\n\u2022 Make your way over here\n\u2022 Lots of warnings given as w"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Fontana/Summit\u2019s line is forming!***\n\n> - 10 people lined up so far.\n> - Starts outside, no drop YET.\n> - Will"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Summit/Fontana***\n\nSelling to line now :\n\n - chaos rising etb\u2019s\n- chaos rising sleeves\n- chaos rising 3pk blis"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Both stores continue receiving early week inventory. Morning checks are strong but 12-2 and later afternoon have produce"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Still carrying that Monday/Tuesday pattern. Morning and 12-2 remain the strongest checks. Again either 1 or both will hi"
      }
    ],
    "T121": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Has shifted off of their Monday drops recently. This whole area can really be random so keep eyes in case but as of late"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Jurupa Valley line needs to be updated along with Norco! Those two are a bit more likely than Eastvale and Coro"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Eastvale\u2019s current update! Stay on top of Corona and Norco, Jurupa Valley too.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Expect people to commit here and wait. Timing has been unpredictable lately which means patience matters more than ever."
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Norco also has a line waiting currently! Still not confirmation here, or Jurupa or Eastvale as of right now but"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "People will sit here forever. Timing has been all over the place with drops ranging from 9-12 all the way to 3-6"
      }
    ],
    "T123": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Has quietly turned into one of the steadier Monday stores as well. Keep eyes on 9-11 and again from 1-4 but expect heads"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Jurupa Valley has a line of 8 already waiting for a drop today** <@&1425166052496642260>"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "***Target Jurupa Valley is stocking now.***\n\n> - Vendor is here already!\n> - Currently 12-15 people in line.\n> - Store u"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Jurupa Valley has 10-13 in line waiting for the vendor today!***\n\n> - USUALLY hits by 12PM on Monday.\n> - Has "
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Jurupa Valley***\n\n- Vendor is on SITE now.\n- There should be about 10+ heads waiting from earlier.\n- Stop by i"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Jurupa Valley finally stocked up and is selling to those that waited earlier as pictured.*** <@&14251660524966"
      }
    ],
    "T108": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Still one of the better Monday stores around as it\u2019s consistent. People usually commit here early and will wait things."
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Fullerton Malvern update for this morning so far**"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Malvern update!*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Malvern update.***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Malvern update now at 40ish + people.***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Malvern***\n\nSold to line waiting :\n\n- First Partner Series 2 Boxes\n- Moonlight Mini Tins\n- OP-16 Sleeves\n- OP "
      }
    ],
    "T109": [
      {
        "date": "2026-03-23",
        "type": "guide",
        "snippet": "Has seemingly switched off from Monday evenings! Check in if you\u2019d like but so far has hit Tues/Weds/Saturday mornings a"
      },
      {
        "date": "2026-03-16",
        "type": "guide",
        "snippet": "Has seemingly switched off from Monday evenings! Check in if you\u2019d like but so far has hit Weds/Saturday mornings as we "
      },
      {
        "date": "2026-03-09",
        "type": "guide",
        "snippet": "MONDAY DROPS usually afternoons or late evenings!"
      },
      {
        "date": "2026-03-02",
        "type": "guide",
        "snippet": "Drops Monday\u2019s leans towards evening but check throughout the day in case!"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Drops Monday\u2019s but has been leaning towards evening here"
      },
      {
        "date": "2026-02-23",
        "type": "confirmed",
        "snippet": "**Target La Habra should hit today. This is one you can hit up after Cerritos if you are down for a small drive.**\n\n<@&1"
      }
    ],
    "T100": [
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Has primarily been hitting Tuesdays"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Has primarily been hitting Tuesdays"
      },
      {
        "date": "2026-01-05",
        "type": "guide",
        "snippet": "Check in for a drop from 10-12 either tomorrow if not 100% should go Tuesday"
      },
      {
        "date": "2025-12-29",
        "type": "guide",
        "snippet": "Check in for a drop from 11-1 but leaning towards Tuesday here unless holiday pushes sooner"
      },
      {
        "date": "2025-12-22",
        "type": "guide",
        "snippet": "Check in for a drop from 11-1 but less likely"
      },
      {
        "date": "2025-12-08",
        "type": "guide",
        "snippet": "Check in for a drop from 11-1 but leaning towards Tuesday here"
      }
    ],
    "T099": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Opening can pay off for anything held back, but this location stays unpredictable. Tuesday\u2019s/Wednesdays still look like "
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Tustin/Park Ave has a line of 13 waiting for opening.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "One of the few stores comfortable selling and holding product themselves. Makes it a bit more random but likely to have "
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Tustin Park Ave opened with OP-16 Booster Sleeves only**"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "One of the few stores comfortable selling and holding product themselves. Makes a bit more random so checks in general a"
      },
      {
        "date": "2026-05-25",
        "type": "guide",
        "snippet": "Store pushes and holds product themselves. Will be worth checks here tomorrow!"
      }
    ],
    "T116": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "One of OC's most dependable Monday locations. Expect early chairs and people hanging around until inventory finally come"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Seal Beach also dropped**\n\n\u2022 Mega Greninja Premium Collection \n\u2022 OP DP-11 Double Pack \n\u2022 Expect OP to be OOS wi"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Traditionally one of the stronger Monday performers and will have heads/chairs here already!"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Seal Beach is selling First Partner Illustration Series 2 themselves today, no vendor** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Usually a Monday hitter and expected for vendor to be back on schedule lines will form early!"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Traditionally one of the stronger Monday performers. Depends on vendor schedule and if store wants to keep their Monday "
      }
    ],
    "T095": [
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach may have stocked up! Could also just be holding Poke so still keep eyes!** <@&142516605676643"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target Westminster/Beach is likely to have chairs put down by this afternoon as well. Going to notify you all about c"
      },
      {
        "date": "2025-12-22",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach is restocking right now vendor is here! Noted in guide to stay on it after Mall head on over!"
      },
      {
        "date": "2025-12-15",
        "type": "confirmed",
        "snippet": "**Target Westminster/Beach**\n\n- Journey Together Booster Bundles\n- Phantasmal Flames 3-Pack Blisters\n- Available now, on"
      },
      {
        "date": "2025-11-17",
        "type": "guide",
        "snippet": "Be ready 10-12 here would imagine it stocks again before the mall!"
      },
      {
        "date": "2025-10-27",
        "type": "guide",
        "snippet": "Mid morning rotation here 11-1pm."
      }
    ],
    "T090": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Has been leaning hard toward Fridays. Small amounts have leaked out during the week but nothing major"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Morning check-ins for small amounts. Has lately been holding for Fridays here"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Store has been holding for Fridays. Small amounts have made it out throughout the week but minimal"
      },
      {
        "date": "2026-05-25",
        "type": "guide",
        "snippet": "Can check morning time here in case or ask but also will depend if vendor works"
      },
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Store claimed last week only Friday releases from now but then sold on W/Th/F. So take that as you will. It is release w"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "MONDAY DROP STORE. Lines build morning for a potential early VQ 8:30-10:30 then usually releases later around 4-6"
      }
    ],
    "T093": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Garfield may have dropped today, likely Mega Greninja Premium Collection but can try to ask!**"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Should restock Weds or Tuesday"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Should restock Weds or so!"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "May have some"
      },
      {
        "date": "2026-01-12",
        "type": "guide",
        "snippet": "Don\u2019t forget about this store been some time but they receive similar to how we saw CM 17th last week"
      },
      {
        "date": "2026-01-05",
        "type": "guide",
        "snippet": "Should restock Weds but check in for slight product! 10-12 or 2-5 may have product sitting right now as well"
      }
    ],
    "T101": [
      {
        "date": "2025-10-06",
        "type": "guide",
        "snippet": "Check in at guest services between 11-12 and between 2-3. Usually sells in that time range. Dropped a small pack last Mo"
      }
    ],
    "T034": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Carson/Sepulveda has Chaos Rising Sleeved Boosters at guest services right now. Expect a virtual queue between"
      },
      {
        "date": "2026-05-04",
        "type": "confirmed",
        "snippet": "**Target Torrance/Sepulveda**\n\n- TONS of First Partner Illustration!\n- Ascended Heroes Booster Bundles\n- 2 FP and 1 Boos"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "VQ SHOULD go at opening time"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "MORNING VQ HERE vendor schedule MAY be off but check in in case"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "VQ SHOULD go at opening time. Restock days have been a bit weird but if not right at opening peep again 10:30-12:30"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "MORNING VQ HERE PULL UP"
      }
    ],
    "T050": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Monday reputation remains solid still. People here before opening! Store has shifted some weeks but overall it starts to"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Cerritos South Street update so far this morning**"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Cerritos/South St as of ~50 minutes ago.***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Cerritos/South St is selling Pokemon SKU\u2019s - unsure of what exactly as of now, but will update when more infor"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Cerritos/South St***\n\nSelling :\n\n - chaos rising etb\u2019s\n- chaos rising sleeves\n- chaos rising 3pk blisters\n- po"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Massive Monday reputation and one of the few stores where people will show up night before!"
      }
    ],
    "T044": [
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "Similar to Cherry times above but please note this store is starting to hold stock all week so will need to be rotated a"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Most likely Tuesday-Thursday here"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Tends to be Wed-Fri here"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Most likely Tuesday-Thursday here"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Tends to be Wed-Fri here"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "Tends to be Wed-Fri here and recently sold some OP they were holding"
      }
    ],
    "T048": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone also only opened with squishies today**"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Store has become much more random recently"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Store is selling more randomly now here"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone no Poke at opening**"
      },
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Used to hit Mondays but lately has been holding for later in the week."
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Best checks are definitely later around 4-7 tends to hit either M/ T but last week dropped a bit on Thursday ask at GS h"
      }
    ],
    "T062": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Shipment-driven location. Opening remains your best opportunity but this store hand a DAILY line regardless for non Poke"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Van Nuys/Sepulveda is still due.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Shipment-based store. Morning checks remain the best play and the store has no issue selling product as it arrives mid d"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Constant shipments. Opening, 9-11, and 12-2 are all legitimate. Expect people waiting before doors even open"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Sepulveda still going with OP-16 Booster Sleeves**"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Shipment-based store. Morning checks remain the best play and the store has no issue selling product as it arrives mid d"
      }
    ],
    "T070": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Look for a shipment to hit around 11-1 and store to push around there or 3-5! May be limited or they may hold back stock"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target 11051 North Hollywood HAS NOT sold anything yet. Guest services said no shipment so far.*** <@&142516599557574"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target 11051 North Hollywood**\n\n\u2022 OP-13 Booster Sleeves\n\u2022 Single Blister Packs\n\u2022 Mega Moonlight Tins \n\nAll available n"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target 11051 North Hollywood has some OP-16** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target 11051 North Hollywood hit earlier today. Was a Monday early afternoon for FUTURE reference.*** <@&142516599557"
      },
      {
        "date": "2026-05-25",
        "type": "confirmed",
        "snippet": "**Target 11051 North Hollywood**\n\n\u2022 Mega Zygarde ex Premium Collection \n\u2022 Chaos Rising Booster Sleeves \n\u2022 Chaos Rising B"
      }
    ],
    "T065": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "CHECK AT OPENING. afternoon checks still worthwhile if nothing but store has stock to drop so be ready in case it goes t"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Sylmar update! 10 in line.***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Sylmar was only Needoh\u2019s and Ducks per opening - check back with store later towards the afternoon.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Since employees move stock themselves, opening matters. Follow that with another pass around 11:30-2:30 and possibly lat"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Sylmar opened up with Needohs only**"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Active on both Mondays and Tuesdays. Opening and 12-2 remain strongest but don't lock yourself into one window. This sto"
      }
    ],
    "T067": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Has been holding for Friday\u2019s here"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Topanga Mall Is Friday only for Poke, like many of you know!***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Consistent location for smaller waves. Definitely worth a few check-ins throughout the day and AT OPENING"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "9-11 and 1-3 continue to look best. Store has stopped waiting strictly for Fridays"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Consistent location for smaller waves. Definitely worth a few check-ins throughout the day and AT OPENING"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "9-11 and 1-3 still look best. Store has become less patient about holding everything for Friday"
      }
    ],
    "T083": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Fallbrook claims to be dropping on Fridays per sign at GS - store is very sneaky here and tends to drop random"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Fallbrook checks! A reminder to be on it between 6-closing.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Both morning and evening work. Slight lean toward later checks or possibly Tuesday. Store holds and sells small batches "
      },
      {
        "date": "2026-05-25",
        "type": "guide",
        "snippet": "Morning and late evening here store holds and plays games so would not be surprised tomorrow"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Fallbrook had some light items out at 8pm ICYMI in chat**"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Morning and evening both viable but slight lean toward later checks or Tuesday"
      }
    ],
    "T073": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "BOTH stores have claimed they will be moving to the Friday wave. I will be reminding you to check in case (especially Go"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Store holds back product and drops randomly but best times to check are 8-10 and 1-3!"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Santa Clarita/Golden Valley is still due!***\n\n> - NO VENDOR AS OF NOW, NO MOVEMENT!\n> - Currently, they are ki"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Golden Valley/Santa Clarita**\n\n- Chaos Rising Checklane Blisters\n- Chaos Rising Sleeved Boosters\n- Available at"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Golden Valley has product!**\n\u2022 Ascended Heroes Booster Bundles \n\u2022 Ascended Heroes Mega Ex Collection\n\u2022 Both ava"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Golden Valley pictured**"
      }
    ],
    "T074": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Valencia only has Butter & Duck Squeezys.***"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "**Target Valencia**\n\n- About to drop a HUGE PACK!\n- Vendor is stocking, virtual queue is up.\n- Team is here & there\u2019s en"
      },
      {
        "date": "2026-04-20",
        "type": "confirmed",
        "snippet": "***Target Apple Valley will restock around opening tomorrow. Another early post alongside Valencia because people drop c"
      },
      {
        "date": "2026-03-09",
        "type": "confirmed",
        "snippet": "**TARGET VALENCIA HAS ALSO BEEN STOCKING MONDAYS AND WILL RECEIVE A GRANADA SIZED PACK ONCE THEY DO SO BE ON TOP OF IT A"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Typically Tuesdays sometimes Weds here"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Tends to hit Tuesday\u2019s as well here"
      }
    ],
    "T068": [
      {
        "date": "2026-05-04",
        "type": "confirmed",
        "snippet": "***Target Woodland Hills update as of this morning.***"
      },
      {
        "date": "2026-03-02",
        "type": "guide",
        "snippet": "Please open this store! Be here and rotate checks also can drop GREAT stock that people miss"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Check opening and 12-2 here but has typically be holding for later in week"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Check opening and 12-2 here!"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "Check opening and 12-2 here PLEASEEEE!"
      },
      {
        "date": "2025-11-10",
        "type": "confirmed",
        "snippet": "**Target Woodland Hills - De Soto**\n\n- Mega ETB\n- Mimikyu ex Box\n- Mega Gengar ex Battle Deck\n- Mega Lucario Figure Coll"
      }
    ],
    "T072": [
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Usually later in the week and morning times. ```"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Be ready for Friday morning can check in but should stock Friday"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Usually later in the week and morning times. Can get wiped quickly stay on them in the morning times if you check ```"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Dropped on weekend some sleeves always a great catch can stock early in the day or later"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "8-10 or 5-7 tough catch but will be tomorrow or Tuesday by the registers up stairs"
      },
      {
        "date": "2026-01-12",
        "type": "guide",
        "snippet": "8-10 or 5-7 tough catch but will be tomorrow or Tuesday by the registers up stairs"
      }
    ],
    "T022": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Traditionally one of the stronger Monday/Tuesday stores and it stayed quiet this morning. Be there for the 7AM open and "
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Usually a Mon/Tues type store AND did not sell this morning so CHECK 7AM opening"
      },
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Has hit Sunday openings twice now so look for a drop later in the week"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Mondays/Tuesdays are usually the play here but did sell today a bit so be wary tomorrow. Keep in mind they usually sell "
      },
      {
        "date": "2026-05-04",
        "type": "guide",
        "snippet": "OPENING CHECK. Usually hits Mon/Tues either opening or 5-8pm"
      },
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "Is due for shipment so CHECK AT OPENING and if nothing periodically check from 4:30-8ishpm!"
      }
    ],
    "T039": [
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Typically Tuesday-Thursday is best here with strongest day being Thursday. Usually hits around 10-1 if vendor is there. "
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Hit last week can be pushed by employees as well start rotating 10-12ish or a bit later!"
      },
      {
        "date": "2026-04-06",
        "type": "confirmed",
        "snippet": "**Target Huntington Park**\n\u2022 OP-15 Booster Sleeves \n\u2022 Available now ask at GS\n\u2022 Check in with your stores for OP sleeves"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Probably Tuesday/Weds here should hit 11-1 or 4-6"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Should be either Tuesday or Wednesday and always later in day!"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Probably Tuesday/Weds here should hit 11-1 or 4-6 on those days leaning weds a bit"
      }
    ],
    "T129": [
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Redlands had no Poke at opening**"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Seems to be hitting Wednesday here"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Should hit either Weds or Friday"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Peep tomorrow has been very dry here and should restock very very soon try 8-10 or 2-4"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Chance it hits tomorrow morning especially with new releases but if not Weds or Friday"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "Small chance it hits tomorrow morning but if not Weds or Friday"
      }
    ],
    "T094": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Random timing has become the norm here. That makes opening worth checking, but don't forget the 10-12 and 2-4 windows."
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Has moved to random drops HOWEVER that does mean they can sell tomorrow so keep on your radar from 10-12 or 2-4!"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Has moved to random drops HOWEVER that does mean they can sell tomorrow so keep on your radar from 10-12 or 2-4!"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "MORNING VQ CHECK. Store claimed they were going to move to random but last week was holiday and that doesn\u2019t count so CH"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall is at 7 heads, would usually be more but store claimed they may do random so people are wary**"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall is claiming no Poke today, check beck later in case and if not we check back tomorrow** <@&142"
      }
    ],
    "T102": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin**\n\n\u2022 Line has built up here\n\u2022 Vendor is in store\n\u2022 Store does 2 per so expect stock to go prett"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin Address**\n\n2191 N Tustin St\nOrange, CA  92865\nUnited States"
      },
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Stores tends to hit either Mondays/Weds usually and typically in afternoon from 2-6. Expect heads to be waiting around a"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "May be Tuesday-Thursday here"
      },
      {
        "date": "2026-01-12",
        "type": "guide",
        "snippet": "May be Tuesday-Weds but can check 11-1 or after 3"
      },
      {
        "date": "2025-12-15",
        "type": "guide",
        "snippet": "May be Tuesday but be ready 11-1 or after 3"
      }
    ],
    "T047": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Still follows Seal Beach more often than not. Expect people waiting early with activity usually landing somewhere around"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Signal Hill is finally stocking up**\n\n\u2022 OP-13 Booster Sleeves \n\u2022 Mega Greninja Premium Collection \n\u2022 About 20 h"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Signal Hill is out of stock now**"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Seal Beach line is at 15+ waiting for vendor to hit. Usually would hit in tandem with Signal Hill but on occasi"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Signal Hill\u2019s line is only 4 people currently. Nothing confirmed.*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Signal Hill\u2019s line update, we posted one earlier too.***"
      }
    ],
    "T134": [
      {
        "date": "2026-01-19",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills**\n\u2022 OP-14 Booster Sleeves \n\u2022 Destined Rivals Booster Sleeves \n\u2022 Both available at guest services "
      },
      {
        "date": "2025-12-29",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills**\n\u2022 Phantasmal Flames Booster Sleeves \n\u2022 Destined Rivals Booster Sleeves \n\u2022 Both at GS, looks to "
      },
      {
        "date": "2025-11-17",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills** \n\u2022 Mega Sleeves\n\u2022 Available now 1 per person \n\u2022 Should sit for a bit"
      },
      {
        "date": "2025-10-27",
        "type": "guide",
        "snippet": "Solid chances with other stores stocking check in from 10-1!"
      },
      {
        "date": "2025-10-20",
        "type": "guide",
        "snippet": "Check in from 10-1 for an afternoon drop solid checks after the morning stores."
      },
      {
        "date": "2025-10-13",
        "type": "confirmed",
        "snippet": "**Target Ontario/4th**\n\n- Restocking right now!\n- Product is at guest services.\n- Less than 5-7 people in line so far.\n-"
      }
    ],
    "T110": [
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Not expected tomorrow"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Not expected tomorrow"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "Not expected tomorrow"
      },
      {
        "date": "2026-01-12",
        "type": "guide",
        "snippet": "Tends to hit afternoons and evenings but usually later in week though"
      },
      {
        "date": "2025-12-15",
        "type": "guide",
        "snippet": "Tends to hit afternoons and evenings and usually later in week though"
      },
      {
        "date": "2025-11-17",
        "type": "guide",
        "snippet": "Will be an afternoon drop here but likely later in week"
      }
    ],
    "T098": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Brookhurst Items above will be out of stock with line** <@&1425166056766439528>"
      },
      {
        "date": "2025-12-01",
        "type": "confirmed",
        "snippet": "**Target Brookhurst**\n\n- Restocking right now!\n- Head over after CM Harbor.\n- Pokemon has not started yet.\n- Vendor is o"
      },
      {
        "date": "2025-12-01",
        "type": "confirmed",
        "snippet": "__**Target Brookhurst Update:**__\n\n- Alcremie ex/Mimikyu ex Box\n- Mega Lucario ex Figure Collection\n- Available now, 1 o"
      },
      {
        "date": "2025-11-03",
        "type": "confirmed",
        "snippet": "**Target Brookhurst**\n\n- Selling Pokemon right now!\n- Not much of a crowd, go **NOW.**\n- Head over ASAP to beat the rush"
      },
      {
        "date": "2025-10-20",
        "type": "guide",
        "snippet": "Will most likely hold for a mid week drop."
      },
      {
        "date": "2025-10-20",
        "type": "confirmed",
        "snippet": "**Target Brookhurst & Westminster NOW!** <@&1425166056766439528>"
      }
    ],
    "T021": [
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Culver Jefferson has no Poke but does have Needoh!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Culver Jefferson is still going with OP-16 Booster Sleeves**"
      },
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Last week hit around 4pm but store is random and tends to sell in batches out of guest services! Opening checks at 7am t"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target Manhattan Beach has a crowd lingering too! Depending on the route you take, from Culver Mall and/or Cerritos, "
      },
      {
        "date": "2026-05-11",
        "type": "confirmed",
        "snippet": "**Target Culver City JEFFERSON**\n\u2022 Prismatic Evolution Tech Sticker \n\u2022 First Partner Illustration Box \n\u2022 Mega Charizard "
      },
      {
        "date": "2026-04-13",
        "type": "confirmed",
        "snippet": "**Target Culver City/Jefferson**\n\n- Ascended Heroes Mini Tins\n- Twilight/Surging 2-Pack Blister\n- Perfect Order 3-Pack B"
      }
    ],
    "T010": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Focus 8-10 or 12-2. Store loves moving product when nobody is paying attention typically hits Tuesday\u2019s but be ready in "
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Diamond Bar is due for stock. Usually hits Monday between 1-4PM or on Tuesday at opening. Start your rotations"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Diamond Bar\u2019s current update.***"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Check 8-10 or 12-2 here. Store loves quiet drops when nobody is around!"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Diamond Bar no poke at opening**"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Blue Diamond**\n\n\u2022 Vendor is here and stocking up now \n\u2022 Has been warned to stay on it\n\u2022 Looks like a solid amou"
      }
    ],
    "T096": [
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Usually later in the week here as well"
      },
      {
        "date": "2026-02-16",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Brookhurst**\n\u2022 Limited amount of Riftbound Origins\n\u2022 Pokemon Coin Blisters (check for set)\n\u2022 Avail"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Usually later in the week here as well"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "Usually later in the week here as well"
      },
      {
        "date": "2026-01-12",
        "type": "guide",
        "snippet": "Usually later in the week here but with weird schedules don\u2019t be shocked with a sneaky late day / night drop"
      },
      {
        "date": "2025-12-15",
        "type": "guide",
        "snippet": "Usually later in the week here!"
      }
    ],
    "T071": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "More of a Tuesday-Thursday store right now. Usually gets moving around midday"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Feels more like a Tuesday-Thursday location right now but still worth monitoring if around usually mid day and on"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Feels more like Tuesday-Thursdsy next but keep an eye on it"
      },
      {
        "date": "2026-05-04",
        "type": "guide",
        "snippet": "More Tues/Wed but keep eyes tomorrow in case as has not seemed to hit. Typically later in the day here"
      },
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "Hit today so not likely for too much tomorrow but like 11051 can check for held back"
      },
      {
        "date": "2026-04-20",
        "type": "guide",
        "snippet": "Should hit next likely for Tuesday or Wednesday but keep eyes tomorrow"
      }
    ],
    "T076": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Most activity continues showing up between 10-12 with people lingering it before."
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Madera does daily drops pretty frequently as well!***\n\n> - Line waits outside and/or by guest serv"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Madera dropped!**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Mega Greninja Premium Collection \n\u2022 OP-"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Madera Simi Valley is selling Chaos Rising Booster Bundles & Chaos Riding Sleeves if chasing!!*** <@&148896420"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Two stores tends to show more activity through the late morning and midday! Heads will be around lingering at both aroun"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Madera was warned 30 mins ago has a line of 7 formed!** <@&1488964203103522997>"
      }
    ],
    "T015": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Classic wave store. Opening matters but random drops throughout the day continue making every check worth it."
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland**\n\n\u2022 Store to no surprise put out some items\n\u2022 Looks like both Poke and One Piece availabl"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Definition of a wave store. Nothing for hours then suddenly stock appears. Opening is important but every check can pay "
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland has no Poke, dropped Needoh and Squishy**"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "One of the most chaotic stores around. Product gets scattered throughout the day so almost any rotation can pay off chec"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Definition of a wave store. Nothing for hours then suddenly stock appears. Opening is important but every check can pay "
      }
    ],
    "T136": [
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Great checks at opening here AND 9-12 be checking at both if 7am store drops be ready for 8am store"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Check in morning time but also 12-2 here as well"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Great checks at opening here AND 9-12 be checking"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Check in morning time but also 12-2 here usually one will hit!"
      },
      {
        "date": "2026-01-26",
        "type": "guide",
        "snippet": "Check in morning time but also 12-2 here Start with Mills location"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "Check in morning time but also 12-2 here warn yall and every Monday at least one hits usually"
      }
    ],
    "T040": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Becoming much more active throughout the week. Mondays not usually opening but check mid day and evening in case stock h"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Similar to Whitwood store is starting to release stock multiple times a week! Usually hits at opening / morning time"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood has 12 heads in line waiting for opening! Reminder here and Pico Rivera will have lines waiti"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Occasionally likes Monday nights but lately has been dropping shipments during opening so CHECK"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "On occasion would hit Monday nights so worth checks but lately has been Tuesday\u2019s"
      },
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Can randomly go later Mondays but USUALLY Tuesday nights. Not guaranteed but people usually start hanging around in case"
      }
    ],
    "T041": [
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "MONDAY NIGHT STORE. Dm me word collect Main checks still around 6-9 for when store gets a shipment but 50/50 whether the"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "MONDAY NIGHT STORE. 6-9 strongest but can always hold until Tuesday as it did last week ```"
      },
      {
        "date": "2026-05-04",
        "type": "guide",
        "snippet": "6-9 EVENING BIG DROP 50/50 whether they sell or hold for Tuesday but HEADS WILL BE HERE```"
      },
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "MONDAY EVENING 6-9. 50/50 whether they sell tomorrow night or Tuesday morning but a LINE FORMS REGARDLESS```"
      },
      {
        "date": "2026-04-27",
        "type": "confirmed",
        "snippet": "**Target Santa Fe Springs**\n\n- Likely to drop tonight.\n- Check in NOW at guest services.\n- Drops last due to strict limi"
      },
      {
        "date": "2026-04-20",
        "type": "guide",
        "snippet": "MONDAY EVENING 6-9. 50/50 whether they hold the product until Tuesday but people will BE HERE```"
      }
    ],
    "T084": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Opening continues being the move. This location has shifted into one of the more consistent multi day stores, so expect "
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Burbank Empire**\n\n\u2022 OP-13 Booster Sleeves\n\u2022 Chaos Rising Booster Bundle \n\u2022 Chaos Rising Booster Sleeves <@&1425"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Burbank Empire is out of stock now!**"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Burbank Empire update.***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Burbank Empire Center is STILL holding out! No drop yet.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Opening check!. Trends have leaned to multiple days a week recently and they drop at opening! People check daily here ``"
      }
    ],
    "T081": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Vendor timing continues pointing toward 8-10. Expect people waiting early and sticking around longer the later the morni"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Ventura Main**\n\n\u2022 Vendor has finally arrived here\n\u2022 Line is still waiting outside \n\u2022 Check with Ventura Mall to"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Ventura Main Street item list!**"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Ventura/Main St update. More people are here now!***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Ventura/Main\u2019s line is still waiting for the vendor.***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Ventura/Main has 10 in line waiting for the vendor.***"
      }
    ],
    "T058": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Check Broadway in case early. If not PLS rotate Wilshire around 11-1 and Broadway around 12-2 and 3-6"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Both deserve attention. Opening first then swing back 9-11 once things get unboxed. If nothing checks go from 1-5!"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target 3535 La Cienega & Target Santa Monica/Broadway checks this afternoon! Each are super due! Opening checks for t"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Broadway, as expected:***\n\n> - Dropped today\u2019s shipment now!\n> - Mega Zygarde ex Premium Collecti"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Both deserve attention. Start with opening then revisit 9-11 after unboxing. Can also wake up again later in the day"
      },
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Both stores should be in rotation. Check opening first then swing back 9-11 while they unbox or later if nothing still h"
      }
    ],
    "T023": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Westchester update, unlikely to have had anything at opening so check in during the suggested guide timeframe "
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Westchester & Inglewood/La Brea will hit between 10-1:00, or at opening today **+** tomorrow.*** <@&1425166183"
      },
      {
        "date": "2026-03-16",
        "type": "confirmed",
        "snippet": "**Target Westchester has TCG besides Poke/OP if anyone is hunting. They will have Poke on Friday at opening.** <@&142516"
      },
      {
        "date": "2026-03-02",
        "type": "guide",
        "snippet": "Store should restock a bit more tomorrow either morning or afternoon by 12-2 if it didn\u2019t push something out today"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Stores puts out themselves a bit so always a good check usually morning time or around 2-4```"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Restocked some Gundam sleeves typically puts items out either early or later in evening after 5"
      }
    ],
    "T006": [
      {
        "date": "2026-03-09",
        "type": "guide",
        "snippet": "Warned you last week! Should hit tomorrow either morning time or around 1-3! Ask about a VQ"
      },
      {
        "date": "2026-03-02",
        "type": "guide",
        "snippet": "Check in the morning new vendor may be starting here! If not tomorrow be ready Tuesday night or Wednesday morning"
      },
      {
        "date": "2026-03-02",
        "type": "confirmed",
        "snippet": "**Target Pomona IS FINALLY DROPPING!**\n\n- Virtual queue just started recently!\n- DMs have been sent, see timestamp.\n- 6 "
      },
      {
        "date": "2025-11-24",
        "type": "guide",
        "snippet": "Usually drops via VQ on Fridays be ready then! Never a bad idea to check for stock but it would be employee push and ran"
      },
      {
        "date": "2025-11-17",
        "type": "guide",
        "snippet": "Would expect both to be stocked tomorrow so choose either Upland or Pomona and be there at open! If no drop rotate back "
      }
    ],
    "T120": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target 17th st/Santa Ana***\n\n- Vendor is there now as well.\n- Currently about 10+ people in line.\n- Stop by if you\u2019d "
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Santa Ana 17th and Grand**\n\n\u2022 Vendor is here stocking up now\n\u2022 Line has built up a bit now \n\u2022 Can keep eyes in "
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Usually will drop Tuesday to Thursdays as well"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Usually will drop Tuesday to Thursdays as well"
      },
      {
        "date": "2026-01-05",
        "type": "guide",
        "snippet": "2 Stores that both should be rotated 10-12 and 3-7! Usually will drop Tuesday\u2019s and Thursdays but with holiday may alter"
      },
      {
        "date": "2025-12-29",
        "type": "guide",
        "snippet": "2 Stores that both should be rotated 10-12 and 3-7! Tend to be Tuesdays and Thursday\u2019s but can be pushed to tomorrow"
      }
    ],
    "T033": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Carson Mall put out Needohs, look for a Poke Shipment from 9-11 in case**"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Carson Mall is dropping Needohs and has a line of 14, no Poke yet.***"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Check for activity 11-2 or after Carson Sepulveda if it stocks"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Check for activity 11-2 or after Carson Sepulveda if it stocks"
      },
      {
        "date": "2026-02-02",
        "type": "confirmed",
        "snippet": "**Target CC Mall** <@&1425166183841140873>"
      },
      {
        "date": "2026-01-26",
        "type": "guide",
        "snippet": "After Carson Sepulveda is done stocking stay on this store"
      }
    ],
    "T137": [
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "May go later in the week here"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "CHECK 8-10 or 1-3 tends to hit but easily loopable so goes quick"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Update this store a bit more typically at TCG section but ask if they\u2019ve restocked"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "CHECK 8-10 or 1-3 tends to hit can people can loop easily here so be ready"
      },
      {
        "date": "2026-01-26",
        "type": "guide",
        "snippet": "CHECK 8-10 or 1-3 tends to hit but can go quickly"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "CHECK 8-10 or 1-3 tends to hit but go quickly"
      }
    ],
    "T165": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Naturally leans toward late morning into early afternoon once ship"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Brea/Birch St***\n\n- Store just received their shipment of Excell Boxes.\n- Stop by and get ready for the store "
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Afternoon route store by nature. Even without vendor store can sell but expect it to hit from 11-2 usually! Last week hi"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Traditionally an afternoon store but has been trending earlier. Morning checks can pay off in case and if nothing happen"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Afternoon route store by nature. Even without vendor store can sell but expect it to hit from 1-4 usually!"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Usually afternoon store but has been hitting earlier! Great morning checks and then if nothing line will wait it out!"
      }
    ],
    "T119": [
      {
        "date": "2025-12-22",
        "type": "guide",
        "snippet": "Check in tomorrow 8-11"
      },
      {
        "date": "2025-12-08",
        "type": "guide",
        "snippet": "Check in tomorrow 8-11 should at minimum have sleeves to scoop"
      },
      {
        "date": "2025-12-01",
        "type": "guide",
        "snippet": "Be ready tomorrow 8-11 !!"
      },
      {
        "date": "2025-11-24",
        "type": "guide",
        "snippet": "Check by guest services PLS tomorrow 8-11 !!"
      },
      {
        "date": "2025-10-27",
        "type": "confirmed",
        "snippet": "**Target - Santa Ana College selling behind guest services, 2 per**\n\n- Dancie Battle Boxes\n- Mega Sleeves \n- Zappos 3 bl"
      }
    ],
    "T088": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Opening VQ remains the expectation. Be ready before doors open because this location continues pulling a crowd"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca currently line for VQ (and needohs** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca latest VQ count is at 33** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca VQ Is starting to get called!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Irvine/Barranca update.***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Irvine/Barranca\u2019s VQ is live with 20+ on it.***"
      }
    ],
    "T051": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Usually picks up overflow traffic from South St. Check early because this location can occasionally beat South St to inv"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Cerritos Bloomfield line is at 20 heads waiting for a possible VQ at opening!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Cerritos/Bloomfield update.***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Cerritos/Bloomfield line grew to 30+ now \u2014 more than 30.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Usually benefits from overflow traffic after South St. CHECK EARLY IN CASE IT STOCKS FIRST OR ASK ABOUT A VQ"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Cerritos Bloomfield took a VQ line was updated earlier** <@&1425166140966965248>"
      }
    ],
    "T049": [
      {
        "date": "2026-04-06",
        "type": "guide",
        "snippet": "MONDAY AFTERNOON HEATER. TCG floor first then GS drop. 3-6 PRIME WINDOW stop sleeeeeping"
      },
      {
        "date": "2026-03-30",
        "type": "guide",
        "snippet": "MONDAY AFTERNOON HITS. Usually stocks TCG first then Pokemon from GS. HEAVY EYES 3-6 STOP MISSING IT HIT LAST WEEK BUT W"
      },
      {
        "date": "2026-03-23",
        "type": "guide",
        "snippet": "Hitting Monday afternoons! Tends to stock TCG area first and then drop Poke out of guest services. Heavy eyes from 3-6pm"
      },
      {
        "date": "2026-03-16",
        "type": "guide",
        "snippet": "Hitting Monday afternoons! Tends to stock TCG area first and then drop Poke out of guest services. Heavy eyes from 3-6pm"
      },
      {
        "date": "2026-03-09",
        "type": "confirmed",
        "snippet": "__**Target Norwalk/Imperial Update:**__\n\n- Sporadically selling Pokemon now.\n- Store is playing games about availaility."
      },
      {
        "date": "2026-03-09",
        "type": "confirmed",
        "snippet": "**Target Norwalk Imperial NOW NOW NOW!**\n\n*Stock is at guest services, get here!*\n\n- Toyed around with OP to sell Poke c"
      }
    ],
    "T069": [
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Pacoima has 6 heads in line waiting for opening** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Pacoima no Poke at opening**"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Usually later in the week here!"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Check 8-10 or 12-3 here if you do but vendor should stop by later in week store can sell themselves a bit though"
      },
      {
        "date": "2026-01-05",
        "type": "guide",
        "snippet": "Check 8-10 or 12-3 here please may be on Tuesday though"
      },
      {
        "date": "2025-12-29",
        "type": "guide",
        "snippet": "Check 8-10 or 12-3 here please ! Should either hit tomorrow or Tuesday"
      }
    ],
    "T064": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Mission Hills has Needohs & Butters & will sell Poke at opening on Friday.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-03-02",
        "type": "guide",
        "snippet": "Check for a restock in the morning ! Also early afternoon here"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Can check in but expected later in week"
      },
      {
        "date": "2026-02-23",
        "type": "confirmed",
        "snippet": "**Target Mission Hills had a bit of OP-14 left. Check in periodically for more!** <@&1425165995575742634>"
      },
      {
        "date": "2026-02-09",
        "type": "guide",
        "snippet": "Can check in but expected later in week"
      },
      {
        "date": "2026-01-05",
        "type": "guide",
        "snippet": "Can check in but expected later in week"
      }
    ],
    "T125": [
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Should hit tomorrow morning to 10 or from 1-4!"
      },
      {
        "date": "2026-01-26",
        "type": "guide",
        "snippet": "Should hit opening to 10 or from 1-4!"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "Should hit tomorrow morning to 10 or from 1-4!"
      },
      {
        "date": "2025-12-29",
        "type": "guide",
        "snippet": "Should hit tomorrow morning to 10 or from 1-4!"
      },
      {
        "date": "2025-12-22",
        "type": "guide",
        "snippet": "Should hit tomorrow morning to 10 or from 1-4!"
      },
      {
        "date": "2025-12-08",
        "type": "guide",
        "snippet": "Should hit tomorrow morning to 10 or from 1-4!"
      }
    ],
    "T002": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Holds stock back and usually sells morning times at opening. Heads stay here for employees to confirm if they\u2019ll have an"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Sneaky store. Could do a light employee push at opening CHECK"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Sneaky location. Could do small employee pushes but expected mid week as well"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "SLEEPER option for either employee push or vendor stop in the morning!"
      },
      {
        "date": "2026-05-04",
        "type": "confirmed",
        "snippet": "***Target 3121 Pasadena***\nSelling at opening :\n- Ascended Hero 2pk Blisters\n- First Partner Collection\n- Poke Day Boxes"
      },
      {
        "date": "2026-01-12",
        "type": "guide",
        "snippet": "Can check morning time or 4-7 but not likely"
      }
    ],
    "T114": [
      {
        "date": "2026-04-20",
        "type": "confirmed",
        "snippet": "__**Target Alicia Parkway Update:**__\n\n- Ascended Heroes ETBs are still going.\n- Perfect Order ETBs are still going too!"
      },
      {
        "date": "2025-12-15",
        "type": "guide",
        "snippet": "Other MV store hit so check in"
      }
    ],
    "T167": [
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Santa Ana/3300 Bristol**\n\n- Vendor just arrived, get here **NOW!**\n- 6-9 people in line so far, not cooked at a"
      },
      {
        "date": "2026-03-16",
        "type": "confirmed",
        "snippet": "**Target Santa Ana Bristol**\n\u2022 Mega Evo / Phantasmal 2 Pack Blister \n\u2022 Dragonball Sleeves \n\u2022 Seems to have restocked as "
      },
      {
        "date": "2026-03-09",
        "type": "confirmed",
        "snippet": "**Target Santa Ana 3300 Bristol**\n\u2022 Mega Evo / Phantasmal 2 Pack Blister \n\u2022 OP TS-02 Mini Tin \n\u2022 Mega Evo Mini Tin\n\u2022 Kno"
      },
      {
        "date": "2026-03-02",
        "type": "confirmed",
        "snippet": "**Target Santa Ana Bristol**\n\u2022 Store is stocking up now !\n\u2022 Line is forming currently \n\u2022 Besides that, CM Harbor line is"
      },
      {
        "date": "2026-03-02",
        "type": "confirmed",
        "snippet": "**TARGET SANTA ANA BRISTOL UPDATE** \u2b06\ufe0f"
      },
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Check tomorrow 8-11 or 3-6 since shipments may be up but may end up going Tuesday or Wednesday"
      }
    ],
    "T112": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Start with Alicia then slide over to Jeronimo. Usually one goes during the morning while the other lands later from 11-2"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Alicia Parkway only sold Needohs today, check at opening tomorrow; them & Target Mission Viejo/J"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Check Alicia early then swing by Jeronimo after! Can flip flop but that\u2019s more likely to have one hit from 8-11 and the "
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo/Jeronimo**\n\n- Vendor is currently on premises.\n- Store should push out A FEW items.\n- However, th"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Jeronimo has not sold yet.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-03-23",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo/Jeronimo**\n\n- Ascended Heroes ETB\n- Available now at guest services.\n- Head over within 20 minute"
      }
    ],
    "T107": [
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Store was stating vendor was coming mondays but should still be Thursdays. Can check 2ish in case."
      },
      {
        "date": "2026-01-26",
        "type": "guide",
        "snippet": "Store said vendor has been coming at 2pm on Mondays be here 1-3"
      },
      {
        "date": "2026-01-19",
        "type": "guide",
        "snippet": "Store said vendor has been coming at 2pm on Mondays be here 1-3 tomorrow !"
      }
    ],
    "T029": [
      {
        "date": "2026-04-20",
        "type": "confirmed",
        "snippet": "**Target Inglewood/La Brea**\n\n- Vileplume Blisters\n- These have been sitting for days.\n- Head over if you are chasing st"
      },
      {
        "date": "2026-04-06",
        "type": "guide",
        "snippet": "Ask at GS here a bit tomorrow usually from 11-2!"
      },
      {
        "date": "2026-03-30",
        "type": "guide",
        "snippet": "Two stores. PRIORITIZE La Brea 11-2 and ask GS at both. Century is more random timing and can play games"
      },
      {
        "date": "2026-03-30",
        "type": "confirmed",
        "snippet": "**Target Inglewood La Brea**\n\u2022 Phantasmal Flames Mini Portfolios \n\u2022 Perfect Order Booster Sleeves \n\u2022 Both available at g"
      },
      {
        "date": "2026-03-23",
        "type": "guide",
        "snippet": "Two stores here check with La Brea especially from 11-2 ask at guest services at both. Century a bit more random timing"
      },
      {
        "date": "2026-03-16",
        "type": "confirmed",
        "snippet": "**Target Inglewood/La Brea**\n\n- ME/PF 2-Pack Blisters\n- Available right now, 0 line.\n- Sitting, more Poke here Thursday "
      }
    ],
    "T091": [
      {
        "date": "2026-04-13",
        "type": "confirmed",
        "snippet": "***Target Costa Mesa 17th dropped! Head over!*** <@&1425166056766439528>"
      },
      {
        "date": "2026-01-26",
        "type": "guide",
        "snippet": "May have some items check in 2-5!"
      }
    ],
    "T097": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Cypress has 25+ in line for Needohs at opening!***"
      },
      {
        "date": "2026-02-16",
        "type": "guide",
        "snippet": "Check for vendor 12-2 here !"
      },
      {
        "date": "2026-02-02",
        "type": "guide",
        "snippet": "Check in for product 8-10 and look for vendor 12-2!"
      },
      {
        "date": "2026-01-26",
        "type": "guide",
        "snippet": "Has been switching to Mondays here stay heavy 12-2!"
      },
      {
        "date": "2026-01-19",
        "type": "confirmed",
        "snippet": "**Target Cypress**\n\u2022 Restocking right now here \n\u2022 OP is available but may be light on Pokemon as warned \n\u2022 6-7 heads cur"
      }
    ],
    "T030": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Torrance Del Amo**\n\n\u2022 Restocking now with a confirmed drop\n\u2022 20 heads in line\n\u2022 Keep updating those checks! <@&"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Torrance Del Amo Item List**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Mega Greninja Premium Collection \n\u2022 Mega"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Torrance Del Amo is out of stock of First Partner Illustration Series 2** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Torrance/Del Amo update.***"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Torrance/Del Amo still has 20+ in line. They have not let people inside yet.***"
      },
      {
        "date": "2026-04-20",
        "type": "confirmed",
        "snippet": "**Target Torrance Del Amo**\n\u2022 Store is stocking up a bit right but ONLY SPORTS\n\u2022 Check in for specifics here\n\u2022 Also note"
      }
    ],
    "T089": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Opening has become much more likely lately. Expect heads to be here ready and checking! If nothing then rotate a bit"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Irvine Spectrum opened with Needohs only**"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Irvine Spectrum has some smaller items now!*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Irvine Spectrum sold some products at opening. They still have smaller products such as:***\n\n> - Mega Zygarde "
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Irvine Spectrum update is pictured above.***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Hit last week at opening so expect heads to be on it! Line was allowed to start last week at 6am"
      }
    ],
    "T086": [
      {
        "date": "2026-02-23",
        "type": "guide",
        "snippet": "Check for items in the morning 8-10!"
      }
    ],
    "T066": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Granada Hills has a decent line prior to opening as well - store usually tends to start checking in shipments "
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "BACH TO RANDOM DROPS. Check are best at opening ,12-2, and 6-8 but realistically lang time as store will be random AND m"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Granada Hills is back to daily drops. They let go of a pack today!*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Granada Hills still has some product! They\u2019re back to daily drops, 2x reminder! What\u2019s pictured is what\u2019s left"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Store claims they will not sell any poke whatsover until Fridays now. I feel some light times make it out before then so"
      },
      {
        "date": "2026-05-04",
        "type": "guide",
        "snippet": "DAILY STORE. Opening or 12-2 PRIME but can hit any times 6-8pm as well"
      }
    ],
    "T055": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "More likely for Tuesdays/Wednesday but check 12-3 in case"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Look for a morning push at opening or 12-2!"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Westwood seemed to stock up a bit and has Perfect Order Blister Pack sitting!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Westwood**\n\n\u2022 Phantasmal Flames Mini Portfolio \n\u2022 OP-16 Booster Sleeves \n\u2022 2 per person here <@&142516618384114"
      },
      {
        "date": "2026-03-09",
        "type": "guide",
        "snippet": "Check morning time and 12-3 for possible but may be on Wednesday here"
      },
      {
        "date": "2026-03-09",
        "type": "confirmed",
        "snippet": "**Target Westwood has One Piece EB-03 Sleeves, 1 per person** <@&1425625697141133334>"
      }
    ],
    "T124": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Has been hitting Tuesday\u2019s more consistently here"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Corona Tuscany should also be hitting soon, please be on top of the store!!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "If the rest of IE stays quiet this becomes more attractive. Usually feels more Tuesday/Wednesday with last week landing "
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "If the rest of IE stays quiet then this becomes more attractive. Generally feels more Tuesday-Wednesday, last week was T"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Unless the entire route looks dead this should lean Tues/Weds"
      },
      {
        "date": "2026-05-04",
        "type": "guide",
        "snippet": "Lean Tuesday but watch afternoon if Eastvale doesn\u2019t"
      }
    ],
    "T080": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Another option to check usually after Ventura Main in case they receive! Usually around 11-1 or a bit after"
      },
      {
        "date": "2026-03-23",
        "type": "guide",
        "snippet": "Check morning time and mid afternoon here!"
      },
      {
        "date": "2026-03-16",
        "type": "guide",
        "snippet": "Check morning time and mid afternoon here! Still fine tuning 805 coverage so any additions or notes please DM ME"
      },
      {
        "date": "2026-03-09",
        "type": "guide",
        "snippet": "Morning or afternoon drop here check in where the Ventura folks at?!"
      },
      {
        "date": "2026-03-02",
        "type": "guide",
        "snippet": "As noted last week should sell either morning or early afternoon here!"
      },
      {
        "date": "2026-02-23",
        "type": "confirmed",
        "snippet": "**Target Ventura Mall**\n\n- Ascended Heroes Tech Sticker\n- Very limited, has been going.\n- Restocked midday today, for fu"
      }
    ],
    "T052": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target 7100 West Hollywood has Chaos Rising Sleeves & Chaos Rising 3pk blister if chasing!!*** <@&1425625697141133334"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Quick opening look then rerun later in the morning. If tomorrow stays quiet expect stronger Tuesday action around 9-11 o"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Quick look at opening then circle back later in the morning. If tomorrow stays dead then expect stronger action Tuesday "
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target West Hollywood HAS NOT dropped Prismatic ETBs yet. It should go down today or tomorrow, between 12 (already pa"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Opening look or swing back later morning. If it stays quiet probably Tuesday 9-11 or 1-4```"
      },
      {
        "date": "2026-05-04",
        "type": "guide",
        "snippet": "Opening or late morning. Tends to drop but also should receive more shipment Tuesday ```"
      }
    ],
    "T133": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover is another option to check this afternoon. ASK GUEST SERVICES. They are selective here.*** <@&1"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Fontana Slover**\n\n\u2022 Destined Rivals Booster Sleeves \n\u2022 OP Starter Decks\n\u2022 Both available at guest services <@&1"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover's current update.***"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover just hit as well!!!***"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "__**Target Fontana/Slover items include:**__\n\n> - Moonlight Tins\n> - Lumonise City Mini Tins\n> - 2026 World Championship"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***TARGET FONTANA SLOVER IS STARTING TO PUT OUT MORE! ASCENDED PRODUCT GOING OUT NOW.*** <@&1425166052496642260>"
      }
    ],
    "T166": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Buena Park has Mega Greninja Premium Collection sitting at guest services** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Buena Park also still has Mega Greninja Premium Collection sitting at guest services**"
      },
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "Has been dropping Mondays here smaller amounts! Check in 9-11, 2-4, and 6-7:30 here!"
      },
      {
        "date": "2026-04-27",
        "type": "confirmed",
        "snippet": "**Target Buena Park**\n\n- Ascended Heroes 2-Pack Blisters\n- Available now at guest service, go!\n- 1 of each style per per"
      },
      {
        "date": "2026-04-06",
        "type": "confirmed",
        "snippet": "**Target Buena Park**\n\n- Ascended Heroes Mini Tins\n- Charizard ex Tins\n- Perfect Order Sleeved Boosters\n- Fresh shipment"
      },
      {
        "date": "2026-03-16",
        "type": "guide",
        "snippet": "Hit a small restock last week in the afternoon! Has a major major drop every Thursday but I\u2019d be ready for some items to"
      }
    ],
    "T031": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Similar setup to Manhattan. Midday and evening remain strongest with 11-1 and 4-7 doing the most damage. Opening can hap"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Similar store to Manhattan. Midday and evening are strongest with 11-1 and 4-7 being the money windows. CAN drop at open"
      },
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Same rotations as Manhattan Midday and evening checks strongest here 11-1 and 4-7 as store doesn\u2019t sell without vendor a"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Same type of flow as Manhattan. Heavy checks 11-1 then again 4-7 usually ONE of these will hit almost daily"
      },
      {
        "date": "2026-05-04",
        "type": "guide",
        "snippet": "SAME FLOW AS MANHATTAN. 11-1 or 4-7 check in store has been dropping 2-3 times a week now minimum"
      },
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "Checks tomorrow 11-1 and 4-7 very similar to Manhattan but store did sell some items today."
      }
    ],
    "T142": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Vendor tends to hit Monday mornings so be ready around 9-11!"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target La Quinta**\n\n\u2022 Vendor is here now!\n\u2022 11 heads currently in line\n\u2022 Male your way over if around! <@&142516605249"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target La Quinta**\n\n- Restocking RIGHT NOW!\n- Line is expected to grow quickly.\n- Drops packs, only hits 1-2x per week"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target La Quinta line update.*** ^^"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target La Quinta is beginning to sell now!***\n\n> - Ascended Heroes ex Boxes\n> - Ascended Heroes Booster Bundles\n> - F"
      },
      {
        "date": "2026-04-06",
        "type": "guide",
        "snippet": "Check morning time until 9:30-10ish look for vendor!```"
      }
    ],
    "T008": [
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target La Verne had Needohs at opening only**"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Basically adopted Tuesdays. Keep that in mind before camping here Monday although employees can still slide smaller item"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target La Verne has Mega Zygarde ex Premium Collection and OP-16 Booster Sleeves sitting still** <@&142516605249664226"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Has basically adopted Tuesdays lately. Keep that in mind before overcommitting here Monday BUT store can push out light "
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target La Verne**\n\n\u2022 Warned not 15 mins ago\n\u2022 Pushed out some products by employees now\n\u2022 Waiting for member to give m"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target La Verne is claiming no Poke may have sold earlier** \nStore is constantly playing here so keep eyes and can rot"
      }
    ],
    "T078": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Morning, 12-3, and 6-7 all remain solid. Usually not a Monday store but still worth checking"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Morning and 12-3 and 6-7 remain strongest. Usually not Monday\u2019s but can check"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Morning or 4-7 should hit either tomorrow or Tuesday"
      },
      {
        "date": "2026-05-04",
        "type": "guide",
        "snippet": "Morning or 5-8pm look for vendor may stock other items and hold Poke but CHECK"
      },
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "Hit two weeks in a row already check morning time or 3-6 should let things fly!"
      },
      {
        "date": "2026-04-20",
        "type": "guide",
        "snippet": "Hit two weeks in a row already check morning time or 4-7!"
      }
    ],
    "T079": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "**Target Camarillo**\n\n- Chaos Rising ETB\n- Other smaller items as well.\n- Available now, sitting at guest services.\n- On"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Usually Monday or Wednesday action. Focus 8-10 then another pass 2-5 if nothing develops"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Camarillo**\n\n\u2022 Mega Zygarde ex Premium Collection \n\u2022 Phantasmal Flames Mini Portfolio \n\u2022 Both available on disp"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Usually Monday\u2019s or Weds attention 8-10 then another look 2-5 if it stays quiet"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Morning checks 8-10 or later if nothing 2-5!"
      },
      {
        "date": "2026-05-11",
        "type": "confirmed",
        "snippet": "**Target Camarillo**\n\n- Sold **4** Ascended Heroes Pin Collections\n- Expect them to trickle items out slowly this week.\n"
      }
    ],
    "T045": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Has not moved yet. Be ready around 9-11 or 1-3 but it can absolutely push later"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Store has not moved so BE READY usually from 9-11 or 1-3 b but can push later"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Cherry is dropping NOW, on a MONDAYYYY!*** <@&1425166140966965248>"
      },
      {
        "date": "2026-04-27",
        "type": "guide",
        "snippet": "Expected to drop and stock has been here but will be random timing. Checks start at opening and my most suggest times ar"
      },
      {
        "date": "2026-04-27",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Cherry update. NOTHING CONFIRMED***"
      }
    ],
    "T126": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Has been hitting multiple times a week! Usually Tuesday\u2019s / Thursdays when they do but can also check tomorrow around 11"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside should be stocking up! Be ready for stock to trickle out** <@&1425166052496642260>"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Mega Greninja Premium Collection \n\u2022 Freshly put out"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Tyler Riverside guest services told a member to check back at 4ish or tomorrow for Pokemon.***"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside has a line waiting! Store has been dropping earlier in the week so heads will check!** <@&14251"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside just Needoh at opening**"
      }
    ],
    "T038": [
      {
        "date": "2026-05-18",
        "type": "guide",
        "snippet": "Hit Thursday last week but don\u2019t completely ignore tomorrow. Morning 8-10 or later 1-4 checks in case they sneak a small"
      },
      {
        "date": "2026-05-11",
        "type": "guide",
        "snippet": "Store last week hit Thursday but don\u2019t completely ignore a small drop in the morning 8-10 or 1-4"
      },
      {
        "date": "2026-05-04",
        "type": "guide",
        "snippet": "Did receive last week in the morning 8:30-11am can check or 4-6 in case it hits again"
      },
      {
        "date": "2026-05-04",
        "type": "confirmed",
        "snippet": "***Target South Gate is telling people that they will sell at opening on Wednesday, May 6. We will be here to confirm/de"
      },
      {
        "date": "2026-04-27",
        "type": "confirmed",
        "snippet": "**Target South Gate**\n\u2022 Ascended Heroes Booster Bundles \n\u2022 Ascended Heroes 2 Pack Blister \n\u2022 First Partner Illustration "
      }
    ],
    "T075": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Has claimed they are saving Poke for Fridays. Can check for other items at opening as they should receive and sell non p"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Cochran told a member only Fridays for Pokemon now. We\u2019ll update whether this is true or not. Huge"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Cochran remains strongest right at opening"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Cochran keeps drawing huge attention because of stock volume. Opening and 2-4 remain strongest. Madera usually leans mor"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Both deserve attention. Cochran remains strongest right at opening while Madera tends to show more activity through the "
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Cochran continues pulling huge attention because of recent stock volume. Opening and 2-4 remain strongest. Madera follow"
      }
    ],
    "T061": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "UPS shipment should land around 9-10 and then heads will be here hawking it to see if they get excel boxes and sell!"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Glendale***\n\nSelling now :\n\n- Ascended Hero Booster Bundles \n- Small line as of now!\n- Will be sold out with t"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Morning through mid afternoon remains strongest. Think 10-12 but don't ignore earlier checks as employees have pushed pr"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Glendale Galleria has a line waiting for opening as usual to check for Needoh! Some heads will stick around and"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Quietly turning into an almost daily stop. Timing bounces around but 10-12 has been the best stretch recently while they"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Glendale Galleria**\n\nShipment has just arrived as warned multiple times expect a line to form up! <@&1425165995"
      }
    ],
    "T106": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Afternoon remains the stronger play, especially once nearby stores begin selling and people rotate over (Malvern). Last "
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Fullerton Yorba Linda vendor arrived but likely will sell Poke at another time check tomorrow or later tonight!"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Yorba Linda (checks now to 11:30) \u2014> Yorba Linda/Yorba Linda (checks 1-4:00PM) is another solid rout"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target La Habra is in plsy once Fullerton is done. Check Fullerton/Yorba Linda & Yorba Linda/Yorba Linda too!*** <@&1"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Continues to trend active on M/W/F. Afternoon remains strongest and lines will usually form right after other stores hit"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Fullerton Yorba Linda**\n\n\u2022 Vendor is here now!\n\u2022 5 heads currently in line\n\u2022 Make your way over if around all h"
      }
    ],
    "T042": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Still one of the busiest stores around. Opening remains strongest, but this location sells as they receive sometimes twi"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood has a line outside waiting for today\u2019s shipment** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Nearly daily activity lately. Store can still find ways to move remaining inventory even if quantities are lighter and p"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood has no Poke at opening**"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Basically an everyday store now. People line up early and usually wait for shipment somewhere around 10-12"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood**\n\n\u2022 OP-16 Booster Sleeves \n\u2022 OP Starter Decks\n\u2022 Store limits here so sitting currently <@&14"
      }
    ],
    "T057": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Can check at opening but most likely time IF they receive tomorrow would be around mid day so heavy checks from 1:30-4 o"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Check morning or mid day or later in case they push a bit mkre. If not look later this week"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega no Poke today**"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Expect store to "
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Check morning or mid day or later in case they receive more but may push to later this week"
      },
      {
        "date": "2026-05-25",
        "type": "guide",
        "snippet": "Going to keep reminding you they have a pack to sell so unless they sell tonight (which they can) checks start at openin"
      }
    ],
    "T087": [
      {
        "date": "2026-05-25",
        "type": "guide",
        "snippet": "Hits evening typically here if vendor is working"
      },
      {
        "date": "2026-05-11",
        "type": "confirmed",
        "snippet": "**Target Oxnard Collection**\n\n- Stocking right now!\n- Only 4-6 people in line SO FAR.\n- Expect the vendor to take a whil"
      },
      {
        "date": "2026-03-16",
        "type": "confirmed",
        "snippet": "**Target Oxnard Collection**\n\n- Vendor is currently stocking.\n- There are only 1-2 people in line.\n- No gurantee of Poke"
      }
    ],
    "T077": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Claims to be back to Friday drops!"
      },
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Has been doing more constant drops as they receive shipments and lines form around 11-1 to see what they receive!"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Moorpark update** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Opening remains solid but the real strength continues to sit around 12-3 especially after Madera!"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Moorpark hit, as warned.***\n\n> - Hop's Zacian ex Box\n> - Moonlight Tins\n> - Lumonise City Mini Tins"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "***Target Moorpark has people lingering inside for their daily drop. Has not hit yet. You\u2019ll need to be early if you wan"
      }
    ],
    "T037": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Still waiting to drop. Usually opening or 9-11 when it finally happens so stay alert"
      },
      {
        "date": "2026-06-01",
        "type": "guide",
        "snippet": "Has not dropped yet. Typically drops opening or 9-11 when they do drop so you\u2019ll have to keep eyes!"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Compton has 7 heads in line as posted in guide and needs to be checked at opening!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Compton no Poke at opening**"
      },
      {
        "date": "2026-03-02",
        "type": "confirmed",
        "snippet": "**Target Compton/Rancho Dom**\n\n- Prismatic Evolutions Tech Sticker\n- Mega/Phantasmal 2-Pack Coin Blister\n- Assorted Knoc"
      }
    ],
    "T026": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Usually Tuesdays/Thursdays here but did hit late on a Monday Night previously so keep eyes in case they get a mid day or"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Hawthorne/120th update. Double back between 11-1:00 at guest services for Poke!***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Usually hits at opening when they do! Check both TCG and guest services, then a mid day day around 2-4. Leaning Towards "
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Hawthorne 120th has 15 heads waiting for opening**"
      },
      {
        "date": "2026-06-08",
        "type": "guide",
        "snippet": "Usually hits at opening when they do! Check both TCG and guest services, then a mid day day around 2-4. Leaning Towards "
      }
    ],
    "T016": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Usually hits Wednesday but last week stocked Monday so checks from 8-9am or 12-3!"
      }
    ],
    "T131": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Store is pushing product on their own so reminder to stay on it!"
      }
    ],
    "T140": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Look for a morning drop and if nothing expect heads to wait around for possible vendor activity around 11-3```"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "**Target Murrieta Cal Oaks**\n\n\u2022 Vendor is here on site now\n\u2022 Line is only about 10-15 rn\n\u2022 No confirmation of Poke and c"
      }
    ],
    "T170": [
      {
        "date": "2026-06-15",
        "type": "guide",
        "snippet": "Checks morning time for shipment here!"
      }
    ],
    "T122": [
      {
        "date": "2026-07-06",
        "type": "guide",
        "snippet": "Has been hitting MULTIPLE mondays in a row! While this does not mean it will stay like that people will form lines and w"
      },
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Norco**\n\n\u2022 Vendor is on site\n\u2022 Line has been forming a bit\n\u2022 Warned this area can switch it up but reminders po"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Norco is hitting now!!!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Norco sold as stated and pictured per our member to the line!***"
      },
      {
        "date": "2026-06-22",
        "type": "guide",
        "snippet": "Vendor hit here last week around 1-2. Likely a change due to release week and holiday BUT worthwhile to keep eyes!"
      },
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target Norco**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Mega Moonlight Tins \n\u2022 Lumiose City Mini Tins <@&142516605249"
      }
    ],
    "T063": [
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer no Poke at opening**"
      },
      {
        "date": "2026-04-06",
        "type": "confirmed",
        "snippet": "**Target Van Nuys/Raymer**\n\n- Ascended Heroes Mini Tins\n- Perfect Order Sleeved Boosters\n- Limit of 2 per SKU, per perso"
      },
      {
        "date": "2026-03-09",
        "type": "confirmed",
        "snippet": "**Target Van Nuys/Raymer**\n\n- Just received shipment in-store.\n- Includes Excel boxes, meaning TCG.\n- No confirmation of"
      },
      {
        "date": "2026-03-02",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer**\n\n- Phantasmal/Mega Coin Blisters\n- Held for 10 mins in SFV chat.\n- Available at guest service"
      },
      {
        "date": "2026-02-02",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer has 2 Pack Mega/PF Blisters available ** \nRestocked a bit earlier as well some other items <@&1"
      },
      {
        "date": "2025-12-29",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer** \n\u2022 Charizard ex UPC\n\u2022 Mega Evo Sleeves\n\u2022 Both available at guest services, keep eyes on Topan"
      }
    ],
    "T130": [
      {
        "date": "2026-04-13",
        "type": "confirmed",
        "snippet": "**Target Hesperia**\n\n- Vendor is here now.\n- 15 or so are in line here.\n- Hits every single Mon morning.\n- We will post "
      },
      {
        "date": "2026-01-26",
        "type": "confirmed",
        "snippet": "**Target Hesperia Main Street**\n\u2022 Drop confirmed with a line forming before open! \n\u2022 Head over and ask to join VQ\n\u2022 Upda"
      },
      {
        "date": "2026-01-19",
        "type": "confirmed",
        "snippet": "**Target Hesperia Main Street**\n\u2022 Restocking right now a heavy amount! \n\u2022 OP Vol. 6 Illustration Boxes \n\u2022 OP DP-09 Doubl"
      },
      {
        "date": "2026-01-05",
        "type": "confirmed",
        "snippet": "**Target Hesperia**\n\u2022 Vendor is on site right now\n\u2022 About 8-9 heads are currently waiting\n\u2022 Warned you in the guide this"
      },
      {
        "date": "2025-11-24",
        "type": "confirmed",
        "snippet": "**Target - Hesperia Main Street**\n- Restocking now, head to CS to add your name to queue\n- Expecting Phantasmal Flames i"
      },
      {
        "date": "2025-10-20",
        "type": "confirmed",
        "snippet": "**Target - Hesperia Main Street**\n- Vendor arrived and is stocking\n- 12 in line for VQ \n\n<@&1425166052496642260>"
      }
    ],
    "T082": [
      {
        "date": "2025-11-17",
        "type": "confirmed",
        "snippet": "**Target Westlake - SFV**\n\n- Phantasmal Singles\n- Available now, 2 per.\n- Should sit for a while.\n\n<@&142516599557574263"
      }
    ],
    "T092": [
      {
        "date": "2025-12-01",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Adams**\n\n- NBA x Topps 2025/26 Chase Blasters\n- Selling now and honoring 30% if you press.\n- A"
      }
    ],
    "T017": [
      {
        "date": "2025-12-08",
        "type": "confirmed",
        "snippet": "**Target N Azusa / City of Azusa** \n\u2022 Mimikyu ex Box\n\u2022 Twilight / SS 2 Pack Blister \n\u2022 Collectors Chest 2025\n\u2022 Destined "
      }
    ],
    "T059": [
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Santa Monica Wiltshire**\n\n\u2022 Mega Zygarde ex Premium Collection \n\u2022 Phantasmal Flames Mini Portfolio \n\u2022 Both avai"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Santa Monica Wilshire just stocked as well!**\n\u2022 Ascended Heroes Deluxe Pin Collection \n\u2022 Phantasmal Flames Mini"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Wilshire is selectively selling, and this pic is rrom the member who pinged it ~8 minutes ago.***"
      },
      {
        "date": "2026-03-16",
        "type": "confirmed",
        "snippet": "**Target Santa Monica/Wilshire**\n\n- Pokemon Day 2026 Boxes\n- Available now with zero line.\n- Will sit so stop by if you'"
      }
    ],
    "T028": [
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "***Target Inglewood/Century has undesirable items sitting.***\n\n> - Moonlight Tins\n> - Lumiose City Mini Tins\n> - Sitting"
      },
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Inglewood Century has OP-16 Booster Sleeves**"
      },
      {
        "date": "2026-04-20",
        "type": "confirmed",
        "snippet": "**Target Inglewood/Century**\n\n- Vileplume Blisters\n- Available at guest services.\n- 1 per person, ask nicely.\n\n<@&142516"
      },
      {
        "date": "2026-04-06",
        "type": "confirmed",
        "snippet": "**Target Inglewood/Century**\n\n- Ascended Heroes Mini Tins\n- Mega/Phantasmal Coin Blisters\n- Available at guest services,"
      },
      {
        "date": "2026-03-16",
        "type": "confirmed",
        "snippet": "**Target Inglewood/Century**\n\n- Also selling ME/PF Blisters.\n- Easy 1-2 with ING/La Brea Target.\n- Will sell more closer"
      }
    ],
    "T147": [
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Santee**\n\n\u2022 Vendor is currently stocking \n\u2022 Prismatic Evolutions ETB are confirmed \n\u2022 20+ in line currently <@&"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target Santee sold Prismatic ETBs and more this morning! Store usually drops packs, stay tuned for ~2 more drops here"
      },
      {
        "date": "2026-04-06",
        "type": "confirmed",
        "snippet": "**Target Santee**\n\u2022 15-17 people currently in line\n\u2022 Vendor stocking up now slow\n\u2022 Should be done around 11am-12pm <@&14"
      }
    ],
    "T171": [
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "**Target Encinitas/SD**\n\n- Line has formed for a drop today!\n- Store should hit heavily between 2-3PM.\n- As of now, it i"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Encinitas**\n\n- 30+ people are in line now.\n- Store has been listed since last night.\n- Should begin selling wit"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target Encinitas is finally selling!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-05-04",
        "type": "confirmed",
        "snippet": "**Target Encinitas**\n\n- Line is starting to form for a restock.\n- NO CONFIRMATION of it going down.\n- 20 heads is not co"
      },
      {
        "date": "2026-05-04",
        "type": "confirmed",
        "snippet": "***Target Encinitas will not be selling today.*** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-13",
        "type": "confirmed",
        "snippet": "**Target Encinitas**\n\n- Restocks every Monday afternoon!\n- A line is already forming for today's drop.\n- Stock is expect"
      }
    ],
    "T113": [
      {
        "date": "2026-04-20",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo/Puerta Real**\n\n- Had a Poke restock earlier, check for smaller items.\n- Sports such as Topps Chro"
      }
    ],
    "T032": [
      {
        "date": "2026-04-20",
        "type": "confirmed",
        "snippet": "__**Target Rolling Hills Update:**__\n\n- ETBs are out of stock now.\n- 2 per on AH 2-Pack Blisters still.\n- 3 in line, eve"
      }
    ],
    "T148": [
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target El Cajon, Grossmont, and Plaza Bonita sold Prismatic ETBs this morning.*** <@&1488964167997063309>"
      }
    ],
    "T127": [
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Riverside Arlington stocked up!**\n\u2022 Prismatic Evolutions ETB \n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Other ite"
      },
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "**Target Riverside Arlington Update**\n\n\u2022 Phantasmal Flames Mini Portfolios \n\u2022 Perfect Order Booster Sleeves \n\u2022 Both item"
      }
    ],
    "T036": [
      {
        "date": "2026-05-18",
        "type": "confirmed",
        "snippet": "***Target San Pedro, similar to stores posted earlier like Burbank, Simi Valley/Cochran, Westminster Beach, will have ch"
      }
    ],
    "T153": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Mira Mesa received a light shipment today and sold Mega Zygard Ex Boxes to people lingering around for referen"
      },
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa**\n\n- Hop's Zacian ex Box\n- Moonlight Tins\n- 2026 World Championship Decks\n- Other smaller items are g"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "***Target Mira Mesa/SD line has formed.***\n\n> - 20+ in line.\n> - Should sell later today.\n> - Forms every M/W/F here.\n\n<"
      }
    ],
    "T135": [
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target Ontario 4th / Baker**\n\n\u2022 Prismatic Evolutions ETB \n\u2022 First Partner Illustration Box \n\u2022 Mega Zygarde ex Premium "
      }
    ],
    "T019": [
      {
        "date": "2026-06-22",
        "type": "confirmed",
        "snippet": "**Target La Canada has Phantasmal Flames Mini Portfolio!**"
      },
      {
        "date": "2026-06-01",
        "type": "confirmed",
        "snippet": "**Target La Canada has Phantasmal Flames Mini Portfolio, 2 per person** <@&1425165995575742634> <@&1425166052496642260>"
      }
    ],
    "T154": [
      {
        "date": "2026-06-08",
        "type": "confirmed",
        "snippet": "***Target Eastlake is still due.*** <@&1488964167997063309>"
      }
    ],
    "T103": [
      {
        "date": "2026-06-15",
        "type": "confirmed",
        "snippet": "**Target Anaheim Hills has OP-16 Booster Sleeves**"
      }
    ],
    "T155": [
      {
        "date": "2026-06-29",
        "type": "confirmed",
        "snippet": "***Target Spring Mountain***\n\n- Vendor is currently there with 8 people.\n- Stop by if you\u2019d like.\n- Seems to be almost d"
      }
    ],
    "T139": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Lake Elsinore put out Chaos Rising Booster Bundle and Chaos Rising Booster Sleeves**"
      }
    ],
    "T118": [
      {
        "date": "2026-07-06",
        "type": "confirmed",
        "snippet": "**Target Rancho Santa Margarita watch is still on!** \n\nMy guess will be either opening or mid day after they clear out a"
      }
    ]
  },
  "tuesday": {
    "T036": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening VQ remains the expectation. Be there early because people continue committing here."
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Does their morning procedure basically EVERY TUES AND FRI! JUST BE EARLY! EASY HIT IF YOU NEED SOMEWHERE TO GO!!!"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target San Pedro update, deep line.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target San Pedro is selling.***\n\n> Click this \u2014> https://discord.com/channels/1419834805792542923/1422863863694491780"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Morning VQ remains the expectation. Arrive early."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target San Pedro is selling to the line!***\n\n> - Ascended Heroes ex Box\n> - Luminous City Mini Tins\n> - Moonlight Tin"
      }
    ],
    "T028": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "If they do not push tn, they should sell at 8AM opening unless the line is too deep. Has not sold this week (yet) -- Sel"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "**Target Inglewood/Century**\n\n- Chaos Rising ETB\n- Chaos Rising 3-Pack Blister\n- Chaos Rising Sleeved Booster\n- Needohs "
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening focus. Store has leaned heavily into early releases and should have people waiting regardless"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Inglewood/Century**\n\n- Ascended Heroes ex Box (less than 10)\n- First Partner Illustration Series 2 (limited)\n- "
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Inglewood Century**\n\n\u2022 Mega Zygarde ex Premium Collection\n\u2022 OP-16 Booster Sleeves\n\u2022 Chaos Rising Booster Sleeve"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Opening first because a line should form as it does daily. Backup windows stay 11-1 and 3-5"
      }
    ],
    "T027": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Inventory keeps getting trickled out instead of one big release. Opening remains best. May hit Weds here but people will"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "People will line up here for 7AM opening. Then, they'll push new shipment between 12-2PM, usually closer to 1PM."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Product continues getting trickled out. Opening and late morning remain strongest but keep rotating throughout the day s"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Manhattan Beach update <@&1425166183841140873>***"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Opening and late morning are still the best opportunities. Store trickles our small amounts at a time"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Manhattan Beach has Needohs and sold out of OP** <@&1425166183841140873>"
      }
    ],
    "T031": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Continues performing multiple times each week. Best windows remain 11-1 and again from 4-7."
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Consistently active. Main windows remain 11-1 and 4-7. Line forms at tech. Look for regulars who will indicate a restock"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Consistently active. Main windows remain 11-1 and 4-7."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "SHOULD MOVE AS WELL. Main windows stay 11-1 and 4-7. Store is active multiple times every week"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "SHOULD MOVE AS WELL. Main windows stay 11-1 and 4-7. Store is active multiple times every week only had PO sleeves today"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "LOOKS READY TO MOVE. Strongest windows remain 11-1 and 4-7 IF NOT MORNING"
      }
    ],
    "T024": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Still overdue and continues drawing attention every morning. Opening first then continue checking because shipment shoul"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Will sell tmrw at opening or the vendor will stock very late in the day closer to 4-8PM. Line will form around 4PM like "
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "HAS NOT HIT. People continue waiting this store out. Morning remains strongest but keep checking because inventory shoul"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Gardena's line is forming!!!.***\n\n> - 2 people so far, solid place to be!\n> - Nothing is confirmed as of now/Y"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Both stores deserve morning attention. Focus 8-11 and keep them active in rotations as they get shipments"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Both stores deserve morning attention. Focus around 8-11 and keep them active in rotations!"
      }
    ],
    "T022": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Worth an opening stop if nearby, but evening may be slightly better!"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Still due but very random/shady about selling. Check now."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening if nearby but late afternoon and evening continue to be very live possibilities."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Sawtelle**\n\n\u2022 Phantasmal Flames Mini Portfolio \n\u2022 Perfect Order Blister\n\u2022 Available at electronics aisle should"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Opening if nearby but 4-8PM is also possible here"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Opening if nearby but but 4-8PM also"
      }
    ],
    "T008": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening remains the move. If they delay don't bail immediately because this location has sold later. Warned last week an"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Opening is the priority. If they delay, don't leave immediately. They have sold 1 SKU at a time to deter long lines and "
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target La Verne is selling Pokemon at guest services right now!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening remains the priority. If they delay, don't leave immediately."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target La Verne, no Pokemon at opening. <@&1425166052496642260>***"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "OPENING CHECK PLEASE BE READY. If they delay, linger a bit because this store can still move shortly after"
      }
    ],
    "T056": [
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target 1833a Cienega has had OP and Phantasmal Flames Mini Portfolio sitting in the tcg case** <@&1425625697141133334>"
      },
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Check morning time, 8-10 but store plays a lot so can also be randomly like 12-2"
      },
      {
        "date": "2026-02-24",
        "type": "confirmed",
        "snippet": "__**Target 1833A La Cienega Update:**__\n\n- STILL selling AH Tech Stickers, pinged earlier.\n- Stock is still at guest ser"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Check morning time, 8-10 but store plays a lot"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Check morning time, 10-2. Can be random but can sell a bit"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Check morning time, 10-2. Can be random but can sell a bit"
      }
    ],
    "T020": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "One of the easiest stores to leave in rotation all day. Can always sell some small amounts of product even if it hit tod"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "One of the most active stores in the LA area. They sold lightly today so check at 8AM but we mainly recommend lingering "
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall does not have a line yet.***\n\n> - 2-4 people lingering so far.\n> - Expect them to sell CR ite"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall is selling now!*** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "One of the most active stores around. Opening matters but this location can fire at practically any point in the day."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Jefferson Culver City <@&1425166183841140873>***"
      }
    ],
    "T021": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening Guest Services check first DONT MISS IT! then work it back into your route around 10-12 and again later if nothi"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Opening guest services checks first then rerun around 11-1! Same timing as Mall. Sometimes though, Jefferson waits until"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "**Target Culver City/Jefferson**\n\n- Chaos Rising 3-Pack Blister\n- Chaos Rising Booster Bundle\n- Chaos Rising Sleeved Boo"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening GS checks first then rerun around 10-12 and again later in the afternoon unless they sell late tonight"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Start with opening GS checks then rerun 10-12 and again 3-5"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Start with opening GS checks then rerun around 10-12 and again 3-5"
      }
    ],
    "T040": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening remains the best opportunity. If nothing develops early don't ignore midday because this store has become more a"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Sells almost DAILY at opening! Some mornings the shipment isn't the best, but it's a great gamble because they sell what"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Pico Rivera line update for opening.***"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening and midday remain strongest. Store did not seem to sell today"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Perfect Order Blister\n\u2022 Only 1 item per person! <@&14251"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Pico Rivera still has an abundance of Perfect Order Checklane Blisters, if you are chasing. We posted their dr"
      }
    ],
    "T137": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "May have done a random push today early"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Rancho Cucamonga\u2019s line for TOMORROW\u2019S 7AM drop should start by 4-5PM. Posting an early warning for anyone loo"
      },
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "***Target Rancho Cucamonga will have a line formed by 5-7PM for tomorrow's Prismatic ETB/other item restock. Be sure to "
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Rancho Cucamonga**\n\n- Line is already forming for tomorrow's drop.\n- Not fully cooked but you need to go now fo"
      },
      {
        "date": "2026-05-05",
        "type": "guide",
        "snippet": "Trending Wednesday light check only```"
      },
      {
        "date": "2026-05-05",
        "type": "confirmed",
        "snippet": "***Target Rancho Cucamonga will restock around 7AM opening tomorrow. Full Target guide tonight!*** <@&142516605249664226"
      }
    ],
    "T133": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening remains worthwhile but 9:30-11 and later afternoon continue fitting this location extremely well."
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Been doing opening batches + more once shipment arrives. They did not sell today so check at opening tomorrow! Definitel"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover only has Chaos Rising Sleeved Boosters & Needohs.***"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Can still move at opening but strongest tendencies remain around 9:30-11 and again later in the day."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover sold this morning. They have Perfect Order Checklane Blisters sitting, for anyone chasing those"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Can move opening but stronger tendencies are 9:30-11 or 1-3:30. Same as Summit they tend to hold back"
      }
    ],
    "T124": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Remains one of the biggest focuses. Expect people waiting from opening and sticking around until inventory shows."
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "**Target Corona/Tuscany**\n\n- Stocking right now!\n- Just over 10 people in line.\n- They are going to sell Poke today.\n- D"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "One of the biggest focuses tomorrow. Expect people waiting and checking from opening onward."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Corona/Tuscany stock update is pictured.***"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "SAME ENERGY AS TODAY. Since Norco and Eastvale both hit today be ready for lines to WAIT it out here"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Follows the same rhythm as Norco"
      }
    ],
    "T122": [
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Norco\u2019s current update. Please update the other locations on this list too!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Norco did sell yesterday as we posted so focus on other options!**"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "SAME ENERGY AS EASTVALE. These remain major stores to watch for activity people will being WAITING"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Norco update is posted above! They are due for product and people are going to wait! Update Target Corona too!"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "**Target Norco line is starting to build please make your way here if you don\u2019t want to hit Corona!** <@&142516605249664"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "CLASSIC TUESDAY STORE. Morning through 11 remains strongest then revisit 2-5 LINES WILL WAIT"
      }
    ],
    "T134": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Looking like tomorrow! Extremely possible for opening but regardless, it should hit by 11:30AM-1PM. A line will form out"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Unconfirmed whether or not they sold today. If they DID NOT sell today, be here at opening. Stop by to ask guest service"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills sold as it doesn\u2019t every Tuesday!**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Mega Moonlight Tins "
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills is CLAIMING they will move to random drops as opposed to Tuesday\u2019s**\n\nAgain I trust a Target Empl"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills as warned still sold called it** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills has 30+ heads waiting for their Tuesday drops!** <@&1425166052496642260>"
      }
    ],
    "T123": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Sleeper location. Could finally move tomorrow or continue waiting for its usual Wednesday rhythm."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Sleeper option. Could move tomorrow or decide to wait for its usual Wednesday pattern since it missed today"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Jurupa Valley has not sold yet.***\n\n> - Vendor is still stocking right now.\n> - Currently, 20+ people are in l"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Jurupa Valley is starting to let people in slowly! 3 heads at a time will update items shortly**"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Jurupa Valley Item List:**\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 First Partner Illustration Series 2\n\u2022 OP-13 "
      },
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "Watch closely for an 8-11AM drop. Usually Wednesday but if stores are not hitting this is a great one to watch!"
      }
    ],
    "T129": [
      {
        "date": "2026-07-07",
        "type": "confirmed",
        "snippet": "**Target Redlands ended up restocking earlier this morning today with a larger pack they didn\u2019t drop Friday**"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Still a bit of a mystery. Last updates were that this store sells on random days around opening. Expect a line checking "
      },
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Weds & Fri Opening Likely"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Weds & Fri Opening Likely"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Weds & Fri Opening Likely"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Weds & Fri Opening Likely"
      }
    ],
    "T126": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "DID NOT end up stocking today, making them in play for tomorrow. Either at opening or between 12:30-3:30. Lines will for"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Both have been selling random batches of stock from 8-11 so CHECK IN in case ```"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside sold one case of First Partner Illustration Box around 2pm today. Again this store is selling s"
      },
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "**Target Riverside/Tyler**\n\n- Prismatic Evolutions ETB\n- Ascended Heroes items too!!\n- **Only 6 ppl are in line so far.*"
      },
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "> Pictured above: **Target Tyler/Riverside**"
      },
      {
        "date": "2026-04-28",
        "type": "guide",
        "snippet": "Hit today as well a bit randomly"
      }
    ],
    "T128": [
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "**Target Riverside/Canyon Springs**\n\n- Luminous City Mini Tins\n- Available now in the aisle.\n- **Stock will go QUICKLY!*"
      },
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Fri"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Fri"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Fri"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Fri"
      },
      {
        "date": "2026-01-13",
        "type": "guide",
        "snippet": "Fri"
      }
    ],
    "T127": [
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Fri Opening"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Fri Opening"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Fri Opening"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Fri Opening"
      },
      {
        "date": "2026-01-13",
        "type": "guide",
        "snippet": "Fri Opening"
      },
      {
        "date": "2026-01-06",
        "type": "guide",
        "snippet": "Fri Opening"
      }
    ],
    "T125": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Been hitting Thursdays consistently for 1+ month. Likely drops on Tuesdays as well. Can check at opening but patterns su"
      },
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Fri Opening"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Fri Opening"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Fri Opening"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Fri Opening"
      },
      {
        "date": "2026-01-13",
        "type": "guide",
        "snippet": "Fri Opening"
      }
    ],
    "T138": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Focus stays around 8:30-10:30 but never ignore random employee pushes because they happen here more than most stores."
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Focus remains around 8:30-10:30 but random employee drops can happen throughout the day."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Focus remains around 8:30-10:30 but random employee drops can happen throughout the day. ```"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Main focus 8:30-10:30. Employees love random drops and leaving stock on carts so keep eyes peeled afternoon too"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Main focus remains 8:30-10:30. Employees love random drops and just leaving stock on carts around so pls keep your eyes "
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target San Bernardino constantly puts Poke out randomly on carts and baskets so always keep your eyes peeled!** <@&142"
      }
    ],
    "T132": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Did move inventory already. Worth checking again but don't be surprised if they save the next bigger wave."
      },
      {
        "date": "2026-07-07",
        "type": "confirmed",
        "snippet": "**Target Fontana Summit line is still waiting currently at 30ish heads** <@&1425166052496642260>"
      },
      {
        "date": "2026-07-07",
        "type": "confirmed",
        "snippet": "**Target Fontana Summit is selling as pictured above!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "DID NOT sell AH Booster Bundles so check at opening in case they trickle out a bit more, which they have done in the pas"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "As warned this store ended up selling some light product today. May be holding more but may wait a bit"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "KEEP THIS STORE IN ROTATION. Product is there but timing is unpredictable. Opening matters but store has liked holding i"
      }
    ],
    "T121": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "One of the area's highest priorities. Timing continues bouncing around so patience will be more important than speed."
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Top priority for the area. Timing has been all over the place recently so patience will be important. A line will form e"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Eastvale current update.***"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Top priority for the area. Timing has been all over the place recently so patience will be important."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Eastvale sold around 11:45-12:00, check for remaining items now! Corona/Tuscany Target is likely to hit next. "
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Eastvale just sold a member their last Moonlight Tin. That concludes today's restock here. Jurupa Valley and/o"
      }
    ],
    "T166": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "As posted before store is selling shipment as it receives so check tomorrow from 8-10 or 12-2 for shipment ask at guest "
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Buena Park has Perfect Order blisters for those looking**"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Last week hit a sneaky Tuesday morning drop so CHECK IN AND UPDATE"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Buena Park is still going with listed items in the message above.***"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "**Target Buena Park has Championship Decks still going! All tins are out of stock now**"
      },
      {
        "date": "2025-12-02",
        "type": "guide",
        "snippet": "Seems to have permanently switched to Thursdays instead of Tuesdays but same as signal hill"
      }
    ],
    "T111": [
      {
        "date": "2026-05-12",
        "type": "confirmed",
        "snippet": "***Target La Paz is a no go tomorrow, they will drop on Friday at opening.***"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "**Target La Paz with 15 in line already WILL HAVE HEAVY STOCK** <@&1425166056766439528>"
      },
      {
        "date": "2026-04-07",
        "type": "guide",
        "snippet": "Trending toward Wednesday mornings now instead of Tuesday."
      },
      {
        "date": "2026-03-31",
        "type": "guide",
        "snippet": "Seems to be hitting Weds mornings now instead of Tuesday"
      },
      {
        "date": "2026-03-31",
        "type": "confirmed",
        "snippet": "**Target La Paz has PO Sleeves sitting, 2 per. Full restock at opening tomorrow, be early!** <@&1425166056766439528>"
      },
      {
        "date": "2026-03-24",
        "type": "guide",
        "snippet": "USUALLY does Tuesdays VQ. Has not confirmed if they will permanently be moving to Weds morning so check in and UPDATE wh"
      }
    ],
    "T089": [
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "STILL HASN'T REALLY MOVED. Watch 12-2 closely"
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "Spectrum still hasn\u2019t moved so watch 12-2."
      },
      {
        "date": "2026-04-07",
        "type": "confirmed",
        "snippet": "**Target Irvine Spectrum**\n\n- Vendor is here, they usually stock Tues/Weds/Fri.\n- On Tues, they generally do Sports/Toys"
      },
      {
        "date": "2026-03-31",
        "type": "confirmed",
        "snippet": "**Target Irvine Spectrum**\n\n- Vendor is currently on premises.\n- However, he is just stocking sports.\n- They are likely "
      },
      {
        "date": "2026-03-24",
        "type": "guide",
        "snippet": "Spectrum did not stock today! Keep eyes from 9:30-11:30 for a line to form and should drop by 11-1!"
      },
      {
        "date": "2026-03-24",
        "type": "confirmed",
        "snippet": "**Target Irvine Spectrum**\n\u2022 Vendor is here and stocking other items\n\u2022 Claiming store does not want to sell Poke today d"
      }
    ],
    "T090": [
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Hit today should be quiet tomorrow !"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Hit today should be quiet tomorrow !"
      },
      {
        "date": "2025-12-30",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa Harbor** \n\u2022 Destined Rivals Booster Sleeves \n\u2022 Mega Evo Booster Sleeves\n\u2022 Phantasmal Flames Booster "
      },
      {
        "date": "2025-12-23",
        "type": "guide",
        "snippet": "Did not hit today so checks 9-11 and 2-5 here !!"
      },
      {
        "date": "2025-12-16",
        "type": "guide",
        "snippet": "Check in tomorrow as did not seem to hit today"
      },
      {
        "date": "2025-12-02",
        "type": "guide",
        "snippet": "WHAT A FEAST TODAY should have sold through it all"
      }
    ],
    "T119": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Recent patterns lean to Wednesdays, but opening through late morning still deserves attention with another worthwhile ch"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Trending later in the week but still worth checking 8-11 and again 1-3."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Trending later in the week but still worth checking 8-11 and again 1-3."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Trending Wednesday/Friday lately but still check 8-11 and 1-3 in case"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Trending Wednesday and Friday lately but absolutely check from 8-11 and again 1-3 in case"
      },
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "Shifted more toward Wednesday/Friday lately but PLEASE check from 8-11am or 1-3 store will have items to drop"
      }
    ],
    "T103": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Did hit last week at opening so expect a SOLID line here prior to opening to check!"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "They've been selling at opening more often recently, so check in tomorrow. People constantly update their Ws here right "
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Anaheim Hills is selling:***\n\n> - Chaos Rising ETB\n> - Mega Zygarde ex Premium\n> - Chaos Rising Sleeved Booste"
      },
      {
        "date": "2025-11-11",
        "type": "guide",
        "snippet": "Not expected tomorrow"
      },
      {
        "date": "2025-11-04",
        "type": "guide",
        "snippet": "Ask if they are dropping around 10-12 and may allow a line to form before"
      },
      {
        "date": "2025-10-28",
        "type": "guide",
        "snippet": "Can usually line up here early before drop so check in 10-12!"
      }
    ],
    "T093": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Still due for stock this week! Will push around opening or randomly towards the afternoon, between 1-3PM. Please be read"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Huntington Beach/Garfield is due, worth checks too.***"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Smaller location but still active. Best checks remain 8-9:30 and 12-2"
      },
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "WARN YOU EVERY WEEK CHECK ALL MORNING 8-9AM"
      },
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Garfield was also confirmed waiting to be stocked so good check to be on either a bit later or"
      },
      {
        "date": "2026-05-19",
        "type": "guide",
        "snippet": "Smaller store and they need to drop PE ETB 8-9:30 or 12-2 checks you will need to catch it here"
      }
    ],
    "T114": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Literally the same as Jeronimo but A BIT more consistent for opening time. Expect a line a bit deeper than Jeronimo's at"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Alicia Parkway still has the items that they opened with:***\n\n> - Chaos Rising ETB\n> - Chaos Ris"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia selling now!**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 First Partner Illustration Series "
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Alicia Parkway dropped light.***\n\n> - Luminous Mini Tins\n> - FIFA World Cup Stickers\n> - 1 of ea"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia**\n\n\u2022 Prismatic Evolutions ETB \n\u2022 Available now with heads lined up prior to opening \n\u2022 Be "
      },
      {
        "date": "2025-11-04",
        "type": "guide",
        "snippet": "After La Paz VQ be on top of this store will definitely receive stock be ready."
      }
    ],
    "T012": [
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Rosemead**\n\n\u2022 Vendor is here now\n\u2022 Lately store has been holding Poke for Friday mornings \n\u2022 Line is starting t"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Rosemead as warned is likely to hold product and sell on Friday** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "**Target Rosemead**\n\n- Stocking up right now!\n- Line is building by the TCG aisle.\n- Head over if you are local to the a"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Rosemead is dropping now too!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Rosemead remaining items are pictured.***"
      },
      {
        "date": "2026-04-14",
        "type": "confirmed",
        "snippet": "**Target Rosemead**\n\n- Crowd is starting to form.\n- So far, 7 people are lingering.\n- Check in for potential stock this "
      }
    ],
    "T002": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Sold some Greninja at opening as posted store can sell constantly as they hold back and push items themselves so people "
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "CHECK AT OPENING! Did not sell much today, they are still due for a drop. People will be here early. They have done VQ r"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Morning employee push remains possible. Store has a history of letting people know early if product is coming out"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "HEAVY WATCH for a morning drop . Heads show up 7-8 because this store can confirm drops before opening"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Watch for a morning employee push! Heads are here from 7-8am as store can confirm a drop early!"
      },
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "Look for a push of product in the morning here!"
      }
    ],
    "T011": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Employee pushes continue making this one of the better SGV stores. Opening remains strongest then check back through mid"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Been straying away from opening but feel free to check then too. Usually 11-1PM, 1 SKU at a time over the course of a fe"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target El Monte has 8+ people in line.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target El Monte is selling too!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target El Monte is out of stock (OOS) on OP-13 now.***"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Employee push store. Opening remains strongest but continue checking through midday because inventory tends to come out "
      }
    ],
    "T015": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Never take this store off your route. Opening matters but random waves continue making every check worthwhile as seen to"
      },
      {
        "date": "2026-07-07",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland as I warned earlier is selling more Poke now! Always sell small batches in waves** <@&1425"
      },
      {
        "date": "2026-07-07",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Lumiose City Mini Tins \n \u2022 OP-16 Booster Sleev"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Never remove this store from rotation. Product can appear out of nowhere and opening remains one of the best times to ca"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target West Covina/Eastland Is a go!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Never remove this store from rotation. Product can appear out of nowhere and opening remains one of the best times to ca"
      }
    ],
    "T005": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Still one of the stronger employee push stores. Opening is the priority but keep rotating because product can appear thr"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "One of the stronger employee push stores for tomorrow. Opening CHECK!! They only sold Mega Zygarde ex Boxes today!"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Duarte opened with some light items, feel free to check in for remaining Chaos Rising products at guest servic"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "One of the stronger employee push stores tomorrow. Opening deserves heavy attention and people will be watching closely."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Similar to La Verne. Morning matters, employee pushes are always possible, and heads will be checking expect a line befo"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Similar flow to La Verne. Morning checks matter and employee pushes are always possible but expect heads checking!"
      }
    ],
    "T078": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening continues looking strongest hits Tuesdays/Fridays should have a PACKA of First Partner and possibly more!"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Selling at opening 7AM 99% so be here early and expect them to drop a pack!"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Newbury Park haa 25+ people in line.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Newbury Park update! Items are listed above.***"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Morning remains the best shot with another look around 5-7 if nothing develops early."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Morning remains strongest but 5-7PM is still a sneaky second window"
      }
    ],
    "T070": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Morning and midday remain strongest unless they quietly sold today!"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Sold OP today but did not sell Poke. Check in at 8 for a small batch. If not, 12-1:30PM. For those 90 mins, ppl will cam"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Store pushed some product already but could still trickle more out. Morning and midday remain strongest."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Had some light items so can check in in case more gets sold"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Store claim they sold today earlier but I would imagine was trickling out product so don\u2019t count out small items being s"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target 11051 North Hollywood has 4 in line waiting for an unconfirmed drop at 8AM opening. Stay tuned!***"
      }
    ],
    "T062": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Morning shipment checks remain mandatory. Long lines should be expected again before opening as it has not hit!!!"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Morning shipment here. Line is expected before 8AM opening! Check in at opening and be few early!! Sells at guest servic"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "**Target Van Nuys/Sepulveda**\n\n- Chaos Rising ETB\n- Chaos Rising 3-Pack Blister\n- Chaos Rising Sleeved Booster\n- Reminde"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Morning shipment checks are mandatory. Long lines expected again before opening."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Sepulveda selling Ascended Heroes Mega Ex Collection and Ascended Heroes 2 Pack Blister! Longer line h"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Morning shipment checks are MANDATORY. Long line will form before opening with people expecting a drop"
      }
    ],
    "T065": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "RIP store claimed today that they will be shifting to Fridays only"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Like Burbank at 7AM, this store is also going to have a 7AM line. They've strayed away from opening. 12:30-2:30 if it's "
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Sylmar has 11 in line waiting for openinf.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Sylmar only sold squeezy\u2019s per opening - check back with store later from 12-2pm***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Sylmar only sold Squeezys at opening.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Fallbrook has Needohs & Squeezy! Following up on yesterday\u2019s post\u2026 this store is Friday only now. We\u2019ll update"
      }
    ],
    "T069": [
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Can have smaller pushes but more likely to be holding. Keep checks lighter"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "***Target Pacoima has 9 in line now, not confirmed yet.***"
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "Can keep eyes for small items but may be holding"
      },
      {
        "date": "2026-05-05",
        "type": "guide",
        "snippet": "Has been holding for lager in the week lately"
      },
      {
        "date": "2026-04-28",
        "type": "guide",
        "snippet": "If nothing early expect 1-3 or 5-7. Keep in your routes but may be holding for later in the week"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "***Target Pacoima update.***"
      }
    ],
    "T083": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Cam check for Needohs and other items at opening but store did claim to move Poke to Fridays only"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Claiming Friday at opening! They have a sign up by GS too. Still, check, as this store lies sometimes."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Could still lean toward a later release but opening checks are worthwhile before shifting attention elsewhere."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Fallbrook has Perfect Order Sleeved Boosters. They had a few Chaos Rising ETBs earlier too.***"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Also same as Woodland either opening or evening here"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Leaning towards a night drop tomorrow or a Wednesday opening drop but check morning time tomorrow in case!"
      }
    ],
    "T067": [
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening, 9-11 and 2-4 remain the key windows. Could still be sitting on additional stock."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Topanga Mall has not sold and needs to be checked in with!**"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Rotate throughout the day. Opening then 9-11 and 2-4 are the main windows. Could still hold heavier stock for later week"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Rotate throughout the day. Opening and then prime windows stay 9-11 and 2-4. Could still be holding heavier stock for la"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Topanga Mall has a small line formed, people are checking for 8AM opening.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Reliable rotation store. Best windows remain 9-11 and 1-3 if not at opening"
      }
    ],
    "T073": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "It did not hit today so it is in play tmrw. You can check at 7AM but this store usually goes down at opening or 10-12. S"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Continues to sit on inventory and stagger releases. Opening and midday remain strongest."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Still likely sitting on held stock. Store prefers staggered drops"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Still likely sitting on held stock. Store prefers staggered releases"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Timing has become unpredictable. Any check can pay off store sells selectively and as they choose"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Santa Clarita Golden Valley**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Perfect Order Booster Sleeves \n\u2022 Both on"
      }
    ],
    "T068": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening is still worthwhile but don't forget the evening window because this location sells when it\u2019s least busy usually"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Sold last week at opening on Tues, sleeper location that will try to spin. Wait until 8:15 if it's not right at opening."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening remains worthwhile with another strong window around evening.```"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Woodland Hills DID seem to sell at opening with Ascended Heroes Mega Ex Collection and Chaos Rising ETB! They d"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Main windows are 8-10AM and 7-8PM. Usually either Tuesday\u2019s or Wednesdays at opening!"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Main windows remain 8-10AM and 7-8PM. Last week hit with empty store so expect a bit more people to be ready by opening!"
      }
    ],
    "T072": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Has shifted from a Fri store to a random store. Be ready for it to hit randomly tmw or Weds. Check at opening + around 1"
      },
      {
        "date": "2026-03-24",
        "type": "guide",
        "snippet": "Check for a small restock tomorrow morning :)"
      },
      {
        "date": "2026-03-17",
        "type": "confirmed",
        "snippet": "**Target Encino**\n\u2022 One Piece EB-03 Sleeves \n\u2022 Pokemon Day Collection 2026 \n\u2022 Employees have it locked so have to ask fo"
      },
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Usually can restock in morning but likely later on week, specifically it seems store stocks Friday mornings especially"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Usually can restock in morning but likely later on week"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Tends to be later in week here"
      }
    ],
    "T064": [
      {
        "date": "2026-05-05",
        "type": "confirmed",
        "snippet": "***Target Mission Hills update as of this morning.***"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "***Target Mission Hills update.***"
      },
      {
        "date": "2026-04-14",
        "type": "confirmed",
        "snippet": "**Target Mission Hills**\n\u2022 Vendor is here stocking up now!\n\u2022 Already about 10 heads in line currently\n\u2022 Expect people  t"
      },
      {
        "date": "2026-04-07",
        "type": "confirmed",
        "snippet": "***Target Mission Hills still has ME/PF 2-Pack Coin Blisters sitting.***"
      },
      {
        "date": "2026-04-07",
        "type": "confirmed",
        "snippet": "**Target Mission Hills**\n\n- Received Excel boxes in shipment.\n- Wheeled Poke & One Piece to the back.\n- Currently unload"
      },
      {
        "date": "2026-02-10",
        "type": "confirmed",
        "snippet": "**Target Mission Hills** \n\u2022 OP Vol. 5 Illustration Boxes \n\u2022 OP Vol. 6 Illustration Boxes \n\u2022 OP DP-09 Double Pack \n\u2022 Poke"
      }
    ],
    "T079": [
      {
        "date": "2026-05-05",
        "type": "confirmed",
        "snippet": "***Target Camarillo only has Perfrct Order ETB and Phantasmal Mini Binders as of now ; stop by if you\u2019d like!***"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "**Target Camarillo dropped!**\n\u2022 Ascended Heroes Booster Bundles \n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Limited amount "
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "**Target Camarillo**\n\n- Topps Chrome Football Hangers\n- Topps Chrome Football Blasters\n- Available now for those of you "
      },
      {
        "date": "2026-03-24",
        "type": "guide",
        "snippet": "May have hit today check in and ask ```"
      },
      {
        "date": "2026-03-17",
        "type": "guide",
        "snippet": "Vendor arrived so likely store has items to push out now checks tomorrow! ```"
      },
      {
        "date": "2026-03-10",
        "type": "guide",
        "snippet": "Need eyes checking in the morning here!  ```"
      }
    ],
    "T009": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Sneaky option for opening DONT SLEEP. Really depends what route vendor chooses so should either hit tomorrow or Thursday"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Major vendor focus tomorrow. Opening is important and if nothing happens early continue rotating throughout the day."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Major vendor focus tomorrow. Opening is important and if nothing happens early continue rotating throughout the day."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Upland with a heavy line waiting for opening!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Upland had no Poke at opening**"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Look for Poke tomorrow. Store can push some out themselves so check morning and rotate later if nothing should hit eithe"
      }
    ],
    "T007": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Did not push much Poke AS OF NOW. Still a chance they do so tonight. If not, expect this store to sell at opening. A lin"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Will either sell tomorrow or Wednesday afternoon. Usually hits between 12:30-2:00 PM. Line forms outside here. This stor"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target San Dimas does not have Poke right now, but they do have some Squeezy.***"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Opening checks STAY ON EM"
      },
      {
        "date": "2026-04-28",
        "type": "guide",
        "snippet": "MORNING CHECK THEN HEAVY 1:30-4 WINDOW. Vendor likely swings through so be ready midday"
      },
      {
        "date": "2026-04-21",
        "type": "guide",
        "snippet": "Sporadic as store is pushing items out themselves so check tomorrow for a few light items still"
      }
    ],
    "T018": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Will either employee push at/around opening, or they'll wait for the vendor tmrw or Weds. It'll hit between 1-4PM most l"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Did not get Poke today, only more OP-16. Check tmrw & Weds, they are now overdue for their first Poke shipment of the we"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Hit today but no Poke so expect them to trickle some Poke out randomly check in!"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Either comes out swinging at opening or waits until later around 4-7. Vendor has delayed here before when crowds became "
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Either gets moving before people settle in or waits until traffic dies down. Opening first then revisit 12-2 or 4-6 if n"
      },
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "Either gets things rolling right at opening or waits until later around 4-7. Vendor has delayed here before once crowds "
      }
    ],
    "T010": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Start with opening then circle back around 12-2 or even later in the evening. This store loves sitting on inventory"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Morning first! Check at 8AM for anything they received today to sell tmrw, then circle back around 12-2. Employee pushes"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "**Target Blue Diamond**\n\n- Dropped before closing.\n- Only put few Mega Zygarde.\n- Will definitely sit until opening. \ud83d\ude06 \n"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Morning first then circle back around 12-2 or later evening. Employee pushes can happen here."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Diamond Bar has Checklane Blisters sitting.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Opening and morning first. Stronger windows are usually 12-2 or 6-8. Employee pushes can happen but this store almost al"
      }
    ],
    "T025": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Morning remains strongest with another worthwhile run around 10-12 or 1-3 depending when shipment lands"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Morning checks remain best but don't forget about afternoon opportunities. Random timing and smaller stock.```"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Morning checks remain best but don't forget about afternoon opportunities."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Inglewood/Century STILL has OP-16 Singles, Chaos Rising Singles, and Needoh! We pinged last night. After this,"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Lawndale current update! NOT to be confused with Target Hawthorne & 120th, which sold earlier.***"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Lawndale is the one that dropped!**\n14310 Hawthorne Blvd, Lawndale, CA\n90260\n\nHawthorne 120th sold this morning"
      }
    ],
    "T037": [
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "10-12 just check for when they receive either tomorrow or Thursday , 2 per sku here so great catch"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "10-12 just check for when they receive either tomorrow or Thursday , 2 per ski when they drop"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "10-12 can sell packs here warn yall Tuesday/Thursdays/Fridays are typical here"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "10-12 can sell packs here warn yall Tuesday/Thursdays/Fridays are typical here"
      },
      {
        "date": "2026-01-13",
        "type": "guide",
        "snippet": "10-12 can sell packs here!"
      },
      {
        "date": "2026-01-13",
        "type": "confirmed",
        "snippet": "**Target Compton**\n\u2022 Mega Charizard ex UPC \n\u2022 Pokeball Tins 2025\n\u2022 Destined Rivals Booster Sleeves \n\u2022 Knockout Collectio"
      }
    ],
    "T038": [
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Check 8-10am or 1-3 in case they get a shipment!"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target South Gate update. Note that last week, Poke was sold on Wednesday at opening.*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Has been leaning towards later in the week but store will sell when they receive so check for stock from 8-10 or 1-3! ``"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "***Target South Gate NEEDS to be checked this afternoon. If not tonight, then it should hit tomorrow.*** <@&142562569714"
      },
      {
        "date": "2026-03-24",
        "type": "confirmed",
        "snippet": "**Target South Gate hits Tuesdays afternoons. Check now!** <@&1425166140966965248> <@&1425625697141133334>"
      },
      {
        "date": "2026-02-17",
        "type": "confirmed",
        "snippet": "**Target South Gate restocked and is selling now.** <@&1425166140966965248>"
      }
    ],
    "T053": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Same situation and timeframe as WeHo; if anything a bit earlier, as in 10-12. Sells at guest services. This, Galaxy, and"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "***Target LA/Sunset is worth keeping eyes on next.*** <@&1425625697141133334>"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "__**Target LA/Sunset Update \u2014 STAY ON IT!**__\n\n- Has not dropped yet, and WeHo just restocked.\n- LA Sunset usually goes "
      },
      {
        "date": "2025-12-02",
        "type": "guide",
        "snippet": "Both can receive shipment but have been leaning towards dropping Fridays / later in week. Check morning time if anything"
      },
      {
        "date": "2025-11-25",
        "type": "guide",
        "snippet": "Focus on Weho but if it does drop then spin over to sunset after!"
      },
      {
        "date": "2025-11-18",
        "type": "guide",
        "snippet": "Check in here for a morning drop especially if Weho sold today"
      }
    ],
    "T109": [
      {
        "date": "2026-07-07",
        "type": "confirmed",
        "snippet": "**Target La Habra still going with their Monday evening drops! Warned previously so stay on those stores**"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target La Habra ended up stocking.***\n\n> - SOLD 10 Ascended Booster Bundles!\n> - Luminose City Mini Tins\n> - Chaos Ri"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target La Habra sold last night, meaning they are back to Monday night restocks. Perfect Order Coin Blisters are sitt"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target La Habra (supposedly) just stocked on a cart at guest services! HEAD OVER NOW!*** <@&1425166056766439528> <@&1"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target La Habra is still going.***"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target La Habra is still going.***"
      }
    ],
    "T044": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Early 7-8AM look then another sweep around 10-11 heads will be here!"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "People will line up for opening but the more likely timeframe is 9AM-11:30AM, once UPS delivers, at guest services."
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Bellflower has a line of 15 outside! Be ready for it to hit by 11-11:45AM!*** <@&142516614096696524"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Bellflower\u2019s vendor has arrived.***\n\n> - Light stock, 2 Excel boxes.\n> - Guest services usually han"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Bellflower is still stocking, 20 in line.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Bellflower update. Selling shortly, around 12, which is the time the guide had last night!*** <@&14"
      }
    ],
    "T106": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Did not appear to move Pok\u00e9mon today. Worth opening checks in case inventory is being intentionally held back."
      },
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Look for a drop around 9-11 or afternoon here!"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Did not sell Poke today. Light checks are worthwhile in case they are intentionally holding inventory."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Fullerton Yorba Linda**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 As warn"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Fullerton Yorba Linda is STILL going with First Partner Illustration Series 2! Keep making your way over if aro"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Look for a drop tomorrow from 9-12! May push a bit later as well"
      }
    ],
    "T085": [
      {
        "date": "2025-10-28",
        "type": "guide",
        "snippet": "Rotate these along with Woodland Hills tomorrow"
      },
      {
        "date": "2025-10-21",
        "type": "guide",
        "snippet": "Similar to above I would say you can rotate all three of these stores tomorrow for some product."
      }
    ],
    "T074": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Recently shifted toward midweek drops. Keep an eye on it! 7AM check for a small push, then again between 11-12 and 3-4 f"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Recently shifted toward midweek drops. Keep an eye on it in case!"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Valencia**\n\n- Gearing up to drop RIGHT NOW!\n- Head over ASAP, a line is forming.\n- They should sell by 1:00PM o"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Valencia has 15-20 in line now!*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Valencia is still stocking.***\n\n> - 25 people in line now.\n> - Selling via vendor stock in aisle today.\n> - So"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Valencia canceled the drop due to locals being rude, they will sell later today or tomorrow at 7AM.*** <@&1425"
      }
    ],
    "T076": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Madera hits later in the morning and around midday when they get shoulder"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "They'll sell by the middle of the morning; 10:30-1:00. Line will form outside early as it does daily."
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Madera\u2019s daily drop should happen by 12:30 or so.***\n\n> - Lines have started by 9-10:15 daily.\n> -"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Madera confirmed drop as warned!**\n\n\u2022 6 heads in line currently\n\u2022 Store will begin stocking soon an"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Madera is still waiting on shipment. Line is outside, 17+ in it so far.*** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Madera is finally selling! Target Moorpark will hit next, at 2PM. Madera has:***\n\n> - Moonlight Ti"
      }
    ],
    "T047": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Did not end up restocking so keep eyes! People will form a line early tmrw, same thing happened last week."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Did not end up restocking so keep eyes!"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Sincr we saw Seal Beach drop their product KEEP CHECKS GOING"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Morgan Hill**\n\n- Vendor is stocking here.\n- Line is growing quickly here.\n- Head over if you\u2019re close\u2026 OR \u2b07\ufe0f \n\n"
      },
      {
        "date": "2026-03-24",
        "type": "guide",
        "snippet": "HAS BEEN HITTING TUESDAYS AND THURSDAYS. Tends to hit morning heavy checks from 8-10 here then rotate after!!!!"
      },
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Should be on Wednesday here!"
      }
    ],
    "T092": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Was flirting with Friday only drops so check tomorrow in case from 8-10 but expect store to either confirm or deny if th"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Expect the normal Tuesday action. People damn near camp here and the action goes down by 10-12 now. Super consistent but"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Expect the normal Tuesday action. Crowds should start building early and strongest window remains around 10-12."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "EXPECT THE USUAL TUESDAY DROP. People start gathering before opening as store has been selling lately from 10-12. Used t"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Adams has 21 people in line waiting for a drop this morning so far!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Adams vendor just arrived!** <@&1425166056766439528>"
      }
    ],
    "T075": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Saving Poke for Fridays at opening now. No more daily drops."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Cochran deserves opening attention. Madera tends to wake up later in the morning then again around midday."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Simi Cochran <@&1425165995575742634>***"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Cochran still going with some items!** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Cochran opening first. Madera morning checks then rerun around 12-2 as today was light"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Cochran dropped Mega Zygarde ex Premium Collection and Hops Zacian ex Boxes** <@&148896420310352299"
      }
    ],
    "T004": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "One of the better vendor watches tomorrow. Opening deserves attention and if vendor shows expect people to stay until ev"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "One of the main vendor watches for tomorrow. Opening checks matter and if vendor lands expect people to stick around."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Alhambra (small line waiting), N Azusa, La Verne, San Dimas (nothing as of 9:35), and Upland are worth keeping "
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Alhambra**\n\n\u2022 Vendor is on site now\n\u2022 10 heads in line\n\u2022 Make your way over! <@&1425166052496642260>"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Alhambra has 21 in line as of now!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "EXPECT A CROWD AT OPENING after it stayed quiet. Early morning remains the highest percentage play and vendor can still "
      }
    ],
    "T006": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Small chance for morning then another run between 1-4. Not usually Tuesdays but schedule is slightly off"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Opening line expected. If it stays quiet lock in another sweep around 1-4! This is Voodoo's take from last week, same si"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening traffic expected. If it stays quiet lock in another sweep around 1-4!"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Expect people at opening and lingering around. If nothing early, lock in 1-4 checks and ask if they plan to hold for Fri"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Pomona has 15+ in line waiting for a potential line procedure like VQ/confirmation at opening. We\u2019ll update!**"
      },
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "QUIET SLEEPER STORE TOMORROW. Expect people checking opening and lingering after. If nothing right away stay active here"
      }
    ],
    "T063": [
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Should receive stock tomorrow and is selling randomly again so pls keep eyes!"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "***Target Van Nuys/Raymer has Perfect Order Sleeved Boosters, for anyone chasing. Ask at guest services.***"
      },
      {
        "date": "2026-04-14",
        "type": "confirmed",
        "snippet": "**Target Raymer**\n- Ascended Hero Etb (limited)\n- Ascended Hero Pin Collection (limited)\n- Ascended Hero Premium Poster "
      },
      {
        "date": "2026-02-10",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer**\n\u2022 Literally warned right above \n\u2022 Should be OOS on OP Vol. 5 Illustration Boxes \n\u2022 Check in f"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Check tomorrow morning but also 5-8 here should sell!"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Check tomorrow morning but also 5-8 here should sell!"
      }
    ],
    "T084": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Big opening focus. Expect people staged before doors open and be ready right at 7AM hits almost daily"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "BIG 7AM priority. Expect people lining up by 5AM. Still due after 3 mornings of not selling."
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Burbank Empire Center has 15+ in line now.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Burbank Empire Center is selling now!***"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "BIG opening priority. Expect people lining up before doors open and be ready right at 7AM."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Burbank***"
      }
    ],
    "T071": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Continue treating this as an afternoon store. Noon through evening remains the best stretch and Tuesdays continue fittin"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Afternoon focus tomorrow. Last week, they started a VQ by 2-3PM. They will hit tmrw unless they intentionally switch up."
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target 12121 North Hollywood is also due!***\n\n> - Expect a line to form early here.\n> - This store did a virtual queu"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target 12121 North Hollywood update; no shipment today. Check back tomorrow.***"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Afternoon focus tomorrow. Best attention remains around noon through evening. SELLS ALMOST EVERY TUESDAY"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target North Hollywood 12121**\n\n\u2022 Store has received their shipment in!\n\u2022 Not currently stocking but is likely to hit "
      }
    ],
    "T030": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "7AM check! They unboxed and sold what they received today but there was no Poke. They're likely to do the same tmr but w"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Watch carefully around here they DID sell but had heavy stock and may be holding. Store basically sells to friends and f"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Watch closely for drop between 7-9am. From there you\u2019ll have to rotate as store is random fcfs now"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Watch closely for a VQ between 7-8AM. Expect a crowd before doors even open and if nothing keep eyes for stock to drop F"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "TUESDAY VQ CHECKS. Expect people checking from 7-8AM waiting for movement. If they nothing pls pls pls keep checking thr"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Torrance Del Amo**\n\n\u2022 Chaos Rising Booster Sleeves \n\u2022 Chaos Rising Booster Bundle (sold out fast)\n\u2022 Warned in g"
      }
    ],
    "T136": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Both remain early hitters. Mills especially should have people lined up well before opening. Baker usually hits a bit af"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Both stores remain early hitters. Mills especially will have heavy heads early / camping"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "TWO STORES BOTH EARLY. Mills usually fires around 8AM while Baker can go opening 7am or wait until 9-11 or later. BE EAR"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "TWO STORES BOTH EARLY. Mills typically fires around 8AM while Baker can go at opening or wait until 9-11 or later! BE EA"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Mills usually goes right at 8am with LONG LINES pre opening. Baker did sell today but worth some checks"
      },
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "TWO STORES BOTH EARLY AGAIN. Mills usually fires around 8AM at opening while Baker can either move at 7AM or later 9-11."
      }
    ],
    "T108": [
      {
        "date": "2026-03-10",
        "type": "confirmed",
        "snippet": "**Target Fullerton Malvern**\nStill has some stock available from yesterday tucked away\n\u2022 Mega Evo / Phantasmal 2 Pack Bl"
      },
      {
        "date": "2026-01-06",
        "type": "guide",
        "snippet": "Peep in the morning ask if vendor ever came by but if nothing high chance it goes tomorrow now!"
      },
      {
        "date": "2025-12-02",
        "type": "guide",
        "snippet": "Did not sell today swing back tomorrow expect more heads 9-11!!"
      },
      {
        "date": "2025-11-25",
        "type": "guide",
        "snippet": "Sold today as expected was right on schedule!"
      },
      {
        "date": "2025-11-18",
        "type": "guide",
        "snippet": "Sold today not expected"
      },
      {
        "date": "2025-11-11",
        "type": "guide",
        "snippet": "Sold today not expected"
      }
    ],
    "T099": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Main windows remain 9-11 and 12-2. Wednesday still fits this store best, but again stores can switch it up"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Has sold at opening + whenever they want. People will line up for 8AM and people will periodaically ask guest services a"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Tustin/Park Ave dropped right now!*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "> Better pic of available product at **Target Tustin Park/Ave.**"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Main windows remain 9-11 and 12-2. If nothing develops expect people staying into the afternoon but has been leaning wed"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Tustin/Park Ave just dropped a PACK! Super fresh, the team is here! Item list will be posted in the message be"
      }
    ],
    "T095": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Morning VQ continues looking most likely. Expect another early line before the doors even open and VQ to go up shortly a"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "This store should do a morning VQ. It hits EVERY Tues and receives decent stock - midtier. People are likely to set up a"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Westminster/Beach update so far.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Westminster/Beach is a go today!***\n\n> - Vendor should arrive around 10.\n> - Store should sell around 10:30 or"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Westminster/Beach line is at 19 people now.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Westminster/Beach is a go.***"
      }
    ],
    "T013": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Usually does their first of 2-3 weekly stocks on Tues. It will go down around opening or in the afternoon between 2:30-5"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Usually not the first route stop but routes can always shift. Morning is still worth it but PLEASE lock in 2-5 checks"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Usually not the route starter but route changes happen. Morning checks still worthwhile in case but pls pls lock in chec"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Montclair has Squishys if anyone is chasing. No Pokemon yet, they\u2019re still due.***"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "**Target Montclair**\n\n\u2022 8 people waiting in line now\n\u2022 As posted on guide was solid check for afternoon \n\u2022 Head on over "
      },
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "Usually not the first store of the week here so may push to Monday but if vendors switch routes can drop in the morning!"
      }
    ],
    "T001": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Either early vendor watch or later afternoon! If Alhambra hits watch for this store or vice versa"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Sold late tonight and feels like one of those stores that will slowly trickle inventory out. Opening through noon still "
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target 777 Pasadena**\n\n\u2022 Vendor is here unboxing now\n\u2022 Line is still not extremely long yet but people will spawn\n\u2022 Lo"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Check morning time in case store pushes out product!"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Opening through noon remains the sweet spot here be ready!"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target 777 Pasadena sold at 8AM, for futute reference!***"
      }
    ],
    "T086": [
      {
        "date": "2026-01-06",
        "type": "guide",
        "snippet": "Usually would be Wed-Fri here"
      },
      {
        "date": "2025-12-23",
        "type": "guide",
        "snippet": "Usually would be Wed-Fri here"
      },
      {
        "date": "2025-12-16",
        "type": "guide",
        "snippet": "usually would be Wed-Fri here"
      },
      {
        "date": "2025-12-09",
        "type": "guide",
        "snippet": "Usually would be Wed-Fri here"
      },
      {
        "date": "2025-12-02",
        "type": "guide",
        "snippet": "usually would be Wed-Fri here"
      },
      {
        "date": "2025-11-25",
        "type": "guide",
        "snippet": "Check 8-10 or 6-8 but usually would be Wed-Fri"
      }
    ],
    "T100": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Vendor Tuesday followed by Wednesday sales continues fitting this store but check in case as they are overdue from Frida"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Trend continues to be vendor Tuesday/sale of stock the following Wednesday at opening, but it's always worth monitoring "
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Trend continues to be vendor Tuesday and sale Wednesday but always worth monitoring in case timing changes."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target North Tustin is selling now.***"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Afternoon attention remains strongest. Trend lately has been vendor Tuesday and store sells Wednesday BUT that can chang"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Afternoon attention remains strongest. Trend lately has been for vendor to come Tuesday and store to sell Wednesday BUT "
      }
    ],
    "T110": [
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Should sell on Weds/Thursday here"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Should sell on Weds/Thursday here"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Should sell on Weds/Thursday here"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Should sell on Weds/Thursday here"
      },
      {
        "date": "2026-01-13",
        "type": "guide",
        "snippet": "Should sell on Weds/Thursday here"
      },
      {
        "date": "2025-12-30",
        "type": "guide",
        "snippet": "Should sell on Weds/Thursday here"
      }
    ],
    "T107": [
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "****Target Fullerton/Orangethorpe has Needohs right now. Check for Pokemon later today!*** <@&1425166056766439528>"
      },
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Should hit here Thursday"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Should hit here Thursday"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Usually Weds/Thursday here as well"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Usually Weds/Thursday here as well"
      },
      {
        "date": "2026-01-13",
        "type": "guide",
        "snippet": "Usually Weds/Thursday here as well"
      }
    ],
    "T054": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Store receives a bit more shipment tomorrow so check in 9-11 here! Will go quick stay on it"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Earlier timing still fits this location best. Focus on the morning hours. DID NOT receive Poke today. They'll get it tmr"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target 7th & Fig***\n\nSelling now :\n\n- Chaos Rising ETB\u2019s\n- Chaos Rising 3pk Blister\n- Chaos Rising Sleeves \n- Chaos R"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Earlier timing still fits this location best. Focus on the morning hours."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Similar to WeHo but usually earlier. Focus hard from 8-11"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Similar setup to WeHo but usually earlier. Focus heavily from 8-11"
      }
    ],
    "T041": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Similar setup to Pico. Opening first but don't forget later checks if inventory doesn't appear immediately."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Similar setup to Pico. If it misses opening expect attention later."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Same concept as Pico. If it misses early expect attention later"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Santa Fe Springs but may only have Needoh** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Same concept as Pico. If it misses early expect attention later!"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Santa Fe Springs is only selling Needohs.***"
      }
    ],
    "T094": [
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall**\n\n\u2022 Short line is starting to form up now \n\u2022 Guest services confirmed they will be selling at"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach ran their Tuesday VQ as posted earlier then had everyone run over to Westminster Mall for an "
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall is at 40+ as warned earlier! Original posting had sub 5 people** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall Item Update**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Mega Moonlight Tins \n\u2022 OP DP-11 Double "
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Random drops now so CHECK IN FROM 8-11 or later on will be RANDOM"
      },
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall**\n\n\u2022 Chaos Rising Blister Pack \n\u2022 Chaos Rising Booster Sleeves \n\u2022 Mega Evo / Phantasmal 2 Pack"
      }
    ],
    "T088": [
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca is selling now to those from VQ taken at opening** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca Item List**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 First Partner Illustration Series 2 \n\u2022 OP-"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca looking like it may be low stock if nothing new gets brought out** <@&1425166056766439528>"
      },
      {
        "date": "2026-04-28",
        "type": "guide",
        "snippet": "Spectrum DID NOT GO watch 12-2 but timing can be earlier or later. Barranca keep eyes lightly for held back stock"
      },
      {
        "date": "2026-04-21",
        "type": "guide",
        "snippet": "Spectrum didn\u2019t sell so keep eyes 12-2 but may be later in week. Can ask and expect heads to check Barranca tomorrow for"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "**Target Irvine/Barranca**\n\n- 10-11 people outside of the store, lined up for opening.\n- Some chatter from non-staff abo"
      }
    ],
    "T167": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Store mentioned waiting until Friday but last week sold prior so check 8-10! Ask store they should confirm"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Holding for Friday like usual as of the last few weeks."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Claimed they are waiting until Friday but still worth checking. Not a release week so be ready for random Poke to drop"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Allegedly they did not hit today so please check in!"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Store claimed today they were holding until Friday here"
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "May have sold a bit today can peep in case 9-12 in case of a bit more"
      }
    ],
    "T165": [
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Brea dropped!**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Chaos Rising ETB \n\u2022 Get there asap store still has som"
      },
      {
        "date": "2026-05-05",
        "type": "confirmed",
        "snippet": "**Target Brea/Birch St**\n\n- Member reported a restock AT OPENING.\n- Opens in 15, take this head start + go!\n- Claiming \u201c"
      },
      {
        "date": "2026-02-24",
        "type": "guide",
        "snippet": "Hit today great job catching!"
      },
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "CHECK AT OPEN AND BEFORE 10 PLEASE"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "CHECK AT OPEN AND BEFORE 10"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "CHECK AT OPEN AND BEFORE 10"
      }
    ],
    "T023": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Unlikely, but check at 7AM tmrw. The more likely time is between 10-12, when GS has the time to unbox. Smaller store mea"
      },
      {
        "date": "2026-05-19",
        "type": "guide",
        "snippet": "Check opening and KEEP ASKING because they\u2019ve spun people before right out of opening"
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "Feels more like tomorrow or Wednesday. Usually 8-9 or 12-2 timing"
      },
      {
        "date": "2026-05-05",
        "type": "guide",
        "snippet": "GS HOLD. Check early and KEEP ASKING as they have spun members right at opening before"
      },
      {
        "date": "2026-04-28",
        "type": "guide",
        "snippet": "Either tomorrow or Wednesday usually 8-9am or 12-2 it stocks"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "***Target Westchester has Two Pack Me/Pf blisters available at GS.***"
      }
    ],
    "T042": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Continues behaving like one of the most active stores around. Opening and 10-12 remain strongest while people wait out s"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "SUCH A HITTER MULTIPLE TIMES A DAY ON SOME DAYS, IT'S CONSTANT HERE! Opening and 10-12 remain strongest while people con"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Constant activity. Opening and 10-12 remain strongest while people continue waiting on shipments. ```"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood is still going with OP-13 and OP-16 Booster Sleeves!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Constant action lately. Opening and 10-12 remain strongest while people wait for shipment. People will just SIT here unt"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Constant action lately. Opening and 10-12 remain strongest while waiting on shipment arrival people will just SIT here u"
      }
    ],
    "T102": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Biggest focus should be vendor timing from 1-4. Expect people lingering and waiting throughout the afternoon. The line i"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Biggest focus should be vendor timing from 1-4. Expect people lingering and waiting throughout the afternoon."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin**\n\n\u2022 Shipment is here as seen above \n\u2022 Typically hits Tuesdays afternoons \n\u2022 Keep eyes and be r"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin confirmed Poke tins so far! Stay tuned for more as they continue to unbox!** <@&142516605676643"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Rotate heavily 10-2 and again later. Store may confirm if they have any inclination of Poke or vendor movement"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Rotate heavily from 10-2 and again later. As the day progresses expect a line to start forming"
      }
    ],
    "T049": [
      {
        "date": "2026-02-03",
        "type": "guide",
        "snippet": "Check in tomorrow morning and throughout the day"
      },
      {
        "date": "2026-02-03",
        "type": "confirmed",
        "snippet": "**Target Norwalk Imperial**\n\u2022 Destined Rivals Booster Sleeves \n\u2022 Mega Evo Booster Sleeves\n\u2022 Mega Charizard ex UPC <@&142"
      },
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Check in tomorrow morning and throughout the day/evening but morning time slightly better chances"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Check in tomorrow morning and throughout the day/evening but morning time slightly better chances"
      },
      {
        "date": "2026-01-13",
        "type": "guide",
        "snippet": "Check in tomorrow morning and throughout the day/evening but morning time slightly better chances"
      },
      {
        "date": "2025-12-30",
        "type": "guide",
        "snippet": "Check in tomorrow morning and throughout the morning"
      }
    ],
    "T048": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Both locations deserve opening attention. Firestone tends to hit opening or a bit after lately when they do receive"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening checks at both locations remain worthwhile."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Norwalk/Firestone has Needohs now! No Pokemon yet. When they drop, it will hit randomly at guest services.*** "
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Opening checks at both!"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Opening checks at both!"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Norwalk/Firestone has 3 people in line waiting for an unconfirmed 8AM drop.***"
      }
    ],
    "T014": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Worth an opening check again. Store continues flying under the radar and will randomly stock as seen tonight"
      },
      {
        "date": "2026-07-07",
        "type": "confirmed",
        "snippet": "**Target Rowland Heights put out Mega Moonlight Tins**"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Sold today, not as likely as other stores for tmw.```"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Worth checking at opening here!"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Store may have a new vendor so pls check at opening!"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Would usually say later in week but since S Azusa hit PLEASE check at opening here!"
      }
    ],
    "T082": [
      {
        "date": "2026-01-27",
        "type": "guide",
        "snippet": "Check in prime time is 12-3 here if not on Friday"
      },
      {
        "date": "2026-01-20",
        "type": "guide",
        "snippet": "Check in prime time is 12-3 here but may have OP sleeves sitting still."
      },
      {
        "date": "2026-01-13",
        "type": "guide",
        "snippet": "Check in prime time is 12-3 here!"
      },
      {
        "date": "2025-12-30",
        "type": "confirmed",
        "snippet": "**Target Westlake**\n\u2022 Destined Rivals Booster Bundles\n\u2022 Phantasmal Flames Booster Bundles\n\u2022 Destined Rivals Booster Slee"
      },
      {
        "date": "2025-11-18",
        "type": "confirmed",
        "snippet": "**Target Westlake - SFV**\n\n- Phantasmal Singles\n- LOTS of OP-13 Singles\n- Nothing else, sitting from y-day.\n- 2 of each "
      }
    ],
    "T057": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Did move some product already but has leftovers confirmed for tomorrow opening"
      },
      {
        "date": "2026-07-07",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega**\n\n\u2022 Store got a shipment late today and is selling multiple items now!\n\u2022 Overall expect it to be "
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Every store around them received today and they have not dropped yet. Check in at opening if they do not sell by closing"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Did sell today and likely only has smaller items left until another shipment lands. Quick opening check then lighter att"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega still has Mega Zygarde ex Premium Collection and OP-16 Booster Sleeves sitting!** <@&1425166183841"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega brought out more items!**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 First Partner Illustration Seri"
      }
    ],
    "T143": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Usually hits Tues/Fri or Sat mornings, Sat more than Fri. People will arrive early. Oftentimes sells via aisle here. Ven"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Palm Desert**\n\n- Should restock at/around opening.\n- Line is currently forming outside.\n- Store usually stocks "
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "***Target Palm Desert is 15-20 deep now.***"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "> - Prismatic Evolutions ETBs\n> - Ascended Heroes ex Boxes\n> - Ascended Heroes Booster Bundles\n> - Ascended Heroes Delux"
      },
      {
        "date": "2026-04-07",
        "type": "confirmed",
        "snippet": "**Target Palm Desert**\n\u2022 7 heads in line currently \n\u2022 Vendor is on site \n\u2022 Make your way over if you\u2019re in that area! <@"
      },
      {
        "date": "2026-04-07",
        "type": "confirmed",
        "snippet": "**Target Palm Desert**\nDROPPED A PACKKKKKKKK!!\ud83d\udd25\ud83d\udd25\n\u2022 Ascended Hero ETB\u2019s\n\u2022 First Partner Collection \n\u2022 ME/PF 2 pack bliste"
      }
    ],
    "T033": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Biggest timing change lately. Expect action around 8-8:30 if it goes early. If not, don't write it off because this stor"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "They now drop daily at GS. A line will form by 10-11AM as it has everyday recently. Hits by 1-2PM."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Biggest change here. Recent trend has shifted heavily toward 8:00-8:30AM drops. Be ready early and if it misses then rot"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Carson Mall (Carson North)**\n\n- Line has formed anticipating a restock!\n- Usually hits Tuesday at guest service"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Strong rotations remain 9-12 and again 3-5 if nothing drops early. LATELY has been dropping early before Carson Sepulved"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Carson Mall has a small line waiting for a drop this morning as posted in guide!** <@&1425166183841140873>"
      }
    ],
    "T058": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening first then another pass around 10-12 in case they get more shipment"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Likely at opening or between 3-5PM. This store gets smacked at guest services because sometimes, they offer 2 per SKU."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening and then another look around 10-12. Store can still unload a decent amount of inventory and other Samo store hit"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "> - Chaos Rising ETB\n> - Perfect Order Booster Bundle\n> - At **Target SAMO/Broadway,** 2 in line.\n> - More stock than pe"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "> OP-13 Singles were just put out at **Target SAMO/Broadway!** CR ETB + Mega Zygarde is still going too. <@&142562569714"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Opening then 10-12. Store can still unload a solid amount here!"
      }
    ],
    "T029": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Both sold a bit later tonight. Heads check Century daily at opening and they do tend to hold back stock"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Likely between 10-12 at guest services tmrw! They still do 2 per SKU at times. Sleeper store that requires checks; 7AM i"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Inglewood/La Brea updates. Usually sells between 10-12:00 (if they don\u2019t at 7AM opening) at guest services. Th"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "BOTH DESERVE GS CHECKS. Morning and 2-5 remain the strongest looks"
      },
      {
        "date": "2026-05-19",
        "type": "guide",
        "snippet": "Ask GS directly. Best windows 11-1 and 3-5"
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "BOTH STORES worth GS checks morning and again around 2-5"
      }
    ],
    "T026": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening remains one of the better plays. Expect another early crowd waiting before doors open."
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Pushed later in the day so opening seems unlikely. Check between 2-4:30PM for a late shipment."
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Hawthorne/120th has a line of 12-13 people waiting for opening.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Hawthorne/120th is selling a small batch of Poke right now!***"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening priority. One of the stronger stores to watch first thing tomorrow morning line will be here"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Hawthorne 120th selling as warned!** <@&1425166183841140873>"
      }
    ],
    "T091": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Garfield sold today it seems. Heavy eyes on CM 17th tomorrow from 8-10 or a bit later"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Continue checking here in the morning. These smaller stores still love Tuesday and Thursday activity! Voodoo's take from"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Continue checking both in the morning. These smaller stores still love Tuesday and Thursday activity."
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa 17th and HB Garfield are smaller stores that do no get checked enough! Typically at least one of the"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa/17th St**\n\n- 4 people are in line so far!\n- Store is holding until vendor arrives.\n- Not anywhere ne"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa 17th**\n\n\u2022 Formed a line now as WARNED\n\u2022 13 heads are currently here \n\u2022 Great job staying on it if yo"
      }
    ],
    "T034": [
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Carson/Sepulveda, as warned, dropped a pack!***\n\n> - Chaos Rising ETB\n> - Prismatic Evolutions ETB\n> - Ascende"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Carson/Sepulveda is STILL GOING! Plenty of product, this ping was a FEAST. 20 in queue but they have enough pr"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Ask about a possible drop tomorrow! May or may not do a VQ or just a straight FCFS drop in the morning or 9-12"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Usually a morning VQ. Vendor here may be off but store can push on their own so CHECK BY OPENING AND ASK"
      },
      {
        "date": "2026-05-12",
        "type": "confirmed",
        "snippet": "***Target Carson/Sepulveda only does Friday virtual queue, feel free to stop by to confirm though.*** <@&142516614096696"
      },
      {
        "date": "2026-05-05",
        "type": "confirmed",
        "snippet": "**Target San Pedro line waiting for their VQ today! Reminder about Carson Sepulveda as well** <@&1425166183841140873>"
      }
    ],
    "T120": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "One of the stronger Tuesday locations. Best windows remain 12-3 and another look around 5-7. Last week was Monday but sh"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Hit today! We posted!"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Store loves Tuesdays. Focus remains 12-3 and again 5-7."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Ended up hitting today can check for small items but would focus on other Santa Ana stores"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "STORE LOVES TUESDAYS. Don\u2019t get brushed off. Focus on 12-3 and then 5-7 AGAIN STORE SHOULD SELL"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Santa Ana 17th / Grand**\n\n\u2022 Line is forming up here outside\n\u2022 Store tends to hit on Tuesday\u2019s and Thursday\u2019s as"
      }
    ],
    "T105": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Check morning time for a push or a bit after opening people will be here!"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Still one of the sneakiest stores around. Can hit morning, afternoon, or even later. Line will form to check opening. Pr"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Still one of the sneakiest stores around. Can hit morning, afternoon, or even later. Line will form to check opening"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Anaheim/Euclid still has OP-16 Singles, we posted earlier and it is still going.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "As seen last week this store can hit late. Other Anaheim stores can rotate too but Euclid is the sneakiest with night dr"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Anaheim Euclid look for possible Poke tomorrow!** <@&1425166056766439528>"
      }
    ],
    "T098": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Ended up hitting today!"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Morning checks remain worthwhile but feels more like a Wednesday leaning store lately. This is Voodoo's post from last w"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Morning checks remain worthwhile but feels more like a Wednesday leaning store lately."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "8-10 checks and look for smaller items. Sleeper location but generally stronger Wednesday"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "8-10 checks and look for smaller items. Sleeper location but generally stronger on Wednesdays here"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Morning check from 8-10 and ask directly about any planned drop. Has a history of sneaky releases ```"
      }
    ],
    "T055": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Can check between 10AM-12PM and between 3PM and 4PM for new stock at guest services. We'll update tomorrow."
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Shipment expected. Watch 9-11, 2-5, but if not Wednesday morning"
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "Shipment expected tomorrow. Look 9-11, 2-5, or possibly Wednesday morning"
      },
      {
        "date": "2026-04-28",
        "type": "guide",
        "snippet": "Stock should arrive tomorrow and should stock either 9-11 , 2-5 or Wednesday morning"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "**Target Westwood**\n\u2022 Ascended Heroes ETB \n\u2022 Ascended Heroes 2 Pack Blister \n\u2022 Sold a bit after opening, if you had seen"
      },
      {
        "date": "2026-03-24",
        "type": "guide",
        "snippet": "Vendor should stock either tomorrow or Wednesday! Stock goes to GS but try to catch them"
      }
    ],
    "T043": [
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Lakewood**\n\n- Virtual queue is open now!\n- This is for **tomorrow\u2019s** restock.\n- Sign up now to return around 8"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "***Target Lakewood canceled their VQ, FCFS at 8AM tomorrow.*** <@&1425166140966965248>"
      },
      {
        "date": "2026-03-31",
        "type": "confirmed",
        "snippet": "**Target Lakewood**\n\n- Been hitting Tuesdays recently!\n- Be on top of it this morning please.\n- Usually hits closer to 1"
      },
      {
        "date": "2026-03-24",
        "type": "guide",
        "snippet": "Look for a random drop tomorrow either morning time or 11-2 but if not will be Weds as usual"
      },
      {
        "date": "2026-03-17",
        "type": "confirmed",
        "snippet": "**Target Lakewood**\n\n- Random Tuesday restock, get going.\n- Shelves are stocked, selling now basically.\n- Head over soon"
      },
      {
        "date": "2025-12-30",
        "type": "confirmed",
        "snippet": "**Target Lakewood IS FRESH OUT RIGHT NOW SEND** \n\u2022 Prismatic Poster Collection\n\u2022 Charizard ex UPC\n\u2022 Destined Rivals Boos"
      }
    ],
    "T066": [
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Moorpark, Simi Valley/Madera, and Granada Hills are similar. Linger early, by 10AM, if you want to be able to "
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Store is back to random drops so you\u2019ll have to be on it!"
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "Seems to be holding stock for Fridays now but can peel in case"
      },
      {
        "date": "2026-05-05",
        "type": "guide",
        "snippet": "DAILY STORE. Opening 12-2 or later just keep checking today hit and can still going tomorrow."
      },
      {
        "date": "2026-05-05",
        "type": "confirmed",
        "snippet": "**Target Granada Hills**\n\n- Line has been forming/updated all morning.\n- Store should drop within 1-2 hours.\n- Line will"
      },
      {
        "date": "2026-05-05",
        "type": "confirmed",
        "snippet": "***Target Granada Hills is selling at 12PM!*** <@&1425165995575742634>"
      }
    ],
    "T052": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Both stores are OVERDUE and should hit! Focus on Weho a bit more. Best attention remains around 9-11 then again from 1-4"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Pushes what they receive daily at guest services between 11:15-1:30. Just look for Excel boxes."
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target West Hollywood is dropping now!***\n\n> - Fresh pack at guest services now!\n> - Today, they are allowing 2 items"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Both stores remain overdue. Focus remains 9-11 and again 1-4."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Two stores to watch. Best windows stay 9-11 and 1-4. Both are DUE"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target West Hollywood has Phantasmal Flames Mini Portfolio** <@&1425625697141133334>"
      }
    ],
    "T097": [
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Last week hit Tuesday evening instead of Weds! Store has been pushing product themselves so check throughout the day for"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "**Target Cypress**\n\n\u2022 Prismatic Evolutions ETB \n\u2022 Ascended Heroes Premium Poster Collection \n\u2022 Ascended Heroes Mega Ex C"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Trending more toward Wednesday lately. Keep 1-4 and 6-8 on the radar in case"
      },
      {
        "date": "2026-05-19",
        "type": "guide",
        "snippet": "Usually Wednesdays now but check 9-11, 2-4, or 6-8 IN CASE you do not want to get caught missing"
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "Midday 1-4 or later 6:30-8:30 push possible even morning but has been trending towards Wednesday"
      },
      {
        "date": "2026-05-05",
        "type": "guide",
        "snippet": "Two weeks in a row has been Wednesday but if you check typically 9-11 or 2-4 or 6-8"
      }
    ],
    "T039": [
      {
        "date": "2026-04-21",
        "type": "guide",
        "snippet": "Peep 9:30-11:30 but may go later in week"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "**Target Huntington Park**\n\n- SUPPOSEDLY stocked up right now!\n- Head over to confirm inventory ASAP.\n- Check in for AH "
      },
      {
        "date": "2026-03-24",
        "type": "confirmed",
        "snippet": "**Target Huntington Park**\n\u2022 Ascended Heroes Mini Tins \n\u2022 Available now at the TCG section\n\u2022 Openly displayed expect peo"
      },
      {
        "date": "2025-12-16",
        "type": "confirmed",
        "snippet": "**Target Huntington Park Item Update:** \n\u2022 Phantasmal Flames ETB\n\u2022 Mega Venasaur ex Box\n\u2022 Phantasmal Flames 3 Pack Blist"
      }
    ],
    "T131": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "More random now but they should hit once shipment lands tmrw. Ask at guest services. Can pair a check with the other App"
      },
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "TUESDAY HITTER. Expect long lines and ghost chairs before opening```"
      },
      {
        "date": "2026-05-19",
        "type": "guide",
        "snippet": "Tuesday hitter. Expect long lines and ghost chairs"
      },
      {
        "date": "2026-05-05",
        "type": "guide",
        "snippet": "Hits Tuesday\u2019s should be long lines and ghost chairs!"
      },
      {
        "date": "2026-04-21",
        "type": "guide",
        "snippet": "Hits Tuesdays with long lined and ghost chairs starting as early as tonight!"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "**Target Apple Valley**\n\n- Line is SUPPOSEDLY 20+ deep!\n- Head over to confirm stock is not for Fri.\n- This store usuall"
      }
    ],
    "T087": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Expect heads here waiting throughout the morning for vendor!"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Vendor should stock tmrw night. and Poke should be put out Weds at opening."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Keep eyes from 12-4 or 6-8!```"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Check tomorrow 8-10:30 for vendor or 4-7pm"
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "Hit tonight!"
      },
      {
        "date": "2026-04-28",
        "type": "guide",
        "snippet": "Checks form 8:30-10 and then again 5-8pm!"
      }
    ],
    "T016": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "CHECK at opening heads will be here don\u2019t wait for an update just check!"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Same like Rowland above one of these two should hit in the morning!"
      },
      {
        "date": "2026-05-19",
        "type": "guide",
        "snippet": "Morning/opening checks here in case but likely Wednesday as usual"
      },
      {
        "date": "2026-05-05",
        "type": "guide",
        "snippet": "Check morning time / Openign!"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "**Target West Covina/S Azusa**\n\n- Vileplume Blisters\n- 1-2 Stellar Crown 3-Pack Blisters\n- Mega/Phantasmal 2-Pack Bliste"
      }
    ],
    "T017": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Sleeper option for a morning or afternoon drop! Depends on vendor route but if it gets later heads will line up!"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "**Target North Azusa**\n\n- Has a line of 20 right now.\n- Vendor should be restocking.\n- Head over if you are in the area!"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target North Azusa is about to sell.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "> - **(1)** Ascended Heroes Poster Collection\n> - Chaos Rising ETB\n> - Chaos Rising 3-Pack Blister\n> - Chaos Rising Boos"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target N Azusa / City of Azusa**\n\n\u2022 Vendor is here restocking make your way over! \n\u2022 Store on occasion does hold back "
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target N Azusa stock pictured should be OOS with line!**"
      }
    ],
    "T003": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening continues to be king. Keep looping back because this store also sells multiple rounds"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Night checks tonight between 8PM and closing. If they do not push then, check at 8AM tomorrow. Store has a deep line eve"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Opening remains strongest"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Eagle Rock opened with Perfect Order Blister Packs and Needohs today**"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Morning opening checks. Store pushes product themselves so rotate after !"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Eagle Rock has 7 heads waiting for opening so far** <@&1425625697141133334> <@&1425165995575742634>"
      }
    ],
    "T140": [
      {
        "date": "2026-05-19",
        "type": "guide",
        "snippet": "Opening checks then linger a bit! Lines can form but may hit either tomorrow or Wednesday!"
      },
      {
        "date": "2026-05-05",
        "type": "guide",
        "snippet": "Check by opening and linger a bit!"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "**Target Murrieta Cal Oaks dropped products as well!.** <@&1425166052496642260>"
      }
    ],
    "T035": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Sleeper that is basically 100% for tm or Weds, usually between 10AM-1PM. Sells @GS."
      },
      {
        "date": "2026-05-12",
        "type": "guide",
        "snippet": "Start rotating and checking in ask about a drop"
      },
      {
        "date": "2026-04-07",
        "type": "confirmed",
        "snippet": "**Target Lomita**\n\n- Just Perfect Order Sleeved Boosters so far.\n- If Torrance starts VQ, check here in the afternoon.\n-"
      },
      {
        "date": "2026-04-07",
        "type": "confirmed",
        "snippet": "**Target Lomita**\n\n- Strongly suggest being on top of this sleeper store.\n- The vendor left Redondo/Kingsdale and TCG wa"
      },
      {
        "date": "2026-03-31",
        "type": "confirmed",
        "snippet": "**Target Lomita**\n\n- Perfect Order Mini Portfolios\n- Perfect Order 3-Pack Blisters\n- Perfect Order Sleeved Boosters\n- St"
      }
    ],
    "T077": [
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Morning first then hammer the 11-2 window. One of the steadier stores lately."
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Moorpark is a go at 2PM today! MANY early warnings have been posted.***\n\n> - Line will form outside soon.\n> - "
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Moorpark should be dropping now! 20+ in line.*** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Moorpark is going down now!!!***"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "> - Moonlight Tins\n> - Ascended Heroes ex Box\n> - OP-Starter Decks\n> - OP-13 Single Sleeves\n> - OP-16 Single Sleeves\n> -"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Morning first then hammer 11-2. Store has become one of the more consistent locations lately"
      }
    ],
    "T061": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Keep watching the normal shipment window around 9-11"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Watch for shipment activity from 9-11 with product usually moving shortly after."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Did not sell today so look for an opening drop! Look for shipment activity 9-11 with product likely moving during or sho"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Glendale Galleria as warned has heads waiting for opening as they didn\u2019t sell yesterday** <@&142562569714113333"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Look for shipment activity around 9-11 with product likely moving during or shortly after! Today was a bit later but sti"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "**Target Glendale Galleria should be heavily lingered now through 12ish!**\n\nAnother store that does get camped similar t"
      }
    ],
    "T051": [
      {
        "date": "2026-05-26",
        "type": "guide",
        "snippet": "South street for VQ at open (but may do Weds). Bloomfield will be a great check for a random from from 12-2 or 3-5 if no"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Cerritos/Bloomfield**\n\n- Virtual queue is opening NOW!\n- Small crowd of people are here.\n- Head over if you are"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Cerritos Bloomfield is stocking and people are hanging around outside!**\n\nMake sure to be here if you\u2019re on VQ "
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "***Target Cerritos/Bloomfield is selling now.***"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "***Target Cerritos/Bloomfield is completely done now.***"
      }
    ],
    "T060": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "DID NOT receive today, leaving them in play for tmrw. Smaller stores receive 2 shipments usually and if it doesn't hit o"
      },
      {
        "date": "2026-06-02",
        "type": "guide",
        "snippet": "Similar setup to WeHo but tends to favor the morning. Focus 8-11"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "***Target Hollywood Galaxy will drop everything they accumulate in shipment from last Friday after opening until 5/22 at"
      }
    ],
    "T081": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Tuesday continues matching this store well. Expect another solid turnout early with some heads already here"
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Did not appear to move today. Looks lined up for an opening or morning release tomorrow and should draw attention early."
      },
      {
        "date": "2026-06-23",
        "type": "guide",
        "snippet": "Classic Tuesday store. Expect turnout and early lines."
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "Did not seem to hit today unless it goes late. Be ready for another early line tomorrow to wait it out"
      },
      {
        "date": "2026-06-16",
        "type": "guide",
        "snippet": "CLASSIC TUESDAY STORE. Expect long lines here!```"
      },
      {
        "date": "2026-06-09",
        "type": "guide",
        "snippet": "Did not seem to hit today unless it goes late! Be ready for another line early tomorrow to wait it out!"
      }
    ],
    "T168": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Still pushing randomly, sometimes at guest services, so anytime you are free is a decent time to check here. No consiste"
      },
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "**Target Grand Canyon**\n\n\u2022 Line is forming outside right now\n\u2022 About 12 heads are currently in line\n\u2022 Security will brin"
      },
      {
        "date": "2025-11-18",
        "type": "confirmed",
        "snippet": "**Target Chino Grand** \n\u2022 PF Sleeves still sitting from yesterday \n\u2022 Can come clean it up after Sams Chino\n\u2022 Take sleeve"
      }
    ],
    "T059": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Been selling frequently between 11AM-1PM at guest services, 1 per SKU. Sleeper check in!"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Wilshire restocked earlier. What's pictured is what's left. They have Sports, such as FIFA World "
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Santa Monica Wilshire has Phantasmal Flames Mini Portfolio ** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Santa Monica Wilshire sold!**\n\n\u2022 Mega Zygarde ex Premium Collection (out of stock)\n\u2022 Phantasmal Flames Mini Por"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "**Target Santa Monica/Wilshire**\n\n - Ascended Heroes Deluxe Pin Collection\n- Vileplume Blisters are available too.\n- All"
      },
      {
        "date": "2026-01-06",
        "type": "confirmed",
        "snippet": "**Target Santa Monica Wilshire**\n\u2022 Mega Kangashkan ex Box\n\u2022 Store finally decided to sell their items normally\n\u2022 You can"
      }
    ],
    "T046": [
      {
        "date": "2026-07-07",
        "type": "confirmed",
        "snippet": "**Target Long Beach/Bixby & 7th**\n\n- First Partner Series 2 Illustration\n- Available now at guest services.\n- Will go qu"
      },
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Due for their first shipment of the week. YES, this store gets Poke. Has a small cards area where they stock, check from"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Long Beach Bixby**\nTo the doubters who told me they don\u2019t receive TCG anymore you\u2019re welcome\n\n\u2022 Mega Moonlight "
      }
    ],
    "T045": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Vendor stocked sneakily last Tues night. Check again this week to see if it happens again!"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Long Beach Cherry has Perfect Order 3 Pack Blister and Mega Evo / Phantasmal 2 Pack Blister sitting** <@&142516"
      }
    ],
    "T116": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Same situation as Signal Hill. Both stores are due and will be lined up at accordingly. Don't wait to go.```"
      }
    ],
    "T112": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Still due for stock, people will line up here to gamble at opening. This happens everyday. Usually hits Tues/Thurs and s"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Jeronimo has 10-13 in line.***"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Jeronimo dropped lightly.***\n\n> - Chaos Rising ETB\n> - Chaos Rising 3-Pack Blister\n> - Chaos Ris"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Jeronimo update is posted above.***"
      },
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Jeronimo**\n\n\u2022 Destined Rivals Booster Sleeves \n\u2022 OP Starter Decks\n\u2022 Mega Zygarde ex Premium Colle"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Jeronimo ended up selling.***\n\n> - Ascended Heroes ex Box\n> - Other smaller items as well.\n> - H"
      }
    ],
    "T113": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Often slept on, but definitely not forgotten about by locals. Hits by 10-12PM and gets cleaned quickly. Smaller store th"
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Alicia Parkway has 15 chairs down. Jeronimo has 13. Don\u2019t forget to check Target Mission Viejo/P"
      }
    ],
    "T115": [
      {
        "date": "2026-06-30",
        "type": "guide",
        "snippet": "Usually pushes between 12-3PM at guest services. This is another smaller location that receives quaint batches of stock "
      }
    ],
    "T118": [
      {
        "date": "2026-07-07",
        "type": "guide",
        "snippet": "Opening, then 10-12, then 5-7 checks until it hits! When it does expect them to STAGGER product out so multiple waves"
      }
    ],
    "T050": [
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Cerritos/South St only has Needohs. 25 in line, selling now!***"
      },
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "***Target Cerritos South St/Cerritos Bloomfield have not sold yet. Likely to start up tomorrow morning too.*** <@&142516"
      },
      {
        "date": "2025-10-07",
        "type": "confirmed",
        "snippet": "**Target Cerritos - South**\n\n- Restocking NOW!\n- Only 10 people in line.\n- 20+ ETBs at most stores this week.\n- Head ove"
      }
    ],
    "T153": [
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa/SD**\n\n- Stocking right now!\n- Line is deep, people expected it.\n- Head over for smaller products now!"
      },
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "***Target Mira Mesa has a line forming outside! Should sell this AFTERNOON.*** <@&1488964167997063309>"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa**\n\n- Dropping right now!\n- Line has been formed.\n- Was listed in last night's guide.\n- Should begin s"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa**\n\n- Ascended Heroes Mega ex Boxes\n- First Partner Illustration Collection\n- Available now, not TOOOO"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa**\n\n- 13 in line right now.\n- Vendor HAS NOT arrived yet.\n- Usually hits closer to 11AM-1PM.\n- Feel fr"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "***Target Mira Mesa has 20 in line now.***"
      }
    ],
    "T080": [
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "**Target Ventura Mall**\n\n- 10 or so in line right now!\n- Store is going to restock shortly.\n- Easy W to head over to, no"
      },
      {
        "date": "2025-10-21",
        "type": "confirmed",
        "snippet": "**Target Ventura Mall**\n\u2022 Mega single\n\u2022 Mega checklane blister\n\u2022 Surging single\n\u2022 Surging blister\n\nSlight pack <@&142516"
      }
    ],
    "T135": [
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Ontario 4th / Baker**\n\n\u2022 OP-13 Booster Sleeves \n\u2022 Perfect Order Blister Pack \n\u2022 Make your way over if around! <"
      },
      {
        "date": "2026-06-23",
        "type": "confirmed",
        "snippet": "**Target Ontario 4th / Baker is selling!**\n\n\u2022 Chaos Rising Booster Bundle \n\u2022 Chaos Rising ETB \n\u2022 Mega Zygarde ex Premium"
      },
      {
        "date": "2026-05-05",
        "type": "confirmed",
        "snippet": "**Target Ontario / Baker**\n\u2022 Store stocked up a bit later today around noon\n\u2022 May have some AH Bundles left if near \n\u2022 P"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "**Target Ontario / Baker has Ascended Heroes 2 Pack Blister as warned a few mins ago and in guide!** <@&1425166052496642"
      },
      {
        "date": "2026-04-21",
        "type": "confirmed",
        "snippet": "**Target Ontario 4th/ Baker**\n\u2022 As warned throughout the morning line is starting to form \n\u2022 Tends to hit AFTER Mills hi"
      },
      {
        "date": "2026-03-24",
        "type": "confirmed",
        "snippet": "**Target Ontario 4th/Baker**\n\n- Small line is forming now.\n- So far, about 7 people in it.\n- Vendor has not shown yet.\n-"
      }
    ],
    "T162": [
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Othello SD**\n\n\u2022 Mega Zygarde ex Premium Collection \n\u2022 OP DP-11 Double Pack \n\u2022 OP-16 Booster Sleeves \n\u2022 Phantasm"
      },
      {
        "date": "2026-04-07",
        "type": "confirmed",
        "snippet": "**Target Othello Ave (SD)**\n\n- OP-15 Single Sleeves\n- Mega/Phantasmal 2-Pk Blisters (Raikou)\n- Stock is sitting right no"
      },
      {
        "date": "2026-03-10",
        "type": "confirmed",
        "snippet": "**Target Othello Ave San Diego**\n\u2022 Ascended Heroes Mini Tins \n\u2022 OP TS-02 Mini Tin \n\u2022 Pokemon Day Collection 2026 \n\u2022 Mega"
      }
    ],
    "T142": [
      {
        "date": "2026-03-10",
        "type": "confirmed",
        "snippet": "**Target La Quinta**\n\n- Hitting right now, vendor is here!\n- Only 5 people in line, get here NOW.\n- Costco La Quinta wil"
      }
    ],
    "T154": [
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "***Target Eastlake/SD has a line forming. People are hoping for an afternoon restock since the store is overdue.*** <@&1"
      },
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "***Target Eastlake/SD's line is dispersing.***"
      },
      {
        "date": "2026-03-24",
        "type": "confirmed",
        "snippet": "**Target Eastlake (SD)**\n\n- Vendor is at the store now.\n- Stocking the cart in back.\n- Head over if you're down to wait "
      },
      {
        "date": "2026-03-24",
        "type": "confirmed",
        "snippet": "**Target Eastlake update.** <@&1425166056766439528>"
      },
      {
        "date": "2026-03-24",
        "type": "confirmed",
        "snippet": "**Target Eastlake stock!** <@&1425166056766439528>"
      }
    ],
    "T170": [
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Goleta also sold at opening!** <@&1488964203103522997>"
      },
      {
        "date": "2026-05-12",
        "type": "confirmed",
        "snippet": "**Target Goleta**\n\n- Perfect Order ETBs are still going.\n- First Partner Illustration Collection is still going.\n- Ascen"
      },
      {
        "date": "2026-05-05",
        "type": "confirmed",
        "snippet": "***Target Goleta should drop within a few hours!*** <@&1488964203103522997>"
      },
      {
        "date": "2026-03-31",
        "type": "confirmed",
        "snippet": "**Target Goleta**\n\u2022 Perfect Order Booster Sleeves \n\u2022 Phantasmal Flames Mini Portfolio\n\u2022 Ascended Heroes 2 Pack Blister \n"
      }
    ],
    "T157": [
      {
        "date": "2026-04-07",
        "type": "confirmed",
        "snippet": "**Target San Diego/Sports Arena Blvd**\n\n- Dropping a pack right now!\n- Ascended & Perfect Order items.\n- ETB/Poster/Firs"
      }
    ],
    "T149": [
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "**Target El Camino/SD (Oceanside)**\n\n- ALSO restocking now!\n- 8-10 people are in line so far.\n- Boxes just started getti"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Oceanside El Camino**\n\n\u2022 Store should be restocking now \n\u2022 Posted in guide last night for mid day as well\n\u2022 Sho"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "***Target San Diego/El Camino is dropping too!***\n\n- Vendor just arrived here.\n- Store is going to take some time to sto"
      },
      {
        "date": "2026-04-14",
        "type": "confirmed",
        "snippet": "**Target Oceanside/El Camino**\n\n- Beginning to restock now!\n- 10-15 people are in line so far.\n- Looking like a pack, st"
      }
    ],
    "T139": [
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Lake Elsinore has 20 heads in line and is expecting a drop** <@&1425166052496642260>"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "**Target Lake Elsinore restocked some Ascended Heroes 2 Pack Blister and other packs of Poke** <@&1425166052496642260>"
      }
    ],
    "T146": [
      {
        "date": "2026-06-02",
        "type": "confirmed",
        "snippet": "**Target Poway has Chaos Rising Booster Sleeves and Perfect Order Booster Sleeves** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "**Target Poway**\nSelling now at GS :\n- Ascended Hero Etb\n- Ascended Hero Mini Tins\n- Me/Pf 2pk Blister \n- First Partner "
      }
    ],
    "T151": [
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Sycamore should be dropping!***\n\n> - Line of 20+ right now.\n> - Expect CR/same items as other locals.\n> - 1 pe"
      },
      {
        "date": "2026-05-26",
        "type": "confirmed",
        "snippet": "***Target Sycamore/San Diego has a line of 10 formed so far.*** <@&1488964167997063309>"
      },
      {
        "date": "2026-05-19",
        "type": "confirmed",
        "snippet": "**Target Sycamore/SD**\n\n- Vendor has been spotted here!\n- Head over now for absolute confirmation.\n- A line has been rep"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "**Target Sycamore (SD)**\n\n- Line of 10 waiting for a restock.\n- [Was mentioned as a possible hit today.](https://discord"
      }
    ],
    "T159": [
      {
        "date": "2026-05-12",
        "type": "confirmed",
        "snippet": "**Target Balboa/SD**\n\n- Line of 4 has started outside.\n- Store should sell tomorrow morning.\n- Usually hits on Weds by 1"
      },
      {
        "date": "2026-04-28",
        "type": "confirmed",
        "snippet": "***Target Balboa has a line forming for tomorrow's restock that is not even confirmed for 7AM opening. SD >> OC??*** <@&"
      }
    ],
    "T148": [
      {
        "date": "2026-05-12",
        "type": "confirmed",
        "snippet": "***Target Grossmont tomorrow at opening. Like always, full guide tonight. Just shoot me a DM to be added to SD chat, it "
      }
    ],
    "T171": [
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Encinitas is stocking now!***\n\n> - People have been waiting all day.\n> - Should be a solid pack here today.\n> "
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Encinitas item updates!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "***Target Encinitas is selling now!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-06-09",
        "type": "confirmed",
        "snippet": "> - Prismatic Evolutions ETB\n> - Chaos Rising ETB\n> - Ascended Heroes Deluxe Pin\n> - Ascended Heroes Premium Poster\n> - "
      }
    ],
    "T169": [
      {
        "date": "2026-06-16",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia**\n\n\u2022 Prismatic Evolutions ETB \n\u2022 Ascended Heroes Premium Poster Collection \n\u2022 Ascended Heroe"
      }
    ],
    "T164": [
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Commerce is still stocking! Vendor put out Chaos Rising ETBs and more 20 ago, and the store is still stocking "
      },
      {
        "date": "2026-06-30",
        "type": "confirmed",
        "snippet": "***Target Commerce update, we pinged when they stocked yesterday afternoon. They only have Chaos Rising Sleeved Boosters"
      }
    ]
  },
  "wednesday": {
    "T014": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sold Monday, check for more tomorrow. Been pushing when shipment comes in at guest serivces recently. Larger store that "
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Usually Weds/ Thursday store. Expect a small opening crowd and keep rerunning checks all day if nothing happens immediat"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Rowland Heights has a line of people waiting for opening! S Azusa West Covina does as well!** <@&14251660524966"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Another store to check at opening for vendor. Same vendor as S Azusa so if nothing check later"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Usually Weds/ Thursday store. Expect a small opening crowd and keep rerunning checks all day if nothing happens immediat"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Should move either tomorrow or Thursday. Small opening line expected and if nothing happens keep rerunning checks all da"
      }
    ],
    "T005": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been selling at opening almost daily! You can count on a line waiting for 8AM tomorrow. Be a bit early if you want the b"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Vendor schedules are weird enough that people will line up early. Opening attention is crucial here"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Duarte needs checks and also has a line going now!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Duarte is now selling as warned!**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Ascended Heroes Mega Ex Collection"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Primed to hit and lines will start EARLY EARLY will either be tomorrow or Thursday"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Duarte has 5 heads waiting prior to opening!** <@&1425166052496642260>"
      }
    ],
    "T013": [
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Montclair needs to be updated along with Eastland!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Hit today as posted here first!"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Montclair**\n\n\u2022 Vendor is here on site now!\n\u2022 Lines posted earlier has dwindled down\n\u2022 Make your way over asap a"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "**Target Montclair**\n\n- Stocking right now, vendor is here.\n- 12 or so in line so get going now or never.\n- Store has be"
      },
      {
        "date": "2026-04-15",
        "type": "confirmed",
        "snippet": "**Target Montclair**\n\n- 10 lingering around now.\n- Expect a restock somewhat soon.\n- Vendor should arrive judging bg the"
      },
      {
        "date": "2026-04-15",
        "type": "confirmed",
        "snippet": "**Target Montclair as warned!**\n\u2022 VQ is starting up now\n\u2022 17 heads on impact \n\u2022 Ask to sign up at GS <@&1425166052496642"
      }
    ],
    "T008": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been selling at opening these last few days without much of a crowd. Again, they sell 1 SKU at a time, so ppl choose oth"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Opening is important. Expect people waiting and don\u2019t leave too quick if nothing shows right away"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target La Verne**\n\n\u2022 Excel boxes are out here\n\u2022 Warned above to stay on it\n\u2022 Stay tuned for items or if they\u2019ll be sel"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "MORNING CHECK then stronger 12-2 vendor timing. Employees can still randomly push product too like they did today"
      },
      {
        "date": "2026-03-25",
        "type": "guide",
        "snippet": "Has not seemed to hit so BE READY. If not morning time or 9-11 heavy check from 1:30-3:30"
      },
      {
        "date": "2026-02-04",
        "type": "guide",
        "snippet": "Has not been checked store can have looser limits or let you loop as well"
      }
    ],
    "T011": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sells basically everyday at multiple times, and they sell selectively. You can expect a 7AM line, and you can expect mor"
      },
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Always at opening, line up early to hit best, always a line beforehand due to the consistency of how it hits."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "7AM CHECKS. Posting it again because this store loves employee pushes"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Most likely at opening so be there early."
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target El Monte is selling Poke including Ascended Heroes Mega Ex Collection !**\n\nCheck back later as store sells mult"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target El Cajon is dropping right now!*** <@&1488964167997063309>"
      }
    ],
    "T001": [
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Priority Wednesday stop alongside Alhambra. Usually one pops early while the other follows later afternoon"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target 777 Pasadena**\n\n\u2022 Vendor was here but left and no Poke\n\u2022 Check in with Alhambra for a bit as well as Duarte and"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Wednesday store and PRIORITY morning check!!!!"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "***Target 777 Pasadena has 16 people waiting for 8AM opening.***"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "***Target Sylmar (<@&1425165995575742634>) and 777 Pasadena (<@&1425166052496642260>) are solid options for this afterno"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Wednesday store and PRIORITY morning check with Alhambra. One can hit morning and the other afternoon so be ready heads "
      }
    ],
    "T006": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Normally stronger Thursday mornings but has absolutely switched to Wednesday before. Don't write it off"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Opening first then 12-3 fallback. Usually Thursday/Friday but schedules can shift"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Pomona no Poke at opening! Reminder we are still looking for vendor** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Normally stronger Thursday mornings but has absolutely switched to Wednesday before. Don't write it off"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Opening first then fallback around 12-3. Usually Thursdays and Fridays here but can check since schedules are wonky"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Usually stronger Thursdays around opening or 8-10 but has switched to Wednesday before so don\u2019t ignore it"
      }
    ],
    "T002": [
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target 3121 Pasadena is selling their opening drop as warned above!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "PRIMED please please be ready heads will be here early update from 7-8am store should confirm prior"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Sleeper option store can employee push OR be stocked by vendor! Opens at 8am and usually confirms drops prior to opening"
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "Morning or 12-2 ASK AT GS can randomly sell"
      },
      {
        "date": "2026-04-15",
        "type": "guide",
        "snippet": "Did not seem to hit so check morning time or later afternoon ask for a VQ as well!"
      },
      {
        "date": "2026-04-08",
        "type": "guide",
        "snippet": "Same idea here Wednesday hitter. Morning check is key if not may be a bit later"
      }
    ],
    "T010": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "VERY DUE to sell tomorrow! They switch up the timing constantly. Check at opening. Seems more possible tmrw."
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Diamond Bar\u2019s Needoh & Squeezy update.***"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Will 100% sell tomorrow but store can choose timing so you\u2019ll have to rotate either opening or mid day are best"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Diamond Bar**\n\n- OP-16 Singles are available.\n- 2 per person at guest services.\n- Had other products at opening"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Diamond Bar as posted yesterday in guide has been selling multiple times today including in the morning!**\n\nSto"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Store should sell at opening or mid day they tend to play games but will sell at some point tomorrow telling you now"
      }
    ],
    "T129": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Generally has a crowd of people checking daily at opening. Receives heavy stock when it does hit!"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "**Target Redlands did drop last week on Thursday INSTEAD of Friday so not a bad thing to keep eyes on!** <@&142516605249"
      },
      {
        "date": "2026-03-11",
        "type": "guide",
        "snippet": "Check at opening but has been leaning towards only Friday"
      },
      {
        "date": "2026-03-04",
        "type": "guide",
        "snippet": "EXPECT HEAVY HEADS HERE BEFORE OPENING. Primed to drop a big pack people smash it"
      },
      {
        "date": "2026-02-04",
        "type": "guide",
        "snippet": "Either tomorrow or Friday at opening/morning leaning Friday though"
      },
      {
        "date": "2026-01-21",
        "type": "guide",
        "snippet": "Either tomorrow or Friday at opening/morning leaning Friday though"
      }
    ],
    "T124": [
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Corona**\n\n\u2022 Vendor is here stocking up now\n\u2022 15 heads in line currently \n\u2022 Make your way over if around! <@&142"
      },
      {
        "date": "2026-04-15",
        "type": "guide",
        "snippet": "Hasn\u2019t hit so BE READY people will be on it and very likely to form a line like they did today!"
      },
      {
        "date": "2026-04-15",
        "type": "confirmed",
        "snippet": "**Target Corona/Tuscany**\n\n- Line is forming again today.\n- 3rd day in a row, store is overdue.\n- It shouldddd happen to"
      },
      {
        "date": "2025-11-05",
        "type": "guide",
        "snippet": "Has been quiet make sure to check in 9-11 and 2-4 here!"
      },
      {
        "date": "2025-10-29",
        "type": "guide",
        "snippet": "Has been quiet make sure to check in 9-11 and 2-4 here!"
      },
      {
        "date": "2025-10-22",
        "type": "guide",
        "snippet": "Likely to hit tmw since Norco & Eastvale already did this week. Be ready 8-10 and 12-2 veryyy likely."
      }
    ],
    "T133": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Literally the same as Fontana/Summit, posted directly above. Sells at guest services like Fontana/Summit!"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Fontana Slover update! Keep eyes for a drop Friday most likely here**"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Most common windows remain 9-11 and 1-3 store sells in batches usually"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Most common windows remain 9-11 and 1-3"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Fontana Slover has Phantasmal Flames Mini Portfolio and Perfect Order Booster Sleeves**"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Usually 9-11 or 1-3 here if they sell!"
      }
    ],
    "T138": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sold last Weds at opening! Definitely one to be at tomorrow. Not confirmed, but you can expect a line of ppl here. They "
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target San Bernardino**\n\n\u2022 Chaos Rising Booster Bundle \n\u2022 Put out on a cart here\n\u2022 Store tends to randomly drop small "
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Great sleeper option. Employees make timing messy so focus 8-10 and again 12-3"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target San Bernardino sold at opening!**\n\n\u2022 Chaos Rising ETB \n\u2022 Chaos Rising Booster Bundle \n\u2022 Mega Zygarde ex Premium"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Great sleeper option. Employees make timing messy so focus 8-10 and again 12-3"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Sleeper checks here! Timing more random as employees play a bit but check from 8-10 or 12-3!"
      }
    ],
    "T145": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sells at opening and receives heavy stock. Check tomorrow, people are looking almost every morning."
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Hemet is selling poke! Ascended Heroes Mega Ex Collection confirmed ** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Hemet has One Piece available** <@&1425166052496642260>"
      },
      {
        "date": "2025-10-08",
        "type": "guide",
        "snippet": "Check for stock in a cart at guest services between 11-1. This store is a sleeper and usually drops packs, if anyone is "
      }
    ],
    "T062": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been selling at opening, sold today at opening for example. They have a line every morning due to the recent consistency"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Van Nuys/Sherman Oaks is selling a Chaos Rising selection.***"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Basically a daily shipment check now. Opening line forms early then rerun around 10-1"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Sepulveda will open with items!**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Chaos Rising ETB \n\u2022 Chaos "
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Sepulveda still has a few OP-13 Sleeves from this mornings drop! More OP-16 left as well** <@&14251659"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Same as always. Opening first then 11-1 rerun"
      }
    ],
    "T065": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been awfully dry to the point it seems like they are holding out for Friday. Many SFV stores have made the switch this w"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "DID NOT MOVE TODAY BUT PRODUCT IS THERE. Strongest windows remain opening, 12-2, and 4-6. Some heads are here and will h"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Sylmar***\n\n- Drop happening soon.\n- Line of 8 is currently outside waiting.\n- Stop by if near.\n\n<@&14251659955"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Sylmar Update***\n\n- No drop as of now.\n- List being made for what could be a possible drop at opening tomorrow"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Sylmar and Simi Valley Cochran still need updates!** <@&1488964203103522997> <@&1425165995575742634>"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Stock is confirmed here. Just have to catch them actually selling. Opening checks first then afternoon as it did not see"
      }
    ],
    "T073": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "This store holds back product and drops randomly. The best times to check are 8-10AM and 1-3PM!"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Stayed quiet today so expect heavy opening attention plus another sweep from 9:30-12. Store often breaks inventory into "
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Santa Clarita/Golden Valley**\n\n- Vendor is here, stocking the shelves right now.\n- However, they are claiming \""
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Holding stock like usual. Expect locals rotating from opening through afternoon"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Stayed quiet today so expect heavy opening attention plus another sweep from 9:30-12. Store often breaks inventory into "
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "HOLDING STOCK LIKE USUAL. Expect locals cycling through from opening into the afternoon."
      }
    ],
    "T076": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Selling by 11AM-1PM. Line will form even earlier since Newbury is not even due for stock tmrw. Going to be busier than u"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Simi Valley/Madera**\n\n- Already did their daily drop.\n- We\u2019ll be back on it tomorrow!\n- Phantasmal Flames Mini "
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Madera had some Ascended Heroes Mega Ex Collection for their shipment today!** <@&14889642031035229"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Simi Valley/Madera**\n\n- Ascended Heroes ex Boxes\n- Mega Zygarde ex Premium Collections\n- Phantasmal Flames Mini"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Madera**\n\n\u2022 8 people are lined up waiting for a potential drop!\n\u2022 This and **Moorpark** are GREAT m"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Madera is wheeling out Excel boxes now!**\n\nWill post shortly if they confirm Poke or not <@&1488964"
      }
    ],
    "T069": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Received stock today. Can check morning or evening and last week hit at opening so expect heads checking!"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Pacoima**\n\n\u2022 Vendor is here stocking up now\n\u2022 Will have sports and other TCG available\n\u2022 Poke will likely be he"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Pacoima double confirmation no Poke or OP tonight** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Pacoima also has a longer line built up!** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Pacoima has 20 heads waiting in line, has been holding Poke for Fridays but may have other items can check!** <"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Pacoima passing tickets out \ud83d\udc40** <@&1425165995575742634>"
      }
    ],
    "T083": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Most reliable windows stay 8-10AM and 6-8PM did not hit today unless it goes late tonight! Last week did hit around 12:3"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Fallbrook only sold Needoh and Squeezy!** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Fallbrook sold OP at opening!** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Most reliable windows stay 8-10AM and 6-8PM did not hit today unless it goes late tonight!"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Fallbrook could use a check! May just be small items but check in and let us know!** <@&1425165995575742634>"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Most consistent around 8-10AM or later 6-8PM windows!"
      }
    ],
    "T080": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been selling when shipment comes in, so it's actually a pretty decent check. Usually 10AM-12PM or during the night time."
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Please keep morning eyes here from 8-12"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Pls keep eyes in the morning here 8-12! ```"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "***Target Ventura Mall is selling now.***\n\n> - Ascended Heroes ex Boxes\n> - Other AH items as well today.\n> - Very small"
      },
      {
        "date": "2026-03-25",
        "type": "confirmed",
        "snippet": "**Target Ventura Mall**\n\u2022 Just received their shipment right now of Excell\n\u2022 Store can be rotated and checked but may ho"
      },
      {
        "date": "2025-10-08",
        "type": "guide",
        "snippet": "Should drop tomorrow night between 8-10PM at guest services. Has not done much this week.```"
      }
    ],
    "T022": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Unlikely that they sell tm, they sold today. Check time: 3-5PM!"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target LA Sawtelle is still going with OP-13!**\n\nAddress is below for those who need\n\n11840 W Santa Monica Blvd\nLos An"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Still hasn\u2019t really gone so don\u2019t sleep on it. Opening matters then run it back 5-7 if it finally decides to move"
      },
      {
        "date": "2026-05-06",
        "type": "guide",
        "snippet": "Still hasn\u2019t really moved much so don\u2019t sleep it. Opening check matters then run it back 5-7 if it finally decides to go"
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "Sold already so light check at opening or throughout the day but less likely"
      },
      {
        "date": "2026-04-22",
        "type": "guide",
        "snippet": "Can check at opening but seems to be holding for Friday"
      }
    ],
    "T052": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Has been selling daily recently, including Sat. It hits between 12:30-2:30PM."
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Check in with*** __***Target West Hollywood***__ ***ASAP!*** <@&1425625697141133334>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target West Hollywood has a crowd lingering. Nothing confirmed.***"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Neither really got going today. Focus 9-11 and 2-4 but put extra emphasis on WeHo especially later in the afternoon"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target West Hollywood has Chaos Rising Booster Sleeves!**"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Neither seemed to hit so same times 9-11 and 2-4 but pls extra attention on Weho especially in the afternoon!"
      }
    ],
    "T053": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Usually hits Tues or Weds! Not much chatter about this store today, check in at 8AM tmrw. If not, it SHOULD hit between "
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target LA/Sunset is selling Needohs at guest services! 15-20 in line. Lots of stock.*** <@&1425625697141133334>"
      },
      {
        "date": "2026-03-11",
        "type": "confirmed",
        "snippet": "**Target LA/Sunset**\n\n- Line is forming right now.\n- Only 6-8 people as of now.\n- Get going if you are nearby.\n- We will"
      },
      {
        "date": "2026-03-11",
        "type": "confirmed",
        "snippet": "__**Target LA/Sunset NOW!**__\n\n- Ascended Heroes Mini Tins\n- Prismatic Evolutions Mini Tins\n- Q1 2026 Poke Balls\n- Pokem"
      },
      {
        "date": "2026-03-11",
        "type": "confirmed",
        "snippet": "**Target LA/Sunset is still sitting.** <@&1425625697141133334>"
      },
      {
        "date": "2026-02-25",
        "type": "guide",
        "snippet": "Usually Fridays here but with extra shipments check in the morning!"
      }
    ],
    "T020": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Weds are usually when this store starts hitting more! Line forms by 10AM, store sells by 12:30, hits daily, just be earl"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Wednesdays are usually when this store starts hitting but has gone two days in a row. Possible switch up tomorrow but as"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Culver City Mall**\n\n- Currently, **5** people are lingering it.\n- Store is due for AH ex Boxes & FP Series 2!\n-"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall's crowd has increased from 5 to 10 people. A line will inevitably form soon and from there, t"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall is selling again!***\n\n> - Ascended Heroes ex Box\n> - First Partner Series 2 Illustration\n> - "
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Culver City/Jefferson update.***"
      }
    ],
    "T021": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Weds is usually a day where they sell at opening/earlier in the day. Check at 7AM and check at 10-12 if it's dry at 7!"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "May sell more later in week here as they hit today as warned in guide last night!"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Culver Jefferson**\n\n\u2022 OP-16 Sleeves\n\u2022 Perfect Order Blistee\n\u2022 Ice Cream Needohs <@&1425166183841140873>"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "May sell more later in week here"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "GS checks at 7AM are solid. Then checks again 10-12 or 1-3 for shipment"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Didn\u2019t move today so yk what time it is OPENING 7AM ASK GS then hit it again late morning. Expect release items on relea"
      }
    ],
    "T047": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Supposedly still due! It also hit last Weds! Expect people to set up chairs by 3-6AM here. If it hits like last week, st"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Signal Hill is going down now!***\n\n> - Only about 10 in line!\n> - Store has been due for a week.\n> - Very like"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Signal Hill leftovers pictured**"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Signal Hill has heads in line waiting for opening!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Signal Hill is finally stocking up after missing earlier this week!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Signal Hill is finally selling!** <@&1425166140966965248>"
      }
    ],
    "T042": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sells almost everyday. Some stock goes out at opening then people stick around for more once UPS delivers again around 1"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Morning shipment checks remain king. 8-10 is strongest and this place is practically a daily hitter now. Would usually h"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood no Poke at opening! Look for a shipment to land between 10-12** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Basically almost daily now. Morning lines keep forming and people wait shipments out. Late 6-8 surprise is also possible"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Morning shipment checks remain king. 8-10 is strongest and this place is practically a daily hitter now. Expect people t"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "ALMOST A DAILY STORE AT THIS POINT. Morning lines continue forming and people wait shipments out. Can also surprise late"
      }
    ],
    "T044": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Stocked today so it seems unlikely that they will sell again tomorrow. Feel free to check in for any held stock between "
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Long Beach Bellflower FRESH**\n\n\u2022 First Partner Illustration Box \n\u2022 Chaos Rising Booster Sleeves \n\u2022 Get going ab"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Long Beach Bellflower is sold out of First Partner Illustration Box!**"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "**Target Long Beach Bellflower seemed to sell today as warned in guide**"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "***Target Long Beach Bellflower update per opening.***"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "**Target Long Beach/Bellflower**\n\n- Perfect Order ETB\n- Ascended Heroes ex Boxes\n- Ascended Heroes Booster Bundle\n- Asce"
      }
    ],
    "T045": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "DID NOT stock today, still in play for tmrw. Vendor tends to stock at night. I was wrong yesterday when I said they stoc"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Long Beach Cherry would be great checks today even through the afternoon/evening stay on it and update in <#142"
      },
      {
        "date": "2026-03-25",
        "type": "confirmed",
        "snippet": "**Target Long Beach/Cherry**\n\nFresh stock, nothing crazy though:\n\n- OP-EB-03 Sleeves\n- Ascended Heroes Mini Tins\n- Assor"
      },
      {
        "date": "2025-12-03",
        "type": "confirmed",
        "snippet": "**Target Long Beach/Cherry**\n\n- Vendor started stocking 5-10 min ago.\n- Extremely fresh stock, slight items!\n- 2 people "
      },
      {
        "date": "2025-10-29",
        "type": "guide",
        "snippet": "Should drop either tomorrow or Thur but lean tomorrow . Checks 9-11 am 1-3!!"
      },
      {
        "date": "2025-10-22",
        "type": "guide",
        "snippet": "Check in at opening but if not 12-2 this is the sleeper of the day please be ready."
      }
    ],
    "T046": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Similar to other smaller locations, they have started to receive ALMOST every other day. Check tomorrow at GS + check th"
      },
      {
        "date": "2025-10-08",
        "type": "guide",
        "snippet": "Supposedly started receiving Pokemon. Definitely a random spot, but this might be a reason other LBC Targets got changed"
      }
    ],
    "T038": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Check at opening, alongside 7th & Fig. This store opens at 8AM, Fig is 7AM. If they're dry, prob holding for Fri."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Looks like either tomorrow or Thursday depending on how routes fall. Usually either 8-9:30 early or 1-3 later"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Alicia and Jeronimo hit today. San Juan sold OP as well. Look for San Clemente and if quiet early then watch for a sneak"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Quick 8-10 look then another pass 1-4. Store can sell randomly but Thursdays are still the usual lean"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Looks like either tomorrow or Thursday depending on how routes fall. Usually either 8-9:30 early or 1-3 later"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Quick look around 8-10 then another pass 1-4. Store will sell randomly here so have to check in but usually Thursday\u2019s"
      }
    ],
    "T049": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Holding inventory it seems, likely Friday at opening! Should have Needohs/Squeezy at the bare minimum tmrw at opening, s"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Imperial Norwalk***\n\n- OP-13 Sleeves\n- Mega Zygard Ex Boxes \n- Chaos Rising Sleeves\n\n<@&1425166140966965248>"
      },
      {
        "date": "2026-04-22",
        "type": "guide",
        "snippet": "Overdue location. Be on it from opening through midday here but may hold for Friday too```"
      },
      {
        "date": "2026-04-15",
        "type": "guide",
        "snippet": "Overdue here please be on it morning to evening especially since Firestone already stocked a bit!"
      },
      {
        "date": "2026-04-08",
        "type": "guide",
        "snippet": "Overdue here please be on it morning to evening!"
      },
      {
        "date": "2026-04-08",
        "type": "confirmed",
        "snippet": "***Target Norwalk/Imperial dropped a few minutes ago, scraps remain.*** <@&1425166140966965248>"
      }
    ],
    "T028": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Check at opening, but they sold today. 50/50 whether they double back tomorrow. That's your best time to check though!"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Most reliable windows continue to be 8-9AM or later around 3-5PM but may do Thursday or Friday as they recently sold"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Has been selling at opening so please check 8AM. If nothing early, rotate back later"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Most reliable windows continue to be 8-9AM or later around 3-5PM but may do Thursday or Friday"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Inglewood Century as warned earlier also sold at opening with a long line built prior!**"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Has been selling at opening here pls check! 8am and if nothing rotate ```"
      }
    ],
    "T031": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Expect a line by the tech area at random times, full of people hoping to catch the vendor.```"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Redondo Beach Kingsdale for reference sold yesterday (Tuesday) No Pokemon or One Piece as of now.***"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "WAY OVERDUE. Expect people watching this all day. Best windows are still 9-11 and 4-7 but heads will be checking nonstop"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "MASSIVELY OVERDUE. Expect attention here all day. Strongest windows remain 9-11 and 4-7 but people will absolutely be ch"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Redondo Beach Kingsdale**\n\n\u2022 Worker claiming vendor arrived to the store\n\u2022 As of right now 1 member is in line "
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Redondo Beach**\n\n- Line has formed but some people are leaving.\n- 15 or so were in line BEFORE people dispersed"
      }
    ],
    "T030": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "FCFS with no VQ now, staff push when stock lands! Usually 7AM or 1-3PM once UPS delivers a 2nd shipment."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "cFCFS straight now so needs consistent checks as store can be a bit sneaky with how it sells as we saw yesterday"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Again selling randomly now either early or mid day or evening store will sell as they choose ask at GS ```"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "May be FCFS straight now so needs consistent checks as store can be a bit sneaky with how it sells"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "As warned sold some small amount of stock today fcfs. Not likely for tomorrow so look for a VQ Thursday or Friday"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Did not hit today so ask about VQ and keep eyes all morning. Could also slide Thurs/Fri"
      }
    ],
    "T100": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Likely to drop at opening/mid-morning. It does not matter when the product actually goes out, tmrw is the day so expect "
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Tustin Marketplace is selling weak items.***"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Tustin Marketplace put out OP-13 Singles.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Likely to drop at opening expect a long line prior!!!"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Tustin Marketplace**\n\n\u2022 Will drop a PACK at opening here\n\u2022 Still time to make your way over \n\u2022 Prismatic Evolut"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Tustin Marketplace needs constant updates!** <@&1425166056766439528>"
      }
    ],
    "T099": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Hit today but you can peep tomorrow for random small batches! Realistically, their next drop will be Thursday and/or Fri"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Hit today but can peep tomorrow for random small batches!"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Keep this store on your radar. Small waves, random timing, and surprise drops. Best windows are still 8-11 and 1-3 BUT H"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Tustin Park Ave**\n\n\u2022 Chaos Rising ETB \n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Mega Zygarde ex Premium Collecti"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Stayed quiet today and this store constantly releases in waves. Strongest checks remain 8am opening and 1-3"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "***Target Tustin Park Ave just dispersed the line. No drop today. Head to Tustin Marketplace to check in!*** <@&14251660"
      }
    ],
    "T098": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Expect a line here at opening. This store usually hits on Wednesday by 10:30AM. A line is formed every Weds by around op"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Brookhurst with a small drop but has OP-13!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Morning 8-10 checks and ask staff directly. Last week release week may have altered schedule so expect heads on it a bit"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Dropping more frequently lately. Check morning and linger 8-10 if they decide to let some go. Last week a line built up "
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Morning 8-10 checks and ask staff directly. Schedule was weird last week but tomorrow or Thursday should hit in morning "
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Brookhurst still has heads waiting for a possible drop today. Store may hold but people will wait "
      }
    ],
    "T088": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "OPENING VQ WILL GO DOWN. Expect a deep line before the doors even open! Hits every M/W/F! Had 15 in line around opening "
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "OPENING VQ EXPECTED. Expect a deep line before the doors even open!"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca began selling to VQ!**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Lumiose City Mini Tins \n\u2022 Mega"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Opening VQ here. Long lines will form early!"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "OPENING VQ EXPECTED. Expect a deep line before the doors even open!"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca heads so far for tomorrow\u2019s release!** <@&1425166056766439528>"
      }
    ],
    "T107": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Such a big Mond/Weds/Fri hitter. We've seen this store sell towards the afternoon after lines disperse, BUT TMRW, A LINE"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "M/W/F pattern still alive. Expect lines from 9-11 and a line here EARLY last week vendor arrived at 9:30"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Fullerton Orangethorpe had 6 heads in line at 7am!**\n\nReminder they tend to drop Wednesday mornings more detail"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Fullerton/Orangethorpe**\n\n- About to sell, fully stocked up.\n- 40+ people are in line as of now.\n- Basically, o"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "> - OP-13 Singles\n> - OP-16 Singles\n> - HEAVY variety of Poke\n> - This message will update with a full list in a few.\n> "
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Orangethorpe still has a variety of product.***\n\n> - OP-13 Singles\n> - OP-16 Singles\n> - Luminous Ci"
      }
    ],
    "T102": [
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin has a few heads outside, lines usually start inside but no confirmation it will hit today!** \nK"
      },
      {
        "date": "2025-12-17",
        "type": "confirmed",
        "snippet": "**Target N Tustin Orange** \n\u2022 Vendor is here and stocking now \n\u2022 Line has begun to form currently \n\u2022 Make your way over "
      },
      {
        "date": "2025-11-19",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin St**\n\n- Stocking now, watch other newbs post.\n- Only 1 in line, always the group for OC Target."
      },
      {
        "date": "2025-11-19",
        "type": "confirmed",
        "snippet": "**Target Orange/Tustin Update!** <@&1425166056766439528>"
      },
      {
        "date": "2025-10-22",
        "type": "guide",
        "snippet": "Possible drops here. Prefers late morning 9-11AM, but also has a shot at 2-4PM."
      },
      {
        "date": "2025-10-15",
        "type": "guide",
        "snippet": "Possible drops here. Prefers late morning 9-11AM, but also has a shot at 2-4PM."
      }
    ],
    "T119": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Claims they're doing random but it should still be tomorrow so expect a line to form by 9-10AM. Usually sells by 1PM. Pr"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Typical 10AM VQ setup and people will be there EARLY ask at GS they should confirm"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Santa Ana College line is slowly building for their 10am VQ as posted on guide!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Santa Ana College stock includes the following, once they sell (these items are in backstock, not on the floor"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Santa Ana College has 40+ in virtual queue. They are about to sell, and will enforce STRICT limits today (stri"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "VQ in the morning around 10AM. Don\u2019t let gatekeepers hold you back here, go early and update the line"
      }
    ],
    "T110": [
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "**Target Foothill Portola**\n\n- Line is forming for tomorrow\u2019s release.\n- They should have the insane AH pack.\n- HUGE sto"
      },
      {
        "date": "2026-02-25",
        "type": "guide",
        "snippet": "Usually will sell Thursday here so expecting it then"
      },
      {
        "date": "2026-02-04",
        "type": "guide",
        "snippet": "Usually will sell Thursday here so expecting it then"
      },
      {
        "date": "2026-01-21",
        "type": "guide",
        "snippet": "Usually will sell Thursday here so expecting it then"
      },
      {
        "date": "2026-01-14",
        "type": "guide",
        "snippet": "Usually will sell Thursday here so expecting it then"
      },
      {
        "date": "2026-01-07",
        "type": "guide",
        "snippet": "Check in 9-12 in case of a switch up but should sell Thursday"
      }
    ],
    "T055": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Like we posted today, they hit between 10-11 or from 2-4. Check in those 2 timeframes at GS!"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Could have received inventory today. Check opening at 7AM then stay active from 11-12 if nothing"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Could have received inventory today. Check opening at 7AM then stay active from 10-2 if nothing"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "May have received stock today so check for an opening 7am drop and if nothing look from 10-2!"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Opening then 10-12. Can randomly go 3:30-5 too and Wednesdays usually hit here. Store has other items to sell so 50/50 i"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Opening then 10-12. Can also randomly go 3:30-5 and tends to move Wednesdays"
      }
    ],
    "T056": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been holding their stock for Fridays at opening. They pass #'d tix 30 mins-1 hour before opening."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Opening peek first then circle back 9-11 and again 4-7. Store likes moving product when traffic dies down"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target 1833a Cienega had nothing at opening!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Still sneaky and not getting enough attention. Opening is fine, then rerun around 9, 11-1, and 4-6 has only put out smal"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Opening peek first then circle back 9-11 and again 4-7. Store likes moving product when traffic dies down"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "STILL FLYING UNDER THE RADAR. Opening remains solid, then circle back around 9, 11-1, and again 4-6."
      }
    ],
    "T025": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "This and Gardena sell on similar timeframes. GS checks between 11-1 and 4-6."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Mirror Gardena. Keep both stores paired together because they tend to follow similar timing week after week"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Lawndale & Target Hawthorne 120th update as of 12PM.***"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Mirror Gardena. Keep both stores paired together because they tend to follow similar timing week after week"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Same exact energy as Gardena. Pair them together and mirror your checks"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Same flow as Gardena. Treat both together and mirror the checks but lean towards Gardena as Lawndale has sold a bit"
      }
    ],
    "T027": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "CHECK 7AM OPENING. Has not sold this week so realistically, they might be holding until Friday."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "CHECK 7AM OPENING"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Manhattan Beach as warned on guide is dropping now as well!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Manhattan Beach latest update!**\n\nLooks like a full case of OP-13 plus other items still remain for anyone on t"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Still has back stock to work through. Ask GS directly because they may even tell you if they\u2019re holding for Friday"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Manhattan Beach AS WARNED sold at opening!**\n\n\u2022 Chaos Rising ETB \n\u2022 Ascended Heroes Mega Ex Collection\n\u2022 Phanta"
      }
    ],
    "T039": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Friday motherloads have been consistent here! Thurs is usually the 2nd most consistent day, between 12-2PM. Feel free to"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Thursday remains strongest but tomorrow is still worth monitoring. Focus on 11-1 and 4-6 windows"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "More of a Thursday pattern lately. Main action should be 11-1 in case"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Thursday remains strongest but tomorrow is still worth monitoring. Focus on 11-1 and 4-6 windows"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Has settled into more of a Thursday rhythm. Expect strongest activity around 11-1 and people checking before then"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Usually Thursday\u2019s from 11-1 or 4-6. Can peel tomorrow in case it goes earlier same times"
      }
    ],
    "T034": [
      {
        "date": "2026-03-11",
        "type": "guide",
        "snippet": "Check in in case of any light leftovers !"
      },
      {
        "date": "2026-03-04",
        "type": "confirmed",
        "snippet": "**Target Carson Sepulveda and LB Bellflower both have Mega Evo / Phantasmal 2 Pack Blister sitting from their previous d"
      },
      {
        "date": "2025-10-22",
        "type": "confirmed",
        "snippet": "**Target Torrance Sepulveda** \n\u2022 VQ is starting up NOW! \n\u2022 Keep your DM\u2019s open or send me a friend request for any early"
      },
      {
        "date": "2025-10-15",
        "type": "guide",
        "snippet": "Expect VQ on Thurday here."
      }
    ],
    "T051": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Usually hits on the same day as Cerritos/South St, shortly after. If South sells, ppl will immediately rush over here to"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Cerritos Bloomfield**\n\n\u2022 Chaos Rising Booster Sleeves \n\u2022 Chaos Rising Blister Pack \n\u2022 Store likely stocked up e"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Cerritos Bloomfield put out Ascended Heroes Booster Bundles along with the sleeves I posted earlier!** <@&14251"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "***Target Cerritos/Bloomfield update.***"
      },
      {
        "date": "2026-02-04",
        "type": "guide",
        "snippet": "Hit today as posted!"
      },
      {
        "date": "2026-01-21",
        "type": "guide",
        "snippet": "Do not believe they got stocked check morning time and 12-3"
      }
    ],
    "T009": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Similar story to Pomona. Traditionally Thursday but recent employee pushes make it worth attention! People will start li"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Similar story to Pomona. Traditionally Thursday but recent employee pushes make it worth attention"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Similar story to Pomona. Traditionally Thursday but recent employee pushes make it worth attention"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "OPENING IS CRITICAL HERE. Expect people waiting and don't bail immediately if nothing appears right away."
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Same situation as Pomona. Normally Thursday but can hit! Last drop was employee pushed"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "HEAVY opening check possible vendor start here as well!"
      }
    ],
    "T012": [
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Rosemead vendor showed up, no Pokemon was sold. Be ready on Friday at opening which is when they have been sel"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Vendor should land tomorrow or Thursday. Check 9-12 then intensify later because timing has shifted earlier recently"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Watch vendor tomorrow. Could stock earlier than usual so check 9-12 then ramp up later"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "**Target Rosemead**\n\n- Restocking NOW, vendor is here!\n- Only 5-6 people are here SO FAR.\n- This store sees lines grow q"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "> - 10x Ascended Heroes Deluxe Pin\n> - A few Hop's Zacian ex Boxes as well.\n> - Perfect Order Singles/other items too.\n>"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Watch vendor tomorrow. Could stock earlier than usual so check 9-12 then ramp up later vendor will stop by tomorrow or T"
      }
    ],
    "T004": [
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Alhambra is selling***"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Alhambra items pictured!**"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Lines will start early early at both as they are PRIMED to hit"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Alhambra has 5 heads in line waiting currently to see if vendor shows up**"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Same vendor route as 777. Pair these together because one usually heats before the other"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Same route as 777. Keep both paired together and be ready for the 1-2 hit"
      }
    ],
    "T018": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been hitting between opening and 10AM. Stock sits since it's newer to TCG."
      },
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Could be a sneaky opening push at guest services which they have done on Weds/Thurs before. Check in! If not, due for a "
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "**Target Baldwin Park**\n\n- Confirmed to be dropping at 8AM.\n- Line of 17, pull up now, hits at opening.\n- Will sell at g"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target Baldwin Park has One Piece EB-03 sitting from earlier at guest services still!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "Noon or 2-4 still your best shot here but check for an employee push at opening"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "**Target Baldwin Park**\n\n- Finally stocking, line is forming.\n- A few warnings were posted today.\n- Expecting a solid am"
      }
    ],
    "T122": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Due for their 2nd stock of the week tmrw! You can expect a line to be here by 10AM or so. Hits before or after Eastvale."
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Morning remains strongest and turnout should be heavy tomorrow as Corona hit today!"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Norco**\n\n\u2022 15 people currently in line\n\u2022 As warned store is next to hit\n\u2022 More people will join and wait until "
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Norco vendor is confirmed!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Norco item update!**"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Morning checks strongest. Expect heavy turnout here tomorrow```"
      }
    ],
    "T123": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Same situation as Mission Valley above!"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Not a ton of info here yet but tomorrow could be a good day to start building data."
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Opening checks then rotate. Morning matters most here as it\u2019s last one that hasn\u2019t hit```"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "***Target Jurupa Valley - Store only has Perfect Order Sleeves as of now, but will have more Pokemon on Friday!!*** <@&1"
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "Opening then check 1-4 lines will also form here```"
      },
      {
        "date": "2026-04-22",
        "type": "guide",
        "snippet": "Opening focus but expect heads to STAY ON IT until it hits!```"
      }
    ],
    "T007": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Usually a Wednesday and Friday store! Check in between 12-2PM, a line forms between this time EVERY WEEK. Timeframe is s"
      },
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Vendor was spotted here 2 Weds in a row between 1-2:30PM. Last week, they did not sell, and the week before, they trickl"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target San Dimas needs an update!**\n\nStore is known to hold product and sell sporadically but if you spot vendor will "
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target San Dimas seems to have restocked earlier today**"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Both deserve strong morning looks. Employee pushes and vendor activity are both common. Vendor often lands around 9-10:3"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target San Dimas**\n\n- Employee pushing product right now.\n- Mega Zygarde ex Premium Collection\n- Luminose City Mini Ti"
      }
    ],
    "T112": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Pushes daily, usually at opening! Sometimes, they switch it up, but every morning, there is a line of people checking. O"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo Jeronimo has 25 in line, should be selling now.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Morning first. Focus on Alicia and Jeronimo. If quiet early then watch for a sneaky 1-4PM release still"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Morning checks!. Alicia + Jeronimo are your focus down here! If by chance nothing in the morning look for a sneaky 1-4pm"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Jeronimo has 6 in line awaiting opening so far. CHECK MISSION VIEJO/ALICIA PARKWAY TOO!*** <@&14"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Alicia Parkway has 15 in line whereas Mission Viejo/Jeronimo has 6 in line.*** <@&14251660567664"
      }
    ],
    "T092": [
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Vendor arrived but said no Poke so look if store pushes some out tomorrow morning time! If not may be holding for Friday"
      },
      {
        "date": "2025-11-12",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Adams**\n\n- Selling Pokemon products now.\n- Phantasmal Flames **IS** available.\n- Other product"
      },
      {
        "date": "2025-10-22",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Adams is also selling but with a heavy line waiting** <@&1425166056766439528>"
      },
      {
        "date": "2025-10-15",
        "type": "guide",
        "snippet": "Line will form of people begging the manager to sell the rest of what they are holding. They will trickle sell until the"
      },
      {
        "date": "2025-10-15",
        "type": "confirmed",
        "snippet": "**Target HB Adams is beginning to sell now! 1 of each SKU per person.**"
      },
      {
        "date": "2025-10-08",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach - Adams**\n\n- 14 people praying for a restock.\n- Store stocked yesterday though.\n- This + Barra"
      }
    ],
    "T070": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Can check for a guest services push between 12PM-2PM! Been selling more frequently when shipment comes in. People spawn "
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Morning and midday continue to be the strongest looks for a random push!"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Stronger chance of morning or midday instead of evening will stay silent you\u2019ll have to catch it here!"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Morning and midday continue to be the strongest looks"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Similar to 12121 but higher chance for morning or mid day as opposed to evening"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Morning and midday strongest here! Timing can be a bit sporadic"
      }
    ],
    "T067": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Expecting inventory tomorrow. Multiple shipments weekly and strongest windows remain 8-9am and 1-4"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Topanga Mall has 12 heads in line waiting for opening!** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Topanga Mall opened with no Poke but has Needoh and Squeezy** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Could still leak some inventory before Friday so don\u2019t fully ignore it check opening and 10-1"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Expecting inventory tomorrow. Multiple shipments weekly and strongest windows remain 8-9am and 1-4"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Topanga Mall no Poke at opening**"
      }
    ],
    "T084": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Already a small line. Store sells most mornings at 7AM at GS!|"
      },
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Posted in the LA guide, already a line for 7AM opening."
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "***Target Burbank update.***"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "***Target Burbank Empire Center is selling Ascended Heroes Booster Bundles! Done with the line though, check for other i"
      },
      {
        "date": "2026-03-04",
        "type": "confirmed",
        "snippet": "**Target Burbank Empire Center**\n\n- Ascended Heroes 2-Pack Blisters\n- Started selling around opening.\n- They still have "
      },
      {
        "date": "2026-02-25",
        "type": "guide",
        "snippet": "Check in at opening! Seems likely to have received stock be ready!"
      }
    ],
    "T068": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Wednesday opening has been hitting lately but did sell today! Store tends to"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Wednesday opening has been hitting lately and did not sell today like last week so be ready! If it misses early then foc"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Woodland Hills has 5 heads waiting for opening** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Woodland Hills no Poke at opening**"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Store sells Weds at opening usually! If by chance nothing look for a drop from 11-2 or 5-7 here!"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "***Target Woodland Hills has 4 in line checking for an 8AM opening drop.*** <@&1425165995575742634>"
      }
    ],
    "T075": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Cochran hit today but can go multiple days so people will"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Cochran is still moving like a machine at opening. Madera went exactly when expected today check back again tomorrow"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Cochran sold at opening!**\n\n\u2022 Chaos Rising ETB \n\u2022 Mega Zygarde ex Premium Collection \n\u2022 Phantasmal "
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Cochran hit today but can go multiple days so people will"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Cochran dropped at opening!**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Pokeball Tins \n\u2022 Can check f"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "COCHRAN CONTINUES TO BE A MACHINE. Madera moved exactly when expected today."
      }
    ],
    "T035": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "X factor between 10AM-12PM if they push at guest services."
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Lomita**\n\n- SMALL batch of One Piece items should be out.\n- They should also have 1 box of CR Singles & PO Chec"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "**Target Lomita**\n\n- JUST DROPPED Pokemon items!\n- Head over ASAP to grab product.\n- Ascended Heres items available AS O"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "**Target Lomita selling as pictured | store is also letting YOU get LOOOOOPYYYYY ; get there QUICKKKKK!!!**"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "> ***TARGET LOMITA CHECKS AS WELL!*** <@&1425166140966965248>"
      },
      {
        "date": "2026-04-15",
        "type": "confirmed",
        "snippet": "**Target Lomita seemed to stocked up a bit today so another store to make sure you check in with periodically on!** \nBes"
      }
    ],
    "T114": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "SAME AS JERONIMO, THE EXACT SAME. Daily lines at opening here! Due for stock at opening if they received anything today,"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Alicia Parkway dropped at 8AM and has most items sitting still:***\n\n> - Chaos Rising Booster Bun"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia**\n\n\u2022 Chaos Rising ETB \n\u2022 Perfect Order ETB \n\u2022 OP-16 Booster Sleeves \n\u2022 OP Starter Decks\n\n<"
      },
      {
        "date": "2026-04-15",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo/Alicia Parkway**\n\n- Ascended Heroes Deluxe Pin\n- Ascended Heroes Premium Poster\n- Ascended Heroes"
      },
      {
        "date": "2026-03-04",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia**\n\u2022 OP-14 Booster Sleeves \n\u2022 Knockout Collection\n\u2022 Available now easy pick ups <@&14251660"
      },
      {
        "date": "2026-02-04",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia**\n\u2022 OP Egghead Starter Deck\n\u2022 Destined Rivals Booster Sleeves \n\u2022 Mega Evo / Phantasmal 2 P"
      }
    ],
    "T064": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Has lately been holding for Fridays here"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "May be holding for Friday"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Opening checks first. Small line expected and if nothing happens keep rotating later because weekend holds are possible "
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Mission Hills is claiming Friday only releases now** <@&1425165995575742634>"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Opening check! Expect a small line to be here. If nothing check later in the day or may hold for weekend"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "***Target Mission Hills ; 18 chairs already there anticipating a early morning opening drop! | store opens at 7AM.*** <@"
      }
    ],
    "T057": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Check at 7AM, this store is still due! It will either hit then or between 10-12 since they have not sold much. If nothin"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega opened with OP and PO sleeves** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "OPENING CHECK. Should drop either tomorrow morning at 7am, or later into the second half of the day. People will be EARL"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega dropped at opening including Prismatic Evolutions ETB will likely be done with line but can check "
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega brought out more items but line was line prior to opening** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Opening check. If nothing early then the usual afternoon route around 2-4 or late evening around 6-8:30 takes over. If n"
      }
    ],
    "T037": [
      {
        "date": "2026-02-25",
        "type": "guide",
        "snippet": "Did not seem to hit check tomorrow 9-11!"
      },
      {
        "date": "2026-02-04",
        "type": "guide",
        "snippet": "Did not seem to hit check tomorrow 9-11!"
      },
      {
        "date": "2026-01-21",
        "type": "guide",
        "snippet": "May sell tomorrow always 10-12 am allows 2 per item!"
      },
      {
        "date": "2026-01-14",
        "type": "guide",
        "snippet": "May sell a bit more tomorrow or have some items sitting!"
      },
      {
        "date": "2026-01-07",
        "type": "guide",
        "snippet": "Should sell tomorrow or Friday 10-12!"
      },
      {
        "date": "2025-12-17",
        "type": "guide",
        "snippet": "Should sell tomorrow or Friday 10-12!"
      }
    ],
    "T095": [
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "VQ in the morning around 9-10:30 usually! Selling usually happens from 10-12 here!"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "***Target Westminster/Beach line has 2 chairs outside SO FAR.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Did not end up stocking today so check back in tomorrow in case!"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "***Target Westminster/Beach virtual queue is opening now!***\n\n> - 20+ people in line.\n> - Store will sell shortly.\n> - V"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "***Target Westminster/Beach is selling to the 30-40+ people in virtual queue now.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "> - Ascended Heroes ex Boxes\n> - Ascended Heroes Pin Collection\n> - Other items are being sold as well.\n> - Blurry pic, "
      }
    ],
    "T089": [
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "12-3 remains strongest but store has been leaning towards Friday drops! Not definitive and store will usually disperse a"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Irvine Spectrum should be checked if around as well! DO NOT LEAVE TMP LINE IF YOU ARE IN IT**\n\nThis is just a c"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "12-3 check needed. Usually Wednesday here can ALSO GO EARLIER potentially!"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "12-3 check needed. Usually Wednesdays here check in!"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target Irvine Spectrum update for the day!***"
      },
      {
        "date": "2026-05-06",
        "type": "guide",
        "snippet": "12-3 check needed. Usually hits Wednesdays and Sports already stocked today"
      }
    ],
    "T090": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Holding for Friday."
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Yes they have been holding for Fridays but can still sell small amounts! Have sold items even at opening on Wednesdays s"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Always sells something Wednesdays. CHECK EARLY VQ ALL MORNING WILL GET SMOKED if they drop. They did say last week they "
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Always sells something Wednesdays. CHECK EARLY VQ ALL MORNING WILL GET SMOKED typically has been running VQ between 8-10"
      },
      {
        "date": "2026-05-06",
        "type": "guide",
        "snippet": "Always sells something Wednesdays. CHECK FOR AN EARLY VQ ALL MORNING WILL GET SMOKED."
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "***Target Costa Mesa/Harbor check in too.***\n\n- Line is starting already.\n- Confirm they don\u2019t run a VQ.\n- This store is"
      }
    ],
    "T071": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "CHECK AT OPENING IN CASE THEY SWITCH UP. If not, they will drop at their usual time, 1-4PM. You can 100% gurantee yourse"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Has not hit so pls be on it usually a mid day and evening hitter but small chance it goes in the morning"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Did not hit. Check morning then evening again if nothing"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target 12121 North Hollywood's line has increased to ~12 people, no vendor yet.***"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target 12121 North Hollywood's employee went out to announce they have stock, just waiting to put it out, likely toda"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target 12121 North Hollywood Will be selling in ABOUT a hour - store currently has 12 heads!!***"
      }
    ],
    "T091": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Hits very randomly at guest services, can sprinkle in a check if you are in the area."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Two stores and both appear quiet. Focus on 8-9:30 and 1-3 possible tomorrow or Thursday"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa/17th St**\n\n- Small crowd of people currently lingering.\n- Around 4-6 people so far, nothing confirme"
      },
      {
        "date": "2026-01-21",
        "type": "guide",
        "snippet": "Sold today lightly checked store be on them Tuesdays!"
      },
      {
        "date": "2025-12-03",
        "type": "guide",
        "snippet": "Bound to hit can be a bit random though check throughout"
      },
      {
        "date": "2025-11-19",
        "type": "guide",
        "snippet": "Bound to hit check in morning or 4-7"
      }
    ],
    "T120": [
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Santa Ana 17th Street***\n\n- Vendor on site now.\n- Currently a small line.\n- Stop by if you are near!\n\n<@&14251"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "As warned did sell today so look for another batch Thursday!"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Santa Ana 17th / Grand**\n\n\u2022 Chaos Rising Booster Sleeves \n\u2022 Perfect Order Booster Sleeves \n\u2022 Leftover still fro"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "2-5 afternoon/evening window but still check in regardless earlier in case"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Look for whatever was left from today\u2019s drop tomorrow likely opening!"
      },
      {
        "date": "2026-05-06",
        "type": "guide",
        "snippet": "2-5 window afternoons and evenings in general but check in regardless"
      }
    ],
    "T072": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Don't really have a timeframe here yet, we're working on it. Adding this store to remind you all that it is now random, "
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "Stores seem to be hitting with extra so check in both floors of the store here morning time / opening"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "**Target Encino has Ascended Hero Booster Bundles and decided to sell about 20-30 at 2 per!!**\n<@&1425165995575742634>"
      },
      {
        "date": "2026-04-15",
        "type": "guide",
        "snippet": "Sold last week on Thursday so keep eyes in case it switches up AGAIN away from Friday restock!"
      },
      {
        "date": "2026-03-04",
        "type": "guide",
        "snippet": "Check at opening / morning but likely to hit Friday morning"
      },
      {
        "date": "2026-02-25",
        "type": "guide",
        "snippet": "Check in the morning time but typically has been holding for Friday morning"
      }
    ],
    "T024": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Midweek remains their best timeframe. Most movement happens around opening, or late afternoon to night time."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Midweek remains their best stretch. Most movement happens around 9-11 after product actually reaches the store. Again We"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Gardena has 5 heads in line still waiting!**\n\nAgain heads are waiting for the chance vendor stops by as it has "
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Gardena, 14 heads total now - still no confirmation on a drop.***"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Gardena Security told people lined up that Vendor was now going to show up today - stick onto this store as it"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Gardena**\n\n- Vendor arrived right now!\n- People rushed the TCG aisle.\n- Manager said no Poke due to it.\n- They "
      }
    ],
    "T048": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Store has been holding for Fridays at opening recently. Even pulled OP that got put out on a day before Fri once a surge"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Norwalk Firestone pushed some items just after opening.***\n\n> - Chaos Rising Booster Bundle\n> - Chaos Rising S"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Both continue holding inventory. Could wait until Friday or quietly move tomorrow. Stay on top of them!```"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Both keep playing a bit. Morning first then 4-6 fallback. If they stay dry tomorrow, Friday is likely as usual"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Both continue holding inventory. Could wait until Friday or quietly move tomorrow. Stay on top of them"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone has items available from this mornings drop!**\n\n\u2022 Mega Zygarde ex Premium Collection \n\u2022 Hops "
      }
    ],
    "T015": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Daily opening check! Every morning, this store has a line. They usually sell some at 8AM then drop again between 1-3PM. "
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target West Covina/Eastland had (6) Chaos Rising Booster Bundles and Squishys.***"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "One of the most active stores in the region. Opening checks are always worthwhile and the store can move product all day"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland has 20 heads waiting for opening!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "One of the most active stores in the region. Opening checks are always worthwhile and the store can move product all day"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "CONTINUES TO BE ONE OF THE BEST RANDOM STORES. Self pushes happen constantly and opening remains valuable. ```"
      }
    ],
    "T097": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Usually every Wednesday by 1PM! Expect a line to form here early. If Garden Grove/Harbor or Fullerton/Yorba Linda hits, "
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Cypress has restocked earlier AGAIN!**\n\nStore has been leaning towards earlier drops on occasion so do not coun"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Unless it quietly sold today be READY tomorrow usually 12-2 but has on occasion hit from 9-11!"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Cypress has heads in line waiting for a drop later today as posted on guide!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Cypress line is now at about 20ish heads!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Cypress (OC)**\n\n- Going to drop in about 3-5 minutes.\n- As of now, there are about 8-10 in line.\n- People are g"
      }
    ],
    "T078": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Likely Thursday and/or Friday at opening. Might only be Fri this week if they hold for Mega Greninja's release."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Hit at opening today as posted on last nights guide"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Received product today as posted late. Opening and morning checks matter if they decide to move more"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Newbury Park**\n\n\u2022 Ascended Heroes Mega Ex Collection\n\u2022 Put out items not too long ago\n\u2022 Check in if nearby ! <@"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Sneaky opening potential but did hit today so may be more quiet!"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Received product today. Opening and morning checks deserve attention if they decide to move additional inventory."
      }
    ],
    "T003": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been stocking randomly! Either opening or 11AM-1PM. Gets cleaned out very quickly."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Same familiar setup. Opening then 9:30-11:30. Both have been finding ways to stock multiple times every week. ```"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "One of the better stores for multiple waves. Opening is the best first shot, but 9-11 and 1-3 also matter. One check her"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Eagle Rock line prior to opening!**"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Eagle Rock sold only Mega Zygarde ex Premium Collection, make sure to update Glendale Galleria as well!** <@&14"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Same familiar setup. Opening then 9:30-11:30. Both have been finding ways to stock multiple times every week. Glendale m"
      }
    ],
    "T167": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Holding for Friday."
      },
      {
        "date": "2026-01-21",
        "type": "guide",
        "snippet": "Check morning time here!"
      },
      {
        "date": "2026-01-21",
        "type": "confirmed",
        "snippet": "**Target Santa Ana Bristol**\n\u2022 OP Vol. 6 Illustration Boxes \n\u2022 OP Egghead Starter Deck\n\u2022 Both available at guest service"
      },
      {
        "date": "2026-01-14",
        "type": "guide",
        "snippet": "Check morning time for leftovers"
      },
      {
        "date": "2026-01-07",
        "type": "guide",
        "snippet": "Check morning time here 9-12!"
      },
      {
        "date": "2025-12-17",
        "type": "guide",
        "snippet": "Check morning time here 9-12!"
      }
    ],
    "T026": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been hitting almost daily! Check at opening for today's items + between 2-4PM for whatever UPS delivers midday at GS"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Hawthorne/120th items.***"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "As posted in guide last night sold at opening today"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Did not sell today so please please check at opening and form 1-3"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "As posted in guide last night sold at opening today"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "May have pushed items today at opening but check again tomorrow in case! Typically drops opening or 8-10ish here"
      }
    ],
    "T063": [
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer has Perfect Order Single Blisters**"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer**\n\n\u2022 As always store is playing games with TCG\n\u2022 Product is confirmed to be here at guest servi"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Normally I\u2019d say Friday hold, but this store feels ready to throw a curveball to avoid crowds. Check it"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Would tell you holding for Friday but store seems primed to throw a curveball to avoid commotion so checks"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "**Target Van Nuys/Raymer**\n\n- UPS delivered **7** Excel boxes today.\n- No vendor is present to stock the items.\n- Manage"
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "Random small items here but may not sell very random and sporadic"
      }
    ],
    "T043": [
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Lakewood going with Chaos Rising 3 Pack and Lumiose City Mini Tins**"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "MORNING VQ OR DROP AGAIN. People are arriving absurdly early store will either drop items fcfs or take a VQ"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Lakewood is now selling as they do every Wednesday!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Lakewood will have OP-16 Booster Sleeves and Perfect Order Blisters leftover** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Updated above drop tomorrow morning"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Lakewood**\n\n\u2022 Store typically drops Wednesday mornings \n\u2022 Line is here and is receiving stock now\n\u2022 Be here and"
      }
    ],
    "T116": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Same situation as Signal Hill. Last week, Signal hit first, then Seal went after, which is usually how it goes down. Bot"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Seal Beach seems to have hit yesteday!** \n\nKeep eyes on **Carson Mall** for a possible drop!\n\n<@&14251661409669"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Seal Beach has a line forming right now.***\n\n- At 10:25, there were 9 people.\n- Now, there are about 12 people"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Seal Beach's vendor arrived, and pushed the U-Boat/Cart to the back. They are gearing up to drop! 15+ in line "
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Seal Beach is stocked & selling now!*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Check in for a sneaky drop in case tomorrow 8-10!"
      }
    ],
    "T132": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Opening check! Did not hit today. Been pushing at opening and throughout the day, between 1-3PM mainly. Lines form outsi"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Opening through 10AM remains the catch window especially since it stayed quiet today but store may be holding a bit"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Both feel like they may be saving more for Friday. Light checks tomorrow but don\u2019t be shocked if they hold"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Fontana Summit sold a quick pack!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Opening through 10AM remains the catch window especially since it stayed quiet today"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "BOTH STORES FEEL LIKE THEY HAVE MORE COMING FOR FRIDAY. Light checks tomorrow but don't be shocked if they're holding."
      }
    ],
    "T137": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Reminder, they switched to random drop times now. Not as likely for tomorrow at opening, but they should sell at some po"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "MAJOR WEDNESDAY MORNING LOCATION. Expect people camping ridiculously early"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Rancho Cucamonga line has started up for tomorrow\u2019s weekly Wednesday drop! Warned in the message above to be re"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Rancho Cucamonga has 6 in line now.***"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Rancho Cucamonga is claiming no opening drop**\n\nKeep eyes for OP and expect Poke later today or these next days"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Wednesday drop store with long lines before it moves has already been updated"
      }
    ],
    "T136": [
      {
        "date": "2026-03-11",
        "type": "confirmed",
        "snippet": "**Target 4200 E Ontario**\n\n- One Piece EB-03 Singles\n- Destined Rivals Sleeved Boosters\n- Leftovers from yesterday's pin"
      },
      {
        "date": "2026-02-25",
        "type": "guide",
        "snippet": "Typically the West locations (not Mills) can hit but check in with both all morning"
      },
      {
        "date": "2025-12-10",
        "type": "confirmed",
        "snippet": "**Target Ontario/4th St**\n\n- Mega Venasaur ex Box\n- Mega Kangaskhan ex Box\n- 2025 Collector\u2019s Lunch Box\n\n<@&142516605249"
      }
    ],
    "T029": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Ask at GS! This store tends to hold in the back and sell selectively. Usually between 9-11AM."
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Inglewood La Brea has Phantasmal Flames Mini Portfolios sitting**"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Ask at GS and this store tends to hold in the back and sell selectively"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Ask at GS and this store tends to hold in the back and sell selectively"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Still very M/W/F usually ask at GS best time is 11-2pm if not morning"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Inglewood/La Brea**\n\n- Chaos Rising Singles\n- Phantasmal Mini Portfolios\n- Dropped the rest yesterday.\n- Leftov"
      }
    ],
    "T111": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "STILL A WEDNESDAY STORE. If nothing happens at opening, make sure to circle back later around 1-4 because store will sel"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "STILL A WEDNESDAY STORE. If nothing happens at opening make sure to circle back later around 1-4 because store will sell"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target La Paz update for tomorrow.***"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Could hold for Friday but still check tomorrow. May sell at opening then again Friday!"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target La Paz is selling this morning!**\n\n\u2022 Ascended Heroes Mega Ex Collection\n\u2022 Mega Zygarde ex Premium Collection\n\u2022 "
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target La Paz had stock out and set up but is playing games heads will wait it out here!** <@&1425166056766439528>"
      }
    ],
    "T093": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Likely hit today alongside Adams so it's probably a skip. Feel free to check in though."
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Still appears quiet. Focus on 8-9:30 and 1-3 possible tomorrow or Thursday"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Didn\u2019t seem to stock yet. Keep checks around 8-9:30 and 1-3"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Restocked this morning as warned in guide"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Did not seem to stock. Check 8-9:30 and 1-3"
      },
      {
        "date": "2026-05-06",
        "type": "guide",
        "snippet": "Did not seem to stock so check 8-9:30 and 1-3ish here"
      }
    ],
    "T066": [
      {
        "date": "2026-05-06",
        "type": "guide",
        "snippet": "Random lately. Morning, 12:30-2, or 7-9 all valid. DAILY CHECK STORE as seen today"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "**Target Granada Hills**\n\n- Excel shipment is arriving right now.\n- They are passing tix out to those in line.\n- [CLICK "
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "***Target Granada Hills is STILL passing tickets out at guest services. 40+ in line now.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "***Target Granada Hills should sell within 25-45 minutes, cart is gone from guest services meaning they are stocking it "
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "***Target Granada Hills is selling to those with tickets now.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "STILL DAILY. Opening 12:30-2 or even 7-9pm just catch it"
      }
    ],
    "T059": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Dropped today but they have been slow recently. Expecting another drop tomorrow. Check 12-1 and 4-5 tomorrow."
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Wilshire is due! Checks are needed.*** <@&1425166183841140873> <@&1425625697141133334>"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Santa Monica Wilshire**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Just put out fresh!\n\u2022 Expect limited stock her"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Santa Monica Wilshire has Phantasmal Flames Mini Portfolio and Chaos Rising Booster Sleeves still available**"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Wilshire is another sleeper. 2 in line but not confirmed yet. Best place t gamble though!*** <@&1"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Wilshire was such a sleeper, selling now!*** <@&1425166183841140873> <@&1425625697141133334>"
      }
    ],
    "T023": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Weds AM continues to be their strongest pattern. Likely received tonight so check at opening, they'll either push at 7AM"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Wednesday mornings continue to be their strongest pattern. If not right at opening then usually shortly after once they "
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Westchester has products available too!*** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Westchester is still going with OP-13 & brought out more Chaos Rising items too. Easy W after Culver Mall.***"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Inglewood/La Brea is still has OP-13 Singles! Easy 1\u20132 with Target Culver Mall & Target LA/Westchester.***"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Opening and right after opening stay strongest. Wednesday 7AM or shortly after is when it\u2019s been hitting !"
      }
    ],
    "T117": [
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Hit today as posted!"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "9-11 or slightly later store does not get enough love should hit either tomorrow or is holding for a bigger Friday drop"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "9-11 or a bit after. Keep in Fullerton rotation but may be Thursday here as well"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "9-11 or a bit after. Keep in Fullerton rotation but may be Thursday"
      },
      {
        "date": "2026-05-06",
        "type": "guide",
        "snippet": "Check 9-11 or a bit after. Keep with Fully rotation but may be Thursday"
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "Later week store quick check but has been inconsistent so need to get back on it besides Fridays"
      }
    ],
    "T121": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Guest services will sell when ready and a line will form by opening. Usually, they push stock by 10:30AM-1PM recently. D"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Eastvale is still due!**\n\n\u2022 Likely heads are here already\n\u2022 People will just wait it out as other stores have s"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Morning remains strongest and turnout should be heavy tomorrow as Corona hit today!"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Eastvale had a SNEAKY drop, similar items as Norco/Corona about 15 minutes ago**\n\nThis was AFTER store claimed "
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Did not hit today so expect heavy heads here early who will wait it out tomorrow until it hits!"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "***Target Eastvale has some scraps.*** <@&1425166052496642260>"
      }
    ],
    "T106": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Hit today as posted!"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Has leaned Friday hard lately but still deserves a quick look tomorrow in case only had portfolios today"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Has shifted heavily toward Fridays lately but still deserves a quick look tomorrow."
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Can go Wednesdays but could be Thursday. Keep in rotation after 1-2 all the way 6-8"
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "Typically hits 1-3 with lines a bit earlier but did sell early last week 8-9am. Check in but may revert back to afternoo"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "**Target Fullerton/Yorba Linda**\n\n- NO DROP YET, going down soon!\n- Not cooked, only 8 people as of now.\n- Head over if "
      }
    ],
    "T074": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Supposedly still due for stock! Could be a sneaky 7AM check if you're willing to risk it. If not, check throughout the d"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "VQ today that got cancelled so look for a random drop tomorrow! People will be here at opening"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Store has leaned Wednesday lately so watch for a morning VQ. Actual stocking usually happens later in the day"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "VQ today so may be a bit more quiet tomorrow besides held back stock"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Store has been leaning toward Wednesdays so look for a vq in the morning! Stocking usually later in the day"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Valencia**\n \nSelling now :\n\n- Chaos Rising Booster Bundles \n- Chaos Rising 3PK Blister \n- Stock is in baskets a"
      }
    ],
    "T104": [
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Euclid sold as warned but light stock. Lincoln and Hills can both sell tomorrow earlier or hold for Friday, so check in"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "Euclid morning/12-2 as store confirmed to be holding! Lincoln later usually in the week but both can switch so keep eyes"
      },
      {
        "date": "2026-05-06",
        "type": "guide",
        "snippet": "Euclid morning/12-2 Lincoln later usually. Can switch at both but keep eyes sleeper stores"
      },
      {
        "date": "2026-04-29",
        "type": "guide",
        "snippet": "Euclid morning/12-2 Lincoln later usually"
      },
      {
        "date": "2026-04-22",
        "type": "guide",
        "snippet": "Two-storea. Euclid morning or 12-2. Lincoln can go late but both may hold for Friday/weekend"
      },
      {
        "date": "2026-04-15",
        "type": "guide",
        "snippet": "Two stores here check with this Lincoln tomorrow even LATE into the evening. Check with Euclid in the morning as well or"
      }
    ],
    "T040": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Giving this store 1 more chance to sell at opening which they have done the last few weeks. Already a line at Walmart Pi"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Similar setup to Santa Fe Springs. If nothing tonight then tomorrow becomes the focus"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Same idea as SFS please check in as old vendor should be back and may hit early!```"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Similar setup to Santa Fe Springs. If nothing tonight then tomorrow becomes the focus"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Similar to SFS above but may have quietly moved product early this morning. Can check in as they likely have more but ma"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera finally sold!**\n\n\u2022 6 Prismatic Evolutions ETB \n\u2022 Perfect Order Booster Sleeves Booster Sleeves \n\u2022 P"
      }
    ],
    "T103": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Opening checks! They sell their previous morning's shipment each day at opening AND they still allow 2 per SKU. Sold the"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Check 8-10 near tech and ask directly. Vendor should hit either tomorrow or Thursday and with no release this week there"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Anaheim Hills sold at opening as warned in guide!**\n\nMake your way over as they still have OP-13 and more ! <@&"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Anaheim Hills has leftovers from this mornings drop that was posted!**\n\n\u2022 Mega Moonlight Tins \n\u2022 Chaos Rising B"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Check 8-10 near tech and ask directly. Vendor should hit either tomorrow or Thursday!"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Check around 8-10 by tech and ask directly about restock warned last week as well and hit!"
      }
    ],
    "T032": [
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Two SOLID checks in the morning very often missed pls check in and update and dm me if you do!"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "**Target Rolling Hills**\n\n- Phantasmal Flames Mini Portfolios\n- Just restocked a few other items too.\n- Do not forget to"
      }
    ],
    "T016": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Tends to hit openings and Weds usually so KEEP EYES"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "CHECK AT OPENING. Heads will be there and the line will likely wait it out to see if vendor starts here"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "CHECK AT OPENING HEADS WILL BE HERE AND LINE WILL WAIT IT OUT"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Last week pushed to Thursday but typically a Wednesday morning hitter here! If not tomorrow then should sell Thursday. U"
      },
      {
        "date": "2026-05-20",
        "type": "guide",
        "snippet": "HIGH chance for a morning drop expect heads before opening and line to be here waiting!"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Hit last week as well check at opening/morning time!"
      }
    ],
    "T165": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sells daily at this point. Been between 1-3 the last week or so but don't count out an earlier drop. Ask guest services,"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Usually strongest M/W/F afternoons. Opening check first then rerun 12-2 if nothing develops last week hit M/T but should"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Usually strongest M/W/F afternoons. Opening check first then rerun 12-3 if nothing develops last week hit at 12"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Usually M/W/F afternoons here. Opening checks here and see if staff state anything about a drop! If nothing swing back 1"
      },
      {
        "date": "2026-05-13",
        "type": "guide",
        "snippet": "Hits M/W/F here typically afternoon! Check morning time and expect a line to slowly build throughout the morning!"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "***TARGET BREA IS DROPPING, ONLY 3-5 IN LINE.*** <@&1425166056766439528>"
      }
    ],
    "T105": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sold today so it seems unlikely that they will sell tomorrow."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Has only sold OP it seems so keep eyes morning time and 10-12 BUT check tonight as well!"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Anaheim Euclid has 15+ heads waiting for opening!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Euclid remains strongest in the morning through 12-2 and has even opened with stock before IF it doesn\u2019t hit tonight"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Anaheim/Euclid**\n\n- Dropping right now at 8:50PM!\n- Line is about to get out of the door.\n- We warned you to li"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "***Target Anaheim/Euclid will let go of the rest of their stock at opening tomorrow.*** <@&1425166056766439528>"
      }
    ],
    "T077": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Best checks remain morning and 11AM-2PM but did sell a bit heavier today"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Moorpark already dropped around 11:45. We'll be on these stores tomorrow. Madera will sell by 11-12 and Moorpa"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Random activity continues. Best checks remain morning and 11AM-2PM as they did not sell today!"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "***Target Moorpark dropped some lighter products.***\n\n> - Moonlight Tins\n> - Luminous City Mini Tins\n> - Stock is at gue"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "***Target Moorpark is dropping now!*** <@&1488964203103522997>"
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Random activity continues here. Best checks are morning times and 11am-2pm!```"
      }
    ],
    "T061": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Still a slept on check for 8AM! They've been selling between 8-9AM at guest services recently."
      },
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Posted in the LA guide; reminder to check at 8AM opening."
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Glendale Galleria only has Chaos Singles right now.***"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Glendale Galleria shipment will be hitting soon so check in and ask if they will be selling or holding until Fr"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Similar to Culver Mall where people linger all morning and wait for shipment. 9:30-12 is still the main window like you "
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Similar vibe to Culver Mall where people will be lingering all morning. Strongest window remains around 9:30-12 as you s"
      }
    ],
    "T041": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Unless it surprises everyone tonight, check at opening. Last week, they held a large amount of stock and sold Fri aftern"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Unless it surprises everyone tonight expect action tomorrow morning. Most likely windows remain early morning or 10-12"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Santa Fe Springs needs to be checked later!**"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "If it does not sell late tonight this becomes a morning priority. 8-10 and expect heads waiting"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Unless it surprises everyone tonight expect action tomorrow morning. Most likely windows remain early morning or 10-12"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Santa Fe Springs no Poke at opening**"
      }
    ],
    "T058": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "It has been consistent for the afternoon time recently! 3-5PM, closer to 4-5 usually if recent trends follow."
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Santa Monica/Broadway**\n\n> - Sold Ascended Heroes ex Boxes a few ago.\n> - They still have smaller items availab"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "BOTH sold a bit today. Opening checks then another hard sweep around 9-11 but may hit later in week"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Broadway update.***"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Santa Monica Broadway dropped their shipment as warned and may have Phantasmal Flames Mini Portfolio left** <@&"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "BOTH deserve attention tomorrow. Opening checks then another hard sweep around 9-11"
      }
    ],
    "T168": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Unsure if this store has hit, check it out after Chino/Philadelphia. Ask at guest services."
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Great morning options at Grand since Philly hit yesterday. Focus 8-11."
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Great morning options since neither has really stocked. Focus 8-11."
      },
      {
        "date": "2026-05-27",
        "type": "guide",
        "snippet": "Having not stocked are great options for morning checks from 8-11! Philly can be random and sell later in the day too"
      },
      {
        "date": "2026-04-01",
        "type": "confirmed",
        "snippet": "**Target Grand Canyon**\n\u2022 Perfect Order ETB \n\u2022 Available at the front desk\n\u2022 2 per person here <@&1425166385163669608>"
      }
    ],
    "T087": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sold today so it's not as likely that they drop tmrw. Feel free to check at opening which is around when they sold today"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Oxnard Collection**\n\n\u2022 Vendor is here on site now!\n\u2022 Only __5__ heads are currently in line\n\u2022 Make your way ove"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Oxnard Collection Item Update!**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 First Partner Illustration Series 2 \n"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Oxnard Collection has heads in line for a round 2!** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Oxnard Collection is selling OP-13 sleeves!** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Morning pass then evening sweep. If nothing tomorrow, Friday opening becomes stronger"
      }
    ],
    "T081": [
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Ventura/Main St has 12-16 in line.*** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Ventura Main Street has heads in line waiting for a drop!** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Ventura Main St selling as pictured for reference to the line.***"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Ventura/Main St still has OP-13 and OP-16 Singles. Pull up!*** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Ventura/Main St is STILL GOING with OP-13 Singles, 2+ hours after the initial ping. [Was also updated an hour "
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Same flow as Collection. Be ready for morning lines at both to see if they fire"
      }
    ],
    "T127": [
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Riverside/Arlington**\n\n- Chaos Rising 3-Pack Blister\n- Chaos Rising Booster Bundle\n- Mega Zygarde ex Premium Co"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "BOTH HAVE BEEN UNPREDICTABLE. Expect people checking early and hanging around. Morning remains the strongest opportunity"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Riverside Arlington**\n\n\u2022 17 heads waiting here now for vendor\n\u2022 Not confirmed yet but likely here too!\n\u2022 Make y"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "**Target Riverside/Arlington**\n\n- Ascended Heroes 2-Pack Blisters\n- Mega Evolutions 2-Pack Blisters too!\n- Other items a"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "**Target Riverside Arlington**\n\n- Ascended Heroes ETB\n- Ascended Heroes Mini Tin\n- Ascended Heroes 2-Pack Blister\n- Firs"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "**Target Arlington update**\n\u2022 Ascended Heroes 2 Pack Blister \n\u2022 Mega Evo / Phantasmal 2 Pack Blister \n\u2022 OP DP-10 Double "
      }
    ],
    "T094": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Hit today great updates and catches!"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Sleeper OC store of the day. Does not seem to have sold and random drops are the new pattern, so check in"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Random drops here so PLS keep in your rotation! Usually would be morning time"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Sleeper of the day for OC! Store has not seemed to sell and is random drops now so CHECK IN"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall**\n\n\u2022 Prismatic Evolutions ETB \n\u2022 Out now at guest services!\n\u2022 Make your way over another one w"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target Westminster Brookhurst***\n\n- Vendor is there NOW.\n- Currently there is 15+ people in line.\n- Stop by if near -"
      }
    ],
    "T115": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "As a smaller store, they are prone to selling tmrw at opening. They did not have much today. Sleeper check! If not, rota"
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "Check opening and throughout the morning"
      },
      {
        "date": "2026-06-03",
        "type": "guide",
        "snippet": "Check in at opening and throughout the morning!"
      }
    ],
    "T017": [
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Has not hit and on occasion will hit in the morning so keep eyes! May also hold here but be ready"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target N Azusa has a long line built up**\n\nNo confirmation of stock yet but stay tuned in case they sell Poke or if th"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Has not hit and on occasion will hit in the morning so keep eyes! May also hold here but be ready"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "**Target North Azusa**\n\n- 7-9 in line so far!!\n- Vendor should stock shortly.\n- People are going to show up QUICKLY.\n- H"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target North Azusa is selling products now!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target North Azusa has AH Booster Bundles, 2-Packs, PO Singles, and more. The current line will account for most of t"
      }
    ],
    "T170": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "If they didn't drop at opening today, they will sell at opening tomorrow. One of the last 2 per SKU stores out there, do"
      },
      {
        "date": "2026-06-10",
        "type": "guide",
        "snippet": "Look for a morning drop here!"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Goleta**\n\n- Ascended Heroes Deluxe Pin still going!\n- Just sold Prismatic ETBs as well.\n- Still solid Pin stock"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Goleta update above**"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "***Target Goleta is likely around opening too*** <@&1488964203103522997>"
      }
    ],
    "T126": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Hit today, so it seems unlikely they will sell tomorrow. They will go on Thurs or Fri."
      },
      {
        "date": "2026-06-17",
        "type": "guide",
        "snippet": "All have been all over the place. Expect early checks and people hanging around. Morning is best but they can sell any t"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside (and other Riverside Targets) will be great stores to check and rotate today!** <@&142516605249"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside sold at opening with a larger line!**\n\n\u2022 Ascended Heroes Premium Poster Collection \n\u2022 Hops Zaci"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside only allowed 1 item per person so going strong!** \nPosters should be out of stock though \n<@&14"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Tyler**"
      }
    ],
    "T050": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "They will drop again this week! The 2nd drop is usually easier than the Mon one to catch, and hits randomly Weds or Thur"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Did not drop on Monday so look for a VQ to go up at opening be ready and CHECK"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Cerritos South Street had 20 heads waiting for 8am opening as people are expecting a VQ to be taken! Also poste"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Cerritos South Street took their VQ as warned plenty of times!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Cerritos South Street has a VQ up and running but has not confirmed vendor!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Cerritos South stock is here!** <@&1425166140966965248>"
      }
    ],
    "T159": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Weds frequent hitter. People camp out here because they receive solid stock AND hit every Weds!"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Balboa as of 8:25 AM!***\n\n> - Selling right now.\n> - Items are posted above.\n> - Store was posted in last nigh"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "The place to be tomorrow and could end up being as big as Encinitas."
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Balboa is selling now for San Diego!** <@&1488964167997063309>"
      },
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "***Target Balboa/San Diego is selling to their line now.*** <@&1488964167997063309>"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target Balboa San Diego***\nAs stated per our guide :\n\n- Ascended Hero Ex Boxes\n- Ascended Hero Pin Collection \n- Sold"
      }
    ],
    "T148": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "M/W/F schededule normally, but schedule this week, it seems random. People will start crowding towards the afternoon and"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "M/W/F pattern store with decent stock. Get in line early."
      }
    ],
    "T162": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "High chance for tom, Balboa peeps jump here when they hear the news. hits randomly. Just go after Balboa and wait it out"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Stayed quiet today so chances look strong for tomorrow. Timing can still be random."
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target Othello checks today!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "***Target Othello (SD) has Ascended Heroes 2-Pack Blisters and Stellar Crown 3-Pack Blisters.*** <@&1488964167997063309>"
      }
    ],
    "T146": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Vendor day tom or Thu. Randomly drops but trending Fri afternoon for almost 3 weeks now. People have been prioritizing o"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Poway should be restocking!** <@&1488964167997063309>"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Vendor day should be tomorrow or Thursday. Can also randomly drop when the store isn't busy."
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Poway vendor should be here so expect people to spawn over from Mira Mesa!** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-15",
        "type": "confirmed",
        "snippet": "**Target Poway**\n\u2022 Store is stocking up now!\n\u2022 Not a heavy amount of boxes \n\u2022 Expect sports and keep eyes / be ready for"
      }
    ],
    "T158": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Ligher drop today! Hits consistently and their regular large drop day is Weds so might be good tom. Check opening and 11"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Noon into afternoon remains strongest. Usually the next stop after El Cajon."
      }
    ],
    "T156": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "People linger in the toy section to avoid the area where the vendor stocks because they hate lines. Sells randomly but i"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Dropped today but Wednesday is still one of its regular restock days."
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "***Target Mission Valley! Check in!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "**Target Mission Valley**\n\n- Stop by if close for Hop's Zacian ex Box.\n- That is the only SKU that is available now.\n- W"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "**Target Mission Valley**\n\n- Excel boxes have been spotted.\n- Very small line so far, go ASAP.\n- Likely to stock within "
      }
    ],
    "T161": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Usually sells when they want at opening. Long lines most mornings. As long as you arrive a bit early, you should be good"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Didn't drop today and could be due tomorrow. Expect a long line."
      }
    ],
    "T150": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Hits very randomly, receives light stock, and does 2 per SKU. It is only great for first few people to hit. Tougher catc"
      },
      {
        "date": "2026-06-24",
        "type": "guide",
        "snippet": "Dropped today but Wednesday is one of its normal restock days.```"
      }
    ],
    "T054": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Been selling at 7AM recently! Sold at opening today! Double back tmrw between 7-9:30AM."
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target 7th/Figueroa (DTLA)**\n\n- Sold a few First Partner Series 2!\n- Very limited, had less than 10 avail.\n- Phantasma"
      }
    ],
    "T060": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Only hit with a small amount of OP today. Check between opening and 10AM, UPS delivers in the morning."
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Hollywood Galaxy!**\n\n\u2022 Store restocked this morning as opposed to Friday as they stated\n\u2022 This means store need"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "***Target Hollywood/Galaxy stocks Pokemon now. They have Vileplume Blisters currently.*** <@&1425625697141133334>"
      }
    ],
    "T019": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sleeper store that sells between 8-11AM almost daily."
      }
    ],
    "T033": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sells almost daily at GS by 12-1PM. They will be on everyday's guide. A line forms outside of the store until UPS delive"
      },
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "MORNING VQ OR DROP AGAIN. People are arriving absurdly early store will either drop items FCFS or take a VQ! This is @vo"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Carson Mall**\n\n\u2022 Prismatic Evolutions ETB \n\u2022 Chaos Rising Booster Bundle \n\u2022 Other smaller items as well! Has be"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Carson Mall is still selling just selectively as usual here** <@&1425166183841140873>"
      },
      {
        "date": "2025-12-03",
        "type": "confirmed",
        "snippet": "**Target Lakewood Mall**\n\n- Mega Team Tins (FEW)\n- Both Black Friday ex Boxes\n- Surging/Twilight 2-Pk Blister\n- Mimikyu "
      }
    ],
    "T164": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Stocked Monday, likely to stock again Thursday or Friday. Unlikely for tomorrow!```"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Commerce has some items if searching including Disney Topps Chrome!** <@&1425625697141133334> <@&14251661409669"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Commerce**\n\n\u2022 Prismatic Evolutions ETB\n\u2022 Stars had to perfectly align to ping this store\n\u2022 Only about 10 boxes "
      }
    ],
    "T166": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Member informed us they've been pushing DAILY at guest services in the morning, at opening or between 10-1. Usually cons"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target Buena Park and Target Fullerton/Malvern are solid checks this afternoon!*** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "***Target Buena Park for reference sold Ascended Hero Ex Boxes from 2-3 & Phantasmal Flames Mini Binders.***"
      },
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "**Target Buena Park/Orangethorpe**\n\n- Vendor is currently restocking!\n- Expect Pokemon items to be sold.\n- AH ETB, Poste"
      },
      {
        "date": "2026-04-15",
        "type": "confirmed",
        "snippet": "**Target Buena Park posted a sign saying no drop :/ ** <@&1425166056766439528>"
      },
      {
        "date": "2026-04-08",
        "type": "confirmed",
        "snippet": "***Target Buena Park has OP-DP-10 right now!*** <@&1425166056766439528>"
      }
    ],
    "T101": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Fridays and some Wednesdays here! Usually at opening or around 11AM-1PM. They sell at guest services and it's a total sl"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Orange Chapman added as well and should be checked!** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Orange Chapman will be a good check for anyone around especially if Barranca has no movement yet!** <@&14251660"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Orange Chapman has Phantasmal Flames Mini Portfolio available now for those looking!** <@&1425166056766439528>"
      }
    ],
    "T096": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sleeper for Weds/Thursday. On Fri, they run VQ. On Weds or Thurs, they selectively sell at guest services starting aroun"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Brookhurst**\n\n\u2022 Line is formed up here anticipating a restock  \n\u2022 Was posted on guide here as well"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Brookhurst**\n\n\u2022 Vendor is here confirmed \n\u2022 Exact product is not confirmed yet \n\u2022 Make your way ov"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Brookhurst***\n\nSelling now to the line of 8+ :\n\n- Ascended Hero Ex Boxes\n- Chaos Rising ETB\u2019s\n- Me"
      },
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "> ***Target Garden Grove/Harbor is another store to keep eyes on for a virtual queue. CHECK NOW!*** <@&14251660567664395"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "**Target Garden Grove/Harbor**\n\n- Selling Pokemon right now!\n- Ascended Heroes Booster Bundles\n- Other items SHOULD be s"
      }
    ],
    "T079": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Sold last Weds at opening! Usually sells at 7AM so it's a great check tomorrow at opening. Don't count this store out!"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "**Target Camarillo dropped at opening today!**\n\n\u2022 Mega Moonlight Tins \n\u2022 OP-16 Booster Sleeves \n\u2022 Lumiose City Mini Tins"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "***Target Camarillo now selling Ascended Hero Ex Boxes - Unsure if stock as pulling from the back!!*** <@&14889642031035"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "**Target Camarillo seems to have gotten a restock today** \nWas cleaned quickly look for a bigger drop Friday still \n<@&1"
      },
      {
        "date": "2026-04-29",
        "type": "confirmed",
        "snippet": "**Target Camarillo**\n- Vendor is there and stocking.\n- Not sure of line exactly as of now ; stop by if you are near.\n<@&"
      },
      {
        "date": "2025-12-03",
        "type": "confirmed",
        "snippet": "**Target Camarillo is still sitting from yesterday's ping too!**\n\n- Destined Rivals Sleeved Booster\n- Mega Evolutions Sl"
      }
    ],
    "T169": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Check for the 2nd round of stock this week around opening. Expect a line here!"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia just some blisters at guest services today**"
      },
      {
        "date": "2026-06-03",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia**\n\n\u2022 Chaos Rising 3 Pack \n\u2022 Chaos Rising Blister Pack \n\u2022 Chaos Rising Booster Sleeves \n\u2022 Per"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia finally stocked!**\n\u2022 First Partner Illustration Box \n\u2022 Ascended Heroes Booster Bundles \n\u2022 Pl"
      },
      {
        "date": "2026-05-13",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia is OOS of Poke but has Dragon Ball and One Piece items!** <@&1425166052496642260>"
      }
    ],
    "T128": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Has hit multiple days in a row so check tomorrow. Tues/Weds & Fri are frequent drop days. 9:30-12:00 usually!"
      },
      {
        "date": "2025-10-22",
        "type": "confirmed",
        "snippet": "**Target Riverside - Canyon Springs** \n\u2022 Mega ETB \n\u2022 Checklane Blisters \n\u2022 Both available now get going IE <@&1425166052"
      }
    ],
    "T125": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Seems VERY likely for a Thursday drop! You can still check tomorrow between 2-5PM which is their daily drop time when it"
      }
    ],
    "T154": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "Still dry today, likely to hit tom. Expect heavy lines, people send it over after Balboa sometimes. Easy route though!"
      },
      {
        "date": "2026-05-27",
        "type": "confirmed",
        "snippet": "**Target Eastlake Chula Vista has a line of 20 people waiting for a drop!**\n\nIf you have seen these juiced shipments the"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "**Target Eastlake**\n\n- Vendor is here now!\n- Restock is going down.\n- Just starting \u2014 we\u2019ll update items soon.\n\n<@&14889"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "***Target Eastlake's vendor took their lunch break. They will finish stocking after, 40 in line.***"
      }
    ],
    "T153": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "The past few weeks, they have been dropping Mon to Wed, so check at opening, as they might still have something tom. Peo"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "***Target Mira Mesa just dropped a small restock. Go if you're close by!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa going with OP-13 and letting people loop around!** <@&1488964167997063309>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Mira Mesa/SD has a line of 18 outside. It should hit shortly!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-06-24",
        "type": "confirmed",
        "snippet": "***Target Mira Mesa is selling, and has some product left, even with the line.***\n\n> - Chaos Rising Singles\n> - Chaos Ri"
      },
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa should have a line forming up as well!** <@&1488964167997063309>"
      }
    ],
    "T149": [
      {
        "date": "2026-07-01",
        "type": "guide",
        "snippet": "In play as well, just random timing. We'll work on gathering more info here.```"
      }
    ],
    "T109": [
      {
        "date": "2026-06-17",
        "type": "confirmed",
        "snippet": "**Target La Habr\u00e1 is selling One Piece!** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "**Target La Habra**\n\n- Hitting now, Costco crowd spawned.\n- Line is extremely deep so do not go.\n- Just posting for awar"
      },
      {
        "date": "2025-10-08",
        "type": "confirmed",
        "snippet": "**Target La Habra VQ Update.**"
      }
    ],
    "T086": [
      {
        "date": "2026-02-25",
        "type": "confirmed",
        "snippet": "**Target Northridge Corbin has Riftbound Origins + Spiritforged!** <@&1425165995575742634>"
      },
      {
        "date": "2025-11-19",
        "type": "confirmed",
        "snippet": "**Target Northridge Corbin sold a few Mimikyu boxes that sold out with a few heads in line posting for awareness**"
      }
    ],
    "T144": [
      {
        "date": "2025-12-03",
        "type": "confirmed",
        "snippet": "**Target Cathedral City** \n\u2022 Surging/Twilight 2 Pack Blister\n\u2022 Journey Together Sleeves \n\u2022 Both available on display sit"
      }
    ],
    "T142": [
      {
        "date": "2025-12-17",
        "type": "confirmed",
        "snippet": "**Target La Quinta**\n\n- Mega Venasaur ex Box\n- 2025 Collector\u2019s Lunch Boxes\n- 2 of each SKU per person.\n\n<@&142516605249"
      }
    ],
    "T036": [
      {
        "date": "2026-02-04",
        "type": "confirmed",
        "snippet": "**Target San Pedro has a VQ going now!** <@&1425166183841140873>"
      },
      {
        "date": "2026-01-21",
        "type": "confirmed",
        "snippet": "**Target San Pedro has OP-14 Booster Sleeves** <@&1425166183841140873>"
      }
    ],
    "T130": [
      {
        "date": "2026-02-25",
        "type": "confirmed",
        "snippet": "**Target Hesperia Main Street**\n\n- Restocking tons of items now!\n- Get here ASAP, line is not deep.\n- Will finish stocki"
      }
    ],
    "T108": [
      {
        "date": "2026-04-22",
        "type": "confirmed",
        "snippet": "**Target Fullerton Malvern dropped a few Ascended Heroes Booster Bundles today!**\nMembers proxy accidentally confused wi"
      },
      {
        "date": "2026-02-25",
        "type": "confirmed",
        "snippet": "**Target Fullerton Malvern**\n\n- Charizard ex Tin\n- Ascended Heroes 2-Pack\n- Ascended Heroes Mini Tins\n- Tons of other as"
      }
    ],
    "T143": [
      {
        "date": "2026-03-11",
        "type": "confirmed",
        "snippet": "**Target Palm Desert is restocking now!** <@&1425166052496642260>"
      },
      {
        "date": "2026-03-04",
        "type": "confirmed",
        "snippet": "**Target Palm Desert**\n\n- Restocked AH closer to opening.\n- However, they do have other items.\n- PF & ME Coin Blisters a"
      }
    ],
    "T140": [
      {
        "date": "2026-05-06",
        "type": "confirmed",
        "snippet": "**Target Murrieta Cal Oaks**\n\u2022 Line has been here since earlier \n\u2022 25-30+ heads in line \n\u2022 Vendor is now here about to s"
      }
    ],
    "T147": [
      {
        "date": "2026-05-20",
        "type": "confirmed",
        "snippet": "***Target Santee is dropping now! Line has been updated in SD chat <#1485751843937194118> (DM to join, it's open to basi"
      }
    ],
    "T131": [
      {
        "date": "2026-06-10",
        "type": "confirmed",
        "snippet": "**Target Apple Valley Highway 18**\nPlease note store seems to be pushing stock on their own as opposed through vendor!\n\n"
      }
    ],
    "T139": [
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Lake Mead**\n\n- OP-13 Singles\n- Sitting with absolutely 0 line.\n- Ask for 2 per person, should do it.\n\n<@&142516"
      },
      {
        "date": "2026-07-01",
        "type": "confirmed",
        "snippet": "**Target Lake Elsinore has OP-16 Booster Sleeves!**"
      }
    ]
  },
  "thursday": {
    "T008": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Quiet sleeper. Best windows remain 8-9:30 and 1-3 with employee pushes making it possible multiple times a week/day"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Sneaky option. Most likely windows remain 8-9:30 or 1-3. If it somehow misses tomorrow then Friday becomes very likely"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Quiet sleeper. Best chances remain 8-9:30 or 1-3. If it somehow skips tomorrow then Friday extremely likely for release "
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Sneaky option. Most likely windows remain 8-9:30 or 1-3. If it somehow misses tomorrow then Friday becomes very likely"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Quiet sleeper. Most success continues around 8-9:30 and 1-3 store pushes out on their own"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "SLEEPER option for tomorrow! Either 8-9:30 or 1-3pm if it hits usually! If nothing tomorrow 100% for Friday"
      }
    ],
    "T003": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target Eagle Rock Mall has a line of 2 waiting for a late night drop. Nothing is confirmed.*** <@&1425165995575742634"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "MULTIPLE WAVE MACHINE. Opening, 9-11, then 1-3. Keep looping they restock constantly"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Eagle Rock still has Perfect Order Blisters available**"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Absolute multi-wave monster. Opening, 9-11, then 1-3. Keep circling because inventory can get pushed out randomly"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Eagle Rock opened with some items** <@&1425625697141133334> <@&1425165995575742634>"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "MULTIPLE WAVE MACHINE. Opening, 9-11, then 1-3. Keep looping because this location finds ways to restock constantly"
      }
    ],
    "T039": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Main focus stays around 10-12. Store MAY hold until Friday but check in and ask as release is not super big!"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Main timing remains around 10-12. If quiet early don\u2019t ignore later pushes. Feels expected tomorrow and people will defi"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Huntington Park has not stocked and is OVERDUE**\n\nBoth this store and **South Gate** should hit today so be rea"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Main timing still sits around 10-12. If nothing happens early don't write it off because later pushes remain possible. L"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Huntington Park needs to be checked and may have hit already if not now!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Huntington Park as posted above!**"
      }
    ],
    "T020": [
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "SAME PLAN AS ALWAYS. Start at opening and keep HEAVY eyes from 11-1 because that remains the danger window here."
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Culver City Mall has very small amount of heads lingering**\n\nAs always, store will receive almost daily shipmen"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Culver City Mall latest update + head count!** \n\n<@&1425166183841140873>"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Culver City Mall only Championship Decks today!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Same story here. Start at opening and keep a close eye from 11-1, especially around noon."
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "SAME PLAN AS ALWAYS. Start at opening and heavy heavy eyes from 11-1 (usually 12).  Keep this thing in rotation the enti"
      }
    ],
    "T024": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target Gardena restocked!***\n\n> - Chaos Rising 3-Pack Blister\n> - Chaos Rising Booster Bundle\n> - Phantasmal Flames M"
      },
      {
        "date": "2026-04-09",
        "type": "guide",
        "snippet": "Did not stock up today check tomorrow again opening or more likely 10-12!```"
      },
      {
        "date": "2026-04-02",
        "type": "guide",
        "snippet": "May still be sitting on some product here so check tomorrow please and if not then be ready Friday at opening"
      },
      {
        "date": "2026-03-26",
        "type": "guide",
        "snippet": "May be holding a bit of product here check tonorrow please if not FRIDAY AT OPEN"
      },
      {
        "date": "2025-10-16",
        "type": "guide",
        "snippet": "Random drops here and can hold some back but should still sell a bit of product fairly."
      },
      {
        "date": "2025-10-09",
        "type": "guide",
        "snippet": "Should stock a 2nd batch of product tmw. Very light stock here; 1 box of ETBs should be sold. Likely in the afternoon."
      }
    ],
    "T027": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Overdue for a 7am drop so check again and if not expect a HAUL on Friday"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target Manhattan Beach is wheeling out what seems to be a decent sized restock.*** <@&1425166183841140873> <@&1425166"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Manhattan Beach as usual is holding back product! Will trickle some items out later today at first services and"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "One of the top priorities. Opening, shortly after opening, and continuous rotations all day."
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "TOP PRIORITY. Opening, shortly after opening, and basically all day rotations. Store has no problem dropping multiple ti"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Manhattan Beach also sold a quick batch of held back stock!**\n\nStore is tough and needs to be rotated constantl"
      }
    ],
    "T061": [
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Sold Blisters today and still could have more items, but the store may also choose to save some for Friday"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Still has product but feels more likely to save inventory for Friday. Again be ready for opening or 10-12!"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Sold at opening today still has more items but may hold for friday"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Stayed quiet so run it back. Shipment timing usually lands around 9-11 and whatever arrives should move"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Glendale Galleria**\n\n- People are lingering for a drop!\n- UPS delivered boxes a few mins ago.\n- Some boxes are "
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Nothing today so run it back tomorrow! Shipment should land around 9-11 and should sell whatever they get!"
      }
    ],
    "T034": [
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Torrance/Sepulveda**\n\n- Chaos Rising ETB\n- Chaos Rising Booster Bundle\n- Chaos Rising Sleeved Booster\n- First P"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Carson Sepulveda sold today a bit! May do a bit more selectively can keep checking in!** <@&1425166183841140873"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Morning VQ should go up at Friday at opening"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Morning VQ should go up at opening be ready!"
      },
      {
        "date": "2026-01-29",
        "type": "guide",
        "snippet": "Morning VQ EVERY THURSDAY SHOULD HAVE GOOD ITEMS"
      },
      {
        "date": "2026-01-29",
        "type": "confirmed",
        "snippet": "**Target Carson Sepulveda**\n\u2022 11 heads are currently here \n\u2022 Weekly Thursday VQ will be going at open or a bit after \n\u2022 "
      }
    ],
    "T033": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Will receive stock tomorrow and 50/50 whether they sell or hold for Friday so expect heads to be here waiting from 8-11i"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Did not hit be ready morning time!"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Carson Mall**\n\n\u2022 Confirmed to be dropping Poke shortly \n\u2022 7 heads in line\n\u2022 Make your way over folks! <@&142516"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Hit Tuesday this week so not expected to go again"
      },
      {
        "date": "2026-01-29",
        "type": "guide",
        "snippet": "Seems to be pretty consisted for Wednesday now in the morning"
      },
      {
        "date": "2026-01-22",
        "type": "guide",
        "snippet": "Restocked today as warned nice job!"
      }
    ],
    "T049": [
      {
        "date": "2026-05-14",
        "type": "confirmed",
        "snippet": "**Target Norwalk Imperial as stated above seemed to drop some Perfect Order items!**\nKeep in mind store does tend to hol"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "HAS NOT HIT. Morning or 4-6 fallback if not lock in Friday morning."
      },
      {
        "date": "2026-04-16",
        "type": "guide",
        "snippet": "Has not hit so PLEASE check morning time or 4-6ish!"
      },
      {
        "date": "2026-04-09",
        "type": "confirmed",
        "snippet": "**Target Norwalk Imperial**\n\u2022 Phantasmal Flames Booster Sleeves \n\u2022 Perfect Order Coin Blister\n\u2022 Both available at guest "
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Random here and pushed by employees check morning or later evening here"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "Random here and pushed by employees check morning or later evening here"
      }
    ],
    "T040": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Morning shipment check. Store has been selling closer to when inventory arrives so keep an eye on opening before circlin"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Check morning time for shipment. Store should sell as it receives now, but this is more of a solid check than a top prio"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target Pico Rivera line update.***"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera still only Squeezy and Needoh and is due!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Morning shipment checks. Store has been selling as product arrives so keep an eye on it be ready for opening!"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Check morning time for shipment store should sell as they receive now!"
      }
    ],
    "T084": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Again basically daily checks here at 7am! Store drops whatever they receive"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Becoming a daily opening check here and did hit last week so be ready!"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Burbank Empire**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Chaos Rising Blister Pack \n\u2022 A few other small items "
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "***Target Burbank Empire Center has 25-30 in line waiting \u2014 makes sense because Walmart hit too.*** <@&14251659955757426"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "***Target Burbank Empire Center sold a small amount of Ascended Heroes Deluxe Pins.***"
      },
      {
        "date": "2026-03-12",
        "type": "confirmed",
        "snippet": "**Target Burbank Empire**\n\u2022 One Piece EB-03 Sleeves \n\u2022 Available at the TCG section \n\u2022 Expect people to get here quick <"
      }
    ],
    "T062": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Opening shipment checks remain mandatory but keep circling back around 11-1"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Sepulveda as warned!**\n\n\u2022 Poke is confirmed at opening\n\u2022 One Piece and Needoh as well\n\u2022 Line will cont"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Sepulveda sitting with product but 1 per today** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Opening shipment checks first then rerun around 11-1 like always. Store sold today as posted"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Opening shipment checks first then another look around 11-1. LINE WILL BE HERE EARLY"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Sepulveda has a line going waiting for opening** <@&1425165995575742634>"
      }
    ],
    "T082": [
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "Drops late week usually Friday but can check 8-10!"
      },
      {
        "date": "2025-12-18",
        "type": "guide",
        "snippet": "Should drop it all on Friday morning"
      },
      {
        "date": "2025-12-04",
        "type": "guide",
        "snippet": "Should drop it all on Friday moening"
      },
      {
        "date": "2025-11-20",
        "type": "guide",
        "snippet": "Drops late week usually Friday but CHECK 8-10!"
      },
      {
        "date": "2025-11-06",
        "type": "guide",
        "snippet": "Drops late week CHECK 9-10 primeeee"
      },
      {
        "date": "2025-10-30",
        "type": "guide",
        "snippet": "9-12 here expect it to hit since others have dropped!"
      }
    ],
    "T065": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target Sylmar has a list starting by someone there in case a drop happens tomorrow morning at opening - stop by if yo"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Sylmar only has Chaos Rising Booster Sleeves**"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Sylmar still has Chaos Rising Booster Sleeves**"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Sylmar no drop at opening but will be a great check later on today!**"
      },
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "**Target Sylmar has Phantasmal Flames Mini Portofolios**"
      },
      {
        "date": "2026-04-02",
        "type": "confirmed",
        "snippet": "**Target Sylmar just dropped a PACK**\n\u2022 Ascended Heroes ETB (limited)\n\u2022 Ascended Heroes Poster Collection \n\u2022 OP-15 Boost"
      }
    ],
    "T083": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Likely holding for Friday"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Finally sold today so tomorrow is not as urgent, but still worth checking in case they hold more"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Please check opening. Sold a bit earlier as posted but may have more!"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Fallbrook is still doing random drops, sold some Ascended Heroes 2 Pack Blisters around 3-4pm today. Posting fo"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Pls check at opening as they did not drop here yet!"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Fallbrook is also likely to release their stock for those around!** <@&1425165995575742634>"
      }
    ],
    "T067": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Likely holding for Friday here!"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "DID NOT SELL TODAY. Check from 8-11 tomorrow"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Check from 8-11. Otherwise attention likely shifts toward Friday opening as usual"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Check from 8-11. Otherwise likely shifts attention toward Friday"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Already moved inventory today but worth another pass tomorrow morning in case. Otherwise Friday becomes the focus"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Sold today at opening can peep again 8-11 in case of a bit more if not may sell more Friday"
      }
    ],
    "T068": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "MAY be holding for Friday but can check at opening in case!"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Morning or evening remain strongest. Store still hasn\u2019t really sold and Thursday should be a much better chance than Wed"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Morning or evening remain the strongest opportunities. Still hasn't really unloaded and worth asking whether they're hol"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Morning or evening remain strongest. Store still hasn't really sold can also ask if they\u2019ll hold for Friday!"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Woodland Hills is claiming no Pokemon today**"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Morning or evening usually here as it has not really sold!"
      }
    ],
    "T064": [
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "More likely Friday but quick checks especially 5-8 if nothing opening. Morning still possible"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Did not seem to hit today so be ready for tomorrow and if nothing 100% Friday"
      },
      {
        "date": "2026-05-14",
        "type": "confirmed",
        "snippet": "***Target Mission Hills per store manager will now be a Friday store as well - so store should hit tmw!!*** <@&142516599"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "More likely Friday but quick checks don\u2019t hurt especially from 5-8 IF nothing at opening. Again does have a chance for m"
      },
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "**Target Mission Hills again will hit tonight or by tomorrow morning expect people to wait in line and leave chair tonig"
      },
      {
        "date": "2026-04-30",
        "type": "guide",
        "snippet": "Likely quiet quick checks only"
      }
    ],
    "T072": [
      {
        "date": "2026-04-09",
        "type": "confirmed",
        "snippet": "**Target Encino**\n- WITH a BABYYYYY packkkk. \ud83d\udd25\ud83d\udd25\n- Ascended Hero 2 pack Mini Tins \n- Mega Evolution 2 Pack Blister  \n- Pe"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "May wait until Friday morning here or weekend as is the usual but like Woodland shipments are up so check in"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "May wait until Friday morning here or weekend"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "May wait until Friday morning here"
      },
      {
        "date": "2025-11-20",
        "type": "guide",
        "snippet": "Since it\u2019s heavy this week check in tomorrow but typically Friday here!"
      },
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "Drops mornings typically Thurs night! Security eats stock here but it is still worth checking at opening, in case tonigh"
      }
    ],
    "T085": [
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Northridge Sherwood current stock, also a few chairs going down for tomorrows Friday morning drop** <@&14251659"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Sherwood"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Sherwood"
      },
      {
        "date": "2026-01-29",
        "type": "guide",
        "snippet": "Sherwood"
      },
      {
        "date": "2026-01-22",
        "type": "guide",
        "snippet": "Sherwood"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "Sherwood"
      }
    ],
    "T075": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Cochran may be moving to Friday\u2019s only! Madera still deserves attention from 10-12 as they seem to be not in the Friday "
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Cochran can still be checked at opening for another round but may finally cool down. Madera had lighter inventory so mor"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Cochran has 10+ in line so far.*** <@&1425165995575742634> <@&1488964203103522997>"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Cochran has Mega Zygarde ex Premium Collection and sleeves sitting currently** <@&14889642031035229"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Cochran deserves another opening run. Madera was lighter today so morning and especially 12-2 deserve another look"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Cochran opening for another round. Madera had lighter inventory so morning and especially 12-2 deserve attention"
      }
    ],
    "T132": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Still feels like heavier inventory may be waiting for Friday but opening and 11-1 remain worthwhile especially at Summit"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Heavier inventory likely saved for Friday but opening and 11-1 remain worthwhile at both stores"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Feels like heavier inventory is being saved for Friday but opening and 11-1 still have value at both locations```"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Heavier inventory likely saved for Friday but opening and 11-1 remain worthwhile at both stores!"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Heavier inventory likely reserved for Friday but opening and 11-1 checks still can pop!```"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Likely saving heavier stock for Friday but opening and 11-1 still worthwhile. Remember Slover sold light product today a"
      }
    ],
    "T121": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Store has been all over the place so expect heads again to be waiting here until"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Eastvale update!**\n\nPeople line up regardless for Needohs and toys but store is overdue for Poke still"
      },
      {
        "date": "2026-04-09",
        "type": "confirmed",
        "snippet": "**Target Eastvale is finally selling after what feels like forever!** <@&1425166052496642260>"
      },
      {
        "date": "2026-03-26",
        "type": "confirmed",
        "snippet": "**Target Eastvale**\n\u2022 Perfect Order ETB \n\u2022 Perfect Order Booster Bundle \n\u2022 Heavy amount of bundles get here! <@&14251660"
      },
      {
        "date": "2026-03-12",
        "type": "guide",
        "snippet": "Should hit one more time this week but likely for Friday but peep in case"
      },
      {
        "date": "2026-03-05",
        "type": "confirmed",
        "snippet": "**Target Eastvale**\n\u2022 Group is waiting here currently \n\u2022 Not confirmed yet, vendor tends to hit a store twice later in t"
      }
    ],
    "T122": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Norco**\n\n\u2022 Line is forming up here \n\u2022 Store dropped on Monday and was posted \n\u2022 People are hoping for another r"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Norco is still waiting for Poke to be stocked!** <@&1425166052496642260>"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "DID NOT hit today! Be ready for round 2 tomorrow of a line forming!"
      },
      {
        "date": "2026-05-14",
        "type": "confirmed",
        "snippet": "***Target Norco's line has increased to ~21 people now.***"
      },
      {
        "date": "2026-05-14",
        "type": "confirmed",
        "snippet": "__**Target Norco Update:**__\n\n- **Finally restocking/selling Poke!**\n- Ascended Heroes items are available.\n- There are "
      },
      {
        "date": "2026-05-14",
        "type": "confirmed",
        "snippet": "> - Ascended Heroes Booster Bundle: 20+\n> - Ascended Heroes ex Boxes: 10-15, limited\n> - First Partner lllustration Coll"
      }
    ],
    "T138": [
      {
        "date": "2026-04-16",
        "type": "confirmed",
        "snippet": "**Target San Bernardino has Mega Evo / Phantasmal 2 Pack Blister sitting** <@&1425166052496642260>"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "8-10 be ready! if it doesn\u2019t hit check 5-7 but should be morning time or Friday store is random all week"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "8-10 be ready! if it doesn\u2019t hit check 5-7"
      },
      {
        "date": "2026-01-29",
        "type": "guide",
        "snippet": "8-10 be ready may also wait but should drop SOMETHING"
      },
      {
        "date": "2026-01-22",
        "type": "guide",
        "snippet": "8-10 be ready or smaller chance but 1-3 but should drop morning!"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "8-10 be ready! If vendors switches route expect it to be last stop of the day 5-7!"
      }
    ],
    "T145": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Hemet**\n\n\u2022 OP-16 Booster Sleeves \n\u2022 One Piece EB-03 Sleeves \n\u2022 Phantasmal Flames Mini Portfolio \n\u2022 Chaos Rising"
      },
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "Has dropped previously 9-11AM - check in at guest services!"
      },
      {
        "date": "2025-11-06",
        "type": "guide",
        "snippet": "Quieter area here please check in 9-11!"
      },
      {
        "date": "2025-10-30",
        "type": "guide",
        "snippet": "11-1 here likely be on top of it."
      },
      {
        "date": "2025-10-23",
        "type": "guide",
        "snippet": "Should drop tomorrow late morning to afternoon. Should be an easier catch from 11am-2pm check in!"
      },
      {
        "date": "2025-10-16",
        "type": "guide",
        "snippet": "Should drop tomorrow late morning to afternoon. Should be an easier catch from 11am-2pm check in!"
      }
    ],
    "T044": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Long Beach Bellflower**\n\n\u2022 2 heads currently waiting \n\u2022 Store tends to drop by 9-11 on Thursdays \n\u2022 Expect more"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Long Beach Bellflower is now up to 8 heads!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Bellflower has a line waiting for a potential restock today.*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target LBC/Bellflower is dropping NOW!*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Bellflower\u2019s pack is still going. Items are pictured above.*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Long Beach Bellflower has a few OP-16 Booster Sleeves and Fifa World Cup Tins still available** <@&142516614096"
      }
    ],
    "T104": [
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Euclid hit morning today as warned. Hills as well. Both were in guide. Anaheim Lincoln as posted last night is typical f"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "**Target Anaheim/Lincoln**\n\n- First Partner Illustration Collection\n- 15+ available now at guest services.\n- Small line "
      },
      {
        "date": "2025-10-16",
        "type": "guide",
        "snippet": "Should stock tomorrow but tends to sell in small batches. Rotate throughout the date after 9am."
      },
      {
        "date": "2025-10-09",
        "type": "guide",
        "snippet": "Vendors stock on Thursdays here, usually at guest services. Sells items in batches. Check towards the afternoon!"
      }
    ],
    "T119": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Staff hinted at more random vendor releases instead of the old schedule. Continue checking in expect people to try and t"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Store claimed they will move to sell a bit more randomly through the vendor so we will remind you to check but paired wi"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Claiming they are holding for Friday"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Hit Tuesday this week instead of today so CHECK tomorrow in case they go back to Thursday schedule! Drops usually with a"
      },
      {
        "date": "2026-04-23",
        "type": "guide",
        "snippet": "Hit today and should go again Friday. Can go and check in to double check but likely to be selling Weds/Friday now"
      },
      {
        "date": "2026-04-16",
        "type": "guide",
        "snippet": "VQ 10AM. EARLY LINE. Tuesdays and Thursdays only pls someone actually give good updates and go early"
      }
    ],
    "T117": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Yorba Linda City / Yorba Linda Blvd has Phantasmal Flames Mini Portfolio**"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Has not been hitting Thursdays so should be friday or Monday but still check in in case"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Has not been hitting Thursdays so should be friday or Monday but still check in in case"
      },
      {
        "date": "2026-01-29",
        "type": "guide",
        "snippet": "Should hit later in day after 2 here!"
      },
      {
        "date": "2026-01-22",
        "type": "guide",
        "snippet": "Dropping tomorrow should be between 2-6 after the other two stores above!"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "Should drop tomorrow been pushing later in the day! 5-7 usually here"
      }
    ],
    "T114": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia dropped at opening!**\n\n\u2022 Chaos Rising ETB \n\u2022 Chaos Rising Booster Sleeves \n\u2022 Jeronimo also"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia**\n\n\u2022 Pokeball Tins \n\u2022 Phantasmal Flames Mini Portfolio \n\u2022 Chaos Rising Booster Sleeves <@&"
      },
      {
        "date": "2026-04-16",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo/Alicia Parkway**\n\n- Charizard ex Tins still sitting.\n- Mega 2-Pack Coin Blisters too.\n- Perfect O"
      },
      {
        "date": "2026-03-26",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia**\n\u2022 Perfect Order ETB \n\u2022 Perfect Order Booster Bundle \n\u2022 Ascended Heroes Mini Tins \n\u2022 Perf"
      },
      {
        "date": "2025-12-18",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia** \n\n\u2022 Lugia ex Premium Collection\n\u2022 Mega Venasaur ex Box\n\u2022 Journey Together Booster Bundle"
      },
      {
        "date": "2025-10-09",
        "type": "guide",
        "snippet": "Same as Jeronimo. Unfortunately, the 2 major MV stores are grimey/selective with who they sell Pokemon product to."
      }
    ],
    "T089": [
      {
        "date": "2026-01-29",
        "type": "guide",
        "snippet": "Did not seem to sell today check in!"
      },
      {
        "date": "2026-01-22",
        "type": "guide",
        "snippet": "Will sell tomorrow or if not 100% on Friday usually always after 12"
      },
      {
        "date": "2026-01-08",
        "type": "guide",
        "snippet": "Did not seem to sell today check in!"
      },
      {
        "date": "2025-12-18",
        "type": "guide",
        "snippet": "Did not seem to sell today check in!"
      },
      {
        "date": "2025-12-11",
        "type": "confirmed",
        "snippet": "**Target Irvine Spectrum** \n\u2022 Mega Kangashkan ex Box\n\u2022 Mega Venasaur ex Box\n\u2022 Collectors Chest Tin 2025\n\u2022 Destined Rival"
      },
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "Likely Fri, but still worth checking between 2-6PM tm! Ask at GS."
      }
    ],
    "T092": [
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "***Target Huntington Beach/Adams line is forming for tomorrow.*** @ox"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Restocked earlier may receive a bit but Friday will be bigger drop"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Restocked earlier may receive a bit more but smaller chances"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "Restocked earlier may receive a bit more but smaller chances"
      },
      {
        "date": "2025-12-11",
        "type": "guide",
        "snippet": "Check in case tomorrow 10-12 and 2-5 but should go again Friday"
      },
      {
        "date": "2025-12-04",
        "type": "guide",
        "snippet": "Check in case tomorrow 10-12 and 2-5 please :)"
      }
    ],
    "T110": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Expect another huge allocation. Lottery setup should continue with another large crowd being here right at 8am when line"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Foothill Portola update! Reminder line starts at 8am though and people who try earlier usually get booted from "
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Foothill Portola switched it up and is passing raffle tickets out now!** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Foothill Portola is sending out texts for its VQ!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "EXPECT ANOTHER MASSIVE ALLOCATION. Lottery ticket style setup around 8AM"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Foothill Portola (Orange County) line for lottery spawned in!** <@&1425166056766439528>"
      }
    ],
    "T095": [
      {
        "date": "2026-02-05",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach has a line forming as well!**\nNothing confirmed but could stock ! <@&1425166056766439528>"
      },
      {
        "date": "2026-01-29",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach has a VQ open but like 20 people lined up for a few hours missed the message** <@&14251660567"
      },
      {
        "date": "2025-12-11",
        "type": "guide",
        "snippet": "Check in tomorrow again 10-12 did not hit today! Or opening time too"
      },
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "Check fro 10-12! Should hit in the morning! This or Foothill should be your 9-11AM footwork."
      },
      {
        "date": "2025-11-13",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach**\n\u2022 Line has formed right now for anticipated drop!\n\u2022 We have posted and reminded to stay on "
      },
      {
        "date": "2025-11-13",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach**\n\n- Virtual queue is going up!\n- Line will build very quickly.\n- Expecting Phantasmal today."
      }
    ],
    "T094": [
      {
        "date": "2026-01-29",
        "type": "guide",
        "snippet": "Might receive a restock check in 9-11 in case"
      },
      {
        "date": "2026-01-22",
        "type": "guide",
        "snippet": "Might receive second shipment of the week check in 9-11"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "Check in tomorrow again 10-12 for more shipment!"
      },
      {
        "date": "2026-01-08",
        "type": "guide",
        "snippet": "Might receive a restock check in 9-11 in case"
      },
      {
        "date": "2025-12-18",
        "type": "guide",
        "snippet": "Check in tomorrow again 10-12 for more shipment justtt in case"
      },
      {
        "date": "2025-12-18",
        "type": "confirmed",
        "snippet": "**Target Brookhurst Westminster** \n\u2022 Mega Evo Tins\n\u2022 Pokeball Tins 2025 \n\u2022 Phantasmal Flames Booster Sleeves\n\u2022 Mega Vena"
      }
    ],
    "T102": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin**\n\n\u2022 Stock is here and placed out!\n\u2022 Usually does hit Tuesdays or Thursdays, but release week s"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin**\n\n\u2022 Line is forming up here\n\u2022 As warned above no confirmation if vendor will hit today yet\n\u2022 P"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin still needs checks in case it hits!** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin seems to be likely for tomorrow!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target N Orange Tustin**\n\n\u2022 Line is forming up again as it didn\u2019t hit yesterday \n\u2022 About 8-10 heads in line right now\n"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin should also be rotated today for a Poke drop usually from 12-3 but lines can form prior** <@&14"
      }
    ],
    "T015": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Never a bad stop. Opening remains strong but later releases continue happening consistently."
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "NEVER A BAD CHECK. Store randomizes releases constantly and opening remains the best place to start, but today again pro"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Always worth a stop. Releases happen at random and opening continues to be the best place to begin"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland vendor is on site and usual store is holding Poke so be ready for a drop tomorrow!** <@&14"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland is selling some items!**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Mega Zygarde ex Premium "
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "NEVER A BAD CHECK. Store randomizes releases constantly and opening remains the best place to start"
      }
    ],
    "T011": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Opening employee push remains one of the safest bets. Continue checking later because store will sell multiple times a d"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Employee push in the morning and throughout the day always good checks, but after selling today this becomes more of a n"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Employee pushes in the morning and throughout the day continue making this a worthwhile stop"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Employee push in the morning and throughout the day always good checks!"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Again look for another employee push at opening!"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Employee push happened this morning exactly as warned. Check again as vendor did stop by today as well!"
      }
    ],
    "T005": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Look for a morning drop or vendor! Hit on Monday but store can drop multiple times as we have seen almost weekly! May be"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Sold today as warned. Still worth checking tomorrow because this store can stay active back to back, but it is NOT on th"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Duarte pushed out some items this morning and has Chaos Rising Booster Sleeves available**"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "HUGE PRIORITY TOMORROW. Thursdays continue being the sweet spot and people will absolutely be there early. If they don\u2019t"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Duarte has vendor on site as posted on guide and will confirm items in a bit! Store does like to hold onto some"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Duarte update, expect more tomorrow!** <@&1425166052496642260>"
      }
    ],
    "T006": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "One of tomorrow's biggest targets if today truly stayed quiet. Thursdays continue fitting this store whether it happens "
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Pomona should be checked as well ask about a VQ as well at guest services if not will drop tomorrow morning** <"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "One of the strongest targets tomorrow if it really stayed quiet today. Thursdays continue to dominate here whether it ha"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Upland no Poke at opening, make sure to update Pomona as well!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "One of the strongest plays on the board tomorrow. Thursdays dominate here whether it ends up being morning, afternoon, o"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "One of the strongest targets tomorrow. Thursdays continue to dominate here whether it happens morning, afternoon, or eve"
      }
    ],
    "T013": [
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Morning check is solid but pls keep eyes from 12-4 ask at guest services!"
      },
      {
        "date": "2026-03-19",
        "type": "guide",
        "snippet": "Has not seemed to hit so check in! Would typically go unless they choose to hold for Friday"
      },
      {
        "date": "2026-03-12",
        "type": "guide",
        "snippet": "EXPECT HEADS HERE! Should hit at opening or a bit after since other stores already hit! BE READY"
      },
      {
        "date": "2025-10-23",
        "type": "guide",
        "snippet": "Ask at GS for VQ from 9-12. Store will run it once the confirm vendor is showing"
      },
      {
        "date": "2025-10-16",
        "type": "guide",
        "snippet": "Check in from 11-1pm for store to run a VQ. Will usually start it once they get word vendor will be arriving."
      },
      {
        "date": "2025-10-09",
        "type": "guide",
        "snippet": "Due for stock still, usually runs VQ usually once the vendor has confirmed that they will be showing up."
      }
    ],
    "T010": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Worth watching did not seem to hit today and store sells CONSTANTLY in small batches multiple days a week"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Sold multiple times today and can still be checked because this store sits on inventory and releases in waves, but it is"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target Diamond Bar still has the items pictured above.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Diamond Bar**\n\n- OP-13 Singles at guest services.\n- Was still going at 3:30 & 3:45.\n- Check in for more now, li"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Best looks remain 8-10, 12-2, or later. Store enjoys sitting on inventory then releasing randomly so stay on your toes!"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "8-10, 12-2, or later. Has a habit of sitting on inventory and releasing in waves"
      }
    ],
    "T002": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Likely tomorrow! As I\u2019ve posted store hire multiple times a week by employees at opening and then vendor usually stops b"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target 3121 Pasadena**\n\n\u2022 Confirmed a Pokemon drop for opening\n\u2022 Still no word on exact product \n\u2022 Make your way over "
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target 3121 Pasadena**"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Sold today so tomorrow becomes more of a follow-up employee push check than a major priority"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Look for an employee push in the morning in case!"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Keep eyes morning and 1-3 also NEEDS to be checked!"
      }
    ],
    "T017": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Hit this week look for a bit more Friday morning"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Opening sleeper option turned into a late vendor hit today around 3-5. Tomorrow can still be worth checking, but I\u2019d kee"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Opening sleeper option. Stayed quiet today and expect people to focus on others but if others aren\u2019t hitting pls update "
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "***Target North Azusa has 10 in line, people are also hoping for a night drop here since the store is overdue. Double ba"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "***Target North Azusa, Friday, 5/22, at 8AM. This week's shipment + Chaos Rising.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "Hit today"
      }
    ],
    "T025": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Opening is still your best opportunity with backup checks around 10-12 since Gardena stocked but expected for Friday at "
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Lawndale has Phantasmal Flames Mini Portfolio**"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "DIDN'T GO TODAY. Opening and 10-12 remain strongest with another possible push around 2-4"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Hawthorne 120th looking like no shipment! Feel free to check Lawndale as well!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Stayed quiet today. Opening and 10-12 remain strongest with another possible wave around 2-4. Confirmed to receive shipm"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "DIDN'T GO TODAY. Opening and 10-12 remain strongest with another possible push around 2-4"
      }
    ],
    "T076": [
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Madera has 6 heads lining up for a drop today!** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Madera ALSO has a line formed! Likely to sell by 1-2PM!*** <@&1488964203103522997>"
      },
      {
        "date": "2026-04-23",
        "type": "confirmed",
        "snippet": "**Target Simi Valley Madera opened up with Ascended Hero Booster Bundles ; only 4 heads copped so far** <@&1425165995575"
      },
      {
        "date": "2026-04-16",
        "type": "confirmed",
        "snippet": "**Target Simi valley Madera**\n- Mega Evolution Sleeves\n- Perfect Order Sleeves\n- Mega Evolution 2 pack blister \n- Perfec"
      },
      {
        "date": "2026-04-02",
        "type": "confirmed",
        "snippet": "**Target Simi Madera has Perfect Order ETB sitting as well** <@&1488964203103522997>"
      },
      {
        "date": "2025-11-06",
        "type": "confirmed",
        "snippet": "__**Target Simi Valley - Madera Update:**__\n\n- Mega Singles are still going!\n- Journey Singles are going too!\n- Allowing"
      }
    ],
    "T124": [
      {
        "date": "2026-03-12",
        "type": "guide",
        "snippet": "Seems to have already stocked up this week"
      },
      {
        "date": "2026-03-05",
        "type": "guide",
        "snippet": "Seems to have already stocked up this week"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Seems to have already stocked up this week"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Can check from 9-11 seems it should hit"
      },
      {
        "date": "2026-01-29",
        "type": "guide",
        "snippet": "Check in with both! May have some items sitting too"
      },
      {
        "date": "2026-01-22",
        "type": "guide",
        "snippet": "Check in with both! Did not seem to get checked so may have items sitting as well"
      }
    ],
    "T123": [
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Green Valley**\n\n\u2022 Ascended Heroes Deluxe Pin Collection \n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 15 heads in li"
      },
      {
        "date": "2026-03-12",
        "type": "guide",
        "snippet": "Has not seemed to hit and with IE schedule being wonky check in the morning!"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Dropped yesterday focus on others"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Dropped today focus on others usually hits on Wednesdays here!"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "Dropped today focus on others"
      },
      {
        "date": "2025-11-20",
        "type": "guide",
        "snippet": "Dropped today focus on others"
      }
    ],
    "T106": [
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Fullerton Yorba Linda**\n\n\u2022 Perfect Order Booster Bundle \n\u2022 Phantasmal Flames Mini Portfolio \n\u2022 Both available a"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Morning and early afternoon remain strongest has not seemed to hit!"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Morning or 12-2 strongest. Expect heavier turnout tomorrow and ask staff directly"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Mostly Friday here lately but still worth peeping tomorrow in case since other stores hit"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Yorba Linda update.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Morning or 12-2 checks ! Check in and ask the store expect heavier heads here tomorrow"
      }
    ],
    "T088": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "VQ happened exactly as expected today. Next drop Friday here"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target Irvine Barranca is selling to those who signed up for VQ at opening.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca Item List**"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Today\u2019s VQ hit exactly like expected so tomorrow becomes more of a leftovers / extra wave but next drop Friday```"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca is selling now!**\n\n\u2022 Limited Prismatic Evolutions ETB \n\u2022 Mega Zygarde ex Premium Collection \n\u2022 "
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca vendor just arrived FINALLY**\n\nIf you joined VQ today make your way back and depending on stock"
      }
    ],
    "T115": [
      {
        "date": "2026-04-02",
        "type": "confirmed",
        "snippet": "**Target San Juan Capistrano has Perfect Order Booster Sleeves**"
      },
      {
        "date": "2026-02-19",
        "type": "confirmed",
        "snippet": "**Target San Juan Capistrano**\n\n- Charizard X ex UPC\n- Phantasmal Coin Blisters\n- Phantasmal Sleeved Boosters\n- **ASK FO"
      },
      {
        "date": "2026-01-29",
        "type": "confirmed",
        "snippet": "**Target San Juan Capistrano**\n\u2022 Ascended Heroes Tech Sticker Collection \n\u2022 Pokemon Day Collection 2026 \n\u2022 Phantasmal Fl"
      },
      {
        "date": "2025-10-16",
        "type": "guide",
        "snippet": "If youre in the area definitely a sleeper store that can drop decent stock. Rotate checks throughout the day as it is ra"
      }
    ],
    "T045": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Long Beach Cherry**\n\n\u2022 Vendor seemed to stop by lateee last night \n\u2022 Some single blisters are here \n\u2022 Can check"
      },
      {
        "date": "2026-04-30",
        "type": "guide",
        "snippet": "Keep checks in 8-10ish or 2-4 will either sell tomorrow or Friday ```"
      },
      {
        "date": "2026-04-23",
        "type": "guide",
        "snippet": "Usually would say Friday but last week did hit so rotate 9-11 and 2-4 here"
      },
      {
        "date": "2026-04-16",
        "type": "confirmed",
        "snippet": "**Target Long Beach/Cherry**\n\n- FRESH restock put out now.\n- Ascended Heroes Premium Poster\n- First Partners Illustratio"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Should be Friday here as it did not hit today"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Should be Friday here as it did not hit today"
      }
    ],
    "T014": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "If it stayed quiet this morning then another opening check is deserved but may be holding for Friday"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Likely did not sell this morning so checks opening again"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Likely didn't move this morning so another opening check is worthwhile"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Likely did not sell this morning so checks opening again!"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Rowland Heights also dropped this morning!**"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Should have sold this morning a bit as wanted but check again tomorrow morning for round 2!"
      }
    ],
    "T054": [
      {
        "date": "2026-02-19",
        "type": "confirmed",
        "snippet": "**Target DTLA \u2014 7th & Figueroa**\n\n- Ascended Heroes Mini Tins\n- VERY FEW stocked at guest services.\n- Check in for more "
      },
      {
        "date": "2025-10-30",
        "type": "guide",
        "snippet": "Been a bit quiet checks from 830-11!"
      }
    ],
    "T038": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Morning attention first, then another sweep around 1-4. The longer the day goes the more people tend to gather here. can"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target South Gate and Huntington Park are also still possible** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Heavy watch from 8-9:30 and if nothing expect heads to be on it from 1-4. The later it gets the longer a line will be ``"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Watch closely from 8-9:30. If nothing happens expect people camping from 1-4 and lines growing as the day progresses```"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Huntington Park has heads lingering around, stay on top of this store along with South Gate!** <@&1425166140966"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Heavy watch from 8-9:30 and if nothing expect heads to be on it from 1-4. the later it gets the longer a line will be"
      }
    ],
    "T001": [
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Two stores here keep an eye out for a morning push at both!"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target 777 Pasadena**\n\n\u2022 Vendor should be starting here today \n\u2022 Line is starting to form up\n\u2022 Make your way over if a"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target 777 Pasadena**\n\n\u2022 Stocking up right now\n\u2022 About 10 heads in line \n\u2022 Make your way over confirmed! <@&1425166052"
      },
      {
        "date": "2026-04-02",
        "type": "guide",
        "snippet": "Check in tomorrow. Vendors are active, stores are not holding as much, and both feel likely either in the morning or 12-"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Another possible morning drop here if not 12-3"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Vendor came by but did not really stock as was stocked a couple days ago"
      }
    ],
    "T022": [
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Worth a quick opening stop if you're already nearby. Never forget this store has randomly gone late at night before"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Quick opening glance if you're nearby but not the strongest priority. Remember this location has randomly fired late at "
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Quick opening peep if nearby but not the biggest priority tomorrow and it randomly go late tonight"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Check opening  then rerun 5-7. Reminder this thing randomly hit at 8PM last Thursday"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Opening peep in case but not the heaviest priority and it may randomly go late tonight"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "LOCK OPENING then run it back 5-7 hit last Thursday at 8pm"
      }
    ],
    "T026": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Broke away from the usual schedule and sold a bit tonight late but expect more Friday!"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Usually Tuesdays and Thursdays are strongest so check at opening!"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Tuesdays and Thursdays continue being the better days. Opening checks are the move!!!"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Usually Tuesdays and Thursdays are strongest check at opening!"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Switched things up today and stocked later than normal. Don't lock yourself into the usual early pattern"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Sold today a but more randomly with a late morning early afternoon stocking as opposed to usual morning"
      }
    ],
    "T037": [
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "More weekend lately. Quick 8:30-10 or 10-12 checks still worthwhile though as they may have stock held back! Again check"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "More of a late week store lately. Quick 8:30-10 or 10-12 checks here in case"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "Morning + 10-12 but has been hitting weekends lately"
      },
      {
        "date": "2026-04-30",
        "type": "guide",
        "snippet": "Late week store. 8:30-10 or 10-12 quick checks but lately has been selling Friday-Sunday mornings"
      },
      {
        "date": "2026-04-23",
        "type": "guide",
        "snippet": "STARTS HEATING UP LATE WEEK. Lean Friday but still check 8:30-10 or 10-12. 2 PER SKU so goes fast people line up"
      },
      {
        "date": "2026-04-16",
        "type": "guide",
        "snippet": "STARTS HEATING UP THURSDAY INTO FRIDAY. Lean Friday but still check morning + 10-12. 2 PER PERSON makes it a sleeper spo"
      }
    ],
    "T073": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Inventory is still believed to be sitting. Opening through 8-10 then 1-3."
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Golden Valley**\n\n\u2022 Vendor is here unloading now\n\u2022 So far only sports is confirmed\n\u2022 This store always holds bac"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Strongest checks remain 8-10 and 1-3. Inventory confirmed to be here just have to catch it"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Main windows remain 8-10 and 1-3. HITS THURSDAYS"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Strongest checks remain 8-10 and 1-3. Still feels like held inventory is sitting here"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "***Target Golden Valley***\n\nSelling now :\n\n- Ascended Hero Ex Boxes\n- First Partner Boxes\n- Championship Ex Boxes\n\n<@&14"
      }
    ],
    "T063": [
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "***Target Van Nuys/Raymer is back to random drops!*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer update**\n\nLine up at 5am confirmed. Would take it 50/50 whether they hold bigger items Saturday"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer line will start at 4am**\n-# expect heads here a bit before but security should kick you out off"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Waiting for Friday here"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Lighter checks only. has been waiting for Friday"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "Likely holding for Friday but store is weird"
      }
    ],
    "T007": [
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Store holds product. Look for an opening push by employees or mid day"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target San Dimas seemed to push out some items at opening!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Store is confirmed sitting on inventory. Watch for employee pushes at opening or around midday"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Store holds product look for an opening push by employees or mid day!"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target San Dimas**\n\u2022 OP-16 Booster Sleeves \n\u2022 OP DP-11 Double Pack \n\u2022 Likely to have starter decks as well! <@&1425166"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target San Dimas vendor is on site!**\n\n\u2022 NO GUARANTEE of pokemon as store pushes themselves \n\u2022 Can look around and pee"
      }
    ],
    "T018": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target Baldwin Park\u2019s vendor arrived now!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target Baldwin Park items!***\n\n> - OP-13 Singles\n> - Moonlit Tins\n> - First Partner Series 2 Illustration\n> - Smaller"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target Baldwin Park has OP-13 Singles & Chaos Rising Booster Bundles sitting.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Baldwin Park NOW!*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "***Target Boca Park is dropping NOW! 10 in line.*** <@&1425166385163669608>"
      },
      {
        "date": "2026-04-09",
        "type": "confirmed",
        "snippet": "**Target Baldwin Park**\n\n- OP-15 Singles\n- 2 per person, now.\n- In a cart at guest services.\n\n<@&1425166052496642260>"
      }
    ],
    "T021": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Opening through early afternoon still looks best. Small chance they sit on inventory until Friday so keep that in mind."
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Culver Jefferson**\n\n\u2022 OP-13 Booster Sleeves \n\u2022 Chaos Rising Booster Bundle \n\u2022 Both available at guest services "
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Culver Jefferson still going as well!**"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Sold smaller items today and still feels live going into tomorrow. Opening checks remain solid and 10-2 continues to be "
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Feels like another shipment is on deck either tomorrow or Friday. Opening is solid but 10-2 remains the prime stretch. m"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Another shipment feels likely tomorrow or Friday. Opening checks remain solid and 10-2 continues to be the strongest str"
      }
    ],
    "T058": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Keep both stores active. Opening first, another look around 10-12, then later in the day. Broadway can get later shipmen"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "BOTH deserve attention. Start at opening then rerun around 10-12 and again 2-3. Broadway especially can randomly wake ba"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Keep both in the mix. Opening first, then loop back around 10-12 and 2-3. Broadway especially can go 6-8PM."
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "BOTH deserve attention. Start at opening then rerun around 10-12 and again 2-3. Broadway especially can randomly wake ba"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "BOTH NEED ROTATION. Start with opening then revisit around 10-12 and again later. Broadway especially loves surprise eve"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "BOTH stores deserve rotations. Opening first then rerun around 10-12 or 2-3. Broadway especially can randomly go again 6"
      }
    ],
    "T048": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Typcially Fridays in release week but check morning time as they can sell other items!"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone has Chaos Rising Booster Sleeves**"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone**\n\n\u2022 Store is finally being stocked up\n\u2022 Currently only select items have gone up\n\u2022 Small lin"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone only selling Singles for Poke** <@&1425166140966965248>"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone has a line of 10+ waiting for opening**"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "STILL HASN\u2019T HIT. Morning or fallback 4-6. If not tomorrow then hard lock Friday morning"
      }
    ],
    "T046": [
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "This store moves sneakily, but they do receive Pokemon and should be checked/treated with that in mind. Check around ope"
      },
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "Receives Poke now and should be checked/treated accordingly. Check @ opening and between 12-2; usual delivery + drop tim"
      }
    ],
    "T028": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Stayed quiet which makes opening tomorrow even more important."
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Inglewood Century opened with Ascended Heroes Mega Ex Collection and OP-13 with a line prior to opening! Usuall"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Inglewood Century only let 1-2 people buy OP13, everyone else only got Chaos Rising Booster Bundle and Chaos Ri"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Skipped today so expect heads before opening here! Good rotation checks throughout the day"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Always has a line at opening daily. Did not sell Poke today so BE READY"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Sold today at opening"
      }
    ],
    "T070": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target 11051 North Hollywood is finally selling!**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Line is here as people ch"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target 11051 North Hollywood slowly trickling out items check in!** <@&1425165995575742634>"
      },
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "A sleeper store that does indeed stock Pokemon. They just started receiving it, and we have not caught it yet. Check whe"
      },
      {
        "date": "2025-11-06",
        "type": "confirmed",
        "snippet": "**Target North Hollywood - Vineland**\n\n- 2025 Advent Holiday Calendars\n- Poopoo ex Battle Decks sitting.\n- Check tomorro"
      },
      {
        "date": "2025-10-09",
        "type": "confirmed",
        "snippet": "**Target 11051 North Hollywood**\n\n- Mega Booster Bundle\n- Mega Sleeved Booster\n- Available at guest services.\n- Been sto"
      }
    ],
    "T074": [
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Valencia is selling with about 15 in line!** <@&1425165995575742634>"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Valencia**\n\n\u2022 Prismatic Evolutions ETB \n\u2022 Ascended Heroes Deluxe Pin Collection \n\u2022 4 on display and pulling mor"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "***Target Valencia is dropping some products at opening!*** <@&1425165995575742634>"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "***Target Valencia \u2014 Prismatic ETB for line.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "**Target Valencia**\nSelling as pictured :\n\n- Ascended Hero Ex Boxes\n- Ascended Hero Pin Collection\n- Ascended Hero Poste"
      },
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "**Target Valencia brought out more product and hard limits so still room!** <@&1425165995575742634>"
      }
    ],
    "T071": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Midday and evening remain the better windows but usually sticks to Tuesday drops even on release weeks. People will chec"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Has not seemed to sell unless it hit a sneak one tonight so be ready tomorrow mid day and evening"
      },
      {
        "date": "2026-03-05",
        "type": "guide",
        "snippet": "Typically will stock and drop later so 5-8 is typical howeverrrrr with other stores hitting check at opening/morning as "
      },
      {
        "date": "2026-03-05",
        "type": "confirmed",
        "snippet": "**Target North Hollywood 12121**\n\u2022 Vendor is on site NOW\n\u2022 Small line forming about 5-7 heads right now \n\u2022 Make your way"
      },
      {
        "date": "2026-03-05",
        "type": "confirmed",
        "snippet": "**Target North Hollywood 12121 Update**\n\u2022 OP TS-02 Mini Tin \n\u2022 Ascended Heroes 2 Pack Blister \n\u2022 Keep updating as more i"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Typically will stock and drop later so 5-8 is typical be ready but can peep at opening/morning in case"
      }
    ],
    "T086": [
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "***Target Northridge Corbin update ; store has 10+ chairs set up for tomorrow\u2019s opening drop!***"
      },
      {
        "date": "2025-12-04",
        "type": "guide",
        "snippet": "Check in the morning and 12-2 so we don\u2019t miss it but should be Friday morning"
      },
      {
        "date": "2025-11-20",
        "type": "guide",
        "snippet": "Check in the morning and 12-2 so we don\u2019t miss it but if not 100% Friday morning"
      },
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "X Factors/Random, check throughout the day. Will have some for Fri at opening."
      }
    ],
    "T079": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Still feels more like a Friday store but has shown it will occasionally leak inventory beforehand so can cbeck!"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Likely holding for Friday here but has on occasion sold small stock during the week so keep it in mind like today"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Likely holding for Friday here but has on occasion sold small stock during the week"
      },
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "Expecting Friday between opening and 10AM. Still due for stock so please be on top of it. If they were to sell tmrw, it "
      }
    ],
    "T087": [
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Expect people there before opening. If it misses early keep rotating all day"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Expect heads here before opening and from 7-9am if it doesn\u2019t hit! If no morning hits rotate all day!"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Oxnard Collection with 7 heads waiting!**\n\nLikely longer now"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "8-10 then rerun 5-7. If dry tomorrow expect Friday opening hit```"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "***Target Oxnard Collection is dropping! 18-20 in line.*** <@&1488964203103522997>"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "***Target Oxnard Collection only has Perfect Order.***"
      }
    ],
    "T081": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "May have hit today so check again Friday!"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Ventura Main Street**\n\n\u2022 Phantasmal Flames Mini Portfolio \n\u2022 Chaos Rising Booster Sleeves \n\u2022 Perfect Order Boos"
      },
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "Will be a random drop. Still needs to stock. Vendor will either hit this tmrw morning from 8-10, at night from 7-9, but "
      }
    ],
    "T080": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Opening through 8-10 first then rerun later. They drop as they get shipment!"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "8-10 first then reruns later. Ventura Main already got active today ```"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Start with 8-10 then revisit later. Ventura Main already got active today```"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "8-10 first then reruns later. Ventura Main already got active today"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Best checks remain 8-10 and later reruns```"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "8-10 or later reruns. Ventura Main already fired today```"
      }
    ],
    "T166": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Store hits Thursday\u2019s whether or not they take a VQ will depend on employees! Expect heads here at opening 7am and then "
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Buena Park has 6 people**"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "THURSDAY OPENING VQ. Expect lines, chairs, and people showing up early"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Buena Park had Chaos Rising Booster Sleeves and OP-16 Booster Sleeves !**\n\nCheck in in case they took a VQ and "
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Buena Park Update**\n\n\u2022 No VQ being taken\n\u2022 Store will sell fcfs once vendor shows\n\u2022 Again keep eyes and be read"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Buena Park sold as posted earlier!**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 OP-16 Booster Sleeves \n\u2022 Ascende"
      }
    ],
    "T032": [
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "Just started w/ cards, no PF yet. Check randomly; mainly between 2-5PM."
      },
      {
        "date": "2025-11-06",
        "type": "confirmed",
        "snippet": "**Target - Auburn Hills**\n- ME ETBs\n- ME Latias Ex box\n\n<@&1425166405929668620>"
      }
    ],
    "T091": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Morning through mid-afternoon remains strongest. Expected to hit tomorrow hits Tuesdays / Thursday\u2019s usually"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Focus around 8-9:30 or 2-4. Smaller location but needs more eyes and updates"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa 17th will be selling Pokemon shortly!**\n\n6 heads are currently in line waiting <@&142516605676643952"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa 17th pictured!**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Chaos Rising ETB \n\u2022 Phantasmal Flames Mini"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa 17th update! Keep eyes on Huntington Beach Garfield today as well! ** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Focus around 8-9:30 or 2-4. Smaller location but needs more eyes and updates"
      }
    ],
    "T101": [
      {
        "date": "2025-11-13",
        "type": "guide",
        "snippet": "Smaller store, vendor usually stocks on Fri here."
      },
      {
        "date": "2025-10-23",
        "type": "confirmed",
        "snippet": "**Target Orange - Chapman just stocked up! About 7 people in line get there asap!** <@&1425166056766439528>"
      }
    ],
    "T023": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Westchester and Inglewood La Brea also had Phantasmal Flames Mini Portfolio**"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Did exactly what was posted and sold at opening today."
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Followed the script and sold right at opening. Early action is still the name of the game here though surprise pushes ca"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Westchester has Phantasmal Flames Mini Portfolio** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Did exactly what was posted and sold at opening. Store loves early action but can still surprise with additional pushes"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Sold exactly at opening today like warned. Multiple drops Wednesday at opening but store does switch up a bit."
      }
    ],
    "T055": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target LA/Westwood**\n\n- Chaos Rising 3-Pack Blisters\n- Chaos Rising Sleeved Boosters\n- Available now at guest services"
      },
      {
        "date": "2026-04-16",
        "type": "confirmed",
        "snippet": "**Target Westwood has Mega Evo / Phantasmal 2 Pack Blister**"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Hit today at opening be on it as stated typically openings here or 1-3"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Expecting more shipment can be a bit random but typically opening or 1-3"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "Expecting more shipment can be a bit random but typically opening or 10-12"
      },
      {
        "date": "2025-12-18",
        "type": "guide",
        "snippet": "Check at opening and throughout the morning for some product here!"
      }
    ],
    "T047": [
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "When it skips Mondays it tends to Hit Thursday\u2019s so BE READY. EXPECT CHAIRS TONIGHT and heads to wait it out! Does"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Signal Hill has 10 people waiting at 6am**"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Signal Hill latest update**"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "**Target Morgan Hill**\n\nSelling now :\n\n- Ascended Hero Ex Boxes\n- Ascended Hero Pin Collection Boxes\n- Fresh with **no**"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Can rotate checks periodically for some small pushes"
      },
      {
        "date": "2026-04-30",
        "type": "guide",
        "snippet": "Hit today finally"
      }
    ],
    "T120": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Hit Monday but continue checking because these stores appear to be a bit more random and can hit multiple times"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Slightly off schedule but hit today usually Tuesdays/Thursdays! paired with SAC update below"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Look for another drop tomorrow. Morning is possible but 12-2 and 4-6 remain the most common windows"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Watch for another release tomorrow. Occasionally morning but most common windows remain 12-2 and 4-6"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Look for another drop tomorrow! Rare occasions in the morning but  usually from 12-2 or 4-6!"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Usually later but line can start 11-1. Hit Tuesday so likely they receive again just check in"
      }
    ],
    "T107": [
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Early lines and usually strongest around 11-2. SHOULD FIRE because it seems to have skipped today"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Fullerton Orangethorpe vendor has not arrived yet but are DUE as they haven\u2019t stocked yet so KEEP ON IT** <@&14"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Did not hit but should sell on Friday here. Can check in case but leaning towards holding"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Early lines and usually moves 11-2. SHOULD HIT as it SEEMS to not have hit today"
      },
      {
        "date": "2026-05-14",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Orangethorpe is likely to have a line building \u2014 check in!*** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "Hit today should go again Friday!"
      }
    ],
    "T093": [
      {
        "date": "2026-03-05",
        "type": "guide",
        "snippet": "Check in the afternoon expect heads to be lingering here! Tends to hit Thursday\u2019s quietly a small line can form"
      },
      {
        "date": "2026-02-05",
        "type": "guide",
        "snippet": "Not checked as much check in 12-2 here please!"
      },
      {
        "date": "2026-01-15",
        "type": "guide",
        "snippet": "Not checked as much check in 12-2 here please!"
      },
      {
        "date": "2025-12-18",
        "type": "guide",
        "snippet": "Should hit not enough eyes can come and go FAST"
      },
      {
        "date": "2025-12-11",
        "type": "guide",
        "snippet": "Check in from 12-2 here for some items"
      },
      {
        "date": "2025-12-04",
        "type": "guide",
        "snippet": "Not checked as much check in 12-2 here please!"
      }
    ],
    "T051": [
      {
        "date": "2026-01-29",
        "type": "guide",
        "snippet": "Just restocked a few days ago anything else may be an employee kush"
      },
      {
        "date": "2026-01-22",
        "type": "guide",
        "snippet": "Restocked today quietly make sure to stay on it next week"
      },
      {
        "date": "2026-01-08",
        "type": "guide",
        "snippet": "Just restocked a few days ago but may push out slightly a bit more"
      },
      {
        "date": "2025-12-18",
        "type": "guide",
        "snippet": "Check for an employee push tomorrow a bit random times though"
      },
      {
        "date": "2025-12-11",
        "type": "guide",
        "snippet": "Check for an employee push tomorrow  can be at a random time"
      },
      {
        "date": "2025-12-04",
        "type": "guide",
        "snippet": "Check for an employee push tomorrow a bit random times though"
      }
    ],
    "T053": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Both deserve attention. Morning isn't bad but Thursday afternoons continue to fit these stores best, especially WeHo fro"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Sunset has OP-13 Sleeves sitting at Guest Servcies!** <@&1425625697141133334>"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Two stores worth watching. Morning checks are fine but strongest windows still look like 1-4PM"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Both stores deserve attention. Morning isn't bad but 1-4PM still feels like the strongest stretch"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Two stores worth watching. Morning checks are fine but strongest windows still look like 1-4PM```"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Two stores worth watching. Morning checks are fine but the stronger action continues to be 1-4 TEND TO HIT THURSDAYS AFT"
      }
    ],
    "T059": [
      {
        "date": "2026-04-30",
        "type": "confirmed",
        "snippet": "**Target Santa Monica Wilshire **\n\u2022 First Partner Illustration Box (limited)\n\u2022 Ascended Heroes 2 Pack Blister \n\u2022 Allowin"
      },
      {
        "date": "2026-04-16",
        "type": "confirmed",
        "snippet": "**Target Santa Monica/Wilshire**\n\n- Charizard ex Tins\n- Mega/Phantasmal Blisters\n- Available at guest services now.\n\n<@&"
      },
      {
        "date": "2026-01-22",
        "type": "guide",
        "snippet": "Should have some TCG by registers tomorrow check morning all the way to 12ish"
      }
    ],
    "T066": [
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Again another store that may be dropping randomly more and more!"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Granada Hills did put out select items!**\n\n\u2022 Mega Zygarde ex Premium Collection (limited)\n\u2022 Lumiose City Mini T"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "***Target Granada Hills had a late night drop of Ascended Hero Posters tonight for reference..***"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "***Target Granada Hills update, hits tomorrow at opening.***"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Holding for Friday here!"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "CONSTANT MOVEMENT ALMOST DAILY DROPS. Lines form outside now in the morning until store passes tickets for shipment"
      }
    ],
    "T030": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Watch closely for FCFS items store gets tucked a but receives HEAVY stock so always worth checks! Lines start at 7am ope"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Store is confirmed to be moving off from VQ and now selling random FCFS check 7-9"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Store has shifted toward random FCFS drops so you'll need to catch timing. Expect a little store game playing here"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Store is confirmed to be moving off from VQ and now selling random FCFS. Will need to catch it as store does tend to pla"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Look for a VQ or just FCFS stock! People will be here at opening but checks are needs from 8-11am!"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Torrance Del Amo sold small batches yesterday including last night, will need to be rotated throughout the day "
      }
    ],
    "T057": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega has a line as people wait for Needohs**"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Did not sell today so unless they sell tonight expect a LINE at opening early early"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Can check for light stock but not likely"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "EXPECT ACTION. Good chance inventory landed today so be ready at opening and don't be shocked if something sneaks out la"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "***Target 3535 La Cienega update.***"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Very likely to have received stock today so be ready for opening and check even late tonight!"
      }
    ],
    "T041": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Has been holding for Fridays a bit and also it\u2019s release week but heads will check regardless morning time!"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Last week they did hold until Friday so check morning time and ASK"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "BOTH are now overdue! Be ready in case they drop tonight if not be ready tomorrow morning until they drop!"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Santa Fe Springs has still not stocked their Poke! Can stock from 6-8pm so keep eyes but not guaranteed tonight"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Santa Fe Springs has 6 heads waiting**"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Check in in case it restocked late today but if not be on it tomorrow"
      }
    ],
    "T137": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Store claims to be doing random drops but may be holding for Friday this week but worth a check!"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Temecula/Rancho**\n\n- Vendor is here, stocking already!\n- Small line so far, head over ASAP.\n- Expect this vendo"
      },
      {
        "date": "2026-04-02",
        "type": "guide",
        "snippet": "Store did not end up stocking today so expect a line at opening to check!"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "Typically hits mid day here can check before but prime time is 12-3"
      }
    ],
    "T134": [
      {
        "date": "2026-03-05",
        "type": "guide",
        "snippet": "2 stores here both can hit check in the morning and throughout the day if not tomorrow then Friday!"
      },
      {
        "date": "2026-02-26",
        "type": "guide",
        "snippet": "2 stores here both likely to hit start at 7am store then rotate to 8am be read"
      }
    ],
    "T100": [
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Hit today as it does on Weds!"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "Hit today but check in in case it hits as it does tend to on Thursday\u2019s"
      },
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "**Target Tustin Marketplace**\n\u2022 5 people currently in line\n\u2022 Tends to hit Thursdays but did sell a bit yesterday \n\u2022 Rega"
      },
      {
        "date": "2026-04-30",
        "type": "guide",
        "snippet": "Line builds 11-1 then drops later timing shifts but BE READY"
      },
      {
        "date": "2026-04-30",
        "type": "confirmed",
        "snippet": "**Target Tustin Marketplace (Irvine Jamboree Road)**\n\u2022 Line is starting up as it does every Thursday \n\u2022 Currently at abo"
      },
      {
        "date": "2026-04-23",
        "type": "guide",
        "snippet": "LINE BUILDS 11-1 THEN DROP LATER. Be aware timing shifts slightly so can either hit closer to line or late at night"
      }
    ],
    "T099": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Sold yesterday instead of the usual Wednesday pattern two weeks in a row so pls be aware of that!"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Hit yesterday as it opposed to Wednesday so tomorrow is more of a check since store likes to hold back product"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Already did its usual Wednesday thing today"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Hit today as it usually does Weds!"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Continues staggering inventory in tiny batches. Strongest windows remain 8-11 and 1-3 HAS MORE TO SELL"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Doesn\u2019t seem to have moved today. Store keeps doing tiny staggered batches now specifically to avoid giant lines"
      }
    ],
    "T016": [
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Sleeper opening option. Stayed quiet today and people may overlook it while chasing bigger stores. Update if you check"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Sneaky opening option. Expect people before opening and lingering afterward as it did not hit today!"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Opening check and sleeper option as it did not hit today! Expect heads before opening and people will linger a bit"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "**Target West Covina S Azusa vendor is here**\n\nStill not confirmed if they will sell non release items with 4 in line no"
      },
      {
        "date": "2026-04-09",
        "type": "guide",
        "snippet": "Check 8-10 then again 4-7. Should stock up TOMORROW"
      },
      {
        "date": "2026-04-09",
        "type": "confirmed",
        "snippet": "**Target West Covina S Azusa**\n\u2022 As posted in guide store is stocking up now\n\u2022 Forming a line outside the store \n\u2022 Make "
      }
    ],
    "T012": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Friday morning as it has been dropping the past weeks"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Trending earlier lately. Focus 9-12 then revisit 3-6 if needed if not should 100% sell Friday morning"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Usually 9-12 lately here so keep eyes as it has been dropping earlier! If nothing then check 3-6"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "***Target Rosemead claimed to have no Pokemon at opening as well - check back later!***"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "***Target Rosemead has about 5ish heads as well lingering in case Vendor decides to show up..***"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Usually 3-6 vendor timing but could easily shift earlier around 10-1 like it did the last time! Store has occasionally b"
      }
    ],
    "T031": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Opening and shortly after remain your best bet. Does drop on release days with opening or later morning though"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Sold earlier this week but can go multiple times"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "TOP PRIORITY. Opening and immediately after opening are huge as it did not hit today! Timing can be random as well"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Store is OVERLY due please expect heads to be on it best checks are 9-11 or 4-7 here usually"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "**Target Redondo Beach**\n\n\u2022 Small line is forming up now \n\u2022 Store has not hit and was listed as potential \n\u2022 If it hits "
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "**Target Redondo Beach line update, still no word of vendor** <@&1425166183841140873>"
      }
    ],
    "T129": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Thursday trend continues looking strong. Last week hit but just smaller items. Likely to sell and hold release day items"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Has been hitting every Thursday please check at opening"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Redlands did stock up today as warned but only sold Tins and Sleeves!** \n\nCheck back tomorrow still! <@&1425166"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Has basically become a Thursday store lately. Check at opening some reports it may have hit earlier this week but not co"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Has been hitting every Thursday please check at opening!"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "HAS BEEN HITTING THURSDAYS. It is release week so maybe they go back to Friday this week but LINES WILL BE HERE BEFORE O"
      }
    ],
    "T168": [
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Chino Grand**\n\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 Hops Zacian ex Box\n\u2022 Sleeves also available now just sto"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Two stores. Both have been dropping randomly so may hold for Friday but check 8-10 or 12-3 in case PLEASE"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Can peep for a small drop but may hold until Monday"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "Two stores. Grand noon-2 look for some employee pushes. Philly a bit earlier"
      },
      {
        "date": "2026-04-30",
        "type": "guide",
        "snippet": "Two stores smaller drops check in with Chino Philly and Grand AT OPENING!"
      },
      {
        "date": "2026-04-23",
        "type": "guide",
        "snippet": "TWO STORES. Grand sold a bit last week. These are typically not big drops when they hit but can peep"
      }
    ],
    "T029": [
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Tiny section and hidden inventory city. Ask GS directly because product rarely makes it to the shelf right away. Sold OP"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Tiny section and hidden inventory city. Ask GS directly because product rarely makes it to the shelf right away"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Tiny TCG section and store keeps stock hidden constantly so ASK DIRECTLY AT GS"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "CHECK IN + ASK GS. Product landed just has to actually come out"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Store holds stock in the back! Has a very very small TCG section"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "CHECK IN AND ASK GS. Received product and just has to sell sometimes will not display it"
      }
    ],
    "T133": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Fontana/Slover**\n\n- OP-13 Singles\n- Chaos Rising Singles\n- Stock is at guest services.\n- 2 of each per person, "
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "Both may hold a bit for Friday. Slover sold today earlier in the day. Summit can hit at night like it did lastbweek"
      },
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "**Target Fontana Slover**\n\u2022 OP-10 Booster Sleeves \n\u2022 OP Starter Decks\n\u2022 Ask at guest services! <@&1425166052496642260>"
      },
      {
        "date": "2026-04-16",
        "type": "guide",
        "snippet": "Sold a bit yesterday at Summit so makes sense not much today. Slover nothing but PO today. May both hold for Friday a bi"
      },
      {
        "date": "2026-04-09",
        "type": "guide",
        "snippet": "Summit seemed to hit today but can check with Slover! A bit more random here"
      },
      {
        "date": "2026-04-09",
        "type": "confirmed",
        "snippet": "**Target Fontana Slover**\n\u2022 Perfect Order Booster Bundle \n\u2022 Perfect Order Booster Sleeves \n\u2022 Perfect Order Blisters\nNot "
      }
    ],
    "T130": [
      {
        "date": "2026-03-19",
        "type": "guide",
        "snippet": "Hit last week around 11-11:30 so check in in case it does again!"
      },
      {
        "date": "2026-03-12",
        "type": "confirmed",
        "snippet": "**Target Hesperia**\n\u2022 Vendor is here stocking up!\n\u2022 Large stock available today \n\u2022 Send it on over! <@&14251660524966422"
      }
    ],
    "T096": [
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Harbor has Perfect Order Booster Sleeves**"
      },
      {
        "date": "2026-04-30",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Harbor has a few Ascended Heroes 2 Pack Blister sitting!** <@&1425166056766439528>"
      },
      {
        "date": "2026-04-23",
        "type": "guide",
        "snippet": "Typically sells around 9:30-10:30 but recently sold so may hold for friday. Check in and ask"
      },
      {
        "date": "2026-03-19",
        "type": "guide",
        "snippet": "Peep for some light items tomorrow AM!"
      },
      {
        "date": "2026-03-19",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Brookhurst**\n\u2022 Line is forming up here now\n\u2022 No confirmed drop just yet \n\u2022 Last week sold small it"
      },
      {
        "date": "2026-02-19",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Brookhurst**\n\u2022 Vendor is here setting up\n\u2022 No real line has formed, store may not allow it or ask "
      }
    ],
    "T128": [
      {
        "date": "2026-03-26",
        "type": "guide",
        "snippet": "Hit last week at opening CHECK IN THROUGHOUT THE DAY AS WELL"
      },
      {
        "date": "2026-03-19",
        "type": "confirmed",
        "snippet": "**Target Riverside/Canyon Springs**\n\n- Ascended Heroes Tech Sticker\n- Limited stock so go within 15 or so.\n- Hit earlier"
      }
    ],
    "T056": [
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "STILL KEEPING THINGS QUIET. Best looks remain 8-10, then another hard sweep around 12-2, then again 5-7 if they decide t"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Still staying lowkey. Best windows continue to be 8-10, then another strong pass from 12-2, and again around 5-7 once tr"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "STILL KEEPING THINGS QUIET. Best looks remain 8-10, then another hard sweep around 12-2, then again 5-7 if they decide t"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "STILL FLYING UNDER THE RADAR. Opening looks and a bit later ask if they\u2019ll hold for Friday"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "STILL QUIET. Strongest windows look like 8-10 first then 12-2 or even 5-7 unless they randomly dump product super late a"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Still a sleeper and STILL hasn\u2019t really moved. Opening, 9ish, then 11-1 or 4-6"
      }
    ],
    "T098": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Timing call landed today and should hit AGAIN on Friday later morning!"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Brookhurst still going with OP-13!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Timing call was dead on today so keep this store on the radar again tomorrow if inventory carried over, but not one of t"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Morning checks from 8-10. Store generally confirms shipments if asked and people will be waiting but may end up holding "
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Check for a drop from 8-10am! People will be here and store will confirm if they received stock or a new shipment"
      },
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Hit today but light reruns 9:30-10:30 possible if another shipment lands but likely will go again Friday"
      }
    ],
    "T009": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Another major focus. Mayyyy end up pushing to Friday but heads will be checking in case!"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Upland AS WARNED**\n\n\u2022 Confirmed their Pokemon drop this morning \n\u2022 Was warned prior in guide \n\u2022 Do not be deter"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Upland will have LEFTOVERS** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "ANOTHER BIG PRIORITY. Stayed quiet and expect another opening crowd because previous stock was mostly employee pushed"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "ANOTHER BIG PRIORITY. Stayed quiet and expect another opening crowd because previous stock was mostly employee pushed"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Upland is at 16 heads prior to opening already!** <@&1425166052496642260>"
      }
    ],
    "T116": [
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Seal Beach has Lumiose City Mini Tins** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Likely tomorrow as when it skips Monday\u2019s it tends to"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "***Target Seal Beach has a crowd of people waiting for the vendor. Be alert!*** <@&1425166140966965248>"
      },
      {
        "date": "2026-04-30",
        "type": "guide",
        "snippet": "Sold today at opening"
      },
      {
        "date": "2026-04-23",
        "type": "guide",
        "snippet": "LIGHT CHECK ONLY. Possible but tends to wait for normal restock day"
      },
      {
        "date": "2026-04-16",
        "type": "guide",
        "snippet": "Check in possible for Signal tomorrow so just peep in not confirmed just check in"
      }
    ],
    "T112": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Alicia and Jer\u00f3nimo hit today and should have more Friday! San Juan likely for Friday whenever they receive shipment. Sa"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Morning checks plus afternoon reruns on Alicia. San Clemente didn\u2019t sell today so can also check. San Juan Capistrano is"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Jer\u00f3nimo**\n\n\u2022 OP DP-11 Double Pack \n\u2022 Chaos Rising ETB\n\u2022 First Partner Illustration Series 2 <@&1"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Morning checks first then afternoon reruns at Alicia. San Clemente didnt seem to sell so keep eyes there and on San Juan"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Morning checks plus afternoon reruns on Alicia. San Clemente sold today so can also check with San Juan Capistrano. MV P"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "San Clemente sold earlier today. San Juan Capistrano could be checked and updated! Mission Viejo stores can be checked b"
      }
    ],
    "T042": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "May have sold a bit late today. Opening and 10-12 remain strongest with additional waves always possible even into the e"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood put out OP-13 and Chaos Rising Booster Bundle may be limited on OP but check** <@&14251661409"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target Whittier Whitwood is still going on all product stated earlier!!*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Did sell today but later in the day. Opening and 10-12 continue being the strongest windows, but don\u2019t leave too quickly"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood got their shipment for the day!**\n\n\u2022 Mega Moonlight Tins \n\u2022 Chaos Rising 3 Pack \n\u2022 Lumiose Ci"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target Whittier/Whitwood still has Luminous City Mini Tins from yesterday's ping. Stock is being kep[t at guest servi"
      }
    ],
    "T004": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Alhambra opened with Needoh only this morning but is sold out**"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "STILL WAITING. Expect another morning crowd until this finally unloads. Best windows remain 8-9:30 and later around 3-6"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Alhambra has 8 people waiting this morning!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Alhambra line is a bit longer now waiting for vendor to possibly stop by!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Alhambra and Duarte both still have lines waiting as we have posted all morning**\n\nTarget **Upland** claimed no"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Alhambra still no vendor so reminder to check in with Duarte!** <@&1425166052496642260>"
      }
    ],
    "T036": [
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target San Pedro has Chaos Rising Booster Sleeves**"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "HAS NOT BEEN HITTING FRIDAYS. CHECK IN THE MORNING ASK FOR A DROP/VQ"
      },
      {
        "date": "2026-04-30",
        "type": "confirmed",
        "snippet": "**Target San Pedro restocked today, has been off schedule for Fridays so we will remind you to check next week as well**"
      }
    ],
    "T167": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Store continues saying Friday"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Santa Ana Bristol**\n\n\u2022 Employee confirmed a Pokemon drop\n\u2022 Usually was holding for Friday\u2019s\n\u2022 Make your way ove"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Santa Ana Bristol update!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Can check in but store did claim they would hold for Friday so always ask and verify"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Store claimed Friday but always worth checking because plans change"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Can check in but store did claim they would hold for Friday but always check!"
      }
    ],
    "T105": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Anaheim Euclid dropped OP-13 and Chaos Rising Booster Bundle!** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Anaheim Euclid!**"
      },
      {
        "date": "2026-05-07",
        "type": "guide",
        "snippet": "Two stores here, Hills hit last week in afternoon but rotate both in the morning"
      }
    ],
    "T035": [
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Main window still sits around 8-10. Shipments tend to land then with occasional lighter activity later. If tomorrow miss"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Strongest checks still around 8-10. Usually shipment lands around then then lighter afternoon reruns if nothing happens "
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Check morning time 8-10! Usually will receive by then then light checks in afternoon if nothing"
      },
      {
        "date": "2026-02-19",
        "type": "confirmed",
        "snippet": "**Target Lomita**\n\u2022 Pokeball Tins \n\u2022 Pokemon Day Collection 2026 \n\u2022 May have more tomorrow for release, low checked stor"
      },
      {
        "date": "2025-12-11",
        "type": "confirmed",
        "snippet": "**Target Lomita/PCH**\n\n- 20+ Charizard X ex UPC\n- 15-20+ Prismatic PRM Figure Collection\n- 2025 Collector's Lunch Box\n- "
      }
    ],
    "T077": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Back to Friday\u2019s here!"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Has been hitting a bit earlier as they sell when they get their shipment so checks from 10-12 remain strong. Did sell to"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Has shifted earlier lately. Focus around 10-12 as they increasingly sell once shipments arrive"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Has been hitting a bit earlier as they sell when they get their shipment so checks from 10-12!"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Moorpark as well!**\n\u2022 Mega Zygarde ex Premium Collection \n\u2022 Chaos Rising Booster Sleeves \n\u2022 Perfect Order Blist"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Random selling lately instead of waiting for Friday. Opening checks and then another heavy 12-2 rerun and evening!"
      }
    ],
    "T103": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Hit yesterday opening so can be due! Will either sell again tomorrow morning or Friday! (unless a sneaky Thursday night "
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Anaheim Hills Update!**"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Sold at opening today as warned on guide and posted in group!"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Check in because it may not have sold today. Morning deserves attention"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Check in may not have sold today so be ready morning time!"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Check in the morning in case they did not sell today!"
      }
    ],
    "T097": [
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Was live today and again but off the guide"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Moved today but inventory was limited"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Sold today but was more limited stock"
      },
      {
        "date": "2026-05-14",
        "type": "guide",
        "snippet": "Round 2 again here tomorrow as it did not seem to hit!"
      },
      {
        "date": "2026-03-12",
        "type": "confirmed",
        "snippet": "**Target Cypress**\n\u2022 Ascended Heroes ETB \n\u2022 Ascended Heroes Mini Tins \n\u2022 Prismatic Evolutions Booster Bundles \n\u2022 Other i"
      },
      {
        "date": "2025-12-18",
        "type": "confirmed",
        "snippet": "**Target Cypress dropped a weak pack right now!** <@&1425166056766439528>"
      }
    ],
    "T078": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Usually Tuesday\u2019s/Thursdays here! Release weeks they tend to drop Friday\u2019s as well but heads will check be there a bit e"
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Opening should hit!"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Newbury Park sold at opening!** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Newbury Park at opening as opening sorry ran out of room** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Newbury Park update before opening!**"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Looks like it hasn\u2019t sold much so check in! May hold for Friday but ask and CHECK IN THE MORNING PLS"
      }
    ],
    "T170": [
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Check for a drop in the morning unless they hold for Friday!"
      },
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "**Target Goleta**\n\n- First Partner Illustration Collection\n- Perfect Order Sleeved Booster\n- 2 of each per person right "
      },
      {
        "date": "2026-04-23",
        "type": "confirmed",
        "snippet": "***Target Goleta has First Partner Illustration Collection, 2 per.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-04-16",
        "type": "confirmed",
        "snippet": "**Target Goleta**\n\n- Ascended Heroes ETB\n- 7 were available with a line.\n- Needohs and smaller items are left.\n\n<@&14889"
      },
      {
        "date": "2026-04-02",
        "type": "confirmed",
        "snippet": "**Target Goleta** <@&1488964203103522997>"
      }
    ],
    "T127": [
      {
        "date": "2026-05-21",
        "type": "guide",
        "snippet": "Two"
      }
    ],
    "T169": [
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Both have a shot from 8-10 or 12-3. Worth checking both locations as they can sell randomly"
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Both stores have a chance from 8-10 or 12-3. Last week Philly sold around 12!"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Both have a shot from 8-10 or 12-3. Worth checking both locations as they can sell randomly"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia**\n\nStore sold around noon today and had multiple items reminder that store is now dropping R"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia leftovers above!**"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Both stores remain capable of surprise drops. Check 8-10 and 12-3"
      }
    ],
    "T165": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Continues proving it can release throughout the morning or later in the day. Definitely keep this in rotation will sell "
      },
      {
        "date": "2026-06-25",
        "type": "guide",
        "snippet": "Watch for another opening or morning release here as store can get sneaky. Today again showed it can become a later-day "
      },
      {
        "date": "2026-06-18",
        "type": "guide",
        "snippet": "Watch for another sneaky morning release. Store has a habit of surprising people"
      },
      {
        "date": "2026-06-11",
        "type": "guide",
        "snippet": "Watch for another opening or morning release here as store can get sneaky!"
      },
      {
        "date": "2026-06-04",
        "type": "guide",
        "snippet": "Keep eyes on opening and morning. Another surprise drop is possible as store has been doing multiple drops"
      },
      {
        "date": "2026-05-28",
        "type": "guide",
        "snippet": "Look for a possible opening / morning drop again!"
      }
    ],
    "T050": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Usually hits Thursdays but when it skips the Monday drop. Can check IN CASE as stores have been receiving extra!"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Cerritos South Street**\n\n\u2022 14 heads in line currently \n\u2022 Store will be taking a VQ\n\u2022 This is for possible vendo"
      },
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target Cerritos South St <@&1425166140966965248>***"
      }
    ],
    "T111": [
      {
        "date": "2026-07-02",
        "type": "guide",
        "snippet": "Did not seem to hit so expect heads early here for a drop tomorrow !"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target La Paz was at 15 heads over an hour ago!**"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target La Paz line***"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target La Paz drop confirmed was posted earlier as well!** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target La Paz items today!** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target La Paz with minimal leftovers**"
      }
    ],
    "T143": [
      {
        "date": "2025-10-16",
        "type": "confirmed",
        "snippet": "**Target Desert Ridge** \n\u2022 Mega ETB\n\u2022 Currently available for the AZ FOLKS!\n<@&1425166321389408286>"
      }
    ],
    "T155": [
      {
        "date": "2025-10-23",
        "type": "confirmed",
        "snippet": "**Target Red Mountain**\n\u2022 Destined , Surging Sparks, Mega Singles all available now! <@&1425166321389408286>"
      }
    ],
    "T043": [
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Lakewood is stocking sports and other items**"
      },
      {
        "date": "2026-01-01",
        "type": "confirmed",
        "snippet": "**Target Lakewood**\n\u2022 Destined Rivals Booster Sleeves\n\u2022 Mega Evo Booster Sleeves\n\u2022 Phantasmal Flames Booster Sleeves\n\u2022 C"
      },
      {
        "date": "2025-11-20",
        "type": "confirmed",
        "snippet": "**Target Lakewood REMINDER** \n\u2022 Drops every Thursday with vendor arriving a bit later \n\u2022 Lines begin typically about NOW"
      },
      {
        "date": "2025-11-20",
        "type": "confirmed",
        "snippet": "__**Target Lakewood Update:**__\n\n- Virtual queue (VQ) just started.\n- You were warned for over 2 hours.\n- As of now, the"
      },
      {
        "date": "2025-11-13",
        "type": "confirmed",
        "snippet": "**Target Lakewood for example has 3 heads already waiting hours ahead** <@&1425166140966965248>"
      },
      {
        "date": "2025-11-13",
        "type": "confirmed",
        "snippet": "**Target Lakewood**\n\n- Line of 6 is forming for weekly stock.\n- Vendor is expected between 11-12:30.\n- Head over, line w"
      }
    ],
    "T139": [
      {
        "date": "2025-12-04",
        "type": "confirmed",
        "snippet": "**Target Lake Elsinore**\n\u2022 Restock is happening right now\n\u2022 Make your way over if around\n\u2022 Update items and availability"
      },
      {
        "date": "2025-11-13",
        "type": "confirmed",
        "snippet": "**Target Lake Elsinore - Collier Ave**\n\n- Vendor **JUST** arrived here!\n- There is literally 1 person in line.\n- Head ov"
      },
      {
        "date": "2025-11-06",
        "type": "confirmed",
        "snippet": "**Target Lake Elsinore - 18287 Collier Ave**\n\n- Restocking very shortly!\n- Line of about 10 people.\n- Not cooked, usuall"
      }
    ],
    "T140": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Murrieta Cal Oaks claimed no Poke today**"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Murrieta Cal Oaks put out a bit of Poke and One Piece after claiming nothing in the morning** <@&14251660524966"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Murrieta Cal Oaks will have some Poke at opening**"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Murrieta Cal Oaks will sell at opening and has 20+ heads in line** <@&1425166052496642260>"
      },
      {
        "date": "2025-11-13",
        "type": "confirmed",
        "snippet": "**Target Murrieta**\n\n- Restocking right now!!\n- Only 6-8 people in line.\n- Phantasmal will be sold.\n- Head over if you'r"
      }
    ],
    "T136": [
      {
        "date": "2026-01-08",
        "type": "confirmed",
        "snippet": "**Target 1670 E 4th, Ontario**\n\u2022 Destined Rivals Booster Sleeves \n\u2022 Phantasmal Flames Booster Sleeves \n\u2022 Both available "
      },
      {
        "date": "2025-11-20",
        "type": "confirmed",
        "snippet": "**Target 1670 4th Ontario** \n\u2022 Mega Evolution Sleeves \n\u2022 2 per person \n\u2022 Available at guest services! <@&142516605249664"
      }
    ],
    "T052": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "***Target West Hollywood has Chaos Rising Sleeved Boosters.***"
      },
      {
        "date": "2026-04-02",
        "type": "confirmed",
        "snippet": "**Target West Hollywood**\n\u2022 OP-15 Booster Sleeves \n\u2022 Available now at the front desk!\n\u2022 2 per person here head in over! "
      },
      {
        "date": "2026-03-05",
        "type": "confirmed",
        "snippet": "**Target West Hollywood**\n\u2022 Prismatic Evolutions Booster Bundles \n\u2022 Available now at GS\n\u2022 Get there store put out not lo"
      },
      {
        "date": "2026-02-19",
        "type": "confirmed",
        "snippet": "**Target West Hollywood has Ascended Heroes Mini Tins!** <@&1425625697141133334>"
      },
      {
        "date": "2026-02-05",
        "type": "confirmed",
        "snippet": "**Target West Hollywood also has Pokemon Day Collection 2026 ** <@&1425625697141133334>"
      },
      {
        "date": "2025-12-04",
        "type": "confirmed",
        "snippet": "**Target West Hollywood**\n\n- Destined Rivals Sleeved Boosters\n- Mega Evolutions Sleeved Boosters\n- Journey Together Slee"
      }
    ],
    "T164": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Commerce**\n\n\u2022 OP-13 Booster Sleeves\n\u2022 Chaos Rising 3 Pack \n\u2022 This store does tend to play games so expect limit"
      },
      {
        "date": "2026-03-26",
        "type": "confirmed",
        "snippet": "**Target Commerce stocking now**\nClaiming no Poke (surprise) but some people sticking around in case. This store and ven"
      },
      {
        "date": "2026-01-08",
        "type": "confirmed",
        "snippet": "**Target Commerce**\n\u2022 Destined Rivals Booster Sleeves \n\u2022 Available now on TCG section \n\u2022 Head on over if you need <@&142"
      }
    ],
    "T069": [
      {
        "date": "2026-03-19",
        "type": "confirmed",
        "snippet": "**Target Pacoima is starting to drop chairs for tomorrows release**\n\n**Target Topanga has someone who dropped a motherlo"
      },
      {
        "date": "2026-03-19",
        "type": "confirmed",
        "snippet": "**Target Pacoima is confirmed for tomorrow.**"
      },
      {
        "date": "2026-03-05",
        "type": "confirmed",
        "snippet": "**Target Pacoima still has product sitting!** <@&1425165995575742634>"
      },
      {
        "date": "2026-03-05",
        "type": "confirmed",
        "snippet": "**Target Pacoima**\n\u2022 Ascended Heroes 2 Pack Blister \n\u2022 Available now at guest services \n\u2022 Store sells sporadically check"
      },
      {
        "date": "2026-03-05",
        "type": "confirmed",
        "snippet": "**Target Pacoima still going with BOTH items!** <@&1425165995575742634>"
      },
      {
        "date": "2026-03-05",
        "type": "confirmed",
        "snippet": "**Target Pacoima**\n\u2022 Ascended Heroes Mini Tins \n\u2022 Phantasmal Flames Booster Sleeves \n\u2022 Ran out of tech stickers selling "
      }
    ],
    "T019": [
      {
        "date": "2026-03-26",
        "type": "confirmed",
        "snippet": "**Target La Canada restocked YESTERDAY and has PF mini portfolios if anyone looking** <@&1425166052496642260>"
      }
    ],
    "T147": [
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "**Target Santee update** <@&1488964167997063309>"
      },
      {
        "date": "2026-06-11",
        "type": "confirmed",
        "snippet": "***Target Santee/San Diego***\n\n- Vendor is currently there and stocking as of now.\n- Currently have about 15+ heads line"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Santee**\n\n\u2022 Vendor is here stocking up now\n\u2022 20+ are currently in line\n\u2022 Prismatic Evolutions ETB have been spo"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Santee has about 20 heads waiting for vendor to possibly show** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-23",
        "type": "confirmed",
        "snippet": "**Target Santee is stocking up!**\n\u2022 35ish people are currently in line\n\u2022 Vendor is here stocking up now\n\u2022 Stock isn\u2019t lo"
      },
      {
        "date": "2026-04-02",
        "type": "confirmed",
        "snippet": "**Target Santee**\n\u2022 Ascended Heroes ETB \n\u2022 First Partner Illustration Box\n\u2022 Perfect Order ETB \n\u2022 About 13 people current"
      }
    ],
    "T159": [
      {
        "date": "2026-06-18",
        "type": "confirmed",
        "snippet": "**Target Balboa / San Diego line is forming up!** <@&1488964167997063309>"
      },
      {
        "date": "2026-05-14",
        "type": "confirmed",
        "snippet": "**Target Balboa has a line forming up now for a drop!** <@&1488964167997063309>"
      },
      {
        "date": "2026-05-14",
        "type": "confirmed",
        "snippet": "__**Target Balboa/SD Update:**__\n\n- RESTOCKING PRISMATIC ETBs!\n- **12** PE ETBs are available, other items too.\n- [We po"
      },
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "**Target Balboa (SD)**\n\n- Line is forming for today\u2019s restock.\n- It should happen closer to 12-1PM.\n- Please continue to"
      },
      {
        "date": "2026-04-16",
        "type": "confirmed",
        "snippet": "***Target Balboa just hit. Items remaining are listed above.*** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-09",
        "type": "confirmed",
        "snippet": "**Target Balboa**\n\u2022 Ascended Heroes Mini Tins \n\u2022 Mega Charizard Tin \n\u2022 Possibly other items hitting as well <@&148896416"
      }
    ],
    "T109": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target La Habra**\n\n- OP-13 Singles\n- First Partner Illustration Series 2\n- Stock should be at guest services.\n- Head o"
      },
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "***Target La Habra still has OP-13 Singles.***"
      },
      {
        "date": "2026-05-07",
        "type": "confirmed",
        "snippet": "**Target La Habra has chairs being put down already for a drop tomorrow morning** <@&1425166056766439528>"
      },
      {
        "date": "2026-04-16",
        "type": "confirmed",
        "snippet": "**Target La Habra**\n\n- Vendor is here now!\n- Store is currently stocking.\n- CLAIMING ONLY SPORTS - Expect Topps.\n- We\u2019ll"
      }
    ],
    "T146": [
      {
        "date": "2026-04-30",
        "type": "confirmed",
        "snippet": "**Target Poway**\n\u2022 Vendor is restocking here now \n\u2022 20 heads in line and growing \n\u2022 Keep on your stores and update if yo"
      },
      {
        "date": "2026-04-23",
        "type": "confirmed",
        "snippet": "**Target Poway has about 20ish in line waiting for vendor**\n\n**Target Encinitas should drop later around 4-6pm with a bi"
      }
    ],
    "T171": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Encinitas has vendor on site!** <@&1488964167997063309>"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Encinitas**\n\n\u2022 20 heads are currently in line\n\u2022 Expecting a restock, heads will wait it out here\n\u2022 Keep updatin"
      },
      {
        "date": "2026-06-04",
        "type": "confirmed",
        "snippet": "**Target Encinitas will be selling soon!** \nPosted earlier as well <@&1488964167997063309>"
      },
      {
        "date": "2026-05-28",
        "type": "confirmed",
        "snippet": "**Target Encinitas vendor is here and line has built up a bit!** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-23",
        "type": "confirmed",
        "snippet": "**Target Poway has about 20ish in line waiting for vendor**\n\n**Target Encinitas should drop later around 4-6pm with a bi"
      }
    ],
    "T090": [
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa/Harbor**\n\n- Member sent pic, vendor is stocking.\n- Please stand by for an item update.\n- Regardless,"
      },
      {
        "date": "2026-05-14",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa Harbor had a few leftover First Partner Illustration Box and Pokemon Day Collection 2026**\n\n**Also c"
      }
    ],
    "T161": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Plaza Bonita line update!** <@&1488964167997063309>"
      },
      {
        "date": "2026-05-21",
        "type": "confirmed",
        "snippet": "**Target Plaza Bonita if anyone is near from Ascended Heroes Booster Bundles!** <@&1488964167997063309>"
      }
    ],
    "T125": [
      {
        "date": "2026-06-25",
        "type": "confirmed",
        "snippet": "**Target Moreno Valley/Nason**\n\n- LIMITED Ascended Heroes ex Boxes\n- Moonlight Tins\n- Luminous City Mini Tins\n- Phantasm"
      }
    ],
    "T131": [
      {
        "date": "2026-07-02",
        "type": "confirmed",
        "snippet": "**Target Apple Valley Highway 18**\n\n\u2022 Vendor is here stocking now\n\u2022 No confirmation of Poke yet\n\u2022 Make your way over if "
      }
    ]
  },
  "friday": {
    "T063": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Usually a Friday store, claimed drop would be cancelled if people line up before 5am we shall see"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Van Nuys/Raymer sold only Ascended Hero Ex Boxes to those waiting in line.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Van Nuys/Raymer dropped a small 2nd shipment with OP-16 Singles and Perfect Order Checklane Blisters. PO Coin "
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "One of the more classic Friday locations. Expect chairs 4-5am. Could easily slide to Saturday if store plays games"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Raymer selling Ascended Heroes Mega Ex Collection and First Partner Illustration Series 2, only 1 box "
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Usually a Friday store but as seen today store has been selling product randomly so expect lower stock"
      }
    ],
    "T064": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Friday mornings have become the pattern here so opening movement is likely"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Mission Hills update, deeper now too.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Mission Hills currently has about 40ish heads***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Mission Hills tickets were passed out to those in line..***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Mission Hills***\n\nSelling to line of 40+ :\n\n- Mega Zygard Ex Boxes\n- Ascended Hero Ex Boxes\n- First Partner Bo"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Friday morning trend keeps getting stronger. Be ready right when doors open."
      }
    ],
    "T077": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Moorpark\u2019s line has 2x\u2019d now, 16-20+ in line.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Moorpark update! Selling in 15 mins.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Moorpark item update from opening.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Moorpark is also due for a round two!***\n\n> - Usually unloads 2nd shipments on Friday.\n> - They oftentimes sel"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Start in the morning but don\u2019t ignore afternoon as usually. Timing here has been random lately"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Moorpark is back to Friday mornings.***"
      }
    ],
    "T085": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Northridge/Sherwood has 40+ people in line now. They sell their accumulated weekly stock every Friday at openi"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Northridge/Sherwood is selling the items pictured, 50+ I line.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening drop with heads already posted up"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Northridge/Sherwood has 40+ in line.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Northridge/Sherwood is deep.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Northridge Sherwood pictured!**"
      }
    ],
    "T071": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Both have sold this week. They both also hold back product but not as locked as others"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Both should be a go at opening and 11051 should have extra items!"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "11051 feels stronger since it hasn\u2019t sold. 12121 sold Tuesday but should have some form of product left"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "11051 feels more likely since it hasn\u2019t sold. 12121 also has not sold"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "11051 feels more likely as they haven\u2019t sold!. 12121 had a bigger drop this week but can go for held back stock"
      },
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "11051 a bit more likely but sometimes holds. 12121 had a bigger drop today so less likely for tomorrow unless small held"
      }
    ],
    "T082": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Westlake update. Don\u2019t sleep on this store. They hold for Fridays and drop PACKS!*** <@&1488964203103522997> <"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Friday opening drop and chairs will start tonight"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Westlake sold their weekly pack and still has products at guest services!*** <@&1488964203103522997> <@&142516"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Friday opener. Expect people setting up tonight."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Friday opening drop and chairs will start tonight"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "***Target Westlake (805) update.***"
      }
    ],
    "T070": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target 11051 North Hollywood has had a line since last night.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target 11051 North Hollywood has Squeezy product(s), but no Pokemon.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target North Hollywood 11051**\n\nStore is passing out tickets now with PE ETB + more confirmed! 40 heads in line <@&142"
      },
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target North Hollywood 11051 as warned is selling! May go quick ! ** <@&1425165995575742634>"
      },
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "**Target 11051 North Hollywood has Perfect Order Booster Sleeves sitting right now, need to keep checking or look for a "
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target 11051 North Hollywood (not 11021) is in the video above.***"
      }
    ],
    "T086": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Northridge/Corbin update, always deep since they hit every Friday at opening.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Northridge/Corbin is a go! 40+ in line.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Another locked Friday opening option here"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Northridge/Corbin's current crowd for 10PM's line formation.*** \ud83c\udf7f"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Northridge Corbin selling their pack as pictured to those in line as well!!\ud83d\udd25***"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Another location that drops every Friday morning!"
      }
    ],
    "T067": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Topanga Mall haa 40+ in line.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Topanga Mall was updated earlier & still has First Partner for those in line.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Topanga Mall still has OP-13 Singles.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening seller and should move as it has not seemed to hit"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Topanga Mall line is up to 15-20 people, and they will sell at 8AM.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Topanga Mall is selling their pack now! Line is 30+ deep so only go for smaller items at this point.*** <@&142"
      }
    ],
    "T065": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Sylmar only sold Pokeball\u2019s & other unrelated TCG items - like stated above, be on top of the store in case th"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening first, then run it back 12-2 if the morning misses. This store can move early and still have another wave later"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Sylmar update.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Sylmar***\n\nSold only :\n\n- Chaos Rising ETB\u2019s\n- Chaos Rising 3pk Blister\n- Chaos Rising Sleeves\n\n<@&14251659955"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Hit opening first and don't call it quits if it misses. Biggest secondary window stays around 12-2 and this store has no"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening first then run it back 12-2 if the morning misses. This store can sell early then still have another wave later"
      }
    ],
    "T125": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Moreno Valley/East update.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Moreno Valley East update.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Hit today instead of tomorrow so look for other options"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening release expected. Chairs should already be showing up."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening drop with chairs expected!"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Dropping at opening chairs will be out!"
      }
    ],
    "T128": [
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Riverside Canyon Springs sold at opening!**"
      },
      {
        "date": "2025-10-03",
        "type": "guide",
        "snippet": "Be there BEFORE 8AM. Should sell at opening alongside all 3 other Riverside locations. Wll have ETB!"
      }
    ],
    "T126": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening drop and people will line up early. Store sold Monday but may still"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside also has about 15 in line**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside did drop at opening as warned with the following items**\n\n\u2022 First Partner Illustration Series 2"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening looks strongest. Store has sold throughout the week but inventory could still be better than previous weeks."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Tyler Riverside has NO POKE at opening**"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening drop and people will line up early. Store has moved a little during the week so stock may be lighter but check i"
      }
    ],
    "T127": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Neither has really hit this week so expect lines at both!"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Both worth a morning look may have limited extra product"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "May have sold today so possible light stock or release day stuff tomorrow"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Both can be opening checks but they did drop earlier this week so stronger options may exist"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Both can check for opening drops but did drop earlier so may be better at others"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Riverside Arlington selling!**"
      }
    ],
    "T129": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "hit today but light pack so CHECK AT OPENING"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Did not drop today so be ready!"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Did NOT hit today may have hit earlier this week but not confirmed so CHECK AT OPENING"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Ended up hitting today as warned"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Ended up going today as warned"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Redlands confirmed for opening and allowing only 1 item per person so will have leftovers!** <@&142516605249664"
      }
    ],
    "T138": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target San Bernardino has 3-6 people in line. ***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target San Bernardino update!**"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening check but timing can also randomly shift here"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Start with opening but keep in mind this location can do things at odd times."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening check but timing can also randomly shift here"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Opening check but can also move randomly"
      }
    ],
    "T122": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Norco is at 40+ prior to opening!**"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Norco sold Mega Greninja Premium Collection that went out of stock with line**"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Endes up selling today so look for release day product tomorrow"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Norco is selling now as well!**"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Norco  ; in case you wanted to stop by** <@&1425166052496642260>"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Norco is selling now. Line is extremely long!***"
      }
    ],
    "T130": [
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "Opening drop with big stock"
      },
      {
        "date": "2026-05-08",
        "type": "guide",
        "snippet": "Opening drop with heavier stock than most stores"
      },
      {
        "date": "2026-05-01",
        "type": "guide",
        "snippet": "OPENING DROP with BIG STOCK"
      },
      {
        "date": "2026-04-17",
        "type": "guide",
        "snippet": "OPENING DROP with BIG STOCK"
      },
      {
        "date": "2026-04-10",
        "type": "guide",
        "snippet": "Friday morning hitter same routine"
      },
      {
        "date": "2026-04-03",
        "type": "guide",
        "snippet": "Drops at opening here known to get BIG stock"
      }
    ],
    "T020": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall has a line of 20!***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Culver Mall is selling now!** <@&1425166183841140873>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall\u2019s line will form soon too.***\n\n> - Crowd forms outside, that turns into a line.\n> - Should re"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening first but if they spin you, run it back 10-1 and again 3-6. Multiple days now they have sold around noon even th"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall has 15 in line hoping for an opening drop!*** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Culver City Mall has 15 people lingering.***\n\n> - Line is forming outside of the store.\n> - DO NOT take this a"
      }
    ],
    "T022": [
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Should sell at opening here 7am as well!"
      },
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "Opening check. Expect some heads but may not have high stock"
      },
      {
        "date": "2026-05-08",
        "type": "guide",
        "snippet": "Smaller stock expected and did not hit tonight so opening chex"
      },
      {
        "date": "2026-05-01",
        "type": "guide",
        "snippet": "Opening check expect a few heads here but may not have more"
      },
      {
        "date": "2026-04-17",
        "type": "guide",
        "snippet": "Opening check expect a few heads here and a bit lower stock"
      },
      {
        "date": "2026-04-10",
        "type": "guide",
        "snippet": "If it didn\u2019t sell tonight then opening is your best look don\u2019t miss"
      }
    ],
    "T008": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Has not stocked Poke so BIG eyes tomorrow! If nothing at open look for vendor 8-10"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target La Verne no Poke**"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target La Verne is selling!** <@&1425166052496642260>"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "***Target La Verne just dropped Ascended Heroes Booster Bundles. Stores are GOING TO restock AFTER opening drops today! "
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target La Verne seems to be selectively selling Ascended Heroes Booster Bundles so make sure to ask!** <@&142516605249"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target La Verne is still going ASK for the Ascended Heroes Booster Bundles along with other items!** <@&14251660524966"
      }
    ],
    "T056": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target LA/1833A La Cienega is selling some Pokemon at opening!*** <@&1425625697141133334> <@&1425166183841140873>"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening check as they have not sold the whole week!"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening check. Store often signals its plans before doors open if tickets are involved sometimes between 4-7:30am can pa"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening check should confirm with tickets before opening if they\u2019ll drop as they have been quiet this week!"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target 1833a Cienega is confirmed for tomorrow and will also have some Ascended products but may be limited so be earl"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Opening check should confirm with tickets if they\u2019ll have a drop prior  to opening !"
      }
    ],
    "T003": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Eagle Rock sold at opening!**\n\n\u2022 OP-13 \n\u2022 Mega Greninja Premium Collection \n\u2022 Phantasmal Flames Mini Portfolio"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Usually opening here and heads will line up regardless"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Eagle Rock**\n\n- Brought out OP-13 Singles!\n- Allowing a few per person too.\n- Likely to get wiped very quickly."
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening remains king. Expect people already lined up."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Eagle Rock MAY not receive by opening! Check throughout the day or morning in case still** <@&14256256971411333"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Usually opening here and heads will line up regardless!"
      }
    ],
    "T028": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Inglewood Century selling Mega Greninja Premium Collection only this morning!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Inglewood/Century watch for a weekend drop! We'll cover it more tomorrow and Sunday.***"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Inglewood Century as posted on guide will not sell Poke at opening**"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Inglewood Century dropped a limited amount of Prismatic Evolutions ETB at opening**"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Inglewood Century only has Chaos Rising Booster Sleeves!**"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "***Target Inglewood/Century STILL has lots of products.*** <@&1425166183841140873>"
      }
    ],
    "T025": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening check since Fridays usually hit here and has not hit yet!"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Friday mornings remain its comfort zone. Can also release slightly after opening if they need time to get organized."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening check since Fridays usually hit here"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Lawndale is claiming no Poke today**"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Lawndale just received shipment lets hope for some items** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Lawndale still going!**"
      }
    ],
    "T036": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "May sell items FCFS at opening or take a VQ line will be here EARLY EARLY"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target San Pedro is a go, deep line though! This store was posted in the guide too.***\n\n> - Moonlight Tins\n> - Chaos "
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Could run FCFS immediately or switch to a VQ. Opening is the focus."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "May sell items FCFS at opening or take a VQ"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "May sell items FCFS at opening or take a VQ!"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target San Pedro has Chaos Rising Booster Sleeves and Perfect Order Booster Sleeves**\n\nReminder to update and be ready"
      }
    ],
    "T027": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Manhattan Beach is a go! Small line so far.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening and 9-11. Sold Wednesday here but does receive alot of stock! 7am opening PLS UPDATE"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Manhattan Beach line about 7-10 heads!**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Manhattan Beach has not dropped yet. They are due for a pack!*** <@&1425166183841140873> <@&142516614096696524"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening and 9-11 remain strongest. Store consistently keeps inventory tucked away."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Manhattan Beach only sold Mega Zygarde ex Premium Collection** <@&1425166183841140873>"
      }
    ],
    "T031": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Redondo Beach/Kingsdale does not have much of a line yet!***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Look for a drop 10-12 or 3-6 and expect lines as it hasn\u2019t had a drop so vendor should stop by```"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Redondo Beach/Kingsdale has 4 in line now. People are waiting for the vendor to arrive.*** <@&1425166183841140"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Most likely windows stay 10-12 and 3-6. Expect people waiting around."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Redondo Beach Kingsdale has a line waiting hoping Poke is brought out!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Look for a drop 10-12 or 3-6 and expect lines as it hasn\u2019t had a big drop so vendor should stop by!```"
      }
    ],
    "T030": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Torrance Del Amo still has not sold but line is waiting it out!** <@&1425166183841140873>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Torrance Del Amo is selling still ask at guest services!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Expect line by opening with people waiting 7-8 for possible FCFS. Need more heads here who are UPDATING"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Torrance Del Amo has 20 heads in line as of 5:30**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Torrance/Del Amo has 25 in line, and they are dropping now.*** <@&1425166140966965248> <@&1425166183841140873>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Torrance/Del Amo update.***"
      }
    ],
    "T033": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Carson Mall is selling Mega Greninja ex Boxes right now too!*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Carson Mall selling Mega Zygarde ex Premium Collection so far, may have more store tends to hold back as well**"
      },
      {
        "date": "2026-04-17",
        "type": "confirmed",
        "snippet": "**Target Carson Mall has Mega Evo / Phantasmal 2 Pack Blister** <@&1425166183841140873>"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Carson Mall should have First Partner Illustration Box 2 per!** <@&1425166183841140873>"
      },
      {
        "date": "2026-02-06",
        "type": "confirmed",
        "snippet": "**Target Carson Sepulveda vendor should be done so be on top of Carson MALL next!** <@&1425166183841140873>"
      },
      {
        "date": "2025-11-14",
        "type": "confirmed",
        "snippet": "**Target Carson Mall** \n\u2022 Line has begun by guest services \n\u2022 Drop is unconfirmed but expected to drop\n\u2022 Make your way o"
      }
    ],
    "T096": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Garden Grove/Harbor has 15 in line, but that\u2019s not too cooked compared to the stock that they usually receive."
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Stay on it from 9-11ish. This store is known for lying and playing games"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Garden Grove/Harbor ended up dropping at guest services around 10:45-11:30AM. They just sold their last 2 Chao"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Stay on it 9-11 should sell!"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Stay on it from 9-11ish this store is known for lying and playing games"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "May have hit today but honestly i do not trust this store and would expect a larger drop tomorrow still! You\u2019ll have to "
      }
    ],
    "T090": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Costa Mesa/Harbor has 15+ in line.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Morning VQ or drop. Store has been selling EARLY lately so chairs already out!"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Costa Mesa/Harbor update for tomorrow.***"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Morning VQ or direct drop. This location has shifted toward very early releases lately."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa Harbor is selling with a line built up!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Morning VQ or drop. Store has been selling EARLY lately and last week sold at 7AM opening"
      }
    ],
    "T088": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca is starting its VQ now as they always do on Friday\u2019s!** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Irvine Barranca VQ update!***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Irvine/Barranca is selling to their VQ right now.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Morning VQ at opening and long lines will be here"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Irvine Barranca has 30+ heads waiting for opening VQ!**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Irvine/Barranca has 30+ in line now. VQ starts at 8AM.*** <@&1425166056766439528>"
      }
    ],
    "T092": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Huntington Beach/Adams has almost 20 in line now.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Huntington Beach/Adams is selling the items listed above to the line pictured below.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Like CM Harbor this has been selling EARLY now so expect heads and chairs ready. People will wait it out and store can s"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Same story as Harbor. Early action, early chairs, and people willing to wait all day."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Adams is selling now with about 30 in line!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Like CM Harbor this has been selling EARLY now so expect heads and chairs ready. People will wait it out and store can s"
      }
    ],
    "T101": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Consistent Friday morning. Warn you every week. They may take a VQ or sell FCFS at opening so BE READY"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Weekly reminder. Reliable Friday morning store and can easily run a VQ."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Consistent Friday morning. Warn you every week and it can also take VQ at opening. Last week they didn\u2019t receive poke an"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Orange Chapman is selling to a VQ it took earlier and should have some extra** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Consistent Friday morning. Warn you every week can also take VQ at opening"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Orange Chapman is running a VQ as warned since last night and this morning but is still waiting for shipment** "
      }
    ],
    "T118": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Rancho Santa Margarita line is starting up!** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Rancho Santa Margarita is claiming no Pokemon today!**\n\n\u2022 Is claiming no vendor today due to holiday tomorrow \n"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Friday random number draw usually starts at 3PM and can cover 100-200 people."
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Rancho Santa Margarita will do a randomized lottery procedure for roughly 75-100 spots at 3PM. This store alwa"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Rancho Santa Margarita will sell via a randomized lottery at 3PM! Feel free to show up a few early in case the"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Rancho Santa Margarita was supposed to sell via a randomized lottery at 3PM, but store employee dispersed the "
      }
    ],
    "T099": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Tustin/Park Ave has 20 people in line.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Tustin Park Ave update prior to opening!**\n\nLet\u2019s see those other OC store updates as well <@&14251660567664395"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Tustin Park Ave sold Mega Greninja Premium Collection, OP-13, and other smaller items at opening check for left"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Store is holding back stock so check again with random timing morning and later but should sell at least a small batch a"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Tustin Park Ave has 10 heads now in line**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Tustin/Park Ave has 30+ in line today.*** <@&1425166056766439528>"
      }
    ],
    "T095": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Westminster/Beach is in play for this weekend. Target Tustin Marketplace has also been known for weekend drops"
      },
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach is finally selling**\n\nLine is deeper here as well <@&1425166056766439528>"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Westminster/Beach is selling now.** <@&1425166056766439528>"
      },
      {
        "date": "2026-02-20",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach**\n\u2022 Line is forming here but not taking VQ\n\u2022 VQ will start once vendor arrives \n\u2022 If you star"
      },
      {
        "date": "2025-12-12",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach** \n\u2022 Vendor just finished stocking up here\n\u2022 Should be a smaller drop today \n\u2022 Expect the sam"
      },
      {
        "date": "2025-11-28",
        "type": "confirmed",
        "snippet": "**Target Westminster Beach** \n\u2022 Restocking right now with a VQ up\n\u2022 Make your way over still some room!\n\u2022 As posted stay"
      }
    ],
    "T094": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Westminster Mall update. Best Buy Westminster Mall has 20+ in line too, from an earlier update.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall is still doing random drops so you will have to catch it when they sell!** <@&1425166056766439"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall as warned dropped randomly!**\n\n\u2022 Ascended Heroes Booster Bundles \n\u2022 Chaos Rising Booster Sleev"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Westminster Mall finally sold, had a line waiting since earlier here!**"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "***Target Westminster Mall said they are not restocking TCG today. Due potentially tomorrow, or Monday if not.*** <@&142"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "***Target Westminster Mall is dropping at ~2PM!*** <@&1425166056766439528>"
      }
    ],
    "T166": [
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Buena Park is rolling out items!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Buena Park update**"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "***Target Buena Park update.***"
      },
      {
        "date": "2026-04-17",
        "type": "guide",
        "snippet": "Skipped today SO CHECK TOMORROW STORE SHOULD CONFIRM IF THEY WILL STOCK OR NOT  ```"
      },
      {
        "date": "2026-04-03",
        "type": "confirmed",
        "snippet": "**Target Buena Park has OP-15 Booster Sleeves at GS** <@&1425166056766439528>"
      },
      {
        "date": "2026-03-27",
        "type": "confirmed",
        "snippet": "**Target Buena Park check back at noon!**"
      }
    ],
    "T097": [
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Cypress is selling at opening!**"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Cypress has 15 heads waiting for opening**"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Cypress is a NO GO for opening check back later**"
      },
      {
        "date": "2026-04-10",
        "type": "guide",
        "snippet": "Has not hit usually goes in afternoons for regular shipments keep eyes 1-5!"
      },
      {
        "date": "2026-03-27",
        "type": "confirmed",
        "snippet": "**Target Cypress confirmed to be selling**"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Cypress dropped \u2014 Check for smaller items left.** <@&1425166056766439528>"
      }
    ],
    "T119": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Santa Ana College usually VQ at 10am on Friday so check in but ask as they claimed they will sell when vendor comes now."
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Santa Ana College still points toward a 10AM VQ. Bristol has some potential around 8-10. E 17th / Grand mainly looks lik"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Santa Ana College VQ 10AM with lines before. Bristol confirmed to sell tomorrow either opening or 10-11ish. E 17th / Gra"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Santa Ana College line is still waiting for the VQ to open!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Santa Ana College VQ 10AM with lines before. Bristol has a chance usually 8-10AM. E 17th / Grand less likely for extra i"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Santa Ana College as warned in guide dropped at opening!** <@&1425166056766439528>"
      }
    ],
    "T044": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Bellflower has closer to 4-6 people now. Will grow to more right before opening.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Long Beach/Bellflower opening update, still in play today.*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Morning look in case inventory was held back but there are probably stronger targets available."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Morning check in case they held items back but stronger options exist since they sold today"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Morning check in case they held items back but stronger options exist as they sold today"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Morning check in case they held items back like they sometimes do but can focus on others"
      }
    ],
    "T045": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Long Beach Cherry dropped a sneaky one!**\n\n\u2022 Chaos Rising ETB (limited)\n\u2022 OP-13 Sleeves (Full Case)\n\u2022 Chaos Ris"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Long Beach Cherry line is at about 30, if store doesn\u2019t sell expect some heads to try and wait it out a bit** <"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Long Beach Cherry has heads lingering as store has not sold yet** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Long Beach Cherry as updated all morning is starting to unpack Excel boxes!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Long Beach Cherry so far! About 30 heads in line** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Long Beach Cherry**\n\n\u2022 Line is starting to form up here\n\u2022 Store has not dropped yet \n\u2022 Expecting a solid pack h"
      }
    ],
    "T046": [
      {
        "date": "2025-10-03",
        "type": "guide",
        "snippet": "Supposedly received a SMALL shipment of Pokemon last week. Start checking in at guest services here, sleeper store!"
      }
    ],
    "T006": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Pomona sold as posted on guide a bigger pack this morning, sleeves are still left** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Treat these as one pair. Both feel primed for opening activity or a morning VQ especially Pomona which has not seemed to"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Pair these as priority opening stores tomorrow. Expected to stock or run VQ in the morning!"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Pairing together as your priority opening stores tomorrow! Expected to stock or take a VQ in the morning!!!"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Pomona**\n\u2022 Vendor is here stocking now\n\u2022 No confirmation if they will sell Poke yet \n\u2022 If you\u2019re here updated! "
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Pomona is selling the pack as warned!**"
      }
    ],
    "T015": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target West Covina/Eastland update, should sell at 8AM at guest services. 25+ in line now.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland only has Mega Greninja Premium Collection and may sit for a bit!**"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Big store and opening priority. They almost always find a way to sell at least something here"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland has 8 heads in line!**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target West Covina/Eastland update.***"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target West Covina Eastland sold First Partner Illustration Series 2 to the line this morning!**"
      }
    ],
    "T009": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Has not hit and is seeming like a major option for opening through 10am```"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Upland has 20+ in line. They should begin stocking and/or selling at 8AM or so.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Upland is confirmed to be selling!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Upland is selling as pictured!** <@&1425166052496642260>"
      },
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Upland sold at opening, smaller items still going!** <@&1425166052496642260>"
      },
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "Store stated they would run a VQ at opening EXPECT HEADS EARLY"
      }
    ],
    "T017": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target North Azusa update, not to be confused with South Azusa.***"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening employee push possible. If not then focus again around 12-4 for vendor timing."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening employee push or vendor check PLEASE then later 12-4 for vendor as well```"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Opening employee push or vendor check then later 12-4 for vendor as well! ```"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Check at opening for an employee push and then later in the day usually 12-4 for vendor!```"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target N Azusa has Chaos Rising Booster Bundles still!** <@&1425166052496642260>"
      }
    ],
    "T002": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening through 11AM. Look for employees to confirm before opening and push product themselves"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening through 11AM. Look for employees to confirm prior to opening!"
      },
      {
        "date": "2026-05-08",
        "type": "confirmed",
        "snippet": "**Target 3121 Pasadena**\n\u2022 Mega Evo / Phantasmal 2 Pack Blister \n\u2022 Phantasmal Flames Booster Sleeves \n\u2022 Perfect Order It"
      },
      {
        "date": "2026-05-01",
        "type": "guide",
        "snippet": "Opening through 11am checks BE READY can pusb later but a likely first stop for vendor"
      },
      {
        "date": "2026-04-17",
        "type": "guide",
        "snippet": "Opening or 2-4 checks look for vendor not a huge priority but just check in case"
      },
      {
        "date": "2026-04-17",
        "type": "confirmed",
        "snippet": "**Target 3121 Pasadena**\n- Vendor is around!\n- Currently about 15ish heads signed up for VQ!!\n- Stop by if near!\n<@&1425"
      }
    ],
    "T073": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Golden Valley Santa Clarita has heads already lining up for tomrorow mornings drop** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening first, then 8-10 and 2-5 if nothing"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Santa Clarita/Golden Valley has tons of products!***\n\n> - OP-13 Singles\n> - OP-16 Singles\n> - Moonlight Tins\n>"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Start at opening, then circle through 8-10 and again 2-5. Already let some product go today but still feels like invento"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening first then 8-10 and 2-5 if nothing."
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Opening first then 8-10 and 2-5 if nothing. Store can be selective and sold like 2-3 batches today\u2019s already"
      }
    ],
    "T075": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Cochran update, more like 40+ people.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Cochran item update, we updated the line earlier too.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Both need opening checks. Madera more likely for mid day as usual"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Both deserve opening attention. If nothing develops early then focus shifts heavily toward the 12-4 range."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Simi Cochran is selling as well!** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Both need opening checks. If they stall early look for shipment action 12-4, especially Madera"
      }
    ],
    "T076": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Madera should sell their shipments that come in between now and 1:30PM!***\n\n> - Usually, crowds fo"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Madera is due for stock by 11AM-1PM. Since so many people are outside, a crowd will form here earl"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Madera just dropped!***\n\n> - Luminous City Mini Tins\n> - Perfect Order Checklane Blisters\n> - Smal"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Madera Simi Valley**\n\nSelling now :\n\n- Hops Zacian Ex Boxes \n- Mega Zygard Ex Boxes\n- Perfect Order Sleeves \n- "
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "***Target Simi Valley/Madera dropped Booster Bundles 2 per, done.*** <@&1488964203103522997>"
      },
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "**Target Madera Simi Valley**\nNow selling :\n\n- Prismatic Evolution Etb\u2019s\n- First Partner Collection Boxes\n- Ascended Her"
      }
    ],
    "T078": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Hit today as warned so may be lighter tomorrow but check in in case"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Great morning candidate. If additional stock landed expect action early otherwise watch for a delayed afternoon release."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Newbury Park only sold Mega Zygarde ex Premium Collection this morning!** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Strong opening play. If more stock landed it should move, otherwise expect a later-day push"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Newbury Park only dropped Perfect Order ETB this morning** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Strong opening option. If more stock landed it should sell but if not, it may push later in the day"
      }
    ],
    "T079": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Camarillo sold as pictured to the 20+ in line.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Has been selling sporadically and not as much Fridays but check opening in case"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Feels positioned for an opening sell tomorrow. Store loves saving inventory for Fridays."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Should be live at opening. Store has been saving stock for Fridays!"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Camarillo is claiming no Poke but pls keep eyes on them store sometimes plays games** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "***Target Camarillo sold only One Piece Sleeves/Battle Decks and Squeezy\u2019s as pictured - no Pokemon..***"
      }
    ],
    "T066": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Granada Hills has 40+ in line, selling at opening.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Granada Hills has been updated throughout the morning and has 40+ people in line outside for their 8AM guest s"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Morning tickets expected and store should still have some form of product. Can also sell small amounts later in the day"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Granada Hills selling their pack now of inventory as well..*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Granada Hills brought out OP-13 Singles.*** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Ticket system and early chairs expected chairs already going down"
      }
    ],
    "T069": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Pacoima just passed tickets for line order.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Should sell at opening and chairs will go out tonight"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Looks set up for an opening release. Did sell other items earlier this week"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Pacoima seemed to drop Prismatic Evolutions ETB at opening**"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Should sell at opening and chairs will go out tonight!"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Should sell opening and chairs will go out tonight"
      }
    ],
    "T074": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening is expected and locals will be all over it as it seemed quiet"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Valencia should be dropping NOWW!! EASY 1\u20132 after hitting Target Santa Clarita/Golden Valley.***\n\n> - Expect p"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Valencia still has products sitting! We posted 50+ minutes ago.***\n\n> - OP-13 Singles\n> - Chaos Rising Singles"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening attention will be heavy. Locals are expected to be all over this one"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Valencia has OP-16 Booster Sleeves, 1 per person** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening is expected and locals will be all over it"
      }
    ],
    "T054": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target LA/7th & Figueroa update!***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Hit a bit earlier this week and does tend to go quick but can peep at 7am or 9-10"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Full morning watch from open until 11. Should sell at opening!"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Full morning check from open-11. They lag and didn\u2019t seem to hit today. Opens at 7AM as well"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Full morning check from open-11. They lag and didn\u2019t seem to hit today. Opens at 7AM"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Full morning check from open-11. They lag and didn\u2019t seem to hit today. Opens at 7am"
      }
    ],
    "T098": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Look for line by opening and ask about drop/shipment store tends to confirm here a bit earlier if they will sell```"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening look, ask about shipments, and don't leave immediately. Feels closer than it has in weeks."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Garden Grove Brookhurst is being stocked up as posted on guide hits every Friday late morning!** <@&14251660567"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Look for line by opening and ask about drop/shipment ALSO EXPECTED TO HIT FINALLY```"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Look for line by opening and ask about drop/shipment ALSO EXPECTED TO HIT FINALLY```"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Brookhurst is claiming no poke at opening and may sell tomorrow!** <@&1425166056766439528>"
      }
    ],
    "T110": [
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Foothill Portola said check later in case of a mid day shipment!** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "Moved today\u2019s drop to tomorrow. Expect heads early and treat it like a real morning priority and again no lining up befo"
      },
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "***Target Foothill Portola new rules as of now just due to everything going on.***"
      },
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "**Target Foothill Portola vq is officially starting but is claiming may be lower stock today** <@&1425166056766439528>"
      },
      {
        "date": "2026-02-27",
        "type": "guide",
        "snippet": "Sold today as warned in guide"
      },
      {
        "date": "2026-02-06",
        "type": "guide",
        "snippet": "Sold today as warned in guide"
      }
    ],
    "T089": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Friday drops seem to be sticking. Usually from 8-11 here. Last week only sold OP but expect them to sell everything they"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Friday pattern continues. Usually lands somewhere around 11-2 but timing can drift."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Irvine Spectrum will sell soon!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Friday drops seem to be sticking. Usually afternoon around 11-2 but can go earlier or later. Last week sold at opening!"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Looks like Friday drops are sticking. Usually afternoon around 11-2 but can go earlier or later. Last week sold around 1"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Irvine Spectrum is selling Prismatic Evolutions ETB and MORE!** <@&1425166056766439528>"
      }
    ],
    "T107": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Fullerton Orangethorpe sold Mega Greninja Premium Collection at opening that is sold out**"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Lines usually strongest around 11-2. SHOULD GO and if nothing people will wait it out a bit"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Orangethorpe is likely to see a line start up soon. Please stay on this store!*** <@&142516605676643"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Expect lines. Traditionally strongest around 11-2 but could absolutely fire earlier."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Fullerton Orangethorpe has heads waiting for a drop and MORE WILL COME go asap!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Lines usually strongest around 11-2. SHOULD GO and last week a"
      }
    ],
    "T038": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target South Gate has had a line since last night.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target South Gate is confirmed since last night as posted and chairs started since then so longer line**"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Did not end up selling today. BE READY AT OPENING"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Firestone/South Gate update as of now.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target South Gate has 12 heads in line currently!** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target South Gate has 20+ in line.***"
      }
    ],
    "T111": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target La Paz update, feel free to check at opening if you want.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target La Paz has 9 in line, but see the update from above.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target La Paz has 9 in line, see the update from earlier though.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target La Paz also sold!**\n\n\u2022 First Partner Illustration Series 2 \n\u2022 Mega Greninja Premium Collection \n\u2022 Lumiose City "
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening check again in case as today\u2019s drop was pushed back from Weds so may end up having a bit more. May also receive "
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening first. If they don't commit immediately you may need to catch a later release between 12-4."
      }
    ],
    "T113": [
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Puerta Real update.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-02-27",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Puerta Real**\n\n- EXPECTING A DELIVERY SOON!\n- Sleeper store, but small stock.\n- Keep checking, wi"
      },
      {
        "date": "2025-10-31",
        "type": "guide",
        "snippet": "Should sell around opening!"
      },
      {
        "date": "2025-10-24",
        "type": "guide",
        "snippet": "Should sell around opening!"
      },
      {
        "date": "2025-10-17",
        "type": "guide",
        "snippet": "Should sell around opening!"
      },
      {
        "date": "2025-10-10",
        "type": "guide",
        "snippet": "Should sell around opening!"
      }
    ],
    "T007": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Morning peep for employee pushed product. Has hit multiple days already though"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Quick morning sweep for product being pushed out by staff."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target San Dimas will sell at opening!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target San Dimas item update!**"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Morning peep for employee pushed product!"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Morning peep for employee pushed product"
      }
    ],
    "T115": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Solid opening option and good rotation through the day if it doesn\u2019t go early"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target San Juan Capistrano might restock in the afternoon, but they have nothing for 8AM opening.*** <@&1425166056766"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Strong opening option and easy store to keep rotating if nothing happens right away."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Solid opening option and good rotation through the day if it doesn\u2019t go early"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Solid opening option and good rotation through the day if it doesn\u2019t go early!"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Solid opening option and good rotation through the day if it doesn\u2019t go early"
      }
    ],
    "T010": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Diamond Bar update.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Diamond Bar confirmed for Poke!** <@&1425166052496642260>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Diamond Bar selling (as posted earlier) with stock listed above!** <@&1425166052496642260>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Diamond Bar current line ^**"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Diamond Bar has First Partner Series 1 AND Series 2! YOU NEED TO ASK FOR SERIES 1, THEY HAVE 6 IN A BOX AND TH"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Look for opening drop. Always sells batches"
      }
    ],
    "T011": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target El Monte is about 10-13 people.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target El Monte is selling Mega Greninja ex Boxes now, line updates were posted earlier/throughout the night as well."
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target El Monte, potentially a next wave of product around 9AM.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "PRIORITY opening check again. Store should sell"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "High priority opening stop once again."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "PRIORITY opening check again store should sell!"
      }
    ],
    "T013": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Montclair has 10 in line hoping for the vendor to arrive here.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-04-03",
        "type": "guide",
        "snippet": "75/25 they sell something at opening here!"
      },
      {
        "date": "2026-03-27",
        "type": "confirmed",
        "snippet": "**Target Montclair has 15+ heads!**"
      },
      {
        "date": "2026-01-30",
        "type": "guide",
        "snippet": "May have quietly sold a bit today"
      },
      {
        "date": "2026-01-16",
        "type": "guide",
        "snippet": "Recently stocked items check for new ones tomorrow pushed by employees"
      },
      {
        "date": "2026-01-02",
        "type": "guide",
        "snippet": "Typically not for Friday here but holiday may have it hit"
      }
    ],
    "T005": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Duarte line update. They should sell Mega Greninja ex Boxes, at the bare minimum, at opening.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Store sold yesterday but likely to have some items tomorrow but will sell sporadically"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Duarte has a line of 10 hoping for an 8AM employee push or vendor arrival.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Duarte will open with OP/Poke Singles at the bare minimum. Stay tuned for more updates.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Duarte still has OP-13 Singles, pictured above.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Two major stores. Expect lines forming early and people waiting it out."
      }
    ],
    "T062": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Sherman Oaks**\n\n\u2022 Mega Greninja Premium Collection \n\u2022 Ascended Heroes 2 Pack Blister \n\u2022 Needohs\n\nAll w"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Van Nuys/Sepulveda stock is pictured.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Constant store. If opening misses, 11-2 becomes the next real window"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Van Nuys/Sepulveda only sold Chaos Rising Sleeved Boosters at opening. It is very likely that they drop at gue"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Constant shipment store. Opening first and if it stays quiet move attention toward 11-2."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Van Nuys Sepulveda will have First Partner Illustration Series 2 at opening** <@&1425165995575742634>"
      }
    ],
    "T133": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover updated line count!***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover is a go for 8AM.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening is a must. Store holds product so timing is on them but it should be tomorrow as only OP today"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover has roughly 15-20 people in line for 8AM.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover is selling OP-13 Singles & Needoh.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Fontana/Slover is stocking, but no Poke yet. Feel free to check in.*** <@&1425166052496642260>"
      }
    ],
    "T053": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target LA/Sunset update! Target Hollywood Galaxy update too.*** <@&1425625697141133334> don\u2019t sleep!"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Both should move opening or shortly after. Weho receives solid amounts and sold light today. Sunset will have a solid li"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Sunset has about 15 heads as warned in guide!**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target LA/Sunset has OP-13 Singles and Chaos Rising Sleeved Boosters. Other items were sold at opening.*** <@&1425625"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Both stores deserve attention. WeHo especially has inventory and stayed quiet today. Sunset will have heads EARLY"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Sunset confirmed for opening as posted on guide!** <@&1425625697141133334>"
      }
    ],
    "T136": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Ontario/4th St is selling the items pictured.***"
      },
      {
        "date": "2026-01-16",
        "type": "confirmed",
        "snippet": "**Target 1670 4th street Ontario**\n\u2022 OP-14 Booster Sleeves \n\u2022 DP-09 (Double Pack)\n\u2022 Available now check in sitting! <@&1"
      },
      {
        "date": "2025-11-21",
        "type": "confirmed",
        "snippet": "**Target 1670 4th Ontario** \n\u2022 Mega Evolution Sleeves sitting\n\u2022 PF Coin Blisters now available \n\u2022 2 per person on each!\n"
      },
      {
        "date": "2025-10-24",
        "type": "guide",
        "snippet": "Check in at open! 7-9 in general here"
      },
      {
        "date": "2025-10-17",
        "type": "confirmed",
        "snippet": "**Target Ontario - 4th street**\n- ME ETBs, only had 4 ETBs scored by members\n- Other ME items\n\n<@&1425166052496642260>"
      }
    ],
    "T021": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "7AM opening is a solid option as they should receive more! If nothing then check later in the day will have more product"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening feels very likely and could include more than just release inventory."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "***Target Culver Jefferson employee told a member they will not be selling any Pokemon SKU\u2019s today as well for reference"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Should sell at opening and may do release items plus more as only sold limited items earlier this week! 7am opening"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Culver Jefferson will have One Piece sitting** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Will sell at opening may do release items + more!"
      }
    ],
    "T012": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Rosemead has 15 in line.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Rosemead\u2019s updated line count is up to roughly 45 people.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Rosemead is also confirmed as posted plenty of times!**"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Rosemead only sold Chaos Rising.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening employee push should go. Stock should be here and chairs already here"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Rosemead update for tomorrow.***"
      }
    ],
    "T168": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Chino/Grand update.***"
      },
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "Two stores, possible for some items with a slight lean to Grand but usually both would hold for Monday ```"
      },
      {
        "date": "2026-05-08",
        "type": "guide",
        "snippet": "Look for some pushed at both not super heavy but great checks!"
      },
      {
        "date": "2026-05-01",
        "type": "guide",
        "snippet": "Two stores be ready for either to have some stock in the morning"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Chino/Grand will sell soon since [Target Chino/Philadelphia sold earlier, we posted.](https://discord.com/chan"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Chino Grand is a go! Get to Philadelphia next!** <@&1425166052496642260>"
      }
    ],
    "T001": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target 777 Pasadena said no Pokemon for opening. Feel free to linger this store today. It is heavily overdue for a 2n"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target 777 Pasadena is dropping now.***\n\n> - People were lingering, line formed immediately.\n> - Currently stocking, "
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target 777 Pasadena is selling:***\n\n> - Dragon Ball Singles\n> - 2025 Championship Decks\n> - Chaos Rising Sleeved Boos"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening through 11 remains the key stretch. Watch for employee-driven releases."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target 777 Pasadena will have no First Partner Illustration Series 2 at opening!**"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Opening through 11AM. Look for employees to push product here"
      }
    ],
    "T037": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Compton is selling! 20+ in line now.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Compton is selectively selling now!***\n\n> - First Partner Series 2 Illustration Collection\n> - Ask nicely at g"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Has moved off Sundays so check tomorrow opening through 9:30!"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Compton has a line of 16 formed for 8AM.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Compton dropped First Partner Series 2 Illustration Collection. Easy 1\u20132 after Walmart if stock sits. Stay tun"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Usually strongest from opening through 10 but has shown a tendency to drift toward weekends."
      }
    ],
    "T058": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Broadway is selling:***\n\n> - Mega Greninja ex Boxes\n> - Moonlit Tins available too!\n> - Small sto"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening then 10-12 fallback. Don\u2019t let them spin you because this store holds and sells whenever they choose and can als"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening first and then 10-12. Don't buy the \"nothing here\" routine because this store sells whenever it wants and can go"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening then 10-12 fallback. Don\u2019t let them spin you because this store holds and sells whenever they choose and can als"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Opening then 10-12 fallback. Don\u2019t let them spin you because this store holds and sells whenever they choose and can als"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Opening then 10-12 fallback. Don\u2019t let them spin you store holds and sells as they choose can also sell late"
      }
    ],
    "T024": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Gardena has 8 people in line outside so far.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Sold a bigger amount this week. Heads will check in case and could sell other items"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Similar playbook as Lawndale and should be monitored the same way."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Gardena confirmed they have stock but making line wait for vendor** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Gardena should be selling soon line formed and posted earlier!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Gardena pictured**"
      }
    ],
    "T014": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Rowland Heights has closer to 6-12 people now. Still not too bad!***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Rowland Heights also is waiting to be stocked still!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Rowland Heights sold at opening and has smaller items leftover right now.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Rowland Heights sold at opening**"
      },
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Rowland Heights vendor is confirmed!**\n\nAlso lagged a bit behind schedule here but was warned <@&14251660524966"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Rowland Heights is a go!***"
      }
    ],
    "T106": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Fullerton Yorba Linda also sold Mega Greninja Premium Collection at opening, 1 left for anyone near!**"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Look for a morning drop here people tend to stay quiet but should hit even if limited!"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Yorba Linda has 10 in line SO FAR.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Fullerton/Yorba Linda is a GO! 15 in line. More updates will be posted shortly.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Yorba Linda, Yorba Linda update.***"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Look for a morning drop here PLEASE!"
      }
    ],
    "T083": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Fallbrook is at 30 heads prior to opening!**"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Fallbrook still has:***\n\n> - OP-13 Singles\n> - Chaos Rising items.\n> - Stock is at guest services.\n\n<@&1425165"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Morning 8-10 check but did sell a bit this week as posted. Store tends to hold back items either way```"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Fallbrook/West Hills**\n\n- Squishys\n- Luminous City Mini Tin\n- Chaos Rising ETB\n- Chaos Rising 3-Pk Blister\n- Ch"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Check 8-10. Store likes waiting until crowds thin out before moving inventory so don't leave too quickly or swing back i"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Fallbrook sold at opening!** <@&1425165995575742634>"
      }
    ],
    "T055": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target LA/Westwood is selling Mega Greninja ex Boxes. Nothing else besides that!*** <@&1425625697141133334>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Wilshire is an easy move after Target SM/Broadway or Target LA/Westwood. SM/Wilshire opens at 8AM"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Sleeper opening option here at 7AM as store has been putting small amounts of product out this week"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target LA/Westwood just dropped a fresh restock!***\n\n> - **6** Ascended Heroes ex Boxes \n> - **10** Mega Zyragde ex C"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Another sleeper opening location with a 7AM start."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Westwood as posted on guide sold at opening!**"
      }
    ],
    "T047": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Signal Hill only has 1 person in line.***"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Last week sold on Friday around 9-11 so please keep eyes here!"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Signal Hill also sold this morning! Store had been holding stock a bit** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Signal Hills has Chaos Rising Booster Sleeves!**"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Signal Hills**\n\n- Vendor is there and stocking.\n- Currently only 10 heads.\n- Get there if near - should be a go"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "***Target Signal Hills is selling as pictured.***"
      }
    ],
    "T100": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Tustin Marketplace has 30+ in line but some of the crowd is there for Needohs.***"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Should do release day items at opening!"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Tustin Marketplace is selling now!**"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "***Target Tustin Marketplace is selling now.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "**Target Tustin Marketplace also sold a limited amount of Prismatic Evolution ETB!** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-08",
        "type": "guide",
        "snippet": "Mainly check in the morning or 1-3 here"
      }
    ],
    "T109": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Fridays are back here so BE READY AT OPENING. Chairs ahould already be out"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target La Habra is only selling Needoh so far. Check at opening tomorrow for Poke!*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Fridays are alive here again. Opening is mandatory and chairs are already expected."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Fridays are back here so BE READY AT OPENING chairs already out"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Fridays are back here so BE READY AT OPENING chairs already out"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "***Target La Habra update.***"
      }
    ],
    "T059": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Wilshire is confirmed! Opens in 5 mins, only 6 people in line.*** <@&1425166183841140873> <@&1425"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Usually 9-11 and not right at opening. Don\u2019t make this an opening priority unless nearby```"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Better as a 9-11 stop than an opening stop unless you're already nearby."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Usually 9-11 and not right at opening. Don\u2019t make this an opening priority unless nearby```"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Usually 9-11 and not right at opening. Don\u2019t make this an opening priority unless nearby```"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "***Target Santa Monica/Wilshire security said they are holding product still.*** <@&1425625697141133334> <@&142516618384"
      }
    ],
    "T057": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega about 20 heads or so!** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target 3535 Cienega dropped!**\n\n\u2022 Ascended Heroes Premium Poster Collection \n\u2022 Prismatic Evolutions ETB \n\u2022 First Partn"
      },
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "Sold today so not super likely. Tend to sell again on the weekend usually Sunday. They sell at their own discretion thou"
      },
      {
        "date": "2026-05-08",
        "type": "guide",
        "snippet": "Quietly holding back stock lately. Keep checking even later at night never a bad check"
      },
      {
        "date": "2026-05-01",
        "type": "guide",
        "snippet": "MAY receive stock tomorrow to sell for opening or 5-8pm or 12-2ish"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target 3535 La Cienega is selling Ascended Heroes Booster Bundles, 2 per!***"
      }
    ],
    "T029": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Two stores here and may be either opening or afternoon! Heads will check regardless at both"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Century may hold for later in the day so be weary. La Brea remains much harder to pin down but would check opening!"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Both should move but timing is everything. Century usually opens 8AM and has been selling at opening. La Brea is more ra"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Both should move but timing can century. Century opens 8AM usually and will sell at opening lately. La Brea is more rand"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Both should move but timing is the game. Century opening at 8am usually! La Brea a bit more random"
      },
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "Both should go, just have to catch timing. Century may have a small opening line but both can also go afternoon"
      }
    ],
    "T023": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target LA/Westchester has no Pokemon.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening check and ASK GS. Should have stock and opens at 7AM. If they spin you go back shortly after. Store tends to sel"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening first. Ask GS directly and if they try redirecting people check back shortly after."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Westchester only sold Mega Zygarde ex Premium Collection so keep eyes later and this weekend!** <@&142516618384"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening check and ASK GS. Should have stock and opens at 7AM. If they spin you go back shortly after"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Opening check and ASK GS. Should have stock and opens at 7am if they try to spin go back a bit after"
      }
    ],
    "T072": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Friday opening store as well. Skipped last week so heads will be on it but chance it skips again"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Encino seems to be a no go today.***"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Another strong Friday candidate. Feels overdue and should have extra items"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "***Target Encino employee told a member they will not be selling any Pokemon SKU\u2019s today for reference.***"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Friday opening store as well!"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Friday opening store and still looks like it hasn\u2019t sold this week and seemed to skip last week so pls be ready!"
      }
    ],
    "T034": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Carson Sepulveda line update prior to opening!**"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Carson/Sepulveda is a NO GO for opening. Still in play for later today or this weekend.*** <@&1425166140966965"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Friday opening VQ usually or may do FCFS so be ready for either line will be here in early"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Carson Sepulveda has 20+ heads waiting for VQ!**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Carson/Sepulveda drop is live. VQ will start soon.*** <@&1425166140966965248>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Carson/Sepulveda VQ has started, but have not called people back as of yet .*** <@&1425166140966965248>"
      }
    ],
    "T018": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Baldwin Park likely to hit afternoon if it goes today!**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target LA/Glassell Park**\n\n- Stocks TCG here, **sleeper!**\n- OP-DP-11 Double Packs\n- Moonlight Tins available too.\n- P"
      },
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Baldwin Park has a few items!** <@&1425166052496642260>"
      },
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "**Target Boca Park**\n\u2022 Prismatic Evolution ETB\n\u2022 Ascended Heroes Mega Ex Collection \n\u2022 2 each per person here! <@&142516"
      },
      {
        "date": "2026-05-08",
        "type": "guide",
        "snippet": "Employees have been holding some stuff back so be ready in case"
      },
      {
        "date": "2026-04-17",
        "type": "guide",
        "snippet": "May have sold a bit tonight but check tomorrow as employees sometimes hold back product"
      }
    ],
    "T121": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Eastvale has a line of 30 so far. Update Target Norco, Corona/Tuscany, and Jurupa Valley too!*** <@&1425166052"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Eastvale STILL has not dropped and is way overdue** <@&1425166052496642260>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Eastvale has not stocked but already got their mid day shipment today so expect heads to be lingering waiting i"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Eastvale**\n\n- 8 people are in line **as of now.**\n- Vendor is currently on site, pull up!\n- Staff has NOT confi"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Eastvale update... Managers said no Poke today. Some people are staying, while others left.*** <@&142516605249"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "***Target Eastvale has 12 people in line outside waiting for a potential One Piece release + hoping for a Poke restock. "
      }
    ],
    "T068": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Woodland Hills has 12 people in line. Dropping Mega Greninja at the bare minimum at opening. They are already "
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Woodland Hills items for opening! Line is 20+ deep.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Woodland Hills is out of stock of Poke but will have OP-13 Sleeves sitting** <@&1425165995575742634>"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Fri-Sun type store. Opening is worth it but if nothing happens, 4-8 or the weekend becomes stronger"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Friday through Sunday type location. Opening is worth a shot but if nothing develops the real strength shifts toward 4-8"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Woodland Hills sold at opening!** <@&1425165995575742634>"
      }
    ],
    "T102": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Did not seem to hit today so be ready tomorrow morning or from 1-4 but did hit Tuesday so less priority"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Stayed quiet enough that tomorrow morning deserves attention."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Did not seem to hit today so be ready tomorrow morning or from 1-4!"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Did not seem to hit today so be ready tomorrow morning!"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Orange N Tustin has no Poke yet check back from 1-4!** <@&1425166056766439528>"
      },
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "Check morning and ask in case it stocked randomly this week but still look for a drop from 10-12 or more likely 1-4"
      }
    ],
    "T132": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Sold a bit today so may skip tomorrow ```"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Fontana/Summit**\n\n- Had a few Chaos Rising ETBs.\n- Selling Moonlight Tins.\n- Selling Lumonise City Mini Tins.\n-"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Fontana/Summit (not to be confused with Fontana/Slover, updated above) has 18 in line hoping for an 8AM drop.*"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Fontana/Summit stocked.***\n\n> - 2025 Worlds Champ Decks are sitting.\n> - Mega Zygarde ex Premium Collection le"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Similar story to Slover. Feels like inventory is being held so opening checks matter!"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Fontana Summit is claiming no Pokemon at opening** <@&1425166052496642260>"
      }
    ],
    "T026": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Hawthorne/120th sold Mega Greninja ex Boxes at opening, check for a few left at guest services.*** <@&14251661"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Hawthorne/120th is selling Pokemon now!*** <@&1425166183841140873>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Hawthorne/120th item update is posted & pictured above.***"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Hawthorne 120th sold at opening!**"
      },
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "**Target Hawthorne 120th also sold a few Prismatic Evolution ETB can check for other items but store plays games** <@&14"
      },
      {
        "date": "2026-05-01",
        "type": "confirmed",
        "snippet": "**Target Hawthorne 120th street sold Ascended Heroes Booster Bundles at opening but limited amounts** <@&142516618384114"
      }
    ],
    "T048": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Norwalk/Firestone has 20+ in line for opening today! Should be a go after they pulled stock last time.*** <@&1"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Norwalk/Imperial (not to be confused with Norwalk/Firestone, updated above) has 15-20 in line hoping for an 8A"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Norwalk/Firestone is selling the items pictured to the line of 20+ now & updates have been posted all morning!"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone has some items sitting!** <@&1425166140966965248>"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone also sold at opening**"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Norwalk Firestone is confirmed!**"
      }
    ],
    "T080": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening drop possible if it stayed quiet today"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening possibility remains alive if today stayed quiet, although there are probably stronger first stops."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening drop possible if it stayed quiet today but there are stronger first stops"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Opening drop possible if it stayed quiet today but there are stronger first stops"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Opening drop possible if it didn\u2019t go today but there may be stronger first stops"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Ventura Mall also sold at opening!**"
      }
    ],
    "T084": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Burbank Empire Center update. Don\u2019t sleep on LA/Glassell Park too!***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Basically a lock to check every day at opening here!"
      },
      {
        "date": "2026-05-15",
        "type": "guide",
        "snippet": "Can peep in case but not a priority much better options but if you\u2019re around can check ```"
      },
      {
        "date": "2026-05-01",
        "type": "guide",
        "snippet": "Again expect heads to CHECK but may be Saturday 50/50"
      },
      {
        "date": "2025-11-14",
        "type": "confirmed",
        "snippet": "**Target Burbank Empire Center**\n\n - Going to drop a round 2 shortly.\n- Line will build very quickly for it.\n- Head over"
      }
    ],
    "T004": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Alhambra has 15 in line so far.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Alhambra is at 30 heads, up from the 15 posted earlier**"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Alhambra will sell ~15 Ascended Heroes Mega Ex Collection at opening, line will take it all** <@&14251660524966"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "***Target Alhambra has 10 in line hoping for a restock today.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "The other pair of stores to be ready for by opening heavy heads will be here!"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Alhambra will also be selling at opening!**\n\n\u2022 Ascended Heroes ETB \n\u2022 Prismatic Evolutions ETB \n\u2022 2 items as we"
      }
    ],
    "T060": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Hollywood Galaxy stocked up this morning with sleeves and other items still available**"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Usually Fridays here. If not right at opening then 9-11"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Hollywood Galaxy should have smaller products at guest services. They sell every Friday at opening, posting as"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Hollywood Galaxy is still going with OP-13 at guest services!*** <@&1425625697141133334>"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Usually leans Friday. Even if nothing is ready at opening keep pressure on it through 9-11."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Hollywood Galaxy needs to be checked and likely to sell as well!** <@&1425625697141133334>"
      }
    ],
    "T104": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Anaheim Lincolnshire has Phantasmal Flames Mini Portfolio that will sit**"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Lighter chances for tomorrow but check in! May be small products"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Similar to Euclid. Opening is the best bet even if they only decide to move release inventory."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Like Euclid expect opening/morning drop!"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Like Euclid expect opening/morning drop with a small chance they only sell release items still worth checks!"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Anaheim Lincoln has Phantasmal Flames Mini Portfolio** <@&1425166056766439528>"
      }
    ],
    "T016": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Sleeper opening check since it is has been a bit more quiet"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Sneaky opening candidate because it still hasn't really moved."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Sleeperrrrr opening check since it is usually a bit more quiet!"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Sleeperrrrr opening check since it has not stocked!"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Sleeperrrrr opening check as it has not stocked!"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target West Covina S Azusa is selling!**"
      }
    ],
    "T032": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Rolling Hills has a few Pokemon items at guest services!***\n\n> - Mega Greninja ex Boxes\n> - Other limited item"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Look for opening drop. Will be limited but likely!"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Rolling Hills**\n\n- VERY FEW Ascended Heroes ex Boxes!\n- A few First Partner Series 2 available!\n- Mega Zygarde "
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Rolling Hills**\n\n- New batch of OP-13 Singles!\n- Fresh and available w/ 0 line.\n- Should sit for a while here, "
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening opportunity but inventory may be limited."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Look for opening drop. Will be limited if they sell!"
      }
    ],
    "T141": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Menifee has moved away from Friday drops due to too many issues with lines. Look for random drops now!** <@&142"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening drop is likely and chairs will go down early"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Menifee line is longer as warned in guide!**"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening remains the play and people will arrive early."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Menifee sold Ascended Heroes Mega Ex Collection and Mega Zygarde ex Premium Collection at opening**"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening drop is likely and chairs will go down early!"
      }
    ],
    "T139": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Opening expected unless they sneak it out tonight since it did not hit today"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Looks lined up for an opening release unless they somehow sneak product out tonight which they have not so far!"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Opening expected unless they sneak it out tonight since it did not hit today"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Lake Elsinore is selling Poke this morning!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Also expecting opening unless they sneak it out tonight as it did not hit today!"
      },
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "**Target Lake Elsinore only sold sleeves this morning so look for a drop tomorrow OR mid day here!** <@&1425166052496642"
      }
    ],
    "T108": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Fullerton Malvern is sticking to their Monday drops as warned in guide**"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Can check for small items but may hold until Monday as usual here"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Should hold all stock for Monday"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Can check for release or small items but may hold until Monday"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Opening/morning check for a drop. 50/50 whether they let extra items fly"
      },
      {
        "date": "2026-05-29",
        "type": "guide",
        "snippet": "Check opening/morning time for a drop! Store has been hitting twice+ a week now!"
      }
    ],
    "T105": [
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Look for opening/morning drop but like other store may be lighter stock as well"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Weekly reminder that this store can move at opening and catches people sleeping constantly."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Anaheim Euclid should sell with a long line built up!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Anaheim Euclid selling to the line!** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Look for opening/morning drop of release items as may have sold bigger pack earlier this week"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Anaheim Euclid dropped a small pack at opening!** <@&1425166056766439528>"
      }
    ],
    "T170": [
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Expect people staged before doors open. Get there early."
      },
      {
        "date": "2026-06-12",
        "type": "guide",
        "snippet": "Line will be there before opening so be ready"
      },
      {
        "date": "2026-06-05",
        "type": "guide",
        "snippet": "Line will be here pre opening be ready!"
      },
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Goleta has 14 heads waiting for a drop** <@&1488964203103522997>"
      },
      {
        "date": "2026-04-03",
        "type": "confirmed",
        "snippet": "**Target Goleta has OP-15 Booster Sleeves and taking a VQ for a drop later!** <@&1488964203103522997>"
      }
    ],
    "T137": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Rancho Cucamonga update, no Poke at opening.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Sold today a bigger pack so tomorrow may not drop tomorrow"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Missed at opening today which puts tomorrow squarely in play."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Rancho Cucamonga has about 10 heads for tomorrow!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Rancho Cucamonga is selling as well!** <@&1425166052496642260>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "***Target Rancho Cucamonga sold as pictured and listed as well per our member. \ud83d\udd25*** <@&1425166052496642260>"
      }
    ],
    "T061": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Glendale Galleria line update.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Glendale Galleria\u2019s line has grown vastly since the previous update. 20+ people in line now!***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Glendale Galleria only sold Needohs, no Poke yet.***"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "As always look for shipment 9-11 but check opening for anything held back"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Opening first for held inventory then focus shifts toward 9-11 when shipments typically start landing."
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Glendale Galleria update**"
      }
    ],
    "T039": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Huntington Park has about 8 in line.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Huntington Park/Bickett St update for the day - store claims to have sold yesterday night as well unfortunatel"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Also did not end up selling today so be ready for opening checks! Wait it out a bit if nothing"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Huntington Park**\n\n- Gearing up to drop right now!\n- Line will form by guest services.\n- Head over, due for a l"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Huntington Park line update! 15+ and they will sell soon.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Huntington Park is still going!***\n\n> - Ascended Heroes ex Boxes\n> - Other smaller items available too.\n> - On"
      }
    ],
    "T103": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Anaheim Hills update for opening. UPDATE TARGET ANAHEIM/EUCLID as well!*** <@&1425166056766439528>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Anaheim Hills has 20 in line!**"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Anaheim/Euclid (not to be confused with Target Anaheim Hills) is a sleeper! Opens in 5 mins, only 3 in line.**"
      },
      {
        "date": "2026-06-26",
        "type": "guide",
        "snippet": "Look for an opening drop but may be limited as store is a bit smaller"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Anaheim Hills has some Chaos Rising items. Ask for ETB, Blisters & Singles are confirmed too.*** <@&1425166056"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Vendor landed today and inventory appears to be sitting. Opening looks attractive."
      }
    ],
    "T164": [
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Sleeper opening option here 8am!"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "***Target Whittier/Commerce employee stated there was no Pokemon being sold per opening as well.***"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Commerce is sell in at opening and has ROOM with only 18 people in line!** <@&1425625697141133334> <@&142516614"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Commerce will sell additional items on top of CR!** ^"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "***Target Commerce sold at opening.***"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Commerce has items leftover still!** <@&1425625697141133334>"
      }
    ],
    "T165": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Brea/Birch St**\n\n- Stocking up right now!\n- Line is forming, was 0 at 12:17.\n- People are spawning, 7 in line n"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Should sell at opening here be ready!"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Brea is selling the One Piece pack today!** <@&1425166056766439528>"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Brea**\n\n- Post was not made for 0 reason.\n- Workers are telling certain ppl come back.\n- They usually do a 2nd "
      }
    ],
    "T117": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Yorba Linda (17506 Yorba Linda Blvd, Yorba Linda, CA) checks as well! Will hit between now and 4PM!*** <@&1425"
      },
      {
        "date": "2026-06-19",
        "type": "guide",
        "snippet": "Morning through 11 remains strongest with another possible window around 2-4."
      },
      {
        "date": "2026-05-01",
        "type": "confirmed",
        "snippet": "**Target Yorba Linda Yorba Linda Blvd has Ascended Heroes Deluxe Pin Collection!** <@&1425166056766439528>"
      }
    ],
    "T052": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target West Hollywood update! Doubling down on the need to check in throughout this afternoon. Product is usually kep"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target West Hollywood is hitting, as warned!***\n\n> - Excel Boxes were just brought out.\n> - Magic the Gathering drop "
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target West Hollywood sold at opening as well!**"
      },
      {
        "date": "2026-05-01",
        "type": "confirmed",
        "snippet": "**Target Hollywood dropped!**\nMay be Hollywood Galaxy but getting confirmation soon <@&1425625697141133334>"
      },
      {
        "date": "2026-04-17",
        "type": "confirmed",
        "snippet": "**Target West Hollywood**\n\u2022 Ascended Heroes ETB \n\u2022 Ascended Heroes Mini Tins \n\u2022 Another store that sells quietly will\nbe"
      },
      {
        "date": "2026-04-17",
        "type": "confirmed",
        "snippet": "**Target West Hollywood update** <@&1425625697141133334>"
      }
    ],
    "T116": [
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Seal Beach sold in the morning as well and has sleeves sitting**"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Seal Beach, as posted in the guide.** \ud83c\udfaf"
      },
      {
        "date": "2026-02-20",
        "type": "confirmed",
        "snippet": "**Target Seal Beach**\nStore should be dropping right now! Store can put on shelves and things can be a free for all so b"
      },
      {
        "date": "2025-10-24",
        "type": "confirmed",
        "snippet": "**Target Seal Beach still has sleeves available as well!** @here"
      },
      {
        "date": "2025-10-03",
        "type": "confirmed",
        "snippet": "**Target Seal Beach**\n\n- Mega ETB\n- Mega Team Tin\n- Mega 3-Pk Blister\n- Mega Checklane Blister\n\n<@&1422877603533950986>"
      }
    ],
    "T114": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Alicia Parkway also has about 10 in line.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Alicia Parkway has 17+ in line now. Jeronimo update is posted above too! Both stores are looking"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia with no Pokemon**"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Alicia Parkway should sell at 8AM and is nowhere near cooked for the amount of stock this store "
      },
      {
        "date": "2026-01-02",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia** \n\u2022 Destined Rivals Booster Sleeves\n\u2022 Phantasmal Flames Booster Sleeves\n\u2022 2 per of each a"
      },
      {
        "date": "2025-11-28",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Alicia** \n\u2022 Mimikyu EX Boxes\n\u2022 Available now on display \n\u2022 About 15 boxes left currently in the T"
      }
    ],
    "T134": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills has OP-13 Booster Sleeves and Chaos Rising Booster Bundle sitting still!** <@&1425166052496642260"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills also was selectively selling Ascended Heroes Booster Bundles! Not displayed and must ask so feel "
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills ; in case you wanted to stop by** <@&1425166052496642260>"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Ontario Mills is selling now!**"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Ontario Mills is selling, 1 of each SKU per person.***"
      },
      {
        "date": "2026-04-10",
        "type": "confirmed",
        "snippet": "***Target Ontario/Mills is dropping at opening, Ontario/BAKER is the one sitting with OP-15 Singles.*** <@&1425166052496"
      }
    ],
    "T124": [
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Corona Tuscany**\n\n\u2022 Vendor is here now\n\u2022 9 heads are currently in line\n\u2022 Make your way over FRESH and shorter l"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Corona Tuscany is selling!**"
      },
      {
        "date": "2026-03-06",
        "type": "confirmed",
        "snippet": "__**Target Corona/Tuscany Update:**\n\n- Line forming for a restock.\n- We\u2019ve posted since last night.\n- On you if you didn"
      },
      {
        "date": "2026-01-23",
        "type": "confirmed",
        "snippet": "**Target Corona Tuscany** \n\u2022 Vendor is here restocking right now \n\u2022 Lots of boxes are available as seen\n\u2022 Head on over a"
      },
      {
        "date": "2025-11-07",
        "type": "confirmed",
        "snippet": "**Target Corona - Tuscany**\n\n- Should have some product today.\n- Head over to check in now for it!!\n- Check the aisle, t"
      },
      {
        "date": "2025-10-31",
        "type": "confirmed",
        "snippet": "**Target Corona Tuscany - CHECK HERE BEFORE FONTANA SUMMIT!**\n\n- Should have slight stock right now.\n- Head over and rep"
      }
    ],
    "T050": [
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Cerritos South Street is selling!** <@&1425166140966965248>"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Cerritos South street is doing a VQ in case they receive shipment today!** <@&1425166140966965248>"
      },
      {
        "date": "2025-11-14",
        "type": "confirmed",
        "snippet": "**Target Cerritos South St update.**"
      }
    ],
    "T040": [
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera will not have Poke at opening**"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera dropped One Piece at opening** <@&1425166140966965248>"
      },
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera has 7 people waiting, store is OVERDUE**\n\n**Target Whittier Whitwood should also have heads waiting"
      },
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera is selling!** <@&1425166140966965248>"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera is selling as well!**"
      },
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera sold a few Prismatic ETB can check for other items as well in case** <@&1425166140966965248>"
      }
    ],
    "T019": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target La Canada update, sleeper store, 9 in line.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target La Canada update, they sold at opening. Line updates were posted too!***"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "***Target La Canada is a sleeper too.*** <@&1425166052496642260>"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target La Canada is selling!**"
      },
      {
        "date": "2025-11-14",
        "type": "confirmed",
        "snippet": "**Target La Canada sold at opening and has Sleeved Boosters left!** <@&1425166052496642260>"
      }
    ],
    "T035": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Lomita should be a go at guest services! UPDATE!!!*** <@&1425166140966965248>"
      },
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Lomita has a VQ going in case they receive!** <@&1425166183841140873>"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Lomita confirmed for opening and will have leftover stock!** <@&1425166183841140873>"
      },
      {
        "date": "2026-05-08",
        "type": "confirmed",
        "snippet": "**Target Lomita has 50 heads on Friday VQ will remind you all next week** <@&1425166183841140873>"
      },
      {
        "date": "2025-11-14",
        "type": "confirmed",
        "snippet": "**Target Lomita PCH** \n\u2022 Ran a VQ for those in line! \n\u2022 25 heads currently on it \n\u2022 Expect some leftovers after for smal"
      },
      {
        "date": "2025-11-14",
        "type": "confirmed",
        "snippet": "**Target Lomita is calling for their CQ items available up top!** <@&1425166183841140873>"
      }
    ],
    "T091": [
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa 17th has First Partner Illustration Box but may go quick!** <@&1425166056766439528>"
      },
      {
        "date": "2025-11-14",
        "type": "confirmed",
        "snippet": "**Target Costa Mesa 17th St has Singles and 3-Pack Blisters!** <@&1425166056766439528>"
      }
    ],
    "T042": [
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood still has a line waiting outside**\nNot confirmed to drop today but if store hasn\u2019t received s"
      },
      {
        "date": "2026-05-08",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood has Perfect Order items sitting** <@&1425166140966965248>"
      },
      {
        "date": "2026-02-27",
        "type": "confirmed",
        "snippet": "**Target Whittier/Whitwood**\n\n- OP Vol. 5 Illustration Boxes \n- OP Vol. 6 Illustration Boxes \n- Ascended Heroes Tech Sti"
      },
      {
        "date": "2026-01-16",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood**\n\u2022 OP restocked a little bit ago\n\u2022 Should still have stock as store limits\n\u2022 Head on over an"
      },
      {
        "date": "2025-11-14",
        "type": "confirmed",
        "snippet": "**Target Whittier Whitwood still going with bundles and singles!** <@&1425166140966965248>"
      }
    ],
    "T041": [
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Pico Rivera has 7 people waiting, store is OVERDUE**\n\n**Target Whittier Whitwood should also have heads waiting"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Santa Fe Springs has 4 in line waiting for opening. Usually spins but if they do sell, it is a sleeper.***"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Santa Fe Springs will hit sneakily tonight/tomorrow or at normal time on Monday night.** <@&1425166140966965248"
      },
      {
        "date": "2025-11-21",
        "type": "confirmed",
        "snippet": "**Target Santa Fe Springs** \n\u2022 PE Figure Collection \n\u2022 Available now at GS\n\u2022 Only a few available send it over if within"
      },
      {
        "date": "2025-11-14",
        "type": "confirmed",
        "snippet": "**Target Santa Fe Springs** \n\u2022 PF Booster Sleeves\n\u2022 One per person \n\u2022 Lil snack to end the night <@&1425166140966965248>"
      }
    ],
    "T120": [
      {
        "date": "2026-03-27",
        "type": "confirmed",
        "snippet": "**Target Santa Ana 17th / Grand**\n\u2022 VQ is opening up now\n\u2022 10 people in line currently \n\u2022 Make your way over and sign up"
      },
      {
        "date": "2026-01-16",
        "type": "confirmed",
        "snippet": "**Target W 17th Santa Ana**\n\u2022 OP-14 Booster Sleeves\n\u2022 Available now at guest services \n\u2022 Should be 2 per person here <@&"
      },
      {
        "date": "2025-11-28",
        "type": "confirmed",
        "snippet": "**Target Santa Ana 17th Street**\n\u2022 Restocking right now \n\u2022 Posted first in <#1422863863694491780> \n\u2022 Make your way over "
      }
    ],
    "T049": [
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Norwalk Imperial only Needoh at opening**"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Norwalk Imperial put out OP DP-11 Double Pack and OP-16 Booster Sleeves !** <@&1425166140966965248>"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Norwalk Imperial is confirmed for opening!**"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Norwalk/Imperial is a go at 8AM. ~25 Ascended Heroes Booster Bundles!***"
      },
      {
        "date": "2026-04-03",
        "type": "confirmed",
        "snippet": "**Target Norwalk Imperial also has OP-15 Booster Sleeves** <@&1425166140966965248>"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Norwalk Imperial has stock out and has about 15 heads in line! Opens at 8am** <@&1425166140966965248>"
      }
    ],
    "T167": [
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Santa Ana Bristol**\n\u2022 Line has formed up here\n\u2022 Stores are still dropping and lines are forming up\n\u2022 Make sure "
      },
      {
        "date": "2026-03-06",
        "type": "confirmed",
        "snippet": "**Target Santa Ana Bristol** \n\u2022 OP-14 Booster Sleeves \n\u2022 Mega Evo / Phantasmal 2 Pack Blister \n\u2022 Both available at guest"
      },
      {
        "date": "2026-01-16",
        "type": "confirmed",
        "snippet": "**Target Santa Ana Bristol** \n\u2022 Destined Rivals Booster Sleeves \n\u2022 Multiple OP products \n\u2022 All available by guest servic"
      }
    ],
    "T043": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Lakewood Mall has 14 people in line so far.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Lakewood has a longer line prior to opening!**"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Lakewood update.***"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Lakewood is selling and will have some leftovers still but small items maybe** <@&1425166140966965248>"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Lakewood is a go at opening, has been updated all morning + peep guide.**"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Lakewood has a VQ running now for Poke**"
      }
    ],
    "T093": [
      {
        "date": "2026-03-06",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Garfield has Mega Evo / Phantasmal 2 Pack Blister ** <@&1425166056766439528>"
      },
      {
        "date": "2026-02-20",
        "type": "confirmed",
        "snippet": "**Target Huntington Beach Garfield has a few items still!** <@&1425166056766439528>"
      }
    ],
    "T169": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Chino/Philadelphia STILL has a small line so far.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia needs to be updated and had stock ready to be dropped!** <@&1425166052496642260>"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia ; in case you wanted to stop by** <@&1425166052496642260>"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Chino/Philadelphia is selling everything! 2 of EACH SKU per person, so it is pretty cooked with the current li"
      },
      {
        "date": "2026-02-27",
        "type": "confirmed",
        "snippet": "**Target Chino Philadelphia**\n\n- Line of 12 waiting on the vendor.\n- Should stock up somewhat shortly.\n- If you are near"
      }
    ],
    "T112": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Jeronimo has 10 in line.***"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Jeronimo update. There were 20+ in line at MV/Alicia and 5+ in line at MV/Puerta Real. Update!**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Jeronimo head update!**"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Mission Viejo/Jeronimo line update for opening today.*** <@&1425166056766439528>"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Jer\u00f3nimo is selling some Poke and One Piece!** <@&1425166056766439528>"
      },
      {
        "date": "2026-04-17",
        "type": "confirmed",
        "snippet": "**Target Mission Viejo Jeronimo is also dropping at opening as warned!** <@&1425166056766439528>"
      }
    ],
    "T146": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Poway line is 20+ people.*** <@&1488964167997063309>"
      },
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Poway is selling now!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Poway has a line of 40 built up. This store hits EVERY Friday!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-10",
        "type": "confirmed",
        "snippet": "**Target Poway**\nwittthhhh a packkkkk \ud83d\udd25.\n- ascended Hero etbs\n- first partner collection \n- op15 sleeves\n- perfect order"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Poway is selling now!** <@&1425166056766439528>"
      }
    ],
    "T051": [
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Cerritos Bloomfield is running a VQ with 25 in it so far** <@&1425166140966965248>"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Cerritos Bloomfield is selling still**"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Cerritos Bloomfield still has sleeves available**"
      },
      {
        "date": "2026-03-20",
        "type": "confirmed",
        "snippet": "**Target Cerritos Bloomfield is selling! Update South St as well.** <@&1425166140966965248>"
      }
    ],
    "T081": [
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Ventura/Main St dropped a pack!***\n\n> - **35+** Ascended Heroes Booster Bundles\n> - Chaos Rising ETB\n> - Chaos"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Ventura Main Street update!** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Ventura Main vendor has arrived!** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Ventura Main still waiting on vendor!** <@&1488964203103522997>"
      },
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Ventura Main Street has arrived with a line built up!** <@&1488964203103522997>"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Ventura Main St also sold at opening!**"
      }
    ],
    "T145": [
      {
        "date": "2026-06-12",
        "type": "confirmed",
        "snippet": "**Target Hemet dropped at opening a large Poke pack!**\n\nWill likely have sleeves and One Piece leftover <@&1425166052496"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Hemet sold at opening!**"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Hemet**\n\u2022 Ascended Heroes Booster Bundles \n\u2022 First Partner Illustration Box \n\u2022 Ascended Heroes Premium Poster C"
      },
      {
        "date": "2026-03-27",
        "type": "confirmed",
        "snippet": "**Target Hemet has singles sitting right now!**"
      }
    ],
    "T135": [
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Ontario/Baker sold at opening. Small amount of stock.***"
      },
      {
        "date": "2026-04-10",
        "type": "confirmed",
        "snippet": "**Target Ontario 4th/Baker**\n\n- OP-15 Singles\n- Easy W if chasing.\n- Ask for 2 per at GS.\n\n<@&1425166052496642260>"
      }
    ],
    "T153": [
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa**\n\n\u2022 Line has formed up here now\n\u2022 Drop should be large as we have seen!\n\u2022 Make your way and update i"
      },
      {
        "date": "2026-05-15",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa should be dropping now!** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "**Target Mira Mesa with a long line waiting** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-24",
        "type": "confirmed",
        "snippet": "***Target Mira Mesa (SD) is a go!*** <@&1488964167997063309>"
      },
      {
        "date": "2026-04-10",
        "type": "confirmed",
        "snippet": "**Target Barnes Mira Mesa**\n- Stocking up as of now ; so far :\n- Ascended Hero ETB\u2019s\n- Ascended Hero Mini Tins\n- First P"
      }
    ],
    "T087": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "***Target Oxnard Collection update.***"
      },
      {
        "date": "2026-06-26",
        "type": "confirmed",
        "snippet": "***Target Oxnard Collection dropped at opening. They hit every Friday (and other times in the week too).*** <@&148896420"
      },
      {
        "date": "2026-05-01",
        "type": "confirmed",
        "snippet": "***Target Oxnard Collection update for opening ; have Pokemon product with 25ish heads.*** <@&1488964203103522997>"
      }
    ],
    "T154": [
      {
        "date": "2026-05-01",
        "type": "confirmed",
        "snippet": "**Target Eastlake is stocking up now!** <@&1488964167997063309>"
      }
    ],
    "T143": [
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Palm Desert sold at opening!**"
      }
    ],
    "T140": [
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Murrieta Cal Oaks sold at opening**"
      }
    ],
    "T123": [
      {
        "date": "2026-06-19",
        "type": "confirmed",
        "snippet": "**Target Jurupa Valley update**"
      },
      {
        "date": "2026-05-22",
        "type": "confirmed",
        "snippet": "**Target Jurupa Valley will also need checks still!** <@&1425166052496642260>"
      }
    ],
    "T147": [
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target Santee vendor is on site with 30 heads in line currently** <@&1488964167997063309>"
      }
    ],
    "T142": [
      {
        "date": "2026-05-29",
        "type": "confirmed",
        "snippet": "**Target La Quinta is restocking now!** <@&1425166052496642260>"
      }
    ],
    "T159": [
      {
        "date": "2026-06-05",
        "type": "confirmed",
        "snippet": "***Target Balboa update.***"
      }
    ],
    "T162": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Othello / San Diego has OP-13 if nearby** <@&1488964167997063309>"
      }
    ],
    "T152": [
      {
        "date": "2026-07-03",
        "type": "confirmed",
        "snippet": "**Target Auto Parkway + Escondido Mall both dropped at opening, mostly Mega Greninja Premium Collection at both** <@&148"
      }
    ]
  }
};
