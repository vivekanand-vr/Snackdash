import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const addedRestaurant = action.payload;
      state.items.push(addedRestaurant);
      state.totalPrice += addedRestaurant.price
        ? addedRestaurant.price / 100
        : addedRestaurant.defaultPrice / 100;
    },

    removeFromCart: (state, action) => {
      const restaurantDetails = action.payload;
      console.log(restaurantDetails);
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.totalPrice -= restaurantDetails?.price / 100;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
