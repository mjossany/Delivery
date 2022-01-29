const { SAME_USER } = require('../../errors');
const { Sale } = require('../../models');
const verifyUserSeller = require('../helpers/verifyUserSeller');

module.exports = async (saleInfos) => {
  const { userId, sellerName, totalPrice, deliveryAddress, deliveryNumber, products } = saleInfos;
  const sameUsers = await verifyUserSeller(userId, sellerName);
  if (sameUsers) throw SAME_USER;
  const saleReturn = await Sale.create({ userId, sellerId, totalPrice, deliveryAddress, deliveryNumber });
  return saleReturn;
};