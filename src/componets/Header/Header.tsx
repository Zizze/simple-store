import React, { FC, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import cartLogo from "../../assets/img/cart-logo.svg";
import Cart from "../Cart/Cart";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { IProduct } from "../../types";
import Overlay from "../UI/Overlay";

const Header: FC = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const itemsInCart = useSelector<RootState, IProduct[]>((state) => state.cart.itemsInCart);
	const haveItemsInCart = itemsInCart.length > 0;
	console.log(cartIsOpen);

	return (
		<header>
			<div className={styles.logoBlock}>
				<img src={logo} alt="logo" className={styles.ico} />
				<h1 className={styles.title}>Simple store</h1>
			</div>
			<div
				className={styles.cartBlock}
				onClick={() => (haveItemsInCart ? setCartIsOpen((prevState) => !prevState) : null)}
			>
				<img src={cartLogo} alt="cart logo" className={styles.ico} />
				<span className={haveItemsInCart ? styles.notEmpty : ""}>{itemsInCart.length}</span>
			</div>
			{cartIsOpen && haveItemsInCart && <Cart setCartIsOpen={setCartIsOpen} />}
			{cartIsOpen && haveItemsInCart && <Overlay setState={setCartIsOpen} />}
		</header>
	);
};

export default Header;
