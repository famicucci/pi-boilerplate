'use client';
import React from 'react';
import { TextFieldContainer as TextField } from '@/components/TextField';
import { Button } from '@/components/Button';
import styles from '../../styles/formLogin.module.css';
import { Lock, Mail } from 'react-feather';
import { FormLoginProps } from '../../models/formLoginProps';

export default function FormLogin(props: FormLoginProps) {
	const { onSubmit, control } = props;

	return (
		<form onSubmit={onSubmit} className={styles.alignItemsCenter}>
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
