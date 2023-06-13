import * as React from 'react';

export interface ITextFieldProps {
	name: string;
	type: string;
	placeholder?: string;
}

export default function TextField({
	name,
	type,
	placeholder,
}: ITextFieldProps) {
	return <input name={name} type={type} placeholder={placeholder} />;
}
