// 'use client';
import * as React from 'react';
import { Table } from '@/app/(loggedIn)/components/Table';
import { TableExampleData } from '../../models/tableExampleData';
import { useDispatch } from 'react-redux';
import useFetchAndLoad from '@/hooks/useFetchAndLoad';
import { getUsersRequest } from '../../services';

async function getData() {
	const res = await fetch('http://localhost:4000/api/users');
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		console.log(res);
		throw Error('Esto es una prueba del manejo del mensaje');
	}

	return res.json();
}

export async function TableExample() {
	// const dispatch = useDispatch();
	const { callEndpoint } = useFetchAndLoad();

	const data = await getData();
	// const data = await callEndpoint(getUsersRequest());
	console.log(data);
	// try {
	// 	const response = await callEndpoint(getUsersRequest());
	// 	console.log(response);
	// 	// dispatch(handleLogin(getLoginAdapter(response.data)));
	// } catch (error) {
	// 	console.log(error);
	// }

	const columns = [
		{
			name: 'Nombre',
			selector: 'name',
			minWidth: '150px',
			align: 'left',
		},
		{
			name: 'Edad',
			selector: 'age',
			minWidth: '220px',
			align: 'center',
		},
		{
			name: 'Ciudad',
			selector: 'city',
			minWidth: '150px',
			align: 'left',
		},
		{
			name: '',
			selector: 'actions',
			minWidth: '50px',
			align: 'left',
		},
	];

	const currentData: TableExampleData[] = [
		{ id: 1, name: 'John', age: 31, city: 'New York' },
		{ id: 2, name: 'Jane', age: 27, city: 'Houston' },
		{ id: 2, name: 'Vince', age: 23, city: 'Miami' },
		{ id: 2, name: 'Joan', age: 45, city: 'L.A.' },
		{ id: 2, name: 'Mike', age: 65, city: 'Chicago' },
		{ id: 2, name: 'Carl', age: 29, city: 'Texas' },
	];

	return <Table columns={columns} data={data} />;
}
