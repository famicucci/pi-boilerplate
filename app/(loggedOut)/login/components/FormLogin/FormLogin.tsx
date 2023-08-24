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
import backApi from '@/api/config';

export default function FormLogin() {
	const router = useRouter();
	const defaultValues: Login = { email: '', password: '' };

	const { handleSubmit, control } = useForm<Login>({
		defaultValues,
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = async (data: Login) => {
		// console.log(data);
		// envia los datos al servidor
		try {
			const response = await backApi.get('/login');
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}

		// el servidor checkea los datos
		// si los datos son correctos, el servidor devuelve un token
		// el cliente guarda el token en el localstorage
		// el cliente redirige a la pagina de home
		// router.push('/home');
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
