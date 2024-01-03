import { ReduxProvider } from "./ReduxProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./RouterProvider";

export const CustomProvider = (props) => (
  <ReduxProvider>
    <RouterProvider router={router}>{props.children}</RouterProvider>
  </ReduxProvider>
);
