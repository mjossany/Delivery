const express = require('express');
const loginRouter = require('./login/router');
const registerRouter = require('./register/router');

const root = express.Router({ mergeParams: true });

root.use('/login', loginRouter);
root.use('/register', registerRouter);
root.use('/customer', customerRouter)

module.exports = root;