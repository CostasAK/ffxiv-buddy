import { render, RenderOptions, RenderResult } from "@testing-library/react";

import { RenderWrapper } from "@/components/render-wrapper";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) =>
  render(ui, {
    wrapper: ({ children }) => (
      <RenderWrapper>
        <BrowserRouter>{children}</BrowserRouter>
      </RenderWrapper>
    ),
    ...options,
  }) as RenderResult;

// eslint-disable-next-line import/export, react-refresh/only-export-components
export * from "@testing-library/react";
// eslint-disable-next-line import/export
export { customRender as render };
