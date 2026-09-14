import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "novastore_cart";

const safeRead = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { items: [] };
    const parsed = JSON.parse(stored);
    if (!parsed || !Array.isArray(parsed.items)) {
      return { items: [] };
    }
    return { items: parsed.items };
  } catch {
    return { items: [] };
  }
};

const initialState = safeRead();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (!existingItem) {
        state.items.push({ ...product, quantity: 1 });
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload,
      );
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (cartItem) => cartItem.id === action.payload,
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;
export const selectCartTotalQuantity = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectCartTotalPrice = (state) =>
  state.cart.items.reduce(
    (total, item) =>
      total + Number(item.price || 0) * Number(item.quantity || 0),
    0,
  );

export const selectIsInCart = (state, productId) =>
  state.cart.items.some((item) => item.id === productId);

export default cartSlice.reducer;
