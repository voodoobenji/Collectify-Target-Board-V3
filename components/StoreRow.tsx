"use client";

import type { StoreRef } from "@/lib/stores";
import type { BoardEntry, Chance, SourceType, Status } from "@/lib/types";
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
  pending: "Pending",
  hit: "Hit",
  no_hit: "No Hit",
};

const sourceLabels: Record<string, string> = {
  vendor: "Vendor",
  employee_push: "Employee Push",
  both: "Vendor + Push",
};

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
}: Props) {
  const chance = entry.chance;

  if (editMode) {
    return (
      <div className="border border-line rounded-lg p-3 bg-panel card-fill">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="flex items-center gap-1.5">
              <button
      onClick={(e) => {
        e.stopPropagation();
        onToggleFavorite?.(store.id);
      }}
      className={`shrink-0 text-base leading-none ${isFavorite ? "text-gold" : "text-line hover:text-textmuted"}`}
      aria-label="Toggle favorite"
    >
      {isFavorite ? "\u2605" : "\u2606"}
    </button>
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

        <div className="flex gap-1.5 mb-2">
          {(
            [
              ["vendor", "Vendor"],
              ["employee_push", "Employee Push"],
              ["both", "Both"],
            ] as [SourceType, string][]
          ).map(([val, label]) => (
            <button
              key={val}
              onClick={() =>
                onPatch(store.id, { sourceType: entry.sourceType === val ? null : val })
              }
              className={`text-[10px] font-mono uppercase px-2 py-1 rounded border flex-1 transition-colors ${
                entry.sourceType === val
                  ? "border-gold text-gold bg-gold/10"
                  : "border-line text-textmuted"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={entry.window}
          onChange={(e) => onPatch(store.id, { window: e.target.value })}
          placeholder="Window, e.g. 7-9AM"
          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 font-mono placeholder:text-textmuted"
        />
        <textarea
          value={entry.vendorNotes}
          onChange={(e) => onPatch(store.id, { vendorNotes: e.target.value })}
          placeholder="Vendor pattern (scheduled delivery)..."
          rows={2}
          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 placeholder:text-textmuted resize-none"
        />
        <textarea
          value={entry.randomNotes}
          onChange={(e) => onPatch(store.id, { randomNotes: e.target.value })}
          placeholder="Random / employee-push pattern..."
          rows={2}
          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 placeholder:text-textmuted resize-none"
        />
        <textarea
          value={entry.reason}
          onChange={(e) => onPatch(store.id, { reason: e.target.value })}
          placeholder="General notes..."
          rows={2}
          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 placeholder:text-textmuted resize-none"
        />
        {showStatus && (
          <div className="flex gap-1.5">
            {(["pending", "hit", "no_hit"] as Status[]).map((s) => (
              <button
                key={s}
                onClick={() => onPatch(store.id, { status: s })}
                className={`text-[11px] font-mono uppercase px-2 py-1 rounded border flex-1 transition-colors ${
                  entry.status === s ? statusStyles[s] : "border-line text-textmuted"
                }`}
              >
                {statusLabels[s]}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`w-full border border-line rounded-lg p-4 bg-panel card-fill ${
        chance ? chanceBorderLeft[chance] : ""
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`shrink-0 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${
              chance ? chanceStyles[chance] : "border-line text-textmuted"
            }`}
          >
            {chance ?? "No Data"}
          </span>
          <button
      onClick={(e) => {
        e.stopPropagation();
        onToggleFavorite?.(store.id);
      }}
      className={`shrink-0 text-base leading-none ${isFavorite ? "text-gold" : "text-line hover:text-textmuted"}`}
      aria-label="Toggle favorite"
    >
      {isFavorite ? "\u2605" : "\u2606"}
    </button>
          <span className="font-serif text-base sm:text-lg text-textprimary truncate">{store.name}</span>
          <MapLink store={store} small />
        </div>
        {showStatus && (
          <span
            className={`shrink-0 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${statusStyles[entry.status]}`}
          >
            {statusLabels[entry.status]}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 mt-2 text-sm font-mono text-textmuted flex-wrap">
        {entry.window && <span className="text-textprimary">{entry.window}</span>}
        {entry.sourceType && (
          <span className="text-gold">{sourceLabels[entry.sourceType]}</span>
        )}
        {entry.confirmedCount > 0 ? (
          <span className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-live text-live bg-live/10">
            &#10003; {entry.confirmedCount}x confirmed
          </span>
        ) : (
          entry.chance && (
            <span className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-line text-textmuted">
              predicted
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
