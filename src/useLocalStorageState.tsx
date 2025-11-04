import { useEffect, useState } from 'react';
import { TMovie } from './App';

export function useLocalStorageState(initialState: unknown, key: string) {
  const [value, setValue] = useState(function () {
    return JSON.parse(localStorage.getItem(key)!) || initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value]
  );

  return [value, setValue];
}
