"use client";

import { useEffect, useState } from "react";
import type { StoreRef } from "@/lib/stores";
import type { BoardEntry, Chance, SourceType, StockLocation, Status, TrackRecord } from "@/lib/types";
import { WEEKDAYS } from "@/lib/types";
import { DebouncedInput, DebouncedTextarea } from "./StoreRow";
import { appleMapsUrl, googleMapsUrl } from "@/lib/maps";
import { cleanGuideNote } from "@/lib/cleanNote";
import TrackRecordBadge from "./TrackRecordBadge";

interface LogEntry {
  date: string;
  type: "guide" | "confirmed" | "light" | "dry";
  snippet: string;
  url: string | null;
}

const DAY_LABELS: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
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

const stockLocationLabels: Record<string, string> = {
  tcg_section: "TCG Section",
  guest_services: "Guest Services",
  both: "TCG + Guest Services",
};

const WINDOW_PRESETS = ["Opening", "7-9AM", "8-10AM", "11-1PM", "2-4PM", "5-7PM", "8-Close"];

// Light heuristic: does a map/guide note contradict the board? Pulls any weekday
// or priority words out of the free text and compares to what the board says for
// today. We never auto-apply the map - we just flag the conflict so the board
// stays the source of truth.
function analyzeMapNote(
  text: string,
  todayWeekday: string,
  chance: Chance
): string[] {
  const conflicts: string[] = [];
  const lower = text.toLowerCase();
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  const mentioned = days.filter((d) => lower.includes(d));
  if (mentioned.length && !mentioned.includes(todayWeekday)) {
    conflicts.push(
      `A note here points to ${mentioned.map((d) => DAY_LABELS[d]).join("/")}; you're viewing ${DAY_LABELS[todayWeekday]}.`
    );
  }
  const priorityWord = /\bhigh\b/.test(lower) ? "High" : /\bmedium\b/.test(lower) ? "Medium" : /\blow\b/.test(lower) ? "Low" : null;
  if (priorityWord && chance && priorityWord !== chance) {
    conflicts.push(`A note here reads "${priorityWord}"; board shows "${chance}".`);
  }
  return conflicts;
}

function mergeAdminNotes(info: { vendorNotes: string; randomNotes: string; reason: string }): string {
  return [info.vendorNotes, info.randomNotes, info.reason]
    .map((s) => (s ?? "").trim())
    .filter(Boolean)
    .join("\n\n");
}

interface DayInfo {
  chance: Chance;
  window: string;
  reason: string;
  vendorNotes: string;
  randomNotes: string;
  sourceType: SourceType;
  stockLocation: StockLocation;
  itemLimit: string;
  multiSeller: boolean;
  confirmedCount: number;
}

const EMPTY_DAY_INFO: DayInfo = {
  chance: null,
  window: "",
  reason: "",
  vendorNotes: "",
  randomNotes: "",
  sourceType: null,
  stockLocation: null,
  itemLimit: "",
  multiSeller: false,
  confirmedCount: 0,
};

