const express = require('express');
const getAllSales = require('./getAllSales');
const getOrderDetails = require('./getOrderDetails');
const tokenValidation = require('../../middlewares/tokenValidation');

const router = express.Router({ mergeParams: true });

router.get('/orders', tokenValidation, getAllSales);
router.get('/orders/:id', getOrderDetails);

module.exports = router;