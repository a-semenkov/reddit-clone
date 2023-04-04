import { useEffect, MutableRefObject } from 'react';
import { useLatest } from '@/hooks';

export function useOutsideClick<T extends HTMLElement>(
  elementRef: MutableRefObject<T | null>,
  handler: Function,
  attached: boolean = true
) {
  const latestHandler = useLatest(handler);

  useEffect(() => {
    if (!attached) return;

    function handleClick(e: MouseEvent) {
      if (!elementRef.current) return;

      if (!elementRef.current.contains(e.target as HTMLElement)) {
        latestHandler.current();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [elementRef, latestHandler, attached]);
}
