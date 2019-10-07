module.exports = (password) => {

  const { bcrypt, saltRounds } = require('./exports');

  const myPlaintextPassword = password;

  return bcrypt.hashSync(myPlaintextPassword, saltRounds);

};
