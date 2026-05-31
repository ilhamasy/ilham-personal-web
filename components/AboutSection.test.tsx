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
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders about text", () => {
    render(<AboutSection />);
    expect(
      screen.getByText(/Dedicated and results oriented/)
    ).toBeInTheDocument();
  });

  it("renders hero photo with circle", () => {
    render(<AboutSection />);
    const photo = screen.getByAltText("Ilham Asyari");
    expect(photo).toBeInTheDocument();
    const parent = photo.parentElement;
    expect(parent?.className).toContain("rounded-full");
  });

  it("renders social links", () => {
    render(<AboutSection />);
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

  it("social links open in new tab", () => {
    render(<AboutSection />);
    const links = screen
      .getAllByRole("link")
      .filter((l) => l.getAttribute("href")?.startsWith("http"));
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
