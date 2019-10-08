module.exports = (myPlaintextPassword, hash) => {

  const { bcrypt } = require('./exports');

  return bcrypt.compare(myPlaintextPassword, hash);

};