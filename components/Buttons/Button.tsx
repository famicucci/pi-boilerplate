import { Button, Children } from '@/models';
import * as React from 'react';
import styles from '../../styles/button.module.css';

const Button = ({ color, type, children }: Button & Children) => {
	return (
		<button
			type={type === 'submit' ? 'submit' : 'button'}
			className={`${styles.buttonSubmit} ${
				color === 'primary' ? styles.colorPrimary : ''
			}`}
		>
			{children}
		</button>
	);
};

export default Button;
