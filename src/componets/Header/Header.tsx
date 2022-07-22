import React, { FC, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import cartLogo from "../../assets/img/cart-logo.svg";
import Cart from "../Cart/Cart";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { IProduct } from "../../types";

const Header: FC = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const itemsInCart = useSelector<RootState, IProduct[]>((state) => state.cart.itemsInCart);

	return (
		<header>
			<div className={styles.logoBlock}>
				<img src={logo} alt="logo" className={styles.ico} />
				<h1 className={styles.title}>Simple store</h1>
			</div>
			<div className={styles.cartBlock} onClick={() => setCartIsOpen((prevState) => !prevState)}>
				<img src={cartLogo} alt="cart logo" className={styles.ico} />
				<span className={itemsInCart.length > 0 ? styles.notEmpty : ""}>{itemsInCart.length}</span>
			</div>
			{cartIsOpen && <Cart setCartIsOpen={setCartIsOpen} />}
		</header>
	);
};

export default Header;
