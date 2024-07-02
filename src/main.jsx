import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.jsx";
import Body from "./pages/Body.jsx";
import Cart from "./pages/Cart.jsx";
import About from "./pages/About.js";
import RestaurantMenu from "./pages/RestaurantMenu.jsx";
import DeliveryAndPayment from './pages/DeliveryAndPayment.jsx';

import appStore from './redux/appStore.js';
import "./index.css";

// On demand Loading
const SignIn = lazy(() => import("./pages/SignIn.jsx"));
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/sign-in",
        element: (
          <Suspense>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "/delivery-payments",
        element: <DeliveryAndPayment />,
      },
      {
        path: "/about-us",
        element: <About />
      },
      {
        path: "/restaurant-menu/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <React.StrictMode>
      <RouterProvider router={appRouter} />
    </React.StrictMode>
  </Provider>
);
