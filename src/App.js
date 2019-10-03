import React from 'react';
import './App.css';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <h1>Stock App</h1>
        <Card bg="success" text="white" style={{ width: '18rem' }}>
          <Card.Header>Stock Name</Card.Header>
          <Card.Body>
            <Card.Title>$$$ Stock Price $$$</Card.Title>
            <Card.Text>
              Information about the stock!
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  );
}

export default App;
