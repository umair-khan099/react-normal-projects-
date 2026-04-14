import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app/index.css";
import About from "./pages/About.jsx";
import Contact from "./pages/Cantact.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Layout from "./layout/Layout.jsx";
import Body from "./pages/Body.jsx";
import SingleRestaurant from "./pages/SingleRestaurants.jsx";
import Cart from "./pages/Cart.jsx";
import { lazy, Suspense } from "react";
import RestaurantsShimmer from "./components/common/ShimmerUi.jsx";
import { Provider } from "react-redux";
import store from "./utils/appStore.js";

const Grocery = lazy(() => import("./pages/Grocery.jsx"));

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
        path: "/grocery",
        element: (
          <Suspense fallback={<RestaurantsShimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
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
  <Provider store={store}>
    <RouterProvider router={appRoute} />,
  </Provider>,
);
