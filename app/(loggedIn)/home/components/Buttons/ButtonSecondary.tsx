import { Button } from '@/components/Button';
import styles from '../../styles/buttonSecondary.module.css';

export function ButtonSecondary() {
	return (
		<Button color="secondary" className={styles.button}>
			Secondary
		</Button>
	);
}
