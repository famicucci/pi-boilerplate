import * as React from 'react';
import styles from '../../styles/formLogin.module.css';

export default function FormLogin() {
	return (
		<form className={styles.formInputs}>
			<input type="text" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button type="submit">Login</button>
		</form>
	);
}
