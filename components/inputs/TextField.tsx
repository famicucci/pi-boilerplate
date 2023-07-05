import * as React from 'react';
import styles from '../../styles/textField.module.css';

export interface ITextFieldProps {
	name: string;
	type: string;
	value: string;
	onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	error?: string;
}

export default function TextField({
	name,
	type,
	placeholder,
	onChange,
	error,
}: ITextFieldProps) {
	return (
		<div className={styles.box}>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				className={styles.input}
			/>
			<div>{error && <span className={styles.error}>{error}</span>}</div>
		</div>
	);
}
