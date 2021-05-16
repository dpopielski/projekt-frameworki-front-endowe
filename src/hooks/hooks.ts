import { MutableRefObject, useEffect } from 'react';

export const useOnClickOutside = (ref: MutableRefObject<HTMLDivElement | undefined>, handler: (event: number) => void) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  },
  [ref, handler],
  );
};