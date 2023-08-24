import { LogoMini } from '@/components/Logo';
import styles from '../../styles/menu.module.css';
import { ListItems } from './ListItems';
import LogoText from './LogoText';
import { MenuProps } from '../../models/menuProps';

export default function Menu(props: MenuProps) {
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
			<div
				className={`${styles.containerLogoText} ${
					!active && styles.containerLogoTextMenuInactive
				}`}
			>
				<LogoText />
			</div>
			<ListItems active={active} />
		</div>
	);
}
