import type { NumberedItem } from "@/content/web-development";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";

interface NumberedCardGridProps {
  id: string;
  eyebrow: string;
  headingLead: string;
  headingAccent?: string;
  body?: string;
  items: NumberedItem[];
  tone: "white" | "surface";
  columns?: 2 | 3 | 5;
}

export function NumberedCardGrid({
  id,
  eyebrow,
  headingLead,
  headingAccent,
  body,
  items,
  tone,
  columns = 3,
}: NumberedCardGridProps) {
  const headingId = `${id}-heading`;
  const isSurface = tone === "surface";

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-4 py-16", isSurface ? "bg-surface" : "bg-white")}
    >
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={headingId} className="mt-[26px]">
          <span className="block text-t46 leading-[1.45] font-medium text-ink">{headingLead}</span>{" "}
          {headingAccent ? (
            <span className="block font-serif text-t54 leading-[1.1] text-brand italic">{headingAccent}</span>
          ) : null}
        </h2>
        {body ? <p className="mt-6 max-w-[900px] text-t16 text-muted">{body}</p> : null}
        <ol className={cn("mt-10 grid gap-6 sm:grid-cols-2", columns === 5 ? "lg:grid-cols-5" : columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2")}>
          {items.map((item, index) => (
            <li
              key={item.title}
              className={cn("rounded-card p-5 pb-6", isSurface ? "bg-white" : "bg-surface")}
            >
              <p className="text-t11 font-semibold text-brand">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-6 text-t20 font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-t14 text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
