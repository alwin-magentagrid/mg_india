import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/marketing/ContactForm";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { PageShell } from "@/components/marketing/PageShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import {
  CONTACT_FAQ,
  CONTACT_FAQ_ITEMS,
  CONTACT_HERO,
  CONTACT_INTRO,
  CONTACT_NEXT,
} from "@/content/contact";
import { CONTACT_SCHEMA } from "@/content/schemas";
import { buildFaqSchema } from "@/lib/schema";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/site";

export const metadata: Metadata = buildMetadata(PAGE_SEO.contact);

const EYEBROW = "text-t12 leading-[1.55] font-semibold tracking-[1.2px] text-brand uppercase";

function ContactHero() {
  return (
    <section aria-labelledby="contact-heading" className="px-3 pt-3 sm:px-5">
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center overflow-hidden rounded-hero bg-gradient-to-r from-canvas via-[#fff0f8] to-lilac px-5 pt-12 pb-14 sm:pt-16 lg:min-h-[402px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{ backgroundImage: "url(/images/contact/grain.png)", backgroundSize: "179px 69px" }}
        />
        <div className="relative flex max-w-[860px] flex-col items-center gap-5 text-center">
          <p className="rounded-full border border-white bg-white/70 px-4 py-2 text-t12 leading-[1.55] font-semibold tracking-[1.2px] text-brand uppercase">
            {CONTACT_HERO.badge}
          </p>
          <h1 id="contact-heading" className="text-[2.5rem] leading-[1.04] font-medium tracking-[-0.05em] text-ink sm:text-[3.5rem] lg:text-[4.5rem]">
            <span className="sr-only">{CONTACT_HERO.seoHeading}: </span>
            <span className="block">{CONTACT_HERO.headingLines[0]}</span>{" "}
            <span className="block">
              {CONTACT_HERO.headingLines[1]}
              <span className="font-serif text-[3.25rem] font-normal tracking-normal text-brand italic sm:text-[4.5rem] lg:text-[6rem]">
                {CONTACT_HERO.headingAccent}
              </span>
            </span>
          </h1>
          <p className="max-w-[610px] text-t16 leading-[1.65] text-muted-strong sm:text-t18">
            {CONTACT_HERO.bodyLines[0]} <br className="hidden sm:inline" />
            {CONTACT_HERO.bodyLines[1]}
          </p>
        </div>
        <div className="relative mt-8 flex w-[225px] flex-col items-center gap-[10px] xl:absolute xl:top-[132px] xl:right-[47px] xl:mt-0">
          <Image
            src="/images/contact/conversation.png"
            alt=""
            width={185}
            height={139}
            sizes="185px"
            className="h-[119px] w-[185px] object-cover object-top"
          />
          <p className="rotate-7 rounded-full border border-white bg-white/85 px-[18px] py-3 text-t13 font-semibold text-ink shadow-[0_12px_26px_rgba(53,33,95,0.13)]">
            {CONTACT_HERO.reassurance}
          </p>
        </div>
      </div>
    </section>
  );
}

function EnquirySection() {
  const { promise, help } = CONTACT_INTRO;
  return (
    <section aria-labelledby="contact-intro-heading" className="bg-white py-16 lg:py-[88px]">
      <Container className="flex flex-col gap-12 lg:flex-row lg:gap-[76px]">
        <div className="flex flex-col gap-8 lg:w-[400px] lg:shrink-0">
          <div className="flex flex-col gap-[22px]">
            <p className={EYEBROW}>{CONTACT_INTRO.eyebrow}</p>
            <h2 id="contact-intro-heading" className="text-t56 leading-[1.06] tracking-[-0.045em] text-ink">
              <span className="block">{CONTACT_INTRO.headingLead}</span>{" "}
              <span className="block lg:whitespace-nowrap">
                {CONTACT_INTRO.headingRest}
                <span className="font-serif tracking-normal text-brand italic">{CONTACT_INTRO.headingAccent}</span>
              </span>
            </h2>
            <p className="max-w-[365px] text-t17 leading-[1.7] text-muted">{CONTACT_INTRO.body}</p>
          </div>

          <div className="flex flex-col gap-[25px] rounded-band bg-gradient-to-r from-ink via-[#4a2c5d] via-60% to-plum-500 p-[30px]">
            <Image src="/icons/contact/message-circle.svg" alt="" width={25} height={25} />
            <p className="font-serif text-[2.375rem] leading-[1.13] text-white">
              {promise.lines[0]}
              <br />
              {promise.lines[1]}
            </p>
            <p className="text-t15 leading-[1.7] text-mist-100">{promise.body}</p>
            <p className="flex items-center gap-[10px] text-t13 text-white">
              <Image src="/icons/contact/check.svg" alt="" width={17} height={17} />
              {promise.commitment}
            </p>
          </div>

          <div className="flex flex-col gap-[13px] pt-1">
            <h3 className="text-t20 font-medium tracking-[-0.4px] text-ink">{help.title}</h3>
            <p className="text-t16 leading-[1.7] text-muted">{help.body}</p>
            <p className="text-t10 leading-[1.7] font-semibold tracking-[0.6px] text-muted">
              {help.audience[0]}
              <br />
              {help.audience[1]}
            </p>
            <div className="flex flex-col items-start gap-2 pt-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex min-h-11 items-center text-t14 font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                {CONTACT_EMAIL} <span aria-hidden="true">&nbsp;↗</span>
              </a>
              {WHATSAPP_URL ? (
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-t14 font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
                >
                  Message us on WhatsApp <span aria-hidden="true">&nbsp;↗</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1 rounded-band border border-line bg-surface p-6 sm:p-9">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

function NextSteps() {
  return (
    <section aria-labelledby="next-steps-heading" className="bg-lilac py-16 lg:py-[72px]">
      <Container className="flex flex-col items-center gap-[26px]">
        <p className={EYEBROW}>{CONTACT_NEXT.eyebrow}</p>
        <h2 id="next-steps-heading" className="text-center text-t54 leading-[1.1] tracking-[-0.045em] text-ink">
          {CONTACT_NEXT.heading}
          <span className="font-serif tracking-normal text-brand italic">{CONTACT_NEXT.headingAccent}</span>
        </h2>
        <ol className="grid w-full gap-[22px] pt-[14px] md:grid-cols-3">
          {CONTACT_NEXT.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col gap-[18px] rounded-[18px] border border-line bg-white p-7">
              <div className="flex items-center justify-between">
                <Image src={step.icon} alt="" width={23} height={23} />
                <span aria-hidden="true" className="font-serif text-[3rem] leading-none text-brand-deep italic">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-[1.3125rem] leading-[1.25] font-medium tracking-[-0.6px] text-ink">{step.title}</h3>
              <p className="text-t16 leading-[1.65] text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ContactFaq() {
  return (
    <section aria-labelledby="contact-faq-heading" className="bg-white py-16 lg:py-[88px]">
      <Container className="flex flex-col gap-10 lg:flex-row lg:gap-[100px]">
        <div className="flex flex-col gap-6 lg:w-[400px] lg:shrink-0">
          <p className={EYEBROW}>{CONTACT_FAQ.eyebrow}</p>
          <h2 id="contact-faq-heading" className="text-t56 leading-[1.08] tracking-[-0.045em] text-ink">
            <span className="block">{CONTACT_FAQ.headingLead}</span>{" "}
            <span className="block">
              {CONTACT_FAQ.headingRest}
              <span className="font-serif tracking-normal text-brand italic">{CONTACT_FAQ.headingAccent}</span>
            </span>
          </h2>
          <p className="max-w-[320px] text-t17 leading-[1.7] text-muted">{CONTACT_FAQ.intro}</p>
        </div>
        <div className="min-w-0 flex-1">
          <FaqAccordion items={CONTACT_FAQ_ITEMS} />
        </div>
      </Container>
    </section>
  );
}

export default function ContactPage() {
  return (
    <PageShell footerVariant="web">
      <JsonLd data={[...CONTACT_SCHEMA, buildFaqSchema(CONTACT_FAQ_ITEMS)]} />
      <ContactHero />
      <EnquirySection />
      <NextSteps />
      <ContactFaq />
    </PageShell>
  );
}
