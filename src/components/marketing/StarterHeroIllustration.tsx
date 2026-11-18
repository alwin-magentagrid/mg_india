import Image from "next/image";
import type { CSSProperties } from "react";

const STAGE_WIDTH = 600;

function u(pixels: number): string {
  return `${((pixels / STAGE_WIDTH) * 100).toFixed(3)}cqw`;
}

function rect(left: number, top: number, width: number, height: number): CSSProperties {
  return { position: "absolute", left: u(left), top: u(top), width: u(width), height: u(height) };
}

function gradient(angle: number, from: string, to: string): string {
  return `linear-gradient(${angle}deg, ${from} 0%, ${to} 71.429%)`;
}

function StageImage({ src, style }: { src: string; style: CSSProperties }) {
  return (
    <span style={style} className="block">
      <Image src={src} alt="" width={200} height={200} unoptimized className="size-full" />
    </span>
  );
}

function Text({
  style,
  size,
  className,
  children,
}: {
  style: CSSProperties;
  size: number;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <p style={{ position: "absolute", fontSize: u(size), ...style }} className={className}>
      {children}
    </p>
  );
}

function MockBrowser() {
  return (
    <div style={{ ...rect(76, 75.8, 448, 340), transform: "rotate(-5deg)" }}>
      <div style={{ ...rect(12, 16, 432, 328), borderRadius: u(22), backgroundImage: gradient(134.6, "#5d456f", "#25162f") }} />
      <div style={{ ...rect(7, 10, 432, 328), borderRadius: u(22), backgroundImage: gradient(134.6, "#9c88ad", "#4b315b") }} />
      <div
        style={{
          ...rect(0, 0, 432, 328),
          borderRadius: u(22),
          border: `${u(1.5)} solid #f5e9ff`,
          boxShadow: `0 ${u(22)} ${u(35)} rgb(0 0 0 / 0.35)`,
          backgroundImage: gradient(134.6, "#f0e8f9", "#a18ab8"),
        }}
      />
      <div style={{ ...rect(12, 39, 408, 275), borderRadius: u(14), background: "#f8f3fb" }} />
      <StageImage src="/images/starter/window-control-0.svg" style={rect(18, 16, 7, 7)} />
      <StageImage src="/images/starter/window-control-1.svg" style={rect(33, 16, 7, 7)} />
      <StageImage src="/images/starter/window-control-1.svg" style={rect(48, 16, 7, 7)} />
      <div style={{ ...rect(84, 12, 260, 14), borderRadius: u(7), background: "#e0d3ea" }} />
      <Text size={10} className="leading-[1.4] font-semibold text-[#5d3b69]" style={{ left: u(32), top: u(58) }}>
        YOUR BUSINESS
      </Text>
      <Text size={8} className="leading-[1.4] whitespace-pre text-[#6e5a80]" style={{ left: u(186), top: u(60) }}>
        {"About   Services   Contact"}
      </Text>
      <Text size={33} className="font-serif leading-[1.06] text-[#382242] italic" style={{ left: u(32), top: u(94), width: u(230) }}>
        Small business.
        <br />
        Big possibilities.
      </Text>
      <div style={{ ...rect(32, 179, 170, 5), borderRadius: u(2), background: "#b4a0bf" }} />
      <div style={{ ...rect(32, 190, 135, 5), borderRadius: u(2), background: "#cabbd3" }} />
      <div style={{ ...rect(32, 212, 120, 24), borderRadius: u(12), backgroundImage: gradient(165, "#ea2c9d", "#b50068") }} />
      <Text size={8} className="leading-[1.4] font-semibold whitespace-pre text-white" style={{ left: u(46), top: u(218) }}>
        {"Let’s Connect  ↗"}
      </Text>
      <div style={{ ...rect(264, 91, 130, 150), borderRadius: u(18), backgroundImage: gradient(123, "#e4d3ef", "#b999d1") }} />
      <StageImage src="/images/starter/magenta-sculpture.svg" style={rect(287, 111, 86, 86)} />
      <StageImage src="/images/starter/sculpture-shadow.svg" style={rect(277, 200, 104, 15)} />
      <div style={{ ...rect(32, 264, 108, 28), borderRadius: u(8), background: "#eae0f0" }} />
      <div style={{ ...rect(154, 264, 108, 28), borderRadius: u(8), background: "#efd8e9" }} />
      <div style={{ ...rect(276, 264, 108, 28), borderRadius: u(8), background: "#eae0f0" }} />
    </div>
  );
}

