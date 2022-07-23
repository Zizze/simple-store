export const totalPrice = (item) => {
	const totalItemsPrice = item.reduce((total, item) => total + item.amount * item.price, 0);
	return totalItemsPrice;
};
