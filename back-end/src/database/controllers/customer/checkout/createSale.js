const { CREATED } = require('http-status-codes');
const createSale = require('../../../services/sales/createSale');

module.exports = async (req, res, next) => {
  try {
    const { id: userId } = req.user
    const saleInfos = { userId, ...req.body };
    const saleDetails = await createSale(saleInfos);
    res.status(CREATED).json(saleDetails);
  } catch (err) {
    next(err);
  }
};