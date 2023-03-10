'use client';

import Button from '../../elements/Button';
import styles from './UserBlock.module.css';

import Image from 'next/image';
import Dropdown from '../../shared/Dropdown/Dropdown';
import GenericList from '../../shared/GenericList/GenericList';

const NOOP = () => {};
export default function UserBlock() {
  return (
    <div className={styles.menu}>
      <Button onClick={NOOP}>
        <Image
          priority
          src='/svg/qr.svg'
          height={20}
          width={20}
          alt='Get our app QR code'
        />
        <span>Get App</span>
      </Button>
      <Button primary onClick={NOOP}>
        Log in
      </Button>
      <Dropdown
        triggerElement={
          <Button>
            {' '}
            <Image
              priority
              src='/svg/user.svg'
              height={20}
              width={20}
              alt='User menu'
            />
          </Button>
        }
      >
        {/* <GenericList  /> */}
      </Dropdown>
    </div>
  );
}
