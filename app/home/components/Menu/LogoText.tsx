import * as React from 'react';
import styles from '../../styles/logoMini.module.css';

export default function LogoText() {
	return (
		<span className={styles.text}>
			<span className={styles.short}>Pi</span> Consulting & Data Strategy
		</span>
	);
}
