import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/cart";
import { RootState, useAppDispatch } from "../../redux/store";
import { IProduct } from "../../types";
import Btn from "../UI/Btn";
import Quantity from "../UI/Quantity";
import styles from "./Products.module.scss";

interface IItem {
	item: IProduct;
}

const Item: FC<IItem> = ({ item }) => {
	const [amount, setAmount] = useState<string | number>(1);
	const dispatch = useAppDispatch();

	const i = useSelector<RootState>((state) => state.cart.itemsInCart);
	console.log(i);

	const clickHandler = () => {
		dispatch(addToCart({ ...item, amount: +amount }));
	};

	return (
		<div className={styles.item}>
			<div className={styles.info}>
				<img src={item.image} alt={`${item.name}`} />
				<h2 className={styles.name}>{item.name}</h2>
				<p className={styles.price}>Price {item.price}$</p>
			</div>

			<div className={styles.btns}>
				<Quantity amount={amount} setAmount={setAmount} />
				<Btn type="button" onClick={clickHandler}>
					Add
				</Btn>
			</div>
		</div>
	);
};

export default Item;
