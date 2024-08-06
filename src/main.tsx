import "./index.css";

import { NoMatch } from "@/routes/no-match";
import { pages } from "@/routes/pages";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RenderWrapper } from "./components/render-wrapper";
import ErrorPage from "./routes/error";
import Root from "./routes/root";

const rootElement = document.getElementById("root")!;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to={pages[0].path} replace /> },
          { path: "*", element: <NoMatch /> },
          ...pages,
        ],
      },
    ],
  },
]);

createRoot(rootElement).render(
  <StrictMode>
    <RenderWrapper>
      <RouterProvider router={router} fallbackElement={<Root />} />
    </RenderWrapper>
  </StrictMode>,
);
