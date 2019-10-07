module.exports = (req, res, next) => {

  const { connectionString, pool: { Pool } } = require('../exports');

  const pool = new Pool({
    connectionString
  });

  const userValueQuery = {
    name: 'Get users stock value from stocks_table',
    text: 'SELECT SUM(price_paid) FROM stocks_table WHERE user_name_fk = $1',
    values: [req.body.user_name]
  };

  pool
    .query(userValueQuery)
    .then(result => res.locals = result.rows[0])
    .then(() => next())
    .catch(error => console.log(error));

};