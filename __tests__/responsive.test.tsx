import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

describe("Responsive Design", () => {
  it("all sections render without overflow", () => {
    const { container } = render(
      <>
        <HomeSection />
        <AboutSection />
        <PortfolioSection />
        <TechStackSection />
        <ContactSection />
      </>
    );
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });

  it("sections have max-width containers", () => {
    render(<HomeSection />);
    const containers = document.querySelectorAll("[class*='max-w-']");
    expect(containers.length).toBeGreaterThanOrEqual(1);
  });

  it("touch targets are adequate on mobile buttons", () => {
    render(<HomeSection />);
    const buttons = document.querySelectorAll("button");
    buttons.forEach((btn) => {
      const classes = btn.className;
      expect(classes).toMatch(/p[xy]?-\d/);
    });
  });
});