function MockPhone() {
  return (
    <div style={{ ...rect(439, 291, 116, 220), transform: "rotate(8deg)" }}>
      <div style={{ ...rect(5, 7, 112, 216), borderRadius: u(21), backgroundImage: gradient(111, "#7e648e", "#302039") }} />
      <div
        style={{
          ...rect(0, 0, 112, 216),
          borderRadius: u(21),
          border: `${u(1)} solid #e2d0ef`,
          boxShadow: `0 ${u(14)} ${u(24)} rgb(0 0 0 / 0.35)`,
          backgroundImage: gradient(111, "#f6f0fc", "#a28bb3"),
        }}
      />
      <div style={{ ...rect(6, 7, 100, 201), borderRadius: u(16), background: "#f8f3fb" }} />
      <div style={{ ...rect(36, 10, 40, 8), borderRadius: u(5), background: "#382242" }} />
      <Text size={7} className="leading-[1.4] font-semibold text-[#6e4b7d]" style={{ left: u(16), top: u(33) }}>
        YOUR
        <br />
        BUSINESS
      </Text>
      <Text size={22} className="font-serif leading-[1.06] text-[#382242] italic" style={{ left: u(16), top: u(65), width: u(82) }}>
        Hello,
        <br />
        we’re here.
      </Text>
      <div style={{ ...rect(16, 121, 80, 43), borderRadius: u(8), backgroundImage: gradient(144, "#f387c6", "#b96cb5") }} />
      <div style={{ ...rect(16, 179, 64, 13), borderRadius: u(7), background: "#ce087d" }} />
    </div>
  );
}

function PagesPlaque() {
  return (
    <div
      style={{
        position: "absolute",
        left: u(16),
        top: u(357),
        width: u(190),
        padding: u(18),
        borderRadius: u(18),
        border: `${u(1)} solid white`,
        boxShadow: `0 ${u(15)} ${u(25)} rgb(0 0 0 / 0.3)`,
        backgroundImage: gradient(141, "#f6e8ff", "#bba1ce"),
        transform: "rotate(-7deg)",
      }}
    >
      <p style={{ fontSize: u(32) }} className="leading-[1.4] font-bold text-[#6e2c72]">
        05
      </p>
      <p style={{ fontSize: u(9), marginTop: u(5) }} className="leading-[1.4] font-semibold text-[#5d3b69]">
        PAGES TO TELL
        <br />
        YOUR BUSINESS STORY
      </p>
    </div>
  );
}

export function StarterHeroIllustration() {
  return (
    <div aria-hidden="true" className="relative aspect-[600/590] w-full [container-type:inline-size]">
      <StageImage src="/images/starter/grounding-shadow.svg" style={rect(23, 472, 554, 108)} />
      <StageImage src="/images/starter/platform-body.svg" style={rect(52, 474, 490, 77)} />
      <StageImage src="/images/starter/platform-top.svg" style={rect(52, 457, 490, 65)} />
      <MockBrowser />
      <MockPhone />
      <PagesPlaque />
      <StageImage src="/images/starter/floating-orb.svg" style={rect(485, 50, 48, 48)} />
      <StageImage src="/images/starter/small-orb.svg" style={rect(30, 48, 24, 24)} />
    </div>
  );
}
