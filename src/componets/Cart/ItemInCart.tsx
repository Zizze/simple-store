import React, { FC, useState } from "react";
import { IProduct } from "../../types";
import Quantity from "../UI/Quantity";
import styles from "./Cart.module.scss";
import close from "../../assets/img/close.svg";
import { useAppDispatch } from "../../redux/store";
import { deleteItemInCart } from "../../redux/cart/cart";

interface Props {
	item: IProduct;
}

const ItemInCart: FC<Props> = ({ item }) => {
	const dispatch = useAppDispatch();
	const [i, setI] = useState<string | number>(1);

	return (
		<div className={styles.item}>
			<img src={item.image} alt={item.name} />
			<h3 className={styles.name}>{item.name}</h3>

			<div className={styles.control}>
				<div className={styles.quantity}>
					<Quantity amount={1} setAmount={setI} />
				</div>
				<p className={styles.price}>
					{item.amount} x {item.price}$
				</p>
			</div>

			<img
				src={close}
				alt="delete"
				className={styles.close}
				onClick={() => dispatch(deleteItemInCart(item.id))}
			/>
		</div>
	);
};

export default ItemInCart;
