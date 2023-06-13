'use client';
import * as React from 'react';
import styles from '../../styles/formLogin.module.css';
import { TextField } from '@/components/inputs';

export default function FormLogin() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const formValues = Object.fromEntries(formData.entries());
		return console.log(formValues);
	};

	return (
		<form className={styles.formInputs} onSubmit={handleSubmit}>
			<TextField name="email" type="email" placeholder="Email" />
			<TextField name="password" type="password" placeholder="Contraseña" />
			<button type="submit">Login</button>
		</form>
	);
}
