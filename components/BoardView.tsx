"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { STORES, REGION_ORDER, type StoreRef } from "@/lib/stores";
import type { Board, BoardEntry, WeekdayTemplate } from "@/lib/types";
import { WEEKDAYS } from "@/lib/types";
import StoreRow from "./StoreRow";
import Filters from "./Filters";
import StoreWeekModal from "./StoreWeekModal";
import Watermark from "./Watermark";
import { SEED_TEMPLATES } from "@/lib/seed-templates";

type ChanceFilter = "all" | "High" | "Medium" | "Low";
type StatusFilter = "all" | "pending" | "hit" | "no_hit";

const PRIORITY_RANK: Record<string, number> = { High: 0, Medium: 1, Low: 2 };
const DAY_LABELS: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
};

const REGION_SHORT: Record<string, string> = {
  SFV: "SFV",
  "805.0": "805",
  "SGV/IE": "SGV/IE",
  LOSANGELES: "LA",
  CULVERINGSB: "Culver/SB",
  SOUTHOFLA: "SE LA/LB",
  OC: "OC",
  SD: "SD",
};

function priorityRank(chance: BoardEntry["chance"]) {
  return chance ? PRIORITY_RANK[chance] : 3;
}

function timeAgo(iso: string | null): string {
  if (!iso) return "never";
  const diffMs = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function weekdayFromDateStr(dateStr: string): string {
  return new Date(`${dateStr}T12:00:00`)
    .toLocaleDateString("en-US", { weekday: "long" })
    .toLowerCase();
}

export default function BoardView({
  initialBoard,
  isAdmin,
  username,
}: {
  initialBoard: Board;
  isAdmin: boolean;
  username: string;
}) {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [actualToday, setActualToday] = useState<string>(() =>
    new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" })
  );
  useEffect(() => {
    const id = setInterval(() => {
      setActualToday(new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" }));
    }, 60000);
    return () => clearInterval(id);
  }, []);
  const todayWeekday = useMemo(() => weekdayFromDateStr(actualToday), [actualToday]);
  const boardWeekday = useMemo(() => weekdayFromDateStr(board.date), [board.date]);
  const boardIsStale = board.date !== actualToday;
  const [selectedDay, setSelectedDay] = useState<string>(todayWeekday);
  const [template, setTemplate] = useState<WeekdayTemplate | null>(null);
  const [templateLoading, setTemplateLoading] = useState(false);

  const [editMode, setEditMode] = useState(false);
  const [search, setSearch] = useState("");
  const [chanceFilter, setChanceFilter] = useState<ChanceFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [collapsedRegions, setCollapsedRegions] = useState<Set<string>>(new Set());
  const [startingNewDay, setStartingNewDay] = useState(false);
  const [importing, setImporting] = useState(false);
  const [weekModalStoreId, setWeekModalStoreId] = useState<string | null>(null);
  const boardRef = useRef(board);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [currentRegion, setCurrentRegion] = useState<string | null>(null);
  const scrollTickingRef = useRef(false);
  boardRef.current = board;

  const isLiveView = selectedDay === todayWeekday;

  // Poll for live updates from other viewers/admin (only matters on today's tab)
  useEffect(() => {
    const id = setInterval(async () => {
      try {
        const res = await fetch("/api/board", { cache: "no-store" });
        if (!res.ok) return;
        const fresh: Board = await res.json();
        if (fresh.version !== boardRef.current.version) {
          setBoard(fresh);
        }
      } catch {
        // silent - will retry next interval
      }
    }, 12000);
    return () => clearInterval(id);
  }, []);

  // Fetch the typical pattern whenever a non-today weekday tab is selected
  useEffect(() => {
    if (isLiveView) {
      setTemplate(null);
      return;
    }
    let cancelled = false;
    setTemplateLoading(true);
    fetch(`/api/template/${selectedDay}`, { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!cancelled) setTemplate(data?.template ?? null);
      })
      .catch(() => {
        if (!cancelled) setTemplate(null);
      })
      .finally(() => {
        if (!cancelled) setTemplateLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedDay, isLiveView]);

  const lastUpdated = useMemo(() => {
    let latest: string | null = null;
    for (const e of Object.values(board.entries)) {
      if (e.updatedAt && (!latest || e.updatedAt > latest)) latest = e.updatedAt;
    }
    return latest;
  }, [board]);

  async function handlePatch(storeId: string, patch: Partial<BoardEntry>) {
    setBoard((prev) => ({
      ...prev,
      entries: {
        ...prev.entries,
        [storeId]: { ...prev.entries[storeId], ...patch, updatedAt: new Date().toISOString() },
      },
    }));
    try {
      const res = await fetch("/api/board", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeId, patch }),
      });
      if (res.ok) {
        const fresh: Board = await res.json();
        setBoard(fresh);
      }
    } catch {
      // optimistic update stays; next poll will reconcile
    }
  }

  async function handleTemplatePatch(storeId: string, patch: Partial<BoardEntry>) {
    setTemplate((prev) => {
      const prevEntries = prev?.entries ?? {};
      const current = prevEntries[storeId] ?? {
        chance: null,
        window: "",
        reason: "",
        vendorNotes: "",
        randomNotes: "",
        updatedAt: null,
      };
      return {
        weekday: selectedDay,
        updatedAt: new Date().toISOString(),
        entries: {
          ...prevEntries,
          [storeId]: { ...current, ...patch, updatedAt: new Date().toISOString() },
        },
      };
    });
    try {
      const res = await fetch(`/api/template/${selectedDay}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeId, patch }),
      });
      if (res.ok) {
        const fresh = await res.json();
        setTemplate(fresh);
      }
    } catch {
    }
  }

  function handleEntryPatch(storeId: string, patch: Partial<BoardEntry>) {
    if (isLiveView) {
      handlePatch(storeId, patch);
    } else {
      handleTemplatePatch(storeId, patch);
    }
  }

  async function handleImportSeed() {
    if (
      !confirm(
        "Import historical patterns from your past guides? This fills in the typical pattern for each weekday. Your own guides take priority over any filled-in partner data."
      )
    ) {
      return;
    }
    setImporting(true);
    try {
      const res = await fetch("/api/admin/import-templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(SEED_TEMPLATES),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.board) setBoard(data.board);
      }
      if (!isLiveView) {
        const tRes = await fetch(`/api/template/${selectedDay}`, { cache: "no-store" });
        const tData = tRes.ok ? await tRes.json() : null;
        setTemplate(tData?.template ?? null);
      }
      alert("Historical patterns imported.");
    } finally {
      setImporting(false);
    }
  }

  async function handleNewDay() {
    if (
      !confirm(
        "Start a new day? Today's board will be saved as the typical pattern for its weekday, and a fresh board will be created using the incoming weekday's typical pattern as a starting point."
      )
    ) {
      return;
    }
    setStartingNewDay(true);
    try {
      const res = await fetch("/api/board/new-day", { method: "POST" });
      if (res.ok) {
        const fresh: Board = await res.json();
        setBoard(fresh);
        setSelectedDay(weekdayFromDateStr(fresh.date));
      }
    } finally {
      setStartingNewDay(false);
    }
  }

  // Unified entry map: live board entries, or read-only entries derived from the template
  const activeEntries: Record<string, BoardEntry> = useMemo(() => {
    if (isLiveView) return board.entries;
    const map: Record<string, BoardEntry> = {};
    for (const s of STORES) {
      const t = template?.entries[s.id];
      map[s.id] = {
        chance: t?.chance ?? null,
        window: t?.window ?? "",
        reason: t?.reason ?? "",
        status: "pending",
        updatedAt: t?.updatedAt ?? null,
        updatedBy: null,
      };
    }
    return map;
  }, [isLiveView, board.entries, template]);

  const grouped = useMemo(() => {
    const q = search.trim().toLowerCase();
    const byRegion = new Map<string, { store: StoreRef; entry: BoardEntry }[]>();

    for (const store of STORES) {
      const entry = activeEntries[store.id];
      if (!entry) continue;
      if (q && !store.name.toLowerCase().includes(q)) continue;
      if (chanceFilter !== "all" && entry.chance !== chanceFilter) continue;
      if (isLiveView && statusFilter !== "all" && entry.status !== statusFilter) continue;

      const list = byRegion.get(store.region) ?? [];
      list.push({ store, entry });
      byRegion.set(store.region, list);
    }

    for (const list of byRegion.values()) {
      list.sort((a, b) => {
        const r = priorityRank(a.entry.chance) - priorityRank(b.entry.chance);
        if (r !== 0) return r;
        return a.store.name.localeCompare(b.store.name);
      });
    }

    const orderedRegions = [...REGION_ORDER, ...[...byRegion.keys()].filter((r) => !REGION_ORDER.includes(r))];
    return orderedRegions
      .filter((r) => byRegion.has(r))
      .map((r) => ({ region: r, items: byRegion.get(r)! }));
  }, [activeEntries, search, chanceFilter, statusFilter, isLiveView]);

  useEffect(() => {
    function handleScroll() {
      if (scrollTickingRef.current) return;
      scrollTickingRef.current = true;
      requestAnimationFrame(() => {
        const threshold = 190;
        let active: string | null = null;
        for (const [region, el] of Object.entries(sectionRefs.current)) {
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top <= threshold) {
            active = region;
          }
        }
        setCurrentRegion(active);
        scrollTickingRef.current = false;
      });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [grouped]);

  const stats = useMemo(() => {
    const entries = Object.values(activeEntries);
    return {
      high: entries.filter((e) => e.chance === "High").length,
      hit: entries.filter((e) => e.status === "hit").length,
      pending: entries.filter((e) => e.status === "pending").length,
    };
  }, [activeEntries]);

  function toggleRegion(region: string) {
    setCollapsedRegions((prev) => {
      const next = new Set(prev);
      if (next.has(region)) next.delete(region);
      else next.add(region);
      return next;
    });
  }

  function jumpToRegion(region: string) {
    setCollapsedRegions((prev) => {
      if (!prev.has(region)) return prev;
      const next = new Set(prev);
      next.delete(region);
      return next;
    });
    requestAnimationFrame(() => {
      sectionRefs.current[region]?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <main className="min-h-screen px-3 py-4 sm:px-8 sm:py-10 max-w-4xl mx-auto">
      <Watermark username={username} date={board.date} />
      <header className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-2.5">
          <img
            src="/COLLECTIFY_LOGO.png"
            alt="Collectify"
            className="h-9 w-9 sm:h-11 sm:w-11 rounded-full border border-gold/50 shrink-0"
          />
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-live pulse" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-live">Live</span>
            </div>
            <h1 className="font-display uppercase tracking-wide text-2xl sm:text-4xl font-semibold leading-tight">
              Collectify Target Board
            </h1>
            <p className="text-textmuted text-xs mt-2 font-mono">
              {board.date} &middot; updated {timeAgo(lastUpdated)}
            </p>
          </div>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="text-xs text-textmuted hover:text-textprimary shrink-0 mt-1"
        >
          Sign out
        </button>
      </header>

      {boardIsStale && isAdmin && (
        <div className="bg-high/10 border border-high/50 rounded-lg px-4 py-3 mb-4 text-xs text-high">
          This board is still showing {DAY_LABELS[boardWeekday] ?? board.date} ({board.date}), but today is{" "}
          {DAY_LABELS[todayWeekday] ?? actualToday}. Click <strong>Start New Day</strong> below to roll it forward.
        </div>
      )}

      <div className="sticky top-0 z-20 bg-ink pt-1 pb-3 -mt-1 -mx-4 px-4 sm:-mx-8 sm:px-8 border-b border-line">
        <div className="flex gap-1.5 mb-3 overflow-x-auto">
          {WEEKDAYS.map((day) => {
            const active = selectedDay === day;
            const isToday = day === todayWeekday;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`shrink-0 flex flex-col items-center px-3 py-2 rounded-lg border text-xs font-mono uppercase tracking-wide transition-colors ${
                  active
                    ? "bg-live/15 border-live text-live"
                    : "bg-panel border-line text-textmuted hover:text-textprimary"
                }`}
              >
                {DAY_LABELS[day].slice(0, 3)}
                {isToday && <span className="text-[9px] mt-0.5 opacity-70">Today</span>}
              </button>
            );
          })}
        </div>

        <Filters
          search={search}
          onSearch={setSearch}
          chanceFilter={chanceFilter}
          onChanceFilter={setChanceFilter}
          statusFilter={statusFilter}
          onStatusFilter={setStatusFilter}
          showStatusFilter={isLiveView}
        />

        {grouped.length > 1 && (
          <div className="flex gap-1.5 mt-3 overflow-x-auto pb-1">
            {grouped.map(({ region, items }) => (
              <button
                key={region}
                onClick={() => jumpToRegion(region)}
                className={`shrink-0 text-[11px] font-mono uppercase tracking-wide px-2.5 py-1 rounded-full border transition-colors ${
                  currentRegion === region
                    ? "border-live text-live bg-live/10"
                    : "border-line text-textmuted hover:text-live hover:border-live"
                }`}
              >
                {REGION_SHORT[region] ?? region} <span className="text-textmuted/60">({items.length})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {!isLiveView && (
        <div className="bg-panel2 border border-line rounded-lg px-4 py-3 mb-6 text-xs text-textmuted">
          {templateLoading ? (
            "Loading typical pattern..."
          ) : template ? (
            <>
              Typical <span className="text-textprimary">{DAY_LABELS[selectedDay]}</span> pattern,
              based on the last {DAY_LABELS[selectedDay]} guide (updated {timeAgo(template.updatedAt)}).
              This isn&apos;t live &mdash; it&apos;s a preview of what usually happens.
            </>
          ) : (
            <>
              No typical pattern saved for {DAY_LABELS[selectedDay]} yet. Check back after the next{" "}
              {DAY_LABELS[selectedDay]} guide has run.
            </>
          )}
        </div>
      )}

      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="bg-panel border border-line rounded-lg px-3 py-2.5 text-center">
          <div className="font-display text-2xl leading-none text-high">{stats.high}</div>
          <div className="text-[10px] uppercase tracking-wide text-textmuted mt-1">High Priority</div>
        </div>
        <div className="bg-panel border border-line rounded-lg px-3 py-2.5 text-center">
          <div className="font-display text-2xl leading-none text-live">
            {isLiveView ? stats.hit : "\u2014"}
          </div>
          <div className="text-[10px] uppercase tracking-wide text-textmuted mt-1">Confirmed Hit</div>
        </div>
        <div className="bg-panel border border-line rounded-lg px-3 py-2.5 text-center">
          <div className="font-display text-2xl leading-none text-textmuted">
            {isLiveView ? stats.pending : "\u2014"}
          </div>
          <div className="text-[10px] uppercase tracking-wide text-textmuted mt-1">Pending</div>
        </div>
      </div>

      {isAdmin && (
        <div className="flex flex-col gap-3 mb-6 bg-panel2 border border-line rounded-lg px-4 py-3">
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={editMode}
              onChange={(e) => setEditMode(e.target.checked)}
              className="accent-live"
            />
            Edit mode {!isLiveView && <span className="text-textmuted">({DAY_LABELS[selectedDay]})</span>}
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleImportSeed}
              disabled={importing}
              className="flex-1 text-center whitespace-nowrap text-xs font-mono uppercase tracking-wide px-3 py-2 rounded-lg border border-line text-textmuted hover:text-textprimary transition-colors disabled:opacity-50"
            >
              {importing ? "Importing..." : "Import Patterns"}
            </button>
            <button
              onClick={handleNewDay}
              disabled={startingNewDay}
              className="flex-1 text-center whitespace-nowrap text-xs font-mono uppercase tracking-wide px-3 py-2 rounded-lg border border-gold/50 text-gold hover:bg-gold/10 transition-colors disabled:opacity-50"
            >
              {startingNewDay ? "Starting..." : "Start New Day"}
            </button>
          </div>
        </div>
      )}

      <div className="space-y-6 mt-6">
        {!isLiveView && templateLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-20 rounded-lg bg-panel border border-line animate-pulse" />
            ))}
          </div>
        ) : (
        grouped.map(({ region, items }) => {
          const label = items[0]?.store.regionLabel ?? region;
          const collapsed = collapsedRegions.has(region);
          return (
            <section
              key={region}
              ref={(el) => {
                sectionRefs.current[region] = el;
              }}
              className="scroll-mt-[190px]"
            >
              <button
                onClick={() => toggleRegion(region)}
                className="w-full flex items-center justify-between mb-2 group"
              >
                <h2 className="font-display uppercase tracking-wide text-sm text-textmuted group-hover:text-textprimary transition-colors">
                  {label}
                </h2>
                <span className="font-mono text-[11px] text-textmuted">
                  {items.length} {collapsed ? "\u25b8" : "\u25be"}
                </span>
              </button>
              {!collapsed && (
                <div className="grid gap-2 sm:grid-cols-2">
                  {items.map(({ store, entry }) => (
                    <StoreRow
                      key={store.id}
                      store={store}
                      entry={entry}
                      editMode={isAdmin && editMode}
                      onPatch={handleEntryPatch}
                      showStatus={isLiveView}
                      onViewWeek={(id) => setWeekModalStoreId(id)}
                    />
                  ))}
                </div>
              )}
            </section>
          );
        })
        )}
        {!(!isLiveView && templateLoading) && grouped.length === 0 && (
          <p className="text-center text-textmuted text-sm py-12">
            No stores match your filters.
          </p>
        )}
      </div>

      {weekModalStoreId && (() => {
        const s = STORES.find((st) => st.id === weekModalStoreId);
        if (!s) return null;
        return (
          <StoreWeekModal
            store={s}
            todayWeekday={todayWeekday}
            todayEntry={
              board.entries[s.id] ?? {
                chance: null,
                window: "",
                reason: "",
                vendorNotes: "",
                randomNotes: "",
                status: "pending",
                updatedAt: null,
                updatedBy: null,
              }
            }
            onClose={() => setWeekModalStoreId(null)}
          />
        );
      })()}
    </main>
  );
}
