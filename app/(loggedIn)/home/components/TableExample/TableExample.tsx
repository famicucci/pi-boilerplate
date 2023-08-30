import * as React from 'react';
import { Table } from '@/app/(loggedIn)/components/Table';
import { TableExampleData } from '../../models/tableExampleData';

export function TableExample() {
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

	return <Table columns={columns} data={currentData} />;
}
