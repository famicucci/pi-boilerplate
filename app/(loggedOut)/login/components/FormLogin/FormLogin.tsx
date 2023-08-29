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
import { useRouter } from 'next/navigation';
import useFetchAndLoad from '@/hooks/useFetchAndLoad';
import loginRequest from '@/services/loginRequest';
import { useSelector, useDispatch } from 'react-redux';
import { handleLogin } from '@/redux/authentication';

export default function FormLogin() {
	const dispatch = useDispatch();
	// const auth = useSelector((state) => state.auth);
	// console.log(auth);
	const router = useRouter();
	const { callEndpoint } = useFetchAndLoad();
	const defaultValues: Login = { email: '', password: '' };

	const { handleSubmit, control } = useForm<Login>({
		defaultValues,
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = async (data: Login) => {
		try {
			const response = await callEndpoint(loginRequest(data));
			dispatch(handleLogin(response.data));
			router.push('/home');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.alignItemsCenter}>
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
