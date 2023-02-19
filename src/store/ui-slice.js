import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggleCart(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    setNotification(state, action) {
      if (!action.payload) {
        state.notification = null;
      } else
        state.notification = {
          status: action.payload.status,
          message: action.payload.message,
          title: action.payload.title,
        };
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;