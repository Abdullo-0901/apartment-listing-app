import { useCallback, useRef } from "react";

export function useDebounce<T extends unknown[]>(
  callback: (...args: T) => void,
  delay = 500,
) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(
    (...args: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => callback(...args), delay);
    },
    [callback, delay],
  );
}
