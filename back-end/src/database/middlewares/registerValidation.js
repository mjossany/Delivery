const { validateRegisterInfos } = require("../functions/checkInfos");

module.exports = (req, _res, next) => {
  const { email, password, name } = req.body;
  const validInfos = validateRegisterInfos(email, password, name);
  if (validInfos) return next(validInfos);
  return next();
};