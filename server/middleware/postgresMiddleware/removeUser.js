module.exports = (req, res, next) => {

  const { connectionString, pool: { Pool } } = require('../exports');

  const pool = new Pool({
    connectionString
  });

  const removeUserQuery = {
    name: 'Remove user from users_table',
    text: 'DELETE FROM users_table WHERE user_name = $1',
    values: [req.body.user_name]
  };

  pool
    .query(removeUserQuery)
    .then(() => next())
    .catch(error => console.log(error));

};