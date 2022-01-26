const { PASSWORD_MIN_LENGTH, EMAIL_FORMAT, NAME_MAX_LENGTH } = require("../errors");

const validateEmail = (email) => {
const regexEmail = /^[\w_\-.]+@[a-z]+\.[a-z]+(\.[a-z]{2,4})?$/;
const validEmail = regexEmail.test(email);
if (!validEmail) return EMAIL_FORMAT;
return null;
};

const validatePassword = (password) => {
  if (password.length < 6) return PASSWORD_MIN_LENGTH;
  return null;
};

const validateName = (name) => {
  if (name.length < 12) return NAME_MAX_LENGTH;
  return null;
};

const validateLoginInfos = (email, password) => {
  const validEmail = validateEmail(email);
  console.log(validEmail);
  const validPassword = validatePassword(password);
  console.log(validPassword);
  if (validEmail || validPassword) return(validEmail || validPassword);
  return null;
};

const validateRegisterInfos = (email, password, name) => {
  const validEmail = validateEmail(email);
  const validPassword = validatePassword(password);
  const validName = validateName(name);
  console.log(email, password, name);
  if (validEmail || validPassword || validName) return(validEmail || validPassword || validName);
  return null;
};

module.exports = {
  validateLoginInfos,
  validateRegisterInfos,
};