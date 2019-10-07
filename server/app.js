const { PORT, express, path, bodyParser, stockApi, addUser } = require('./middleware/middleware');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.resolve(__dirname, '../build')));

app.get('/stockApi', stockApi, (req, res) => {
  res.send(res.locals.stocksValueArr);
});

app.post('/addUser', addUser, (req, res) => {
  res.send(`Addded Brah`);
});

app.use('*', (req, res) => {
  res.send(`Catch All`);
});

app.listen(PORT, () => {
  console.log(`App listening on Port: ${PORT}`);
});