import { AnimatePresence } from 'framer-motion';
import { useToggle, useCombinedRef, useOutsideClick } from '@/hooks';

import styles from './dropdown.module.css';
import { useCallback, useEffect, useRef } from 'react';
import { DropdownButtonProps } from './dropdown.types';

const NOOP = () => {};

export function Dropdown({
  buttonContent,
  children,
  nested,
  onOpen = NOOP,
  onClose = NOOP,
  ...other
}: DropdownButtonProps) {
  const [isDropdownOpen, toggleDropdown] = useToggle();

  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose();
  }, [isDropdownOpen, onOpen, onClose]);
  const dropdownMenuRef = useRef<HTMLElement | null>(null);

  const handleDropdown = useCallback(() => toggleDropdown(), [toggleDropdown]);

  const handleRef = (element: HTMLElement | null) => {
    if (!element) return;
    dropdownMenuRef.current = element;
  };

  useOutsideClick(dropdownMenuRef, handleDropdown, isDropdownOpen);

  const buttonProps = {
    ...other,
    className: `${styles.dropdown_trigger_btn} ${
      'className' in other ? other.className || '' : ''
    }`,
  };

  return (
    <>
      <button
        type='button'
        aria-controls={isDropdownOpen ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={isDropdownOpen ? 'true' : undefined}
        onClick={handleDropdown}
        {...buttonProps}
      >
        {buttonContent}
      </button>

      <AnimatePresence>
        {isDropdownOpen &&
          children({
            toggleDropdownMenu: handleDropdown,
            ref: handleRef,
          })}
      </AnimatePresence>
    </>
  );
}
