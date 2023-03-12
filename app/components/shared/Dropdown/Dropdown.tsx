import { AnimatePresence } from 'framer-motion';
import useToggle from '@/hooks/useToggle';
import styles from './dropdown.module.css';
import { useEffect, useRef } from 'react';

interface IDropdownProps {
  triggerElement: React.ReactNode;
  children: React.ReactNode;
  cls?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  triggerElement,
  children,
  cls,
  onOpen = NOOP,
  onClose = NOOP,
  ...other
}: IDropdownProps) {
  const triggerRef = useRef(null);
  // ref={triggerRef}
  const [isDropdownOpen, toggleDropdown] = useToggle();

  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose();
  }, [isDropdownOpen]);

  const handleDropdown = (target: Element, originalElement) => {
    // console.log(target === originalElement);
    // console.log(triggerRef.current);

    // console.log(originalElement);
    // console.log(target);
    // console.log(target.closest('[data-static]'));

    // TODO: разобраться с многоуровневыми меню

    if (target.getAttribute('data-static')) {
      return;
    }

    toggleDropdown();
  };

  return (
    <div
      ref={triggerRef}
      className={styles.parent}
      data-parent
      onClick={(e: React.SyntheticEvent<HTMLElement>) =>
        handleDropdown(e.target, e.currentTarget)
      }
      {...other}
    >
      {triggerElement}
      <AnimatePresence>
        {isDropdownOpen && (
          <>
            <div className={styles.backdrop} />
            {children}
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
