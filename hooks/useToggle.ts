import { useState } from 'react';

export function useToggle() {
  const [status, setStatus] = useState<boolean>(false);
  const toggleStatus = (bool: boolean | undefined = undefined): void => {
    if (typeof bool === 'boolean') {
      setStatus(bool);
      return;
    }
    setStatus((prevStatus) => !prevStatus);
  };

  return [status, toggleStatus] as const;
}
