"use client";

export default function Watermark({ username, date }: { username: string; date: string }) {
  const label = `@${username} \u00b7 ${date}`;
  const tiles = Array.from({ length: 140 });

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: "-50px",
        zIndex: 9999,
        pointerEvents: "none",
        overflow: "hidden",
        transform: "rotate(-22deg)",
        display: "flex",
        flexWrap: "wrap",
        gap: "34px 44px",
        alignContent: "flex-start",
      }}
    >
      {tiles.map((_, i) => (
        <span
          key={i}
          style={{
            fontSize: "11px",
            fontFamily: "var(--font-mono)",
            color: "#ffffff",
            opacity: 0.045,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
