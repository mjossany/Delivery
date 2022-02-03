const { User } = require('../../models');

module.exports = async (userId, sellerName) => {
  const { id: userIdentification} = await User.findOne({ where: { id: userId } });
  const { id: sellerIdentification } = await User.findOne({ where: { name: sellerName } });
  return userIdentification === sellerIdentification ? false : sellerIdentification;
};