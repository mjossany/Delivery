const getAllProducts = require('../../../services/products/getAllProducts');
const { OK } = require('http-status-codes');

module.exports = async (_req, res, next) => {
  try {
    const products = await getAllProducts();
    res.status(OK).json(products);
  } catch (err) {
    next(err)
  };
};