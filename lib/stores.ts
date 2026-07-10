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
    "address": "777 E Colorado Blvd, Pasadena, CA 91101, USA",
    "lat": 34.1464065,
    "lng": -118.1345552
  },
  {
    "id": "T002",
    "name": "3121 Dena",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "3121 E Colorado Blvd, Pasadena, CA 91107, USA",
    "lat": 34.1473633,
    "lng": -118.0852591
  },
  {
    "id": "T003",
    "name": "Eagle Rock",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "2626 Colorado Blvd, Los Angeles, CA 90041, USA",
    "lat": 34.1410828,
    "lng": -118.2240827
  },
  {
    "id": "T004",
    "name": "Alhambra",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "2120 W Main St, Alhambra, CA 91801, USA",
    "lat": 34.0912971,
    "lng": -118.1473034
  },
  {
    "id": "T005",
    "name": "Duarte",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "1050 Huntington Dr, Duarte, CA 91010, USA",
    "lat": 34.1375735,
    "lng": -117.9833351
  },
  {
    "id": "T006",
    "name": "Pomona",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "701 Rio Rancho Rd, Pomona, CA 91766, USA",
    "lat": 34.0349794,
    "lng": -117.7557884
  },
  {
    "id": "T007",
    "name": "San Dimas",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "888 W Arrow Hwy, San Dimas, CA 91773, USA",
    "lat": 34.1044369,
    "lng": -117.8237334
  },
  {
    "id": "T008",
    "name": "La Verne",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "2462 Foothill Blvd, La Verne, CA 91750, USA",
    "lat": 34.1096272,
    "lng": -117.759877
  },
  {
    "id": "T009",
    "name": "Upland",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "1931 N Campus Ave, Upland, CA 91784, USA",
    "lat": 34.1335389,
    "lng": -117.640734
  },
  {
    "id": "T010",
    "name": "Diamond Bar",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "747 Grand Ave, Diamond Bar, CA 91765, USA",
    "lat": 34.0047584,
    "lng": -117.8208
  },
  {
    "id": "T011",
    "name": "El Monte",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "3610 Peck Rd, El Monte, CA 91731, USA",
    "lat": 34.071601,
    "lng": -118.0217543
  },
  {
    "id": "T012",
    "name": "Rosemead",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "3600 Rosemead Blvd, Rosemead, CA 91770, USA",
    "lat": 34.0739945,
    "lng": -118.0703835
  },
  {
    "id": "T013",
    "name": "Montclair",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "9052 Central Ave, Montclair, CA 91763, USA",
    "lat": 34.0903668,
    "lng": -117.6907833
  },
  {
    "id": "T014",
    "name": "Rowland Heights",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "17751 Colima Rd, Rowland Heights, CA 91748, USA",
    "lat": 33.9921289,
    "lng": -117.9185109
  },
  {
    "id": "T015",
    "name": "West Covina Eastland",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "2831 E Eastland Center Dr, West Covina, CA 91791, USA",
    "lat": 34.073976,
    "lng": -117.8843187
  },
  {
    "id": "T016",
    "name": "S Azusa West Covina",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "2370 S Azusa Ave, West Covina, CA 91792, USA",
    "lat": 34.0335698,
    "lng": -117.9121894
  },
  {
    "id": "T017",
    "name": "N Azusa",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "809 N Azusa Ave, Azusa, CA 91702, USA",
    "lat": 34.1364404,
    "lng": -117.9082398
  },
  {
    "id": "T018",
    "name": "Baldwin Park",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "3100 Baldwin Park Blvd, Baldwin Park, CA 91706, USA",
    "lat": 34.0692425,
    "lng": -117.9767022
  },
  {
    "id": "T019",
    "name": "La Canada",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "965 Town Center Dr, La Ca\u00f1ada Flintridge, CA 91011, USA",
    "lat": 34.2052085,
    "lng": -118.1987078
  },
  {
    "id": "T020",
    "name": "Culver City Mall",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "6000 Sepulveda Blvd Ste 2250, Culver City, CA 90230, USA",
    "lat": 33.9847003,
    "lng": -118.3945778
  },
  {
    "id": "T021",
    "name": "Culver Jefferson",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "10820 Jefferson Blvd, Culver City, CA 90230, USA",
    "lat": 33.9992941,
    "lng": -118.3934894
  },
  {
    "id": "T022",
    "name": "LA Sawtelle",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "11840 Santa Monica Blvd, Los Angeles, CA 90025, USA",
    "lat": 34.042286,
    "lng": -118.4589139
  },
  {
    "id": "T023",
    "name": "Westchester",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "8900 S Sepulveda Blvd, Los Angeles, CA 90045, USA",
    "lat": 33.9555778,
    "lng": -118.3957719
  },
  {
    "id": "T024",
    "name": "Gardena",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "2169 W Redondo Beach Blvd, Gardena, CA 90247, USA",
    "lat": 33.8866729,
    "lng": -118.3165664
  },
  {
    "id": "T025",
    "name": "Lawndale",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "14310 Hawthorne Blvd, Lawndale, CA 90260, USA",
    "lat": 33.9014023,
    "lng": -118.3507605
  },
  {
    "id": "T026",
    "name": "Hawthorne 120th",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "2700 W 120th St, Hawthorne, CA 90250, USA",
    "lat": 33.9219162,
    "lng": -118.3213946
  },
  {
    "id": "T027",
    "name": "Manhattan Beach",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "1200 N Sepulveda Blvd, Manhattan Beach, CA 90266, USA",
    "lat": 33.8889349,
    "lng": -118.3942198
  },
  {
    "id": "T028",
    "name": "Inglewood Century",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "3471 W Century Blvd, Inglewood, CA 90305, USA",
    "lat": 33.9483124,
    "lng": -118.3335923
  },
  {
    "id": "T029",
    "name": "Inglewood La Brea",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "220 N La Brea Ave, Inglewood, CA 90301, USA",
    "lat": 33.965083,
    "lng": -118.3529666
  },
  {
    "id": "T030",
    "name": "Torrance Del Amo",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "3433 Sepulveda Blvd, Torrance, CA 90505, USA",
    "lat": 33.8268869,
    "lng": -118.3456381
  },
  {
    "id": "T031",
    "name": "Redondo Beach",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "43 Peninsula Center, Rolling Hills Estates, CA 90274, USA",
    "lat": 33.7732478,
    "lng": -118.3765214
  },
  {
    "id": "T032",
    "name": "Rolling Hills",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "43 Peninsula Center, Rolling Hills Estates, CA 90274, USA",
    "lat": 33.7732478,
    "lng": -118.3765214
  },
  {
    "id": "T033",
    "name": "Carson Mall",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "651 W Sepulveda Blvd, Carson, CA 90745, USA",
    "lat": 33.8098408,
    "lng": -118.2861425
  },
  {
    "id": "T034",
    "name": "Carson Sepulveda",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "651 W Sepulveda Blvd, Carson, CA 90745, USA",
    "lat": 33.8098408,
    "lng": -118.2861425
  },
  {
    "id": "T035",
    "name": "Lomita",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "2130 Pacific Coast Hwy, Lomita, CA 90717, USA",
    "lat": 33.789022,
    "lng": -118.3181587
  },
  {
    "id": "T036",
    "name": "San Pedro",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "1701 N Gaffey St, San Pedro, CA 90731, USA",
    "lat": 33.7601256,
    "lng": -118.2939825
  },
  {
    "id": "T037",
    "name": "Compton",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "1621 S Alameda St E, Compton, CA 90220, USA",
    "lat": 33.879634,
    "lng": -118.2188484
  },
  {
    "id": "T038",
    "name": "South Gate",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "5700 Firestone Blvd, South Gate, CA 90280, USA",
    "lat": 33.9480794,
    "lng": -118.1684027
  },
  {
    "id": "T039",
    "name": "Huntington Park",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "5731 Bickett St, Huntington Park, CA 90255, USA",
    "lat": 33.9901618,
    "lng": -118.2173385
  },
  {
    "id": "T040",
    "name": "Pico Rivera",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "8800 Whittier Blvd, Pico Rivera, CA 90660, USA",
    "lat": 34.0006745,
    "lng": -118.0868458
  },
  {
    "id": "T041",
    "name": "Santa Fe Springs",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "10621 Carmenita Rd, Santa Fe Springs, CA 90670, USA",
    "lat": 33.9378224,
    "lng": -118.0481685
  },
  {
    "id": "T042",
    "name": "Whittier Whitwood",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "15614 Whittwood Ln, Whittier, CA 90603, USA",
    "lat": 33.9428425,
    "lng": -117.9966138
  },
  {
    "id": "T043",
    "name": "Lakewood",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "141 Lakewood Ctr Mall, Lakewood, CA 90712, USA",
    "lat": 33.8526059,
    "lng": -118.1405851
  },
  {
    "id": "T044",
    "name": "Long Beach Bellflower",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "2270 N Bellflower Blvd, Long Beach, CA 90815, USA",
    "lat": 33.7978736,
    "lng": -118.1226002
  },
  {
    "id": "T045",
    "name": "Long Beach Cherry",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "6750 Cherry Ave, Long Beach, CA 90805, USA",
    "lat": 33.8770784,
    "lng": -118.1662089
  },
  {
    "id": "T046",
    "name": "Long Beach Bixby",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "5760 E 7th St, Long Beach, CA 90803, USA",
    "lat": 33.7743608,
    "lng": -118.1195608
  },
  {
    "id": "T047",
    "name": "Signal Hill",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "950 E 33rd St, Signal Hill, CA 90755, USA",
    "lat": 33.8164505,
    "lng": -118.1815653
  },
  {
    "id": "T048",
    "name": "Norwalk Firestone",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "10600 Firestone Blvd, Norwalk, CA 90650, USA",
    "lat": 33.9252273,
    "lng": -118.1070629
  },
  {
    "id": "T049",
    "name": "Norwalk Imperial",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "12051 Imperial Hwy, Norwalk, CA 90650, USA",
    "lat": 33.9182058,
    "lng": -118.0755464
  },
  {
    "id": "T050",
    "name": "Cerritos South St",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "11525 South St, Cerritos, CA 90703, USA",
    "lat": 33.8593759,
    "lng": -118.0872116
  },
  {
    "id": "T051",
    "name": "Cerritos Bloomfield",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "20200 Bloomfield Ave, Cerritos, CA 90703, USA",
    "lat": 33.8469107,
    "lng": -118.0619883
  },
  {
    "id": "T164",
    "name": "Commerce",
    "region": "SOUTHOFLA",
    "regionLabel": "Southeast LA / Long Beach",
    "address": "5600 Whittier Blvd, Commerce, CA 90022, USA",
    "lat": 34.0179846,
    "lng": -118.1507599
  },
  {
    "id": "T052",
    "name": "West Hollywood",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "7100 Santa Monica Blvd Suite 201, West Hollywood, CA 90046, USA",
    "lat": 34.0897064,
    "lng": -118.3446807
  },
  {
    "id": "T053",
    "name": "Sunset",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "5500 Sunset Blvd, Los Angeles, CA 90028, USA",
    "lat": 34.0978198,
    "lng": -118.309755
  },
  {
    "id": "T054",
    "name": "7th/Figueroa",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "735 S Figueroa St, Los Angeles, CA 90017, USA",
    "lat": 34.049121,
    "lng": -118.2614404
  },
  {
    "id": "T055",
    "name": "Westwood",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "10861 Weyburn Ave, Los Angeles, CA 90024, USA",
    "lat": 34.0626638,
    "lng": -118.4440672
  },
  {
    "id": "T056",
    "name": "1833A Cienega",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "1833A La Cienega Blvd, Los Angeles, CA 90035, USA",
    "lat": 34.0441838,
    "lng": -118.3790448
  },
  {
    "id": "T057",
    "name": "3535 Cienega",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "3535 S La Cienega Blvd, Los Angeles, CA 90016, USA",
    "lat": 34.0234456,
    "lng": -118.3737783
  },
  {
    "id": "T058",
    "name": "Samo Broadway",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "420 Broadway, Santa Monica, CA 90401, USA",
    "lat": 34.0155838,
    "lng": -118.4926625
  },
  {
    "id": "T059",
    "name": "Samo Wilshire",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "1610 Wilshire Blvd, Santa Monica, CA 90403, USA",
    "lat": 34.0283631,
    "lng": -118.4864809
  },
  {
    "id": "T060",
    "name": "Hollywood Galaxy",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "7021 Hollywood Blvd #210, Los Angeles, CA 90028, USA",
    "lat": 34.1020212,
    "lng": -118.3424965
  },
  {
    "id": "T061",
    "name": "Glendale Galleria",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "2195 Galleria Way, Glendale, CA 91210, USA",
    "lat": 34.1432164,
    "lng": -118.2586529
  },
  {
    "id": "T062",
    "name": "Van Nuys Sepulveda",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "5711 Sepulveda Blvd, Sherman Oaks, CA 91411, USA",
    "lat": 34.1747561,
    "lng": -118.4669957
  },
  {
    "id": "T063",
    "name": "Van Nuys Raymer",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "14920 Raymer St, Van Nuys, CA 91405, USA",
    "lat": 34.2127816,
    "lng": -118.4593474
  },
  {
    "id": "T064",
    "name": "Mission Hills",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "10340 Sepulveda Blvd, Mission Hills, CA 91345, USA",
    "lat": 34.2585541,
    "lng": -118.4665961
  },
  {
    "id": "T065",
    "name": "Sylmar",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "12920 Foothill Blvd, Sylmar, CA 91342, USA",
    "lat": 34.2934061,
    "lng": -118.4172877
  },
  {
    "id": "T066",
    "name": "Granada Hills",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "11133 Balboa Blvd, Granada Hills, CA 91344, USA",
    "lat": 34.2728716,
    "lng": -118.5036953
  },
  {
    "id": "T067",
    "name": "Topanga Mall",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "6700 Topanga Canyon Blvd, Canoga Park, CA 91303, USA",
    "lat": 34.1919569,
    "lng": -118.6025319
  },
  {
    "id": "T068",
    "name": "Woodland Hills",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "20801 Ventura Blvd, Woodland Hills, CA 91364, USA",
    "lat": 34.1673087,
    "lng": -118.585571
  },
  {
    "id": "T069",
    "name": "Pacoima",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "9725 Laurel Canyon Blvd, Pacoima, CA 91331, USA",
    "lat": 34.245313,
    "lng": -118.4194137
  },
  {
    "id": "T070",
    "name": "11051 North Hollywood",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "11051 Victory Blvd, North Hollywood, CA 91606, USA",
    "lat": 34.1886706,
    "lng": -118.3712998
  },
  {
    "id": "T071",
    "name": "12121 North Hollywood",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "12121 Victory Blvd, North Hollywood, CA 91606, USA",
    "lat": 34.187862,
    "lng": -118.3974683
  },
  {
    "id": "T072",
    "name": "Encino",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "17401 Ventura Blvd Unit A1, Encino, CA 91316, USA",
    "lat": 34.1614673,
    "lng": -118.5128237
  },
  {
    "id": "T073",
    "name": "Golden Valley Santa Clarita",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "19105 Golden Valley Rd, Santa Clarita, CA 91387, USA",
    "lat": 34.394102,
    "lng": -118.4650168
  },
  {
    "id": "T074",
    "name": "Valencia",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "24425 Magic Mountain Pkwy, Valencia, CA 91355, USA",
    "lat": 34.4210634,
    "lng": -118.5615876
  },
  {
    "id": "T075",
    "name": "Simi Cochran",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "2907 Cochran St, Simi Valley, CA 93065, USA",
    "lat": 34.280517,
    "lng": -118.7396607
  },
  {
    "id": "T076",
    "name": "Simi Madera",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "51 Tierra Rejada Rd, Simi Valley, CA 93065, USA",
    "lat": 34.2734901,
    "lng": -118.798316
  },
  {
    "id": "T077",
    "name": "Moorpark",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "800 New Los Angeles Ave, Moorpark, CA 93021, USA",
    "lat": 34.2782751,
    "lng": -118.8671988
  },
  {
    "id": "T078",
    "name": "Newbury Park",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "2705 Teller Rd, Newbury Park, CA 91320, USA",
    "lat": 34.1909316,
    "lng": -118.9344341
  },
  {
    "id": "T079",
    "name": "Camarillo",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "209 W Ventura Blvd, Camarillo, CA 93010, USA",
    "lat": 34.2169418,
    "lng": -119.0729598
  },
  {
    "id": "T080",
    "name": "Ventura Mall",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "245 S Mills Rd, Ventura, CA 93003, USA",
    "lat": 34.2699356,
    "lng": -119.2490496
  },
  {
    "id": "T081",
    "name": "Ventura Main",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "4200 E Main St, Ventura, CA 93003, USA",
    "lat": 34.2618561,
    "lng": -119.2372326
  },
  {
    "id": "T082",
    "name": "Westlake",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "30740 Russell Ranch Rd, Westlake Village, CA 91362, USA",
    "lat": 34.1481199,
    "lng": -118.7937704
  },
  {
    "id": "T083",
    "name": "Fallbrook",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "6635 Fallbrook Ave, West Hills, CA 91307, USA",
    "lat": 34.1903848,
    "lng": -118.6266613
  },
  {
    "id": "T084",
    "name": "Burbank Empire",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "1800 Empire Ave, Burbank, CA 91504, USA",
    "lat": 34.1890295,
    "lng": -118.3306705
  },
  {
    "id": "T085",
    "name": "Northridge Sherwood",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "8999 Balboa Blvd, Northridge, CA 91325, USA",
    "lat": 34.234436,
    "lng": -118.5035292
  },
  {
    "id": "T086",
    "name": "Northridge Corbin",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "8840 Corbin Ave, Northridge, CA 91324, USA",
    "lat": 34.2311562,
    "lng": -118.5602895
  },
  {
    "id": "T087",
    "name": "Oxnard Collection",
    "region": "805.0",
    "regionLabel": "805 (Ventura / Santa Clarita)",
    "address": "2850 N Oxnard Blvd, Oxnard, CA 93036, USA",
    "lat": 34.242298,
    "lng": -119.1769609
  },
  {
    "id": "T088",
    "name": "Irvine Barranca",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "3750 Barranca Pkwy, Irvine, CA 92606, USA",
    "lat": 33.6854022,
    "lng": -117.8133078
  },
  {
    "id": "T089",
    "name": "Irvine Spectrum",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "900 Spectrum Center Dr, Irvine, CA 92618, USA",
    "lat": 33.6478923,
    "lng": -117.7401637
  },
  {
    "id": "T090",
    "name": "Costa Mesa Harbor",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "3030 Harbor Blvd A, Costa Mesa, CA 92626, USA",
    "lat": 33.6826076,
    "lng": -117.917211
  },
  {
    "id": "T091",
    "name": "Costa Mesa 17th",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "289 E 17th St, Costa Mesa, CA 92627, USA",
    "lat": 33.6325132,
    "lng": -117.9167399
  },
  {
    "id": "T092",
    "name": "HB Adams",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "9882 Adams Ave, Huntington Beach, CA 92646, USA",
    "lat": 33.6709621,
    "lng": -117.9557706
  },
  {
    "id": "T093",
    "name": "HB Garfield",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "19041 Beach Blvd, Huntington Beach, CA 92648, USA",
    "lat": 33.6860488,
    "lng": -117.9904405
  },
  {
    "id": "T094",
    "name": "Westminster Mall",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "200 Westminster Mall, Westminster, CA 92683, USA",
    "lat": 33.7461217,
    "lng": -118.0122993
  },
  {
    "id": "T095",
    "name": "Westminster Beach",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "200 Westminster Mall, Westminster, CA 92683, USA",
    "lat": 33.7461217,
    "lng": -118.0122993
  },
  {
    "id": "T096",
    "name": "Garden Grove Harbor",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "12100 Harbor Blvd, Garden Grove, CA 92840, USA",
    "lat": 33.7870416,
    "lng": -117.9133662
  },
  {
    "id": "T097",
    "name": "Cypress",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "6835 Katella Ave, Cypress, CA 90630, USA",
    "lat": 33.8043271,
    "lng": -118.0133024
  },
  {
    "id": "T166",
    "name": "Buena Park",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "7530 Orangethorpe Ave, Buena Park, CA 90621, USA",
    "lat": 33.857376,
    "lng": -118.0014648
  },
  {
    "id": "T098",
    "name": "Brookhurst",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "13831 Brookhurst St, Garden Grove, CA 92843, USA",
    "lat": 33.7619773,
    "lng": -117.9565689
  },
  {
    "id": "T099",
    "name": "Tustin Park Ave",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "2300 Park Ave, Tustin, CA 92782, USA",
    "lat": 33.7001026,
    "lng": -117.8275033
  },
  {
    "id": "T165",
    "name": "Brea",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "855 E Birch St, Brea, CA 92821, USA",
    "lat": 33.9190833,
    "lng": -117.8874728
  },
  {
    "id": "T100",
    "name": "Tustin Marketplace",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "13200 Jamboree Rd, Irvine, CA 92602, USA",
    "lat": 33.7271204,
    "lng": -117.7857126
  },
  {
    "id": "T101",
    "name": "Orange Chapman",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "2620 E Chapman Ave, Orange, CA 92869, USA",
    "lat": 33.78711,
    "lng": -117.8251898
  },
  {
    "id": "T102",
    "name": "Orange N Tustin",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "2191 N Tustin St, Orange, CA 92865, USA",
    "lat": 33.8249397,
    "lng": -117.8345633
  },
  {
    "id": "T103",
    "name": "Anaheim Hills",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "8148 E Santa Ana Canyon Rd, Anaheim, CA 92808, USA",
    "lat": 33.8652921,
    "lng": -117.7470499
  },
  {
    "id": "T104",
    "name": "Anaheim Lincoln",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "2222 E Lincoln Ave, Anaheim, CA 92806, USA",
    "lat": 33.8380269,
    "lng": -117.8861308
  },
  {
    "id": "T105",
    "name": "Anaheim Euclid",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "101 S Euclid St, Anaheim, CA 92802, USA",
    "lat": 33.8312017,
    "lng": -117.9430949
  },
  {
    "id": "T106",
    "name": "Fullerton Yorba Linda",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "17506 Yorba Linda Blvd, Yorba Linda, CA 92886, USA",
    "lat": 33.8874213,
    "lng": -117.8281205
  },
  {
    "id": "T107",
    "name": "Fullerton Orangethorpe",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "200 W Orangethorpe Ave, Fullerton, CA 92832, USA",
    "lat": 33.858495,
    "lng": -117.9274755
  },
  {
    "id": "T108",
    "name": "Fullerton Malvern",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "1893 W Malvern Ave, Fullerton, CA 92833, USA",
    "lat": 33.8798715,
    "lng": -117.9611231
  },
  {
    "id": "T109",
    "name": "La Habra",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "1000 W Imperial Hwy, La Habra, CA 90631, USA",
    "lat": 33.915891,
    "lng": -117.9568616
  },
  {
    "id": "T110",
    "name": "Foothill Portola",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "26762 Portola Pkwy, Lake Forest, CA 92610, USA",
    "lat": 33.6762617,
    "lng": -117.664614
  },
  {
    "id": "T111",
    "name": "La Paz",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "26932 La Paz Rd, Aliso Viejo, CA 92656, USA",
    "lat": 33.5709731,
    "lng": -117.7051543
  },
  {
    "id": "T112",
    "name": "Mission Viejo Jeronimo",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "25601 Jeronimo Rd, Mission Viejo, CA 92691, USA",
    "lat": 33.6233949,
    "lng": -117.6810665
  },
  {
    "id": "T113",
    "name": "Mission Viejo Puerta Real",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "27551 Puerta Real, Mission Viejo, CA 92691, USA",
    "lat": 33.5626419,
    "lng": -117.6718205
  },
  {
    "id": "T114",
    "name": "Mission Viejo Alicia Parkway",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "24500 Alicia Pkwy, Mission Viejo, CA 92691, USA",
    "lat": 33.6062878,
    "lng": -117.6883848
  },
  {
    "id": "T115",
    "name": "San Juan Capistrano",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "31874 Del Obispo St, San Juan Capistrano, CA 92675, USA",
    "lat": 33.4987166,
    "lng": -117.6595623
  },
  {
    "id": "T116",
    "name": "Seal Beach",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "12300 Seal Beach Blvd, Seal Beach, CA 90740, USA",
    "lat": 33.7829443,
    "lng": -118.0694689
  },
  {
    "id": "T117",
    "name": "Yorba Linda Blvd",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "17506 Yorba Linda Blvd, Yorba Linda, CA 92886, USA",
    "lat": 33.8874213,
    "lng": -117.8281205
  },
  {
    "id": "T118",
    "name": "Rancho Santa Margarita",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "30602 Santa Margarita Pkwy, Rancho Santa Margarita, CA 92688, USA",
    "lat": 33.6416651,
    "lng": -117.5976253
  },
  {
    "id": "T119",
    "name": "Santa Ana College",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "1441 W 17th St, Santa Ana, CA 92706, USA",
    "lat": 33.7615323,
    "lng": -117.8874492
  },
  {
    "id": "T120",
    "name": "Santa Ana 17th/Grand",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "1330 17th St, Santa Ana, CA 92705, USA",
    "lat": 33.7590832,
    "lng": -117.8500105
  },
  {
    "id": "T167",
    "name": "Santa Ana 17th/Bristol",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "1330 17th St, Santa Ana, CA 92705, USA",
    "lat": 33.7590832,
    "lng": -117.8500105
  },
  {
    "id": "T121",
    "name": "Eastvale",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "12471 Limonite Ave, Eastvale, CA 91752, USA",
    "lat": 33.9781164,
    "lng": -117.5543044
  },
  {
    "id": "T122",
    "name": "Norco",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "1290 Hamner Ave, Norco, CA 92860, USA",
    "lat": 33.9011217,
    "lng": -117.5648098
  },
  {
    "id": "T123",
    "name": "Jurupa Valley",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "8063 Mission Blvd, Jurupa Valley, CA 92509, USA",
    "lat": 34.0128236,
    "lng": -117.4588358
  },
  {
    "id": "T124",
    "name": "Corona Tuscany",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "2615 Tuscany St, Corona, CA 92881, USA",
    "lat": 33.826636,
    "lng": -117.5162562
  },
  {
    "id": "T125",
    "name": "Moreno Valley East",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "27100 Eucalyptus Ave, Moreno Valley, CA 92555, USA",
    "lat": 33.9376334,
    "lng": -117.189593
  },
  {
    "id": "T126",
    "name": "Tyler Riverside",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "3520 Tyler St, Riverside, CA 92503, USA",
    "lat": 33.9064564,
    "lng": -117.45986
  },
  {
    "id": "T127",
    "name": "Arlington Riverside",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "3333 Arlington Ave, Riverside, CA 92506, USA",
    "lat": 33.9483204,
    "lng": -117.3817686
  },
  {
    "id": "T128",
    "name": "Canyon Springs Riverside",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "2755 Canyon Springs Pkwy, Riverside, CA 92507, USA",
    "lat": 33.9386198,
    "lng": -117.2824587
  },
  {
    "id": "T129",
    "name": "Redlands",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "27320 W Lugonia Ave, Redlands, CA 92374, USA",
    "lat": 34.0722073,
    "lng": -117.2074481
  },
  {
    "id": "T130",
    "name": "Hesperia Main",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "12795 Main St, Hesperia, CA 92345, USA",
    "lat": 34.4246587,
    "lng": -117.3834972
  },
  {
    "id": "T131",
    "name": "Apple Valley Bear Valley",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "19201 Bear Valley Rd, Apple Valley, CA 92308, USA",
    "lat": 34.4688148,
    "lng": -117.2435455
  },
  {
    "id": "T132",
    "name": "Fontana Summit",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "15272 Summit Ave, Fontana, CA 92336, USA",
    "lat": 34.1525134,
    "lng": -117.4723395
  },
  {
    "id": "T133",
    "name": "Fontana Slover",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "16964 Slover Ave, Fontana, CA 92337, USA",
    "lat": 34.0652427,
    "lng": -117.4341659
  },
  {
    "id": "T134",
    "name": "Ontario Mills",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "4200 E 4th St, Ontario, CA 91764, USA",
    "lat": 34.0756168,
    "lng": -117.561722
  },
  {
    "id": "T135",
    "name": "Ontario Baker",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "4200 E 4th St, Ontario, CA 91764, USA",
    "lat": 34.0756168,
    "lng": -117.561722
  },
  {
    "id": "T136",
    "name": "1670 E 4th Ontario",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "1670 E 4th St Ste D, Ontario, CA 91764, USA",
    "lat": 34.0763368,
    "lng": -117.6183634
  },
  {
    "id": "T137",
    "name": "Rancho Cucamonga",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "10576 Foothill Blvd, Rancho Cucamonga, CA 91730, USA",
    "lat": 34.1087625,
    "lng": -117.5742529
  },
  {
    "id": "T138",
    "name": "San Bernardino",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "499 W Orange Show Rd, San Bernardino, CA 92408, USA",
    "lat": 34.0782403,
    "lng": -117.292367
  },
  {
    "id": "T139",
    "name": "Lake Elsinore",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "18287 Collier Ave, Lake Elsinore, CA 92530, USA",
    "lat": 33.6890077,
    "lng": -117.342849
  },
  {
    "id": "T140",
    "name": "Murrieta Cal Oaks",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "41040 California Oaks Rd, Murrieta, CA 92562, USA",
    "lat": 33.5658978,
    "lng": -117.2031201
  },
  {
    "id": "T141",
    "name": "Menifee",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "30340 Haun Rd, Menifee, CA 92584, USA",
    "lat": 33.6803456,
    "lng": -117.172245
  },
  {
    "id": "T142",
    "name": "La Quinta",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "78935 CA-111, La Quinta, CA 92253, USA",
    "lat": 33.7085992,
    "lng": -116.2903152
  },
  {
    "id": "T143",
    "name": "Palm Desert",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "72549 CA-111, Palm Desert, CA 92260, USA",
    "lat": 33.7236804,
    "lng": -116.4033542
  },
  {
    "id": "T144",
    "name": "Cathedral City",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "67750 E Palm Canyon Dr, Cathedral City, CA 92234, USA",
    "lat": 33.7898367,
    "lng": -116.4807209
  },
  {
    "id": "T145",
    "name": "Hemet",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "3527 W Florida Ave, Hemet, CA 92545, USA",
    "lat": 33.7454368,
    "lng": -117.0089716
  },
  {
    "id": "T146",
    "name": "Poway",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "14823 Pomerado Rd, Poway, CA 92064, USA",
    "lat": 32.9805582,
    "lng": -117.0602928
  },
  {
    "id": "T147",
    "name": "Santee",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "9846 Mission Gorge Rd, Santee, CA 92071, USA",
    "lat": 32.8423516,
    "lng": -116.9824828
  },
  {
    "id": "T148",
    "name": "Grossmont",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "5500 Grossmont Center Dr #100, La Mesa, CA 91942, USA",
    "lat": 32.7792775,
    "lng": -117.012769
  },
  {
    "id": "T149",
    "name": "El Camino Oceanside",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "2255 S El Camino Real, Oceanside, CA 92054, USA",
    "lat": 33.1842313,
    "lng": -117.330246
  },
  {
    "id": "T150",
    "name": "Business Park",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "3150 Business Park Dr, Vista, CA 92081, USA",
    "lat": 33.1360345,
    "lng": -117.2288621
  },
  {
    "id": "T151",
    "name": "Sycamore",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "1751 University Dr, Vista, CA 92083, USA",
    "lat": 33.1689109,
    "lng": -117.2146911
  },
  {
    "id": "T152",
    "name": "Escondido Mall",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "1280 Auto Park Way, Escondido, CA 92029, USA",
    "lat": 33.1136227,
    "lng": -117.0994088
  },
  {
    "id": "T153",
    "name": "Mira Mesa",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "8251 Mira Mesa Blvd, San Diego, CA 92126, USA",
    "lat": 32.9102706,
    "lng": -117.1461447
  },
  {
    "id": "T154",
    "name": "Eastlake",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "910 Eastlake Pkwy, Chula Vista, CA 91914, USA",
    "lat": 32.6506934,
    "lng": -116.9683212
  },
  {
    "id": "T155",
    "name": "Carmel Mountain",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "14823 Pomerado Rd, Poway, CA 92064, USA",
    "lat": 32.9805582,
    "lng": -117.0602928
  },
  {
    "id": "T156",
    "name": "Mission Valley",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "1288 Camino Del Rio N, San Diego, CA 92108, USA",
    "lat": 32.7675877,
    "lng": -117.1508519
  },
  {
    "id": "T157",
    "name": "Sports Arena",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "3245 Sports Arena Blvd, San Diego, CA 92110, USA",
    "lat": 32.7511287,
    "lng": -117.210103
  },
  {
    "id": "T158",
    "name": "College Grove",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "3424 College Ave, San Diego, CA 92115, USA",
    "lat": 32.741007,
    "lng": -117.055583
  },
  {
    "id": "T159",
    "name": "Balboa",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "5680 Balboa Ave, San Diego, CA 92111, USA",
    "lat": 32.8221627,
    "lng": -117.1785596
  },
  {
    "id": "T160",
    "name": "Rancho SD",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "2911 Jamacha Rd, El Cajon, CA 92019, USA",
    "lat": 32.7382167,
    "lng": -116.9383274
  },
  {
    "id": "T161",
    "name": "Plaza Bonita",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "3060 Plaza Bonita Rd, National City, CA 91950, USA",
    "lat": 32.6536161,
    "lng": -117.0655931
  },
  {
    "id": "T162",
    "name": "Othello",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "8001 Othello Ave, San Diego, CA 92111, USA",
    "lat": 32.8164642,
    "lng": -117.1510084
  },
  {
    "id": "T163",
    "name": "Lemon Grove",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "3424 College Ave, San Diego, CA 92115, USA",
    "lat": 32.741007,
    "lng": -117.055583
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
  },
  {
    "id": "T172",
    "name": "Burbank Hollywood Way",
    "region": "SFV",
    "regionLabel": "San Fernando Valley",
    "address": "1033 N Hollywood Way, Burbank, CA 91505, USA",
    "lat": 34.168504876729,
    "lng": -118.347357063604
  },
  {
    "id": "T173",
    "name": "Chula Vista",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "1240 Broadway, Chula Vista, CA 91911, USA",
    "lat": 32.605380023465,
    "lng": -117.079516243786
  },
  {
    "id": "T174",
    "name": "La Brea (1302 S)",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "1302 S La Brea Ave, Los Angeles, CA 90019, USA",
    "lat": 34.050001600676,
    "lng": -118.344116610924
  },
  {
    "id": "T175",
    "name": "Redondo Beach Kingsdale",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "1601 Kingsdale Ave, Redondo Beach, CA 90278, USA",
    "lat": 33.869004329743,
    "lng": -118.35637260363
  },
  {
    "id": "T176",
    "name": "Westminster Beach",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "16400 Beach Blvd, Westminster, CA 92683, USA",
    "lat": 33.7254983,
    "lng": -117.9874724
  },
  {
    "id": "T177",
    "name": "San Diego Camino Del Sur",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "17170 Camino Del Sur, San Diego, CA 92127, USA",
    "lat": 33.021726138178,
    "lng": -117.127079934235
  },
  {
    "id": "T178",
    "name": "Apple Valley North Hwy 18",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "20288 US Highway 18, Apple Valley, CA 92307, USA",
    "lat": 34.5275925,
    "lng": -117.2174511
  },
  {
    "id": "T179",
    "name": "Carson Mall",
    "region": "CULVERINGSB",
    "regionLabel": "Culver City / South Bay",
    "address": "20700 S Avalon Blvd, Carson, CA 90746, USA",
    "lat": 33.843688706643,
    "lng": -118.263120487655
  },
  {
    "id": "T180",
    "name": "Murrieta Clinton Keith",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "27818 Clinton Keith Rd, Murrieta, CA 92562, USA",
    "lat": 33.59890643183,
    "lng": -117.176607416521
  },
  {
    "id": "T181",
    "name": "Escondido Via Rancho",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "280 E Via Rancho Pkwy, Escondido, CA 92025, USA",
    "lat": 33.069145971689,
    "lng": -117.068890042327
  },
  {
    "id": "T182",
    "name": "Fullerton Yorba Linda",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "2920 Yorba Linda Blvd, Fullerton, CA 92831, USA",
    "lat": 33.888974100256,
    "lng": -117.876292004122
  },
  {
    "id": "T183",
    "name": "Temecula",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "29676 Rancho California Rd, Temecula, CA 92591, USA",
    "lat": 33.505779691659,
    "lng": -117.144309853649
  },
  {
    "id": "T184",
    "name": "USC Hoover",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "3131 S Hoover St, Los Angeles, CA 90089, USA",
    "lat": 34.026184694506,
    "lng": -118.284034556367
  },
  {
    "id": "T185",
    "name": "Westlake LA",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "330 N Westlake Ave, Los Angeles, CA 90026, USA",
    "lat": 34.068983842008,
    "lng": -118.266920320888
  },
  {
    "id": "T186",
    "name": "Santa Ana Bristol",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "3300 S Bristol St, Santa Ana, CA 92704, USA",
    "lat": 33.703641302656,
    "lng": -117.885710087463
  },
  {
    "id": "T187",
    "name": "Palmdale",
    "region": "SGV/IE",
    "regionLabel": "San Gabriel Valley / Inland Empire",
    "address": "39440 10th St W, Palmdale, CA 93551, USA",
    "lat": 34.599086580383,
    "lng": -118.147550116476
  },
  {
    "id": "T188",
    "name": "La Brea (415 S)",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "415 S La Brea Ave, Los Angeles, CA 90036, USA",
    "lat": 34.066561257667,
    "lng": -118.344089224429
  },
  {
    "id": "T189",
    "name": "Eagle Rock",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "4211 Eagle Rock Blvd, Los Angeles, CA 90065, USA",
    "lat": 34.122328910933,
    "lng": -118.224464588449
  },
  {
    "id": "T190",
    "name": "Irvine Campus Dr",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "4255 Campus Dr, Irvine, CA 92612, USA",
    "lat": 33.648976808083,
    "lng": -117.839176151411
  },
  {
    "id": "T191",
    "name": "Dillon St",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "609 N Dillon St, Los Angeles, CA 90026, USA",
    "lat": 34.078562446521,
    "lng": -118.279102205564
  },
  {
    "id": "T192",
    "name": "Virgil Ave",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "620 S Virgil Ave, Los Angeles, CA 90005, USA",
    "lat": 34.063289001554,
    "lng": -118.28696841965
  },
  {
    "id": "T193",
    "name": "Beverly Blvd",
    "region": "LOSANGELES",
    "regionLabel": "Los Angeles Central",
    "address": "8480 Beverly Blvd, Los Angeles, CA 90048, USA",
    "lat": 34.075983925284,
    "lng": -118.376158432719
  },
  {
    "id": "T194",
    "name": "Spring Valley",
    "region": "SD",
    "regionLabel": "San Diego",
    "address": "935 Sweetwater Rd, Spring Valley, CA 91977, USA",
    "lat": 32.712939941699,
    "lng": -117.01261471307
  },
  {
    "id": "T195",
    "name": "San Clemente",
    "region": "OC",
    "regionLabel": "Orange County",
    "address": "990 Avenida Vista Hermosa, San Clemente, CA 92673, USA",
    "lat": 33.463380374597,
    "lng": -117.605786701398
  }
];
