"use client";

import { useEffect, useRef, useState } from "react";
import type { StoreRef } from "@/lib/stores";
import type { BoardEntry, Chance, SourceType, StockLocation, Status } from "@/lib/types";
import { appleMapsUrl, googleMapsUrl } from "@/lib/maps";

interface Props {
  store: StoreRef;
  entry: BoardEntry;
  editMode: boolean;
  onPatch: (storeId: string, patch: Partial<BoardEntry>) => void;
  showStatus?: boolean;
  onViewWeek?: (storeId: string) => void;
  vendorNickname?: string;
  isFavorite?: boolean;
  onToggleFavorite?: (storeId: string) => void;
  currentUsername?: string;
  distanceMiles?: number;
}

const chanceStyles: Record<string, string> = {
  High: "border-high text-high bg-high/10",
  Medium: "border-medium text-medium bg-medium/10",
  Low: "border-low text-low bg-low/10",
};

const chanceBorderLeft: Record<string, string> = {
  High: "border-l-4 border-l-high",
  Medium: "border-l-4 border-l-medium",
  Low: "border-l-4 border-l-low",
};

const statusStyles: Record<Status, string> = {
  pending: "bg-panel2 text-textmuted border-line",
  hit: "bg-live/15 text-live border-live",
  no_hit: "bg-textmuted/10 text-textmuted border-line line-through",
};

const statusLabels: Record<Status, string> = {
  pending: "No Update/Hasn't Sold",
  hit: "Sold",
  no_hit: "No Hit",
};

const sourceLabels: Record<string, string> = {
  vendor: "Vendor",
  employee_push: "Employee Push",
  both: "Vendor + Push",
};

const sourceIcons: Record<string, string> = {
  vendor: "\u{1F69A}",
  employee_push: "\u{1F464}",
  both: "\u{1F69A}\u{1F464}",
};

const stockLocationLabels: Record<string, string> = {
  tcg_section: "TCG Section",
  guest_services: "Guest Services",
  both: "TCG + GS",
};

const WINDOW_PRESETS: [string, string][] = [
  ["Opening", "Opening"],
  ["7-9AM", "7-9AM"],
  ["8-10AM", "8-10AM"],
  ["11-1PM", "11-1PM"],
  ["2-4PM", "2-4PM"],
  ["5-7PM", "5-7PM"],
  ["8-Close", "8-Close"],
];

function MapLink({ store, small }: { store: StoreRef; small?: boolean }) {
  const size = small ? "text-[10px]" : "text-[11px]";
  return (
    <span className={`flex items-center gap-1.5 shrink-0 ${size}`}>
      <a
        href={appleMapsUrl(store)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="text-textmuted hover:text-live font-mono"
      >
        Apple
      </a>
      <span className="text-line">/</span>
      <a
        href={googleMapsUrl(store)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="text-textmuted hover:text-live font-mono"
      >
        Google
      </a>
    </span>
  );
}

// Typing into these fields no longer fires a network request (and the
// resulting full-list re-render) on every keystroke - that was the actual
// cause of both the visible lag and dropped characters. Local state keeps
// typing instant; the real update only propagates ~500ms after you pause.
export function DebouncedInput({
  value,
  onCommit,
  ...rest
}: {
  value: string;
  onCommit: (v: string) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">) {
  const [local, setLocal] = useState(value);
  const pending = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!pending.current) setLocal(value);
  }, [value]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const v = e.target.value;
    setLocal(v);
    pending.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      pending.current = false;
      onCommit(v);
    }, 500);
  }

  return <input {...rest} value={local} onChange={handleChange} />;
}

export function DebouncedTextarea({
  value,
  onCommit,
  ...rest
}: {
  value: string;
  onCommit: (v: string) => void;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange">) {
  const [local, setLocal] = useState(value);
  const pending = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!pending.current) setLocal(value);
  }, [value]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const v = e.target.value;
    setLocal(v);
    pending.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      pending.current = false;
      onCommit(v);
    }, 500);
  }

  return <textarea {...rest} value={local} onChange={handleChange} />;
}

