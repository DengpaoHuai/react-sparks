import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./slices/moviesSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
});

export default store;

export type StoreType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useCustomDispatch = () => useDispatch<AppDispatch>();
