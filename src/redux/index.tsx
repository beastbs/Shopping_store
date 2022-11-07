import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import goodsReducer from "./goods/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    goods: goodsReducer,
  },
});
