import { useEffect, useState } from 'react';
import styles from '../../styles/menuItem.module.css';
import { MenuItemProps } from '../../models';
import Link from 'next/link';

export default function MenuItem(props: MenuItemProps) {
	const { icon, text, href, active } = props;

	const [apearText, setApearText] = useState<boolean>(true);

	useEffect(() => {
		if (active) {
			setTimeout(() => {
				setApearText(true);
			}, 70);
		} else {
			setApearText(false);
		}
	}, [active]);

	return (
		<li
			className={`${styles.container} ${
				!active ? styles.containerMenuInactive : styles.containerMenuActive
			}`}
		>
			<Link href={`${href}`}>
				{icon}
				<span
					className={`${styles.text} ${!active && styles.textMenuInactive} ${
						apearText && styles.textMenuActive
					}`}
				>
					{text}
				</span>
			</Link>
		</li>
	);
}
