import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Slice";

export const store = configureStore ({
  reducer: {
    auth: authSlice.reducer
  }
});