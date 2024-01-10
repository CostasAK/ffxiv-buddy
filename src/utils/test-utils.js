import { render } from "@testing-library/react";

import { RenderWrapper } from "../components/RenderWrapper";

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: RenderWrapper, ...options });

// eslint-disable-next-line import/export
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
// eslint-disable-next-line import/export
export { customRender as render };
