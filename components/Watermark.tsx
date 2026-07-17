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

  // Crisp, near-invisible per-user lines spaced down the page. A person skims
  // past them, but a vision/OCR model transcribing a screenshot tends to read
  // clean horizontal text and carry it into its output \u2014 so a lazy
  // "screenshot -> AI -> repost" leak fingerprints itself with this identity.
  const canaryText = `guide access registered to @${username}${discordId ? ` (${discordId})` : ""} \u2014 ${date}`;
  const canaryRows = [6, 20, 34, 48, 62, 76, 90];

  return (
    <>
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

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {canaryRows.map((top) => (
          <div
            key={top}
            style={{
              position: "absolute",
              top: `${top}%`,
              left: 0,
              right: 0,
              textAlign: "center",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.02em",
              color: "rgb(var(--textprimary))",
              opacity: 0.055,
              whiteSpace: "nowrap",
            }}
          >
            {canaryText}
          </div>
        ))}
      </div>
    </>
  );
}
