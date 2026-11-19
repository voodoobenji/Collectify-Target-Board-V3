// The drops log: what actually happened at each store, one small list per day (append/replace per day,
// never one big blob). Feeds the predictions. Kinds:
//   drop  = real Poke/OP product went out
//   light = only light stock (sleeves, blisters, Needoh/squishies, singles...): the store is still OWED
//   dry   = someone checked and nothing was out (useful for "owed")
import { STORES } from "./stores";
import { STORE_ALIASES, STORE_PROFILES } from "./store-profiles";

export type DropKind = "drop" | "light" | "dry";
export type DropWindow = "opening" | "morning" | "midday" | "afternoon" | "evening";

export interface DropRecord {
  date: string; // YYYY-MM-DD (LA)
  time: string; // HH:MM 24h, LA
  storeId: string;
  storeName: string;
  kind: DropKind;
  window: DropWindow;
  items: string;
  notes: string;
  source: "csv" | "export" | "manual";
}

export const DROP_KINDS: DropKind[] = ["drop", "light", "dry"];

/** lower-case, "&" -> "and", no "target", no punctuation, single spaces. */
export function normName(s: string): string {
  return s
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\btarget\b/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

let index: Map<string, string> | null = null;
function nameIndex(): Map<string, string> {
  if (index) return index;
  const m = new Map<string, string>();
  const add = (name: string, id: string) => {
    const k = normName(name);
    if (k && !m.has(k)) m.set(k, id);
  };
  // Hand-picked aliases first (they also fix board names that are duplicated or wrong).
  for (const [a, id] of Object.entries(STORE_ALIASES)) add(a, id);
  for (const [id, p] of Object.entries(STORE_PROFILES)) {
    add(p.engineName, id);
    add(p.engineName.replace(/\s*\(.*\)\s*/g, " "), id);
    for (const a of p.aliases ?? []) add(a, id);
  }
  for (const s of STORES) add(s.name, s.id);
  index = m;
  return m;
}

/** Board store id for a store name as people write it ("Brea Birch St", "Culver Mall", "Sherman Oaks"), or null. */
export function resolveStoreName(raw: string): string | null {
  const k = normName(raw);
  if (!k) return null;
  return nameIndex().get(k) ?? null;
}

export function storeNameOf(id: string): string {
  return STORES.find((s) => s.id === id)?.name ?? id;
}

/** Time of day bucket, same buckets as the engine's log. */
export function windowFor(time: string): DropWindow {
  const [h, m] = time.split(":").map(Number);
  const mins = (h || 0) * 60 + (m || 0);
  if (mins < 9 * 60) return "opening";
  if (mins < 11 * 60 + 30) return "morning";
  if (mins < 14 * 60) return "midday";
  if (mins < 16 * 60) return "afternoon";
  return "evening";
}

// Light stock is NOT a drop (engine §6). Used to pre-sort CSV rows; the export reader decides with AI.
const LIGHT = /(sleeve|blister|needoh|squish|squeez|dumpling|cloud|single|sticker|mega zygarde|mega greninja|dbz|sports)/i;
const REAL = /(\betb|upc|bundle|box|tin|figure|deck|poster|portfolio|illustration|knockout|30th|collection|restock|stocked|selling|sold|poke\b|shipment|full pack|vendor|ex\b)/i;
export function looksLight(items: string): boolean {
  const t = items.replace(/premium collections?/gi, "");
  return LIGHT.test(t) && !REAL.test(t);
}

/** "8:05 AM" / "08:05" / "8:05 PM" -> "HH:MM" (24h). */
export function to24h(t: string): string {
  const m = /(\d{1,2}):(\d{2})\s*(am|pm)?/i.exec(t.trim());
  if (!m) return "00:00";
  let h = Number(m[1]);
  const ap = m[3]?.toLowerCase();
  if (ap === "pm" && h < 12) h += 12;
  if (ap === "am" && h === 12) h = 0;
  return `${String(h).padStart(2, "0")}:${m[2]}`;
}
