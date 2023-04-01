import { saveLS, loadLS } from './lStorage';
import { useState, useEffect } from 'react';

export const useLS = key => {
  const [state, setState] = useState(() => loadLS(key) ?? []);

  useEffect(() => {
    saveLS(key, state);
  }, [key, state]);

  return [state, setState];
};

// [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
