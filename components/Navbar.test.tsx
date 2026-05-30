import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Ilham Asyari")).toBeInTheDocument();
  });

  it("renders all navigation tabs", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My Portfolio")).toBeInTheDocument();
    expect(screen.getByText("Tech Stack")).toBeInTheDocument();
    expect(screen.getByText("Contact Me")).toBeInTheDocument();
  });

  it("renders mobile menu toggle button", () => {
    render(<Navbar />);
    const toggle = screen.getByLabelText("Toggle menu");
    expect(toggle).toBeInTheDocument();
    expect(toggle.tagName).toBe("BUTTON");
  });

  it("opens mobile menu when toggle clicked", async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const toggle = screen.getByLabelText("Toggle menu");
    await user.click(toggle);
    const homeLinks = screen.getAllByText("Home");
    expect(homeLinks.length).toBeGreaterThanOrEqual(2);
  });

  it("has sticky navigation", () => {
    render(<Navbar />);
    const nav = screen.getByRole("navigation");
    expect(nav.className).toContain("fixed");
    expect(nav.className).toContain("top-0");
  });
});
