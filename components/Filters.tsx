"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { STORES } from "@/lib/stores";

type ChanceFilter = "all" | "High" | "Medium" | "Low";
type StatusFilter = "all" | "pending" | "hit" | "no_hit";

interface Props {
  search: string;
  onSearch: (v: string) => void;
  chanceFilter: ChanceFilter;
  onChanceFilter: (v: ChanceFilter) => void;
  statusFilter: StatusFilter;
  onStatusFilter: (v: StatusFilter) => void;
  showStatusFilter?: boolean;
}

const chanceOptions: { value: ChanceFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "High", label: "High" },
  { value: "Medium", label: "Medium" },
  { value: "Low", label: "Low" },
];

const statusOptions: { value: StatusFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "pending", label: "No Update/Hasn't Sold" },
  { value: "hit", label: "Sold" },
];

export default function Filters({
  search,
  onSearch,
  chanceFilter,
  onChanceFilter,
  statusFilter,
  onStatusFilter,
  showStatusFilter = true,
}: Props) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return [];
    return STORES.filter((s) => s.name.toLowerCase().includes(q))
      .sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(q) ? 0 : 1;
        const bStarts = b.name.toLowerCase().startsWith(q) ? 0 : 1;
        if (aStarts !== bStarts) return aStarts - bStarts;
        return a.name.localeCompare(b.name);
      })
      .slice(0, 6);
  }, [search]);

  // Close the dropdown on outside click.
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function selectSuggestion(name: string) {
    onSearch(name);
    setShowSuggestions(false);
    setActiveIndex(-1);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (!showSuggestions || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      e.preventDefault();
      selectSuggestion(suggestions[activeIndex].name);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setActiveIndex(-1);
    }
  }

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div ref={wrapRef} className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            onSearch(e.target.value);
            setShowSuggestions(true);
            setActiveIndex(-1);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          placeholder="Search a store..."
          className="bg-panel border border-line rounded-lg px-4 py-2 sm:py-2.5 text-sm sm:text-base placeholder:text-textmuted focus:outline-none focus:ring-1 focus:ring-live w-full"
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute z-20 mt-1 w-full bg-panel border border-line rounded-lg overflow-hidden shadow-lg">
            {suggestions.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => selectSuggestion(s.name)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    i === activeIndex
                      ? "bg-live/15 text-live"
                      : "text-textprimary hover:bg-live/10"
                  }`}
                >
                  {s.name}
                  <span className="text-textmuted text-xs ml-2">{s.regionLabel}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <div className="text-xs font-mono uppercase tracking-[0.2em] text-gold mb-2">
          Priority
        </div>
        <div className="flex flex-wrap gap-2">
          {chanceOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onChanceFilter(opt.value)}
              className={`text-xs sm:text-sm font-mono uppercase tracking-wide px-3 py-1.5 sm:py-2 rounded-full border transition-colors ${
                chanceFilter === opt.value
                  ? "bg-live/15 border-live text-live"
                  : "bg-panel border-line text-textmuted hover:text-textprimary"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {showStatusFilter && (
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-gold mb-2">
            Status
          </div>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => onStatusFilter(opt.value)}
                className={`text-xs sm:text-sm font-mono uppercase tracking-wide px-3 py-1.5 sm:py-2 rounded-full border transition-colors ${
                  statusFilter === opt.value
                    ? "bg-live/15 border-live text-live"
                    : "bg-panel border-line text-textmuted hover:text-textprimary"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