function FavoriteStar({
  isFavorite,
  onToggle,
}: {
  isFavorite?: boolean;
  onToggle?: () => void;
}) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggle?.();
      }}
      className={`shrink-0 text-base leading-none ${isFavorite ? "text-gold" : "text-line hover:text-textmuted"}`}
      aria-label="Toggle favorite"
    >
      {isFavorite ? "\u2605" : "\u2606"}
    </button>
  );
}

export default function StoreRow({
  store,
  entry,
  editMode,
  onPatch,
  showStatus = true,
  onViewWeek,
  vendorNickname,
  isFavorite,
  onToggleFavorite,
  currentUsername,
  distanceMiles,
}: Props) {
  const chance = entry.chance;
  const [flagInputOpen, setFlagInputOpen] = useState(false);
  const [flagReasonDraft, setFlagReasonDraft] = useState("");

  const showVendorNotes = entry.sourceType === "vendor" || entry.sourceType === "both";
  const showRandomNotes = entry.sourceType === "employee_push" || entry.sourceType === "both";

  function submitFlag() {
    if (!flagReasonDraft.trim()) return;
    onPatch(store.id, {
      flagged: {
        reason: flagReasonDraft.trim(),
        flaggedBy: currentUsername ?? "admin",
        flaggedAt: new Date().toISOString(),
      },
    });
    setFlagReasonDraft("");
    setFlagInputOpen(false);
  }

  function clearFlag() {
    if (window.confirm("Clear this flag?")) {
      onPatch(store.id, { flagged: null });
    }
  }

  if (editMode) {
    return (
      <div
        className={`border rounded-lg p-3 bg-panel card-fill ${
          entry.flagged ? "border-medium" : "border-line"
        }`}
      >
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="flex items-center gap-1.5">
              <FavoriteStar isFavorite={isFavorite} onToggle={() => onToggleFavorite?.(store.id)} />
              <span className="font-medium text-sm">{store.name}</span>
              <MapLink store={store} />
            </div>
            {vendorNickname && (
              <div className="font-mono text-[10px] text-textmuted">[{vendorNickname}]</div>
            )}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {onViewWeek && (
              <button
                onClick={() => onViewWeek(store.id)}
                className="text-[10px] font-mono uppercase tracking-wide text-textmuted hover:text-live transition-colors"
              >
                Week &rsaquo;
              </button>
            )}
            <select
              value={chance ?? ""}
              onChange={(e) =>
                onPatch(store.id, { chance: (e.target.value || null) as Chance })
              }
              className="bg-panel2 border border-line rounded px-2 py-1 text-xs"
            >
              <option value="">Unset</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => {
            if (window.confirm("Clear the chance, window, and notes for this store on this day only? Vendor/location/limit info stays.")) {
              onPatch(store.id, { chance: null, window: "", reason: "", vendorNotes: "", randomNotes: "" });
            }
          }}
          className="w-full text-[10px] font-mono uppercase tracking-wide px-2 py-1.5 rounded border border-line text-textmuted hover:text-high hover:border-high transition-colors mb-2"
        >
          &#10005; Clear Prediction (this day only)
        </button>

        <div className="mb-2">
          <div className="text-[10px] uppercase tracking-wide text-textmuted mb-1">
            Source type {!entry.sourceType && <span className="text-medium">(required)</span>}
          </div>
          <div className="flex gap-1.5">
            {(
              [
                ["vendor", "\u{1F69A} Vendor"],
                ["employee_push", "\u{1F464} Employee Push"],
                ["both", "\u{1F69A}\u{1F464} Both"],
              ] as [SourceType, string][]
            ).map(([val, label]) => (
              <button
                key={val}
                onClick={() =>
                  onPatch(store.id, { sourceType: entry.sourceType === val ? null : val })
                }
                className={`text-[10px] font-mono uppercase px-2 py-1.5 rounded border flex-1 transition-colors ${
                  entry.sourceType === val
                    ? "border-gold text-gold bg-gold/10"
                    : !entry.sourceType
                      ? "border-medium/60 text-textmuted"
                      : "border-line text-textmuted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-1.5">
          {WINDOW_PRESETS.map(([val, label]) => (
            <button
              key={val}
              onClick={() => onPatch(store.id, { window: val })}
              className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border transition-colors ${
                entry.window === val
                  ? "border-gold text-gold bg-gold/10"
                  : "border-line text-textmuted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <DebouncedInput
          type="text"
          value={entry.window}
          onCommit={(v) => onPatch(store.id, { window: v })}
          placeholder="Window, e.g. 7-9AM"
          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 font-mono placeholder:text-textmuted"
        />

        <div className="mb-2">
          <div className="text-[10px] uppercase tracking-wide text-textmuted mb-1">Stock location</div>
          <div className="flex gap-1.5">
            {(
              [
                ["tcg_section", "TCG Section"],
                ["guest_services", "Guest Services"],
                ["both", "Both"],
              ] as [StockLocation, string][]
            ).map(([val, label]) => (
              <button
                key={val}
                onClick={() =>
                  onPatch(store.id, { stockLocation: entry.stockLocation === val ? null : val })
                }
                className={`text-[10px] font-mono uppercase px-2 py-1 rounded border flex-1 transition-colors ${
                  entry.stockLocation === val
                    ? "border-gold text-gold bg-gold/10"
                    : "border-line text-textmuted"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-2">
          <div className="text-[10px] uppercase tracking-wide text-textmuted mb-1">Item limit</div>
          <div className="flex gap-1.5 mb-1.5">
            {["1 per person", "2 per person"].map((val) => (
              <button
                key={val}
                onClick={() => onPatch(store.id, { itemLimit: entry.itemLimit === val ? "" : val })}
                className={`text-[10px] font-mono uppercase px-2 py-1 rounded border flex-1 transition-colors ${
                  entry.itemLimit === val
                    ? "border-gold text-gold bg-gold/10"
                    : "border-line text-textmuted"
                }`}
              >
                {val}
              </button>
            ))}
          </div>
          <DebouncedInput
            type="text"
            value={entry.itemLimit}
            onCommit={(v) => onPatch(store.id, { itemLimit: v })}
            placeholder="Or type a custom limit..."
            className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs placeholder:text-textmuted"
          />
        </div>

        <button
          onClick={() => onPatch(store.id, { multiSeller: !entry.multiSeller })}
          className={`w-full flex items-center justify-between text-[10px] font-mono uppercase px-2 py-1.5 rounded border mb-2 transition-colors ${
            entry.multiSeller
              ? "border-gold text-gold bg-gold/10"
              : "border-line text-textmuted"
          }`}
        >
          <span>&#128257; Known Multi-Seller</span>
          <span>{entry.multiSeller ? "ON" : "off"}</span>
        </button>

        <div className="flex items-center justify-between gap-2 mb-2 px-2 py-1.5 rounded border border-line">
          <span className="text-[10px] font-mono uppercase text-textmuted">
            &#10003; Confirmed Hits (history)
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onPatch(store.id, { confirmedCount: Math.max(0, (entry.confirmedCount ?? 0) - 1) })}
              className="h-6 w-6 rounded border border-line text-textmuted hover:text-high hover:border-high text-xs font-mono"
            >
              &minus;
            </button>
            <span className="w-6 text-center text-xs font-mono text-gold">{entry.confirmedCount ?? 0}</span>
            <button
              onClick={() => onPatch(store.id, { confirmedCount: (entry.confirmedCount ?? 0) + 1 })}
              className="h-6 w-6 rounded border border-line text-textmuted hover:text-live hover:border-live text-xs font-mono"
            >
              +
            </button>
          </div>
        </div>
        <p className="text-[9px] text-textmuted mb-2 -mt-1">
          Auto-mined from chat, sometimes miscounts (e.g. "line formed" isn&apos;t a real hit). Adjust
          freely, doesn&apos;t re-run the analysis.
        </p>

        {showVendorNotes && (
          <DebouncedTextarea
            value={entry.vendorNotes}
            onCommit={(v) => onPatch(store.id, { vendorNotes: v })}
            placeholder="Vendor pattern (scheduled delivery)..."
            rows={2}
            className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 placeholder:text-textmuted resize-none"
          />
        )}
        {showRandomNotes && (
          <DebouncedTextarea
            value={entry.randomNotes}
            onCommit={(v) => onPatch(store.id, { randomNotes: v })}
            placeholder="Random / employee-push pattern..."
            rows={2}
            className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 placeholder:text-textmuted resize-none"
          />
        )}
        <DebouncedTextarea
          value={entry.reason}
          onCommit={(v) => onPatch(store.id, { reason: v })}
          placeholder="General notes..."
          rows={2}
          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 placeholder:text-textmuted resize-none"
        />

        {showStatus && (
          <div className="mb-2">
            {entry.flagged ? (
              <div className="border border-medium rounded px-2 py-1.5 bg-medium/10">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase text-medium">
                    &#128681; Overdue — flagged by {entry.flagged.flaggedBy}
                  </span>
                  <button
                    onClick={clearFlag}
                    className="text-[10px] font-mono uppercase text-textmuted hover:text-textprimary"
                  >
                    Clear
                  </button>
                </div>
                <p className="text-xs text-textmuted mt-1">{entry.flagged.reason}</p>
              </div>
            ) : flagInputOpen ? (
              <div className="border border-line rounded px-2 py-1.5">
                <input
                  type="text"
                  autoFocus
                  value={flagReasonDraft}
                  onChange={(e) => setFlagReasonDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && submitFlag()}
                  placeholder="Why is this overdue? (e.g. usually hits Wed, hasn't this week)"
                  className="w-full bg-panel2 border border-line rounded px-2 py-1 text-xs mb-1.5 placeholder:text-textmuted"
                />
                <div className="flex gap-1.5">
                  <button
                    onClick={submitFlag}
                    className="text-[10px] font-mono uppercase px-2 py-1 rounded border border-medium text-medium flex-1"
                  >
                    Set Flag
                  </button>
                  <button
                    onClick={() => {
                      setFlagInputOpen(false);
                      setFlagReasonDraft("");
                    }}
                    className="text-[10px] font-mono uppercase px-2 py-1 rounded border border-line text-textmuted flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setFlagInputOpen(true)}
                className="text-[10px] font-mono uppercase tracking-wide text-textmuted hover:text-medium transition-colors"
              >
                &#128681; Mark Overdue
              </button>
            )}
          </div>
        )}

        {showStatus && (
          <div>
            <div className="flex gap-1.5">
              <button
                onClick={() =>
                  onPatch(store.id, { status: "pending", soldCount: 0, lastSoldAt: null })
                }
                className={`text-[11px] font-mono uppercase px-2 py-1 rounded border flex-1 transition-colors ${
                  entry.status === "pending" ? statusStyles.pending : "border-line text-textmuted"
                }`}
              >
                {statusLabels.pending}
              </button>
              <button
                onClick={() =>
                  onPatch(store.id, {
                    status: "hit",
                    soldCount: (entry.soldCount ?? 0) + 1,
                    lastSoldAt: new Date().toISOString(),
                  })
                }
                className={`text-[11px] font-mono uppercase px-2 py-1 rounded border flex-1 transition-colors ${
                  entry.status === "hit" ? statusStyles.hit : "border-line text-textmuted"
                }`}
              >
                {statusLabels.hit}
                {entry.soldCount > 1 ? ` (${entry.soldCount}x)` : ""}
              </button>
            </div>
            {entry.status === "hit" && (
              <p className="text-[10px] text-textmuted mt-1">
                Tap Sold again to log another sale today &mdash; some stores restock more than once.
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`w-full border rounded-lg p-4 bg-panel card-fill ${
        entry.flagged ? "border-medium" : "border-line"
      } ${chance && !entry.flagged ? chanceBorderLeft[chance] : ""}`}
    >
      {entry.flagged && (
        <div className="flex items-start gap-1.5 mb-2 pb-2 border-b border-medium/40">
          <span className="text-[10px] font-mono uppercase text-medium shrink-0 mt-0.5">
            &#128681; Overdue
          </span>
          <span className="text-xs text-textmuted">{entry.flagged.reason}</span>
        </div>
      )}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`shrink-0 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${
              chance ? chanceStyles[chance] : "border-line text-textmuted"
            }`}
          >
            {chance ?? "Not Expected/Sells Other Day(s)"}
          </span>
          <FavoriteStar isFavorite={isFavorite} onToggle={() => onToggleFavorite?.(store.id)} />
          <span className="font-serif text-base sm:text-lg text-textprimary">{store.name}</span>
        </div>
        {showStatus && (
          <span
            className={`shrink-0 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${statusStyles[entry.status]}`}
          >
            {statusLabels[entry.status]}
            {entry.status === "hit" && entry.soldCount > 1 ? ` (${entry.soldCount}x)` : ""}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 mt-2 text-sm font-mono text-textmuted flex-wrap">
        <MapLink store={store} small />
        {distanceMiles != null && (
          <span className="text-gold">{distanceMiles.toFixed(1)} mi</span>
        )}
        {entry.window && <span className="text-textprimary">{entry.window}</span>}
        {entry.sourceType && (
          <span className="text-gold">
            {sourceIcons[entry.sourceType]} {sourceLabels[entry.sourceType]}
          </span>
        )}
        {entry.stockLocation && (
          <span className="text-low">
            &#128205; {stockLocationLabels[entry.stockLocation]}
          </span>
        )}
        {entry.itemLimit && (
          <span className="text-textmuted">Limit: {entry.itemLimit}</span>
        )}
        {entry.multiSeller && (
          <span
            className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-gold text-gold bg-gold/10"
            title="This store is known to restock more than once in a day"
          >
            &#128257; Sells Multiple Times
          </span>
        )}
        {entry.lastSoldAt && (
          <span className="text-live">
            Last sold {new Date(entry.lastSoldAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}
          </span>
        )}
        {entry.confirmedCount > 0 ? (
          <span
            className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-gold text-gold bg-gold/10"
            title="Based on chat history, not today's status"
          >
            &#10003; {entry.confirmedCount}x past hits
          </span>
        ) : (
          entry.chance && (
            <span
              className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-line text-textmuted"
              title="Based on chat history, not today's status"
            >
              guide history
            </span>
          )
        )}
      </div>
      {entry.vendorNotes && (
        <p className="text-base text-textmuted leading-relaxed mt-2.5">
          <span className="text-gold font-medium">Vendor:</span> {entry.vendorNotes}
        </p>
      )}
      {entry.randomNotes && (
        <p className="text-base text-textmuted leading-relaxed mt-2">
          <span className="text-low font-medium">Random:</span> {entry.randomNotes}
        </p>
      )}
      {entry.reason && (
        <p className="text-base text-textmuted leading-relaxed mt-2">{entry.reason}</p>
      )}
      {onViewWeek && (
        <button
          onClick={() => onViewWeek(store.id)}
          className="mt-2 text-[11px] font-mono uppercase tracking-wide text-textmuted hover:text-live transition-colors"
        >
          View full week &rsaquo;
        </button>
      )}
    </div>
  );
}
