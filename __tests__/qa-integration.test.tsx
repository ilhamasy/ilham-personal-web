import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("QA Integration", () => {
  it("renders all sections in correct order", () => {
    render(<Home />);
    const sections = [
      document.getElementById("home"),
      document.getElementById("about"),
      document.getElementById("my-portfolio"),
      document.getElementById("tech-stack"),
      document.getElementById("contact-me"),
    ];
    sections.forEach((section) => {
      expect(section).toBeInTheDocument();
    });
    const order = sections.map((s) => s!.id);
    expect(order).toEqual([
      "home",
      "about",
      "my-portfolio",
      "tech-stack",
      "contact-me",
    ]);
  });

  it("all section headings are present", () => {
    render(<Home />);
    expect(screen.getByText(/Ilham Asyari/i)).toBeInTheDocument();
    expect(screen.getByText(/Turning Business Needs Into Digital Solutions/i)).toBeInTheDocument();
    expect(screen.getByText("Featured Project")).toBeInTheDocument();
    expect(screen.getByText("Skills & Technologies")).toBeInTheDocument();
    expect(
      screen.getByText(/Whether you're looking for a Business Analyst/i)
    ).toBeInTheDocument();
  });
});
