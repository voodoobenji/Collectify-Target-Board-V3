"use client";

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
  { value: "pending", label: "Pending" },
  { value: "hit", label: "Hit" },
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
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search a store..."
        className="bg-panel border border-line rounded-lg px-4 py-2 text-sm placeholder:text-textmuted focus:outline-none focus:ring-1 focus:ring-live w-full sm:w-64"
      />
      <div className="flex flex-wrap gap-2">
        {chanceOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChanceFilter(opt.value)}
            className={`text-xs font-mono uppercase tracking-wide px-3 py-1.5 rounded-full border transition-colors ${
              chanceFilter === opt.value
                ? "bg-live/15 border-live text-live"
                : "bg-panel border-line text-textmuted hover:text-textprimary"
            }`}
          >
            {opt.label}
          </button>
        ))}
        {showStatusFilter && (
          <>
            <span className="w-px bg-line mx-1 hidden sm:block" />
            {statusOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => onStatusFilter(opt.value)}
                className={`text-xs font-mono uppercase tracking-wide px-3 py-1.5 rounded-full border transition-colors ${
                  statusFilter === opt.value
                    ? "bg-live/15 border-live text-live"
                    : "bg-panel border-line text-textmuted hover:text-textprimary"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
