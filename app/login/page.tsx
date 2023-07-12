import { Container } from './components/Container';
import { FormLogin } from './components/FormLogin';
import styles from './styles/formLogin.module.css';

function Login() {
	return (
		<div className={styles.loginForm}>
			<Container>
				<FormLogin />
			</Container>
		</div>
	);
}

export default Login;
