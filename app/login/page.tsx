import { Logo } from '@/components/Logo';
import { Container } from './components/Container';
import { FormLogin } from './components/FormLogin';

function Login() {
	return (
		<Container>
			<Logo top={25} />
			<FormLogin />
		</Container>
	);
}

export default Login;
