import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlide";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  }
});