import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        panel2: "rgb(var(--panel2) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        textprimary: "rgb(var(--textprimary) / <alpha-value>)",
        textmuted: "rgb(var(--textmuted) / <alpha-value>)",
        high: "rgb(var(--high) / <alpha-value>)",
        medium: "rgb(var(--medium) / <alpha-value>)",
        low: "rgb(var(--low) / <alpha-value>)",
        gold: "rgb(var(--gold) / <alpha-value>)",
        live: "rgb(var(--live) / <alpha-value>)",
        purple: "rgb(var(--purple) / <alpha-value>)",
      },
      fontFamily: {
        brand: ["var(--font-brand)"],
        serif: ["var(--font-serif)"],
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
