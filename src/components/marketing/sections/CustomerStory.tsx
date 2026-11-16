import { HOME_STORY } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function CustomerStory() {
  return (
    <section aria-label="Customer story" className="bg-white pt-[62px] pb-[30px]">
      <Container className="text-center">
        <Eyebrow>{HOME_STORY.eyebrow}</Eyebrow>
        <figure className="mt-8">
          <blockquote className="mx-auto max-w-[990px] font-serif text-t43 leading-[1.45] text-ink italic">
            <p>“{HOME_STORY.quote}”</p>
          </blockquote>
          <figcaption className="mt-[15px]">
            <span className="block text-t15 font-semibold text-ink">{HOME_STORY.name}</span>
            <span className="mt-[6px] block text-t12 text-muted">{HOME_STORY.role}</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
