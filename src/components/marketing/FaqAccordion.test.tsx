// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { FaqAccordion } from "./FaqAccordion";

const TEST_ITEMS = [
  { question: "What is MagentaGrid?", answer: "We build websites." },
  { question: "How long does it take?", answer: "About two weeks." },
];

afterEach(() => {
  cleanup();
});

describe("FaqAccordion", () => {
  it("renders questions and toggles open/close on click", async () => {
    const user = userEvent.setup();
    render(<FaqAccordion items={TEST_ITEMS} />);

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0].getAttribute("aria-expanded")).toBe("false");
    expect(buttons[0].textContent).toContain("+");

    // Click to open
    await user.click(buttons[0]);
    expect(buttons[0].getAttribute("aria-expanded")).toBe("true");
    expect(buttons[0].textContent).toContain("−");

    // Click again to close
    await user.click(buttons[0]);
    expect(buttons[0].getAttribute("aria-expanded")).toBe("false");
    expect(buttons[0].textContent).toContain("+");
  });
});
