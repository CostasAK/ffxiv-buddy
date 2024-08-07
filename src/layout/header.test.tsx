import { render, screen } from "@/utils/test-utils";
import { describe, expect, it } from "vitest";
import Header from "./header";

describe("Simple working test", () => {
  it("The title is visible", () => {
    render(<Header />);
    expect(screen.getByText(/FFXIV Buddy/i)).toBeDefined();
  });
});
