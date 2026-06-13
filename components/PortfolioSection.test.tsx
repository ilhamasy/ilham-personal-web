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
    expect(screen.getAllByText("IT BA").length).toBeGreaterThanOrEqual(1);
  });

  it("renders project years", () => {
    render(<PortfolioSection />);
    const yearElements = screen.getAllByText(/202[456]/);
    expect(yearElements.length).toBeGreaterThanOrEqual(2);
  });

  it("renders project names", () => {
    render(<PortfolioSection />);
    expect(screen.getByText("Omnichannel Chat Platform")).toBeInTheDocument();
  });
});
