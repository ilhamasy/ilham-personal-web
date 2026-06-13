import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutSection from "./AboutSection";

describe("AboutSection", () => {
  it("renders about section id", () => {
    render(<AboutSection />);
    expect(document.getElementById("about")).toBeInTheDocument();
  });

  it("renders about label", () => {
    render(<AboutSection />);
    expect(screen.getByText("— ABOUT ME")).toBeInTheDocument();
  });

  it("renders heading", () => {
    render(<AboutSection />);
    expect(
      screen.getByText("Turning Business Needs Into Digital Solutions")
    ).toBeInTheDocument();
  });

  it("renders description paragraph", () => {
    render(<AboutSection />);
    expect(
      screen.getByText(/4\+ years of experience/i)
    ).toBeInTheDocument();
  });

  it("renders More About Me button", () => {
    render(<AboutSection />);
    expect(screen.getByText("More About Me")).toBeInTheDocument();
  });

  it("renders years experience stat", () => {
    render(<AboutSection />);
    expect(screen.getByText("4+")).toBeInTheDocument();
    expect(screen.getByText("Years Experience")).toBeInTheDocument();
  });

  it("renders enterprise projects stat", () => {
    render(<AboutSection />);
    expect(screen.getByText("7+")).toBeInTheDocument();
    expect(screen.getByText("Enterprise Projects")).toBeInTheDocument();
  });

  it("renders industry experience stat", () => {
    render(<AboutSection />);
    expect(screen.getByText("Banking & Fintech")).toBeInTheDocument();
    expect(screen.getByText("Industry Experience")).toBeInTheDocument();
  });

  it("renders stakeholders stat", () => {
    render(<AboutSection />);
    expect(screen.getByText("20+")).toBeInTheDocument();
    expect(screen.getByText("Stakeholders Collaborated")).toBeInTheDocument();
  });

  it("does not render social links", () => {
    render(<AboutSection />);
    expect(
      screen.queryByLabelText("Visit Instagram profile")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByLabelText("Visit LinkedIn profile")
    ).not.toBeInTheDocument();
  });
});
