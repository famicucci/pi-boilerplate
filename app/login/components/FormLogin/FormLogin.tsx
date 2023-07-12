'use client';
import React from 'react';
import { TextField } from '@/components/inputs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations';
import { Login } from '../../models';
import { Button } from '@/components/Buttons';

export default function FormLogin() {
	const defaultValues: Login = { email: '', password: '' };

	const { handleSubmit, control } = useForm<Login>({
		defaultValues,
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = (data: Login) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextField
				control={control}
				type="text"
				name="email"
				placeholder="Email"
			/>
			<TextField
				control={control}
				type="password"
				name="password"
				placeholder="Contraseña"
			/>
			<Button type="submit" color="primary">
				Login
			</Button>
		</form>
	);
}
