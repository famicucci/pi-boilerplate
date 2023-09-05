import backApi from '@/api/config';

const getUsersRequest = () => {
	return { call: backApi.get('/users') };
};

export default getUsersRequest;
