const { CREATED } = require('http-status-codes');
const createSale = require('../../../services/sales/createSale');

module.exports = async (req, res, next) => {
  try {
    const { id: userId } = req.user
    const saleInfos = { userId, ...req.body };
    console.log(req.body, 'CONTROLLER')
    const { id } = await createSale(saleInfos);
    res.status(CREATED).json({ id });
  } catch (err) {
    next(err);
  }
};