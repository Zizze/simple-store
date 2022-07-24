import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart/cart";
import { useAppDispatch } from "../../redux/store";
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
	const navigate = useNavigate();

	const clickHandler = () => {
		dispatch(addToCart({ ...item, amount: +amount }));
		setAmount(1);
	};

	const imageClick = () => {
		navigate(`/product/${item.id}`);
	};

	return (
		<div className={styles.item}>
			<div className={styles.info}>
				<img src={item.image} alt={`${item.name}`} onClick={imageClick} />
				<h2 className={styles.name}>{item.name}</h2>
				<p className={styles.price}>
					<span>Price:</span> {item.price}$
				</p>
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
