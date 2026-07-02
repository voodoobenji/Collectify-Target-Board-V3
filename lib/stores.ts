export interface StoreRef {
  id: string;
  name: string;
  region: string;
  regionLabel: string;
  vendorId: string | null;
  vendorNickname: string | null;
  stockingMethod: "vendor" | "employee" | "both";
}

export const REGION_ORDER = [
  "SFV",
  "805.0",
  "SGV/IE",
  "LOSANGELES",
  "CULVERINGSB",
  "SOUTHOFLA",
  "OC",
  "SD",
];

export const STORES: StoreRef[] = [
  {
    "id": "T001",
    "name": "777 Pasadena",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V001",
    "vendorNickname": "GALE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T002",
    "name": "3121 Dena",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V002",
    "vendorNickname": "MARIA",
    "stockingMethod": "vendor"
  },
  {
    "id": "T003",
    "name": "Eagle Rock",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T004",
    "name": "Alhambra",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V001",
    "vendorNickname": "GALE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T005",
    "name": "Duarte",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V001",
    "vendorNickname": "GALE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T006",
    "name": "Pomona",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V002",
    "vendorNickname": "MARIA",
    "stockingMethod": "vendor"
  },
  {
    "id": "T007",
    "name": "San Dimas",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V002",
    "vendorNickname": "MARIA",
    "stockingMethod": "vendor"
  },
  {
    "id": "T008",
    "name": "La Verne",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V002",
    "vendorNickname": "MARIA",
    "stockingMethod": "vendor"
  },
  {
    "id": "T009",
    "name": "Upland",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V001",
    "vendorNickname": "GALE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T010",
    "name": "Diamond Bar",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V004",
    "vendorNickname": "Whittier/Diamond/Brea",
    "stockingMethod": "vendor"
  },
  {
    "id": "T011",
    "name": "El Monte",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V002",
    "vendorNickname": "MARIA",
    "stockingMethod": "vendor"
  },
  {
    "id": "T012",
    "name": "Rosemead",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V002",
    "vendorNickname": "MARIA",
    "stockingMethod": "vendor"
  },
  {
    "id": "T013",
    "name": "Montclair",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V001",
    "vendorNickname": "GALE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T014",
    "name": "Rowland Heights",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V003",
    "vendorNickname": "CHRISTINE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T015",
    "name": "West Covina Eastland",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V001",
    "vendorNickname": "GALE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T016",
    "name": "S Azusa West Covina",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V003",
    "vendorNickname": "CHRISTINE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T017",
    "name": "N Azusa",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V001",
    "vendorNickname": "GALE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T018",
    "name": "Baldwin Park",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": "V002",
    "vendorNickname": "MARIA",
    "stockingMethod": "vendor"
  },
  {
    "id": "T019",
    "name": "La Canada",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T020",
    "name": "Culver City Mall",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T021",
    "name": "Culver Jefferson",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T022",
    "name": "LA Sawtelle",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T023",
    "name": "Westchester",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T024",
    "name": "Gardena",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T025",
    "name": "Lawndale",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T026",
    "name": "Hawthorne 120th",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T027",
    "name": "Manhattan Beach",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T028",
    "name": "Inglewood Century",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T029",
    "name": "Inglewood La Brea",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T030",
    "name": "Torrance Del Amo",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": "V006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield",
    "stockingMethod": "vendor"
  },
  {
    "id": "T031",
    "name": "Redondo Beach",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T032",
    "name": "Rolling Hills",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T033",
    "name": "Carson Mall",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": "V009",
    "vendorNickname": "Carson/Seal/Signal",
    "stockingMethod": "vendor"
  },
  {
    "id": "T034",
    "name": "Carson Sepulveda",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": "V009",
    "vendorNickname": "Carson/Seal/Signal",
    "stockingMethod": "vendor"
  },
  {
    "id": "T035",
    "name": "Lomita",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T036",
    "name": "San Pedro",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T037",
    "name": "Compton",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T038",
    "name": "South Gate",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T039",
    "name": "Huntington Park",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T040",
    "name": "Pico Rivera",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": "V003",
    "vendorNickname": "CHRISTINE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T041",
    "name": "Santa Fe Springs",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": "V003",
    "vendorNickname": "CHRISTINE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T042",
    "name": "Whittier Whitwood",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": "V004",
    "vendorNickname": "Whittier/Diamond/Brea",
    "stockingMethod": "vendor"
  },
  {
    "id": "T043",
    "name": "Lakewood",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": "V006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield",
    "stockingMethod": "vendor"
  },
  {
    "id": "T044",
    "name": "Long Beach Bellflower",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": "V006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield",
    "stockingMethod": "vendor"
  },
  {
    "id": "T045",
    "name": "Long Beach Cherry",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T046",
    "name": "Long Beach Bixby",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T047",
    "name": "Signal Hill",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": "V009",
    "vendorNickname": "Carson/Seal/Signal",
    "stockingMethod": "vendor"
  },
  {
    "id": "T048",
    "name": "Norwalk Firestone",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T049",
    "name": "Norwalk Imperial",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T050",
    "name": "Cerritos South St",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T051",
    "name": "Cerritos Bloomfield",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": "v006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield",
    "stockingMethod": "vendor"
  },
  {
    "id": "T164",
    "name": "Commerce",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "vendorId": "V001",
    "vendorNickname": "GALE",
    "stockingMethod": "vendor"
  },
  {
    "id": "T052",
    "name": "West Hollywood",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T053",
    "name": "Sunset",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T054",
    "name": "7th/Figueroa",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T055",
    "name": "Westwood",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T056",
    "name": "1833A Cienega",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T057",
    "name": "3535 Cienega",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T058",
    "name": "Samo Broadway",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T059",
    "name": "Samo Wilshire",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T060",
    "name": "Hollywood Galaxy",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T061",
    "name": "Glendale Galleria",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T062",
    "name": "Van Nuys Sepulveda",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T063",
    "name": "Van Nuys Raymer",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T064",
    "name": "Mission Hills",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T065",
    "name": "Sylmar",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T066",
    "name": "Granada Hills",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T067",
    "name": "Topanga Mall",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T068",
    "name": "Woodland Hills",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T069",
    "name": "Pacoima",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T070",
    "name": "11051 North Hollywood",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T071",
    "name": "12121 North Hollywood",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T072",
    "name": "Encino",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T073",
    "name": "Golden Valley Santa Clarita",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T074",
    "name": "Valencia",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T075",
    "name": "Simi Cochran",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T076",
    "name": "Simi Madera",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T077",
    "name": "Moorpark",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T078",
    "name": "Newbury Park",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T079",
    "name": "Camarillo",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T080",
    "name": "Ventura Mall",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T081",
    "name": "Ventura Main",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T082",
    "name": "Westlake",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T083",
    "name": "Fallbrook",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T084",
    "name": "Burbank Empire",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T085",
    "name": "Northridge Sherwood",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T086",
    "name": "Northridge Corbin",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T087",
    "name": "Oxnard Collection",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T088",
    "name": "Irvine Barranca",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V007",
    "vendorNickname": "Michelle",
    "stockingMethod": "vendor"
  },
  {
    "id": "T089",
    "name": "Irvine Spectrum",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T090",
    "name": "Costa Mesa Harbor",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V007",
    "vendorNickname": "Michelle",
    "stockingMethod": "vendor"
  },
  {
    "id": "T091",
    "name": "Costa Mesa 17th",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T092",
    "name": "HB Adams",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V007",
    "vendorNickname": "Michelle",
    "stockingMethod": "vendor"
  },
  {
    "id": "T093",
    "name": "HB Garfield",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T094",
    "name": "Westminster Mall",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V007",
    "vendorNickname": "Michelle",
    "stockingMethod": "vendor"
  },
  {
    "id": "T095",
    "name": "Westminster Beach",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V007",
    "vendorNickname": "Michelle",
    "stockingMethod": "vendor"
  },
  {
    "id": "T096",
    "name": "Garden Grove Harbor",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T097",
    "name": "Cypress",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T166",
    "name": "Buena Park",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield",
    "stockingMethod": "vendor"
  },
  {
    "id": "T098",
    "name": "Brookhurst",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T099",
    "name": "Tustin Park Ave",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T165",
    "name": "Brea",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V004",
    "vendorNickname": "Whittier/Diamond/Brea",
    "stockingMethod": "vendor"
  },
  {
    "id": "T100",
    "name": "Tustin Marketplace",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V007",
    "vendorNickname": "Michelle",
    "stockingMethod": "vendor"
  },
  {
    "id": "T101",
    "name": "Orange Chapman",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V007",
    "vendorNickname": "Michelle",
    "stockingMethod": "vendor"
  },
  {
    "id": "T102",
    "name": "Orange N Tustin",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T103",
    "name": "Anaheim Hills",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T104",
    "name": "Anaheim Lincoln",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T105",
    "name": "Anaheim Euclid",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T106",
    "name": "Fullerton Yorba Linda",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V008",
    "vendorNickname": "Blond Girl",
    "stockingMethod": "vendor"
  },
  {
    "id": "T107",
    "name": "Fullerton Orangethorpe",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V005",
    "vendorNickname": "Sang",
    "stockingMethod": "vendor"
  },
  {
    "id": "T108",
    "name": "Fullerton Malvern",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V005",
    "vendorNickname": "Sang",
    "stockingMethod": "vendor"
  },
  {
    "id": "T109",
    "name": "La Habra",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T110",
    "name": "Foothill Portola",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V007",
    "vendorNickname": "Michelle",
    "stockingMethod": "vendor"
  },
  {
    "id": "T111",
    "name": "La Paz",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T112",
    "name": "Mission Viejo Jeronimo",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T113",
    "name": "Mission Viejo Puerta Real",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T114",
    "name": "Mission Viejo Alicia Parkway",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T115",
    "name": "San Juan Capistrano",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T116",
    "name": "Seal Beach",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": "V009",
    "vendorNickname": "Carson/Seal/Signal",
    "stockingMethod": "vendor"
  },
  {
    "id": "T117",
    "name": "Yorba Linda Blvd",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T118",
    "name": "Rancho Santa Margarita",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T119",
    "name": "Santa Ana College",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T120",
    "name": "Santa Ana 17th/Grand",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T167",
    "name": "Santa Ana 17th/Bristol",
    "region": "OC",
    "regionLabel": "Orange County",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T121",
    "name": "Eastvale",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T122",
    "name": "Norco",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T123",
    "name": "Jurupa Valley",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T124",
    "name": "Corona Tuscany",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T125",
    "name": "Moreno Valley East",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T126",
    "name": "Tyler Riverside",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T127",
    "name": "Arlington Riverside",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T128",
    "name": "Canyon Springs Riverside",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T129",
    "name": "Redlands",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T130",
    "name": "Victorville CA-18",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T131",
    "name": "Apple Valley Bear Valley",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T132",
    "name": "Fontana Summit",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T133",
    "name": "Fontana Slover",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T134",
    "name": "Ontario Mills",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T135",
    "name": "Ontario Baker",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T136",
    "name": "1670 E 4th Ontario",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T137",
    "name": "Rancho Cucamonga",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T138",
    "name": "San Bernardino",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T139",
    "name": "Lake Elsinore",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T140",
    "name": "Murrieta Cal Oaks",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T141",
    "name": "Menifee",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T142",
    "name": "La Quinta",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T143",
    "name": "Palm Desert",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T144",
    "name": "Cathedral City",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T145",
    "name": "Hemet",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T146",
    "name": "Poway",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T147",
    "name": "Santee",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T148",
    "name": "Grossmont",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T149",
    "name": "El Camino Oceanside",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T150",
    "name": "Business Park",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T151",
    "name": "Sycamore",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T152",
    "name": "Escondido Mall",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T153",
    "name": "Mira Mesa",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T154",
    "name": "Eastlake",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T155",
    "name": "Carmel Mountain",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T156",
    "name": "Mission Valley",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T157",
    "name": "Sports Arena",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T158",
    "name": "College Grove",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T159",
    "name": "Balboa",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T160",
    "name": "Rancho SD",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T161",
    "name": "Plaza Bonita",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T162",
    "name": "Othello",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  },
  {
    "id": "T163",
    "name": "Lemon Grove",
    "region": "SD",
    "regionLabel": "San Diego",
    "vendorId": null,
    "vendorNickname": null,
    "stockingMethod": "employee"
  }
];
