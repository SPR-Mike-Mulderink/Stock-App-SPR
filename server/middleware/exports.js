exports.express = require('express');
exports.path = require('path');
exports.bodyParser = require('body-parser');
exports.stockApi = require('./stockApi');
exports.fetch = require('node-fetch');
exports.pool = require('pg');
exports.bcrypt = require('bcrypt');
exports.cookieParser = require('cookie-parser');
exports.cors = require('cors');
exports.addUser = require('./postgresMiddleware/addUser');
exports.removeUser = require('./postgresMiddleware/removeUser');
exports.addStock = require('./postgresMiddleware/addStock');
exports.removeStock = require('./postgresMiddleware/removeStock');
exports.userValue = require('./postgresMiddleware/userValue');
exports.bcryptHash = require('./bcryptHash');
exports.bcryptCompare = require('./bcryptCompare');
exports.userLogin = require('./postgresMiddleware/userLogin');
exports.PORT = 8080;
exports.API_KEY = `PXZD0QBQQZTN4V5U`;
exports.saltRounds = 10;
exports.connectionString = `postgres://jgheotje:OUAmmMlvHPqPxrbUOCz3uiUbnX22dpHd@salt.db.elephantsql.com:5432/jgheotje`;
