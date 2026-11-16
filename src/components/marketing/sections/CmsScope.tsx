import { CMS_SCOPE } from "@/content/business-cms";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ListCard } from "@/components/ui/ListCard";

export function CmsScope() {
  return (
    <section aria-labelledby="cms-scope-heading" className="bg-surface py-16">
      <Container>
        <Eyebrow>{CMS_SCOPE.eyebrow}</Eyebrow>
        <h2 id="cms-scope-heading" className="mt-[26px]">
          <span className="block text-t46 leading-[1.45] font-medium text-ink">{CMS_SCOPE.headingLead}</span>{" "}
          <span className="block font-serif text-t54 leading-[1.1] text-brand italic">{CMS_SCOPE.headingAccent}</span>
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ListCard title={CMS_SCOPE.manageTitle} items={CMS_SCOPE.manage} marker="✓" />
          <ListCard title={CMS_SCOPE.helpTitle} items={CMS_SCOPE.help} marker="↗" />
        </div>
        <p className="mt-6 text-t12 text-muted">{CMS_SCOPE.note}</p>
      </Container>
    </section>
  );
}
