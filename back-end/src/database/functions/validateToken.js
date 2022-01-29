const path = require('path');
const { readFileSync } = require('fs');
const jwt = require('jsonwebtoken');

module.exports = (token) => {
  const secret = readFileSync(path.resolve(__dirname, '../../../jwt.evaluation.key'), 'utf-8');
  try {
    const { user } = jwt.verify(token, secret);
    return user;
  } catch (err) {
    return false;
  }
};