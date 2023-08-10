import * as React from 'react';
import { menuItems } from '../../utils';
import styles from '../../styles/listItem.module.css';
import MenuItem from './MenuItem';

export function ListItems() {
	return (
		<ul className={styles.menuLinks}>
			{menuItems.map((item) => (
				<MenuItem key={item.text} icon={item.icon} text={item.text} href="#" />
			))}
		</ul>
	);
}
