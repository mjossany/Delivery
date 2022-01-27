const express = require('express');
const getAllProducts = require('../../services/products/getAllProducts');

const router = express.Router({ mergeParams: true });

router.get('/products', getAllProducts);

module.exports = router;