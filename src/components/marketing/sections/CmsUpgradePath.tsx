import Link from "next/link";
import { STARTER_UPGRADE } from "@/content/starter";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CmsUpgradePath() {
  const { card } = STARTER_UPGRADE;
  return (
    <section aria-labelledby="upgrade-heading" className="bg-surface py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-[1fr_380px] lg:gap-16">
        <div className="flex flex-col items-start gap-6">
          <Eyebrow>{STARTER_UPGRADE.eyebrow}</Eyebrow>
          <h2 id="upgrade-heading">
            <span className="block text-t46 leading-[1.45] font-medium text-ink">{STARTER_UPGRADE.headingLead}</span>{" "}
            <span className="block font-serif text-t54 leading-[1.1] text-brand italic">{STARTER_UPGRADE.headingAccent}</span>
          </h2>
          <p className="max-w-[700px] text-t16 text-muted">{STARTER_UPGRADE.body}</p>
          <Button href={STARTER_UPGRADE.cta.href}>{STARTER_UPGRADE.cta.label}</Button>
        </div>
        <div className="rounded-band bg-white p-8">
          <p className="text-t11 font-semibold text-brand-accent">{card.label}</p>
          <p className="mt-4 text-t58 leading-[1.2] font-medium text-ink">{card.price}</p>
          <p className="mt-4 text-t17 font-semibold text-ink">{card.title}</p>
          <p className="mt-3 text-t14 text-muted">{card.body}</p>
          <Link
            href={card.link.href}
            className="mt-6 inline-flex min-h-11 items-center text-t13 font-semibold text-brand transition-colors duration-200 hover:text-brand-hover"
          >
            {card.link.label}
          </Link>
        </div>
      </Container>
    </section>
  );
}
