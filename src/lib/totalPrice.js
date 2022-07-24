export const totalPrice = (items) => {
	const totalItemsPrice = items.reduce((total, item) => total + item.amount * item.price, 0);
	return totalItemsPrice;
};
