import styles from './searchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.search_wrapper}>
      <input className={styles.search} />
      <div className={styles.search_icon}></div>
    </div>
  );
}
