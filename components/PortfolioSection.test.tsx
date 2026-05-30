import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import PortfolioSection from "./PortfolioSection";

describe("PortfolioSection", () => {
  it("renders the portfolio section id", () => {
    render(<PortfolioSection />);
    expect(document.getElementById("my-portfolio")).toBeInTheDocument();
  });

  it("renders years of experience metric", () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/Years of Experience/i)).toBeInTheDocument();
  });

  it("renders total projects metric", () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/Total Projects/i)).toBeInTheDocument();
  });

  it("renders client projects metric", () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/Client Projects/i)).toBeInTheDocument();
  });

  it("renders project role badges", () => {
    render(<PortfolioSection />);
    expect(screen.getAllByText("Developer").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("IT Business Analyst").length).toBeGreaterThanOrEqual(1);
  });

  it("renders project years on cards", () => {
    render(<PortfolioSection />);
    expect(screen.getAllByText("2026").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("2025").length).toBeGreaterThanOrEqual(1);
  });

  it("renders project names", () => {
    render(<PortfolioSection />);
    expect(screen.getByText("Placeholder Project 1")).toBeInTheDocument();
    expect(screen.getByText("Placeholder Project 2")).toBeInTheDocument();
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
