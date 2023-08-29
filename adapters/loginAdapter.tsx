import { Login } from '@/app/(loggedOut)/login/models';

const loginAdapter = (data: Login) => {
	return {
		username: data.email,
		password: data.password,
	};
};

export default loginAdapter;
