const express = require('express');
const bodyParser = require('body-parser');
const middleware = require('./middleware/middleware');
const path = require('path')
const app = express();
const PORT = 8080;

app.use(bodyParser());
app.use('/', express.static(path.resolve(__dirname, '../build')));

app.get('/stockApi', middleware.stockApi, (req, res) => {
  res.send(res.locals.stocksValueArr);
});

app.use('*', (req, res) => {
  res.send(`Catch All`);
});

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});