import * as React from 'react';
import styles from '../../styles/skeleton.module.css';

export default function Skeleton() {
	return (
		<div className={styles.skeleton}>
			<div className={styles.skeletonHeadLine}></div>
			{[...Array(10)].map((item) => (
				<div key={item} className={styles.skeletonLine}></div>
			))}
		</div>
	);
}
