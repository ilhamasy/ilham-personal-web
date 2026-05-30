import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
});

class MockIntersectionObserver {
  readonly root: Element | null = null;
  readonly rootMargin: string = "";
  readonly thresholds: ReadonlyArray<number> = [];
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
  takeRecords = vi.fn(() => [] as IntersectionObserverEntry[]);

  constructor(
    _callback: IntersectionObserverCallback,
    _options?: IntersectionObserverInit
  ) {}
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

Object.defineProperty(window, "scrollTo", {
  value: vi.fn(),
  writable: true,
});
