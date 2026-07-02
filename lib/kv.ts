import { kv } from "@vercel/kv";
import { STORES } from "./stores";
import { Board, BoardEntry, EMPTY_ENTRY, WeekdayTemplate, Weekday, WEEKDAYS } from "./types";

const BOARD_KEY = "board";

function todayStr(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });
}

function weekdayName(date: Date): string {
  return date
    .toLocaleDateString("en-US", { weekday: "long", timeZone: "America/Los_Angeles" })
    .toLowerCase();
}

function templateKey(weekday: string): string {
  return `template:${weekday}`;
}

function freshEntries(): Record<string, BoardEntry> {
  const entries: Record<string, BoardEntry> = {};
  for (const s of STORES) {
    entries[s.id] = { ...EMPTY_ENTRY };
  }
  return entries;
}

export async function getBoard(): Promise<Board> {
  const existing = await kv.get<Board>(BOARD_KEY);
  if (existing) {
    let changed = false;
    for (const s of STORES) {
      if (!existing.entries[s.id]) {
        existing.entries[s.id] = { ...EMPTY_ENTRY };
        changed = true;
      }
    }
    if (changed) await kv.set(BOARD_KEY, existing);
    return existing;
  }
  const fresh: Board = { date: todayStr(), version: 1, entries: freshEntries() };
  await kv.set(BOARD_KEY, fresh);
  return fresh;
}

export async function getTemplate(weekday: string): Promise<WeekdayTemplate | null> {
  const tpl = await kv.get<WeekdayTemplate>(templateKey(weekday));
  return tpl ?? null;
}

async function saveTemplateFromBoard(board: Board): Promise<void> {
  const weekday = weekdayName(new Date(`${board.date}T12:00:00`));
  if (!WEEKDAYS.includes(weekday as Weekday)) return;

  const entries: WeekdayTemplate["entries"] = {};
  for (const [storeId, e] of Object.entries(board.entries)) {
    entries[storeId] = {
      chance: e.chance,
      window: e.window,
      reason: e.reason,
      updatedAt: e.updatedAt,
    };
  }
  const tpl: WeekdayTemplate = {
    weekday,
    updatedAt: new Date().toISOString(),
    entries,
  };
  await kv.set(templateKey(weekday), tpl);
}

export async function patchEntry(
  storeId: string,
  patch: Partial<BoardEntry>,
  updatedBy: string
): Promise<Board> {
  const board = await getBoard();
  const current = board.entries[storeId] ?? { ...EMPTY_ENTRY };
  board.entries[storeId] = {
    ...current,
    ...patch,
    updatedAt: new Date().toISOString(),
    updatedBy,
  };
  board.version += 1;
  await kv.set(BOARD_KEY, board);
  return board;
}

export async function startNewDay(updatedBy: string): Promise<Board> {
  const board = await getBoard();
  await kv.set(`history:${board.date}`, board);
  await saveTemplateFromBoard(board);

  const today = todayStr();
  const newWeekday = weekdayName(new Date());
  const tpl = WEEKDAYS.includes(newWeekday as Weekday) ? await getTemplate(newWeekday) : null;

  const carried: Record<string, BoardEntry> = {};
  for (const s of STORES) {
    const fromTpl = tpl?.entries[s.id];
    const prev = board.entries[s.id];
    carried[s.id] = {
      chance: fromTpl?.chance ?? prev?.chance ?? null,
      window: fromTpl?.window ?? prev?.window ?? "",
      reason: fromTpl?.reason ?? prev?.reason ?? "",
      status: "pending",
      updatedAt: new Date().toISOString(),
      updatedBy,
    };
  }

  const fresh: Board = {
    date: today,
    version: board.version + 1,
    entries: carried,
  };
  await kv.set(BOARD_KEY, fresh);
  return fresh;
}

export async function importTemplate(
  weekday: string,
  entries: Record<string, { chance: string | null; window: string; reason: string }>
): Promise<WeekdayTemplate> {
  const tpl: WeekdayTemplate = {
    weekday,
    updatedAt: new Date().toISOString(),
    entries: entries as WeekdayTemplate["entries"],
  };
  await kv.set(templateKey(weekday), tpl);
  return tpl;
}
