'use client';
import { Button } from '@/components/Button';
import React, { useTransition } from 'react';
import styles from '../../styles/buttonAddUser.module.css';
import { createUserRequest } from '../../services';

export function ButtonAddUser() {
	const [isPending, startTransition] = useTransition();

	return (
		<Button
			color="primary"
			className={styles.buttonAddUser}
			onClick={() =>
				startTransition(() =>
					createUserRequest({
						name: 'Victoria',
						age: 27,
						city: 'Buenos Aires',
					})
				)
			}
		>
			{isPending ? 'Agregando el usuario...' : 'Agregar Usuario'}
		</Button>
	);
}
