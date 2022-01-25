const express = require('express');
const loginValidation = require('../../middlewares/loginValidation');

const router = express.Router({ mergeParams: true });

router.post('/', loginValidation);

module.exports = router;