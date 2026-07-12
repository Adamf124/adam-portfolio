import { ImageResponse } from "next/og";

export const alt = "Adam Ferguson, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0E1114",
          color: "#e8e4db",
          padding: "96px",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c6a15b",
          }}
        >
          Atlanta, GA · Full-Stack Developer
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 132, lineHeight: 1 }}>
          <span>Adam&nbsp;</span>
          <span style={{ color: "#c6a15b" }}>Ferguson</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: "rgba(232,228,219,0.6)" }}>
          adamferguson.pro
        </div>
      </div>
    ),
    { ...size }
  );
}
