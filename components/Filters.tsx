"use client";

type ChanceFilter = "all" | "High" | "Medium" | "Low";
type StatusFilter = "all" | "pending" | "hit" | "no_hit";

interface Props {
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
  chanceFilter,
  onChanceFilter,
  statusFilter,
  onStatusFilter,
  showStatusFilter = true,
}: Props) {
  return (
    <div className="flex flex-col gap-4 mb-6">
      <div>
        <div className="text-sm font-mono uppercase tracking-[0.2em] text-gold mb-2">
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
          <div className="text-sm font-mono uppercase tracking-[0.2em] text-gold mb-2">
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
