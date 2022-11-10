import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "../features/item/itemSlice";

export const store = configureStore({
  reducer: {
    item: itemSlice,
  },
});
