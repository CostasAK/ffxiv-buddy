import { render, screen } from '@testing-library/react';

import App from './App';

test("renders description", () => {
  render(<App />);
  const linkElement = screen.getByText(
    /FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd./i
  );
  expect(linkElement).toBeInTheDocument();
});
