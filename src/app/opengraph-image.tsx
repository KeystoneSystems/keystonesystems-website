import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Keystone Systems — AI & Automation Consulting for NZ Small Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1A1A1B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Terracotta accent bar */}
        <div
          style={{
            width: "60px",
            height: "4px",
            background: "#CD5C36",
            borderRadius: "2px",
            marginBottom: "32px",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#CD5C36",
            marginBottom: "20px",
          }}
        >
          AI & Automation Consulting · New Zealand
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 900,
            color: "#FFFFFF",
            lineHeight: 1.05,
            maxWidth: "800px",
            marginBottom: "24px",
          }}
        >
          Your team shouldn&apos;t be the glue between your systems.
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: "22px",
            color: "#C4BDB5",
            maxWidth: "680px",
            lineHeight: 1.5,
            marginBottom: "48px",
          }}
        >
          Fixed-fee automation projects. Clean handover. You own everything we build.
        </div>

        {/* Bottom: domain */}
        <div
          style={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#CD5C36",
          }}
        >
          keystonesystems.co.nz
        </div>
      </div>
    ),
    { ...size }
  );
}
