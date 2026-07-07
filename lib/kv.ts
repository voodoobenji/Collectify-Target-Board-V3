import { kv } from "@vercel/kv";
import { STORES } from "./stores";
import {
  Board,
  BoardEntry,
  EMPTY_ENTRY,
  WeekdayTemplate,
  TemplateEntry,
  EMPTY_TEMPLATE_ENTRY,
  Weekday,
  WEEKDAYS,
} from "./types";

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
      vendorNotes: e.vendorNotes,
      randomNotes: e.randomNotes,
      sourceType: e.sourceType,
      confirmedCount: e.confirmedCount,
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

export async function patchTemplateEntry(
  weekday: string,
  storeId: string,
  patch: Partial<TemplateEntry>
): Promise<WeekdayTemplate> {
  const existing = (await getTemplate(weekday)) ?? {
    weekday,
    updatedAt: null,
    entries: {} as WeekdayTemplate["entries"],
  };
  const current = existing.entries[storeId] ?? { ...EMPTY_TEMPLATE_ENTRY };
  existing.entries[storeId] = {
    ...current,
    ...patch,
    updatedAt: new Date().toISOString(),
  };
  existing.updatedAt = new Date().toISOString();
  await kv.set(templateKey(weekday), existing);
  return existing;
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
      vendorNotes: fromTpl?.vendorNotes ?? prev?.vendorNotes ?? "",
      randomNotes: fromTpl?.randomNotes ?? prev?.randomNotes ?? "",
      sourceType: fromTpl?.sourceType ?? prev?.sourceType ?? null,
      confirmedCount: fromTpl?.confirmedCount ?? prev?.confirmedCount ?? 0,
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
  entries: Record<string, Partial<TemplateEntry>>
): Promise<WeekdayTemplate> {
  const full: WeekdayTemplate["entries"] = {};
  for (const [sid, e] of Object.entries(entries)) {
    full[sid] = { ...EMPTY_TEMPLATE_ENTRY, ...e };
  }
  const tpl: WeekdayTemplate = {
    weekday,
    updatedAt: new Date().toISOString(),
    entries: full,
  };
  await kv.set(templateKey(weekday), tpl);
  return tpl;
}

export async function applyTemplateToBoard(weekday: string, updatedBy: string): Promise<Board> {
  const board = await getBoard();
  const tpl = await getTemplate(weekday);
  if (!tpl) return board;
  for (const [sid, info] of Object.entries(tpl.entries)) {
    const current = board.entries[sid] ?? { ...EMPTY_ENTRY };
    board.entries[sid] = {
      ...current,
      chance: info.chance,
      window: info.window,
      reason: info.reason,
      vendorNotes: info.vendorNotes ?? "",
      randomNotes: info.randomNotes ?? "",
      sourceType: info.sourceType ?? null,
      confirmedCount: info.confirmedCount ?? 0,
      updatedAt: new Date().toISOString(),
      updatedBy,
    };
  }
  board.version += 1;
  await kv.set(BOARD_KEY, board);
  return board;
}

function favoritesKey(discordId: string): string {
  return `favorites:${discordId}`;
}

export async function getFavorites(discordId: string): Promise<string[]> {
  const favs = await kv.get<string[]>(favoritesKey(discordId));
  return favs ?? [];
}

export async function toggleFavorite(discordId: string, storeId: string): Promise<string[]> {
  const favs = await getFavorites(discordId);
  const idx = favs.indexOf(storeId);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.push(storeId);
  }
  await kv.set(favoritesKey(discordId), favs);
  return favs;
}
