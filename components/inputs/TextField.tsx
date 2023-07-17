import * as React from 'react';
import styles from '../../styles/textField.module.css';
import { useController } from 'react-hook-form';
import { TextField } from '@/models';

export default function TextField({
	control,
	name,
	placeholder,
	type,
	icon,
	fullWidth,
}: TextField) {
	const { field, fieldState } = useController({ control, name });
	const { error } = fieldState;

	return (
		<div className={!fullWidth ? styles.container : styles.containerFullWidth}>
			<div className={styles.inputContainer}>
				<input
					{...field}
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
