// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Navigation } from "./Navigation";

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

afterEach(() => {
  cleanup();
});

describe("Navigation", () => {
  it("toggles mobile menu on hamburger button click", async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    expect(menuButton.getAttribute("aria-expanded")).toBe("false");

    const mobileMenu = document.getElementById("mobile-menu");
    expect(mobileMenu?.hasAttribute("hidden")).toBe(true);

    // Open menu
    await user.click(menuButton);
    expect(menuButton.getAttribute("aria-expanded")).toBe("true");
    expect(mobileMenu?.hasAttribute("hidden")).toBe(false);

    // Close menu
    await user.click(menuButton);
    expect(menuButton.getAttribute("aria-expanded")).toBe("false");
    expect(mobileMenu?.hasAttribute("hidden")).toBe(true);
  });
});
