// The prediction engine (docs/HOW_PREDICTIONS_WORK.md). Pure functions: drops log + store profiles in,
// one prediction per store out. No storage here; lib/engine.ts reads/writes KV.
//
//   1. Baseline: how often this store had a real drop on this weekday in the imported log (recent weeks weigh
//      more), blended with the frozen June-Sept tally as a weak prior (it over-counts).
//   2. Last week's same weekday ("Mondays follow Mondays"): it's weighted most; a regular that missed is "owed".
//   3. This week so far: a real drop the day before -> lighter (unless near-daily); already went this week ->
//      lighter; only light stock / nothing yet late in the week -> owed.
//   4. Day locks (engine §10) override everything.
import type { Chance } from "./types";
import type { DropRecord } from "./drops";
import { STORES } from "./stores";
import { NEAR_DAILY, STORE_PROFILES, type Wd } from "./store-profiles";

export const WD: Wd[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DAY_NAME: Record<Wd, string> = { Mon: "Monday", Tue: "Tuesday", Wed: "Wednesday", Thu: "Thursday", Fri: "Friday", Sat: "Saturday", Sun: "Sunday" };

export interface Prediction {
  storeId: string;
  chance: Chance;
  window: string;
  reason: string; // general, per-weekday note
  weekNote: string; // "this week" line, only when something shifted ("" otherwise)
  basis: string; // admin-only: why
  score: number;
}

// ---- day locks (engine §10, owner notes) ----
interface DayRule { days: Wd[]; soft?: boolean; cap?: number; label: string }
const SFV_MIDWEEK = new Set(["T062", "T076", "T061", "T084", "T068", "T079", "T078", "T087", "T071", "T063"]);
const DAY_RULES: Record<string, DayRule> = {
  T100: { days: ["Wed"], label: "Wednesday morning store (heads camp the night before)" },
  T036: { days: ["Wed", "Fri"], label: "Wednesday and Friday store" },
  T088: { days: ["Fri"], label: "Friday store, goes every Friday" },
  T108: { days: ["Mon"], cap: 0.4, label: "Monday store, erratic lately" },
  T012: { days: ["Fri", "Wed"], soft: true, cap: 0.2, label: "leans Friday, can go at open on Wednesdays" },
  T140: { days: ["Tue", "Thu"], label: "Tuesday/Thursday store, random lately" },
  T079: { days: ["Tue"], label: "Tuesday morning opener" },
  T078: { days: ["Tue"], label: "Tuesday store" },
  T087: { days: ["Wed", "Fri"], label: "Wednesday morning opener, also a Friday store" },
  T190: { days: ["Mon"], soft: true, cap: 0.15, label: "Monday store" },
  T184: { days: ["Mon"], soft: true, cap: 0.15, label: "Monday store" },
};
function dayRule(storeId: string): DayRule | null {
  if (DAY_RULES[storeId]) return DAY_RULES[storeId];
  const p = STORE_PROFILES[storeId];
  if (p?.fridayOnly) return { days: ["Fri"], label: "Friday store" };
  if (p?.region === "SFV" && !SFV_MIDWEEK.has(storeId)) return { days: ["Fri"], label: "Valley store that holds its real drop for Friday" };
  return null;
}

// ---- dates (all LA calendar dates as YYYY-MM-DD) ----
export function addDays(date: string, n: number): string {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
export const wdOf = (date: string): Wd => WD[new Date(`${date}T12:00:00Z`).getUTCDay()];
const mondayOf = (date: string) => addDays(date, -((new Date(`${date}T12:00:00Z`).getUTCDay() + 6) % 7));

// ---- windows ----
const fmtHour = (mins: number) => {
  const h = Math.floor(mins / 60) % 24;
  const ap = h >= 12 ? "PM" : "AM";
  return `${h % 12 === 0 ? 12 : h % 12}${ap}`;
};
const toMins = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return (h || 0) * 60 + (m || 0);
};
function openLabel(storeId: string): string {
  const t = STORE_PROFILES[storeId]?.openTime;
  return t ? `Opening (${t})` : "Opening";
}
function profileWindow(storeId: string): string {
  const w = STORE_PROFILES[storeId]?.window ?? "";
  if (/^AM/i.test(w) || /^AM$/i.test(w)) return openLabel(storeId);
  if (/LateAM/i.test(w)) return "9AM-12PM";
  if (/PM\(12-4\)/i.test(w)) return "12PM-4PM";
  if (/Eve/i.test(w)) return "4PM-9PM";
  return "";
}
function windowFromTimes(storeId: string, times: string[]): string {
  const sorted = times.map(toMins).sort((a, b) => a - b);
  const med = sorted[Math.floor(sorted.length / 2)];
  if (med < 9 * 60) return openLabel(storeId); // engine §5: openings get no time range
  const start = Math.max(9 * 60, Math.floor((med - 60) / 60) * 60);
  return `${fmtHour(start)}-${fmtHour(start + 180)}`;
}

// ---- wording (engine §5: no product names, hedged, openings "open", no today/yesterday, never discouraging) ----
function hash(s: string): number {
  let h = 0;
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}
const pick = (arr: string[], key: string) => arr[hash(key) % arr.length];
function reasonText(storeId: string, wd: Wd, chance: Chance, window: string, nearDaily: boolean): string {
  const day = DAY_NAME[wd];
  const open = /opening/i.test(window);
  const when = open ? "at open" : window ? `around ${window}` : "through the day";
  const key = `${storeId}${wd}`;
  if (chance === "High") {
    if (nearDaily) return pick([`Drops most days, ${day} included. Usually goes ${when}.`, `Near-daily store, a good bet on ${day}s ${when}.`], key);
    return open
      ? pick([`A strong ${day} opener, be there before open.`, `Goes at open most ${day}s, line can form early.`, `Solid ${day} store, plan on being there before open.`], key)
      : pick([`Solid ${day} store, usually goes ${when}.`, `Tends to drop ${when} on ${day}s.`, `One of the better ${day} stops, leans ${when}.`], key);
  }
  if (chance === "Medium")
    return pick([`Can go on ${day}s, worth a check ${when}.`, `Hit or miss on ${day}s, leans ${when}.`, `Decent ${day} odds, check ${when} if you're close.`], key);
  if (chance === "Low")
    return pick([`Lighter ${day} odds, a quick look ${when} if you're nearby.`, `Not a usual ${day} store, can still surprise ${when}.`], key);
  return "";
}

export interface PredictInput {
  targetDate: string; // the date the prediction is for
  drops: DropRecord[]; // log rows before targetDate (any kinds), last ~6 weeks
  coveredDates: Set<string>; // dates that were imported (a date with no import is unknown, not "no drop")
}

export function predictAll({ targetDate, drops, coveredDates }: PredictInput): Prediction[] {
  const wd = wdOf(targetDate);
  const lookbackStart = addDays(targetDate, -42);
  const byStore = new Map<string, DropRecord[]>();
  for (const d of drops) {
    if (d.date >= targetDate || d.date < lookbackStart) continue;
    (byStore.get(d.storeId) ?? byStore.set(d.storeId, []).get(d.storeId)!).push(d);
  }
  // Same weekday dates we actually have data for, most recent first (up to 6).
  const sameDays: string[] = [];
  for (let i = 1; i <= 6; i++) {
    const d = addDays(targetDate, -7 * i);
    if (coveredDates.has(d)) sameDays.push(d);
  }
  const weekStart = mondayOf(targetDate);
  const coveredWeeks = Math.max(1, Math.round([...coveredDates].filter((d) => d >= lookbackStart && d < targetDate).length / 5));
  const lastWeek = addDays(targetDate, -7);
  const dayBefore = addDays(targetDate, -1);

  return STORES.map((s) => {
    const id = s.id;
    const p = STORE_PROFILES[id];
    const rows = byStore.get(id) ?? [];
    const real = rows.filter((r) => r.kind === "drop");
    const realDates = new Set(real.map((r) => r.date));
    const nearDaily = NEAR_DAILY.has(id);
    const why: string[] = [];

    // 1. baseline
    const weights = [2, 2, 1.5, 1, 1, 1];
    let num = 0;
    let den = 0;
    sameDays.forEach((d, i) => {
      den += weights[i];
      if (realDates.has(d)) num += weights[i];
    });
    const tally = p?.weekdayHits?.[wd] ?? 0;
    const prior = Math.min(0.7, tally / 10);
    // Few imported weeks = lean on the old tally more, so one lucky day doesn't make a store High.
    const k = sameDays.length >= 4 ? 1 : sameDays.length >= 2 ? 1.5 : 2.5;
    let score = den + k > 0 ? (num + k * prior) / (den + k) : prior;
    if (!sameDays.length) score = prior * 0.8;
    const hitsSame = sameDays.filter((d) => realDates.has(d)).length;
    why.push(sameDays.length ? `${hitsSame}/${sameDays.length} recent ${wd}s` : `no ${wd} imports yet`);
    if (tally) why.push(`old tally ${tally}`);

    // 2. last week's same weekday
    let weekNote = "";
    const regular = prior >= 0.4 || (sameDays.length >= 2 && hitsSame / sameDays.length >= 0.5);
    if (coveredDates.has(lastWeek)) {
      if (realDates.has(lastWeek)) why.push(`dropped last ${wd}`);
      else if (regular) {
        score += 0.08;
        weekNote = `Owed: missed its usual ${DAY_NAME[wd]} last week.`;
        why.push(`missed last ${wd} (owed)`);
      }
    }

    const rule = dayRule(id);
    // 3. this week so far
    const perWeek = real.length / coveredWeeks;
    const thisWeek = rows.filter((r) => r.date >= weekStart && r.date < targetDate);
    const realThisWeek = thisWeek.filter((r) => r.kind === "drop");
    if (!nearDaily && realDates.has(dayBefore)) {
      score *= 0.55;
      weekNote = "Lighter: had a real drop the day before.";
      why.push("dropped the day before");
    } else if (!nearDaily && realThisWeek.length && perWeek <= 1.3) {
      score *= 0.75;
      weekNote = "Already went earlier this week, may be lighter.";
      why.push(`went ${realThisWeek.map((r) => wdOf(r.date)).join("/")} this week`);
    } else if (!realThisWeek.length && thisWeek.some((r) => r.kind === "light") && perWeek >= 0.7) {
      score += 0.05;
      weekNote = "Owed: only light stock so far this week.";
      why.push("only light stock this week (owed)");
    } else if (!rule && !realThisWeek.length && (wd === "Thu" || wd === "Fri") && perWeek >= 0.8 && coveredDates.has(weekStart)) {
      score += 0.05;
      weekNote ||= "Owed: no real drop yet this week.";
      why.push("nothing yet this week (owed)");
    }
    if (perWeek) why.push(`${perWeek.toFixed(1)} drops/wk`);

    // 4. day locks
    if (rule && !rule.days.includes(wd)) {
      if (!rule.soft) {
        const label = rule.label.charAt(0).toUpperCase() + rule.label.slice(1);
        return { storeId: id, chance: null, window: "", reason: `${label}.`, weekNote: "", basis: [...why, `day lock: ${rule.days.join("/")}`].join(" · "), score: 0 };
      }
      score = Math.min(score, rule.cap ?? 0.15);
      why.push(`soft lock ${rule.days.join("/")}`);
    } else if (rule?.cap && rule.days.includes(wd) && !rule.soft) {
      score = Math.min(score, rule.cap);
    }
    score = Math.max(0, Math.min(1, score));

    const chance: Chance = score >= 0.5 ? "High" : score >= 0.28 ? "Medium" : score >= 0.12 ? "Low" : null;
    // window: this weekday's real drop times, else any day's, else the engine's cadence window
    const sameTimes = real.filter((r) => wdOf(r.date) === wd).map((r) => r.time);
    const window = chance
      ? sameTimes.length >= 1
        ? windowFromTimes(id, sameTimes)
        : real.length >= 2
          ? windowFromTimes(id, real.map((r) => r.time))
          : profileWindow(id)
      : "";
    return {
      storeId: id,
      chance,
      window,
      reason: reasonText(id, wd, chance, window, nearDaily),
      weekNote: chance ? weekNote : "",
      basis: `${why.join(" · ")} · score ${score.toFixed(2)}`,
      score,
    };
  });
}
