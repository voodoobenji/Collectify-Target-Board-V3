"use client";

import { useState } from "react";
import type { StoreRef } from "@/lib/stores";
import type { BoardEntry, Chance, Status } from "@/lib/types";

interface Props {
  store: StoreRef;
  entry: BoardEntry;
  editMode: boolean;
  onPatch: (storeId: string, patch: Partial<BoardEntry>) => void;
  showStatus?: boolean;
}

const chanceStyles: Record<string, string> = {
  High: "border-high text-high bg-high/10",
  Medium: "border-medium text-medium bg-medium/10",
  Low: "border-low text-low bg-low/10",
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

export default function StoreRow({ store, entry, editMode, onPatch, showStatus = true }: Props) {
  const [expanded, setExpanded] = useState(false);
  const chance = entry.chance;

  if (editMode) {
    return (
      <div className="border border-line rounded-lg p-3 bg-panel">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <div className="font-medium text-sm">{store.name}</div>
            <div className="font-mono text-[10px] text-textmuted">
              {store.id}
              {store.vendorNickname ? ` \u00b7 [${store.vendorNickname}]` : ""}
            </div>
          </div>
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
        <input
          type="text"
          value={entry.window}
          onChange={(e) => onPatch(store.id, { window: e.target.value })}
          placeholder="Window, e.g. 7-9AM"
          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 font-mono placeholder:text-textmuted"
        />
        <textarea
          value={entry.reason}
          onChange={(e) => onPatch(store.id, { reason: e.target.value })}
          placeholder="Reason / vendor notes..."
          rows={2}
          className="w-full bg-panel2 border border-line rounded px-2 py-1.5 text-xs mb-2 placeholder:text-textmuted resize-none"
        />
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
      </div>
    );
  }

  return (
    <button
      onClick={() => setExpanded((e) => !e)}
      className="w-full text-left border border-line rounded-lg p-3 bg-panel hover:border-textmuted/40 transition-colors"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`shrink-0 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${
              chance ? chanceStyles[chance] : "border-line text-textmuted"
            }`}
          >
            {chance ?? "\u2014"}
          </span>
          <span className="font-medium text-sm truncate">{store.name}</span>
        </div>
        {showStatus && (
          <span
            className={`shrink-0 text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border ${statusStyles[entry.status]}`}
          >
            {statusLabels[entry.status]}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 mt-1.5 text-[11px] font-mono text-textmuted">
        <span>{store.id}</span>
        {store.vendorNickname && <span>[{store.vendorNickname}]</span>}
        {entry.window && <span className="text-textprimary">{entry.window}</span>}
      </div>
      {entry.reason && (
        <p className={`text-xs text-textmuted mt-2 ${expanded ? "" : "truncate"}`}>
          {entry.reason}
        </p>
      )}
    </button>
  );
}
