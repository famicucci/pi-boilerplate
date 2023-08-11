import * as React from 'react';
import styles from '../../styles/menuItem.module.css';
import { MenuItemProps } from '../../models';

export default function MenuItem(props: MenuItemProps) {
	const { icon, text, href, active } = props;

	return (
		<li
			className={`${styles.container} ${
				!active ? styles.containerMenuInactive : styles.containerMenuActive
			}`}
		>
			<a href={`${href}`}>
				{icon}
				<span
					className={`${styles.text} ${
						!active ? styles.textMenuInactive : styles.textMenuActive
					}`}
				>
					{text}
				</span>
			</a>
		</li>
	);
}
