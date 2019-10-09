import { useEffect, useState, useContext } from 'react';
import Context from './context';

export const useFetch = (url, initialValue) => {

  const [result, setResult] = useState(initialValue);

  const data = {
    stocksArr: ["STZ", "MSFT", "BA", "SKYW"]
  };

  useEffect(() => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => setResult(json))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;

};

export const useAppContext = () => {

  return useContext(Context);

};