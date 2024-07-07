import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RenderWrapper } from "./components/render-wrapper";
import ErrorPage from "./pages/error";
import Root from "./routes/root";

const rootElement = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <RenderWrapper>
      <RouterProvider router={router} />
    </RenderWrapper>
  </StrictMode>,
);
