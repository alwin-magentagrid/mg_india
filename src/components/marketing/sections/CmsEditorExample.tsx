import { CMS_EXAMPLE } from "@/content/business-cms";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-t12 text-muted">{label}</dt>
      <dd className="mt-3 rounded-[10px] border border-line bg-white px-4 py-[14px] text-t14 text-ink">{value}</dd>
    </div>
  );
}

function MockButton({ label, isPrimary }: { label: string; isPrimary: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex h-[43px] items-center rounded-full px-6 text-t13 font-semibold",
        isPrimary ? "bg-brand text-white" : "bg-white text-ink",
      )}
    >
      {label}
    </span>
  );
}

export function CmsEditorExample() {
  const { editor, preview } = CMS_EXAMPLE;

  return (
    <section id="cms-example" aria-labelledby="cms-example-heading" className="scroll-mt-4 bg-surface py-16">
      <Container>
        <Eyebrow>{CMS_EXAMPLE.eyebrow}</Eyebrow>
        <h2 id="cms-example-heading" className="mt-[26px]">
          <span className="block text-t46 leading-[1.45] font-medium text-ink">{CMS_EXAMPLE.headingLead}</span>{" "}
          <span className="block font-serif text-t54 leading-[1.1] text-brand italic">{CMS_EXAMPLE.headingAccent}</span>
        </h2>
        <p className="mt-6 max-w-[900px] text-t16 text-muted">{CMS_EXAMPLE.body}</p>

        <figure className="mt-10">
          <div className="overflow-hidden rounded-band border border-line bg-white">
            <div className="flex flex-wrap items-center justify-between gap-2 bg-plum-800 px-6 py-5 text-t12 text-white sm:px-[22px]">
              <p className="font-semibold">{editor.title}</p>
              <p className="text-mist-100">{editor.status}</p>
            </div>
            <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[20px] bg-surface p-6">
                <p className="text-t11 font-semibold text-brand">{editor.stepLabel}</p>
                <p className="mt-4 text-t23 font-semibold text-ink">{editor.page}</p>
                <dl className="mt-5 flex flex-col gap-5">
                  {editor.fields.map((field) => (
                    <FieldRow key={field.label} label={field.label} value={field.value} />
                  ))}
                  <div>
                    <dt className="text-t12 text-muted">{editor.imageLabel}</dt>
                    <dd className="mt-3 flex items-center gap-4 rounded-[10px] border border-line bg-white px-4 py-[14px] text-t14 text-ink">
                      <span>{editor.imageFile}</span>
                      <span aria-hidden="true">·</span>
                      <span>{editor.imageAction}</span>
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
                  {editor.actions.map((label, index) => (
                    <MockButton key={label} label={label} isPrimary={index === editor.actions.length - 1} />
                  ))}
                </div>
                <p className="mt-5 text-t12 text-muted">{editor.helper}</p>
              </div>

              <div className="rounded-[20px] border border-line bg-white p-6">
                <p className="text-t11 font-semibold text-brand">{preview.stepLabel}</p>
                <div className="mt-6 rounded-[20px] bg-lilac p-6">
                  <p className="flex items-center gap-3 text-[0.5625rem] text-muted">
                    <span aria-hidden="true" className="flex gap-[6px]">
                      <span className="size-[7px] rounded-full bg-muted-strong" />
                      <span className="size-[7px] rounded-full bg-muted-strong" />
                      <span className="size-[7px] rounded-full bg-muted-strong" />
                    </span>
                    {preview.address}
                  </p>
                  <p className="mt-6 text-t12 font-semibold text-ink">{preview.brand}</p>
                  <p className="mt-4 font-serif text-t52 leading-[1.1] text-ink italic">
                    {preview.headingLead}
                    <br />
                    {preview.headingAccent}
                  </p>
                  <p className="mt-4 max-w-[220px] text-t16 text-muted">{preview.intro}</p>
                  <p className="mt-5 rounded-[10px] bg-[#eee6f4] px-4 py-5 text-center text-t11 text-muted-strong">
                    {preview.photo}
                  </p>
                  <p className="mt-5 text-t12 font-semibold text-brand">{preview.link}</p>
                </div>
                <p className="mt-5 text-t12 text-muted">{preview.caption}</p>
              </div>
            </div>
          </div>
          <figcaption className="mt-5 text-t12 text-muted">{CMS_EXAMPLE.disclaimer}</figcaption>
        </figure>
      </Container>
    </section>
  );
}
