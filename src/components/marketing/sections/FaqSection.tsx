import type { FaqItem } from "@/content/shared";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";
import { CONTACT_EMAIL } from "@/lib/site";

interface FaqSectionProps {
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  intro: string;
  items: FaqItem[];
  showContactBox?: boolean;
  tone?: "surface" | "white";
}

export function FaqSection({
  eyebrow,
  headingLead,
  headingAccent,
  intro,
  items,
  showContactBox = false,
  tone = "surface",
}: FaqSectionProps) {
  return (
    <section aria-labelledby="faq-heading" className={cn("py-16 md:pt-[70px] md:pb-10", tone === "surface" ? "bg-surface" : "bg-white")}>
      <Container className="grid gap-10 lg:grid-cols-[2fr_3fr] lg:gap-0">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id="faq-heading" className="mt-[11px]">
            <span className="block text-t43 font-medium text-ink">{headingLead}</span>{" "}
            <span className="block font-serif text-t51 text-brand italic">{headingAccent}</span>
          </h2>
          <p className="mt-6 max-w-[350px] text-t16 text-muted">{intro}</p>
          {showContactBox ? (
            <p className="mt-[60px] text-t14 font-medium text-ink">
              Still have a question?
              <br />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="transition-colors duration-200 hover:text-brand"
              >
                {CONTACT_EMAIL} <span aria-hidden="true">↗</span>
              </a>
            </p>
          ) : null}
        </div>
        <FaqAccordion items={items} />
      </Container>
    </section>
  );
}
