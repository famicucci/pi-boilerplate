import axios from 'axios';

console.log(process.env.NEXT_PUBLIC_BACKAPI_URL);
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

export default backApi;
