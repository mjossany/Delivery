const checkLoginInfos = require('../functions/checkLoginInfos');

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  
  const validInfos = checkLoginInfos(email, password);
  console.log(validInfos);

  if (validInfos) return next(validInfos);

  return next();
};