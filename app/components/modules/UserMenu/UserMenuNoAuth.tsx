import { AdvertiseIcon, HelpIcon, LoginIcon, MoreIcon } from '@/icons/index';

import styles from './userMenu.module.css';

export default function UserMenuNoAuth() {
  return (
    <div className={styles.dropdown_menu}>
      <div className={styles.dropdown_item}>
        <HelpIcon />
        <span>Help Center</span>
      </div>
      <div className={styles.dropdown_item}>
        <MoreIcon />
        <span>More</span>
      </div>
      <div className={styles.dropdown_item}>
        <AdvertiseIcon />
        <span>Advertise on Reddit</span>
      </div>
      <div className={styles.dropdown_item}>
        <LoginIcon />
        <span>Log In / Sign Up</span>
      </div>
    </div>
  );
}
