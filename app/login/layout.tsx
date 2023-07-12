import { Children } from '@/models/children';
import styles from './styles/layout.module.css';

function Home({ children }: Children) {
	return <main className={styles.main}>{children}</main>;
}

export default Home;
