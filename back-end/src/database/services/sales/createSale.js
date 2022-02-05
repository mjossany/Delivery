const { SAME_USER } = require('../../errors');
const { Sale } = require('../../models');
const verifyUserSeller = require('../helpers/verifyUserSeller');

module.exports = async (saleInfos) => {
  const { userId, sellerName, totalPrice, deliveryAddress, deliveryNumber, products } = saleInfos;
  const sellerId = await verifyUserSeller(userId, sellerName);
  if (!sellerId) throw SAME_USER;
  const sale = await Sale.create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });
  products.forEach(async ({ id, quantity }) => {
    await sale.addProducts(id, { through: { quantity }});
  });
  return sale;
};