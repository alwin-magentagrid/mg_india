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
      <Image src={src} alt="" width={600} height={580} unoptimized className="size-full" />
    </span>
  );
}

interface CollaboratorProps {
  left: number;
  top: number;
  role: string;
  headSrc: string;
  isAccent: boolean;
}

function Collaborator({ left, top, role, headSrc, isAccent }: CollaboratorProps) {
  return (
    <div style={rect(left, top, 130, 155)}>
      <div style={{ ...rect(8, 58, 114, 77), borderRadius: u(23), backgroundImage: gradient(138, "#67447c", "#352040") }} />
      <div
        style={{
          ...rect(0, 50, 114, 77),
          borderRadius: u(23),
          border: `${u(1)} solid #e7cdf4`,
          boxShadow: `0 ${u(11)} ${u(20)} rgb(0 0 0 / 0.3)`,
          backgroundImage: gradient(138, "#ead7f6", "#a583bc"),
        }}
      />
      <div
        style={{
          ...rect(22, 56, 70, 54),
          borderRadius: u(24),
          backgroundImage: isAccent ? gradient(134, "#ff9bd8", "#b80d76") : gradient(134, "#ede1fa", "#a385bb"),
        }}
      />
      <StageImage src={headSrc} style={rect(38, 10, 40, 40)} />
      <div style={{ ...rect(5, 134, 114, 23), borderRadius: u(12), backgroundImage: gradient(165, "#f0e8f2", "#dfd1e7") }} />
      <p
        style={{ position: "absolute", left: u(5), top: u(141), width: u(114), fontSize: u(8) }}
        className="text-center leading-[1.2] font-semibold text-[#65426f]"
      >
        {role}
      </p>
    </div>
  );
}

export function AboutHeroIllustration() {
  return (
    <div aria-hidden="true" className="relative aspect-[600/580] w-full [container-type:inline-size]">
      <StageImage src="/images/about/grounding-shadow.svg" style={rect(62, 460, 484, 92)} />
      <StageImage src="/images/about/pedestal-depth.svg" style={rect(95, 445, 410, 71)} />
      <div style={{ ...rect(95, 457, 410, 23), backgroundImage: gradient(176, "#d62391", "#6b205e") }} />
      <StageImage src="/images/about/pedestal-top.svg" style={rect(95, 429, 410, 70)} />
      <StageImage src="/images/about/network.svg" style={rect(0, 0, 600, 580)} />
      <div style={{ ...rect(184, 211, 240, 226), borderRadius: u(26), backgroundImage: gradient(128.5, "#805e92", "#3b254b") }} />
      <div
        style={{
          ...rect(174, 200, 240, 226),
          borderRadius: u(26),
          border: `${u(1)} solid #ebd8f6`,
          boxShadow: `0 ${u(14)} ${u(24)} rgb(0 0 0 / 0.3)`,
          backgroundImage: gradient(128.5, "#faeffd", "#c3a9d9"),
        }}
      />
      <div style={{ ...rect(201, 225, 186, 5), borderRadius: u(2), backgroundImage: gradient(178, "#f272bb", "#bc0875") }} />
      <p
        style={{ position: "absolute", left: u(193), top: u(246), width: u(202), fontSize: u(18) }}
        className="text-center leading-[1.2] font-semibold text-[#8d276e]"
      >
        MAGENTAGRID
      </p>
      <p
        style={{ position: "absolute", left: u(190), top: u(287), width: u(208), fontSize: u(30) }}
        className="text-center font-serif leading-[1.2] text-[#3b2246] italic"
      >
        One team.
        <br />
        Shared vision.
      </p>
      <p
        style={{ position: "absolute", left: u(192), top: u(383), width: u(204), fontSize: u(8) }}
        className="text-center leading-[1.2] font-semibold text-[#765587]"
      >
        IDEAS · PEOPLE · TECHNOLOGY
      </p>
      <Collaborator left={225} top={24} role="STRATEGY" headSrc="/images/about/head-pink.svg" isAccent />
      <Collaborator left={18} top={244} role="DESIGN" headSrc="/images/about/head-lavender.svg" isAccent={false} />
      <Collaborator left={450} top={244} role="ENGINEERING" headSrc="/images/about/head-pink.svg" isAccent />
      <StageImage src="/images/about/idea-orb.svg" style={rect(470, 93, 32, 32)} />
      <StageImage src="/images/about/possibility-orb.svg" style={rect(86, 108, 22, 22)} />
      <p
        style={{ position: "absolute", left: u(115), top: u(539), width: u(370), fontSize: u(11) }}
        className="text-center leading-[1.2] font-semibold text-[#65426f]"
      >
        BUSINESS-FIRST. PEOPLE-CENTRED.
      </p>
    </div>
  );
}
