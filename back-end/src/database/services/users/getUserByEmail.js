const { UNREGISTERED_USER } = require('../../errors');
const { User } = require('../../models');

module.exports = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if(!user) throw UNREGISTERED_USER;

  return user;
};