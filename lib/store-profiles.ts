// Store profiles from the Collectify guide engine (collectify_stores.json, 2026-11-18), keyed by board store id.
// weekdayHits = frozen June-Sept tally: it OVER-counts, use only as a soft baseline. Real evidence = the drops log.
// Generated once from the engine files; edit here when a store's cadence or day lock changes.

export type Wd = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

export interface StoreProfile {
  engineName: string;
  region: string; // engine region: SGV | IE | LA | South Bay | SFV | OC
  cadence: string;
  window: string; // AM(7-9) | LateAM(9-12) | PM(12-4) | Eve(4-9) | ...
  weekdayHits: Partial<Record<Wd, number>>;
  openTime?: string;
  dayLock?: string;
  fridayOnly?: boolean;
  heavyWatch?: boolean;
  engineAddress?: string;
  aliases?: string[];
}

export const STORE_PROFILES: Record<string, StoreProfile> = {
  "T087": {
    "engineName": "Oxnard Collection (RiverPark)",
    "region": "SFV",
    "cadence": "Wednesday-morning opener + Friday (owner: the only Oxnard store)",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 3
    },
    "dayLock": "Wednesday morning opener; Friday store"
  },
  "T196": {
    "engineName": "Perris",
    "region": "IE",
    "cadence": "rare",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Thu": 1
    }
  },
  "T002": {
    "engineName": "3121 Pasadena",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 2,
      "Tue": 5,
      "Wed": 5,
      "Thu": 6,
      "Fri": 2,
      "Sat": 3
    }
  },
  "T001": {
    "engineName": "777 Pasadena",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 3,
      "Wed": 2,
      "Fri": 2,
      "Sat": 1
    }
  },
  "T004": {
    "engineName": "Alhambra",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 4,
      "Wed": 7,
      "Fri": 7,
      "Sat": 1
    }
  },
  "T018": {
    "engineName": "Baldwin Park",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 7,
      "Wed": 2,
      "Thu": 1,
      "Fri": 4
    }
  },
  "T168": {
    "engineName": "Chino Grand",
    "region": "SGV",
    "cadence": "Fri-heavy",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Mon": 4,
      "Fri": 5
    }
  },
  "T169": {
    "engineName": "Chino Philadelphia",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 3,
      "Tue": 2,
      "Thu": 6,
      "Fri": 1
    }
  },
  "T010": {
    "engineName": "Diamond Bar",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Wed": 6,
      "Thu": 1,
      "Fri": 8,
      "Sat": 2,
      "Sun": 1
    }
  },
  "T005": {
    "engineName": "Duarte",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 1,
      "Thu": 6,
      "Fri": 7,
      "Sat": 3
    }
  },
  "T011": {
    "engineName": "El Monte",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 2,
      "Tue": 6,
      "Wed": 10,
      "Thu": 4,
      "Fri": 2
    }
  },
  "T019": {
    "engineName": "La Canada",
    "region": "SGV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 1
    },
    "fridayOnly": true
  },
  "T008": {
    "engineName": "La Verne",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 3,
      "Tue": 1,
      "Wed": 1,
      "Thu": 2,
      "Sat": 1
    }
  },
  "T013": {
    "engineName": "Montclair",
    "region": "SGV",
    "cadence": "occasional",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Thu": 1,
      "Fri": 1
    }
  },
  "T017": {
    "engineName": "N Azusa",
    "region": "SGV",
    "cadence": "Fri-heavy",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 1,
      "Fri": 7
    }
  },
  "T006": {
    "engineName": "Pomona",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Mon": 1,
      "Wed": 1,
      "Fri": 1,
      "Sun": 2
    }
  },
  "T012": {
    "engineName": "Rosemead",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 4,
      "Thu": 3,
      "Fri": 5
    },
    "dayLock": "FRIDAY-leaning + can go at open Wednesdays; light other days"
  },
  "T014": {
    "engineName": "Rowland Heights",
    "region": "SGV",
    "cadence": "Mon-heavy",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 4,
      "Wed": 2,
      "Fri": 1
    }
  },
  "T007": {
    "engineName": "San Dimas",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Tue": 2,
      "Wed": 2,
      "Thu": 3,
      "Fri": 3
    }
  },
  "T015": {
    "engineName": "West Covina Eastland",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 4,
      "Wed": 3,
      "Thu": 1,
      "Fri": 4,
      "Sat": 2
    }
  },
  "T016": {
    "engineName": "West Covina S Azusa",
    "region": "SGV",
    "cadence": "frequent/multi-day",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 3,
      "Fri": 2
    }
  },
  "T178": {
    "engineName": "Apple Valley Hwy 18 (CA-18)",
    "region": "IE",
    "cadence": "FRIDAY ONLY",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Fri": 1
    },
    "fridayOnly": true
  },
  "T131": {
    "engineName": "Apple Valley Jess Ranch",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 2,
      "Thu": 1,
      "Fri": 5,
      "Sat": 1
    },
    "aliases": [
      "Bear Valley Rd",
      "store 939"
    ]
  },
  "T144": {
    "engineName": "Cathedral City",
    "region": "IE",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 2
    },
    "fridayOnly": true
  },
  "T124": {
    "engineName": "Corona Tuscany",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 2,
      "Tue": 5,
      "Wed": 5,
      "Thu": 1,
      "Fri": 5,
      "Sat": 2,
      "Sun": 2
    }
  },
  "T121": {
    "engineName": "Eastvale",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 4,
      "Wed": 2,
      "Thu": 4,
      "Fri": 6
    }
  },
  "T133": {
    "engineName": "Fontana Slover",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Tue": 6,
      "Wed": 5,
      "Thu": 3,
      "Fri": 1
    }
  },
  "T132": {
    "engineName": "Fontana Summit",
    "region": "IE",
    "cadence": "Fri-heavy",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Wed": 2,
      "Fri": 12
    }
  },
  "T145": {
    "engineName": "Hemet",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Wed": 3,
      "Thu": 4,
      "Fri": 6
    }
  },
  "T130": {
    "engineName": "Hesperia Main",
    "region": "IE",
    "cadence": "Tue-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 6,
      "Fri": 1,
      "Sat": 1
    },
    "openTime": "7AM"
  },
  "T123": {
    "engineName": "Jurupa Valley",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 4,
      "Wed": 3,
      "Fri": 2
    }
  },
  "T142": {
    "engineName": "La Quinta",
    "region": "IE",
    "cadence": "no data",
    "window": "-",
    "weekdayHits": {}
  },
  "T139": {
    "engineName": "Lake Elsinore",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 2,
      "Wed": 2,
      "Thu": 4,
      "Fri": 3,
      "Sat": 7,
      "Sun": 1
    }
  },
  "T141": {
    "engineName": "Menifee",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 2,
      "Wed": 3,
      "Thu": 2,
      "Fri": 5
    }
  },
  "T125": {
    "engineName": "Moreno Valley Nason",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Tue": 4,
      "Wed": 2,
      "Fri": 6
    }
  },
  "T140": {
    "engineName": "Murrieta Cal Oaks",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 7,
      "Wed": 1,
      "Thu": 5,
      "Fri": 5,
      "Sat": 1
    },
    "dayLock": "Tue/Thu (random lately)"
  },
  "T180": {
    "engineName": "Murrieta Clinton Keith",
    "region": "IE",
    "cadence": "Fri-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 2,
      "Fri": 7
    },
    "openTime": "7AM"
  },
  "T122": {
    "engineName": "Norco",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 3,
      "Wed": 2,
      "Thu": 3,
      "Fri": 3
    }
  },
  "T135": {
    "engineName": "Ontario 4th/Baker",
    "region": "IE",
    "cadence": "Thu-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Thu": 4,
      "Fri": 3
    }
  },
  "T134": {
    "engineName": "Ontario Mills",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 6,
      "Thu": 1,
      "Fri": 3,
      "Sun": 1
    }
  },
  "T143": {
    "engineName": "Palm Desert",
    "region": "IE",
    "cadence": "no data",
    "window": "-",
    "weekdayHits": {}
  },
  "T137": {
    "engineName": "Rancho Cucamonga",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 6,
      "Thu": 2,
      "Fri": 5,
      "Sat": 4
    },
    "openTime": "7AM"
  },
  "T129": {
    "engineName": "Redlands",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 3,
      "Tue": 1,
      "Wed": 1,
      "Thu": 3,
      "Fri": 1
    }
  },
  "T127": {
    "engineName": "Riverside Arlington",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Wed": 3,
      "Thu": 2,
      "Fri": 2
    }
  },
  "T128": {
    "engineName": "Riverside Canyon Springs",
    "region": "IE",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 3
    },
    "fridayOnly": true
  },
  "T138": {
    "engineName": "San Bernardino",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Wed": 1,
      "Thu": 6,
      "Fri": 6
    }
  },
  "T183": {
    "engineName": "Temecula Rancho",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 1,
      "Wed": 3,
      "Fri": 4,
      "Sat": 5
    }
  },
  "T126": {
    "engineName": "Tyler Riverside",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 2,
      "Wed": 8,
      "Thu": 3,
      "Fri": 6,
      "Sat": 2,
      "Sun": 1
    }
  },
  "T009": {
    "engineName": "Upland",
    "region": "IE",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 3,
      "Wed": 2,
      "Thu": 1,
      "Fri": 2,
      "Sat": 2,
      "Sun": 2
    }
  },
  "T191": {
    "engineName": "LA Silverlake",
    "region": "LA",
    "cadence": "occasional",
    "window": "LateAM(9-12)",
    "weekdayHits": {}
  },
  "T056": {
    "engineName": "1833 Cienega",
    "region": "LA",
    "cadence": "Fri-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Wed": 2,
      "Fri": 3
    }
  },
  "T057": {
    "engineName": "3535 Cienega",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 9,
      "Wed": 7,
      "Thu": 1,
      "Fri": 4,
      "Sat": 4,
      "Sun": 2
    },
    "openTime": "7AM",
    "engineAddress": "3535 S La Cienega Blvd (#1306)"
  },
  "T054": {
    "engineName": "7th and Figueroa",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 2,
      "Tue": 3,
      "Wed": 11,
      "Thu": 1,
      "Fri": 11
    }
  },
  "T193": {
    "engineName": "Beverly Center",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Wed": 1,
      "Thu": 1,
      "Fri": 3,
      "Sat": 2
    }
  },
  "T185": {
    "engineName": "Bonnie Brae",
    "region": "LA",
    "cadence": "Fri-heavy",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Wed": 1,
      "Fri": 3
    }
  },
  "T164": {
    "engineName": "Commerce",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Tue": 1,
      "Wed": 1,
      "Thu": 5,
      "Fri": 3
    }
  },
  "T020": {
    "engineName": "Culver City Mall",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 2,
      "Wed": 4,
      "Fri": 5
    },
    "engineAddress": "6000 Sepulveda Blvd"
  },
  "T021": {
    "engineName": "Culver Jefferson",
    "region": "LA",
    "cadence": "Fri-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Wed": 3,
      "Fri": 8
    },
    "engineAddress": "10820 Jefferson Blvd"
  },
  "T003": {
    "engineName": "Eagle Rock",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 2,
      "Wed": 2,
      "Fri": 4
    }
  },
  "T189": {
    "engineName": "Glassell Park",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 1,
      "Wed": 3,
      "Fri": 2
    }
  },
  "T192": {
    "engineName": "Koreatown",
    "region": "LA",
    "cadence": "FRIDAY ONLY",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Fri": 1
    },
    "fridayOnly": true
  },
  "T053": {
    "engineName": "LA Sunset",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Tue": 1,
      "Thu": 1,
      "Fri": 2,
      "Sat": 1
    }
  },
  "T058": {
    "engineName": "Santa Monica Broadway",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Tue": 3,
      "Thu": 4,
      "Fri": 2
    }
  },
  "T059": {
    "engineName": "Santa Monica Wilshire",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Wed": 2,
      "Thu": 2,
      "Fri": 1
    }
  },
  "T022": {
    "engineName": "Sawtelle",
    "region": "LA",
    "cadence": "Thu-heavy",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Tue": 2,
      "Thu": 4,
      "Sun": 1
    }
  },
  "T052": {
    "engineName": "West Hollywood",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 4,
      "Fri": 8
    }
  },
  "T023": {
    "engineName": "Westchester",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Mon": 2,
      "Tue": 3,
      "Fri": 1
    },
    "engineAddress": "8900 S Sepulveda Blvd (#3371)"
  },
  "T055": {
    "engineName": "Westwood",
    "region": "LA",
    "cadence": "frequent/multi-day",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Mon": 2,
      "Tue": 6,
      "Fri": 3,
      "Sat": 1
    }
  },
  "T179": {
    "engineName": "Carson Mall",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Mon": 2,
      "Tue": 4,
      "Wed": 1,
      "Fri": 4
    }
  },
  "T034": {
    "engineName": "Carson Sepulveda",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Tue": 5,
      "Wed": 1,
      "Thu": 1,
      "Fri": 7,
      "Sat": 1
    },
    "engineAddress": "651 W Sepulveda Blvd (#2328)"
  },
  "T051": {
    "engineName": "Cerritos Bloomfield",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 1,
      "Wed": 1,
      "Thu": 1,
      "Fri": 1
    }
  },
  "T050": {
    "engineName": "Cerritos South",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 2,
      "Wed": 10,
      "Thu": 17,
      "Fri": 11
    }
  },
  "T037": {
    "engineName": "Compton",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Wed": 4,
      "Thu": 1,
      "Fri": 6
    },
    "engineAddress": "1621 S Alameda St (#2275)"
  },
  "T024": {
    "engineName": "Gardena",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 2,
      "Wed": 4,
      "Thu": 8,
      "Fri": 5,
      "Sat": 1,
      "Sun": 3
    },
    "engineAddress": "2169 W Redondo Beach Blvd"
  },
  "T026": {
    "engineName": "Hawthorne 120th",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 4,
      "Wed": 5,
      "Thu": 2,
      "Fri": 4
    },
    "engineAddress": "2700 W 120th St (#2280)"
  },
  "T039": {
    "engineName": "Huntington Park",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 6,
      "Fri": 2
    },
    "engineAddress": "5731 Bickett St (#3406)"
  },
  "T028": {
    "engineName": "Inglewood Century",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 4,
      "Wed": 1,
      "Thu": 3,
      "Fri": 3,
      "Sat": 1
    },
    "engineAddress": "3471 W Century Blvd"
  },
  "T029": {
    "engineName": "Inglewood La Brea",
    "region": "South Bay",
    "cadence": "Fri-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Wed": 2,
      "Thu": 2,
      "Fri": 5
    },
    "engineAddress": "220 N La Brea Ave (#3343)"
  },
  "T043": {
    "engineName": "Lakewood",
    "region": "South Bay",
    "cadence": "Thu-heavy",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Thu": 5,
      "Fri": 2
    }
  },
  "T025": {
    "engineName": "Lawndale",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 1,
      "Thu": 2,
      "Fri": 2
    },
    "engineAddress": "14310 Hawthorne Blvd (#3336)"
  },
  "T035": {
    "engineName": "Lomita",
    "region": "South Bay",
    "cadence": "Mon-heavy",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 2
    }
  },
  "T044": {
    "engineName": "Long Beach Bellflower",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 2,
      "Wed": 13,
      "Thu": 5,
      "Fri": 6
    },
    "openTime": "7AM"
  },
  "T046": {
    "engineName": "Long Beach Bixby",
    "region": "South Bay",
    "cadence": "Tue-heavy",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Tue": 6,
      "Thu": 3,
      "Fri": 1
    }
  },
  "T045": {
    "engineName": "Long Beach Cherry",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Thu": 3,
      "Fri": 3,
      "Sat": 4
    }
  },
  "T027": {
    "engineName": "Manhattan Beach",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 4,
      "Tue": 1,
      "Wed": 5,
      "Fri": 7,
      "Sat": 1
    },
    "engineAddress": "1200 N Sepulveda Blvd"
  },
  "T048": {
    "engineName": "Norwalk Firestone",
    "region": "South Bay",
    "cadence": "frequent/multi-day, HEAVY WATCH (per Anthony 10/18)",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 9,
      "Wed": 3,
      "Fri": 5
    },
    "heavyWatch": true
  },
  "T049": {
    "engineName": "Norwalk Imperial",
    "region": "South Bay",
    "cadence": "Fri-heavy, HEAVY WATCH (per Anthony 10/18)",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 2,
      "Wed": 1,
      "Thu": 2,
      "Fri": 7
    },
    "heavyWatch": true
  },
  "T040": {
    "engineName": "Pico Rivera",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Wed": 2,
      "Thu": 2,
      "Fri": 1
    }
  },
  "T175": {
    "engineName": "Redondo Kingsdale",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Tue": 5,
      "Wed": 6,
      "Thu": 3,
      "Fri": 7
    },
    "engineAddress": "1601 Kingsdale Ave"
  },
  "T036": {
    "engineName": "San Pedro",
    "region": "South Bay",
    "cadence": "WEDNESDAY & FRIDAY now (per Anthony 10/27, used to be Tue/Fri)",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 1
    },
    "openTime": "7AM",
    "dayLock": "WEDNESDAY & FRIDAY only (per 10/27); not Tuesday",
    "engineAddress": "1701 N Gaffey St"
  },
  "T041": {
    "engineName": "Santa Fe Springs",
    "region": "South Bay",
    "cadence": "Tue-heavy, HEAVY WATCH (per Anthony 10/18)",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Tue": 5,
      "Thu": 2
    },
    "heavyWatch": true
  },
  "T047": {
    "engineName": "Signal Hill",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 3,
      "Tue": 3,
      "Thu": 1,
      "Fri": 1
    }
  },
  "T038": {
    "engineName": "South Gate",
    "region": "South Bay",
    "cadence": "frequent/multi-day, sells randomly throughout the week NOT Friday-only (per Anthony 10/18)",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 1,
      "Fri": 3,
      "Sat": 1,
      "Sun": 1
    },
    "engineAddress": "5700 Firestone Blvd (#190)"
  },
  "T030": {
    "engineName": "Torrance Del Amo",
    "region": "South Bay",
    "cadence": "Fri-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 2,
      "Wed": 2,
      "Fri": 9
    },
    "openTime": "7AM",
    "engineAddress": "3433 Sepulveda Blvd (Harbor)"
  },
  "T042": {
    "engineName": "Whittier Whitwood",
    "region": "South Bay",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 3,
      "Tue": 6,
      "Wed": 4,
      "Thu": 3,
      "Fri": 5
    }
  },
  "T172": {
    "engineName": "Burbank West (Hollywood Way)",
    "region": "SFV",
    "cadence": "occasional",
    "window": "AM",
    "weekdayHits": {}
  },
  "T070": {
    "engineName": "11051 North Hollywood",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 6
    },
    "fridayOnly": true
  },
  "T071": {
    "engineName": "12121 North Hollywood",
    "region": "SFV",
    "cadence": "rare",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Wed": 1
    }
  },
  "T084": {
    "engineName": "Burbank",
    "region": "SFV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 2,
      "Thu": 1,
      "Fri": 3,
      "Sat": 1
    },
    "openTime": "7AM",
    "engineAddress": "1800 W Empire Ave (#1362)"
  },
  "T079": {
    "engineName": "Camarillo",
    "region": "SFV",
    "cadence": "TUESDAY-MORNING opener (per Anthony/matt 10/20): always a Tuesday morning store, can get clipped some weeks but mostly a Tuesday opener",
    "window": "AM",
    "weekdayHits": {
      "Wed": 3,
      "Fri": 1,
      "Sat": 1,
      "Sun": 2
    },
    "dayLock": "TUESDAY-morning opener"
  },
  "T072": {
    "engineName": "Encino",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 3
    },
    "fridayOnly": true
  },
  "T083": {
    "engineName": "Fallbrook",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 4
    },
    "fridayOnly": true
  },
  "T061": {
    "engineName": "Glendale Galleria",
    "region": "SFV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 5,
      "Wed": 2,
      "Fri": 5,
      "Sat": 1
    }
  },
  "T073": {
    "engineName": "Golden Valley",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 3
    },
    "fridayOnly": true
  },
  "T066": {
    "engineName": "Granada Hills",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 2
    },
    "fridayOnly": true
  },
  "T064": {
    "engineName": "Mission Hills",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 3
    },
    "fridayOnly": true
  },
  "T077": {
    "engineName": "Moorpark",
    "region": "SFV",
    "cadence": "Fri-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Thu": 1,
      "Fri": 3
    }
  },
  "T078": {
    "engineName": "Newbury Park",
    "region": "SFV",
    "cadence": "TUESDAY store (per Anthony/matt 10/20): went back to Tuesdays",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 1,
      "Fri": 2,
      "Sat": 1
    },
    "dayLock": "TUESDAY"
  },
  "T086": {
    "engineName": "Northridge Corbin",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 5
    },
    "fridayOnly": true
  },
  "T085": {
    "engineName": "Northridge Sherwood",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 6
    },
    "fridayOnly": true
  },
  "T069": {
    "engineName": "Pacoima",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Fri": 1
    },
    "fridayOnly": true
  },
  "T075": {
    "engineName": "Simi Cochran",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 5
    },
    "fridayOnly": true
  },
  "T076": {
    "engineName": "Simi Madera",
    "region": "SFV",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Tue": 2,
      "Wed": 5,
      "Thu": 4,
      "Fri": 4
    }
  },
  "T065": {
    "engineName": "Sylmar",
    "region": "SFV",
    "cadence": "Fri-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Wed": 1,
      "Fri": 9
    }
  },
  "T067": {
    "engineName": "Topanga",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 9
    },
    "fridayOnly": true
  },
  "T074": {
    "engineName": "Valencia",
    "region": "SFV",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 3
    },
    "fridayOnly": true
  },
  "T063": {
    "engineName": "Van Nuys Raymer",
    "region": "SFV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Thu": 5,
      "Fri": 6
    }
  },
  "T062": {
    "engineName": "Van Nuys Sepulveda",
    "region": "SFV",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 13,
      "Wed": 6,
      "Thu": 8,
      "Fri": 10,
      "Sat": 3
    },
    "aliases": [
      "Sherman Oaks"
    ]
  },
  "T081": {
    "engineName": "Ventura Main",
    "region": "SFV",
    "cadence": "rare",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Mon": 1
    }
  },
  "T082": {
    "engineName": "Westlake",
    "region": "SFV",
    "cadence": "occasional",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Thu": 1,
      "Fri": 1
    }
  },
  "T068": {
    "engineName": "Woodland Hills",
    "region": "SFV",
    "cadence": "occasional",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 1,
      "Wed": 2,
      "Fri": 1
    }
  },
  "T092": {
    "engineName": "Huntington Beach Adams",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {}
  },
  "T093": {
    "engineName": "Huntington Beach Garfield",
    "region": "OC",
    "cadence": "occasional",
    "window": "LateAM(9-12)",
    "weekdayHits": {}
  },
  "T105": {
    "engineName": "Anaheim Euclid",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 3,
      "Wed": 4,
      "Fri": 6
    }
  },
  "T103": {
    "engineName": "Anaheim Hills",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 3,
      "Wed": 4,
      "Thu": 2,
      "Fri": 7,
      "Sat": 1
    }
  },
  "T104": {
    "engineName": "Anaheim Lincoln",
    "region": "OC",
    "cadence": "Tue-heavy",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Tue": 3
    }
  },
  "T165": {
    "engineName": "Brea Birch St",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 7,
      "Tue": 8,
      "Wed": 15,
      "Thu": 8,
      "Fri": 13
    }
  },
  "T166": {
    "engineName": "Buena Park",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 2,
      "Wed": 9,
      "Thu": 5,
      "Fri": 5
    },
    "openTime": "7AM"
  },
  "T091": {
    "engineName": "Costa Mesa 17th",
    "region": "OC",
    "cadence": "rare",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Wed": 1
    }
  },
  "T090": {
    "engineName": "Costa Mesa Harbor",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Mon": 4,
      "Tue": 2,
      "Wed": 6,
      "Fri": 6
    },
    "openTime": "7AM"
  },
  "T097": {
    "engineName": "Cypress",
    "region": "OC",
    "cadence": "frequent/multi-day, HEAVY WATCH (per Anthony 10/18)",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Mon": 3,
      "Tue": 1,
      "Wed": 9,
      "Thu": 2,
      "Fri": 6,
      "Sat": 2
    },
    "heavyWatch": true
  },
  "T110": {
    "engineName": "Foothill Portola",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 4,
      "Tue": 4,
      "Wed": 2,
      "Fri": 2
    }
  },
  "T108": {
    "engineName": "Fullerton Malvern",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 4,
      "Wed": 1,
      "Thu": 1,
      "Fri": 2
    },
    "dayLock": "MONDAY only; erratic lately, do not treat as a lock, never on Tue/Wed"
  },
  "T107": {
    "engineName": "Fullerton Orangethorpe",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 7,
      "Thu": 9,
      "Fri": 6
    }
  },
  "T106": {
    "engineName": "Fullerton Yorba Linda",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 4,
      "Thu": 3,
      "Fri": 5,
      "Sat": 3
    }
  },
  "T117": {
    "engineName": "Yorba Linda Blvd (Yorba Linda City)",
    "region": "OC",
    "cadence": "frequent/multi-day, SEPARATE store from Fullerton Yorba Linda (per Anthony, confirmed 10/09+10/12+10/16)",
    "window": "LateAM/PM",
    "weekdayHits": {}
  },
  "T098": {
    "engineName": "Garden Grove Brookhurst",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Mon": 2,
      "Tue": 1,
      "Wed": 3,
      "Thu": 1,
      "Fri": 2
    }
  },
  "T096": {
    "engineName": "Garden Grove Harbor",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 1,
      "Tue": 1,
      "Wed": 1,
      "Thu": 1,
      "Fri": 2
    },
    "openTime": "7AM"
  },
  "T088": {
    "engineName": "Irvine Barranca",
    "region": "OC",
    "cadence": "FRIDAY ONLY",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Fri": 7
    },
    "dayLock": "FRIDAY (hits every Friday)",
    "fridayOnly": true
  },
  "T089": {
    "engineName": "Irvine Spectrum",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Tue": 5,
      "Wed": 1,
      "Thu": 2,
      "Fri": 2
    }
  },
  "T109": {
    "engineName": "La Habra",
    "region": "OC",
    "cadence": "Wed-heavy, HEAVY WATCH (per Anthony 10/18)",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Wed": 3,
      "Fri": 1
    },
    "heavyWatch": true
  },
  "T111": {
    "engineName": "La Paz",
    "region": "OC",
    "cadence": "Thu-heavy",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Thu": 7,
      "Fri": 3
    }
  },
  "T114": {
    "engineName": "Mission Viejo Alicia",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 1,
      "Thu": 7,
      "Fri": 5
    }
  },
  "T112": {
    "engineName": "Mission Viejo Jeronimo",
    "region": "OC",
    "cadence": "Friday opener (per Anthony 10/08)",
    "window": "AM(7-9)",
    "weekdayHits": {}
  },
  "T113": {
    "engineName": "Mission Viejo Puerta Real",
    "region": "OC",
    "cadence": "Wed-heavy",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Wed": 2
    }
  },
  "T101": {
    "engineName": "Orange Chapman",
    "region": "OC",
    "cadence": "Fri-heavy",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Tue": 3,
      "Fri": 4
    }
  },
  "T102": {
    "engineName": "Orange N Tustin",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Tue": 3,
      "Wed": 3,
      "Sun": 1
    }
  },
  "T118": {
    "engineName": "Rancho Santa Margarita",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Tue": 3,
      "Thu": 9,
      "Fri": 5
    }
  },
  "T195": {
    "engineName": "San Clemente",
    "region": "OC",
    "cadence": "Fri-heavy",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 1,
      "Fri": 4
    }
  },
  "T115": {
    "engineName": "San Juan Capistrano",
    "region": "OC",
    "cadence": "no data",
    "window": "-",
    "weekdayHits": {}
  },
  "T120": {
    "engineName": "Santa Ana 17th/Grand (East)",
    "region": "OC",
    "cadence": "no data",
    "window": "-",
    "weekdayHits": {}
  },
  "T186": {
    "engineName": "Santa Ana Bristol (South Coast)",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Mon": 2,
      "Wed": 2,
      "Thu": 3,
      "Fri": 1
    }
  },
  "T119": {
    "engineName": "Santa Ana College",
    "region": "OC",
    "cadence": "Thu-heavy",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Thu": 2,
      "Fri": 1
    }
  },
  "T116": {
    "engineName": "Seal Beach",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Tue": 2,
      "Wed": 4,
      "Thu": 2
    }
  },
  "T100": {
    "engineName": "Tustin Marketplace",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "AM(7-9)",
    "weekdayHits": {
      "Tue": 7,
      "Wed": 11,
      "Fri": 4
    },
    "dayLock": "WEDNESDAY morning only (heads camp Tue night for Wed open); never list on Tuesday"
  },
  "T099": {
    "engineName": "Tustin Park Ave",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "PM(12-4)",
    "weekdayHits": {
      "Mon": 2,
      "Tue": 2,
      "Wed": 5,
      "Thu": 4,
      "Fri": 7
    }
  },
  "T190": {
    "engineName": "UC Irvine",
    "region": "OC",
    "cadence": "Mon-heavy",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Mon": 6
    },
    "dayLock": "MONDAY"
  },
  "T184": {
    "engineName": "USC Village",
    "region": "OC",
    "cadence": "Mon-heavy",
    "window": "Eve(4-9)",
    "weekdayHits": {
      "Mon": 6,
      "Sun": 1
    },
    "openTime": "7AM",
    "dayLock": "MONDAY"
  },
  "T176": {
    "engineName": "Westminster Beach",
    "region": "OC",
    "cadence": "no data",
    "window": "-",
    "weekdayHits": {},
    "openTime": "7AM"
  },
  "T094": {
    "engineName": "Westminster Mall",
    "region": "OC",
    "cadence": "frequent/multi-day",
    "window": "LateAM(9-12)",
    "weekdayHits": {
      "Mon": 7,
      "Tue": 10,
      "Wed": 4,
      "Thu": 6,
      "Fri": 5,
      "Sat": 1
    },
    "openTime": "7AM"
  }
};

