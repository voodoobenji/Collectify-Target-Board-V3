import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        panel: "#111B2E",
        panel2: "#16223A",
        line: "#22314D",
        textprimary: "#E8ECF4",
        textmuted: "#A3B1CC",
        high: "#FF5A4E",
        medium: "#FFB238",
        low: "#5B8DEF",
        gold: "#C9A876",
        live: "#2FBE8F",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
