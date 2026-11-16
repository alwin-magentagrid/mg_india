// @vitest-environment jsdom
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText(/your name/i), "Anu Menon");
  await user.type(screen.getByLabelText(/email address/i), "anu@example.com");
  await user.type(screen.getByLabelText(/business name/i), "Menon Dental Clinic");
  await user.type(screen.getByLabelText(/your message/i), "I need a five-page website.");
  await user.click(screen.getByLabelText(/privacy policy/i));
}

describe("ContactForm", () => {
  it("shows inline errors and does not call the API when invalid", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /send my enquiry/i }));

    expect(await screen.findByText(/please enter your name/i)).toBeTruthy();
    expect(screen.getByLabelText(/your name/i).getAttribute("aria-invalid")).toBe("true");
    expect(document.activeElement).toBe(screen.getByLabelText(/your name/i));
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("submits valid data and shows the success message", async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, status: 200, json: async () => ({ ok: true }) });
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /send my enquiry/i }));

    await waitFor(() => expect(screen.getByRole("status").textContent).toMatch(/thank you/i));
    const sent = JSON.parse(fetchMock.mock.calls[0][1].body as string);
    expect(sent).toMatchObject({
      name: "Anu Menon",
      email: "anu@example.com",
      businessName: "Menon Dental Clinic",
      plan: "starter",
      consent: true,
    });
  });

  it("shows a retryable error when delivery fails", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, status: 503, json: async () => ({ ok: false }) }));
    const user = userEvent.setup();
    render(<ContactForm />);

    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: /send my enquiry/i }));

    expect((await screen.findByRole("alert")).textContent).toMatch(/couldn.t send/i);
    expect(screen.getByLabelText(/your name/i)).toHaveProperty("value", "Anu Menon");
  });
});
