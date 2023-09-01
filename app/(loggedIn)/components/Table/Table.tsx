import { Column } from '../../models/column';
import { TableProps } from '../../models/tableProps';

export default function Table(props: TableProps) {
	const { columns, data } = props;

	return (
		<table>
			<thead>
				<tr>
					{columns.map((column) => (
						<th
							key={column.name}
							style={{
								width: `${column.minWidth}`,
							}}
						>
							{column.name}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map((item: { id: string }) => (
					<tr key={item.id}>
						{columns.map((column) => (
							<td
								key={column.name}
								style={{
									textAlign: `${column.align}` as 'left' | 'right' | 'center',
								}}
							>
								{item[column.selector]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}
