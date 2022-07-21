import React, { FC } from "react";
import { IProduct } from "../../types";
import Quantity from "../UI/Quantity";
import styles from "./Cart.module.scss";
import close from "../../assets/img/close.svg";

interface Props {
	item: IProduct;
}

const ItemInCart: FC<Props> = ({ item }) => {
	return (
		<div className={styles.item}>
			<img src={item.image} alt={item.name} />
			<h3 className={styles.name}>{item.name}</h3>

			<div className={styles.control}>
				<div className={styles.quantity}>
					<Quantity />
				</div>
				<p className={styles.price}>
					{item.amount} x {item.price}$
				</p>
			</div>

			<img src={close} alt="delete" className={styles.close} />
		</div>
	);
};

export default ItemInCart;
