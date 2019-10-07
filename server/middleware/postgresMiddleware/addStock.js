module.exports = (req, res, next) => {

  const { connectionString, pool: { Pool } } = require('../exports');

  const pool = new Pool({
    connectionString
  });

  const addStockQuery = {
    name: 'Add stock to stocks_table',
    text: 'INSERT INTO stocks_table(stock_ticker, price_paid, user_name_fk) VALUES($1, $2, $3)',
    values: [req.body.stock_ticker, req.body.price_paid, req.body.user_name]
  };

  pool
    .query(addStockQuery)
    .then(() => next())
    .catch(error => console.log(error));

};