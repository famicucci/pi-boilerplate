import * as React from 'react';

export interface ITextFieldProps {
	value: string;
	type: string;
	onChange: (value: string) => void;
	placeholder?: string;
}

export default function TextField({
	value,
	onChange,
	type,
	placeholder,
}: ITextFieldProps) {
	return (
		<input
			type={type}
			placeholder={placeholder}
			onChange={(e) => onChange(e.target.value)}
			value={value}
		/>
	);
}
