import { Children } from '@/models';
import styles from './styles/layout.module.css';

function Home({ children }: Children) {
	return (
		<main className={`${styles.alignCenter} ${styles.background}`}>
			{children}
		</main>
	);
}

export default Home;
