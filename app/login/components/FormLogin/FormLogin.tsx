'use client';
import React from 'react';
import styles from '../../styles/formLogin.module.css';
import { TextField } from '@/components/inputs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormValues = {
	email: string;
};

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email('Debe ser un email válido')
		.required('El campo email es requerido'),
});

export default function FormLogin() {
	const defaultValues: object = { email: '' };

	const { handleSubmit, control } = useForm<FormValues>({
		defaultValues,
		resolver: yupResolver(loginSchema),
	});
	const onSubmit = (data: FormValues) => console.log(data);

	return (
		<form className={styles.formInputs} onSubmit={handleSubmit(onSubmit)}>
			<TextField control={control} name="email" placeholder="Email" />
			<button type="submit">Login</button>
		</form>
	);
}
