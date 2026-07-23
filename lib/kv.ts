import { kv } from "@vercel/kv";
import { STORES } from "./stores";
import {
  Board,
  BoardEntry,
  EMPTY_ENTRY,
  WeekdayTemplate,
  TemplateEntry,
  EMPTY_TEMPLATE_ENTRY,
  StoreReport,
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
      stockLocation: e.stockLocation,
      itemLimit: e.itemLimit,
      multiSeller: e.multiSeller,
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

  const tracked = [
    "chance", "window", "reason", "sourceType", "stockLocation",
    "itemLimit", "multiSeller", "confirmedCount", "status", "flagged",
  ];
  const cur = current as unknown as Record<string, unknown>;
  const pat = patch as unknown as Record<string, unknown>;
  const changes: { field: string; from: unknown; to: unknown }[] = [];
  for (const f of tracked) {
    if (f in pat && JSON.stringify(pat[f]) !== JSON.stringify(cur[f])) {
      changes.push({ field: f, from: cur[f] ?? null, to: pat[f] ?? null });
    }
  }

  board.entries[storeId] = {
    ...current,
    ...patch,
    updatedAt: new Date().toISOString(),
    updatedBy,
  };
  board.version += 1;
  await kv.set(BOARD_KEY, board);

  if (changes.length) {
    const store = STORES.find((s) => s.id === storeId);
    await logChange({
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      storeId,
      storeName: store?.name ?? storeId,
      changes,
      by: updatedBy,
      at: new Date().toISOString(),
    });
  }
  return board;
}

// For server-to-server updates (like the map-reports webhook) that aren't
// tied to an authenticated admin session - doesn't touch updatedBy/updatedAt
// the same way a human edit would, so it's clear in the data where this came
// from if that's ever needed later.
export async function patchEntryRaw(
  storeId: string,
  patch: Partial<BoardEntry>
): Promise<Board> {
  const board = await getBoard();
  const current = board.entries[storeId] ?? { ...EMPTY_ENTRY };
  board.entries[storeId] = {
    ...current,
    ...patch,
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
      stockLocation: fromTpl?.stockLocation ?? prev?.stockLocation ?? null,
      itemLimit: fromTpl?.itemLimit ?? prev?.itemLimit ?? "",
      multiSeller: fromTpl?.multiSeller ?? prev?.multiSeller ?? false,
      confirmedCount: fromTpl?.confirmedCount ?? prev?.confirmedCount ?? 0,
      // Flags are live-board-only (not part of the weekday template) and are
      // explicitly persistent across day rollover until an admin clears them -
      // carry forward from the previous board entry, nothing else has this data.
      flagged: prev?.flagged ?? null,
      status: "pending",
      soldCount: 0,
      lastSoldAt: null,
      lineForming: null,
      // Unlike lineForming (a "right now" signal that means nothing the next
      // day), externalGuide represents an outside system's ongoing write-up -
      // carries forward until that system sends an updated one.
      externalGuide: prev?.externalGuide ?? null,
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
      stockLocation: info.stockLocation ?? null,
      itemLimit: info.itemLimit ?? "",
      multiSeller: info.multiSeller ?? false,
      confirmedCount: info.confirmedCount ?? 0,
      updatedAt: new Date().toISOString(),
      updatedBy,
    };
  }
  board.version += 1;
  await kv.set(BOARD_KEY, board);
  return board;
}

// Member-submitted reports about a store (wrong address, hours, duplicate, etc).
// Deliberately does NOT touch updatedAt/updatedBy so it doesn't affect the
// admin freshness stamp - a report isn't an admin edit of the guide.
export async function addReport(storeId: string, report: StoreReport): Promise<Board> {
  const board = await getBoard();
  const current = board.entries[storeId] ?? { ...EMPTY_ENTRY };
  const reports = [...(current.reports ?? []), report].slice(-30);
  board.entries[storeId] = { ...current, reports };
  board.version += 1;
  await kv.set(BOARD_KEY, board);
  return board;
}

export async function clearReports(storeId: string, reportId?: string): Promise<Board> {
  const board = await getBoard();
  const current = board.entries[storeId] ?? { ...EMPTY_ENTRY };
  const existing = current.reports ?? [];
  const reports = reportId ? existing.filter((r) => r.id !== reportId) : [];
  board.entries[storeId] = { ...current, reports };
  board.version += 1;
  await kv.set(BOARD_KEY, board);
  return board;
}

