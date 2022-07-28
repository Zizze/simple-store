import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/cart/cart";
import { useAppDispatch } from "../../redux/store";
import { IProduct } from "../../types";
import Btn from "../UI/Btn";
import styles from "./FullProduct.module.scss";

interface Props {
	DUMMY_PRODUCTS: IProduct[];
}

const FullProduct: FC<Props> = ({ DUMMY_PRODUCTS }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const getIdfromUrl = location.pathname.replace("/product/", "");
	const findItem = DUMMY_PRODUCTS.find((item) => item.id === +getIdfromUrl);
	if (!findItem) {
		navigate("/page-not-found");
		return <></>;
	}

	const clickHandler = () => {
		dispatch(addToCart(findItem));
	};

	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.info}>
					<h2 className={styles.name}>{findItem.name}</h2>
					<img src={findItem.image} alt={`${findItem.name}`} />

					<p className={styles.descr}>
						<span>Description: </span>
						{findItem.descr}
					</p>
					<p className={styles.price}>
						<span>Price: </span>
						{findItem.price}$
					</p>
				</div>

				<div className={styles.btns}>
					<Btn type="button" onClick={clickHandler}>
						Add
					</Btn>
					<Btn type="button" onClick={() => navigate("/")}>
						Back
					</Btn>
				</div>
			</div>
		</div>
	);
};

export default FullProduct;
