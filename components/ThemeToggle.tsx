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

    // Follow the device setting until the user makes an explicit choice.
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handler = (e: MediaQueryListEvent) => {
      try {
        if (localStorage.getItem("collectify_theme")) return;
      } catch {
        return;
      }
      const t: Theme = e.matches ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", t);
      setTheme(t);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
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
      className="text-base leading-none text-textmuted hover:text-gold transition-colors"
    >
      {theme === "dark" ? "☀︎" : "☾︎"}
    </button>
  );
}
