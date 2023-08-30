import { Button, Children } from '@/models';
import * as React from 'react';
import styles from '../../styles/button.module.css';

const Button = ({ color, type, children, className }: Button & Children) => {
	return (
		<button
			type={type === 'submit' ? 'submit' : 'button'}
			className={`${className} ${styles.button} ${
				color === 'primary' ? styles.colorPrimary : ''
			} ${color === 'secondary' ? styles.colorSecondary : ''}`}
		>
			{children}
		</button>
	);
};

export default Button;
