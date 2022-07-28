import { FC, useEffect, useState } from "react";
import { IProduct } from "../../types";
import Quantity from "../UI/Quantity";
import styles from "./Cart.module.scss";
import close from "../../assets/img/close.svg";
import { useAppDispatch } from "../../redux/store";
import { deleteItemInCart, totalPriceCheck } from "../../redux/cart/cart";

interface Props {
	item: IProduct;
	isLastItem: () => void;
}

const ItemInCart: FC<Props> = ({ item, isLastItem }) => {
	const dispatch = useAppDispatch();
	const [amount, setAmount] = useState<string | number>(item.amount);

	useEffect(() => {
		dispatch(totalPriceCheck({ ...item, amount: +amount }));
	}, [amount, item, dispatch]);

	const i = () => {
		dispatch(deleteItemInCart(item.id));
		isLastItem();
	};

	return (
		<div className={styles.item}>
			<img src={item.image} alt={item.name} className={styles.image} />
			<h3 className={styles.name}>{item.name}</h3>
			<div className={styles.control}>
				<div className={styles.quantity}>
					<Quantity setAmount={setAmount} amount={amount} />
				</div>
				<p className={styles.price}>
					{amount} x {item.price}$
				</p>
			</div>

			<img src={close} alt="delete" className={styles.close} onClick={i} />
		</div>
	);
};

export default ItemInCart;
