import styles from './styles/layout.module.css';

function Home({ children }) {
	return <main className={styles.main}>{children}</main>;
}

export default Home;
