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

			if (findItem) {
				const checkAmount =
					+action.payload.amount < 30 ? findItem.amount + action.payload.amount : 30;
				findItem.amount = checkAmount;
			} else {
				state.itemsInCart.push(action.payload);
			}
		},
		allDelete: (state) => {
			state.itemsInCart = [];
		},
	},
});

export const { addToCart, allDelete } = cartSlice.actions;
export default cartSlice.reducer;
