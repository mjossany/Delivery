const express = require('express');
const loginRouter = require('./login/router');
const registerRouter = require('./register/router');
const customerRouter = require('./customer/router');
const sellerRouter = require('./seller/router');
const adminRouter = require('./admin/router');

const root = express.Router({ mergeParams: true });

root.use('/login', loginRouter);
root.use('/register', registerRouter);
root.use('/customer', customerRouter);
root.use('/seller', sellerRouter);
root.use('/admin', adminRouter);

module.exports = root;