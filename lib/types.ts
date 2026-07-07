export type Chance = "High" | "Medium" | "Low" | null;
export type Status = "pending" | "hit" | "no_hit";
export type SourceType = "vendor" | "employee_push" | "both" | null;

export interface FlaggedInfo {
  reason: string;
  flaggedBy: string;
  flaggedAt: string;
}

export interface BoardEntry {
  chance: Chance;
  window: string;
  reason: string;
  vendorNotes: string;
  randomNotes: string;
  sourceType: SourceType;
  confirmedCount: number;
  flagged: FlaggedInfo | null;
  status: Status;
  updatedAt: string | null;
  updatedBy: string | null;
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
  confirmedCount: 0,
  flagged: null,
  status: "pending",
  updatedAt: null,
  updatedBy: null,
};

export const WEEKDAYS = ["monday", "tuesday", "wednesday", "thursday", "friday"] as const;
export type Weekday = (typeof WEEKDAYS)[number];

export interface TemplateEntry {
  chance: Chance;
  window: string;
  reason: string;
  vendorNotes: string;
  randomNotes: string;
  sourceType: SourceType;
  confirmedCount: number;
  updatedAt: string | null;
}

export const EMPTY_TEMPLATE_ENTRY: TemplateEntry = {
  chance: null,
  window: "",
  reason: "",
  vendorNotes: "",
  randomNotes: "",
  sourceType: null,
  confirmedCount: 0,
  updatedAt: null,
};

export interface WeekdayTemplate {
  weekday: string;
  updatedAt: string | null;
  entries: Record<string, TemplateEntry>;
}
