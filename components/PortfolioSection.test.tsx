import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PortfolioSection from "./PortfolioSection";

describe("PortfolioSection", () => {
  it("renders the portfolio section id", () => {
    render(<PortfolioSection />);
    expect(document.getElementById("my-portfolio")).toBeInTheDocument();
  });

  it("renders project role badges", () => {
    render(<PortfolioSection />);
    expect(screen.getAllByText("Developer").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("IT Business Analyst").length).toBeGreaterThanOrEqual(1);
  });

  it("renders project years on cards", () => {
    render(<PortfolioSection />);
    const yearElements = screen.getAllByText(/202[56]/);
    expect(yearElements.length).toBeGreaterThanOrEqual(2);
  });

  it("renders project names", () => {
    render(<PortfolioSection />);
    expect(screen.getByText("Omnichannel Chat Platform")).toBeInTheDocument();
  });

  it("external links open in new tab", () => {
    render(<PortfolioSection />);
    const links = screen.queryAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
