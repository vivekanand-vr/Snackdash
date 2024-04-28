import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
