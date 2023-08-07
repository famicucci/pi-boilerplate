'use client';
import { useState } from 'react';
import styles from '../../styles/menu.module.css';

export interface IMenuProps {}

export default function Menu(props: IMenuProps) {
	const [active, setActive] = useState(false);

	return (
		<>
			<div
				className={`${styles.sideMenu} ${active && styles.sideMenuActive}`}
				id="side-menu"
			>
				<button
					className={styles.closeBtn}
					id="close-btn"
					onClick={() => {
						setActive(!active);
					}}
				>
					open/close
				</button>
				<ul className={styles.menuLinks}>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Portfolio</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</div>
			<div
				className={`${styles.content} ${active && styles.contentMenuActive}`}
			>
				<button
					id="open-menu"
					onClick={() => {
						setActive(!active);
					}}
				>
					Open Menu
				</button>
			</div>
		</>
	);
}
