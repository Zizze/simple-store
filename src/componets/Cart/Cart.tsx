import React, { FC, Dispatch } from "react";
import { IProduct } from "../../types";
import styles from "./Cart.module.scss";
import ItemInCart from "./ItemInCart";
import Btn from "../UI/Btn";
import close from "../../assets/img/close.svg";
import trash from "../../assets/img/trash-svgrepo-com.svg";
import { RootState, useAppDispatch } from "../../redux/store";
import { allDelete } from "../../redux/cart/cart";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {
	setCartIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Cart: FC<Props> = ({ setCartIsOpen }) => {
	const location = useLocation().pathname;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const itemsInCart = useSelector<RootState, IProduct[]>((state) => state.cart.itemsInCart);
	const totalPrice = useSelector<RootState, number>((state) => state.cart.totalPrice);
	console.log(itemsInCart);

	const clickHandler = () => {
		navigate("/order");
		setCartIsOpen(false);
	};

	const allDeleteClick = () => {
		dispatch(allDelete());
		setCartIsOpen(false);
	};

	const isLastItem = () => {
		if (itemsInCart.length === 1) setCartIsOpen(false);
	};

	return (
		<div className={styles.cart}>
			<div className={styles.cartControls}>
				<img
					onClick={() => setCartIsOpen(false)}
					src={close}
					alt="close cart"
					className={styles.closeCart}
				/>

				<div className={styles.allDelete} onClick={allDeleteClick}>
					<p>All delete</p>
					<img src={trash} alt="all delete" className={styles.trash} />
				</div>
			</div>
			{itemsInCart.map((item: IProduct) => (
				<ItemInCart item={item} key={item.id} isLastItem={isLastItem} />
			))}

			<div className={styles.total}>
				{location !== "/order" && (
					<Btn onClick={clickHandler} type="button">
						Buy
					</Btn>
				)}
				<p className={styles.totalPrice}>Total: {totalPrice}$</p>
			</div>
		</div>
	);
};

export default Cart;
