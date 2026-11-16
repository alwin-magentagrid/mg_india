import {
  PLANS_CONTENT,
  getPlanCards,
  type PlanCardContent,
  type PlansVariant,
} from "@/content/shared";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

interface PlanCardProps {
  plan: PlanCardContent;
}

function PlanCard({ plan }: PlanCardProps) {
  const isFeatured = plan.id === "business-cms";

  return (
    <article
      className={cn(
        "flex flex-col rounded-panel p-[30px] lg:min-h-[530px]",
        isFeatured
          ? "bg-gradient-to-r from-plum-900 via-plum-700 via-60% to-plum-500 text-white"
          : "bg-surface text-ink",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-t23 font-semibold">{plan.name}</h3>
        {plan.badge ? (
          <span className="rounded-[14px] bg-pink-100 px-[13px] py-[6px] text-[10px] font-bold text-brand-hover">
            {plan.badge}
          </span>
        ) : null}
      </div>
      <p className={cn("mt-[13px] text-t13", isFeatured ? "text-mist-200" : "text-muted")}>
        {plan.audience}
      </p>
      <p className="mt-[17px] text-[2.875rem] leading-[1.45] font-medium">{plan.price}</p>
      <p className={cn("mt-px text-t12", isFeatured ? "text-mist-200" : "text-muted")}>
        {plan.priceNote}
      </p>
      <p className={cn("mt-[22px] min-h-[3.25rem] text-t15", isFeatured ? "text-mist-200" : "text-muted")}>
        {plan.summary}
      </p>
      <hr className={cn("mt-6 border-t", isFeatured ? "border-plum-line" : "border-line")} />
      <ul className="mt-[22px] flex flex-1 flex-col gap-[10px] text-t13">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-3">
            <span aria-hidden="true">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={plan.href}
        size="lg"
        fullWidth
        variant={isFeatured ? "inverse" : "primary"}
        className="mt-[10px]"
      >
        {plan.cta}
      </Button>
    </article>
  );
}

interface PlanCardsProps {
  variant?: PlansVariant;
}

export function PlanCards({ variant = "home" }: PlanCardsProps) {
  const content = PLANS_CONTENT[variant];
  return (
    <section id="plans" aria-labelledby="plans-heading" className={cn("scroll-mt-4 bg-white pt-10", content.customLine ? "pb-11" : "pb-[82px]")}>
      <Container>
        <div className="text-center">
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h2 id="plans-heading" className="mt-[13px] text-t48 font-medium text-ink">
            {content.heading}
          </h2>
          <p className="mx-auto mt-[7px] max-w-[900px] text-t17 text-muted">
            {content.subheading}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-[61px] lg:grid-cols-3">
          {getPlanCards().map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="mt-[29px] text-center text-t12 text-muted">{content.footnote}</p>
        {content.customLine ? (
          <p className="mt-3 text-center text-t14 text-muted">
            {content.customLine.text}{" "}
            <Link
              href={content.customLine.href}
              className="font-semibold text-brand transition-colors duration-200 hover:text-brand-hover"
            >
              {content.customLine.linkLabel}
            </Link>
          </p>
        ) : null}
      </Container>
    </section>
  );
}
