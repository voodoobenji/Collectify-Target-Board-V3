// SERVER-ONLY. Do not import this file from any "use client" component -
// doing so would bundle vendor identities into client-side JS for every visitor.
// Only app/page.tsx (a server component) should import this, and only pass
// the resulting data down to admins.
export interface VendorInfo {
  vendorId: string | null;
  vendorNickname: string | null;
}

export const VENDOR_MAP: Record<string, VendorInfo> = {
  "T001": {
    "vendorId": "V001",
    "vendorNickname": "GALE"
  },
  "T002": {
    "vendorId": "V002",
    "vendorNickname": "MARIA"
  },
  "T003": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T004": {
    "vendorId": "V001",
    "vendorNickname": "GALE"
  },
  "T005": {
    "vendorId": "V001",
    "vendorNickname": "GALE"
  },
  "T006": {
    "vendorId": "V002",
    "vendorNickname": "MARIA"
  },
  "T007": {
    "vendorId": "V002",
    "vendorNickname": "MARIA"
  },
  "T008": {
    "vendorId": "V002",
    "vendorNickname": "MARIA"
  },
  "T009": {
    "vendorId": "V001",
    "vendorNickname": "GALE"
  },
  "T010": {
    "vendorId": "V004",
    "vendorNickname": "Whittier/Diamond/Brea"
  },
  "T011": {
    "vendorId": "V002",
    "vendorNickname": "MARIA"
  },
  "T012": {
    "vendorId": "V002",
    "vendorNickname": "MARIA"
  },
  "T013": {
    "vendorId": "V001",
    "vendorNickname": "GALE"
  },
  "T014": {
    "vendorId": "V003",
    "vendorNickname": "CHRISTINE"
  },
  "T015": {
    "vendorId": "V001",
    "vendorNickname": "GALE"
  },
  "T016": {
    "vendorId": "V003",
    "vendorNickname": "CHRISTINE"
  },
  "T017": {
    "vendorId": "V001",
    "vendorNickname": "GALE"
  },
  "T018": {
    "vendorId": "V002",
    "vendorNickname": "MARIA"
  },
  "T019": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T020": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T021": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T022": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T023": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T024": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T025": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T026": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T027": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T028": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T029": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T030": {
    "vendorId": "V006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield"
  },
  "T031": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T032": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T033": {
    "vendorId": "V009",
    "vendorNickname": "Carson/Seal/Signal"
  },
  "T034": {
    "vendorId": "V009",
    "vendorNickname": "Carson/Seal/Signal"
  },
  "T035": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T036": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T037": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T038": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T039": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T040": {
    "vendorId": "V003",
    "vendorNickname": "CHRISTINE"
  },
  "T041": {
    "vendorId": "V003",
    "vendorNickname": "CHRISTINE"
  },
  "T042": {
    "vendorId": "V004",
    "vendorNickname": "Whittier/Diamond/Brea"
  },
  "T043": {
    "vendorId": "V006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield"
  },
  "T044": {
    "vendorId": "V006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield"
  },
  "T045": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T046": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T047": {
    "vendorId": "V009",
    "vendorNickname": "Carson/Seal/Signal"
  },
  "T048": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T049": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T050": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T051": {
    "vendorId": "v006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield"
  },
  "T164": {
    "vendorId": "V001",
    "vendorNickname": "GALE"
  },
  "T052": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T053": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T054": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T055": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T056": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T057": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T058": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T059": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T060": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T061": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T062": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T063": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T064": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T065": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T066": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T067": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T068": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T069": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T070": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T071": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T072": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T073": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T074": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T075": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T076": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T077": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T078": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T079": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T080": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T081": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T082": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T083": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T084": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T085": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T086": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T087": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T088": {
    "vendorId": "V007",
    "vendorNickname": "Michelle"
  },
  "T089": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T090": {
    "vendorId": "V007",
    "vendorNickname": "Michelle"
  },
  "T091": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T092": {
    "vendorId": "V007",
    "vendorNickname": "Michelle"
  },
  "T093": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T094": {
    "vendorId": "V007",
    "vendorNickname": "Michelle"
  },
  "T095": {
    "vendorId": "V007",
    "vendorNickname": "Michelle"
  },
  "T096": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T097": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T166": {
    "vendorId": "V006",
    "vendorNickname": "Lakewood/Bellflower/Bloomfield"
  },
  "T098": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T099": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T165": {
    "vendorId": "V004",
    "vendorNickname": "Whittier/Diamond/Brea"
  },
  "T100": {
    "vendorId": "V007",
    "vendorNickname": "Michelle"
  },
  "T101": {
    "vendorId": "V007",
    "vendorNickname": "Michelle"
  },
  "T102": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T103": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T104": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T105": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T106": {
    "vendorId": "V008",
    "vendorNickname": "Blond Girl"
  },
  "T107": {
    "vendorId": "V005",
    "vendorNickname": "Sang"
  },
  "T108": {
    "vendorId": "V005",
    "vendorNickname": "Sang"
  },
  "T109": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T110": {
    "vendorId": "V007",
    "vendorNickname": "Michelle"
  },
  "T111": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T112": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T113": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T114": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T115": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T116": {
    "vendorId": "V009",
    "vendorNickname": "Carson/Seal/Signal"
  },
  "T117": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T118": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T119": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T120": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T167": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T121": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T122": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T123": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T124": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T125": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T126": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T127": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T128": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T129": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T130": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T131": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T132": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T133": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T134": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T135": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T136": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T137": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T138": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T139": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T140": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T141": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T142": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T143": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T144": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T145": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T146": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T147": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T148": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T149": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T150": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T151": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T152": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T153": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T154": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T155": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T156": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T157": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T158": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T159": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T160": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T161": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T162": {
    "vendorId": null,
    "vendorNickname": null
  },
  "T163": {
    "vendorId": null,
    "vendorNickname": null
  }
};
