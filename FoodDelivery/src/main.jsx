import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app/index.css";
import App from "./app/App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Cantact.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Layout from "./layout/Layout.jsx";
import Body from "./pages/Body.jsx";
import SingleRestaurant from "./pages/SingleRestaurants.jsx";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/singlerestaurant/:resId",
        element: <SingleRestaurant />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRoute} />,
);
