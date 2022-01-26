const { CREATED } = require("http-status-codes");
const createUser = require('../../services/users/createUser');

module.exports = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const response = await createUser({ email, password, name});
    res.status(CREATED).json(response);
  } catch(err) {
    next(err)
  }
};