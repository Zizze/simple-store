import React, { FC } from "react";
import styles from "./Quantity.module.scss";

const Quantity: FC = () => {
	return (
		<div className={styles.quantity}>
			<button className={styles.minus}>-</button>
			<input type="number" max={30} min={1} className={styles.amount} />
			<button className={styles.plus}>+</button>
		</div>
	);
};

export default Quantity;
