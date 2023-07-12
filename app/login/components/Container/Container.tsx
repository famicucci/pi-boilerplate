import React from 'react';
import styles from '../../styles/container.module.css';

export interface Container {
	children: React.ReactNode;
}

export default function Container({ children }: Container) {
	return <div className={styles.container}>{children}</div>;
}
