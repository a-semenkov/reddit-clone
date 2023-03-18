import styles from './popularNavFeeds.module.css';
import { TrendingIcon } from '@/icons/index';
import { Dropdown } from '@/shared/Dropdown';

export function PopularNavFeeds() {
  return (
    <div>
      <Dropdown
        As='button'
        className={styles.button_element}
        triggerElementContent={
          <>
            <TrendingIcon />
            <p>Popular</p>
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
