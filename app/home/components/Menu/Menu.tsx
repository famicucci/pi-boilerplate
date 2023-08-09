import { LogoMini } from '@/components/Logo';
import * as React from 'react';
import styles from '../../styles/menu.module.css';

export interface IMenuProps {
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu(props: IMenuProps) {
	const { active, setActive } = props;

	return (
		<div
			className={`${styles.sideMenu} ${active && styles.sideMenuActive}`}
			id="side-menu"
		>
			<div
				onClick={() => {
					setActive(!active);
				}}
				className={`${styles.containerLogo} ${
					active
						? styles.containerLogoMenuActive
						: styles.containerLogoMenuInActive
				}`}
			>
				<LogoMini />
			</div>
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
	);
}
