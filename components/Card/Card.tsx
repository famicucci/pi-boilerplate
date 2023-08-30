import { Children } from '@/models';
import * as React from 'react';
import styles from '../../styles/card.module.css';

export function Card({ children }: Children) {
	return <div className={styles.card}>{children}</div>;
}
