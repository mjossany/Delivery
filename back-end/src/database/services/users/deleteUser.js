const { PERMISSION_DENIED, USERS_NOT_FOUND } = require('../../errors');
const { User } = require('../../models');

module.exports = async ({ id, loggedUserRole }) => {
  if (loggedUserRole !== 'administrator') throw PERMISSION_DENIED;
  const deletedUser = await User.destroy({
    where: { id }
  });
  if (!deletedUser) throw USERS_NOT_FOUND;
  return deletedUser;
}