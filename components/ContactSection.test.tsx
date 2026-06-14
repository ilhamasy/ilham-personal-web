import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactSection from "./ContactSection";

describe("ContactSection", () => {
  it("renders section id", () => {
    render(<ContactSection />);
    expect(document.getElementById("contact-me")).toBeInTheDocument();
  });

  it("renders section title with typing animation", () => {
    render(<ContactSection />);
    const heading = document.querySelector("h1");
    expect(heading).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<ContactSection />);
    expect(
      screen.getByText(/Whether you're looking for a Business Analyst/i)
    ).toBeInTheDocument();
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

  it("renders social links", () => {
    render(<ContactSection />);
    expect(
      screen.getByLabelText("Visit Instagram profile")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Visit LinkedIn profile")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Visit Gmail profile")
    ).toBeInTheDocument();
  });
});
