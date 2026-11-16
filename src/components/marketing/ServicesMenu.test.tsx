// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { ServicesMenu } from "./ServicesMenu";

afterEach(() => {
  cleanup();
});

describe("ServicesMenu", () => {
  it("renders Services link and toggles submenu on button click", async () => {
    const user = userEvent.setup();
    render(<ServicesMenu isActive={false} />);

    const link = screen.getByRole("link", { name: /^services$/i });
    expect(link.getAttribute("href")).toBe("/services");

    const toggleButton = screen.getByRole("button", { name: /services submenu/i });
    expect(toggleButton.getAttribute("aria-expanded")).toBe("false");

    // Click to pin open
    await user.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("true");
    expect(screen.getByRole("link", { name: /web development/i })).toBeTruthy();

    // Click again to close
    await user.click(toggleButton);
    expect(toggleButton.getAttribute("aria-expanded")).toBe("false");
  });
});
