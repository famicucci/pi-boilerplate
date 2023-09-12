'use client';
import { Button } from '@/components/Button';
import * as React from 'react';
import styles from '../../styles/buttonAddUser.module.css';
import { createUserRequest } from '../../services';

export function ButtonAddUser() {
	return (
		<Button
			color="primary"
			className={styles.buttonAddUser}
			onClick={() =>
				createUserRequest({
					name: 'Victoria',
					age: 27,
					city: 'Buenos Aires',
				})
			}
		>
			Agregar Usuario
		</Button>
	);
}
