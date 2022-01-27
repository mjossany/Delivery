const { Product } = require('../../models');

module.exports = async () => {
  const products = await Product.findAll();
  return products;
};