import React, { FC } from "react";
import { useLocation } from "react-router-dom";
import { IProduct } from "../../types";
import Item from "./Item";
import styles from "./Products.module.scss";

interface Props {
	DUMMY_PRODUCTS: IProduct[];
}

const Products: FC<Props> = ({ DUMMY_PRODUCTS }) => {
	return (
		<main>
			<div className={styles.container}>
				<div className={styles.items}>
					{DUMMY_PRODUCTS.map((item) => (
						<Item item={item} key={item.id} />
					))}
				</div>
			</div>
		</main>
	);
};

export default Products;
