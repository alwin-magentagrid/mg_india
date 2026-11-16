import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface DarkBandProps {
  id: string;
  eyebrow: string;
  heading: string;
  body: string;
  tags?: string[];
  footnote?: string;
}

export function DarkBand({ id, eyebrow, heading, body, tags, footnote }: DarkBandProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="bg-plum-800 py-16">
      <Container>
        <Eyebrow tone="onDark">{eyebrow}</Eyebrow>
        <h2 id={headingId} className="mt-6 text-t46 leading-[1.45] font-medium text-white">
          {heading}
        </h2>
        <p className="mt-6 max-w-[900px] text-t16 text-mist-100">{body}</p>
        {tags ? (
          <ul className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-t12 text-pink-300">
            {tags.map((tag, index) => (
              <li key={tag} className="flex items-center gap-4">
                {index > 0 ? <span aria-hidden="true">·</span> : null}
                <span>{tag}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {footnote ? <p className="mt-6 max-w-[900px] text-t14 text-mist-100">{footnote}</p> : null}
      </Container>
    </section>
  );
}
