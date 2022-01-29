const { User } = require('../../models');

module.exports = async (userId, sellerName) => {
  const { id: userIdentification } = await User.findByPk(userId);
  const { id: sellerIdentification } = await User.findOne({ where: { name: sellerName }});
  return userIdentification === sellerIdentification ? 1 : null;
};