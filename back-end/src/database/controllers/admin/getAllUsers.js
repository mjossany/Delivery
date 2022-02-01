const { OK } = require('http-status-codes');
const { User } = require('../../models');
const getAllUsers = require('../../services/users/getAllUsers');

module.exports = async (_req, res, next) => {
  try {
    const users = await getAllUsers();
    res.status(OK).json(users);
  } catch(err) {
    next(err)
  }
}