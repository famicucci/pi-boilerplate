import backApi from '@/api/config';

const loginRequest = (data: object) => {
	return { call: backApi.get('/login') };
};

export default loginRequest;
