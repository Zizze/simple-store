import { FC, ReactNode } from "react";
import styles from "./Btn.module.scss";

interface Props {
	children: ReactNode;
	type: "button" | "submit" | "reset" | undefined;
	onClick?: () => void;
	disabled?: boolean;
}

const Btn: FC<Props> = ({ children, type, onClick, disabled = false }) => {
	return (
		<button type={type} className={styles.btn} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

export default Btn;
