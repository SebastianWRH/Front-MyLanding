import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home.jsx";
import MainLayout from "./layouts/mainLayout.jsx";

function ErrorPage() {
  return <h1 style={{ padding: 40 }}>Página no encontrada</h1>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "*", element: <ErrorPage /> }
    ]
  }
]);
