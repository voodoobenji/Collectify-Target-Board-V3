// Reads a Discord channel export in the browser (DOMParser) and returns plain messages.
// Two formats are supported:
//   - Discrub "HTML (Discord Layout)": target-page-N.html, <div class="message">, full timestamp on every message
//   - the compact exporter: index.html per part, <div class="msg">, a day divider + "7:09 AM" on grouped messages
// Zips are unpacked with fflate. Only the message text leaves the browser.
import { unzipSync, strFromU8 } from "fflate";
import { to24h } from "./drops";

export interface ExportMessage {
  id: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM 24h
  author: string;
  text: string;
  forwarded: boolean;
  images: number;
}

const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

function mdy(s: string): string | null {
  const m = /(\d{1,2})\/(\d{1,2})\/(\d{4})/.exec(s);
  return m ? `${m[3]}-${m[1].padStart(2, "0")}-${m[2].padStart(2, "0")}` : null;
}
function longDate(s: string): string | null {
  const d = new Date(s.replace(/^[A-Za-z]+,\s*/, ""));
  return Number.isNaN(d.getTime()) ? null : `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function textOf(el: Element | null): string {
  if (!el) return "";
  const t = clean(el.textContent);
  return t === "(no content)" ? "" : t;
}

function parseDiscrub(doc: Document): ExportMessage[] {
  const out: ExportMessage[] = [];
  let author = "";
  for (const m of Array.from(doc.querySelectorAll("div.message"))) {
    const a = m.querySelector(".author");
    if (a) author = clean(a.childNodes[0]?.textContent ?? a.textContent);
    const ts = clean((m.querySelector(".timestamp") ?? m.querySelector(".grouped-timestamp"))?.textContent);
    const date = mdy(ts);
    if (!date) continue;
    const parts = [
      textOf(m.querySelector(".message-text")),
      ...Array.from(m.querySelectorAll(".forward-content, .embed-title, .embed-description")).map(textOf),
    ].filter(Boolean);
    if (!parts.length) continue;
    out.push({
      id: m.getAttribute("data-message-id") ?? m.id,
      date,
      time: to24h(ts.replace(/^\S+\s+/, "")),
      author,
      text: parts.join(" | "),
      forwarded: !!m.querySelector(".forward-block"),
      images: m.querySelectorAll("img.attachment, .attachment img, .attachments img").length,
    });
  }
  return out;
}

function parseCompact(doc: Document): ExportMessage[] {
  const out: ExportMessage[] = [];
  let day: string | null = null;
  let author = "";
  for (const el of Array.from(doc.querySelectorAll("main > div"))) {
    if (el.classList.contains("day")) {
      day = longDate(clean(el.textContent)) ?? day;
      continue;
    }
    if (!el.classList.contains("msg")) continue;
    const au = el.querySelector(".au");
    if (au) author = clean(au.textContent);
    const full = clean(el.querySelector(".ts")?.textContent);
    const date = mdy(full) ?? day;
    const time = full ? full.replace(/^\S+\s+/, "") : clean(el.querySelector(".gt")?.textContent);
    if (!date || !time) continue;
    const parts = Array.from(el.querySelectorAll(".txt")).map(textOf).filter(Boolean);
    if (!parts.length) continue;
    out.push({
      id: el.id,
      date,
      time: to24h(time),
      author,
      text: parts.join(" | "),
      forwarded: !!el.querySelector(".fwd"),
      images: el.querySelectorAll(".att img").length,
    });
  }
  return out;
}

export function parseExportHtml(html: string): ExportMessage[] {
  const doc = new DOMParser().parseFromString(html, "text/html");
  if (doc.querySelector("div.message[data-message-id]")) return parseDiscrub(doc);
  if (doc.querySelector("div.msg")) return parseCompact(doc);
  return [];
}

/** Every message in the given .zip / .html files, de-duplicated, oldest first. */
export async function readExportFiles(files: File[]): Promise<ExportMessage[]> {
  const htmls: string[] = [];
  for (const f of files) {
    if (/\.zip$/i.test(f.name)) {
      const entries = unzipSync(new Uint8Array(await f.arrayBuffer()), {
        filter: (e) => /\.html?$/i.test(e.name) && !/(readme|shell)\.html?$/i.test(e.name),
      });
      for (const data of Object.values(entries)) htmls.push(strFromU8(data));
    } else if (/\.html?$/i.test(f.name)) {
      htmls.push(await f.text());
    }
  }
  const byId = new Map<string, ExportMessage>();
  for (const h of htmls) for (const m of parseExportHtml(h)) byId.set(m.id || `${m.date}${m.time}${m.text}`, m);
  return [...byId.values()].sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
}
