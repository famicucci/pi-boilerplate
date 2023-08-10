import * as React from 'react';
import styles from '../../styles/menuItem.module.css';
import { MenuItem } from '../../models/menuItem';

export default function MenuItem(props: MenuItem) {
	const { icon, text, href } = props;

	return (
		<li className={styles.container}>
			<a href={`${href}`}>
				{icon}
				<span className={styles.text}>{text}</span>
			</a>
		</li>
	);
}
