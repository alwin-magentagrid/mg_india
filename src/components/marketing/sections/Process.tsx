import { PROCESS_CONTENT, PROCESS_STEPS } from "@/content/shared";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="bg-lilac pt-[57px] pb-[61px]">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 xl:px-0">
        <div className="text-center">
          <Eyebrow>{PROCESS_CONTENT.eyebrow}</Eyebrow>
          <h2 id="process-heading" className="mt-[13px] text-t42 font-medium text-ink">
            {PROCESS_CONTENT.heading}
          </h2>
          <p className="mx-auto mt-[7px] max-w-[900px] text-t24 text-muted">
            {PROCESS_CONTENT.subheading}
          </p>
        </div>

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[13px]">
          {PROCESS_STEPS.map((step, index) => (
            <li key={step.title} className="min-h-[212px] rounded-[18px] bg-white px-[22px] pt-[18px] pb-5 lg:h-[212px]">
              <p className="text-t29 font-medium text-brand">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-[17px] text-t18 font-semibold text-ink">{step.title}</h3>
              <p className="mt-[13px] text-t14 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
