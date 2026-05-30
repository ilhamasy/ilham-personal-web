import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeSection from "./HomeSection";

describe("HomeSection", () => {
  it("renders full name", () => {
    render(<HomeSection />);
    expect(screen.getByText("Ilham Asyari")).toBeInTheDocument();
  });

  it("renders role title", () => {
    render(<HomeSection />);
    expect(
      screen.getByText("Web Developer / IT Business Analyst")
    ).toBeInTheDocument();
  });

  it("renders about me text", () => {
    render(<HomeSection />);
    expect(
      screen.getByText(/Passionate developer and IT business analyst/)
    ).toBeInTheDocument();
  });

  it("renders social link icons", () => {
    render(<HomeSection />);
    expect(
      screen.getByLabelText("Visit Instagram profile")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Visit LinkedIn profile")
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("Visit GitHub profile")
    ).toBeInTheDocument();
  });

  it("social links open in new tab", () => {
    render(<HomeSection />);
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  it("renders hero photo with alt text", () => {
    render(<HomeSection />);
    const photo = screen.getByAltText("Ilham Asyari");
    expect(photo).toBeInTheDocument();
  });

  it("has home section id", () => {
    render(<HomeSection />);
    const section = document.getElementById("home");
    expect(section).toBeInTheDocument();
  });
});
