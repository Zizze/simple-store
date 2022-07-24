import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { IProduct } from "../../types";
import Btn from "../UI/Btn";
import styles from "./OrderItems.module.scss";

const initialState: {
	value: string;
	isOk: boolean;
} = {
	value: "",
	isOk: true,
};

const OrderItems = () => {
	const navigate = useNavigate();
	const itemsInCart = useSelector<RootState, IProduct[]>((state) => state.cart.itemsInCart);

	const [fullName, setFullName] = useState(initialState);
	const [adress, setAdress] = useState(initialState);
	const [phone, setPhone] = useState(initialState);

	const fullNameRef = useRef<HTMLInputElement>(null);
	const adressRef = useRef<HTMLInputElement>(null);
	const phoneRef = useRef<HTMLInputElement>(null);

	const isValid =
		fullName.isOk &&
		adress.isOk &&
		phone.isOk &&
		fullName.value !== "" &&
		adress.value !== "" &&
		phone.value !== ""
			? true
			: false;

	useEffect(() => {
		if (itemsInCart.length === 0) navigate("/");
	}, [itemsInCart, navigate]);

	const submitHandler = (e: MouseEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const fullNameChange = () => {
		const value = fullNameRef.current?.value;
		if (!value) return setFullName(initialState);
		if (value.trim().length > 4 && value.includes(" ") && !value.match(/[1-9]/gi)) {
			setFullName({ value, isOk: true });
			return;
		}
		setFullName({ value, isOk: false });
	};

	const adressChange = () => {
		const value = adressRef.current?.value;
		if (!value) return setAdress(initialState);
		if (value.trim().length > 4 && value.includes(" ")) {
			setAdress({ value, isOk: true });
			return;
		}
		setAdress({ value, isOk: false });
	};

	const phoneChange = () => {
		const value = phoneRef.current?.value.trim();
		if (!value) return setPhone(initialState);

		if (value.trim().length > 8 && +value) {
			setPhone({ value, isOk: true });
			return;
		}
		setPhone({ value, isOk: false });
	};

	return (
		<div className={styles.container}>
			<form className={styles.order} onSubmit={submitHandler}>
				<div className={styles.fullNameBlock}>
					<label htmlFor={styles.fullName}>Full name</label>
					<input
						id={styles.fullName}
						name="fullName"
						type="text"
						placeholder="Enter your full name"
						onChange={fullNameChange}
						className={fullName.isOk ? "" : styles.error}
						ref={fullNameRef}
						value={fullName.value}
					/>
				</div>
				<div className={styles.adressBlock}>
					<label htmlFor={styles.adress}>Adress</label>
					<input
						id={styles.adress}
						name="adress"
						type="text"
						placeholder="Enter your adress"
						onChange={adressChange}
						className={adress.isOk ? "" : styles.error}
						ref={adressRef}
						value={adress.value}
					/>
				</div>
				<div className={styles.phoneBlock}>
					<label htmlFor={styles.phone}>Phone number</label>
					<input
						id={styles.phone}
						name="phone"
						type="tel"
						placeholder="Enter your phone"
						onChange={phoneChange}
						ref={phoneRef}
						value={phone.value}
						className={phone.isOk ? "" : styles.error}
					/>
				</div>
				<div className={styles.btns}>
					<Btn type="submit" disabled={!isValid}>
						Order prodcuts
					</Btn>
					<button className={styles.home} onClick={() => navigate("/")}>
						Home
					</button>
				</div>
			</form>
		</div>
	);
};

export default OrderItems;
