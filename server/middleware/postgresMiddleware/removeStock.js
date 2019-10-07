module.exports = (req, res, next) => {

  const { connectionString, pool: { Pool } } = require('../exports');

  const pool = new Pool({
    connectionString
  });

  const removeStockQuery = {
    name: 'Remove stock from stocks_table',
    text: 'DELETE FROM stocks_table WHERE id = $1',
    values: [req.body.id]
  };

  pool
    .query(removeStockQuery)
    .then(() => next())
    .catch(error => console.log(error));

};