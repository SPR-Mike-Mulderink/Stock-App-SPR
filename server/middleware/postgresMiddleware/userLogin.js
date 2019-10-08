module.exports = (req, res, next) => {

  const { connectionString, bcryptCompare, pool: { Pool } } = require('../exports');

  const pool = new Pool({
    connectionString
  });

  const getUserQuery = {
    name: 'Get user hash to users_table',
    text: 'SELECT password FROM users_table WHERE user_name = $1',
    values: [req.body.user_name]
  };

  pool
    .query(getUserQuery)
    .then(async hash => await bcryptCompare(req.body.password, hash.rows[0].password))
    .then(match => match ? res.locals.logedIn = true : res.locals.logedIn = false)
    .then(() => next())
    .catch(error => console.log(error));

};