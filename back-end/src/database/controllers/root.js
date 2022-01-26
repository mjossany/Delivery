const express = require('express');
const loginRouter = require('./login/router');

const root = express.Router({ mergeParams: true });

root.use('/login', loginRouter);

module.exports = root;