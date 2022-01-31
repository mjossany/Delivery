const express = require('express');
const getAllSales = require('./getAllSales');
const tokenValidation = require('../../middlewares/tokenValidation');

const router = express.Router({ mergeParams: true });

router.get('/orders', tokenValidation, getAllSales);

module.exports = router;