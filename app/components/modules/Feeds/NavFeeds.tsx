import styles from './popularNavFeeds.module.css';
import buttonStyles from '@/elements/Button/button.module.css';
import { DropdownArrowIcon, TrendingIcon } from '@/icons/index';
import { Dropdown } from '@/shared/Dropdown';
import PopularFeedsMenu from './FeedsMenu/FeedsMenu';

export function NavFeeds() {
  return (
    <div className={styles.popular_dropdown}>
      <Dropdown
        As='button'
        data-dropdown
        className={buttonStyles.button_element + ' ' + styles.dropdown_button}
        triggerElementContent={
          <>
            <TrendingIcon />
            <p>Popular</p>
            <DropdownArrowIcon className={styles.dropdown_icon} />
          </>
        }
      >
        <div role='menu' className={styles.navFeed_menu}>
          <PopularFeedsMenu />
        </div>
      </Dropdown>
    </div>
  );
}
