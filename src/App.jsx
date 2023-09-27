// rrd
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// pages and layoutes
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages"

import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing"
import { loader as singleProductLoader } from "./pages/SingleProduct"
import { loader as ProductsLoader } from "./pages/Products"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Landing />,
          loader: landingLoader,
          errorElement: <ErrorElement />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "products",
          element: <Products />,
          loader: ProductsLoader,
          errorElement: <ErrorElement />
        },
        {
          path: "products/:id",
          element: <SingleProduct />,
          errorElement: <ErrorElement />,
          loader: singleProductLoader
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;