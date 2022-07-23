import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Overlay.module.scss";

interface Props {
	setState: Dispatch<SetStateAction<boolean>>;
}

const Overlay: FC<Props> = ({ setState }) => {
	return <div className={styles.overlay} onClick={() => setState(false)} />;
};

export default Overlay;
