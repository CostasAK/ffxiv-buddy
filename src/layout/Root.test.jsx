import { describe, expect, it } from "vitest";
import { render, screen } from "../utils/test-utils";

import { Root } from "./Root";

describe("Simple working test", () => {
  it("The title is visible", () => {
    render(<Root />);
    expect(screen.getByText(/Vite \+ React/i)).toBeDefined();
  });
});
