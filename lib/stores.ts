export interface StoreRef {
  id: string;
  name: string;
  region: string;
  regionLabel: string;
  address: string | null;
  lat: number | null;
  lng: number | null;
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
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T002",
    "name": "3121 Dena",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T003",
    "name": "Eagle Rock",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T004",
    "name": "Alhambra",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T005",
    "name": "Duarte",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T006",
    "name": "Pomona",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T007",
    "name": "San Dimas",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T008",
    "name": "La Verne",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T009",
    "name": "Upland",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T010",
    "name": "Diamond Bar",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T011",
    "name": "El Monte",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T012",
    "name": "Rosemead",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T013",
    "name": "Montclair",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T014",
    "name": "Rowland Heights",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T015",
    "name": "West Covina Eastland",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T016",
    "name": "S Azusa West Covina",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T017",
    "name": "N Azusa",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T018",
    "name": "Baldwin Park",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T019",
    "name": "La Canada",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T020",
    "name": "Culver City Mall",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T021",
    "name": "Culver Jefferson",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T022",
    "name": "LA Sawtelle",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T023",
    "name": "Westchester",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T024",
    "name": "Gardena",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T025",
    "name": "Lawndale",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T026",
    "name": "Hawthorne 120th",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T027",
    "name": "Manhattan Beach",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T028",
    "name": "Inglewood Century",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T029",
    "name": "Inglewood La Brea",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T030",
    "name": "Torrance Del Amo",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T031",
    "name": "Redondo Beach",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T032",
    "name": "Rolling Hills",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T033",
    "name": "Carson Mall",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T034",
    "name": "Carson Sepulveda",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T035",
    "name": "Lomita",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T036",
    "name": "San Pedro",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T037",
    "name": "Compton",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T038",
    "name": "South Gate",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T039",
    "name": "Huntington Park",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T040",
    "name": "Pico Rivera",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T041",
    "name": "Santa Fe Springs",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T042",
    "name": "Whittier Whitwood",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T043",
    "name": "Lakewood",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T044",
    "name": "Long Beach Bellflower",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T045",
    "name": "Long Beach Cherry",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T046",
    "name": "Long Beach Bixby",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T047",
    "name": "Signal Hill",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T048",
    "name": "Norwalk Firestone",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T049",
    "name": "Norwalk Imperial",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T050",
    "name": "Cerritos South St",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T051",
    "name": "Cerritos Bloomfield",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T164",
    "name": "Commerce",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T052",
    "name": "West Hollywood",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T053",
    "name": "Sunset",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T054",
    "name": "7th/Figueroa",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T055",
    "name": "Westwood",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T056",
    "name": "1833A Cienega",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T057",
    "name": "3535 Cienega",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T058",
    "name": "Samo Broadway",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T059",
    "name": "Samo Wilshire",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T060",
    "name": "Hollywood Galaxy",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T061",
    "name": "Glendale Galleria",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T062",
    "name": "Van Nuys Sepulveda",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T063",
    "name": "Van Nuys Raymer",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T064",
    "name": "Mission Hills",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T065",
    "name": "Sylmar",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T066",
    "name": "Granada Hills",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T067",
    "name": "Topanga Mall",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T068",
    "name": "Woodland Hills",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T069",
    "name": "Pacoima",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T070",
    "name": "11051 North Hollywood",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T071",
    "name": "12121 North Hollywood",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T072",
    "name": "Encino",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T073",
    "name": "Golden Valley Santa Clarita",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T074",
    "name": "Valencia",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T075",
    "name": "Simi Cochran",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T076",
    "name": "Simi Madera",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T077",
    "name": "Moorpark",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T078",
    "name": "Newbury Park",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T079",
    "name": "Camarillo",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T080",
    "name": "Ventura Mall",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T081",
    "name": "Ventura Main",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T082",
    "name": "Westlake",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T083",
    "name": "Fallbrook",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T084",
    "name": "Burbank Empire",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T085",
    "name": "Northridge Sherwood",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T086",
    "name": "Northridge Corbin",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T087",
    "name": "Oxnard Collection",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T088",
    "name": "Irvine Barranca",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T089",
    "name": "Irvine Spectrum",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T090",
    "name": "Costa Mesa Harbor",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T091",
    "name": "Costa Mesa 17th",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T092",
    "name": "HB Adams",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T093",
    "name": "HB Garfield",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T094",
    "name": "Westminster Mall",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T095",
    "name": "Westminster Beach",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T096",
    "name": "Garden Grove Harbor",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T097",
    "name": "Cypress",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T166",
    "name": "Buena Park",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T098",
    "name": "Brookhurst",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T099",
    "name": "Tustin Park Ave",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T165",
    "name": "Brea",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T100",
    "name": "Tustin Marketplace",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T101",
    "name": "Orange Chapman",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T102",
    "name": "Orange N Tustin",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T103",
    "name": "Anaheim Hills",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T104",
    "name": "Anaheim Lincoln",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T105",
    "name": "Anaheim Euclid",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T106",
    "name": "Fullerton Yorba Linda",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T107",
    "name": "Fullerton Orangethorpe",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T108",
    "name": "Fullerton Malvern",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T109",
    "name": "La Habra",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T110",
    "name": "Foothill Portola",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T111",
    "name": "La Paz",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T112",
    "name": "Mission Viejo Jeronimo",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T113",
    "name": "Mission Viejo Puerta Real",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T114",
    "name": "Mission Viejo Alicia Parkway",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T115",
    "name": "San Juan Capistrano",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T116",
    "name": "Seal Beach",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T117",
    "name": "Yorba Linda Blvd",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T118",
    "name": "Rancho Santa Margarita",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T119",
    "name": "Santa Ana College",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T120",
    "name": "Santa Ana 17th/Grand",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T167",
    "name": "Santa Ana 17th/Bristol",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T121",
    "name": "Eastvale",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T122",
    "name": "Norco",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T123",
    "name": "Jurupa Valley",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T124",
    "name": "Corona Tuscany",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T125",
    "name": "Moreno Valley East",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T126",
    "name": "Tyler Riverside",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T127",
    "name": "Arlington Riverside",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T128",
    "name": "Canyon Springs Riverside",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T129",
    "name": "Redlands",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T130",
    "name": "Victorville CA-18",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T131",
    "name": "Apple Valley Bear Valley",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T132",
    "name": "Fontana Summit",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T133",
    "name": "Fontana Slover",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T134",
    "name": "Ontario Mills",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T135",
    "name": "Ontario Baker",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T136",
    "name": "1670 E 4th Ontario",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T137",
    "name": "Rancho Cucamonga",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T138",
    "name": "San Bernardino",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T139",
    "name": "Lake Elsinore",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T140",
    "name": "Murrieta Cal Oaks",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T141",
    "name": "Menifee",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T142",
    "name": "La Quinta",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T143",
    "name": "Palm Desert",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T144",
    "name": "Cathedral City",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T145",
    "name": "Hemet",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T146",
    "name": "Poway",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T147",
    "name": "Santee",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T148",
    "name": "Grossmont",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T149",
    "name": "El Camino Oceanside",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T150",
    "name": "Business Park",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T151",
    "name": "Sycamore",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T152",
    "name": "Escondido Mall",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T153",
    "name": "Mira Mesa",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T154",
    "name": "Eastlake",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T155",
    "name": "Carmel Mountain",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T156",
    "name": "Mission Valley",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T157",
    "name": "Sports Arena",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T158",
    "name": "College Grove",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T159",
    "name": "Balboa",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T160",
    "name": "Rancho SD",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T161",
    "name": "Plaza Bonita",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T162",
    "name": "Othello",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T163",
    "name": "Lemon Grove",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": null,
    "lat": null,
    "lng": null
  },
  {
    "id": "T168",
    "name": "Chino Grand",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "3944 Grand Ave, Chino, CA 91710, USA",
    "lat": 34.0016935,
    "lng": -117.7187131
  },
  {
    "id": "T169",
    "name": "Chino Philadelphia",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "5555 Philadelphia St, Chino, CA 91710, USA",
    "lat": 34.032775,
    "lng": -117.681443
  },
  {
    "id": "T170",
    "name": "Goleta",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "6865 Hollister Ave, Goleta, CA 93117, USA",
    "lat": 34.4285896,
    "lng": -119.8676717
  },
  {
    "id": "T171",
    "name": "Encinitas",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "1010 N El Camino Real, Encinitas, CA 92024, USA",
    "lat": 33.0627365,
    "lng": -117.2652234
  }
];
