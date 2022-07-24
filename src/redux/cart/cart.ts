import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { totalPrice } from "../../lib/totalPrice";
import { totalAmount } from "../../lib/totalAmount";
import { IProduct } from "../../types";
import { ICartProduct } from "./types";

const initialState: ICartProduct = {
	itemsInCart: [],
	totalPrice: 0,
	totalAmount: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			const findItem = state.itemsInCart.find((item) => item.id === action.payload.id);

			if (findItem) {
				const checkAmount = +findItem.amount < 30 ? findItem.amount + action.payload.amount : 30;
				findItem.amount = checkAmount > 30 ? 30 : checkAmount;
			} else {
				state.itemsInCart.push(action.payload);
			}
			state.totalPrice = totalPrice(state.itemsInCart);
			state.totalAmount = totalAmount(state.itemsInCart);
		},
		deleteItemInCart: (state, action: PayloadAction<number>) => {
			const filtredItems = state.itemsInCart.filter((item) => item.id !== action.payload);
			state.itemsInCart = filtredItems;
			state.totalPrice = totalPrice(state.itemsInCart);
			state.totalAmount = totalAmount(state.itemsInCart);
		},
		allDelete: (state) => {
			state.itemsInCart = [];
			state.totalPrice = 0;
			state.totalAmount = 0;
		},
		// When you click on minus or plus in the cart
		totalPriceCheck: (state, action: PayloadAction<IProduct>) => {
			const findItem = state.itemsInCart.find((item) => item.id === action.payload.id);

			if (findItem) {
				findItem.amount = action.payload.amount;
			}
			state.totalPrice = totalPrice(state.itemsInCart);
			state.totalAmount = totalAmount(state.itemsInCart);
		},
	},
});

export const { addToCart, allDelete, deleteItemInCart, totalPriceCheck } = cartSlice.actions;
export default cartSlice.reducer;
