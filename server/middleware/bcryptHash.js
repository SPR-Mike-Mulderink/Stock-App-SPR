module.exports = myPlaintextPassword => {

  const { bcrypt, saltRounds } = require('./exports');

  return bcrypt.hash(myPlaintextPassword, saltRounds);

};