// One-time sweep: set stock location + item limit on every store, across both
// the live board and all weekday templates (so it survives the daily rollover).
export async function applyStockDefaults(
  stockLocation: BoardEntry["stockLocation"],
  itemLimit: string
): Promise<Board> {
  const board = await getBoard();
  for (const s of STORES) {
    const cur = board.entries[s.id] ?? { ...EMPTY_ENTRY };
    board.entries[s.id] = { ...cur, stockLocation, itemLimit };
  }
  board.version += 1;
  await kv.set(BOARD_KEY, board);

  for (const wd of WEEKDAYS) {
    const tpl = await getTemplate(wd);
    if (!tpl) continue;
    for (const sid of Object.keys(tpl.entries)) {
      tpl.entries[sid] = { ...tpl.entries[sid], stockLocation, itemLimit };
    }
    tpl.updatedAt = new Date().toISOString();
    await kv.set(templateKey(wd), tpl);
  }
  return board;
}

// ---------------------------------------------------------------------------
// Change log: records meaningful admin edits so they can be reviewed / undone.
// ---------------------------------------------------------------------------
export interface ChangeEvent {
  id: string;
  storeId: string;
  storeName: string;
  changes: { field: string; from: unknown; to: unknown }[];
  by: string;
  at: string;
}

export async function logChange(e: ChangeEvent): Promise<void> {
  try {
    await kv.lpush("changes:log", JSON.stringify(e));
    await kv.ltrim("changes:log", 0, 299);
  } catch {
    // never break an edit over logging
  }
}

export async function getChangeLog(limit = 100): Promise<ChangeEvent[]> {
  try {
    const raw = await kv.lrange<string | ChangeEvent>("changes:log", 0, limit - 1);
    return (raw ?? []).map((r) => (typeof r === "string" ? (JSON.parse(r) as ChangeEvent) : r));
  } catch {
    return [];
  }
}

// ---------------------------------------------------------------------------
// Security: auth audit log, active-user presence, and a simple rate limiter.
// ---------------------------------------------------------------------------

export interface SecurityEvent {
  type: "login" | "denied" | "scrape";
  discordId: string;
  username: string;
  isAdmin?: boolean;
  ip?: string;
  detail?: string;
  at: string;
}

export interface PresenceRow {
  discordId: string;
  username: string;
  isAdmin: boolean;
  ip?: string;
  at: string;
}

export async function logSecurityEvent(e: SecurityEvent): Promise<void> {
  try {
    await kv.lpush("security:log", JSON.stringify(e));
    await kv.ltrim("security:log", 0, 999);
  } catch {
    // logging must never break the request it's attached to
  }
}

export async function getSecurityLog(limit = 250): Promise<SecurityEvent[]> {
  try {
    const raw = await kv.lrange<string | SecurityEvent>("security:log", 0, limit - 1);
    return (raw ?? []).map((r) => (typeof r === "string" ? (JSON.parse(r) as SecurityEvent) : r));
  } catch {
    return [];
  }
}

export async function recordPresence(
  discordId: string,
  data: { username: string; isAdmin: boolean; ip?: string }
): Promise<void> {
  try {
    const row: PresenceRow = { discordId, ...data, at: new Date().toISOString() };
    await kv.hset("security:presence", { [discordId]: JSON.stringify(row) });
  } catch {
    // ignore
  }
}

export async function getPresence(): Promise<PresenceRow[]> {
  try {
    const all = await kv.hgetall<Record<string, string | PresenceRow>>("security:presence");
    if (!all) return [];
    return Object.values(all)
      .map((v) => (typeof v === "string" ? (JSON.parse(v) as PresenceRow) : v))
      .sort((a, b) => (b.at > a.at ? 1 : -1));
  } catch {
    return [];
  }
}

// Returns the request count for this user in the current minute. Callers can
// decide what to do once it crosses a threshold (log + throttle).
export async function bumpRate(discordId: string): Promise<number> {
  try {
    const bucket = Math.floor(Date.now() / 60000);
    const key = `rl:${discordId}:${bucket}`;
    const n = await kv.incr(key);
    if (n === 1) await kv.expire(key, 120);
    return n;
  } catch {
    return 0;
  }
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
