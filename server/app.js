const { PORT, express, path, bodyParser, stockApi, addUser, removeUser, addStock, removeStock, userValue, userLogin, cookieParser } = require('./middleware/exports');
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve(__dirname, '../build')));

app.get('/stockApi', stockApi, (req, res) => {
  res.send(res.locals.stocksValueArr);
});

app.get('/userValue', userValue, (req, res) => {
  res.send(res.locals);
});

app.post('/addUser', addUser, (req, res) => {
  res.send(`Added ${req.body.first_name} Brah`);
});

app.post('/addStock', addStock, (req, res) => {
  res.send(`Added ${req.body.stock_ticker} Brah`);
});

app.post('/userLogin', userLogin, (req, res) => {
  res.send(`Brah you are LogedIn --> ${res.locals.logedIn}`);
});

app.delete('/removeUser', removeUser, (req, res) => {
  res.send(`Removed ${req.body.first_name} Brah`);
});

app.delete('/removeStock', removeStock, (req, res) => {
  res.send(`Removed ${req.body.id} Brah`);
});

app.use('*', (req, res) => {
  res.send(`Catch All`);
});

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});