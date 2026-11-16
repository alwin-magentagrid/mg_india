import type { Metadata } from "next";
import { LegalPageView } from "@/components/marketing/LegalPageView";
import { PRIVACY_POLICY } from "@/content/legal";
import { PAGE_SEO, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata(PAGE_SEO.privacy);

export default function PrivacyPolicyPage() {
  return (
    <LegalPageView
      page={PRIVACY_POLICY}
      title="Privacy Policy"
      path={PAGE_SEO.privacy.path}
      related={{ label: "Cookie Policy", href: PAGE_SEO.cookies.path }}
    />
  );
}
