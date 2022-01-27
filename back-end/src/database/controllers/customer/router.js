const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/products', getAllProducts);

module.exports = router;