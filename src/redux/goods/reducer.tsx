import { createSlice } from "@reduxjs/toolkit";

const goodsSlice = createSlice({
  name: "goods",
  initialState: {
    currentGoods: null,
  },
  reducers: {
    setCurrentGoods: (state, action) => {
      state.currentGoods = action.payload;
    },
  },
});

export const { setCurrentGoods } = goodsSlice.actions;
export default goodsSlice.reducer;
