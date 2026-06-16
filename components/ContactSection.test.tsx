import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactSection from "./ContactSection";

describe("ContactSection", () => {
  it("renders section id", () => {
    render(<ContactSection />);
    expect(document.getElementById("contact-me")).toBeInTheDocument();
  });

  it("renders section title with animation", () => {
    render(<ContactSection />);
    const headings = document.querySelectorAll("h1");
    expect(headings.length).toBeGreaterThanOrEqual(1);
  });

  it("renders subtitle", () => {
    render(<ContactSection />);
    expect(
      screen.getByText(/Whether you're looking for a Business Analyst/i)
    ).toBeInTheDocument();
  });

  it("renders Email me button", () => {
    render(<ContactSection />);
    expect(screen.getByText("Email me")).toBeInTheDocument();
  });

  it("renders social media text", () => {
    render(<ContactSection />);
    expect(
      screen.getByText(/or follow my social media/i)
    ).toBeInTheDocument();
  });

  it("renders LinkedIn and Instagram links", () => {
    render(<ContactSection />);
    expect(
      screen.getByLabelText("Visit LinkedIn profile")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Visit Instagram profile")
    ).toBeInTheDocument();
  });
});
