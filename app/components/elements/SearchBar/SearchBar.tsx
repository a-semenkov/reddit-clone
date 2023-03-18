import { SearchIcon } from '@/icons/index';
import styles from './searchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.search_wrapper}>
      <SearchIcon className={styles.search_icon} />
      <input className={styles.search} />
    </div>
  );
}
