const { OK } = require("http-status-codes");

module.exports = async (req, res, next) => {
  try {
    // const { email, password } = req.body;
    // const userExists = await getUserByEmail({ email, password });
    res.status(OK).send('oi');
  } catch (err) {
    next(err);
  }
};