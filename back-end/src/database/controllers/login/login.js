const { OK } = require("http-status-codes");
const getUserByEmail = require('../../services/users/getUserByEmail');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userData = await getUserByEmail({ email, password });
    res.status(OK).json(userData);
  } catch (err) {
    next(err);
  }
};