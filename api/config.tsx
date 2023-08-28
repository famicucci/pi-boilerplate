import axios from 'axios';

const backApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BACKAPI_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'GET, PUT,POST, DELETE, OPTIONS',
		'Access-Control-Allow-Headers':
			'Origin, X-Requested-With, Content-Type, Accept',
		'Content-Type': 'application/json',
	},
});

backApi.interceptors.request.use(
	(config) => {
		const userData = window.localStorage.getItem('userData');
		const accessToken = userData.token;

		if (accessToken) {
			config.headers.Authorization = `Bearer ${JSON.parse(accessToken)}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

export default backApi;
