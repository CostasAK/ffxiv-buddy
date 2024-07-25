import { ReactElement } from "react";
import { LazyRouteFunction, RouteObject } from "react-router-dom";

type PageType = {
  title: string;
  path: string;
  element?: ReactElement;
  lazy?: LazyRouteFunction<RouteObject>;
};

export const pages: PageType[] = [
  { title: "Timers", path: "Timers", lazy: () => import("./timers") },
  {
    title: "Checklist",
    path: "Checklist",
    lazy: () => import("./checklist"),
  },
];
