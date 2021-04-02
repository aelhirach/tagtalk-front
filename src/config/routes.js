import { lazy } from "react";

export const routes = {
  home: {
    path: "/",
    component: lazy(() => import("../pages/Home/Home")),
    exact: true,
  },
  about: {
    path: "/about",
    component: lazy(() => import("../pages/AboutUs/AboutUs")),
    exact: true,
  },
};

export const renderRoutes = Object.entries(routes);