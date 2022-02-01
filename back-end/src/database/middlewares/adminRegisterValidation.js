const { validateAdminRegisterInfos } = require("../functions/checkInfos");

module.exports = (req, _res, next) => {
  const { email, password, name, role } = req.body;
  const validInfos = validateAdminRegisterInfos(email, password, name, role);
  if (validInfos) return next(validInfos);
  return next();
}