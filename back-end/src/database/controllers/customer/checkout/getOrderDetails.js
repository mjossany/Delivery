const { OK } = require('http-status-codes');
const getOrderDetails = require('../../../services/sales/getOrderDetails');

module.exports = async (req, res, next) => {
  try {
    const { idVenda } = req.params;
    const orderDetails = await getOrderDetails(idVenda);
    res.status(OK).json({ orderDetails });
  } catch(err) {
    next(err)
  }
};