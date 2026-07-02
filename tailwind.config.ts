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
        textmuted: "#8493AF",
        high: "#FF5A4E",
        medium: "#FFB238",
        low: "#5B8DEF",
        live: "#3DDC97",
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
