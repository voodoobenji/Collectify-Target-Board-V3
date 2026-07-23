"use client";

import { useEffect, useState } from "react";

interface ChangeEvent {
  id: string;
  storeId: string;
  storeName: string;
  changes: { field: string; from: unknown; to: unknown }[];
  by: string;
  at: string;
}

const fieldLabels: Record<string, string> = {
  chance: "Chance",
  window: "Window",
  reason: "Notes",
  sourceType: "Source",
  stockLocation: "Stock",
  itemLimit: "Limit",
  multiSeller: "Multi-seller",
  confirmedCount: "Past hits",
  status: "Status",
  flagged: "Overdue flag",
};

function timeAgo(iso: string): string {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function fmtVal(v: unknown): string {
  if (v === null || v === undefined || v === "") return "—";
  if (typeof v === "boolean") return v ? "on" : "off";
  if (typeof v === "object") {
    const o = v as { reason?: string };
    return o.reason ? `flagged (${o.reason})` : "flagged";
  }
  const s = String(v);
  return s.length > 40 ? s.slice(0, 40) + "…" : s;
}

export default function ChangeLogModal({
  onClose,
  onUndo,
}: {
  onClose: () => void;
  onUndo: (e: ChangeEvent) => Promise<void>;
}) {
  const [changes, setChanges] = useState<ChangeEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [undoing, setUndoing] = useState<string | null>(null);

  async function load() {
    try {
      const res = await fetch("/api/changes", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setChanges(data.changes ?? []);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleUndo(e: ChangeEvent) {
    setUndoing(e.id);
    try {
      await onUndo(e);
      await load();
    } finally {
      setUndoing(null);
    }
  }

  return (
    <div
      className="fixed inset-0 bg-ink/80 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div
        className="bg-panel card-fill border border-line rounded-lg max-w-md w-full max-h-[85vh] overflow-y-auto p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-xl text-textprimary">Recent changes</h2>
          <button onClick={onClose} className="text-textmuted hover:text-textprimary text-sm">
            Close
          </button>
        </div>

        {loading ? (
          <p className="text-textmuted text-sm">Loading…</p>
        ) : changes.length === 0 ? (
          <p className="text-textmuted text-sm">No changes recorded yet.</p>
        ) : (
          <div className="space-y-2.5">
            {changes.map((e) => (
              <div key={e.id} className="border border-line rounded px-3 py-2">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-sm text-textprimary font-medium">{e.storeName}</span>
                  <button
                    onClick={() => handleUndo(e)}
                    disabled={undoing === e.id}
                    className="text-[10px] font-mono uppercase tracking-wide px-2 py-1 rounded border border-line text-textmuted hover:text-high hover:border-high transition-colors disabled:opacity-50"
                  >
                    {undoing === e.id ? "…" : "Undo"}
                  </button>
                </div>
                <div className="space-y-0.5">
                  {e.changes.map((c, i) => (
                    <p key={i} className="text-xs text-textmuted">
                      <span className="text-textprimary">{fieldLabels[c.field] ?? c.field}:</span>{" "}
                      {fmtVal(c.from)} <span className="text-textmuted/60">→</span> {fmtVal(c.to)}
                    </p>
                  ))}
                </div>
                <p className="text-[10px] font-mono text-textmuted/60 mt-1">
                  {e.by} · {timeAgo(e.at)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
