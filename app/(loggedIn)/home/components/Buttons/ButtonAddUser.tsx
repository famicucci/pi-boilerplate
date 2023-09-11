'use client';
import { Button } from '@/components/Button';
import * as React from 'react';
import styles from '../../styles/buttonAddUser.module.css';

export default interface ButtonAddUserProps {}

export function ButtonAddUser(props: ButtonAddUserProps) {
	return (
		<Button
			color="primary"
			className={styles.buttonAddUser}
			onClick={() => {
				console.log('Agregando usuario');
			}}
		>
			Agregar Usuario
		</Button>
	);
}
