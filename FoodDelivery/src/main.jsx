import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Cantact.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Layout from "./layout/Layout.jsx";
import Body from "./pages/Body.jsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoute} />,
);
