"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { STORES, StoreRef } from "@/lib/stores";

interface Props {
  search: string;
  onSearch: (v: string) => void;
  // Optional: when provided, clicking a search suggestion opens that store's
  // week view instead of just filtering the list down to it.
  onSelectStore?: (storeId: string) => void;
}

export default function StoreSearch({ search, onSearch, onSelectStore }: Props) {
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

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function selectSuggestion(store: StoreRef) {
    if (onSelectStore) {
      onSelectStore(store.id);
      onSearch("");
    } else {
      onSearch(store.name);
    }
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
      selectSuggestion(suggestions[activeIndex]);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setActiveIndex(-1);
    }
  }

  return (
    <div ref={wrapRef} className="relative mb-4">
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
        className="bg-panel border border-line rounded-lg px-4 py-2.5 sm:py-3 text-sm sm:text-base placeholder:text-textmuted focus:outline-none focus:ring-1 focus:ring-live w-full"
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-20 mt-1 w-full bg-panel border border-line rounded-lg overflow-hidden shadow-lg">
          {suggestions.map((s, i) => (
            <li key={s.id}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => selectSuggestion(s)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  i === activeIndex ? "bg-live/15 text-live" : "text-textprimary hover:bg-live/10"
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
  );
}
