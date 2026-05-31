import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TechStackSection from "./TechStackSection";

describe("TechStackSection", () => {
  it("renders section id", () => {
    render(<TechStackSection />);
    expect(document.getElementById("tech-stack")).toBeInTheDocument();
  });

  it("renders section title", () => {
    render(<TechStackSection />);
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
  });

  it("renders Backend Developer category", () => {
    render(<TechStackSection />);
    expect(screen.getByText("Backend Developer")).toBeInTheDocument();
  });

  it("renders Frontend Developer category", () => {
    render(<TechStackSection />);
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
  });

  it("renders CI/CD & DevOps category", () => {
    render(<TechStackSection />);
    expect(screen.getByText("CI/CD & DevOps")).toBeInTheDocument();
  });

  it("renders tech items with labels", () => {
    render(<TechStackSection />);
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("Flutter")).toBeInTheDocument();
  });

  it("renders progress percentage labels", () => {
    render(<TechStackSection />);
    const percentages = screen.getAllByText(/^\d+%$/);
    expect(percentages.length).toBeGreaterThanOrEqual(5);
  });
});
