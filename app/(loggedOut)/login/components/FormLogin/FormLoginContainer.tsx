'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../validations';
import { Login } from '../../models';
import { useRouter } from 'next/navigation';
import useFetchAndLoad from '@/hooks/useFetchAndLoad';
import loginRequest from '@/services/loginRequest';
import { useDispatch } from 'react-redux';
import { handleLogin } from '@/redux/authentication';
import { getLoginAdapter, loginAdapter } from '@/adapters';
import FormLogin from './FormLogin';

export default function FormLoginContainer() {
	const dispatch = useDispatch();
	const router = useRouter();
	const { callEndpoint } = useFetchAndLoad();
	const defaultValues: Login = { email: '', password: '' };

	const { handleSubmit, control } = useForm<Login>({
		defaultValues,
		resolver: yupResolver(loginSchema),
	});

	const onSubmit = async (data: Login) => {
		try {
			console.log(data);
			// const response = await callEndpoint(loginRequest(loginAdapter(data)));
			// console.log(response);
			// dispatch(handleLogin(getLoginAdapter(response.data)));
			// router.push('/home');
		} catch (error) {
			console.log(error);
		}
	};

	return <FormLogin onSubmit={handleSubmit(onSubmit)} control={control} />;
}
