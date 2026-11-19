export type Chance = "High" | "Medium" | "Low" | null;
export type Status = "pending" | "hit" | "no_hit";

// Outcome logging: what actually happened at a store on a given day. This is the
// historical record that sharpens predictions over time (Discord handles the
// live feed; the board is the memory). "hit" = it dropped, "no_drop" = checked,
// nothing came.
export type Outcome = "hit" | "no_drop";

export interface OutcomeRecord {
  date: string; // LA date string (YYYY-MM-DD)
  weekday: string;
  result: Outcome;
  by: string;
}

// A store's track record for one weekday, computed from its outcome log.
export interface TrackRecord {
  weekday: string;
  hits: number;
  total: number;
  recent: Outcome[]; // most-recent-first, up to 8
  last: { date: string; result: Outcome } | null;
  suggestedChance: Chance; // null when there isn't enough data to suggest
}
export type SourceType = "vendor" | "employee_push" | "both" | null;
export type StockLocation = "tcg_section" | "guest_services" | "both" | null;

export interface LineFormingInfo {
  reportedAt: string;
  storeUrl: string | null;
}

export interface ExternalGuideInfo {
  text: string;
  updatedAt: string;
  source: string;
  storeUrl: string | null;
}

export interface FlaggedInfo {
  reason: string;
  flaggedBy: string;
  flaggedAt: string;
}

export type ReportCategory = "address" | "hours" | "duplicate" | "other";

export interface StoreReport {
  id: string;
  category: ReportCategory;
  note: string;
  reportedBy: string;
  reportedAt: string;
}

export interface BoardEntry {
  chance: Chance;
  window: string;
  reason: string;
  vendorNotes: string;
  randomNotes: string;
  sourceType: SourceType;
  stockLocation: StockLocation;
  itemLimit: string;
  multiSeller: boolean;
  confirmedCount: number;
  flagged: FlaggedInfo | null;
  status: Status;
  soldCount: number;
  lastSoldAt: string | null;
  lineForming: LineFormingInfo | null;
  externalGuide: ExternalGuideInfo | null;
  reports: StoreReport[];
  updatedAt: string | null;
  updatedBy: string | null;
  // Prediction engine (lib/engine.ts). weekNote = "this week" line; basis = admin-only why; pinned = an admin set
  // chance/window by hand, so the engine leaves this card alone; engineAt = last time the engine wrote it.
  weekNote?: string;
  basis?: string;
  pinned?: boolean;
  engineAt?: string | null;
}

export interface Board {
  date: string;
  version: number;
  entries: Record<string, BoardEntry>;
}

export const EMPTY_ENTRY: BoardEntry = {
  chance: null,
  window: "",
  reason: "",
  vendorNotes: "",
  randomNotes: "",
  sourceType: null,
  stockLocation: null,
  itemLimit: "",
  multiSeller: false,
  confirmedCount: 0,
  flagged: null,
  status: "pending",
  soldCount: 0,
  lastSoldAt: null,
  lineForming: null,
  externalGuide: null,
  reports: [],
  updatedAt: null,
  updatedBy: null,
};

export const WEEKDAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;
export type Weekday = (typeof WEEKDAYS)[number];

export interface TemplateEntry {
  chance: Chance;
  window: string;
  reason: string;
  vendorNotes: string;
  randomNotes: string;
  sourceType: SourceType;
  stockLocation: StockLocation;
  itemLimit: string;
  multiSeller: boolean;
  confirmedCount: number;
  updatedAt: string | null;
  // Prediction engine (lib/engine.ts). weekNote = "this week" line; basis = admin-only why; pinned = an admin set
  // chance/window by hand, so the engine leaves this card alone; engineAt = last time the engine wrote it.
  weekNote?: string;
  basis?: string;
  pinned?: boolean;
  engineAt?: string | null;
}

export const EMPTY_TEMPLATE_ENTRY: TemplateEntry = {
  chance: null,
  window: "",
  reason: "",
  vendorNotes: "",
  randomNotes: "",
  sourceType: null,
  stockLocation: null,
  itemLimit: "",
  multiSeller: false,
  confirmedCount: 0,
  updatedAt: null,
};

export interface WeekdayTemplate {
  weekday: string;
  updatedAt: string | null;
  entries: Record<string, TemplateEntry>;
}
