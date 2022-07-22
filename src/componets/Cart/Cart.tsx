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
import { IProduce } from "immer/dist/internal";

interface Props {
	setCartIsOpen: Dispatch<React.SetStateAction<boolean>>;
}

const Cart: FC<Props> = ({ setCartIsOpen }) => {
	const dispatch = useAppDispatch();
	const itemsInCart = useSelector<RootState, IProduct[]>((state) => state.cart.itemsInCart);
	console.log(itemsInCart);

	const clickHandler = () => {};

	return (
		<div className={styles.cart}>
			<div className={styles.cartControls}>
				<img
					onClick={() => setCartIsOpen(false)}
					src={close}
					alt="close cart"
					className={styles.closeCart}
				/>

				<div className={styles.allDelete} onClick={() => dispatch(allDelete())}>
					<p>All delete</p>
					<img src={trash} alt="all delete" className={styles.trash} />
				</div>
			</div>
			{itemsInCart.map((item: IProduct) => (
				<ItemInCart item={item} key={item.id} />
			))}

			<div className={styles.total}>
				<Btn onClick={clickHandler} type="button">
					Buy
				</Btn>
				<p className={styles.totalPrice}>Total</p>
			</div>
		</div>
	);
};

export default Cart;
