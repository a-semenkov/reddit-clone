import { AdvertiseIcon, HelpIcon, LoginIcon, MoreIcon } from '@/icons/index';
import { Dropdown } from '@/shared/Dropdown';
import GenericList from '@/shared/GenericList/GenericList';

import styles from './userMenu.module.css';

export default function UserMenuNoAuth() {
  // TODO: управление компонентом на основе состояния (logged in или нет) из родительского компонента
  return (
    <div className={styles.dropdown_menu}>
      <div className={styles.dropdown_item}>
        <HelpIcon />
        <span>Help Center</span>
      </div>
      <div className={styles.dropdown_item}>
        <Dropdown
          triggerElement={
            <>
              <MoreIcon />
              <span>More</span>
              <div data-static className={styles.top}></div>
            </>
          }
        >
          <div>Reddit iOS</div>
          <div>Reddit Android</div>
          <div>Reddit Blog</div>
        </Dropdown>
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
