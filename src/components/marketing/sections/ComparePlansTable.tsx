import { COMPARE_CONTENT, COMPARE_ROWS } from "@/content/shared";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

const GRID_COLUMNS = "grid grid-cols-[minmax(150px,1.46fr)_repeat(3,minmax(170px,1fr))]";

export function ComparePlansTable() {
  return (
    <section
      id="compare"
      aria-labelledby="compare-heading"
      className="scroll-mt-4 bg-surface py-16"
    >
      <Container>
        <Eyebrow>{COMPARE_CONTENT.eyebrow}</Eyebrow>
        <h2 id="compare-heading" className="mt-[26px]">
          <span className="block text-t46 font-medium text-ink">{COMPARE_CONTENT.heading}</span>
          <span className="block font-serif text-t54 leading-[1.1] text-brand italic">
            {COMPARE_CONTENT.accent}
          </span>
        </h2>
        <p className="mt-[26px] max-w-[1100px] text-t16 text-muted">{COMPARE_CONTENT.body}</p>

        <div className="mt-[26px] overflow-x-auto rounded-card bg-white" tabIndex={0} role="region" aria-label="Website plan comparison table">
          <table className="w-full min-w-[820px] border-collapse text-left text-t14">
            <caption className="sr-only">
              Compare the Starter, Business CMS and Bespoke website plans
            </caption>
            <thead className="bg-plum-800 text-white">
              <tr role="row" className={cn(GRID_COLUMNS, "p-5")}>
                <th scope="col" role="columnheader" className="text-t18 font-semibold">
                  What’s included
                </th>
                {COMPARE_CONTENT.columns.map((column) => (
                  <th key={column.name} scope="col" role="columnheader" className="flex flex-col gap-[6px] pr-5 font-normal">
                    <span className="text-t20 font-semibold">{column.name}</span>
                    <span className="text-t29 font-medium text-pink-200">{column.price}</span>
                    <span className="text-t11 text-mist-100">{column.note}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((row, index) => (
                <tr
                  role="row"
                  key={row.label}
                  className={cn(GRID_COLUMNS, "min-h-[66px] items-center px-5 py-[15px]", index % 2 === 1 ? "bg-surface" : "bg-white")}
                >
                  <th scope="row" role="rowheader" className="pr-4 font-medium text-ink">
                    {row.label}
                  </th>
                  <td role="cell" className="pr-4 text-muted">{row.starter}</td>
                  <td role="cell" className="pr-4 text-muted">{row.businessCms}</td>
                  <td role="cell" className="pr-4 text-muted">{row.bespoke}</td>
                </tr>
              ))}
              <tr role="row" className={cn(GRID_COLUMNS, "items-center bg-white p-5")}>
                <td role="cell" className="pr-4 text-muted">
                  {COMPARE_CONTENT.calloutLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </td>
                {COMPARE_CONTENT.columns.map((column) => (
                  <td key={column.name} role="cell" className="pr-4">
                    <Button href={column.href} fullWidth>
                      {column.cta}
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-[26px] text-t12 text-muted">{COMPARE_CONTENT.footnote}</p>
      </Container>
    </section>
  );
}
