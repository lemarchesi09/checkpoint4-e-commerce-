import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
