import { AnimatePresence } from 'framer-motion';
import useToggle from '@/hooks/useToggle';
import styles from './dropdown.module.css';
import { ElementType, useEffect } from 'react';
import { DropdownProps } from './dropdown.types';

const NOOP = () => {};
const defaultElement = 'button';

export function Dropdown<E extends ElementType>({
  As,
  triggerElementContent,
  children,
  nested,
  onOpen = NOOP,
  onClose = NOOP,
  ...other
}: DropdownProps<E>) {
  const [isDropdownOpen, toggleDropdown] = useToggle();

  useEffect(() => {
    isDropdownOpen ? onOpen() : onClose();
  }, [isDropdownOpen, onOpen, onClose]);

  const handleDropdown = (target: Element) => {
    if (!nested && target.getAttribute('data-static')) return;

    toggleDropdown();
  };
  const Tagname = As || defaultElement;
  return (
    <div
      role='button'
      onClick={(e: React.SyntheticEvent<HTMLElement>) => {
        e.target instanceof Element ? handleDropdown(e.target) : null;
      }}
      className={styles.container}
    >
      <Tagname {...other}>{triggerElementContent}</Tagname>
      {isDropdownOpen && !nested && <div className={styles.backdrop} />}

      <AnimatePresence>{isDropdownOpen && children}</AnimatePresence>
    </div>
  );
}
