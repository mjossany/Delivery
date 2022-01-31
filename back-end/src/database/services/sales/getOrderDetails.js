const { SALE_NOT_FOUND } = require('../../errors');
const { User, Product, Sale } = require('../../models');

module.exports = async (idVenda) => {
  const orderDetails = await Sale.findOne({
    where: { id: idVenda },
    include: [
      { model: User, as: 'customer', attributes: { exclude: ['password'] } },
      { model: User, as: 'seller', attributes: { exclude: ['password'] } },
      { model: Product, as: 'products', attributes: { exclude: ['urlImage'] }, through: { attributes: ['quantity'] } },
    ]
  });

  if (!orderDetails) throw SALE_NOT_FOUND;

  return orderDetails;
}