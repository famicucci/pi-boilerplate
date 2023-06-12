import styles from './layout.module.css';

// Este es el componente que se repite en todas las páginas, por lo tanto aqui debe ir el header y el footer
function Home({ children }) {
	return <main className={styles.main}>{children}</main>;
}

export default Home;
