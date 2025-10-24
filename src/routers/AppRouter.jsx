import React from "react";
import { createBrowserRouter } from "react-router";
import { ShortenPage, RedirectPage, NotFoundPage } from "../pages";
import { MainLayout } from "#/components/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <ShortenPage />,
      },
      {
        path: "/notfound",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "/:shortCode",
    element: <RedirectPage />,
  },
]);
