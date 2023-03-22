import { AdvertiseIcon, HelpIcon, LoginIcon, MoreIcon } from '@/icons/index';
// import { Dropdown } from '@/shared/Dropdown';
import GenericList from '@/shared/GenericList/GenericList';

import styles from './userMenu.module.css';

export default function UserMenuNoAuth() {
  // TODO: управление компонентом на основе состояния (logged in или нет) из родительского компонента
  return (
    <ul className={styles.dropdown_menu}>
      <li className={styles.dropdown_item}>
        <HelpIcon />
        <span>Help Center</span>
      </li>
      {/* <li className={styles.dropdown_item}> */}
      {/* <Dropdown
        As='li'
        nested
        className={styles.dropdown_item}
        // className={styles.nested_dropdown_item}
        triggerElementContent={
          <div className={styles.nested_header}>
            <MoreIcon />
            <span>More</span>
            <div data-static className={styles.top}></div>
          </div>
        }
      >
        <li key='1' className={styles.dropdown_item}>
          Reddit iOS
        </li>
        <li key='2' className={styles.dropdown_item}>
          Reddit Android
        </li>
        <li key='3' className={styles.dropdown_item}>
          Reddit Blog
        </li>
      </Dropdown> */}
      <li className={styles.dropdown_item}>
        <AdvertiseIcon />
        <span>Advertise on Reddit</span>
      </li>
      <li className={styles.dropdown_item}>
        <LoginIcon />
        <span>Log In / Sign Up</span>
      </li>
    </ul>
  );
}
