'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import styles from '../../styles/redirect.module.css';

export default function Redirect() {
	useEffect(() => {
		redirect('/login');
	}, []);

	return (
		<div className={styles.container}>
			<p>Redirigiendo a la página principal...</p>
		</div>
	);
}
