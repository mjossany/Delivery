const express = require('express');
const adminRegisterValidation = require('../../middlewares/adminRegisterValidation');
const tokenValidation = require('../../middlewares/tokenValidation');
const createUser = require('./createUser');
const getAllUsers = require('./getAllUsers');

const router = express.Router({ mergeParams: true });

router.get('/manage', tokenValidation, getAllUsers);
router.post('/manage', tokenValidation, adminRegisterValidation, createUser);

module.exports = router;