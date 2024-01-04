import { createBrowserRouter } from "react-router-dom";
import { Products } from "../pages/Products/Products";
import Login from "../pages/Login/Login";
import { Product } from "../pages/Product/Product";
import { ProductForm } from "../pages/Product/ProductForm";

const loader = () => <>loading...</>;

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    loader,
  },
  {
    path: "/register",
    element: <>Register</>,
    loader,
  },
  {
    path: "/products",
    element: <Products />,
    loader,
  },
  {
    path: "/products/add",
    element: <ProductForm />,
    loader,
  },
  {
    path: "/products/:id",
    element: <Product />,
    loader,
  },
  {
    path: "/products/:id/update",
    element: <ProductForm />,
    loader,
  },
]);
