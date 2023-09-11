import styles from './styles/error.module.css';

export default function Loading() {
	return (
		<div className={styles.container}>
			<h2>Estoy esperando que cargue los datos</h2>
		</div>
	);
}
