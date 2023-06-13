'use client';
import * as React from 'react';
import styles from '../../styles/formLogin.module.css';
import { TextField } from '@/components/inputs';

export default function FormLogin() {
	return (
		<form className={styles.formInputs}>
			<TextField
				type="email"
				onChange={() => {
					return console.log('hola onchange');
				}}
				value=""
				placeholder="Email"
			/>
			<input type="password" placeholder="Password" />
			<button type="submit">Login</button>
		</form>
	);
}
