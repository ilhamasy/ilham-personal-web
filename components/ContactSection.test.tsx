import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactSection from "./ContactSection";

describe("ContactSection", () => {
  it("renders section id", () => {
    render(<ContactSection />);
    expect(document.getElementById("contact-me")).toBeInTheDocument();
  });

  it("renders section title", () => {
    render(<ContactSection />);
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
  });

  it("renders name input", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  it("renders email input", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("renders purpose textarea", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/purpose/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<ContactSection />);
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  it("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    await user.click(screen.getByRole("button", { name: /send/i }));
    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  });
});
