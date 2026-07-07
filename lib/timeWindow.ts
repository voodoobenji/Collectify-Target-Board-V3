// Best-effort parser for free-text admin-entered windows like "7-9AM",
// "Opening", "8-10 and 1-3", "11-1". Not perfect on every weird compound
// entry, but fails safely: unparseable windows are simply excluded rather
// than guessed wrong.

export interface TimeRange {
  startMin: number; // minutes since midnight
  endMin: number;
}

function to24Hour(hour: number, isPM: boolean): number {
  if (isPM && hour !== 12) return hour + 12;
  if (!isPM && hour === 12) return 0;
  return hour;
}

export function parseWindowRanges(window: string): TimeRange[] {
  if (!window) return [];
  const w = window.trim();

  if (/opening/i.test(w)) {
    // Most Targets open around 8am; treat "Opening" as a loose 8:00-9:30am window
    return [{ startMin: 8 * 60, endMin: 9 * 60 + 30 }];
  }

  const ranges: TimeRange[] = [];
  const regex = /(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?\s*[-\u2013]\s*(\d{1,2})(?::(\d{2}))?\s*(AM|PM)?/gi;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(w)) !== null) {
    const [, h1raw, m1raw, ap1raw, h2raw, m2raw, ap2raw] = match;
    const hour1 = parseInt(h1raw, 10);
    const hour2 = parseInt(h2raw, 10);
    const min1 = m1raw ? parseInt(m1raw, 10) : 0;
    const min2 = m2raw ? parseInt(m2raw, 10) : 0;
    const ap1 = ap1raw?.toUpperCase();
    const ap2 = ap2raw?.toUpperCase();

    let pm1 = ap1 === "PM";
    let pm2 = ap2 === "PM";

    if (ap2 && !ap1) {
      // Inherit end's period for the start, unless the start hour is numerically
      // greater than the end hour (a sign we've crossed noon, e.g. "11-1PM").
      pm1 = hour1 > hour2 && hour1 !== 12 ? false : pm2;
    } else if (!ap1 && !ap2) {
      // No markers at all - apply reasonable defaults for typical restock hours
      if (hour1 <= 7 && hour2 <= 7) {
        pm1 = true;
        pm2 = true;
      } else if (hour1 >= 8 && hour1 <= 11) {
        pm1 = false;
        pm2 = hour2 <= hour1 ? true : false;
      } else {
        pm1 = true;
        pm2 = true;
      }
    }

    const startMin = to24Hour(hour1, pm1) * 60 + min1;
    let endMin = to24Hour(hour2, pm2) * 60 + min2;
    if (endMin <= startMin) endMin += 12 * 60;

    ranges.push({ startMin, endMin });
  }

  return ranges;
}

export function overlapsWindow(
  ranges: TimeRange[],
  targetStartMin: number,
  targetEndMin: number
): boolean {
  return ranges.some((r) => r.startMin <= targetEndMin && r.endMin >= targetStartMin);
}

export function formatMinutes(mins: number): string {
  const h24 = Math.floor(mins / 60) % 24;
  const m = mins % 60;
  const period = h24 >= 12 ? "PM" : "AM";
  let h12 = h24 % 12;
  if (h12 === 0) h12 = 12;
  return m === 0 ? `${h12}${period}` : `${h12}:${String(m).padStart(2, "0")}${period}`;
}
