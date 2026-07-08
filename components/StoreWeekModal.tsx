"use client";

import { useEffect, useState } from "react";
import type { StoreRef } from "@/lib/stores";
import type { BoardEntry, Chance, SourceType } from "@/lib/types";
import { WEEKDAYS } from "@/lib/types";
import { appleMapsUrl, googleMapsUrl } from "@/lib/maps";

interface LogEntry {
  date: string;
  type: "guide" | "confirmed";
  snippet: string;
}

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
  chance: Chance;
  window: string;
  reason: string;
  vendorNotes: string;
  randomNotes: string;
  sourceType: SourceType;
  confirmedCount: number;
}

const EMPTY_DAY_INFO: DayInfo = {
  chance: null,
  window: "",
  reason: "",
  vendorNotes: "",
  randomNotes: "",
  sourceType: null,
  confirmedCount: 0,
};

export default function StoreWeekModal({
  store,
  todayWeekday,
  todayEntry,
  onClose,
  canEdit = false,
  onPatchToday,
}: {
  store: StoreRef;
  todayWeekday: string;
  todayEntry: BoardEntry;
  onClose: () => void;
  canEdit?: boolean;
  onPatchToday?: (storeId: string, patch: Partial<BoardEntry>) => void;
}) {
  const [data, setData] = useState<Record<string, DayInfo | null>>({});
  const [loading, setLoading] = useState(true);
  const [expandedLog, setExpandedLog] = useState<string | null>(null);
  const [logData, setLogData] = useState<Record<string, LogEntry[]>>({});
  const [logLoading, setLogLoading] = useState<string | null>(null);

  async function toggleLog(day: string) {
    if (expandedLog === day) {
      setExpandedLog(null);
      return;
    }
    setExpandedLog(day);
    if (logData[day]) return;
    setLogLoading(day);
    try {
      const res = await fetch(`/api/history-log/${day}`, { cache: "no-store" });
      if (res.ok) {
        const json = await res.json();
        setLogData((prev) => ({ ...prev, [day]: json?.log?.[store.id] ?? [] }));
      }
    } catch {
    } finally {
      setLogLoading(null);
    }
  }

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
        confirmedCount: todayEntry.confirmedCount,
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

  function updateLocal(day: string, patch: Partial<DayInfo>) {
    setData((prev) => ({
      ...prev,
      [day]: { ...(prev[day] ?? EMPTY_DAY_INFO), ...patch },
    }));
  }

  async function patchDay(day: string, patch: Partial<DayInfo>) {
    updateLocal(day, patch);
    if (day === todayWeekday) {
      onPatchToday?.(store.id, patch as Partial<BoardEntry>);
      return;
    }
    try {
      await fetch(`/api/template/${day}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeId: store.id, patch }),
      });
    } catch {
    }
  }

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

        {canEdit && (
          <p className="text-[11px] text-gold bg-gold/10 border border-gold/40 rounded px-3 py-2 mb-3">
            Editing all 5 days for this store. Changes save as you type &mdash; no need to switch
            tabs.
          </p>
        )}

        {loading ? (
          <p className="text-textmuted text-sm">Loading week...</p>
        ) : (
          <div className="space-y-3">
            {WEEKDAYS.map((day) => {
              const info = data[day] ?? EMPTY_DAY_INFO;
              const isToday = day === todayWeekday;
              const showVendorNotes = info.sourceType === "vendor" || info.sourceType === "both";
              const showRandomNotes = info.sourceType === "employee_push" || info.sourceType === "both";

              return (
                <div key={day} className="border border-line rounded-lg p-3 card-fill">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-serif text-base">
                      {DAY_LABELS[day]}
                      {isToday && <span className="text-live text-[10px] ml-2">Today</span>}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {info.confirmedCount > 0 && (
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-live text-live bg-live/10">
                          &#10003; {info.confirmedCount}x confirmed
                        </span>
                      )}
                      {!canEdit && info.sourceType && (
                        <span className="text-[10px] font-mono uppercase text-gold">
                          {sourceLabels[info.sourceType]}
                        </span>
                      )}
                      {!canEdit && info.chance && (
                        <span
                          className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${chanceStyles[info.chance] ?? ""}`}
                        >
                          {info.chance}
                        </span>
                      )}
                    </div>
                  </div>

                  {canEdit ? (
                    <>
                      <div className="flex gap-1.5 mb-2">
                        <select
                          value={info.chance ?? ""}
                          onChange={(e) =>
                            patchDay(day, { chance: (e.target.value || null) as Chance })
                          }
                          className="bg-panel2 border border-line rounded px-2 py-1 text-xs"
                        >
                          <option value="">Unset</option>
                          <option value="High">High</option>
                          <option value="Medium">Medium</option>
                          <option value="Low">Low</option>
                        </select>
                        <input
                          type="text"
                          value={info.window}
                          onChange={(e) => patchDay(day, { window: e.target.value })}
                          placeholder="Window"
                          className="flex-1 bg-panel2 border border-line rounded px-2 py-1 text-xs font-mono placeholder:text-textmuted"
                        />
                      </div>
                      <div className="flex gap-1.5 mb-2">
                        {(
                          [
                            ["vendor", "Vendor"],
                            ["employee_push", "Employee"],
                            ["both", "Both"],
                          ] as [SourceType, string][]
                        ).map(([val, label]) => (
                          <button
                            key={val}
                            onClick={() =>
                              patchDay(day, { sourceType: info.sourceType === val ? null : val })
                            }
                            className={`text-[10px] font-mono uppercase px-2 py-1 rounded border flex-1 transition-colors ${
                              info.sourceType === val
                                ? "border-gold text-gold bg-gold/10"
                                : "border-line text-textmuted"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                      {showVendorNotes && (
                        <textarea
                          value={info.vendorNotes}
                          onChange={(e) => patchDay(day, { vendorNotes: e.target.value })}
                          placeholder="Vendor pattern..."
                          rows={2}
                          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 placeholder:text-textmuted resize-none"
                        />
                      )}
                      {showRandomNotes && (
                        <textarea
                          value={info.randomNotes}
                          onChange={(e) => patchDay(day, { randomNotes: e.target.value })}
                          placeholder="Random / employee-push pattern..."
                          rows={2}
                          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 placeholder:text-textmuted resize-none"
                        />
                      )}
                      <textarea
                        value={info.reason}
                        onChange={(e) => patchDay(day, { reason: e.target.value })}
                        placeholder="General notes..."
                        rows={2}
                        className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs placeholder:text-textmuted resize-none"
                      />
                    </>
                  ) : !info.chance && !info.window && !info.reason && !info.vendorNotes && !info.randomNotes ? (
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

                  <button
                    onClick={() => toggleLog(day)}
                    className="mt-2 text-[10px] font-mono uppercase tracking-wide text-textmuted hover:text-live transition-colors"
                  >
                    {expandedLog === day ? "Hide recent activity" : "View recent activity"} &rsaquo;
                  </button>

                  {expandedLog === day && (
                    <div className="mt-2 pt-2 border-t border-line space-y-1.5">
                      {logLoading === day ? (
                        <p className="text-textmuted text-[11px]">Loading...</p>
                      ) : (logData[day]?.length ?? 0) === 0 ? (
                        <p className="text-textmuted text-[11px]">No recent activity logged.</p>
                      ) : (
                        logData[day].map((entry, i) => (
                          <div key={i} className="flex gap-2 text-[11px]">
                            <span
                              className={`shrink-0 font-mono ${
                                entry.type === "confirmed" ? "text-live" : "text-textmuted"
                              }`}
                            >
                              {entry.date}
                            </span>
                            <span
                              className={`shrink-0 uppercase text-[9px] px-1 rounded border ${
                                entry.type === "confirmed"
                                  ? "border-live text-live"
                                  : "border-line text-textmuted"
                              }`}
                            >
                              {entry.type === "confirmed" ? "confirmed" : "guide"}
                            </span>
                            <span className="text-textmuted">{entry.snippet}</span>
                          </div>
                        ))
                      )}
                    </div>
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
