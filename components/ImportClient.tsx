"use client";

import { useEffect, useMemo, useState } from "react";
import { STORES } from "@/lib/stores";
import { looksLight, resolveStoreName, to24h, type DropKind } from "@/lib/drops";
import { readExportFiles, type ExportMessage } from "@/lib/exportParse";

type RowKind = DropKind | "ignore";
interface Row {
  key: string;
  date: string;
  time: string;
  storeId: string; // "" = not matched / not on the board
  storeText: string;
  kind: RowKind;
  items: string;
  notes: string;
  confidence?: "high" | "medium" | "low";
  quotes?: string[];
  source: "csv" | "export" | "manual";
}

const STORE_OPTIONS = [...STORES].sort((a, b) => a.name.localeCompare(b.name));
const btn = "font-mono uppercase tracking-[0.08em] text-[10px] px-3 py-1.5 rounded-lg border transition-colors disabled:opacity-40";
const KIND_STYLE: Record<RowKind, string> = {
  drop: "border-live text-live",
  light: "border-medium text-medium",
  dry: "border-line text-textmuted",
  ignore: "border-line text-textmuted/50 line-through",
};

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cur = "";
  let q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cur += '"'; i++; }
      else if (c === '"') q = false;
      else cur += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cur); cur = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cur); cur = "";
      if (row.some((x) => x.trim())) rows.push(row);
      row = [];
    } else cur += c;
  }
  row.push(cur);
  if (row.some((x) => x.trim())) rows.push(row);
  return rows;
}

const fmtDay = (d: string) =>
  new Date(`${d}T12:00:00`).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

