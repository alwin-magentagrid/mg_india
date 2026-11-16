import type { FaqItem } from "./shared";
import type { NumberedItem } from "./web-development";

export const CMS_HERO = {
  seoHeading: "CMS Website Development in Kerala – Edit Your Own Website",
  badge: "BUSINESS CMS WEBSITE",
  headingLead: "Built for your business",
  headingAccent: "Managed by you.",
  body: "Custom website design and a confident content control. A website shaped around your business, with a CMS that puts everyday text and image updates in your hands.",
  price: { value: "₹15,000", size: "sm" as const, lines: ["BUSINESS CMS", "Content management included"] },
  primaryCta: { label: "Build My CMS Website ↗", href: "/contact" },
  secondaryCta: { label: "See how CMS works ↓", href: "#cms-example" },
  note: "Package scope, editable fields, taxes, domain, hosting and support are confirmed in your quote.",
  imageAlt: "3D illustration of a website editor and published page connected by a magenta ribbon",
};

export const CMS_EXPLAINED = {
  eyebrow: "WHAT IS A CMS?",
  headingLead: "An editing space for your website.",
  headingAccent: "Made for everyday updates.",
  body: "CMS stands for Content Management System. It is a sign-in area where you manage the content we make editable. You change the words or images, your website keeps its designed layout.",
  items: [
    { title: "Your public website", description: "The pages your customers see, your services, story, photos and contact details." },
    { title: "Your editing area", description: "The place you sign in to update the content fields set up for your website." },
    { title: "Your change it online", description: "Preview the changes and publish them through the agreed editing workflow." },
  ] satisfies NumberedItem[],
};

export const CMS_EXAMPLE = {
  eyebrow: "SEE HOW A CONTENT UPDATE WORKS",
  headingLead: "Change it here.",
  headingAccent: "See it on your website.",
  body: "Example: Update the heading and introduction on your services page. No coding needed for the content fields we set up.",
  editor: {
    title: "YOUR WEBSITE / CONTENT EDITOR",
    status: "Signed in as website owner",
    stepLabel: "01 / EDIT YOUR CONTENT",
    page: "Services page",
    fields: [
      { label: "Page heading", value: "Care for every smile." },
      { label: "Introduction", value: "Friendly family dental care, built around you." },
    ],
    imageLabel: "Featured image",
    imageFile: "clinic-team.jpg",
    imageAction: "Replace image",
    actions: ["Save Draft", "Preview", "Publish"],
    helper: "Your editable fields are agreed during setup.",
  },
  preview: {
    stepLabel: "02 / PREVIEW YOUR WEBSITE",
    address: "yourbusiness.in/services",
    brand: "SMILE STUDIO",
    headingLead: "Care for",
    headingAccent: "every smile.",
    intro: "Friendly family dental care, built around you.",
    photo: "YOUR CLINIC TEAM PHOTO",
    link: "Explore Our Services ↗",
    caption: "Your design stays consistent as the content changes.",
  },
  disclaimer:
    "Illustrative CMS workflow, not a product screenshot. The final editor, fields and publishing controls are agreed for your project.",
};

export const CMS_MANAGE = {
  eyebrow: "EVERYDAY EDITS, MADE SIMPLER",
  headingLead: "Keep your content up to date.",
  headingAccent: "Keep your business moving.",
  items: [
    { title: "Update text", description: "Change headings, introductions and descriptions in the editable sections we configure." },
    { title: "Replace images", description: "Refresh photos and supplied visuals in agreed image fields." },
    { title: "Maintain service details", description: "Update the service information and descriptions included in your website scope." },
    { title: "Refresh business information", description: "Keep agreed contact details, opening hours and business information up to date." },
    { title: "Manage agreed content", description: "Use structured fields for the pages and content types included in your project." },
    { title: "Preview & publish", description: "Review updates and make them live through the publishing workflow we set up." },
  ] satisfies NumberedItem[],
};

export const CMS_SCOPE = {
  eyebrow: "CONTENT CONTROL, WITH A CLEAR SCOPE",
  headingLead: "Know what you can edit.",
  headingAccent: "Know when to call us.",
  manageTitle: "Your team can manage",
  manage: [
    "Text and image fields configured for you",
    "Agreed service and business information",
    "Content within your existing page structure",
    "Previewing and publishing content updates",
  ],
  helpTitle: "We help with bigger changes",
  help: [
    "A new page layout or visual redesign",
    "New page types or content structures",
    "Booking, e-com store or payment integrations",
    "Advanced workflows and custom features",
  ],
  note: "A CMS does not automatically include unlimited pages, a page builder or every website feature. We agree exactly what is editable before development.",
};

export const CMS_HANDOVER = {
  eyebrow: "CONFIDENCE AFTER LAUNCH",
  heading: "We build it around your business. Then show you how to use it.",
  body: "Your CMS handover covers signing in, finding the right content, changing text and images, and using the agreed publishing workflow. Ongoing care and additional training can be scoped around your team.",
};

export const CMS_FAQ = {
  eyebrow: "CMS, WITHOUT THE CONFUSION",
  headingLead: "Good questions.",
  headingAccent: "Clear answers.",
  intro: "Understand what the ₹15,000 Business CMS package means for your team.",
};

export const CMS_FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is the difference between Starter and Business CMS?",
    answer:
      "Starter is ₹5,000 and does not include a CMS. Business CMS is ₹15,000 and gives your team an editing area for the content fields agreed for your website.",
  },
  {
    question: "Do I need coding knowledge to use the CMS?",
    answer:
      "No coding is needed for the text and image fields we make editable. We show you the editing process during handover.",
  },
  {
    question: "Can I change the whole design or add unlimited pages?",
    answer:
      "CMS content editing is different from redesigning a page. New layouts, new page types and additional functionality are scoped separately. Page scope is agreed for your project.",
  },
  {
    question: "Are blog posts, galleries and SEO fields included?",
    answer:
      "We can discuss these content types and fields while planning your website. They are included only when specified in your agreed scope.",
  },
  {
    question: "Does publishing happen immediately?",
    answer:
      "We explain how your chosen CMS saves, previews and publishes changes. The final publishing workflow is agreed and demonstrated during handover.",
  },
  {
    question: "Are hosting, domains and ongoing support included?",
    answer:
      "The quote confirms taxes, hosting, domain, renewals, any CMS platform fees and ongoing support. These are not assumed to be free or included.",
  },
];
