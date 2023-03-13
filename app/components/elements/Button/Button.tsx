import styles from './button.module.css';
import { IButton } from './button.types';

export function Button({
  children,
  primary,
  onClick = () => {},
  classes,
}: IButton) {
  const elementClasses = `${styles.button_element} ${
    primary ? styles.primary : styles.secondary
  }${classes ? ` ${classes.join('')}` : ''}`;

  return (
    <button type='button' onClick={() => onClick()} className={elementClasses}>
      {children}
    </button>
  );
}
