import styles from './popularNavFeeds.module.css';
import buttonStyles from '@/elements/Button/button.module.css';
import { DropdownArrowIcon, TrendingIcon } from '@/icons/index';
import { Dropdown } from '@/shared/Dropdown';

export function PopularNavFeeds() {
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
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </Dropdown>
    </div>
  );
}
