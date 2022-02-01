const { USERS_NOT_FOUND } = require('../../errors');
const { User } = require('../../models');
const { Op } = require('sequelize');

module.exports = async () => {
  const users = User.findAll({
    where: { role: { [Op.not]: ['administrator'] } }
  });
  if (!users) throw USERS_NOT_FOUND;
  return users;
}