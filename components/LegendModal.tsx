"use client";

export default function LegendModal({ onClose }: { onClose: () => void }) {
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
          <h2 className="font-serif text-xl font-semibold text-textprimary">What the tags mean</h2>
          <button onClick={onClose} className="text-textmuted hover:text-textprimary text-sm">
            Close
          </button>
        </div>

        <div className="space-y-4 text-sm text-textmuted">
          <div>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-high text-high bg-high/10">
              High
            </span>
            <p className="mt-1.5">
              Strong, recent pattern. Hits often on this weekday and it&apos;s shown up within the
              last couple weeks.
            </p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-medium text-medium bg-medium/10">
              Medium
            </span>
            <p className="mt-1.5">Some real signal, but mixed, occasional, or a bit dated.</p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-low text-low bg-low/10">
              Low
            </span>
            <p className="mt-1.5">
              We have recent information, and it points to this one probably not hitting.
            </p>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-line text-textmuted">
              No Data
            </span>
            <p className="mt-1.5">
              Nothing recent enough to go on &mdash; last real mention was 6+ weeks ago, or it&apos;s
              never come up for this weekday. Not a prediction either way, just genuinely unknown.
            </p>
          </div>
          <div className="pt-2 border-t border-line">
            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-live text-live bg-live/10">
              &#10003; Confirmed
            </span>
            <p className="mt-1.5">
              An actual hit was reported in chat or a guide, not just predicted. This is stronger
              evidence than a prediction and can outrank hit-rate stats.
            </p>
          </div>
          <div>
            <span className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-line text-textmuted">
              Predicted
            </span>
            <p className="mt-1.5">
              Based on how often this store has come up in guides for this weekday &mdash; a
              prediction, not a confirmed outcome.
            </p>
          </div>
          <p className="text-xs pt-2 border-t border-line">
            Hit rate % = how many of the last several guides for this weekday mentioned this
            store, weighted so recent weeks count far more than older ones.
          </p>
        </div>
      </div>
    </div>
  );
}
