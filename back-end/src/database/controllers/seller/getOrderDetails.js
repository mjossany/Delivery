const { OK } = require('http-status-codes');
const getOrderDetails = require('../../services/sales/getOrderDetails');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const orderDetails = await getOrderDetails(id);
    res.status(OK).json({ orderDetails });
  } catch(err) {
    next(err)
  }
};