import type { NewsBlock } from "./news";

// Plain-language policies written for the Digital Personal Data Protection Act, 2023 (India).
// Review with a legal adviser before launch, and update if analytics, ads or new providers are added.

export interface LegalPage {
  eyebrow: string;
  headingLead: string;
  headingAccent: string;
  intro: string;
  lastUpdated: string;
  body: NewsBlock[];
}

export const LEGAL_LAST_UPDATED = "2026-11-16";

export const PRIVACY_POLICY: LegalPage = {
  eyebrow: "PRIVACY POLICY",
  headingLead: "Your details.",
  headingAccent: "Handled with care.",
  intro:
    "This policy explains what personal data MagentaGrid collects through this website, why we use it, who we share it with and the choices you have.",
  lastUpdated: LEGAL_LAST_UPDATED,
  body: [
    { type: "heading", text: "1. Who we are" },
    {
      type: "paragraph",
      text: "This website is run by MagentaGrid Technologies Private Limited (CIN U62090KL2026PTC103432), a company registered in Kerala, India, with its registered office at Door No. 6/305, Vavanoor Centre, Ottappalam, Palakkad, Kerala 679533. In this policy, “MagentaGrid”, “we” and “us” mean this company. For the purposes of the Digital Personal Data Protection Act, 2023, we are the Data Fiduciary for the personal data described here.",
    },
    { type: "heading", text: "2. What we collect" },
    { type: "paragraph", text: "When you send an enquiry through our contact form, we collect:" },
    {
      type: "list",
      items: [
        "Your name, email address and business name",
        "Your phone or WhatsApp number, if you choose to share it",
        "The type of help you need and your existing website address, if you add one",
        "The message you write to us",
        "A record that you acknowledged this privacy policy, and the date you contacted us",
      ],
    },
    {
      type: "paragraph",
      text: "If you email us or message us on WhatsApp, we receive the details you include in that message. When you visit the website, our hosting provider automatically records basic technical information, such as your IP address, browser type and the pages requested, to keep the website secure and running. We do not use analytics, advertising or tracking tools on this website.",
    },
    { type: "heading", text: "3. Why we use your data" },
    {
      type: "list",
      items: [
        "To reply to your enquiry and answer your questions",
        "To prepare a quote and agree the scope of a website, software, mobile app or AI project",
        "To deliver and support a project if you become a client",
        "To keep the website secure and prevent spam or misuse",
        "To meet our legal, tax and accounting obligations",
      ],
    },
    {
      type: "paragraph",
      text: "We process enquiry data on the basis of the consent you give when you tick the acknowledgement box and send the form, and for legitimate uses permitted by law, such as responding to a request you started. We never sell your personal data, and we will not add you to marketing emails without asking first.",
    },
    { type: "heading", text: "4. Who we share it with" },
    {
      type: "paragraph",
      text: "We only share personal data with service providers who help us run the website and reply to you, and only as much as they need:",
    },
    {
      type: "list",
      items: [
        "Our website hosting provider, which serves the website and keeps technical logs",
        "Our email delivery provider, which forwards your enquiry to our team inbox",
        "WhatsApp (Meta), if you choose to contact us there; their own privacy policy applies to that chat",
        "Government or law enforcement authorities, where we are required to by Indian law",
      ],
    },
    {
      type: "paragraph",
      text: "Some of these providers may store or process data outside India. Where that happens, we transfer data only as permitted under the Digital Personal Data Protection Act, 2023 and any restrictions notified by the Government of India.",
    },
    { type: "heading", text: "5. How long we keep it" },
    {
      type: "paragraph",
      text: "We keep enquiries for up to 24 months after our last conversation, so we can follow up on a quote or answer a later question. If you become a client, we keep project and billing records for as long as Indian tax, accounting and company laws require. When data is no longer needed, we delete it or make it anonymous.",
    },
    { type: "heading", text: "6. Your rights" },
    { type: "paragraph", text: "Under the Digital Personal Data Protection Act, 2023, you can:" },
    {
      type: "list",
      items: [
        "Ask for a summary of the personal data we hold about you and how we use it",
        "Ask us to correct, complete or update your data",
        "Ask us to erase your data when it is no longer needed for the purpose you shared it for",
        "Withdraw your consent at any time; this does not affect anything we did before you withdrew it",
        "Nominate another person to exercise your rights if you die or become unable to",
        "Raise a grievance with us, and if you are not satisfied with our response, complain to the Data Protection Board of India",
      ],
    },
    {
      type: "paragraph",
      text: "To use any of these rights, email contact@magentagrid.com with the subject “Privacy request”. We may ask you to confirm your identity before we act, and we will respond within a reasonable time.",
    },
    { type: "heading", text: "7. Keeping your data safe" },
    {
      type: "paragraph",
      text: "The website runs over an encrypted HTTPS connection, enquiry details are sent securely to our inbox, and access to enquiries is limited to the people who need it to reply to you. No method of sending or storing data online is completely secure, but we take reasonable steps to protect it and will notify affected people and the Data Protection Board of India of a personal data breach as the law requires.",
    },
    { type: "heading", text: "8. Children" },
    {
      type: "paragraph",
      text: "This website is meant for businesses and adults. We do not knowingly collect personal data from anyone under 18. If you believe a child has sent us their details, contact us and we will delete them.",
    },
    { type: "heading", text: "9. Changes to this policy" },
    {
      type: "paragraph",
      text: "We may update this policy when our website, services or the law change. The date at the top of this page shows when it was last updated. If we make an important change, we will make it clear on this page.",
    },
    { type: "heading", text: "10. Contact and grievances" },
    {
      type: "paragraph",
      text: "For questions, requests or complaints about how we handle your personal data, email contact@magentagrid.com or write to MagentaGrid Technologies Private Limited, Door No. 6/305, Vavanoor Centre, Ottappalam, Palakkad, Kerala 679533, India.",
    },
  ],
};

