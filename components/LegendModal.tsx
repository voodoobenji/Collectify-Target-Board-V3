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
              Two separate systems on this board:{" "}
              <span className="text-textprimary">No Update/Hasn&apos;t Sold vs. Sold</span> describes{" "}
              <span className="text-textprimary">today only</span>, set live by an admin. Everything
              else (High/Medium/Low, past hits, notes) is the store&apos;s{" "}
              <span className="text-textprimary">typical pattern for that weekday</span>, rebuilt from
              the last two weeks of hits and guides &mdash; not a promise about today.
            </p>

            <div>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-high text-high bg-high/10">
                High
              </span>
              <p className="mt-1.5">
                <span className="text-textprimary">Strong chance</span> &mdash; this store actually
                hit on this weekday more than once in the last couple weeks.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-medium text-medium bg-medium/10">
                Medium
              </span>
              <p className="mt-1.5">
                <span className="text-textprimary">Solid chance</span> &mdash; hit at least once
                recently, or the guide flags it. Not a sure thing, but worth being on.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-low text-low bg-low/10">
                Low
              </span>
              <p className="mt-1.5">
                <span className="text-textprimary">Low chance</span> &mdash; hasn&apos;t been hitting
                this weekday lately, but not impossible. Check if you&apos;re nearby.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-line text-textmuted">
                Not Expected/Sells Other Day(s)
              </span>
              <p className="mt-1.5">
                Nothing points to this hitting today &mdash; no recent activity, or an admin called it
                off for today. Either way, don&apos;t prioritize it right now.
              </p>
            </div>

            <div className="pt-2 border-t border-line">
              <span className="text-[10px] font-mono uppercase tracking-wide text-gold">
                &#128221; Via Admin Notes
              </span>
              <p className="mt-1.5">
                The gold note is the guide write-up for this store, curated by admins &mdash; the
                pattern, timing, and what to expect.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wide text-purple">
                &#128506; Via Collectify Map
              </span>
              <p className="mt-1.5">
                The purple note is pulled from the Collectify map &mdash; a separate outside source,
                shown alongside the admin note.
              </p>
            </div>
            <div>
              <span className="text-[10px] font-mono text-textmuted/70">updated 12m ago</span>
              <p className="mt-1.5">
                How long since an admin last touched this store today. The fresher it is, the more you
                can trust it.
              </p>
            </div>

            <div className="pt-2 border-t border-line">
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-gold text-gold bg-gold/10">
                &#10003; Past Hits
              </span>
              <p className="mt-1.5">
                Actual hits reported for this store on this weekday over the last couple weeks &mdash;
                real evidence, but still about the past, not a claim about today.
              </p>
            </div>
            <div>
              <span className="text-[10px] uppercase px-1.5 py-0.5 rounded border border-line text-textmuted">
                Guide History
              </span>
              <p className="mt-1.5">
                Shown when a store has a read for the weekday but no confirmed hit yet &mdash; a
                pattern, not an outcome.
              </p>
            </div>

            <div className="pt-2 border-t border-line">
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-medium text-medium bg-medium/10">
                &#128681; Overdue
              </span>
              <p className="mt-1.5">
                An admin manually flagged this store as having missed its typical window. Visible to
                everyone, stays up until an admin clears it. Just a heads-up &mdash; it doesn&apos;t
                change the chance level.
              </p>
            </div>

            <div className="pt-2 border-t border-line">
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border border-live text-live bg-live/10">
                Sold
              </span>
              <p className="mt-1.5">
                An admin confirmed this store actually restocked{" "}
                <span className="text-textprimary">today</span>. Resets to No Update/Hasn&apos;t Sold
                every new day.
              </p>
            </div>
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

            {!isAdmin || audience === "member" ? (
              <ol className="space-y-4">
                {[
                  ["1", "Pick your day", "Tap Mon–Fri at the top. Today's tab is the live board; other days show the typical pattern for that weekday."],
                  ["2", "Sort it your way", "Priority (default), Time (earliest window first), or \u{1F4CD} Near Me (real distance, needs your location)."],
                  ["3", "Browse or search", "Region chips jump to your area, or search a store by name. Filter by High/Medium/Low if you only want the strong bets."],
                  ["4", "See what's worth it right now", "On today's tab, tap \u{1F550} Right Now to narrow the list to stores whose window falls within about 2 hours of the current time."],
                  ["5", "Read the card", "Chance, window, vendor/employee tag, stock location, and item limit are all right there. The gold note is the admin guide; the purple note is from the Collectify map."],
                  ["6", "Check how fresh it is", "\"updated Xm ago\" at the bottom of a card tells you how recently an admin touched it today — the fresher, the more you can trust the status."],
                  ["7", "Tap Map for directions", "Apple or Google, opens straight to that store's real address."],
                  ["8", "Star your favorites", "Tap the star on any store to save it, then use the ★ Favorites filter to see only those."],
                  ["9", "See the whole week", "Tap \"View full week\" for that store's pattern across all 5 days, plus a log of the actual dated pings behind the rating."],
                  ["10", "Something wrong? Report it", "Tap ⚑ Report an issue on any card to flag a wrong address, wrong hours, or a duplicate — it goes straight to the admins."],
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
                  ["1", "Flip status right on the card", "On today's board (no Edit mode needed) each store has quick No Update / Sold buttons — tap Sold when it restocks. That's the fastest daily action."],
                  ["2", "Toggle Edit mode for the details", "Turns cards into editable form on whichever day tab you're viewing — today or any weekday pattern."],
                  ["3", "Fill a card", "Set chance, source type (just a quick 🚚/👤 tag now), a window (preset buttons or custom), stock location, and item limit — plus one Admin Notes box for everything."],
                  ["4", "Carry from typical pattern", "In Edit mode, the gold \"Carry from typical pattern\" button pulls that weekday's saved prediction into the store with one tap, then tweak from there."],
                  ["5", "Edit the whole week at once", "Tap \"View full week\" with Edit mode on — all 5 days for that store become editable in one popup, saving as you type."],
                  ["6", "Mark Overdue if it missed its window", "Public and persistent — stays until you clear it, even across a new day. Use this instead of a \"didn't hit\" click."],
                  ["7", "Review member reports", "When members flag stores, a ⚑ \"N stores reported\" bar appears at the top. Tap it to filter to those stores, fix them, and dismiss the reports."],
                  ["8", "Start New Day each morning", "Archives today, carries that weekday's typical pattern (and any Overdue flags) into a fresh live board."],
                  ["9", "Import Patterns after a data refresh", "Loads the latest rebuilt weekday templates — only needed after new channel history has been processed."],
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
