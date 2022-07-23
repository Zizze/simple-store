import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IProduct } from "../../types";
import Cart from "../Cart/Cart";
import Btn from "../UI/Btn";
import styles from "./OrderItems.module.scss";

const OrderItems = () => {
	const itemsInCart = useSelector<RootState, IProduct[]>((state) => state.cart.itemsInCart);

	return (
		<div className={styles.container}>
			<form className={styles.order}>
				<div className={styles.fullNameBlock}>
					<label htmlFor={styles.fullName}>Full name</label>
					<input
						id={styles.fullName}
						name="fullName"
						type="text"
						placeholder="Enter your full name"
					/>
				</div>
				<div className={styles.adressBlock}>
					<label htmlFor={styles.adress}>Adress</label>
					<input id={styles.adress} name="adress" type="text" placeholder="Enter your adress" />
				</div>
				<div className={styles.phoneBlock}>
					<label htmlFor={styles.phone}>Phone number</label>
					<input id={styles.phone} name="phone" type="tel" placeholder="Enter your phone" />
				</div>
				<div className={styles.btns}>
					<Btn type="submit" disabled={false}>
						Order prodcuts
					</Btn>
					<button className={styles.home}>Home</button>
				</div>
			</form>
		</div>
	);
};

export default OrderItems;
