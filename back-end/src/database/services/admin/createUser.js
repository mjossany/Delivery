const { User } = require('../../models');
const md5 = require('md5');
const { PERMISSION_DENIED, ALREADY_REGISTERED } = require('../../errors');

module.exports = async ({ email, password: senha, name, role, loggedUserRole }) => {
  if (loggedUserRole !== 'administrator') throw PERMISSION_DENIED;
  const userExistsEmail = await User.findOne({ where: { email } });
  const userExistsName = await User.findOne({ where: { name } });
  if (userExistsEmail || userExistsName) throw ALREADY_REGISTERED;
  const password = md5(senha);
  const response = User.create({ email, name, password, role });
  return response;
}