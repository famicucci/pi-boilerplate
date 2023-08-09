'use client';
import { useState } from 'react';
import styles from './styles/layout.module.css';
import { Menu } from './components/Menu';

export interface IAppLayoutProps {
	children: React.ReactNode;
}

export default function AppLayout(props: IAppLayoutProps) {
	const [active, setActive] = useState(true);

	return (
		<>
			<Menu active={active} setActive={setActive} />
			<div
				className={`${styles.content} ${active && styles.contentMenuActive}`}
			>
				{props.children}
			</div>
		</>
	);
}
