import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutSection from "./AboutSection";

describe("AboutSection", () => {
  it("renders about section id", () => {
    render(<AboutSection />);
    expect(document.getElementById("about")).toBeInTheDocument();
  });

  it("renders about title", () => {
    render(<AboutSection />);
    expect(
      screen.getByText("Turning Business Needs Into Digital Solutions")
    ).toBeInTheDocument();
  });

  it("renders about subheading", () => {
    render(<AboutSection />);
    expect(screen.getByText("— About Me")).toBeInTheDocument();
  });

  it("renders experience card", () => {
    render(<AboutSection />);
    expect(screen.getByText("4+ Years Experience")).toBeInTheDocument();
  });

  it("renders banking card", () => {
    render(<AboutSection />);
    expect(screen.getByText("Banking & Contact Center")).toBeInTheDocument();
  });

  it("renders full-stack card", () => {
    render(<AboutSection />);
    expect(screen.getByText("Full-Stack Development")).toBeInTheDocument();
  });

  it("renders requirements card", () => {
    render(<AboutSection />);
    expect(screen.getByText("Requirements & Delivery")).toBeInTheDocument();
  });

  it("renders hero photo with circle", () => {
    render(<AboutSection />);
    const photo = screen.getByAltText("Ilham Asyari");
    expect(photo).toBeInTheDocument();
    const parent = photo.parentElement;
    expect(parent?.className).toContain("rounded-full");
  });

  it("renders metrics", () => {
    render(<AboutSection />);
    expect(screen.getByText("Years of Experience")).toBeInTheDocument();
    expect(screen.getByText("Total Projects")).toBeInTheDocument();
    expect(screen.getByText("Client Projects")).toBeInTheDocument();
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
