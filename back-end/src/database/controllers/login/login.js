const { OK } = require("http-status-codes");
const userLogin = require('../../services/users/userLogin');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await userLogin({ email, password });
    res.status(OK).json(token);
  } catch (err) {
    next(err);
  }
};