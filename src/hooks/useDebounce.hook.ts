import { useState, useEffect } from 'react';

export default function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const debounce = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(debounce);
  }, [value, delay]);

  return debouncedValue;
}
