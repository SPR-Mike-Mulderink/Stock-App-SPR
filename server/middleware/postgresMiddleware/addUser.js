module.exports = (req, res, next) => {

  const { connectionString, pool: { Pool } } = require('../exports');

  const pool = new Pool({
    connectionString
  });

  const addUserQuery = {
    name: 'Added user to users_table',
    text: 'INSERT INTO users_table(last_name, first_name, user_name, password) VALUES($1, $2, $3, $4)',
    values: [req.body.last_name, req.body.first_name, req.body.user_name, req.body.password]
  };

  pool
    .query(addUserQuery)
    .then(res => console.log(res))
    .then(() => next())
    .catch(error => console.log(error));

};