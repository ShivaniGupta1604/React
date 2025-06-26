import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addIetm: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.card.info.id;
      state.items = state.items.filter(
        (item) => item.card.info.id !== itemIdToRemove
      );
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addIetm, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
