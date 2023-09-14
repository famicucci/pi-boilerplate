import * as React from 'react';
import styles from '../../styles/textField.module.css';
import { TextField } from '@/models/textField';

export default function TextField({
	name,
	placeholder,
	type,
	icon,
	fullWidth,
	error,
	value,
	onChange,
}: TextField) {
	return (
		<div className={!fullWidth ? styles.container : styles.containerFullWidth}>
			<div
				className={`${styles.inputContainer} ${
					!error && styles.spaceErrorMessage
				}`}
			>
				<input
					name={name}
					onChange={onChange}
					value={value}
					type={type}
					placeholder={placeholder}
					className={styles.input}
				/>
				{icon && <>{icon}</>}
			</div>
			{error && <p className={styles.errorMessage}>{error.message}</p>}
		</div>
	);
}
