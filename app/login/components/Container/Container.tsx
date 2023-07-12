import React from 'react';
import styles from '../../styles/container.module.css';
import { Children } from '@/models';

export default function Container({ children }: Children) {
	return <div className={styles.container}>{children}</div>;
}
