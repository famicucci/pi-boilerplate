async function getUsersRequest() {
	const res = await fetch(
		'https://64ff7e32f8b9eeca9e2a3135.mockapi.io/api/users'
	);

	if (!res.ok) {
		throw Error('Hubo un error al traer los usuarios');
	}

	return res.json();
}

export default getUsersRequest;
