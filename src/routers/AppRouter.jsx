import React from "react";
import { createBrowserRouter } from "react-router";
import { ShortenPage, RedirectPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ShortenPage />,
  },
  {
    path: "/:shortCode",
    element: <RedirectPage />,
  },
]);
