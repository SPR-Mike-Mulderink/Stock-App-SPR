import React from 'react'

function StockToast({ stockValue, stockTicker }) {

  return (
    <tr>
      <td>{stockTicker}</td>
      <td>{stockValue}</td>
      <td></td>
      <td></td>
    </tr>
  );
}

export default StockToast;