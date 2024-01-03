import { createBrowserRouter } from "react-router-dom";
import { Products } from "../pages/Products/Products";
import Login from "../pages/Login/Login";

const loader = () => <>loading...</>;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
    loader,
  },
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
    path: "/:id",
    element: <>Product Detail</>,
    loader,
    children: [
      {
        path: "update",
        element: <>Update</>,
        loader,
      },
    ],
  },
]);
