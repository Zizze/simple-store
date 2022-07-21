import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import { ICartProduct } from "./types";

const initialState: ICartProduct = {
	itemsInCart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			const findItem = state.itemsInCart.find((item) => item.id === action.payload.id);
			findItem
				? (findItem.amount = findItem.amount + action.payload.amount)
				: state.itemsInCart.push(action.payload);
		},
	},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
