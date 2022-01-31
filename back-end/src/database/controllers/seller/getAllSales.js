const { OK } = require('http-status-codes');
const getAllSales = require('../../services/sales/getAllSales');

module.exports = async (req, res, next) => {
  try {
    const { id: idVendedor } = req.user;
    const sales = await getAllSales(idVendedor);
    res.status(OK).json(sales);
  } catch(err) {
    next(err)
  }
}