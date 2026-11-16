import { siWhatsapp } from "simple-icons";
import { WHATSAPP_URL } from "@/lib/site";

const LABEL = "Chat on WhatsApp";

/**
 * Floating WhatsApp chat button shown on every page.
 * Renders nothing until NEXT_PUBLIC_WHATSAPP_NUMBER is set (international format, digits only, e.g. 919876543210).
 */
export function WhatsAppButton() {
  if (!WHATSAPP_URL) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${LABEL} with MagentaGrid (opens WhatsApp)`}
      className="group fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#25d366] text-white shadow-[0_10px_28px_rgba(18,140,74,0.35)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#1ebe5b] hover:shadow-[0_14px_32px_rgba(18,140,74,0.42)] focus-visible:outline-offset-4 sm:right-6 sm:bottom-6 lg:w-auto lg:pr-5 lg:pl-4"
    >
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" className="shrink-0 fill-current">
        <path d={siWhatsapp.path} />
      </svg>
      <span className="hidden text-t14 font-semibold whitespace-nowrap lg:inline">{LABEL}</span>
    </a>
  );
}
