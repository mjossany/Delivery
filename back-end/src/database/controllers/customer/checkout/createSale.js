const { CREATED } = require('http-status-codes');
const createSale = require('../../../services/sales/createSale');

module.exports = async (req, res, next) => {
  try {
    const {  } = req.body;
    const saleInfos = await createSale();
    res.status(CREATED).json(saleInfos);
  } catch (err) {
    next(err);
  }
};