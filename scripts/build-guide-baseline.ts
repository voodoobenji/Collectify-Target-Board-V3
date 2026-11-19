// Builds lib/guide-baseline.ts from the owner's posted guides (Discord #target export).
// Usage: npx tsx scripts/build-guide-baseline.ts <guides.json>
// guides.json = [{ kind: "daily"|"weekend"|"hitlist", dates: ["YYYY-MM-DD"], lines: [[store, note], ...] }]
// (extracted from the export HTML: each "Target Guide – MM/DD (Part N)" / weekend guide, one entry per post).
//
// Per store and weekday it records how often the store was in that weekday's guide and how strongly it was called,
// the usual window the guides gave, and lasting habits mentioned across all guides (guest services, waves, lines...).
import fs from "fs";
import { resolveStoreName, normName } from "../lib/drops";
import { STORES } from "../lib/stores";

type Wd = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";
const WD: Wd[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const wdOf = (d: string) => WD[new Date(`${d}T12:00:00Z`).getUTCDay()];

interface Guide { kind: string; dates: string[]; lines: [string, string][] }
const guides: Guide[] = JSON.parse(fs.readFileSync(process.argv[2], "utf8")).filter((g: Guide) => g.kind === "daily" || g.kind === "weekend");

// "Norwalk Firestone and Imperial", "Simi Cochran / Madera", "Inglewood Century / La Brea" -> each store
function resolveMany(name: string): string[] {
  const direct = resolveStoreName(name);
  if (direct) return [direct];
  const parts = name.split(/\s*\/\s*|\s+and\s+|\s*&\s*/i).map((p) => p.trim()).filter(Boolean);
  if (parts.length < 2) return [];
  const words = parts[0].split(/\s+/);
  const ids: string[] = [];
  for (const [i, p] of parts.entries()) {
    const tries = i === 0 ? [p] : [p, `${words[0]} ${p}`, `${words.slice(0, 2).join(" ")} ${p}`];
    const id = tries.map((t) => resolveStoreName(t)).find(Boolean);
    if (id && !ids.includes(id)) ids.push(id);
  }
  return ids;
}

// How strongly the guide called it. Day-specific adjustments (lighter / owed) still count as being on the list.
function strength(note: string): number {
  const n = note.toLowerCase();
  if (/\b(lighter|light check|leftover|may not have|if it runs|in case|quiet|has been dry|dry lately|low odds|long shot|unlikely)\b/.test(n)) return 0.45;
  if (/\b(heavy|strong|big|best|lock|one of the|regular|almost daily|near daily|daily|expect a (line|crowd|solid|drop)|its day|holds for friday|lines? (will )?form|chairs|camp|free for all|wait it out|always|reliable|loaded|haul)\b/.test(n)) return 1;
  if (/\b(owed|overdue|due)\b/.test(n)) return 0.85;
  if (/\b(random|sporadic|possible|maybe|might|can )\b/.test(n)) return 0.55;
  return 0.7;
}

const fmt = (h: number) => `${h % 12 === 0 ? 12 : h % 12}${h >= 12 && h < 24 ? "PM" : "AM"}`;
// The window a note gives: "opening" or a 24h hour range.
function windowOf(note: string): string | null {
  const n = note.toLowerCase();
  const r = /\b(\d{1,2})(?::\d\d)?\s*(am|pm)?\s*(?:to|-|–)\s*(\d{1,2})(?::\d\d)?\s*(am|pm)?\b/.exec(n);
  const opening = /\b(open|opening|before doors|at the doors|7 ?am|8 ?am)\b/.test(n);
  if (r) {
    let a = +r[1], b = +r[3];
    const pmB = r[4] === "pm" || (!r[4] && b <= 8);
    if (pmB && b < 12) b += 12;
    if (r[2] === "pm" && a < 12) a += 12;
    else if (!r[2] && pmB && a < b - 12 && a < 12 && a <= 8) a += 12;
    if (a >= 7 && b > a && b <= 23) {
      if (opening && a <= 9) return "Opening";
      return `${fmt(a)}-${fmt(b)}`;
    }
  }
  if (opening) return "Opening";
  if (/\bnoon\b/.test(n)) return "11AM-1PM";
  if (/\blate morning\b/.test(n)) return "9AM-12PM";
  if (/\bmidday|mid day\b/.test(n)) return "11AM-2PM";
  if (/\bafternoon\b/.test(n)) return "1PM-4PM";
  if (/\bevening|tonight|night\b/.test(n)) return "4PM-8PM";
  if (/\bmorning\b/.test(n)) return "Opening";
  return null;
}

// Lasting habits worth telling members (store-level). Never product names, never "vendor"/"truck" (engine §5).
const TIPS: [RegExp, string][] = [
  [/guest services|\bgs\b/i, "Check guest services"],
  [/waves?|multiple rounds|second (wave|drop|batch)|rotate back|swing back|again (around|later)/i, "Can go in more than one wave"],
  [/lines? (form|will form|forms)|chairs|camp|pre-open line|heads/i, "Lines form early"],
  [/1 per sku|limits?|1 per|2 per/i, "Limits are common"],
  [/tcg (aisle|section|wall)|back wall/i, "Stocks the TCG aisle"],
  [/\bvq\b|virtual queue|tickets?/i, "Can run a VQ or tickets"],
  [/holds? (back|stock|behind)|plays (dumb|games)/i, "Can hold stock back"],
];

const recentCut = (() => {
  const all = guides.flatMap((g) => g.dates).sort();
  const last = all[all.length - 1];
  const d = new Date(`${last}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() - 28);
  return d.toISOString().slice(0, 10);
})();

const datesByWd = new Map<Wd, Set<string>>();
type Hit = { s: number; w: number; win: string | null };
const hits = new Map<string, Map<string, Hit>>(); // storeId -> date -> best line that date
const tipCount = new Map<string, Map<string, number>>();
for (const g of guides) {
  for (const d of g.dates) {
    (datesByWd.get(wdOf(d)) ?? datesByWd.set(wdOf(d), new Set()).get(wdOf(d))!).add(d);
    for (const [name, note] of g.lines) {
      for (const id of resolveMany(name)) {
        const byDate = hits.get(id) ?? hits.set(id, new Map()).get(id)!;
        const s = strength(note);
        const prev = byDate.get(d);
        if (!prev || s > prev.s) byDate.set(d, { s, w: d >= recentCut ? 1.5 : 1, win: windowOf(note) ?? prev?.win ?? null });
      }
    }
  }
  for (const [name, note] of g.lines)
    for (const id of resolveMany(name))
      for (const [re, tip] of TIPS) if (re.test(note)) {
        const m = tipCount.get(id) ?? tipCount.set(id, new Map()).get(id)!;
        m.set(tip, (m.get(tip) ?? 0) + 1);
      }
}

interface DayStat { score: number; listed: number; of: number; window: string }
const out: Record<string, { days: Partial<Record<Wd, DayStat>>; tips: string[] }> = {};
for (const s of STORES) {
  const byDate = hits.get(s.id);
  if (!byDate) continue;
  const days: Partial<Record<Wd, DayStat>> = {};
  for (const [wd, dates] of datesByWd) {
    let num = 0, den = 0, listed = 0;
    const wins = new Map<string, number>();
    for (const d of dates) {
      const w = d >= recentCut ? 1.5 : 1;
      den += w;
      const h = byDate.get(d);
      if (h) {
        num += h.s * w;
        listed++;
        if (h.win) wins.set(h.win, (wins.get(h.win) ?? 0) + w);
      }
    }
    if (!listed) continue;
    const window = [...wins.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? "";
    days[wd] = { score: Math.round((num / den) * 100) / 100, listed, of: dates.size, window };
  }
  const tips = [...(tipCount.get(s.id) ?? new Map()).entries()].filter(([, c]) => c >= 2).sort((a, b) => b[1] - a[1]).slice(0, 2).map(([t]) => t);
  out[s.id] = { days, tips };
}

const meta = {
  from: [...guides.flatMap((g) => g.dates)].sort()[0],
  to: [...guides.flatMap((g) => g.dates)].sort().slice(-1)[0],
  guideDays: Object.fromEntries([...datesByWd].map(([k, v]) => [k, v.size])),
  stores: Object.keys(out).length,
};
const ts = `// GENERATED by scripts/build-guide-baseline.ts from the posted guides (${meta.from} to ${meta.to}). Do not edit by hand;
// re-run the script on a newer export instead. Per store and weekday: score = how often + how strongly the guides
// called it (0..1, last 4 weeks weigh 1.5x), listed/of = guides it was in / guides for that weekday, window = the
// usual window the guides gave. tips = habits mentioned in 2+ guides.
import type { Wd } from "./store-profiles";

export interface GuideDayStat { score: number; listed: number; of: number; window: string }
export interface GuideBaseline { days: Partial<Record<Wd, GuideDayStat>>; tips: string[] }

export const GUIDE_META = ${JSON.stringify(meta)};

export const GUIDE_BASELINE: Record<string, GuideBaseline> = ${JSON.stringify(out, null, 1)};
`;
fs.writeFileSync("lib/guide-baseline.ts", ts);
console.log("stores:", meta.stores, "guide days:", meta.guideDays, meta.from, "->", meta.to);
