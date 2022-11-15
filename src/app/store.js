import { configureStore } from "@reduxjs/toolkit";
import  cartSlice  from "../features/cart/cartSlice";
import itemSlice from "../features/item/itemSlice";

export const store = configureStore({
  reducer: {
    item: itemSlice,
    cart: cartSlice
  },
});
