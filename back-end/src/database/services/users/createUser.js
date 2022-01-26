const { User } = require('../../models');
const md5 = require('md5');

module.exports = async ({ email, password: senha, name }) => {
  const password = md5(senha);
  const response = User.create({ name, email, password });
  return response;
}