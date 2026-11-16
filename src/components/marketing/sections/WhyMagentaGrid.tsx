import { HOME_WHY } from "@/content/home";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function WhyMagentaGrid() {
  return (
    <section aria-labelledby="why-heading" className="bg-white pt-16 pb-[66px]">
      <Container>
        <div className="grid gap-10 rounded-band bg-gradient-to-r from-plum-900 via-plum-700 via-60% to-plum-500 p-6 sm:p-10 lg:grid-cols-[1fr_1fr] lg:gap-[60px] lg:min-h-[390px] lg:px-12 lg:py-[43px]">
          <div>
            <Eyebrow tone="onDark" className="!text-pink-300">
              {HOME_WHY.eyebrow}
            </Eyebrow>
            <h2 id="why-heading" className="mt-[22px] leading-[1.2]">
              <span className="block text-t40 font-medium text-white">{HOME_WHY.headingLead}</span>{" "}
              <span className="block font-serif text-t49 text-pink-200 italic">{HOME_WHY.headingAccent}</span>
            </h2>
            <p className="mt-5 max-w-[510px] text-t17 text-mist-100">{HOME_WHY.statement}</p>
            <Button href={HOME_WHY.cta.href} variant="inverse" size="lg" className="mt-8">
              {HOME_WHY.cta.label}
            </Button>
          </div>
          <ol className="flex flex-col gap-8 lg:gap-7 lg:pt-1">
            {HOME_WHY.points.map((point, index) => (
              <li key={point.title} className="flex gap-6 lg:gap-[50px]">
                <span className="w-[45px] shrink-0 pt-[3px] text-t14 font-medium text-pink-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-t20 font-semibold text-white">{point.title}</h3>
                  <p className="mt-[10px] max-w-[395px] text-t14 text-mist-100">{point.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
