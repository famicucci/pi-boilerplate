'use client';
import React, { useState } from 'react';
import styles from '../../styles/formLogin.module.css';
import { TextField } from '@/components/inputs';

export default function FormLogin() {
	const [formValues, setFormValues] = useState({ email: '' });
	const [errors, setErrors] = useState({ email: '' });

	const validateEmail = (email: string): Boolean => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const formValues = Object.fromEntries(formData.entries()) as Record<
			string,
			string
		>;

		if (!validateEmail(formValues.email)) {
			setErrors({
				...errors,
				email: 'Email no valido',
			});
			return;
		}

		// do the request to the server
		console.log(formValues);
	};

	const handleChangeField = (
		event: React.ChangeEvent<HTMLInputElement>
	): void => {
		setFormValues({
			...formValues,
			[event.currentTarget.name]: event.currentTarget.value,
		});
	};

	return (
		<form className={styles.formInputs} onSubmit={handleSubmit}>
			<TextField
				name="email"
				type="text"
				placeholder="Email"
				value={formValues.email}
				onChange={handleChangeField}
				error={errors.email}
			/>
			{/* <TextField
				name="password"
				type="password"
				placeholder="Contraseña"
				value={formValues.password}
				onChange={handleChangeField}
			/> */}
			<button type="submit">Login</button>
		</form>
	);
}