export default function ImportClient() {
  const [rows, setRows] = useState<Row[]>([]);
  const [days, setDays] = useState<{ date: string; count: number }[]>([]);
  const [messages, setMessages] = useState<ExportMessage[]>([]);
  const [exportDate, setExportDate] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function loadDays() {
    const r = await fetch("/api/admin/drops", { cache: "no-store" });
    if (r.ok) setDays((await r.json()).days);
  }
  useEffect(() => { loadDays(); }, []);

  const exportDays = useMemo(() => {
    const m = new Map<string, number>();
    for (const x of messages) m.set(x.date, (m.get(x.date) ?? 0) + 1);
    return [...m.entries()].sort((a, b) => b[1] - a[1]);
  }, [messages]);

  async function onExportFiles(files: FileList | null) {
    setErr(null); setMsg(null); setRows([]);
    if (!files?.length) return;
    setBusy("Reading files…");
    try {
      const ms = await readExportFiles(Array.from(files));
      if (!ms.length) throw new Error("No messages found in those files. Upload the export .zip (all parts) or its .html pages.");
      setMessages(ms);
      const counts = new Map<string, number>();
      for (const x of ms) counts.set(x.date, (counts.get(x.date) ?? 0) + 1);
      setExportDate([...counts.entries()].sort((a, b) => b[1] - a[1])[0][0]);
    } catch (e) {
      setErr(String(e instanceof Error ? e.message : e));
    } finally { setBusy(null); }
  }

  async function readWithAi() {
    setErr(null); setMsg(null);
    const dayMsgs = messages.filter((m) => m.date === exportDate);
    setBusy(`AI is reading ${dayMsgs.length} messages… (about a minute)`);
    try {
      const r = await fetch("/api/admin/import-export", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ date: exportDate, messages: dayMsgs.map(({ time, author, text, forwarded, images }) => ({ time, author, text, forwarded, images })) }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error ?? `HTTP ${r.status}`);
      type Ev = { storeId: string | null; storeText: string; time: string; kind: DropKind; items: string; note: string; confidence: "high" | "medium" | "low"; messageNumbers: number[] };
      setRows(
        (d.events as Ev[]).map((e, i) => ({
          key: `e${i}`,
          date: exportDate,
          time: /^\d{2}:\d{2}$/.test(e.time) ? e.time : to24h(e.time),
          storeId: e.storeId ?? "",
          storeText: e.storeText,
          kind: e.storeId ? e.kind : "ignore",
          items: e.items,
          notes: e.note,
          confidence: e.confidence,
          quotes: e.messageNumbers.map((n) => dayMsgs[n - 1]).filter(Boolean).map((m) => `${m.time} ${m.text}`.slice(0, 220)),
          source: "export" as const,
        }) as Row).sort((a, b) => a.time.localeCompare(b.time))
      );
      setMsg(`Found ${d.events.length} store reports in ${d.messages} messages · AI cost about $${d.costUsd}. Check them, then save.`);
    } catch (e) {
      setErr(String(e instanceof Error ? e.message : e));
    } finally { setBusy(null); }
  }

  async function onCsv(file: File | null) {
    setErr(null); setMsg(null); setMessages([]);
    if (!file) return;
    const table = parseCsv(await file.text());
    const head = table[0]?.map((h) => h.trim().toLowerCase()) ?? [];
    const col = (n: string) => head.indexOf(n);
    if (col("date") < 0 || col("store") < 0) { setErr("CSV needs at least date and store columns (date,weekday,store,region,window,time,items,notes)."); return; }
    const out: Row[] = table.slice(1).map((c, i) => {
      const items = c[col("items")] ?? "";
      const id = resolveStoreName(c[col("store")] ?? "") ?? "";
      return {
        key: `c${i}`,
        date: (c[col("date")] ?? "").trim(),
        time: col("time") >= 0 && c[col("time")] ? to24h(c[col("time")]) : "00:00",
        storeId: id,
        storeText: c[col("store")] ?? "",
        kind: !id ? "ignore" : looksLight(items) ? "light" : "drop",
        items,
        notes: col("notes") >= 0 ? c[col("notes")] ?? "" : "",
        source: "csv",
      } as Row;
    }).filter((r) => /^\d{4}-\d{2}-\d{2}$/.test(r.date));
    setRows(out);
    const light = out.filter((r) => r.kind === "light").length;
    const missing = out.filter((r) => !r.storeId).length;
    setMsg(`${out.length} rows across ${new Set(out.map((r) => r.date)).size} days. ${light} look like light stock only (marked LIGHT)${missing ? `, ${missing} store names not matched (pick the store or leave as ignore)` : ""}. Check, then save.`);
  }

  async function openDay(date: string) {
    setErr(null); setMsg(null); setMessages([]);
    const r = await fetch(`/api/admin/drops?date=${date}`, { cache: "no-store" });
    if (!r.ok) return;
    const d = await r.json();
    setRows((d.drops as Row[]).map((x, i) => ({ ...x, key: `s${i}`, storeText: x.storeId, notes: (x as unknown as { notes: string }).notes })));
    setMsg(`Editing ${fmtDay(date)}. Saving replaces this day.`);
  }

  async function save() {
    setErr(null);
    const byDay: Record<string, Row[]> = {};
    for (const r of rows) (byDay[r.date] ??= []).push(r);
    const replacing = Object.keys(byDay).filter((d) => days.some((x) => x.date === d && x.count > 0));
    if (replacing.length && !window.confirm(`This replaces what's already saved for ${replacing.map(fmtDay).join(", ")}. Continue?`)) return;
    setBusy("Saving…");
    try {
      const payload: Record<string, object[]> = {};
      for (const [d, rs] of Object.entries(byDay))
        payload[d] = rs.filter((r) => r.kind !== "ignore" && r.storeId).map(({ time, storeId, kind, items, notes, source }) => ({ time, storeId, kind, items, notes, source }));
      const r = await fetch("/api/admin/drops", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ days: payload }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.error ?? `HTTP ${r.status}`);
      const total = Object.values(d.saved as Record<string, number>).reduce((t, n) => t + n, 0);
      setMsg(`Saved ${total} entries for ${Object.keys(d.saved).length} day(s).`);
      setRows([]); setMessages([]);
      loadDays();
    } catch (e) {
      setErr(String(e instanceof Error ? e.message : e));
    } finally { setBusy(null); }
  }

  const set = (key: string, patch: Partial<Row>) => setRows((rs) => rs.map((r) => (r.key === key ? { ...r, ...patch } : r)));
  const counts = { drop: 0, light: 0, dry: 0, ignore: 0 } as Record<RowKind, number>;
  for (const r of rows) counts[r.kind]++;

  return (
    <main className="min-h-screen max-w-3xl mx-auto px-4 pt-4 pb-24">
      <header className="pt-4 pb-4 mb-2">
        <a href="/" className="font-mono uppercase tracking-[0.08em] text-[10px] text-textmuted hover:text-gold">← Board</a>
        <div className="font-brand font-extrabold tracking-[0.25em] text-gold text-[11px] mt-3">COLLECTIFY</div>
        <h1 className="font-serif text-[26px] leading-tight mt-1 text-textprimary">
          Import <span className="text-gold">drops</span>
        </h1>
        <p className="text-textmuted text-sm mt-1">
          Upload a day&apos;s #target export (all parts). The AI lists every store report: a real drop, light stock only, or
          dry. You check it and save. Saved drops feed the predictions.
        </p>
      </header>

      {err && <p className="mb-3 text-high text-sm border border-high/40 rounded-lg px-3 py-2">{err}</p>}
      {msg && <p className="mb-3 text-textmuted text-sm border border-line rounded-lg px-3 py-2">{msg}</p>}
      {busy && <p className="mb-3 text-gold text-sm">{busy}</p>}

      <section className="rounded-xl border border-line bg-panel p-4 mb-3">
        <div className="font-mono uppercase tracking-[0.08em] text-[10px] text-textmuted mb-2">Day export (.zip or .html, both export styles)</div>
        <input type="file" multiple accept=".zip,.html,.htm" onChange={(e) => onExportFiles(e.target.files)} className="text-sm text-textmuted" />
        {messages.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span className="text-sm">{messages.length} messages ·</span>
            <select value={exportDate} onChange={(e) => setExportDate(e.target.value)} className="bg-panel2 border border-line rounded-lg px-2 py-1 text-sm">
              {exportDays.map(([d, n]) => (
                <option key={d} value={d}>{fmtDay(d)} ({n} messages)</option>
              ))}
            </select>
            <button onClick={readWithAi} disabled={!!busy} className={`${btn} border-gold text-gold hover:bg-panel2`}>Read with AI</button>
          </div>
        )}
      </section>

      <section className="rounded-xl border border-line bg-panel p-4 mb-3">
        <div className="font-mono uppercase tracking-[0.08em] text-[10px] text-textmuted mb-2">Drops log CSV (date,weekday,store,region,window,time,items,notes)</div>
        <input type="file" accept=".csv,text/csv" onChange={(e) => onCsv(e.target.files?.[0] ?? null)} className="text-sm text-textmuted" />
      </section>

      {rows.length > 0 && (
        <section className="mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div className="font-mono uppercase tracking-[0.08em] text-[10px] text-textmuted">
              Review · {counts.drop} drop · {counts.light} light · {counts.dry} dry · {counts.ignore} ignored
            </div>
            <div className="flex gap-2">
              <button onClick={() => setRows([])} className={`${btn} border-line text-textmuted hover:text-textprimary`}>Discard</button>
              <button onClick={save} disabled={!!busy} className={`${btn} border-gold text-gold bg-panel2`}>Save</button>
            </div>
          </div>
          <div className="space-y-2">
            {rows.map((r) => (
              <div key={r.key} className={`rounded-xl border bg-panel p-3 ${r.confidence === "low" || !r.storeId ? "border-medium/70" : "border-line"}`}>
                <div className="flex flex-wrap items-center gap-2">
                  {new Set(rows.map((x) => x.date)).size > 1 && <span className="font-mono text-[11px] text-textmuted">{r.date}</span>}
                  <input value={r.time} onChange={(e) => set(r.key, { time: e.target.value })} className="w-[58px] bg-panel2 border border-line rounded px-1.5 py-1 font-mono text-[12px]" />
                  <select value={r.storeId} onChange={(e) => set(r.key, { storeId: e.target.value, kind: e.target.value && r.kind === "ignore" ? "drop" : r.kind })} className="flex-1 min-w-[160px] bg-panel2 border border-line rounded px-1.5 py-1 text-[13px]">
                    <option value="">— not on board: {r.storeText} —</option>
                    {STORE_OPTIONS.map((s) => (
                      <option key={s.id} value={s.id}>{s.name}</option>
                    ))}
                  </select>
                  <div className="flex gap-1">
                    {(["drop", "light", "dry", "ignore"] as RowKind[]).map((k) => (
                      <button key={k} onClick={() => set(r.key, { kind: k })} className={`font-mono uppercase text-[9px] px-1.5 py-1 rounded border ${r.kind === k ? `${KIND_STYLE[k]} bg-panel2` : "border-line text-textmuted/60"}`}>
                        {k}
                      </button>
                    ))}
                  </div>
                  {r.confidence && r.confidence !== "high" && (
                    <span className="font-mono uppercase text-[9px] text-medium">{r.confidence} confidence</span>
                  )}
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                  <input value={r.items} onChange={(e) => set(r.key, { items: e.target.value })} placeholder="items" className="flex-1 bg-panel2 border border-line rounded px-2 py-1 text-[12px]" />
                  <input value={r.notes} onChange={(e) => set(r.key, { notes: e.target.value })} placeholder="notes" className="flex-1 bg-panel2 border border-line rounded px-2 py-1 text-[12px]" />
                </div>
                {r.quotes && r.quotes.length > 0 && (
                  <div className="mt-2 space-y-0.5">
                    {r.quotes.map((q, i) => (
                      <p key={i} className="text-[11px] text-textmuted/80 truncate" title={q}>&ldquo;{q}&rdquo;</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="font-mono uppercase tracking-[0.08em] text-[10px] text-textmuted mb-2">Saved days</div>
        {days.length === 0 ? (
          <p className="text-sm text-textmuted">Nothing saved yet.</p>
        ) : (
          <div className="flex flex-wrap gap-1.5">
            {days.map((d) => (
              <button key={d.date} onClick={() => openDay(d.date)} className={`${btn} border-line text-textmuted hover:text-gold hover:border-gold`}>
                {fmtDay(d.date)} · {d.count}
              </button>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
