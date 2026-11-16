import Image from "next/image";
import Link from "next/link";
import { HOME_SERVICES, type HomeServiceCard } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

function ServiceCard({ card }: { card: HomeServiceCard }) {
  return (
    <li className="flex min-h-[337px] flex-col rounded-card bg-white p-5 transition-shadow duration-200 hover:shadow-[0_12px_32px_rgb(51_35_67/0.08)]">
      <Image src={card.iconSrc} alt="" width={100} height={80} unoptimized className="h-20 w-[100px]" />
      <h3 className="mt-[18px] px-1 text-t23 leading-[1.25] font-semibold text-ink">{card.title}</h3>
      <p className="mt-4 flex-1 px-1 text-t14 text-muted">{card.description}</p>
      <Link
        href={card.href}
        className="mt-4 inline-flex min-h-11 items-center px-1 text-t13 font-semibold text-brand transition-colors duration-200 hover:text-brand-hover"
      >
        {card.linkLabel}
      </Link>
    </li>
  );
}

export function ServicesOverview() {
  return (
    <section id="services-overview" aria-labelledby="services-heading" className="scroll-mt-4 bg-surface pt-[66px] pb-[78px]">
      <Container>
        <Eyebrow>{HOME_SERVICES.eyebrow}</Eyebrow>
        <h2 id="services-heading" className="mt-[14px] leading-[1.2]">
          <span className="text-t48 font-medium text-ink">{HOME_SERVICES.headingLead} </span>
          <span className="font-serif text-t56 text-brand italic">{HOME_SERVICES.headingAccent}</span>
        </h2>
        <p className="mt-[7px] max-w-[900px] text-t17 text-muted">{HOME_SERVICES.subheading}</p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HOME_SERVICES.cards.map((card) => (
            <ServiceCard key={card.title} card={card} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
