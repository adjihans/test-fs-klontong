import { configureStore } from "@reduxjs/toolkit";
import fullNameReducer from "./page-store/fullName";

export default configureStore({
  reducer: {
    fullName: fullNameReducer,
  },
});
