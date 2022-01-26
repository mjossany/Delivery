const { UNREGISTERED_USER } = require('../../errors');
const { User } = require('../../models');
const md5 = require('md5');
const generateToken = require('../../helpers/generateToken');

module.exports = async ({ email, password: senha }) => {
  const password = md5(senha);
  const user = await User.findOne({ where: { email, password } });
  if(!user) throw UNREGISTERED_USER;
  return generateToken(user);
};