// Engine stores that are not on the board yet (need an address before they can be added).
export const UNPLACED_ENGINE_STORES: StoreProfile[] = [];

// Stores that drop near-daily: a drop the day before does NOT make them lighter (engine §6).
// Brea Birch, Culver City Mall, Whittier Whitwood, 3121 Pasadena, Pico Rivera, Eagle Rock, Costa Mesa Harbor, Gardena, Manhattan Beach.
export const NEAR_DAILY = new Set(["T165", "T020", "T042", "T002", "T040", "T003", "T090", "T024", "T027"]);

// Short names / nicknames people use in Discord, lower-case -> board store id. Board names and engine names
// are matched automatically (see resolveStoreName); only add the extra spellings here.
export const STORE_ALIASES: Record<string, string> = {
  "ontario 4th and baker": "T135",
  "ontario 4th & baker": "T135",
  "ontario 4th street": "T135",
  "corona": "T124",
  "yorba linda city": "T117",
  "yorba linda yorba linda": "T117",
  "yorba city": "T117",
  "riverside tyler": "T126",
  "riverside tyler st": "T126",
  "park ave": "T099",
  "tustin park": "T099",
  "eastland": "T015",
  "eastland west covina": "T015",
  "santa ana east 17th": "T120",
  "santa ana 17th": "T120",
  "north tustin": "T102",
  "north tustin orange": "T102",
  "orange north tustin": "T102",
  "415 s la brea": "T188",
  "1302 s la brea": "T174",
  "la 1833a la cienega": "T056",
  "1833a la cienega": "T056",
  "la 3535 la cienega": "T057",
  "3535 la cienega": "T057",
  "1833 la cienega": "T056",
  "la 7th figueroa": "T054",
  "glendale mall": "T061",
  "glendale": "T061",
  "culver city jefferson": "T021",
  "la west hollywood": "T052",
  "weho": "T052",
  "lb bellflower": "T044",
  "lb cherry": "T045",
  "lb bixby": "T046",
  "apple valley highway 18": "T178",
  "anaheim east lincoln": "T104",
  "glassel park": "T189",
  "12121 noho": "T071",
  "11051 noho": "T070",
  "huntington beach adam s": "T092",
  "granada": "T066",
  "santa ana 3300 bristol": "T186",
  "ontario mills 4th": "T134",
  "simi": "T075",
  "goleta": "T170",
  "santa barbara": "T170",
  "sherman oaks": "T062",
  "south coast plaza": "T186",
  "bristol": "T186",
  "santa ana bristol": "T186",
  "spectrum": "T089",
  "barranca": "T088",
  "dtla": "T054",
  "7th and fig": "T054",
  "7th & fig": "T054",
  "7th and figueroa": "T054",
  "7th & figueroa": "T054",
  "brea": "T165",
  "brea birch": "T165",
  "gg harbor": "T096",
  "garden grove harbor": "T096",
  "gg brookhurst": "T098",
  "brookhurst": "T098",
  "culver mall": "T020",
  "culver city mall": "T020",
  "silverlake": "T191",
  "silver lake": "T191",
  "burbank empire": "T084",
  "burbank": "T084",
  "burbank west": "T172",
  "burbank hollywood way": "T172",
  "santa ana 17th grand": "T120",
  "topanga": "T067",
  "topanga mall": "T067",
  "bloomfield cerritos": "T051",
  "cerritos bloomfield": "T051",
  "cerritos south": "T050",
  "s azusa": "T016",
  "south azusa": "T016",
  "cpt": "T037",
  "kingsdale": "T175",
  "redondo beach": "T175",
  "redondo": "T175",
  "redondo kingsdale": "T175",
  "del amo": "T030",
  "bellflower": "T044",
  "cherry": "T045",
  "bixby": "T046",
  "whitwood": "T042",
  "whittwood": "T042",
  "orangethorpe": "T107",
  "malvern": "T108",
  "chapman": "T101",
  "euclid": "T105",
  "jeronimo": "T112",
  "alicia": "T114",
  "puerta real": "T113",
  "1302 la brea": "T174",
  "la brea 1302": "T174",
  "415 la brea": "T188",
  "la brea 415": "T188",
  "jess ranch": "T131",
  "bear valley rd": "T131",
  "hwy 18": "T178",
  "ca-18": "T178",
  "cal oaks": "T140",
  "clinton keith": "T180",
  "temecula": "T183",
  "arlington": "T127",
  "canyon springs": "T128",
  "tyler": "T126",
  "nason": "T125",
  "moreno valley": "T125",
  "slover": "T133",
  "summit": "T132",
  "ontario mills": "T134",
  "usc": "T184",
  "usc village": "T184",
  "uci": "T190",
  "uc irvine": "T190",
  "sawtelle": "T022",
  "samo broadway": "T058",
  "samo wilshire": "T059",
  "santa monica broadway": "T058",
  "santa monica wilshire": "T059",
  "sunset": "T053",
  "la sunset": "T053",
  "golden valley": "T073",
  "koreatown": "T192",
  "ktown": "T192",
  "beverly center": "T193",
  "glassell park": "T189",
  "eagle rock": "T003",
  "bonnie brae": "T185",
  "westminster beach": "T176",
  "westminster mall": "T094",
  "carson mall": "T179",
  "carson sepulveda": "T034",
  "hb adams": "T092",
  "huntington beach adams": "T092",
  "hb garfield": "T093",
  "huntington beach garfield": "T093",
  "1833 cienega": "T056",
  "3535 cienega": "T057",
  "3535": "T057",
  "1833": "T056",
  "12121": "T071",
  "11051": "T070",
  "777": "T001",
  "3121": "T002",
  "3121 pasadena": "T002",
  "777 pasadena": "T001",
  "irvine spectrum": "T089",
  "oxnard": "T087",
  "riverpark": "T087",
  "oxnard collection": "T087",
  "perris": "T196",
  "tustin marketplace": "T100",
  "the district": "T099",
  "district": "T099",
  "ontario baker": "T135",
  "ontario 4th": "T135"
};
