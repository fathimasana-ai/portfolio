import { ImageResponse } from "next/og";
import { profile } from "@/content/content";

export const alt = `${profile.name} — ${profile.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#07080b",
        color: "#eef3f8",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "72px",
        position: "relative",
        width: "100%",
      }}
    >
      <div style={{ backgroundImage: "linear-gradient(rgba(150,187,210,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(150,187,210,.08) 1px, transparent 1px)", backgroundSize: "72px 72px", inset: 0, opacity: 0.7, position: "absolute" }} />
      <div style={{ color: "#79d7f3", display: "flex", fontFamily: "monospace", fontSize: 21, letterSpacing: "0.18em", position: "relative", textTransform: "uppercase" }}>FS / Portfolio</div>
      <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <div style={{ color: "#79d7f3", fontSize: 30, marginBottom: 22 }}>{profile.tagline}</div>
        <div style={{ fontSize: 80, fontWeight: 600, letterSpacing: "-0.07em", lineHeight: 1 }}>{profile.name}</div>
      </div>
      <div style={{ borderTop: "1px solid rgba(181,202,225,.25)", color: "#99a7b6", display: "flex", fontSize: 22, paddingTop: 22, position: "relative" }}>{profile.seoDescription}</div>
    </div>,
    { ...size },
  );
}
