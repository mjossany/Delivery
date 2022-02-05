const { User } = require('../../models');

module.exports = async (userId, sellerId) => {
  const { id: userIdentification} = await User.findOne({ where: { id: userId } });
  const { id: sellerIdentification } = await User.findOne({ where: { id: sellerId } });
  return userIdentification === sellerIdentification ? false : sellerIdentification;
};