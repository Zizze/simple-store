import React, { FC } from "react";
import styles from "./Btn.module.scss";

interface Props {
	children: React.ReactNode;
	type: "button" | "submit" | "reset" | undefined;
}

const Btn: FC<Props> = ({ children, type }) => {
	return (
		<button type={type} className={styles.btn}>
			{children}
		</button>
	);
};

export default Btn;
