const { User } = require('../../models');
const md5 = require('md5');
const { ALREADY_REGISTERED } = require('../../errors');

module.exports = async ({ email, password: senha, name, role }) => {
  const userExistsEmail = await User.findOne({ where: { email } });
  const userExistsName = await User.findOne({ where: { name } });
  if (userExistsEmail || userExistsName) throw ALREADY_REGISTERED;
  const password = md5(senha);
  const response = User.create({ name, email, password, role });
  return response;
}