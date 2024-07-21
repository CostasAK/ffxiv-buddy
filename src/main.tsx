import "./index.css";

import Checklist from "@/routes/checklist";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { RenderWrapper } from "./components/render-wrapper";
import ErrorPage from "./pages/error";
import Root from "./routes/root";
import Timers from "./routes/timers";

const rootElement = document.getElementById("root")!;

export const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/Timers" /> },
          { title: "Timers", path: "Timers", element: <Timers /> },
          { title: "Checklist", path: "Checklist", element: <Checklist /> },
        ],
      },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(rootElement).render(
  <StrictMode>
    <RenderWrapper>
      <RouterProvider router={router} fallbackElement={<Root />} />
    </RenderWrapper>
  </StrictMode>,
);
