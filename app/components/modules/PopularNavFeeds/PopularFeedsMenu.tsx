import { Dropdown } from '@/shared/Dropdown';

import {
  CelebrityIcon,
  CryptoIcon,
  DropdownArrowIcon,
  GamingIcon,
  HomeIcon,
  MemesIcon,
  ReactIcon,
  SportsIcon,
  TrendingIcon,
} from '@/icons/index';
import styles from './popularNavFeeds.module.css';

export default function PopularFeedsMenu() {
  return (
    <ul role='menu' className={styles.list}>
      <p className={styles.header}>FEEDS</p>
      <li className={styles.list_item}>
        <HomeIcon />
        <p>Home</p>
      </li>
      <li className={styles.list_item}>
        <TrendingIcon />
        <p>Popular</p>
      </li>
      <p className={styles.header}>RECENT</p>
      <li className={styles.list_item}>
        <MemesIcon />
        <p>Memes</p>
      </li>
      <li className={styles.list_item}>
        <ReactIcon />
        <p>ReactJS</p>
      </li>
      <p className={styles.header}>TOPICS</p>
      <li className={styles.list_item}>
        <Dropdown
          triggerElementContent={
            <>
              <GamingIcon />
              <p>Gaming</p>
              <DropdownArrowIcon />
            </>
          }
        >
          <p>Valheim</p>
          <p>Genshin</p>
          <p>Halo</p>
        </Dropdown>
      </li>
      <li className={styles.list_item}>
        <Dropdown
          triggerElementContent={
            <>
              <SportsIcon />
              <p>Sports</p>
              <DropdownArrowIcon />
            </>
          }
        >
          <p>Football</p>
          <p>UFC</p>
          <p>Hockey</p>
        </Dropdown>
      </li>
      <li className={styles.list_item}>
        <Dropdown
          triggerElementContent={
            <>
              <CryptoIcon />
              <p>Crypto</p>
              <DropdownArrowIcon />
            </>
          }
        >
          <p>Bitcoin</p>
          <p>Dogecoin</p>
          <p>Litecoin</p>
        </Dropdown>
      </li>
      <li className={styles.list_item}>
        <Dropdown
          triggerElementContent={
            <>
              <CelebrityIcon />
              <p>Celebrity</p>
              <DropdownArrowIcon />
            </>
          }
        >
          <p>Henry Cavill</p>
          <p>Keanu Reeves</p>
          <p>Alexandra Daddario</p>
        </Dropdown>
      </li>
    </ul>
  );
}
