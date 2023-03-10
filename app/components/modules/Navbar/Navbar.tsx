import UserBlock from '../UserBlock/UserBlock';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      {/* <Logo>
                <SelectCategory/>
                <Search />
                 */}

      <UserBlock />
    </div>
  );
}
