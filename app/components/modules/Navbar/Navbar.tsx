import SearchBar from '../../elements/SearchBar/SearchBar';
import { LogoIcon } from '../../icons/LogoIcon';
import { LogoTextIcon } from '../../icons/LogoTextIcon';
// import { PopularNavFeeds } from '../Feeds/index';
import UserBlock from '../UserBlock/UserBlock';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_container}>
        <LogoIcon />
        <LogoTextIcon />
      </div>
      {/* <PopularNavFeeds /> */}
      <SearchBar />
      <UserBlock />
      {/* 
                <SelectCategory/>
                <Search />
                 */}
    </div>
  );
}
