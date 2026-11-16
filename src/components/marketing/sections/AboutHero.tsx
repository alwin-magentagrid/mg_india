import { ABOUT_HERO } from "@/content/about";
import { AboutHeroIllustration } from "@/components/marketing/AboutHeroIllustration";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export function AboutHero() {
  return (
    <section aria-labelledby="about-hero-heading" className="px-5 pt-7 pb-14 sm:px-8 xl:px-[60px]">
      <div className="mx-auto max-w-[1320px]">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About MagentaGrid" }]} />
        <div className="mt-6 grid items-center gap-10 rounded-hero bg-[#fff0f8] p-6 sm:p-10 lg:grid-cols-[600px_1fr]">
          <div className="flex flex-col items-start gap-6">
            <h1 id="about-hero-heading">
              <span className="sr-only">{ABOUT_HERO.seoHeading}: </span>
              <span className="block text-t57 leading-[1.3] font-bold text-ink">{ABOUT_HERO.headingLead}</span>{" "}
              <span className="block font-serif text-t76 leading-[1.08] text-brand-accent italic">
                {ABOUT_HERO.headingAccent}
              </span>
            </h1>
            <p className="max-w-[580px] text-t17 leading-[1.45] text-muted-strong">{ABOUT_HERO.body}</p>
            <Button href={ABOUT_HERO.cta.href}>{ABOUT_HERO.cta.label}</Button>
          </div>
          <div className="mx-auto w-full max-w-[600px]">
            <AboutHeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
