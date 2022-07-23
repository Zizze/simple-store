import { IProduct } from "../../types";

export type ICartProduct = {
	itemsInCart: IProduct[];
	totalPrice: number;
};
