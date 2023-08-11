import * as React from 'react';
import { menuItems } from '../../utils';
import styles from '../../styles/listItem.module.css';
import MenuItem from './MenuItem';
import { ListItemsProps } from '../../models/listItemsProps';

export function ListItems(props: ListItemsProps) {
	const { active } = props;

	return (
		<ul className={styles.menuLinks}>
			{menuItems.map((item) => (
				<MenuItem
					key={item.text}
					icon={item.icon}
					text={item.text}
					href="#"
					active={active}
				/>
			))}
		</ul>
	);
}
