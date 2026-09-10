"use client";

import type { TrackRecord } from "@/lib/types";

const DAY_SHORT: Record<string, string> = {
  monday: "Mon",
  tuesday: "Tue",
  wednesday: "Wed",
  thursday: "Thu",
  friday: "Fri",
  saturday: "Sat",
  sunday: "Sun",
};

// Compact "track record" chip: recent outcome dots (most-recent-first) plus a
// hit/total tally for the weekday. Green dot = it dropped, dim dot = no drop.
export default function TrackRecordBadge({
  record,
  className = "",
}: {
  record: TrackRecord | null | undefined;
  className?: string;
}) {
  if (!record || record.total === 0) return null;
  const dayLabel = DAY_SHORT[record.weekday] ?? "";
  return (
    <span
      className={`inline-flex items-center gap-1 text-[10px] font-mono text-textmuted ${className}`}
      title={`Dropped ${record.hits} of the last ${record.total} ${dayLabel}s logged`}
    >
      <span className="inline-flex items-center gap-[2px]">
        {record.recent
          .slice()
          .reverse()
          .map((o, i) => (
            <span
              key={i}
              className={`h-[6px] w-[6px] rounded-full ${o === "hit" ? "bg-live" : "bg-line"}`}
            />
          ))}
      </span>
      <span>
        {record.hits}/{record.total} {dayLabel}
      </span>
    </span>
  );
}
