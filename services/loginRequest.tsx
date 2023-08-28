import backApi from '@/api/config';

const loginRequest = (data: object) => {
	return { call: backApi.get('/login', data) };
};

export default loginRequest;
