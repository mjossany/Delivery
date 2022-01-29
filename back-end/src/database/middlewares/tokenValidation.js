const { TOKEN_NOT_FOUND, INVALID_TOKEN } = require("../errors");
const validateToken = require('../functions/validateToken');

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) return next(TOKEN_NOT_FOUND);
  const valideToken = validateToken(token);
  if (!valideToken) return next(INVALID_TOKEN);
  const { dataValues } = valideToken;
  req.user = dataValues;
  return next();
}