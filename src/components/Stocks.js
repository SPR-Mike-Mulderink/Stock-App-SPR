import React, { useEffect, useReducer } from 'react';
import StockToast from './StockToast';
import Table from 'react-bootstrap/Table';
import reducer, { initialState } from '../state/reducer';
import { useAppContext } from '../hooks';
import { stockData } from '../state/actions';
import { STOCK_DATA } from '../state/types';

function Stocks() {

  // const stockPrices = useFetch('http://localhost:8080/stockApi', []);

  // Uncomment Above ^^^ to run fetch. API has a limit.
  const stockPrices = [{ stock: "Commented Out Above", value: "N/A" }]

  const[state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => dispatch(), []);


  return (
    <div className='Stocks'>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Stock</th>
            <th>Value</th>
            <th>N/A</th>
            <th>N/A</th>
          </tr>
        </thead>
        <tbody>
          {
            stockPrices.map(stockTicker => {
              const { stock, value } = stockTicker;
              console.log()
              return (
                <StockToast stockTicker={stock} stockValue={value} />
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Stocks;