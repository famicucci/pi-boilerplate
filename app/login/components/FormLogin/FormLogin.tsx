'use client';
import React from 'react';
import { TextField } from '@/components/inputs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations';
import { Login } from '../../models';
import { Button } from '@/components/Buttons';
import styles from '../../styles/formLogin.module.css';
import { Lock, Mail } from 'react-feather';

export default function FormLogin() {
	const defaultValues: Login = { email: '', password: '' };

	const { handleSubmit, control } = useForm<Login>({
		defaultValues,
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = (data: Login) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.alignItemsCenter}>
			<p>Este es el cambio en la nueva rama para que se vea en vercel</p>
			<TextField
				control={control}
				type="text"
				name="email"
				placeholder="Email"
				icon={<Mail size={16} />}
			/>
			<TextField
				control={control}
				type="password"
				name="password"
				placeholder="Contraseña"
				icon={<Lock size={16} />}
			/>
			<Button type="submit" color="primary" className={styles.marginButton}>
				Login
			</Button>
		</form>
	);
}
