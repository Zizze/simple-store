import React, { FC } from "react";
import { IProduct } from "../../types";
import Item from "./Item";
import styles from "./Products.module.scss";

const DUMMY_PRODUCTS: IProduct[] = [
	{
		id: 1,
		name: "Acer Aspire 7",
		descr: "1920x1080 Full HD, DDR4-3200, NVIDIA GeForce GTX 1650, AMD Ryzen 5 5500U",
		image: "https://content.rozetka.com.ua/goods/images/big/163386254.jpg",
		amount: 1,
		price: 750,
	},
	{
		id: 2,
		name: "ASUS ExpertBook B1",
		descr: "1920x1080 Full HD, DDR4-3200, Intel UHD Graphics, Intel Core i3-1115G4",
		image: "https://content2.rozetka.com.ua/goods/images/big/270525894.jpg",
		amount: 1,
		price: 550,
	},
	{
		id: 3,
		name: "Lenovo V14",
		descr: "1920x1080 Full HD, 16GB, AMD Radeon Graphics, AMD Ryzen 5 5500U",
		image: "https://content.rozetka.com.ua/goods/images/big/252192898.jpg",
		amount: 1,
		price: 450,
	},
	{
		id: 4,
		name: "Apple MacBook Air 13 M1",
		descr: "Retina (2560x1600) WQXGA, DDR4-3200, Apple M1 Graphics, Apple M1",
		image: "https://content.rozetka.com.ua/goods/images/big/273759974.jpg",
		amount: 1,
		price: 1300,
	},
	{
		id: 5,
		name: "ASUS TUF Gaming A17",
		descr: "17.3'' (1920x1080) Full HD, DDR4-3200, NVIDIA GeForce GTX 1650, AMD Ryzen 5 4600H",
		image: "https://content1.rozetka.com.ua/goods/images/big/272561687.jpg",
		amount: 1,
		price: 950,
	},
	{
		id: 6,
		name: "HP Pavilion Gaming 15",
		descr: "15.6 (1920x1080) Full HD, DDR4-3200, NVIDIA GeForce RTX 3050 Ti, AMD Ryzen 7 5800H",
		image: "https://content.rozetka.com.ua/goods/images/big/248528822.jpg",
		amount: 1,
		price: 1150,
	},
];

const Products: FC = () => {
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
