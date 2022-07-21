import React, { ChangeEvent, FC, useRef, Dispatch, SetStateAction } from "react";
import styles from "./Quantity.module.scss";

interface Props {
	amount: number | string;
	setAmount: Dispatch<SetStateAction<number | string>>;
}

const Quantity: FC<Props> = ({ amount, setAmount }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const inputCheck = inputRef.current?.value || "";
		if (+inputCheck > 30) return setAmount(30);
		if (inputCheck.length === 1 && +inputCheck === 0) return setAmount(1);
		if (+inputCheck < 0) return setAmount(1);
		setAmount(inputCheck);
	};

	const blurHandler = () => {
		const inputCheck = inputRef.current?.value;
		if (inputCheck === "") return setAmount(1);
	};

	const minusAmount = () => {
		const inputCheck = inputRef.current?.value || "";
		if (+inputCheck <= 1) return;
		setAmount((prev) => +prev - 1);
	};

	const plusAmount = () => {
		const inputCheck = inputRef.current?.value || "";
		if (+inputCheck >= 30) return;
		setAmount((prev) => +prev + 1);
	};

	return (
		<div className={styles.quantity}>
			<button className={styles.minus} onClick={minusAmount}>
				-
			</button>
			<input
				type="number"
				max={30}
				min={1}
				className={styles.amount}
				value={amount}
				onChange={changeHandler}
				onBlur={blurHandler}
				ref={inputRef}
			/>
			<button className={styles.plus} onClick={plusAmount}>
				+
			</button>
		</div>
	);
};

export default Quantity;
