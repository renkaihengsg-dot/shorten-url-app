// import { useState } from 'react'
import "./styles/base.css";
import { router } from "./routers/AppRouter";
import { RouterProvider } from "react-router/dom";
import { LoadingBackdrop } from "./components";

function App() {
  return (
    <main>
      <RouterProvider router={router} />
      <LoadingBackdrop />
    </main>
  );
}

export default App;
