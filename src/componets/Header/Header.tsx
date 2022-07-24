import { FC, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import cartLogo from "../../assets/img/cart-logo.svg";
import Cart from "../Cart/Cart";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import Overlay from "../UI/Overlay";
import { Link } from "react-router-dom";

const Header: FC = () => {
	const [cartIsOpen, setCartIsOpen] = useState(false);
	const totalAmount = useSelector<RootState, number>((state) => state.cart.totalAmount);

	const haveItemsInCart = totalAmount > 0;

	const cn = totalAmount < 100 ? styles.notEmpty : styles.notEmptyBig;
	return (
		<header>
			<Link to="/" className={styles.logoBlock}>
				<img src={logo} alt="logo" className={styles.ico} />
				<h1 className={styles.title}>Simple store</h1>
			</Link>
			<div
				className={styles.cartBlock}
				onClick={() => (haveItemsInCart ? setCartIsOpen((prevState) => !prevState) : null)}
			>
				<img src={cartLogo} alt="cart logo" className={styles.ico} />
				<span className={haveItemsInCart ? cn : ""}>{totalAmount}</span>
			</div>
			{cartIsOpen && haveItemsInCart && <Cart setCartIsOpen={setCartIsOpen} />}
			{cartIsOpen && haveItemsInCart && <Overlay setState={setCartIsOpen} />}
		</header>
	);
};

export default Header;
