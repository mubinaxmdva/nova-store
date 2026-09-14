import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import favoritesReducer from "./favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export default store;
