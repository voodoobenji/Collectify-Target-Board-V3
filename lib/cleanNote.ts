// Strips dated, event-specific boilerplate out of guide notes so the board
// reads as a general weekday pattern rather than a log of past days.
//
// It removes the auto-generated tails like:
//   "... Last confirmed: 2026-07-06. Latest guide note (2026-07-06): sold today ..."
//   "6 confirmed recently."
// while keeping the general lead ("Hits most Mondays, increasing trend.
// Typically Opening.") and any plain admin-written notes intact.

// Owner (Nov 2026): notes should read like the guides, general predictions only. Any sentence tied to a
// specific time ("since July", "most recently 8/17", "last week", "today", "overdue", "confirmed 2x ...
// Data-driven") is dropped; lasting tips ("holds back stock, check 8AM then circle back") stay.
const TIME_SPECIFIC = new RegExp(
  [
    String.raw`\b\d{1,2}\/\d{1,2}(\/\d{2,4})?\b`,
    String.raw`\b\d{4}-\d{2}-\d{2}\b`,
    String.raw`\bsince (jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\w*`,
    String.raw`\b(january|february|march|april|june|july|august|september|october|november|december)\b`,
    String.raw`\blast (week|time|mon|tue|wed|thu|fri|sat|sun)\w*`,
    String.raw`\bthis (week|morning|afternoon)\b`,
    String.raw`\b(today|tonight|yesterday|tomorrow|tmrw)\b`,
    String.raw`\bmost recently\b`,
    String.raw`\bconfirmed (\d+\s*[x×]|real drop)`,
    String.raw`\bdata-driven\b`,
    String.raw`\boverdue\b`,
    String.raw`\bdry all week\b`,
    String.raw`\blike it did\b`,
    String.raw`^\s*edited\s*$`,
    // history phrasing ("Has sold ... before", "hasn't sold", "... now")
    String.raw`\bhas (sold|had|hauled|opened|dropped|confirmed|taken|put|been)\b.*\bbefore\b`,
    String.raw`\b(hasn'?t|has not) (sold|dropped|stocked)\b`,
    String.raw`\bnow\b`,
    // product names never go in store notes (engine §5)
    String.raw`\b(upc|etb|sleeves?|bundles?|tins?|30th|eb-?05|ts-?03|figure collection|charizard|ditto|booster|blisters?|spc|first partner|shrouded|pitch black)\b`,
  ].join("|"),
  "i"
);

// The old auto-mined lines ("Real drops ... confirmed 1x ... Data-driven — verify ...") go entirely.
const AUTO_LINE = /data-driven|confirmed \d+\s*[x×]|confirmed real drop|auto-mined/i;

function dropTimeSpecific(text: string): string {
  return text
    .split(/\n+/)
    .map((line) => {
      if (AUTO_LINE.test(line)) return "";
      const parts = line.split(/(?<=[.!?])\s+|\s+[—–]\s+/);
      const kept = parts.filter((sentence) => sentence.trim() && !TIME_SPECIFIC.test(sentence));
      return kept.length === parts.length ? line.trim() : kept.join(" ").trim();
    })
    .filter(Boolean)
    .join("\n\n");
}

export function cleanGuideNote(text: string): string {
  if (!text) return "";
  let out = dropTimeSpecific(text)
    // Drop the trailing "Latest guide note (DATE): ..." through the end.
    .replace(/\s*Latest guide note\s*\([^)]*\)\s*:[\s\S]*$/i, "")
    // Drop "Last confirmed: YYYY-MM-DD".
    .replace(/\s*Last confirmed:\s*\d{4}-\d{2}-\d{2}\.?/gi, "")
    // Drop "N confirmed recently" (the count is shown separately as a badge).
    .replace(/\s*\d+\s+confirmed recently\.?/gi, "")
    // Tidy stray artifacts from imported text.
    .replace(/`+/g, " ")
    .replace(/[ \t]{2,}/g, " ")
    .replace(/\s+([.,])/g, "$1")
    .replace(/\.{2,}/g, ".")
    .trim();
  // Remove any dangling separator left at the end.
  out = out.replace(/[\s,;-]+$/g, "").trim();
  return out;
}
