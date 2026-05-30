import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import BlobBackground from "./BlobBackground";

describe("BlobBackground", () => {
  it("renders canvas element", () => {
    const { container } = render(<BlobBackground />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
  });

  it("canvas is hidden from screen readers", () => {
    const { container } = render(<BlobBackground />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toHaveAttribute("aria-hidden", "true");
  });

  it("canvas has fixed positioning", () => {
    const { container } = render(<BlobBackground />);
    const canvas = container.querySelector("canvas");
    expect(canvas?.className).toContain("fixed");
    expect(canvas?.className).toContain("inset-0");
    expect(canvas?.className).toContain("-z-10");
  });

  it("uses custom colors when provided", () => {
    const customColors = ["#ff0000", "#00ff00", "#0000ff"];
    render(<BlobBackground colors={customColors} />);
  });

  it("accepts custom blur and opacity", () => {
    render(<BlobBackground blur={60} opacity={0.2} />);
  });
});
