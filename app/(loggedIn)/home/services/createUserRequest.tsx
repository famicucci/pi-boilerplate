'use server';
import { revalidateTag } from 'next/cache';
import User from '../models/user';

async function createUserRequest(data: User) {
	// 'use server';
	const res = await fetch(
		'https://64ff7e32f8b9eeca9e2a3135.mockapi.io/api/users',
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}
	);

	if (!res.ok) {
		throw Error('Hubo un error al crear el usuario');
	}

	revalidateTag('users');
}

export default createUserRequest;
