// Runs the prediction engine (lib/predict.ts) and writes the results onto the board:
//   - today's live board, and the 7 weekday templates (each predicted for its next date, so upcoming days
//     this week carry this week's context)
//   - skips cards an admin pinned (they set chance/window by hand)
//   - logs every run (engine:log) and refreshes the compact per-store drop history (engine:recent)
// Triggered after a drops import is saved, after the nightly rollover, and by the admin "Rebuild" button.
// KV cost per run: ~1 read per imported day in the last 14 weeks + 8 reads/writes for board + templates.
import {
  getBoard,
  getDropDays,
  getDropsForDay,
  getTemplate,
  logEngineRun,
  saveBoard,
  saveRecentDrops,
  saveTemplate,
  type EngineLogEntry,
  type RecentDrop,
} from "./kv";
import { predictAll, addDays, type Prediction } from "./predict";
import { STORES } from "./stores";
import { EMPTY_TEMPLATE_ENTRY, WEEKDAYS, type BoardEntry, type TemplateEntry, type WeekdayTemplate } from "./types";
import type { DropRecord } from "./drops";
import { cleanGuideNote } from "./cleanNote";

const todayLA = () => new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });
const weekdayOf = (date: string) => WEEKDAYS[(new Date(`${date}T12:00:00Z`).getUTCDay() + 6) % 7];

// The engine owns `reason`. On its first write to a card, any lasting tip in the old reason is moved to the
// admin notes; dated / history / product text is dropped (cleanGuideNote). Notes are kept clean on every run.
function applyPrediction<T extends TemplateEntry | BoardEntry>(e: T, p: Prediction, now: string): T {
  const next = { ...e };
  const oldTip = !e.engineAt ? cleanGuideNote(e.reason ?? "") : "";
  next.vendorNotes = cleanGuideNote(e.vendorNotes ?? "");
  next.randomNotes = [cleanGuideNote(e.randomNotes ?? ""), oldTip].filter(Boolean).join("\n\n");
  next.chance = p.chance;
  next.window = p.window;
  next.reason = p.reason;
  next.weekNote = p.weekNote;
  next.basis = p.basis;
  next.engineAt = now;
  return next;
}

export async function rebuildPredictions(trigger: string, by: string): Promise<EngineLogEntry> {
  const today = todayLA();
  const since = addDays(today, -98); // predict.ts looks back 13 weeks
  const days = (await getDropDays()).filter((d) => d >= since && d <= today);
  const drops: DropRecord[] = (await Promise.all(days.map((d) => getDropsForDay(d)))).flat();
  const covered = new Set(days);
  const now = new Date().toISOString();
  const pinnedIds = new Set<string>();

  // Today -> live board
  const board = await getBoard();
  const todayPreds = predictAll({ targetDate: today, drops, coveredDates: covered });
  const samples: EngineLogEntry["samples"] = [];
  let changedToday = 0;
  for (const p of todayPreds) {
    const cur = board.entries[p.storeId];
    if (!cur) continue;
    if (cur.pinned) {
      pinnedIds.add(p.storeId);
      continue;
    }
    if (cur.chance !== p.chance) {
      changedToday++;
      if (samples.length < 15)
        samples.push({ store: STORES.find((s) => s.id === p.storeId)?.name ?? p.storeId, from: cur.chance, to: p.chance, note: p.weekNote || p.basis });
    }
    board.entries[p.storeId] = applyPrediction(cur, p, now);
  }
  board.version += 1;
  await saveBoard(board);

  // Each weekday template -> predicted for its next date (today counts as today's weekday)
  for (let i = 0; i < 7; i++) {
    const date = addDays(today, i);
    const weekday = weekdayOf(date);
    const preds = i === 0 ? todayPreds : predictAll({ targetDate: date, drops, coveredDates: covered });
    const tpl: WeekdayTemplate = (await getTemplate(weekday)) ?? { weekday, updatedAt: null, entries: {} };
    for (const p of preds) {
      const cur = tpl.entries[p.storeId] ?? { ...EMPTY_TEMPLATE_ENTRY };
      if (cur.pinned) {
        pinnedIds.add(p.storeId);
        continue;
      }
      tpl.entries[p.storeId] = applyPrediction(cur, p, now);
    }
    tpl.updatedAt = now;
    await saveTemplate(tpl);
  }

  // Compact history for the week view (drops + light + dry, last 7 weeks)
  const recent: Record<string, RecentDrop[]> = {};
  for (const d of drops) (recent[d.storeId] ??= []).push({ d: d.date, t: d.time, k: d.kind });
  for (const list of Object.values(recent)) list.sort((a, b) => (b.d + b.t).localeCompare(a.d + a.t));
  await saveRecentDrops(recent);

  const count = (c: string) => todayPreds.filter((p) => p.chance === c && !board.entries[p.storeId]?.pinned).length;
  const entry: EngineLogEntry = {
    at: now,
    trigger,
    by,
    daysUsed: days.length,
    firstDay: days[0] ?? null,
    lastDay: days[days.length - 1] ?? null,
    today: { high: count("High"), medium: count("Medium"), low: count("Low") },
    changedToday,
    pinned: pinnedIds.size,
    samples,
  };
  await logEngineRun(entry);
  console.log("[engine] rebuild", JSON.stringify({ trigger, by, daysUsed: entry.daysUsed, today: entry.today, changedToday, pinned: entry.pinned }));
  return entry;
}
