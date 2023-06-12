import styles from './styles/login.module.css';

function Login() {
	// el main debe estar en este componente. Porque puede suceder que despues quiera agregar un footer o un header
	return (
		<div className={styles.loginForm}>
			<h1>Login</h1>
			<form className={styles.formInputs}>
				<input type="text" placeholder="Email" />
				<input type="password" placeholder="Password" />
				<button type="submit">Login</button>
			</form>
		</div>
	);
}

export default Login;
