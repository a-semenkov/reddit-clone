import { useCallback, useRef } from 'react';

export function useCombinedRef(...refs: ReturnType<typeof useRef>[]) {
  const combinedRef = useCallback((element: HTMLElement | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref.current === 'function') {
        ref.current(element);
      } else {
        ref.current = element;
      }
    });
  }, refs);

  return combinedRef;
}
