const { SAME_USER } = require('../../errors');
const { Sale } = require('../../models');
const verifyUserSeller = require('../helpers/verifyUserSeller');

module.exports = async (saleInfos) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = saleInfos;
  const checkSeller = await verifyUserSeller(userId, sellerId);
  if (!checkSeller) throw SAME_USER;
  const sale = await Sale.create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });
  console.log(products, 'trybe');
  products.forEach(async ({ productId: id, quantity }) => {
    await sale.addProducts(id, { through: { quantity }});
  });
  return sale;
};