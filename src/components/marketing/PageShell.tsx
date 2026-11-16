import type { ReactNode } from "react";
import { Footer, type FooterVariant } from "./Footer";

interface PageShellProps {
  children: ReactNode;
  footerVariant?: FooterVariant;
  showCompanyLine?: boolean;
}

export function PageShell({ children, footerVariant, showCompanyLine }: PageShellProps) {
  return (
    <>
      <main id="main-content">{children}</main>
      <Footer variant={footerVariant} showCompanyLine={showCompanyLine} />
    </>
  );
}
