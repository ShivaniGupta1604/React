import { createSlice, current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addIetm: (state, action) => {
        //mutating the state over here
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      // console.log(state)  //creates a proxy
      // console.log(current(state))   // this is how we can do a console.log
    },
  },
});

export const { addIetm, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
