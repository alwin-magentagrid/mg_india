import Image from "next/image";
import {
  ABOUT_CAPABILITIES,
  ABOUT_COMPANY,
  ABOUT_MISSION,
  ABOUT_PURPOSE,
} from "@/content/about";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface HeadingPairProps {
  id: string;
  lead: string;
  accent?: string;
  leadClassName?: string;
}

function HeadingPair({ id, lead, accent, leadClassName = "text-t46" }: HeadingPairProps) {
  return (
    <h2 id={id} className="mt-[26px]">
      <span className={`block leading-[1.45] font-medium text-ink ${leadClassName}`}>{lead}</span>
      {accent ? (
        <span className="block font-serif text-t54 leading-[1.1] text-brand italic">{accent}</span>
      ) : null}
    </h2>
  );
}

export function AboutPurpose() {
  return (
    <section aria-labelledby="purpose-heading" className="bg-white py-16">
      <Container className="grid gap-10 lg:grid-cols-[571px_1fr] lg:gap-0">
        <div>
          <Eyebrow>{ABOUT_PURPOSE.eyebrow}</Eyebrow>
          <HeadingPair id="purpose-heading" lead={ABOUT_PURPOSE.headingLead} accent={ABOUT_PURPOSE.headingAccent} />
        </div>
        <div className="flex flex-col gap-6">
          {ABOUT_PURPOSE.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={index === 0 ? "text-t18 text-ink" : "text-t17 text-muted"}>
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutMission() {
  return (
    <section aria-labelledby="mission-heading" className="bg-surface py-16">
      <Container>
        <Eyebrow>{ABOUT_MISSION.eyebrow}</Eyebrow>
        <HeadingPair id="mission-heading" lead={ABOUT_MISSION.headingLead} accent={ABOUT_MISSION.headingAccent} />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {ABOUT_MISSION.cards.map((card) => (
            <article key={card.label} className="rounded-[20px] bg-white p-6 sm:p-8">
              <p className="text-t10 font-semibold text-brand">{card.label}</p>
              <h3 className="mt-5 text-t29 leading-[1.3] font-medium text-ink">{card.title}</h3>
              <p className="mt-5 text-t14 text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function AboutCapabilities() {
  const { feature, others } = ABOUT_CAPABILITIES;
  return (
    <section aria-labelledby="capabilities-heading" className="bg-surface py-16">
      <Container>
        <Eyebrow>{ABOUT_CAPABILITIES.eyebrow}</Eyebrow>
        <HeadingPair
          id="capabilities-heading"
          lead={ABOUT_CAPABILITIES.headingLead}
          accent={ABOUT_CAPABILITIES.headingAccent}
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-[5fr_6fr]">
          <article className="flex flex-col items-start rounded-band bg-night p-6 sm:p-8">
            <p className="text-t10 font-semibold text-night-pink">{feature.label}</p>
            <Image src="/icons/web-development.svg" alt="" width={100} height={80} unoptimized className="mt-5 h-16 w-auto" />
            <h3 className="mt-6 max-w-[320px] text-t34 leading-[1.4] font-medium text-white">{feature.title}</h3>
            <p className="mt-6 max-w-[460px] text-t14 text-night-text">{feature.body}</p>
            <Button href={feature.cta.href} size="lg" className="mt-8">
              {feature.cta.label}
            </Button>
          </article>
          <ul className="flex flex-col gap-6">
            {others.map((item) => (
              <li key={item.label} className="rounded-[20px] bg-white p-6">
                <p className="text-t10 font-semibold text-brand">{item.label}</p>
                <p className="mt-4 text-t15 text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function AboutCompany() {
  const { name, cin, office } = ABOUT_COMPANY;
  return (
    <section aria-labelledby="company-heading" className="bg-white py-16">
      <Container>
        <Eyebrow>{ABOUT_COMPANY.eyebrow}</Eyebrow>
        <HeadingPair id="company-heading" lead={ABOUT_COMPANY.headingLead} accent={ABOUT_COMPANY.headingAccent} />
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[3fr_2.5fr]">
          <div className="rounded-[20px] bg-surface p-6 sm:p-8">
            <p className="text-t10 font-semibold text-brand">{name.label}</p>
            <p className="mt-5 text-t29 leading-[1.3] font-medium text-ink">{name.value}</p>
            <p className="mt-6 text-t10 font-semibold text-brand">{cin.label}</p>
            <p className="mt-5 text-t18 font-semibold text-ink">{cin.value}</p>
            <p className="mt-4 text-t14 text-muted">
              {cin.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div className="rounded-[20px] bg-surface p-6 sm:p-8">
            <p className="text-t10 font-semibold text-brand">{office.label}</p>
            <p className="mt-5 text-t29 leading-[1.3] font-medium text-ink">{office.value}</p>
            <p className="mt-6 text-t14 text-muted">
              {office.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-6 text-t13 font-semibold text-brand">
              {office.enquiryLabel}
              <br />
              <a href="mailto:contact@magentagrid.com" className="transition-colors duration-200 hover:text-brand-hover">
                contact@magentagrid.com
              </a>
            </p>
          </div>
        </div>
        <p className="mt-6 text-t12 text-muted">{ABOUT_COMPANY.listing}</p>
      </Container>
    </section>
  );
}