export const COOKIE_POLICY: LegalPage = {
  eyebrow: "COOKIE POLICY",
  headingLead: "No tracking.",
  headingAccent: "Nothing hidden.",
  intro:
    "This policy explains how the MagentaGrid India website uses cookies and similar technologies. The short version: it doesn’t set any.",
  lastUpdated: LEGAL_LAST_UPDATED,
  body: [
    { type: "heading", text: "1. What cookies are" },
    {
      type: "paragraph",
      text: "Cookies are small text files a website can save in your browser. Similar technologies, such as local storage and tracking pixels, do the same kind of job. They can remember settings, keep you signed in or track how you use a site.",
    },
    { type: "heading", text: "2. Cookies on this website" },
    {
      type: "paragraph",
      text: "This website does not set cookies, does not use local storage to track you and does not include analytics, advertising or social media tracking tools. Our fonts and images are served from our own website, so loading a page does not send your details to font or advertising services.",
    },
    {
      type: "paragraph",
      text: "When you send an enquiry, the details you type are sent once to our server to reach our inbox. That does not place a cookie in your browser. How we handle those details is explained in our Privacy Policy.",
    },
    { type: "heading", text: "3. Links to other websites" },
    {
      type: "paragraph",
      text: "Some links take you to other services, such as WhatsApp, LinkedIn, Instagram or the public company listing. Those websites may set their own cookies when you visit them, under their own cookie and privacy policies. We do not control those cookies.",
    },
    { type: "heading", text: "4. If this changes" },
    {
      type: "paragraph",
      text: "If we add analytics or any other non-essential cookies in the future, we will update this policy first and ask for your consent before setting them. Essential cookies, if ever needed to make the website work, will be listed here.",
    },
    { type: "heading", text: "5. Managing cookies in your browser" },
    {
      type: "paragraph",
      text: "You can view, block or delete cookies at any time in your browser settings, for example in Chrome, Safari, Firefox or Edge. Blocking cookies will not affect how this website works.",
    },
    { type: "heading", text: "6. Contact us" },
    {
      type: "paragraph",
      text: "If you have a question about this policy, email contact@magentagrid.com.",
    },
  ],
};
