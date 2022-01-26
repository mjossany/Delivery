const { OK } = require("http-status-codes");
const getUserByEmail = require('../../services/users/getUserByEmail');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await getUserByEmail({ email, password });
    res.status(OK).json(token);
  } catch (err) {
    next(err);
  }
};