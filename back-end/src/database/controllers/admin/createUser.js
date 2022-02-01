const { CREATED } = require('http-status-codes');
const createUser = require('../../services/admin/createUser');

module.exports = async (req, res, next) => {
  try {
    const { role: loggedUserRole } = req.user
    const { email, password, name, role } = req.body;
    const response = await createUser({ email, password, name, role, loggedUserRole })
    res.status(CREATED).json(response);
  } catch(err) {
    next(err)
  }
}