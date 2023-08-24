import axios from 'axios';

const backApi = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'GET, PUT,POST, DELETE, OPTIONS',
		'Access-Control-Allow-Headers':
			'Origin, X-Requested-With, Content-Type, Accept',
		'Content-Type': 'application/json',
	},
});

export default backApi;
