const { OK } = require("http-status-codes");
const getAllSellers = require('../../../services/users/getAllSellers');

module.exports = async (_req, res, next) => {
  try {
    const sellers = await getAllSellers();
    res.status(OK).json(sellers);
  } catch(err) {
    next(err);
  };
}