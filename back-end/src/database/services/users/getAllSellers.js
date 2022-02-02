const { User } = require('../../models');
const { USERS_NOT_FOUND } = require("../../errors");

module.exports = async () => {
  const sellers = await User.findAll({
    where: { role: 'seller' },
    attributes: { exclude: ['password', 'role', 'email'] }
  });
  if (!sellers) throw USERS_NOT_FOUND;
  return sellers;
}