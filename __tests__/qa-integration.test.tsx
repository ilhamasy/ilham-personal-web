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
    expect(screen.getByText("About Me")).toBeInTheDocument();
    expect(screen.getByText("My Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });

  it("contact form exists with all fields", () => {
    render(<Home />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/purpose/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });
});
