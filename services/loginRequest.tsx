import backApi from '@/api/config';

const loginRequest = (data) => {
	return { call: backApi.get('/login', data) };
};

export default loginRequest;
