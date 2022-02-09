const { SALE_NOT_FOUND } = require('../../errors');
const { Sale } = require('../../models');

module.exports = async (customerId) => {
  const sales = await Sale.findAll({
    where: { userId: customerId },
  });
  if (!sales.length) throw SALE_NOT_FOUND;
  return sales;
}