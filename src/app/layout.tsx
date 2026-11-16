import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { Navigation } from "@/components/marketing/Navigation";
import { WhatsAppButton } from "@/components/marketing/WhatsAppButton";
import { COMPANY_LEGAL_NAME, SITE_NAME, SITE_URL } from "@/lib/site";
import { PAGE_SEO } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: PAGE_SEO.home.title, template: `%s | ${SITE_NAME}` },
  description: PAGE_SEO.home.description,
  applicationName: SITE_NAME,
  authors: [{ name: COMPANY_LEGAL_NAME, url: SITE_URL }],
  creator: COMPANY_LEGAL_NAME,
  publisher: COMPANY_LEGAL_NAME,
  category: "technology",
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: { type: "website", locale: "en_IN", siteName: SITE_NAME },
  twitter: { card: "summary_large_image" },
  other: {
    "geo.region": "IN-KL",
    "geo.placename": "Palakkad, Kerala",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcfbf9",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:text-t14 focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navigation />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
