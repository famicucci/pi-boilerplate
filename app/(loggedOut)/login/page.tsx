import { Logo } from '@/components/Logo';
import { Container } from './components/Container';
import { FormLoginContainer } from './components/FormLogin';

function Login() {
	return (
		<Container>
			<Logo top={25} />
			<FormLoginContainer />
		</Container>
	);
}

export default Login;
