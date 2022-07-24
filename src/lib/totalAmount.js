export const totalAmount = (items) => {
	const totalAmount = items.reduce((total, item) => total + item.amount, 0);
	return totalAmount;
};