export default function StoreWeekModal({
  store,
  todayWeekday,
  todayEntry,
  onClose,
  canEdit = false,
  onPatchToday,
  trackByDay = {},
  todayStatus = "pending",
  onLogOutcome,
}: {
  store: StoreRef;
  todayWeekday: string;
  todayEntry: BoardEntry;
  onClose: () => void;
  canEdit?: boolean;
  onPatchToday?: (storeId: string, patch: Partial<BoardEntry>) => void;
  trackByDay?: Record<string, TrackRecord>;
  todayStatus?: Status;
  onLogOutcome?: (storeId: string, result: "hit" | "no_drop" | null) => void;
}) {
  // Optimistic local mirror of today's logged status so the buttons react
  // instantly while the request round-trips.
  const [localStatus, setLocalStatus] = useState<Status>(todayStatus);
  useEffect(() => setLocalStatus(todayStatus), [todayStatus]);

  function logOutcome(result: "hit" | "no_drop" | null) {
    setLocalStatus(result === "hit" ? "hit" : result === "no_drop" ? "no_hit" : "pending");
    onLogOutcome?.(store.id, result);
  }
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
        stockLocation: todayEntry.stockLocation,
        itemLimit: todayEntry.itemLimit,
        multiSeller: todayEntry.multiSeller,
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
              const adminNotes = cleanGuideNote(mergeAdminNotes(info));

              return (
                <div key={day} className="border border-line rounded-lg p-3 card-fill">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-serif text-base">
                      {DAY_LABELS[day]}
                      {isToday && <span className="text-live text-[10px] ml-2">Today</span>}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {info.confirmedCount > 0 && (
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-gold text-gold bg-panel2">
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

                  {(trackByDay[day]?.total ?? 0) > 0 && (
                    <div className="mb-2">
                      <TrackRecordBadge record={trackByDay[day]} />
                    </div>
                  )}

                  {canEdit &&
                    trackByDay[day]?.suggestedChance &&
                    trackByDay[day]!.suggestedChance !== info.chance && (
                      <button
                        onClick={() => patchDay(day, { chance: trackByDay[day]!.suggestedChance })}
                        className="w-full mb-2 text-[10px] font-mono uppercase tracking-wide px-2 py-1.5 rounded border border-gold text-gold bg-gold/10 hover:bg-gold/20 transition-colors"
                      >
                        &#9889; Track record suggests {trackByDay[day]!.suggestedChance} &mdash; tap to apply
                        {info.chance ? ` (now ${info.chance})` : ""}
                      </button>
                    )}

                  {canEdit && isToday && (
                    <div className="mb-2 px-2 py-2 rounded border border-line">
                      <div className="text-[10px] font-mono uppercase text-textmuted mb-1.5">
                        Log today&apos;s outcome
                      </div>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => logOutcome("hit")}
                          className={`flex-1 text-[11px] font-mono uppercase px-2 py-1.5 rounded border transition-colors ${
                            localStatus === "hit"
                              ? "border-gold text-gold bg-panel2"
                              : "border-line text-textmuted hover:text-live"
                          }`}
                        >
                          &#10003; Dropped
                        </button>
                        <button
                          onClick={() => logOutcome("no_drop")}
                          className={`flex-1 text-[11px] font-mono uppercase px-2 py-1.5 rounded border transition-colors ${
                            localStatus === "no_hit"
                              ? "border-high text-high bg-high/10"
                              : "border-line text-textmuted hover:text-high"
                          }`}
                        >
                          &#10005; No drop
                        </button>
                        {localStatus !== "pending" && (
                          <button
                            onClick={() => logOutcome(null)}
                            className="text-[11px] font-mono uppercase px-2 py-1.5 rounded border border-line text-textmuted hover:text-textprimary"
                          >
                            Clear
                          </button>
                        )}
                      </div>
                      <p className="text-[9px] text-textmuted mt-1">
                        Builds the track record &amp; suggestions. Live alerts stay in Discord.
                      </p>
                    </div>
                  )}

                  {isToday &&
                    todayEntry.externalGuide &&
                    analyzeMapNote(todayEntry.externalGuide.text, todayWeekday, info.chance).length > 0 && (
                      <div className="mb-2 px-2 py-2 rounded border border-medium/50 bg-medium/5">
                        <div className="text-[10px] font-mono uppercase text-medium mb-1">
                          &#9888; May need more data to be fully accurate
                        </div>
                        {analyzeMapNote(todayEntry.externalGuide.text, todayWeekday, info.chance).map(
                          (c, i) => (
                            <p key={i} className="text-[11px] text-textmuted">
                              {c}
                            </p>
                          )
                        )}
                        <p className="text-[9px] text-textmuted mt-1">
                          Signals disagree for this store &mdash; log a few outcomes to firm up its pattern.
                        </p>
                      </div>
                    )}

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
                        <DebouncedInput
                          type="text"
                          value={info.window}
                          onCommit={(v) => patchDay(day, { window: v })}
                          placeholder="Window"
                          className="flex-1 bg-panel2 border border-line rounded px-2 py-1 text-xs font-mono placeholder:text-textmuted"
                        />
                      </div>
                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              `Clear the chance, window, and notes for ${DAY_LABELS[day]} only? Vendor/location/limit info stays.`
                            )
                          ) {
                            patchDay(day, { chance: null, window: "", reason: "", vendorNotes: "", randomNotes: "" });
                          }
                        }}
                        className="w-full text-[10px] font-mono uppercase tracking-wide px-2 py-1.5 rounded border border-line text-textmuted hover:text-high hover:border-high transition-colors mb-2"
                      >
                        &#10005; Clear Prediction ({DAY_LABELS[day]} only)
                      </button>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {WINDOW_PRESETS.map((val) => (
                          <button
                            key={val}
                            onClick={() => patchDay(day, { window: val })}
                            className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border transition-colors ${
                              info.window === val
                                ? "border-gold text-gold bg-gold/10"
                                : "border-line text-textmuted"
                            }`}
                          >
                            {val}
                          </button>
                        ))}
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
                      <div className="flex gap-1.5 mb-2">
                        {(
                          [
                            ["tcg_section", "TCG Section"],
                            ["guest_services", "Guest Svcs"],
                            ["both", "Both"],
                          ] as [StockLocation, string][]
                        ).map(([val, label]) => (
                          <button
                            key={val}
                            onClick={() =>
                              patchDay(day, { stockLocation: info.stockLocation === val ? null : val })
                            }
                            className={`text-[10px] font-mono uppercase px-2 py-1 rounded border flex-1 transition-colors ${
                              info.stockLocation === val
                                ? "border-gold text-gold bg-gold/10"
                                : "border-line text-textmuted"
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-1.5 mb-2">
                        {["1 per person", "2 per person"].map((val) => (
                          <button
                            key={val}
                            onClick={() =>
                              patchDay(day, { itemLimit: info.itemLimit === val ? "" : val })
                            }
                            className={`text-[10px] font-mono uppercase px-2 py-1 rounded border flex-1 transition-colors ${
                              info.itemLimit === val
                                ? "border-gold text-gold bg-gold/10"
                                : "border-line text-textmuted"
                            }`}
                          >
                            {val}
                          </button>
                        ))}
                        <DebouncedInput
                          type="text"
                          value={info.itemLimit}
                          onCommit={(v) => patchDay(day, { itemLimit: v })}
                          placeholder="Custom limit"
                          className="flex-1 bg-panel2 border border-line rounded px-2 py-1 text-xs placeholder:text-textmuted"
                        />
                      </div>
                      <button
                        onClick={() => patchDay(day, { multiSeller: !info.multiSeller })}
                        className={`w-full flex items-center justify-between text-[10px] font-mono uppercase px-2 py-1.5 rounded border mb-2 transition-colors ${
                          info.multiSeller
                            ? "border-gold text-gold bg-gold/10"
                            : "border-line text-textmuted"
                        }`}
                      >
                        <span>&#128257; Known Multi-Seller</span>
                        <span>{info.multiSeller ? "ON" : "off"}</span>
                      </button>
                      <div className="text-[10px] uppercase tracking-wide text-textmuted mb-1">Admin Notes</div>
                      <DebouncedTextarea
                        value={adminNotes}
                        onCommit={(v) => patchDay(day, { reason: v, vendorNotes: "", randomNotes: "" })}
                        placeholder="Notes about this store..."
                        rows={3}
                        className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs placeholder:text-textmuted resize-none"
                      />
                    </>
                  ) : !info.chance && !info.window && !info.reason && !info.vendorNotes && !info.randomNotes && !info.stockLocation && !info.itemLimit && !info.multiSeller ? (
                    <p className="text-textmuted text-xs">No data for this day.</p>
                  ) : (
                    <>
                      {info.window && (
                        <p className="text-xs font-mono text-textprimary mb-1">{info.window}</p>
                      )}
                      {(info.stockLocation || info.itemLimit) && (
                        <p className="text-xs text-textmuted mb-1">
                          {info.stockLocation && (
                            <span className="text-low">
                              &#128205; {stockLocationLabels[info.stockLocation]}
                            </span>
                          )}
                          {info.stockLocation && info.itemLimit && "  \u00b7  "}
                          {info.itemLimit && <span>Limit: {info.itemLimit}</span>}
                        </p>
                      )}
                      {info.multiSeller && (
                        <p className="text-xs text-gold mb-1">
                          &#128257; Sells Multiple Times
                        </p>
                      )}
                      {adminNotes && (
                        <div className="pl-3 border-l-2 border-gold/60">
                          <p className="text-[9px] uppercase tracking-wide text-gold font-mono mb-0.5">
                            &#128221; Via Admin Notes
                          </p>
                          <p className="text-xs text-textmuted whitespace-pre-line">{adminNotes}</p>
                        </div>
                      )}
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
                                  : entry.type === "light"
                                    ? "border-medium text-medium"
                                    : "border-line text-textmuted"
                              }`}
                            >
                              {entry.type === "confirmed" ? "drop" : entry.type}
                            </span>
                            <span className="text-textmuted flex-1">{entry.snippet}</span>
                            {entry.url && (
                              <a
                                href={entry.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0 text-textmuted hover:text-live font-mono"
                                title="View original message in Discord"
                              >
                                &#8599;
                              </a>
                            )}
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
