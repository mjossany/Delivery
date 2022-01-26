const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const path = require('path');

module.exports = (userInfos) => {
  const secret = readFileSync(path.resolve(__dirname, '../../../jwt.evaluation.key'), 'utf-8');
  const { password, ...user } = userInfos;
  const jwtConfig = { algorithm: 'HS256' };
  const token = jwt.sign({ user }, secret, jwtConfig);
  return token;
};