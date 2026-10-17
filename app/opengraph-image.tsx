import { ImageResponse } from "next/og";

export const alt = "Rahul Kumar Yadav — Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%", height: "100%", display: "flex", flexDirection: "column",
          justifyContent: "center", padding: 80, background: "#f5f0e8",
          border: "12px solid #1a3a5c", color: "#1a1510",
        }}
      >
        <div style={{ fontSize: 28, color: "#c4420a", letterSpacing: 6 }}>PORTFOLIO</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16 }}>Rahul Kumar Yadav</div>
        <div style={{ fontSize: 40, color: "#1a3a5c", marginTop: 16 }}>
          Full-Stack Software Engineer
        </div>
        <div style={{ fontSize: 28, color: "#6f6353", marginTop: 28 }}>
          React · Next.js · Node.js · TypeScript — Ahmedabad, India
        </div>
      </div>
    ),
    size
  );
}
