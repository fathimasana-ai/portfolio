import { ImageResponse } from "next/og";
import { profile } from "@/content/content";

export const alt = `${profile.name} — ${profile.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    <div style={{ background: "#07080b", color: "#eef3f8", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", padding: "72px", position: "relative", width: "100%" }}>
      <div style={{ backgroundImage: "linear-gradient(rgba(150,187,210,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(150,187,210,.08) 1px, transparent 1px)", backgroundSize: "72px 72px", inset: 0, position: "absolute" }} />
      <div style={{ color: "#79d7f3", fontFamily: "monospace", fontSize: 21, letterSpacing: "0.18em", position: "relative" }}>FS / PORTFOLIO</div>
      <div style={{ fontSize: 82, fontWeight: 600, letterSpacing: "-0.07em", marginTop: 28, position: "relative" }}>{profile.name}</div>
      <div style={{ color: "#79d7f3", fontSize: 32, marginTop: 24, position: "relative" }}>{profile.tagline}</div>
    </div>,
    { ...size },
  );
}
