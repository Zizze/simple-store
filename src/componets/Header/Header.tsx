import React, { FC } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import cartLogo from "../../assets/img/cart-logo.svg";
import Cart from "../Cart/Cart";

const Header: FC = () => {
	return (
		<header>
			<div className={styles.logoBlock}>
				<img src={logo} alt="logo" className={styles.ico} />
				<h1 className={styles.title}>Simple store</h1>
			</div>
			<div className={styles.cartBlock}>
				<img src={cartLogo} alt="cart logo" className={styles.ico} />
				<span className={styles.notEmpty}>1</span>
				{/* <Cart /> */}
			</div>
		</header>
	);
};

export default Header;
