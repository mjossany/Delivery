const express = require('express');
const getAllProducts = require('./products/getAllProducts');
const createSale = require('./checkout/createSale');

const router = express.Router({ mergeParams: true });

router.get('/products', getAllProducts);
router.post('/checkout', createSale);

module.exports = router;