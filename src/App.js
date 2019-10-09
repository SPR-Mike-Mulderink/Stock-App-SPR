import './App.css';
import reducer, { initialState } from './state/reducer';
import React, { useReducer } from 'react';
import Context from './context';
import Stocks from './components/Stocks';
import NavBar from './components/NavBar';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <br />
        <NavBar />
        <br />
        <Stocks />
      </div>
    </Context.Provider>
  );
}

export default App;
