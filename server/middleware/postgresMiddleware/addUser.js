module.exports = async (req, res, next) => {

  const { connectionString, bcryptHash, pool: { Pool } } = require('../exports');

  const pool = new Pool({
    connectionString
  });

  const hash = await bcryptHash(req.body.password);

  const addUserQuery = {
    name: 'Added user to users_table',
    text: 'INSERT INTO users_table(last_name, first_name, user_name, password) VALUES($1, $2, $3, $4)',
    values: [req.body.last_name, req.body.first_name, req.body.user_name, hash]
  };

  pool
    .query(addUserQuery)
    .then(() => res.cookie(req.body.user_name, hash))
    .then(() => next())
    .catch(error => console.log(error));

};