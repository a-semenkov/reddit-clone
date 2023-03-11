'use client';

import Button from '../../elements/Button';
import styles from './UserBlock.module.css';

import Image from 'next/image';
import { Dropdown } from '@/shared/Dropdown';
import GenericList from '../../shared/GenericList/GenericList';
import UserMenuNoAuth from '../UserMenu/UserMenuNoAuth';

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
            <Image
              priority
              src='/svg/user.svg'
              height={20}
              width={20}
              alt='User menu'
            />
            <Image
              className={styles.dropdown_arrow}
              priority
              src='/svg/dropdown-arrow.svg'
              height={20}
              width={20}
              alt='User menu'
            />
          </Button>
        }
      >
        <UserMenuNoAuth />
      </Dropdown>
    </div>
  );
}
