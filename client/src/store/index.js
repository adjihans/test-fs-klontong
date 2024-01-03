import { configureStore } from "@reduxjs/toolkit";
import fullNameReducer from "./login-store/fullName";
import productListReducer from "./product-store/productList";

export default configureStore({
  reducer: {
    fullNameReducer,
    productListReducer,
  },
});
