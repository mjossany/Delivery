const { OK } = require("http-status-codes");
const getUserByEmail = require('../../services/users/getUserByEmail');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userExists = await getUserByEmail({ email, password });
    res.status(OK).json({ userExists });
  } catch (err) {
    next(err);
  }
};