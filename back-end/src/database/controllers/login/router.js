const express = require('express');
const loginValidation = require('../../middlewares/loginValidation');
const login = require('../login/login');

const router = express.Router({ mergeParams: true });

router.post('/', loginValidation, login);

module.exports = router;