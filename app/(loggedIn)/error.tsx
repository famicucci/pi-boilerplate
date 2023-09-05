'use client'; // Error components must be Client Components
import { useEffect } from 'react';
import styles from './styles/error.module.css';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	// console.log(error);
	// console.log(error.message);
	// console.log(error.message);
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className={styles.container}>
			<h2>Ocurrió un error!</h2>
			<p className={styles.content}>{error.message}</p>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
				className={styles.button}
			>
				Try again
			</button>
		</div>
	);
}
