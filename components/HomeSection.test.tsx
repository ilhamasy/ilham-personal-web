import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomeSection from "./HomeSection";

describe("HomeSection", () => {
  it("renders greeting", () => {
    render(<HomeSection />);
    expect(screen.getByText(/Hi, I'm Ilham Asyari/i)).toBeInTheDocument();
  });

  it("renders subtitle", () => {
    render(<HomeSection />);
    expect(
      screen.getByText(/Who bridges business needs and technology solutions/i)
    ).toBeInTheDocument();
  });

  it("renders typing animation cursor", () => {
    render(<HomeSection />);
    const cursorSpan = document.querySelector(".animate-blink-cursor");
    expect(cursorSpan).toBeInTheDocument();
    expect(cursorSpan?.textContent).toBe("|");
  });

  it("renders Featured Projects button", () => {
    render(<HomeSection />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
  });

  it("renders hero photo with white shadow", () => {
    render(<HomeSection />);
    const photo = screen.getByAltText("Ilham Asyari");
    expect(photo).toBeInTheDocument();
    expect(photo).toHaveAttribute(
      "src",
      expect.stringContaining("ilham-porto.png")
    );
  });

  it("has home section id", () => {
    render(<HomeSection />);
    expect(document.getElementById("home")).toBeInTheDocument();
  });

  it("has solid black background", () => {
    render(<HomeSection />);
    const section = document.getElementById("home");
    expect(section?.className).toContain("bg-black");
  });
});
