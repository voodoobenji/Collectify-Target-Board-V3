"use client";

export default function Watermark({
  username,
  discordId,
  date,
}: {
  username: string;
  discordId?: string;
  date: string;
}) {
  const label = `@${username}${discordId ? ` \u00b7 ${discordId}` : ""} \u00b7 ${date}`;
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
      {tiles.map((_, i) =>
        i % 5 === 0 ? (
          <img
            key={i}
            src="/COLLECTIFY_LOGO.png"
            alt=""
            style={{
              height: "26px",
              width: "26px",
              borderRadius: "9999px",
              opacity: 0.05,
            }}
          />
        ) : (
          <span
            key={i}
            style={{
              fontSize: "11px",
              fontFamily: "var(--font-mono)",
              color: "rgb(var(--textprimary))",
              opacity: 0.045,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        )
      )}
    </div>
  );
}
