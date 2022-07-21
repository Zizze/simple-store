import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart";
import { useDispatch } from "react-redux";

const store = configureStore({ reducer: { cart: cartReducer } });

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
