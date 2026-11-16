import type { Metadata } from "next";
import { LegalPageView } from "@/components/marketing/LegalPageView";
import { COOKIE_POLICY } from "@/content/legal";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.cookies);

export default function CookiePolicyPage() {
  return (
    <LegalPageView
      page={COOKIE_POLICY}
      title="Cookie Policy"
      path={PAGE_SEO.cookies.path}
      related={{ label: "Privacy Policy", href: PAGE_SEO.privacy.path }}
    />
  );
}
