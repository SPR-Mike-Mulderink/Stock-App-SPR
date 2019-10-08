import { useEffect, useState } from 'react';

export const useFetch = (url, initialValue) => {

  const [result, setResult] = useState(initialValue);

  const data = {
    stocksArr: ["STZ", "MSFT", "BA", "SKYW"]
  };

  useEffect(() => {
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
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
