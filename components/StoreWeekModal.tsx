"use client";

import { useEffect, useState } from "react";
import type { StoreRef } from "@/lib/stores";
import type { BoardEntry } from "@/lib/types";
import { WEEKDAYS } from "@/lib/types";
import { appleMapsUrl, googleMapsUrl } from "@/lib/maps";

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

const sourceLabels: Record<string, string> = {
  vendor: "Vendor",
  employee_push: "Employee Push",
  both: "Vendor + Push",
};

interface DayInfo {
  chance: string | null;
  window: string;
  reason: string;
  vendorNotes: string;
  randomNotes: string;
  sourceType: string | null;
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
        sourceType: todayEntry.sourceType,
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
      className="fixed inset-0 bg-ink/80 flex items-center justify-center p-3 sm:p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-panel card-fill border border-line rounded-lg max-w-lg w-full max-h-[85vh] overflow-y-auto p-4 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-textprimary">
              {store.name}
            </h2>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-textmuted text-xs font-mono">{store.regionLabel}</p>
              <a
                href={appleMapsUrl(store)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-live text-xs font-mono hover:underline"
              >
                Apple Maps
              </a>
              <a
                href={googleMapsUrl(store)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-live text-xs font-mono hover:underline"
              >
                Google Maps
              </a>
            </div>
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
                <div key={day} className="border border-line rounded-lg p-3 card-fill">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-serif text-base">
                      {DAY_LABELS[day]}
                      {isToday && <span className="text-live text-[10px] ml-2">Today</span>}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {info?.sourceType && (
                        <span className="text-[10px] font-mono uppercase text-gold">
                          {sourceLabels[info.sourceType]}
                        </span>
                      )}
                      {info?.chance && (
                        <span
                          className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${chanceStyles[info.chance] ?? ""}`}
                        >
                          {info.chance}
                        </span>
                      )}
                    </div>
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
