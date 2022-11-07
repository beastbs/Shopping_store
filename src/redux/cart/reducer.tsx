import { createSlice } from "@reduxjs/toolkit";

import { StateParams, ActionParams, Goods } from "../../models/models";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: [],
  },
  reducers: {
    setItemInCart: (state: StateParams, action: ActionParams) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (product: Goods) => product.id !== action.payload
      );
    },
    clearAllItems: (state, action) => {
      state.itemsInCart = action.payload;
    },
  },
});

export const { setItemInCart, deleteItemFromCart, clearAllItems } =
  cartSlice.actions;
export default cartSlice.reducer;
