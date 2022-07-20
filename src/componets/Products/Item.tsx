import React, { FC } from "react";
import { IProduct } from "../../types";
import Btn from "../UI/Btn";
import Quantity from "../UI/Quantity";
import styles from "./Products.module.scss";

interface IItem {
	item: IProduct;
}

const Item: FC<IItem> = ({ item }) => {
	return (
		<div className={styles.item}>
			<div className={styles.info}>
				<img src={item.image} alt={`${item.name}`} />
				<h2 className={styles.name}>{item.name}</h2>
				<p className={styles.price}>Price {item.price}$</p>
			</div>

			<div className={styles.btns}>
				<Quantity />
				<Btn type="button"> Add </Btn>
			</div>
		</div>
	);
};

export default Item;
