"use client";

import { useEffect, useState } from "react";
import type { StoreRef } from "@/lib/stores";
import type { BoardEntry } from "@/lib/types";
import { WEEKDAYS } from "@/lib/types";

const DAY_LABELS: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
};

const chanceStyles: Record<string, string> = {
  High: "border-high text-high bg-high/10",
  Medium: "border-medium text-medium bg-medium/10",
  Low: "border-low text-low bg-low/10",
};

interface DayInfo {
  chance: string | null;
  window: string;
  reason: string;
  vendorNotes: string;
  randomNotes: string;
}

export default function StoreWeekModal({
  store,
  todayWeekday,
  todayEntry,
  onClose,
}: {
  store: StoreRef;
  todayWeekday: string;
  todayEntry: BoardEntry;
  onClose: () => void;
}) {
  const [data, setData] = useState<Record<string, DayInfo | null>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    const result: Record<string, DayInfo | null> = {
      [todayWeekday]: {
        chance: todayEntry.chance,
        window: todayEntry.window,
        reason: todayEntry.reason,
        vendorNotes: todayEntry.vendorNotes,
        randomNotes: todayEntry.randomNotes,
      },
    };
    const others = WEEKDAYS.filter((d) => d !== todayWeekday);
    Promise.all(
      others.map((day) =>
        fetch(`/api/template/${day}`, { cache: "no-store" })
          .then((res) => (res.ok ? res.json() : null))
          .then((json) => ({ day, entry: json?.template?.entries?.[store.id] ?? null }))
          .catch(() => ({ day, entry: null }))
      )
    ).then((results) => {
      if (cancelled) return;
      for (const { day, entry } of results) {
        result[day] = entry;
      }
      setData(result);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [store.id, todayWeekday, todayEntry]);

  return (
    <div
      className="fixed inset-0 bg-ink/80 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-panel border border-line rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h2 className="font-display uppercase tracking-wide text-xl font-semibold">
              {store.name}
            </h2>
            <p className="text-textmuted text-xs font-mono mt-1">{store.regionLabel}</p>
          </div>
          <button
            onClick={onClose}
            className="text-textmuted hover:text-textprimary text-sm shrink-0"
          >
            Close
          </button>
        </div>

        {loading ? (
          <p className="text-textmuted text-sm">Loading week...</p>
        ) : (
          <div className="space-y-3">
            {WEEKDAYS.map((day) => {
              const info = data[day];
              const isToday = day === todayWeekday;
              return (
                <div key={day} className="border border-line rounded-lg p-3">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-display uppercase tracking-wide text-sm">
                      {DAY_LABELS[day]}
                      {isToday && <span className="text-live text-[10px] ml-2">Today</span>}
                    </span>
                    {info?.chance && (
                      <span
                        className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${chanceStyles[info.chance] ?? ""}`}
                      >
                        {info.chance}
                      </span>
                    )}
                  </div>
                  {!info || (!info.chance && !info.window && !info.reason && !info.vendorNotes && !info.randomNotes) ? (
                    <p className="text-textmuted text-xs">No data for this day.</p>
                  ) : (
                    <>
                      {info.window && (
                        <p className="text-xs font-mono text-textprimary mb-1">{info.window}</p>
                      )}
                      {info.vendorNotes && (
                        <p className="text-xs text-textmuted mb-1">
                          <span className="text-gold">Vendor:</span> {info.vendorNotes}
                        </p>
                      )}
                      {info.randomNotes && (
                        <p className="text-xs text-textmuted mb-1">
                          <span className="text-low">Random:</span> {info.randomNotes}
                        </p>
                      )}
                      {info.reason && <p className="text-xs text-textmuted">{info.reason}</p>}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
