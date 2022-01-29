const express = require('express');
const getAllProducts = require('./products/getAllProducts');
const createSale = require('./checkout/createSale');
const tokenValidation = require('../../middlewares/tokenValidation');

const router = express.Router({ mergeParams: true });

router.get('/products', getAllProducts);
router.post('/checkout', tokenValidation, createSale);

module.exports = router;