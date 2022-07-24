import React from "react";
import styles from "./ErrorPage.module.scss";
import notFound from "../../assets/img/not-found.svg";

const ErrorPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.error}>
				<img src={notFound} alt="not found" />
				<p>
					Page not found <span>404</span>
				</p>
			</div>
		</div>
	);
};

export default ErrorPage;
