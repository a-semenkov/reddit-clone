import { AnimatePresence } from 'framer-motion';
import useToggle from '@/hooks/useToggle';
import styles from './dropdown.module.css';
import { useEffect, useRef } from 'react';
import { IDropdownProps } from './dropdown.types';

const NOOP = () => {};

export function Dropdown({
  triggerElement,
  children,
  cls,
  nested,
  onOpen = NOOP,
  onClose = NOOP,
  ...other
}: IDropdownProps) {
  const [isDropdownOpen, toggleDropdown] = useToggle();

  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose();
  }, [isDropdownOpen]);

  const handleDropdown = (target: HTMLElement) => {
    if (!nested && target.getAttribute('data-static')) return;

    toggleDropdown();
  };

  return (
    <div
      className={cls}
      onClick={(e: React.SyntheticEvent<HTMLElement>) =>
        e.target instanceof HTMLElement ? handleDropdown(e.target) : null
      }
      {...other}
    >
      {triggerElement}
      <AnimatePresence>
        {isDropdownOpen && (
          <>
            {!nested && <div className={styles.backdrop} />}
            {children}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
