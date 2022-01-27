const express = require('express');
const registerUser = require('./registerUser');
const registerValidation = require('../../middlewares/registerValidation');

const router = express.Router({ mergeParams: true });

router.post('/', registerValidation, registerUser);

module.exports = router;