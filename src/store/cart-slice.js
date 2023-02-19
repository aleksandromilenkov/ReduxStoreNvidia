import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    changed: false,
  },
  reducers: {
    addItem(state, action) {
      state.changed = true;
      state.totalAmount +=
        action.payload.item.amount * +action.payload.item.price;
      const isItemInCart = state.items.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (isItemInCart >= 0) {
        state.items[isItemInCart].amount += action.payload.item.amount;
      } else {
        state.items.push(action.payload.item);
      }
    },
    removeItem(state, action) {
      state.changed = true;
      const existingCartItem = state.items.find(
        (item) => item.id === action.payload
      );
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (existingCartItem.amount === 1) {
        state.items.splice(existingCartItemIndex, 1);
        state.totalAmount -= existingCartItem.price;
      } else {
        existingCartItem.amount--;
        state.totalAmount -= existingCartItem.price;
      }
    },
    replaceCart(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
