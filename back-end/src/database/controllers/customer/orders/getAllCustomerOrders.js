const { OK } = require('http-status-codes/build/cjs/legacy');
const getAllCustomerOrders = require('../../../services/sales/getAllCustomerOrders');

module.exports = async (req, res, next) => {
  try {
    const { id: customerId } = req.body
    const clientOrders = await getAllCustomerOrders(customerId);
    res.status(OK).json(clientOrders);
  } catch (err) {
    next(err)
  }
}