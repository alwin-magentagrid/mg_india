// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  cleanup();
  vi.resetModules();
  vi.doUnmock("@/lib/site");
});

async function renderWith(url: string | null) {
  vi.doMock("@/lib/site", () => ({ WHATSAPP_URL: url }));
  const { WhatsAppButton } = await import("./WhatsAppButton");
  return render(<WhatsAppButton />);
}

describe("WhatsAppButton", () => {
  it("renders nothing when no WhatsApp number is configured", async () => {
    const { container } = await renderWith(null);
    expect(container.innerHTML).toBe("");
  });

  it("links to the WhatsApp chat in a new tab with an accessible name", async () => {
    await renderWith("https://wa.me/919999999999?text=Hi");
    const link = screen.getByRole("link", { name: /chat on whatsapp/i });
    expect(link.getAttribute("href")).toBe("https://wa.me/919999999999?text=Hi");
    expect(link.getAttribute("target")).toBe("_blank");
    expect(link.getAttribute("rel")).toContain("noopener");
  });
});
