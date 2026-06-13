import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeSection from "./HomeSection";

describe("HomeSection", () => {
  it("renders full name", () => {
    render(<HomeSection />);
    expect(screen.getByText(/Ilham Asyari/i)).toBeInTheDocument();
  });

  it("renders role title with typing animation", () => {
    render(<HomeSection />);
    const cursorSpan = document.querySelector(".animate-blink-cursor");
    expect(cursorSpan).toBeInTheDocument();
    expect(cursorSpan?.textContent).toBe("|");
  });

  it("renders More about me button", () => {
    render(<HomeSection />);
    expect(screen.getByText(/More about me/i)).toBeInTheDocument();
  });

  it("renders hero photo without circle styling", () => {
    render(<HomeSection />);
    const photo = screen.getByAltText("Ilham Asyari");
    expect(photo).toBeInTheDocument();
    const parent = photo.parentElement;
    expect(parent?.className).not.toContain("rounded-full");
  });

  it("has home section id", () => {
    render(<HomeSection />);
    expect(document.getElementById("home")).toBeInTheDocument();
  });
});
