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
    expect(screen.getByText("Skills & Technologies")).toBeInTheDocument();
  });

  it("renders Business Analysis category", () => {
    render(<TechStackSection />);
    expect(screen.getByText("Business Analysis")).toBeInTheDocument();
  });

  it("renders Frontend category", () => {
    render(<TechStackSection />);
    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  it("renders Backend category", () => {
    render(<TechStackSection />);
    expect(screen.getByText("Backend")).toBeInTheDocument();
  });

  it("renders skill items", () => {
    render(<TechStackSection />);
    expect(screen.getByText("Node.js")).toBeInTheDocument();
    expect(screen.getByText("Docker")).toBeInTheDocument();
    expect(screen.getByText("Flutter")).toBeInTheDocument();
  });
});
