import { createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = "novastore_favorites";

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

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = action.payload.id;
      const existingIndex = state.items.findIndex(
        (item) => item.id === productId,
      );

      if (existingIndex >= 0) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    },
    clearFavorites: (state) => {
      state.items = [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ items: state.items }));
    },
  },
});

export const { toggleFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites.items;
export const selectFavoritesCount = (state) => state.favorites.items.length;
export const selectIsFavorite = (state, productId) =>
  state.favorites.items.some((item) => item.id === productId);

export default favoritesSlice.reducer;
