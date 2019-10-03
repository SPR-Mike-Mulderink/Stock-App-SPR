import express from 'express';
import bodyParser from 'body-parser';
import middleware from './middleware/middleware'
import path from 'path'
const app = express();
const PORT = 8080;

app.use(bodyParser());
app.use('/', express.static(path.resolve(__dirname, '../build')));

app.get('/ES6', (req, res) => {
  res.send(`Stock app is talking with ES6`);
});

app.get('/stockApi', middleware.stockApi, (req, res) => {
  res.send(res.locals.data);
});

app.use('*', (req, res) => {
  res.send(`Catch All`);
});

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});