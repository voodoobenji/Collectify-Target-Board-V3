"use client";

import { useState } from "react";

type Tab = "legend" | "howto";
type Audience = "member" | "admin";

export default function LegendModal({
  onClose,
  isAdmin = false,
}: {
  onClose: () => void;
  isAdmin?: boolean;
}) {
  const [tab, setTab] = useState<Tab>("howto");
  const [audience, setAudience] = useState<Audience>("member");

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
          <h2 className="font-serif text-xl font-semibold text-textprimary">
            {tab === "legend" ? "What the tags mean" : "How this works"}
          </h2>
          <button onClick={onClose} className="text-textmuted hover:text-textprimary text-sm">
            Close
          </button>
        </div>

        <div className="flex gap-1.5 mb-4">
          <button
            onClick={() => setTab("legend")}
            className={`text-[11px] font-mono uppercase tracking-wide px-3 py-1.5 rounded-full border flex-1 transition-colors ${
              tab === "legend" ? "border-live text-live bg-live/10" : "border-line text-textmuted"
            }`}
          >
            Legend
          </button>
          <button
            onClick={() => setTab("howto")}
            className={`text-[11px] font-mono uppercase tracking-wide px-3 py-1.5 rounded-full border flex-1 transition-colors ${
              tab === "howto" ? "border-live text-live bg-live/10" : "border-line text-textmuted"
            }`}
          >
            How It Works
          </button>
        </div>

        {tab === "legend" ? (
          <div className="space-y-4 text-sm text-textmuted">
            <p className="text-xs bg-panel2 border border-line rounded px-3 py-2">
              Two separate systems on this board: <span className="text-textprimary">No Update/Hasn't Sold vs. Sold</span> describes{" "}
              <span className="text-textprimary">today only</span>, set live by an admin. Everything
              below (High/Medium/Low/No Data, past hits, guide history) describes the store&apos;s{" "}
              <span className="text-textprimary">historical pattern</span> mined from months of chat &mdash;
              they&apos;re not the same thing.
            </p>

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
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-gold text-gold bg-gold/10">
                &#10003; Past Hits
              </span>
              <p className="mt-1.5">
                An actual hit was reported in chat or a guide, historically, on this weekday. Stronger
                evidence than a guess, but still about the past &mdash; not a claim about today.
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-line text-textmuted">
                Guide History
              </span>
              <p className="mt-1.5">
                Based on how often this store has come up in guides for this weekday &mdash; a
                pattern, not a confirmed outcome.
              </p>
            </div>

            <div className="pt-2 border-t border-line">
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-medium text-medium bg-medium/10">
                &#128681; Overdue
              </span>
              <p className="mt-1.5">
                An admin manually marked this store as having missed its typical restock window.
                Visible to everyone, stays up until an admin clears it &mdash; including across a new
                day starting. Doesn&apos;t change the chance level or any prediction data, it&apos;s
                just a heads-up.
              </p>
            </div>

            <div className="pt-2 border-t border-line">
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-live text-live bg-live/10">
                Sold
              </span>
              <p className="mt-1.5">
                An admin confirmed this store actually restocked <span className="text-textprimary">today</span>.
                Resets to No Update/Hasn&apos;t Sold every new day.
              </p>
            </div>

            <p className="text-xs pt-2 border-t border-line">
              Hit rate % = how many of the last several guides for this weekday mentioned this
              store, weighted so recent weeks count far more than older ones.
            </p>
          </div>
        ) : (
          <div>
            {isAdmin && (
              <div className="flex gap-1.5 mb-4">
                <button
                  onClick={() => setAudience("member")}
                  className={`text-[11px] font-mono uppercase tracking-wide px-3 py-1.5 rounded-full border flex-1 transition-colors ${
                    audience === "member"
                      ? "border-gold text-gold bg-gold/10"
                      : "border-line text-textmuted"
                  }`}
                >
                  For Members
                </button>
                <button
                  onClick={() => setAudience("admin")}
                  className={`text-[11px] font-mono uppercase tracking-wide px-3 py-1.5 rounded-full border flex-1 transition-colors ${
                    audience === "admin"
                      ? "border-gold text-gold bg-gold/10"
                      : "border-line text-textmuted"
                  }`}
                >
                  For Admins
                </button>
              </div>
            )}

            {(!isAdmin || audience === "member") ? (
              <ol className="space-y-4">
                {[
                  ["1", "Pick your day", "Tap Mon\u2013Fri at the top. Today's tab shows the live board; other days show the typical pattern for that weekday."],
                  ["2", "Sort it your way", "Priority (default), Time (earliest window first), or \u{1F4CD} Near Me (real distance, needs your location)."],
                  ["3", "Browse or search", "Use the region chips to jump to your area, or search a store by name. Filter by High/Medium/Low if you only want the strong bets."],
                  ["4", "See what's worth checking right now", "On today's tab, tap \u{1F550} Right Now to narrow the list down to only stores whose window falls within about 2 hours of the actual current time."],
                  ["5", "Read the card", "Chance level, vendor/employee icon, stock location, item limit, hit history, and any notes are all right there \u2014 no need to tap anything to read the full note."],
                  ["6", "Tap Map for directions", "Apple or Google, opens straight to that store's real address."],
                  ["7", "Star your favorites", "Tap the star on any store to save it. Use the \u2605 Favorites filter to see only your saved stores."],
                  ["8", "See the whole week, and the receipts", "Tap \"View full week\" to see that store's pattern across all 5 days, plus a \"View recent activity\" log showing the actual dated pings behind the rating."],
                ].map(([n, title, body]) => (
                  <li key={n} className="flex gap-3">
                    <span className="shrink-0 h-6 w-6 rounded-full border border-gold text-gold text-xs flex items-center justify-center font-mono">
                      {n}
                    </span>
                    <div>
                      <p className="text-sm text-textprimary font-medium">{title}</p>
                      <p className="text-xs text-textmuted mt-0.5">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <ol className="space-y-4">
                {[
                  ["1", "Toggle Edit mode", "Switches store cards into editable form, on whichever day tab you're currently viewing \u2014 today or any weekday pattern."],
                  ["2", "Or edit the whole week at once", "Tap \"View full week\" on any store with Edit mode on \u2014 every day for that store becomes editable in one popup. Saves as you type, no tab-switching needed."],
                  ["3", "Set chance + source type", "Source type (Vendor/Employee Push/Both) is required and shown first \u2014 it decides which notes fields even appear below it."],
                  ["4", "Use the window presets", "Quick-fill buttons (Opening, 7-9AM, 8-Close, etc.) sit above the window field \u2014 tap one, still editable after."],
                  ["5", "Set stock location & item limit", "TCG Section / Guest Services / Both, plus 1 or 2 per person or a custom limit. Both are visible to members on the card."],
                  ["6", "Mark Sold when confirmed", "Only on today's live board. Resets to No Update/Hasn't Sold automatically every new day."],
                  ["7", "Mark Overdue if it's missed its window", "Public, persistent, stays until you clear it \u2014 even across a new day starting. Use this instead of a \"didn't hit\" click."],
                  ["8", "Start New Day each morning", "Archives today, carries forward that weekday's typical pattern (and any Overdue flags) into a fresh live board."],
                  ["9", "Import Patterns after a data refresh", "Pulls the latest analyzed history into the weekday templates \u2014 only needed after new Discord history has been processed."],
                ].map(([n, title, body]) => (
                  <li key={n} className="flex gap-3">
                    <span className="shrink-0 h-6 w-6 rounded-full border border-gold text-gold text-xs flex items-center justify-center font-mono">
                      {n}
                    </span>
                    <div>
                      <p className="text-sm text-textprimary font-medium">{title}</p>
                      <p className="text-xs text-textmuted mt-0.5">{body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
