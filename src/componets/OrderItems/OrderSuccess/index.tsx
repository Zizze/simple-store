import React from "react";
import styles from "./OrderSuccess.module.scss";
import logoSvg from "../../../assets/img/ok.svg";
import Btn from "../../UI/Btn";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate("/");
	};

	return (
		<div className={styles.container}>
			<div className={styles.success}>
				<img src={logoSvg} alt="succes" />
				<p>Success!</p>
				<Btn type="button" onClick={onClick}>
					Go home
				</Btn>
			</div>
		</div>
	);
};

export default OrderSuccess;
