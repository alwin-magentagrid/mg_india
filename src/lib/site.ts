export const SITE_NAME = "MagentaGrid India";
export const COMPANY_LEGAL_NAME = "MagentaGrid Technologies Private Limited";
export const CONTACT_EMAIL = "contact@magentagrid.com";
export const CONTACT_PHONE_DISPLAY = "+91 70253 45435";
export const CONTACT_PHONE_TEL = "+917025345435";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.magentagrid.com";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "917025345435";
const WHATSAPP_PREFILL = "Hi MagentaGrid, I'd like to discuss a project.";

export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`
  : null;

export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL ?? null;
export const INSTAGRAM_URL = process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? null;
