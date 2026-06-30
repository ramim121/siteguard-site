import { ImageResponse } from "next/og";

export const alt = "SiteGuard — Turn your cameras into a 24/7 AI safety system";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a2129",
          backgroundImage:
            "radial-gradient(60% 60% at 85% 0%, rgba(28,140,122,0.35), transparent 60%)",
          color: "#eaf1f1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 46, fontWeight: 800, letterSpacing: -1 }}>
            <span>Site</span>
            <span style={{ color: "#5fbfa9" }}>Guard</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              letterSpacing: 2,
              color: "#5fbfa9",
              border: "1px solid rgba(95,191,169,0.4)",
              borderRadius: 999,
              padding: "10px 22px",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 6, background: "#d6453c", display: "flex" }} />
            LIVE
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 86, fontWeight: 800, lineHeight: 1.04, letterSpacing: -2 }}>
            Every camera,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: -2,
              color: "#5fbfa9",
            }}
          >
            now intelligent.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 22, fontSize: 27, color: "#7e9499" }}>
          <span>site-guard.ai</span>
          <span>·</span>
          <span>90+ detection models</span>
          <span>·</span>
          <span>0–3s alerts</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
