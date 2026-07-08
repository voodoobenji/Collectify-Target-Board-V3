"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { signOut } from "next-auth/react";
import { STORES, REGION_ORDER, type StoreRef } from "@/lib/stores";
import type { Board, BoardEntry, WeekdayTemplate } from "@/lib/types";
import { WEEKDAYS } from "@/lib/types";
import StoreRow from "./StoreRow";
import Filters from "./Filters";
import StoreWeekModal from "./StoreWeekModal";
import LegendModal from "./LegendModal";
import { parseWindowRanges, overlapsWindow, formatMinutes } from "@/lib/timeWindow";

type SortMode = "priority" | "time" | "nearMe";

function haversineMiles(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = (d: number) => (d * Math.PI) / 180;
  const R = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
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
  vendorMap,
}: {
  initialBoard: Board;
  isAdmin: boolean;
  username: string;
  vendorMap: Record<string, string>;
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

  const weekdayDateLabels = useMemo(() => {
    const [y, m, d] = actualToday.split("-").map(Number);
    const anchor = new Date(y, m - 1, d, 12);
    const dow = anchor.getDay(); // 0=Sun..6=Sat
    const mondayOffset = (dow + 6) % 7;
    const monday = new Date(anchor);
    monday.setDate(anchor.getDate() - mondayOffset);

    function ordinal(n: number): string {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return `${n}${s[(v - 20) % 10] || s[v] || s[0]}`;
    }

    const labels: Record<string, string> = {};
    WEEKDAYS.forEach((day, i) => {
      const dt = new Date(monday);
      dt.setDate(monday.getDate() + i);
      labels[day] = ordinal(dt.getDate());
    });
    return labels;
  }, [actualToday]);
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
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [showLegend, setShowLegend] = useState(false);
  const [rightNowOnly, setRightNowOnly] = useState(false);
  const [sortMode, setSortMode] = useState<SortMode>("priority");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  function requestNearMe() {
    if (sortMode === "nearMe") {
      setSortMode("priority");
      return;
    }
    if (userLocation) {
      setSortMode("nearMe");
      return;
    }
    if (!navigator.geolocation) {
      setLocationError("Location isn't available on this device.");
      return;
    }
    setLocationLoading(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setSortMode("nearMe");
        setLocationLoading(false);
      },
      () => {
        setLocationError("Couldn't get your location. Check permissions and try again.");
        setLocationLoading(false);
      },
      { enableHighAccuracy: false, timeout: 8000 }
    );
  }
  const [nowMinutes, setNowMinutes] = useState<number>(() => {
    const d = new Date();
    return d.getHours() * 60 + d.getMinutes();
  });
  useEffect(() => {
    const id = setInterval(() => {
      const d = new Date();
      setNowMinutes(d.getHours() * 60 + d.getMinutes());
    }, 60000);
    return () => clearInterval(id);
  }, []);
  const boardRef = useRef(board);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [currentRegion, setCurrentRegion] = useState<string | null>(null);
  const scrollTickingRef = useRef(false);
  boardRef.current = board;

  const isLiveView = selectedDay === todayWeekday;

  useEffect(() => {
    fetch("/api/favorites", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.favorites) setFavorites(new Set(data.favorites));
      })
      .catch(() => {});
  }, []);

  async function handleToggleFavorite(storeId: string) {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(storeId)) next.delete(storeId);
      else next.add(storeId);
      return next;
    });
    try {
      const res = await fetch("/api/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeId }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.favorites) setFavorites(new Set(data.favorites));
      }
    } catch {
    }
  }

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
    const byRegion = new Map<string, { store: StoreRef; entry: BoardEntry; distance?: number }[]>();

    const rightNowActive = rightNowOnly && isLiveView;
    const targetStart = nowMinutes - 120;
    const targetEnd = nowMinutes + 120;

    const matched: { store: StoreRef; entry: BoardEntry; distance?: number }[] = [];

    for (const store of STORES) {
      const entry = activeEntries[store.id];
      if (!entry) continue;
      if (favoritesOnly && !favorites.has(store.id)) continue;
      if (q && !store.name.toLowerCase().includes(q)) continue;
      if (chanceFilter !== "all" && entry.chance !== chanceFilter) continue;
      if (isLiveView && statusFilter !== "all" && entry.status !== statusFilter) continue;
      if (rightNowActive) {
        const ranges = parseWindowRanges(entry.window);
        if (ranges.length === 0) continue;
        if (!overlapsWindow(ranges, targetStart, targetEnd)) continue;
      }
      matched.push({ store, entry });
    }

    if (sortMode === "nearMe" && userLocation) {
      const withDistance = matched
        .filter((m) => m.store.lat != null && m.store.lng != null)
        .map((m) => ({
          ...m,
          distance: haversineMiles(userLocation.lat, userLocation.lng, m.store.lat!, m.store.lng!),
        }));
      withDistance.sort((a, b) => (a.distance ?? 0) - (b.distance ?? 0));
      return withDistance.length > 0
        ? [{ region: "__nearby__", items: withDistance }]
        : [];
    }

    for (const item of matched) {
      const list = byRegion.get(item.store.region) ?? [];
      list.push(item);
      byRegion.set(item.store.region, list);
    }

    for (const list of byRegion.values()) {
      if (sortMode === "time") {
        list.sort((a, b) => {
          const aRanges = parseWindowRanges(a.entry.window);
          const bRanges = parseWindowRanges(b.entry.window);
          const aStart = aRanges.length > 0 ? Math.min(...aRanges.map((r) => r.startMin)) : 9999;
          const bStart = bRanges.length > 0 ? Math.min(...bRanges.map((r) => r.startMin)) : 9999;
          if (aStart !== bStart) return aStart - bStart;
          return a.store.name.localeCompare(b.store.name);
        });
      } else {
        list.sort((a, b) => {
          const r = priorityRank(a.entry.chance) - priorityRank(b.entry.chance);
          if (r !== 0) return r;
          return a.store.name.localeCompare(b.store.name);
        });
      }
    }

    const orderedRegions = [...REGION_ORDER, ...[...byRegion.keys()].filter((r) => !REGION_ORDER.includes(r))];
    return orderedRegions
      .filter((r) => byRegion.has(r))
      .map((r) => ({ region: r, items: byRegion.get(r)! }));
  }, [activeEntries, search, chanceFilter, statusFilter, isLiveView, favoritesOnly, favorites, rightNowOnly, nowMinutes, sortMode, userLocation]);

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

      {boardIsStale && isAdmin && (
        <div className="bg-high/10 border border-high/50 rounded-lg px-4 py-3 mb-4 text-xs text-high">
          This board is still showing {DAY_LABELS[boardWeekday] ?? board.date} ({board.date}), but today is{" "}
          {DAY_LABELS[todayWeekday] ?? actualToday}. Click <strong>Start New Day</strong> below to roll it forward.
        </div>
      )}

      <div className="relative flex flex-col items-center text-center mb-4 lg:mb-8 lg:pt-2">
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="absolute right-0 top-1 text-xs lg:text-sm text-textmuted hover:text-textprimary"
        >
          Sign out
        </button>
        <div className="flex items-center gap-2.5 lg:gap-4">
          <img
            src="/COLLECTIFY_LOGO.png"
            alt="Collectify"
            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 rounded-full border border-gold/60 shrink-0"
            style={{ boxShadow: "0 0 16px rgba(201,168,118,0.4)" }}
          />
          <span className="font-brand uppercase text-2xl sm:text-3xl lg:text-5xl font-extrabold tracking-wide text-textprimary leading-none">
            Collectify
          </span>
          <span className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-live pulse shrink-0" />
        </div>
        <span className="font-mono text-[10px] lg:text-xs uppercase tracking-[0.35em] text-gold mt-1.5 lg:mt-2.5">
          Target Guide
        </span>
        <p className="text-textmuted text-[11px] lg:text-xs mt-1 lg:mt-1.5 font-mono">
          {board.date} &middot; updated {timeAgo(lastUpdated)}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 mb-4">
        <button
          onClick={() => setFavoritesOnly((v) => !v)}
          className={`flex-1 text-[11px] sm:text-xs font-mono uppercase tracking-wide px-2.5 py-1.5 sm:py-2 rounded-full border transition-colors ${
            favoritesOnly
              ? "border-gold text-gold bg-gold/10"
              : "border-line text-textmuted hover:text-gold hover:border-gold"
          }`}
        >
          &#9733; Favorites{favorites.size > 0 ? ` (${favorites.size})` : ""}
        </button>
        {isLiveView && (
          <button
            onClick={() => setRightNowOnly((v) => !v)}
            className={`flex-1 text-[11px] sm:text-xs font-mono uppercase tracking-wide px-2.5 py-1.5 sm:py-2 rounded-full border transition-colors ${
              rightNowOnly
                ? "border-live text-live bg-live/10"
                : "border-line text-textmuted hover:text-live hover:border-live"
            }`}
          >
            &#128336; Right Now
          </button>
        )}
        <button
          onClick={() => setShowLegend(true)}
          className="shrink-0 h-7 w-7 sm:h-9 sm:w-9 rounded-full border border-line text-textmuted hover:text-live hover:border-live transition-colors text-xs sm:text-sm font-mono"
          aria-label="What do the tags mean?"
        >
          ?
        </button>
      </div>

      <div className="mb-4">
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-gold mb-2">Sort</div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSortMode("priority")}
            className={`flex-1 text-[11px] sm:text-xs font-mono uppercase tracking-wide px-2.5 py-1.5 sm:py-2 rounded-full border transition-colors ${
              sortMode === "priority"
                ? "bg-live/15 border-live text-live"
                : "bg-panel border-line text-textmuted hover:text-textprimary"
            }`}
          >
            Priority
          </button>
          <button
            onClick={() => setSortMode("time")}
            className={`flex-1 text-[11px] sm:text-xs font-mono uppercase tracking-wide px-2.5 py-1.5 sm:py-2 rounded-full border transition-colors ${
              sortMode === "time"
                ? "bg-live/15 border-live text-live"
                : "bg-panel border-line text-textmuted hover:text-textprimary"
            }`}
          >
            Time
          </button>
          <button
            onClick={requestNearMe}
            disabled={locationLoading}
            className={`flex-1 text-[11px] sm:text-xs font-mono uppercase tracking-wide px-2.5 py-1.5 sm:py-2 rounded-full border transition-colors disabled:opacity-50 ${
              sortMode === "nearMe"
                ? "bg-live/15 border-live text-live"
                : "bg-panel border-line text-textmuted hover:text-textprimary"
            }`}
          >
            {locationLoading ? "Locating..." : "\u{1F4CD} Near Me"}
          </button>
        </div>
        {locationError && <p className="text-high text-[11px] mt-1.5">{locationError}</p>}
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

      <div className="sticky top-0 z-20 bg-ink pt-3 pb-3 mb-3 -mx-4 px-4 sm:-mx-8 sm:px-8 border-b border-line">
        <div className="flex gap-1.5 sm:gap-2 mb-3">
          {WEEKDAYS.map((day) => {
            const active = selectedDay === day;
            const isToday = day === todayWeekday;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-1 flex flex-col items-center px-1.5 sm:px-3 py-2 sm:py-2.5 rounded-lg border text-xs sm:text-sm font-mono uppercase tracking-wide transition-colors ${
                  active
                    ? "bg-live/15 border-live text-live"
                    : "bg-panel border-line text-textmuted hover:text-textprimary"
                }`}
              >
                {DAY_LABELS[day].slice(0, 3)}
                <span className="text-[9px] mt-0.5 opacity-70">
                  {isToday ? "Today" : weekdayDateLabels[day]}
                </span>
              </button>
            );
          })}
        </div>

        {sortMode !== "nearMe" && grouped.length > 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {grouped.map(({ region, items }) => (
              <button
                key={region}
                onClick={() => jumpToRegion(region)}
                className={`text-[11px] font-mono uppercase tracking-wide px-2.5 py-1.5 rounded-full border transition-colors ${
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

      {rightNowOnly && isLiveView && (
        <div className="bg-live/10 border border-live/50 rounded-lg px-4 py-3 mb-6 text-xs text-textmuted">
          Showing guide windows between <strong className="text-live">{formatMinutes(nowMinutes - 120)}</strong> and{" "}
          <strong className="text-live">{formatMinutes(nowMinutes + 120)}</strong>. If a store's window
          is earlier in that range, check whether it's already been marked <strong>Hit</strong> or{" "}
          <strong>Overdue</strong> before heading out.
        </div>
      )}

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

      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-high/70 flex items-center justify-center bg-panel card-fill">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-high">{stats.high}</span>
          </div>
          <div className="text-[10px] uppercase tracking-wide text-textmuted mt-2 text-center">High Priority</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-live/70 flex items-center justify-center bg-panel card-fill">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-live">
              {isLiveView ? stats.hit : "\u2014"}
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-wide text-textmuted mt-2 text-center">Confirmed Hit</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full border-2 border-gold/50 flex items-center justify-center bg-panel card-fill">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-textmuted">
              {isLiveView ? stats.pending : "\u2014"}
            </span>
          </div>
          <div className="text-[10px] uppercase tracking-wide text-textmuted mt-2 text-center">Pending</div>
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
          const label = region === "__nearby__" ? "Nearest to You" : (items[0]?.store.regionLabel ?? region);
          const collapsed = region === "__nearby__" ? false : collapsedRegions.has(region);
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
                className="w-full flex items-center justify-between mb-3 group"
              >
                <h2 className="font-serif text-base sm:text-lg text-textprimary/90 group-hover:text-textprimary transition-colors">
                  {label}
                </h2>
                <span className="font-mono text-[11px] text-textmuted">
                  {items.length} {collapsed ? "\u25b8" : "\u25be"}
                </span>
              </button>
              <div className="h-px gold-rule mb-3 -mt-2" />
              {!collapsed && (
                <div className="grid gap-2 sm:grid-cols-2">
                  {items.map(({ store, entry, distance }) => (
                    <StoreRow
                      key={store.id}
                      store={store}
                      entry={entry}
                      editMode={isAdmin && editMode}
                      onPatch={handleEntryPatch}
                      showStatus={isLiveView}
                      onViewWeek={(id) => setWeekModalStoreId(id)}
                      vendorNickname={vendorMap[store.id]}
                      isFavorite={favorites.has(store.id)}
                      onToggleFavorite={handleToggleFavorite}
                      currentUsername={username}
                      distanceMiles={distance}
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

      {showLegend && <LegendModal onClose={() => setShowLegend(false)} isAdmin={isAdmin} />}

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
                sourceType: null,
                confirmedCount: 0,
                flagged: null,
                status: "pending",
                updatedAt: null,
                updatedBy: null,
              }
            }
            onClose={() => setWeekModalStoreId(null)}
            canEdit={isAdmin && editMode}
            onPatchToday={handlePatch}
          />
        );
      })()}
    </main>
  );
}
