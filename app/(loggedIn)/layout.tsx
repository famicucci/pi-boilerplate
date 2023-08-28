'use client';
import { useState } from 'react';
import styles from './styles/layout.module.css';
import { Menu } from './components/Menu';
import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation';

export interface IAppLayoutProps {
	children: React.ReactNode;
}

export default function AppLayout(props: IAppLayoutProps) {
	const auth = useSelector((state) => state.auth);
	const [active, setActive] = useState(true);

	if (!auth.userData.token) {
		return redirect('/login');
	}

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
