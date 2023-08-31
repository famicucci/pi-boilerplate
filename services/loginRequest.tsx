import backApi from '@/api/config';
import { Request } from '@/models/request';

const loginRequest = (data: Request) => {
	return { call: backApi.get('/login', data) };
};

export default loginRequest;
