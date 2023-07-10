import * as React from 'react';
import styles from '../../styles/textField.module.css';
import { useController, UseControllerProps } from 'react-hook-form';

interface InputProps {
	control: UseControllerProps<any>['control'];
	name: UseControllerProps<any>['name'];
	type: string;
	placeholder?: string;
}

export default function TextField({
	control,
	name,
	placeholder,
	type,
}: InputProps) {
	const { field, fieldState } = useController({ control, name });
	const { error } = fieldState;

	return (
		<div className={styles.box}>
			<input
				{...field}
				type={type}
				placeholder={placeholder}
				className={styles.input}
			/>
			{error && <p>{error.message}</p>}
		</div>
	);
}
