import * as React from 'react';
import { useController } from 'react-hook-form';
import { TextFieldContainer } from '@/models';
import TextField from './TextField';

export default function TextFieldContainer({
	control,
	name,
	placeholder,
	type,
	icon,
	fullWidth,
}: TextFieldContainer) {
	const { field, fieldState } = useController({ control, name });
	const { error } = fieldState;

	return (
		<TextField
			name={field.name}
			onChange={field.onChange}
			value={field.value}
			placeholder={placeholder}
			type={type}
			icon={icon}
			fullWidth={fullWidth}
			error={error}
		/>
	);
}
