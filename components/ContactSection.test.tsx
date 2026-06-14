import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
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
