const { SALE_NOT_FOUND } = require('../../errors');
const { Sale } = require('../../models');

module.exports = async (idVendedor) => {
  const sales = await Sale.findAll({
    where: { sellerId: idVendedor },
    attributes: { exclude: ['user_id', 'seller_id'] } 
  });

  if (!sales) throw SALE_NOT_FOUND;

  return sales;
}