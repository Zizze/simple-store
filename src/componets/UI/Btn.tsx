import React, { FC } from "react";
import styles from "./Btn.module.scss";

interface Props {
	children: React.ReactNode;
	type: "button" | "submit" | "reset" | undefined;
	onClick: () => void;
}

const Btn: FC<Props> = ({ children, type, onClick }) => {
	return (
		<button type={type} className={styles.btn} onClick={onClick}>
			{children}
		</button>
	);
};

export default Btn;
