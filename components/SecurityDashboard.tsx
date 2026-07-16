"use client";

import { useEffect, useState } from "react";

interface SecurityEvent {
  type: "login" | "denied" | "scrape";
  discordId: string;
  username: string;
  isAdmin?: boolean;
  ip?: string;
  detail?: string;
  at: string;
}
interface PresenceRow {
  discordId: string;
  username: string;
  isAdmin: boolean;
  ip?: string;
  at: string;
}

function timeAgo(iso: string): string {
  const mins = Math.floor((Date.now() - new Date(iso).getTime()) / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

const ACTIVE_MS = 5 * 60 * 1000;

export default function SecurityDashboard() {
  const [log, setLog] = useState<SecurityEvent[]>([]);
  const [presence, setPresence] = useState<PresenceRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch("/api/security", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (cancelled) return;
        setLog(data.log ?? []);
        setPresence(data.presence ?? []);
      } catch {
        // ignore
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    const id = setInterval(load, 20000);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  const now = Date.now();
  const active = presence.filter((p) => now - new Date(p.at).getTime() < ACTIVE_MS);
  const recent = presence.filter((p) => now - new Date(p.at).getTime() >= ACTIVE_MS);
  const logins = log.filter((e) => e.type === "login").slice(0, 60);
  const denied = log.filter((e) => e.type === "denied").slice(0, 60);
  const scrapes = log.filter((e) => e.type === "scrape").slice(0, 60);

  function Name({ name, admin }: { name: string; admin?: boolean }) {
    return (
      <span>
        <span className="text-textprimary">{name}</span>
        {admin && <span className="ml-1.5 text-[9px] font-mono uppercase text-gold">admin</span>}
      </span>
    );
  }

  return (
    <main className="min-h-screen px-4 py-6 sm:px-8 sm:py-10 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-serif text-2xl text-textprimary">Security</h1>
        <a href="/" className="text-xs font-mono uppercase tracking-wide text-textmuted hover:text-textprimary">
          &lsaquo; Back to board
        </a>
      </div>

      {loading ? (
        <p className="text-textmuted text-sm">Loading…</p>
      ) : (
        <div className="space-y-8">
          <section>
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-live pulse" />
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-gold">
                Active now ({active.length})
              </h2>
            </div>
            {active.length === 0 ? (
              <p className="text-textmuted text-sm">No one active in the last 5 minutes.</p>
            ) : (
              <div className="space-y-1.5">
                {active.map((p) => (
                  <div
                    key={p.discordId}
                    className="flex items-center justify-between gap-2 text-sm bg-panel border border-line rounded px-3 py-2"
                  >
                    <Name name={p.username} admin={p.isAdmin} />
                    <span className="font-mono text-xs text-textmuted">
                      {p.ip ?? "—"} · {timeAgo(p.at)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {recent.length > 0 && (
            <section>
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-gold mb-3">
                Recently seen
              </h2>
              <div className="space-y-1.5">
                {recent.slice(0, 40).map((p) => (
                  <div
                    key={p.discordId}
                    className="flex items-center justify-between gap-2 text-sm px-3 py-1.5"
                  >
                    <Name name={p.username} admin={p.isAdmin} />
                    <span className="font-mono text-xs text-textmuted">
                      {p.ip ?? "—"} · {timeAgo(p.at)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {scrapes.length > 0 && (
            <section>
              <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-high mb-3">
                ⚠ Scrape flags ({scrapes.length})
              </h2>
              <div className="space-y-1.5">
                {scrapes.map((e, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2 text-sm bg-high/5 border border-high/40 rounded px-3 py-2"
                  >
                    <Name name={e.username} admin={e.isAdmin} />
                    <span className="font-mono text-xs text-textmuted">
                      {e.ip ?? "—"} · {timeAgo(e.at)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section>
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-medium mb-3">
              Denied attempts ({denied.length})
            </h2>
            {denied.length === 0 ? (
              <p className="text-textmuted text-sm">None.</p>
            ) : (
              <div className="space-y-1.5">
                {denied.map((e, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2 text-sm bg-medium/5 border border-medium/40 rounded px-3 py-2"
                  >
                    <Name name={e.username} />
                    <span className="font-mono text-xs text-textmuted">{timeAgo(e.at)}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-gold mb-3">
              Recent logins ({logins.length})
            </h2>
            {logins.length === 0 ? (
              <p className="text-textmuted text-sm">None yet.</p>
            ) : (
              <div className="space-y-1.5">
                {logins.map((e, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between gap-2 text-sm px-3 py-1.5"
                  >
                    <Name name={e.username} admin={e.isAdmin} />
                    <span className="font-mono text-xs text-textmuted">{timeAgo(e.at)}</span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
}
