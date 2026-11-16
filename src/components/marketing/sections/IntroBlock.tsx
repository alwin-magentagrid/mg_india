import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface IntroBlockProps {
  id: string;
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  body: string;
}

export function IntroBlock({ id, eyebrow, headingLead, headingAccent, body }: IntroBlockProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="bg-white py-16">
      <Container>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={headingId} className="mt-[26px]">
          <span className="block text-t46 leading-[1.45] font-medium text-ink">{headingLead}</span>{" "}
          <span className="block font-serif text-t54 leading-[1.1] text-brand italic">{headingAccent}</span>
        </h2>
        <p className="mt-6 max-w-[900px] text-t16 text-muted">{body}</p>
      </Container>
    </section>
  );
}
