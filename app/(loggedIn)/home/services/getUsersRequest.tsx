async function getUsersRequest() {
	const res = await fetch('http://localhost:4000/api/users');

	if (!res.ok) {
		throw Error('Hubo un error al traer los usuarios');
	}

	return res.json();
}

export default getUsersRequest;
