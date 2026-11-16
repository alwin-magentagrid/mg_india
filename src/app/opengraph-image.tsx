import { ImageResponse } from "next/og";

export const alt = "MagentaGrid India — website design and development company in Kerala";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Shared preview image for links posted on WhatsApp, LinkedIn, Facebook and X.
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(90deg, #ffebf6 0%, #ffffff 100%)",
          color: "#301a35",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              background: "#ce087d",
              color: "white",
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            MAGENTAGRID INDIA
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 44, fontWeight: 500 }}>Your Vision. Our Expertise.</div>
          <div style={{ fontSize: 76, fontStyle: "italic", color: "#b91974", lineHeight: 1.05 }}>
            Future-Ready Digital Solutions
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#6b626d" }}>
          <div>Websites • Business Software • Mobile Apps • AI</div>
          <div style={{ color: "#ce087d", fontWeight: 600 }}>Kerala, India</div>
        </div>
      </div>
    ),
    size,
  );
}
