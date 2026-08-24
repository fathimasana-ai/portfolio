import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#07080b", color: "#79d7f3", display: "flex", fontFamily: "monospace", fontSize: 25, fontWeight: 700, height: "100%", justifyContent: "center", width: "100%" }}>FS</div>,
    { width: 64, height: 64 },
  );
}
