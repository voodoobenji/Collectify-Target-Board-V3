# Extracts the owner's posted guides from a Discord #target export (compact exporter: index.html with div.msg).
# Usage: python3 -I scripts/extract-guides.py <export index.html> <out guides.json>
# Then:  npx tsx scripts/build-guide-baseline.ts <guides.json>   (rewrites lib/guide-baseline.ts)
import sys, re, json, html
from datetime import date, timedelta
from datetime import datetime
from html.parser import HTMLParser

class P(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.msgs = []; self.day = None; self.author = ""
        self.stack = []  # class names of open divs
        self.cur = None; self.cap = None  # capture text when inside .txt
        self.in_day = False; self.in_au = False; self.in_ts = False; self.in_gt = False; self.in_reply = 0
        self.depth_txt = None; self.depth = 0
    def handle_starttag(self, tag, a):
        a = dict(a); cls = a.get("class", "") or ""
        if tag == "div":
            self.depth += 1
            if cls == "day": self.in_day = True; self.daybuf = ""
            elif cls.startswith("msg"):
                if self.cur: self.flush()
                self.cur = {"id": a.get("id", "")[1:], "date": self.day, "time": None, "parts": [], "fwd": False}
            elif cls == "fwd" and self.cur: self.cur["fwd"] = True
            elif cls == "reply": self.in_reply = self.depth
            elif cls == "txt" and self.cur and not self.in_reply and self.depth_txt is None:
                self.depth_txt = self.depth; self.cap = []
            elif cls == "gt": self.in_gt = True
        elif tag == "span" and "au" == a.get("class"): self.in_au = True; self.aubuf = ""
        elif tag == "span" and a.get("class") == "ts": self.in_ts = True; self.tsbuf = ""
        elif tag == "br" and self.cap is not None: self.cap.append("\n")
    def handle_endtag(self, tag):
        if tag == "div":
            if self.in_day: self.in_day = False; self.setday()
            if self.in_gt: self.in_gt = False
            if self.depth_txt == self.depth:
                self.cur["parts"].append("".join(self.cap)); self.cap = None; self.depth_txt = None
            if self.in_reply == self.depth: self.in_reply = 0
            self.depth -= 1
        elif tag == "span":
            if self.in_au: self.in_au = False; self.author = self.aubuf.strip()
            if self.in_ts: self.in_ts = False; self.setts(self.tsbuf)
        elif tag in ("pre",) and self.cap is not None: self.cap.append("\n")
    def handle_data(self, d):
        if self.in_day: self.daybuf += d
        if self.in_au: self.aubuf += d
        if self.in_ts: self.tsbuf += d
        if self.in_gt and self.cur and not self.cur["time"]: self.cur["time"] = d.strip()
        if self.cap is not None: self.cap.append(d)
    def setday(self):
        t = re.sub(r"^[A-Za-z]+,\s*", "", self.daybuf.strip())
        try: self.day = datetime.strptime(t, "%B %d, %Y").strftime("%Y-%m-%d")
        except Exception: pass
        if self.cur: self.cur["date"] = self.cur["date"] or self.day
    def setts(self, t):
        m = re.match(r"\s*(\d+)/(\d+)/(\d{4}) (.*)", t)
        if m and self.cur:
            self.cur["date"] = f"{m.group(3)}-{int(m.group(1)):02d}-{int(m.group(2)):02d}"; self.cur["time"] = m.group(4).strip()
    def flush(self):
        c = self.cur; self.cur = None
        text = "\n".join(p.strip() for p in c["parts"] if p.strip())
        if text and c["date"] and c["time"]:
            try: tm = datetime.strptime(c["time"], "%I:%M %p").strftime("%H:%M")
            except Exception: return
            self.msgs.append({"id": c["id"], "date": c["date"], "time": tm, "author": self.author, "text": text, "fwd": c["fwd"]})

p = P(); p.feed(open(sys.argv[1], encoding="utf-8").read())
if p.cur: p.flush()
ms = p.msgs
out = []
for m in ms:
    t = m["text"]; first = t.split("\n")[0]
    kind = None
    if re.match(r"\s*Target Weekend Guide", first, re.I): kind = "weekend"
    elif re.match(r"\s*Target Guide", first, re.I): kind = "daily"
    elif re.search(r"hit list", first, re.I): kind = "hitlist"
    else: continue
    posted = date.fromisoformat(m["date"])
    dates = []
    for mm, dd in re.findall(r"(\d{1,2})/(\d{1,2})", first):
        y = posted.year
        d = date(y, int(mm), int(dd))
        if d < posted - timedelta(days=200): d = date(y + 1, int(mm), int(dd))
        dates.append(d)
    if kind == "weekend" and len(dates) == 2:
        dates = [dates[0] + timedelta(days=i) for i in range((dates[1] - dates[0]).days + 1)]
    if kind == "hitlist": dates = [posted]
    if kind == "daily" and not dates:
        if "Labor Day" in first: dates = [date(2026, 9, 7)]
        else: dates = [posted + timedelta(days=1)]
    if not dates: continue
    lines = []
    for line in t.split("\n"):
        line = line.strip()
        mm = re.match(r"^([A-Za-z0-9#&'’./() ]{2,60}?)\s+[-–—]\s+(.{4,})$", line)
        if mm and not line.lower().startswith("target"):
            lines.append([mm.group(1).strip(), mm.group(2).strip()])
    out.append({"kind": kind, "posted": m["date"], "postedTime": m["time"], "dates": [d.isoformat() for d in dates], "title": first[:80], "lines": lines})
json.dump(out, open(sys.argv[2], "w"), ensure_ascii=False, indent=0)
print(len(out), "guide posts,", sum(len(g["lines"]) for g in out), "store lines")
