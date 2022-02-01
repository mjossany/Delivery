const express = require('express');
const adminRegisterValidation = require('../../middlewares/adminRegisterValidation');
const tokenValidation = require('../../middlewares/tokenValidation');
const createUser = require('../admin/createUser');

const router = express.Router({ mergeParams: true });

router.post('/manage', tokenValidation, adminRegisterValidation, createUser);

module.exports = router;