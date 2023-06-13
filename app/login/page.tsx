import FormLogin from './components/FormLogin';
import styles from './styles/formLogin.module.css';

function Login() {
	// el main debe estar en este componente. Porque puede suceder que despues quiera agregar un footer o un header
	return (
		<div className={styles.loginForm}>
			<h1>Login</h1>
			<FormLogin />
		</div>
	);
}

export default Login;
