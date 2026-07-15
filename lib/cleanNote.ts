// Strips dated, event-specific boilerplate out of guide notes so the board
// reads as a general weekday pattern rather than a log of past days.
//
// It removes the auto-generated tails like:
//   "... Last confirmed: 2026-07-06. Latest guide note (2026-07-06): sold today ..."
//   "6 confirmed recently."
// while keeping the general lead ("Hits most Mondays, increasing trend.
// Typically Opening.") and any plain admin-written notes intact.

export function cleanGuideNote(text: string): string {
  if (!text) return "";
  let out = text
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
