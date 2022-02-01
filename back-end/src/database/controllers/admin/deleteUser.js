const { OK } = require('http-status-codes');
const deleteUser = require('../../services/users/deleteUser')

module.exports = async (req, res, next) => {
  try {
    const { id } = req.body;
    const { role: loggedUserRole } = req.user; 
    const deletedUser = await deleteUser({ id, loggedUserRole });
    res.status(OK).json(deletedUser);
  } catch(err) {
    next(err)
  }
}