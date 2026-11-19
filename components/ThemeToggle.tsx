"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "dark";
    setTheme(current);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("collectify_theme", next);
    } catch {
      // localStorage unavailable — theme still applies for this session
    }
  }

  // Avoid a hydration mismatch: render nothing until we know the real theme.
  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-[0.08em] px-2 py-1 rounded border border-line text-textmuted hover:text-textprimary hover:bg-panel2 transition-colors"
    >
      <span className="text-[11px] leading-none">{theme === "dark" ? "☀︎" : "☾︎"}</span>
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
