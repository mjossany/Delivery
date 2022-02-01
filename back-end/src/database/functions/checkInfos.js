const { PASSWORD_MIN_LENGTH, EMAIL_FORMAT, NAME_MAX_LENGTH, REQUIRED_ROLE } = require("../errors");

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

const validateRole = (role) => {
  if (!role) return REQUIRED_ROLE;
  return null;
};

const validateLoginInfos = (email, password) => {
  const validEmail = validateEmail(email);
  const validPassword = validatePassword(password);
  if (validEmail || validPassword) return(validEmail || validPassword);
  return null;
};

const validateRegisterInfos = (email, password, name) => {
  const validEmail = validateEmail(email);
  const validPassword = validatePassword(password);
  const validName = validateName(name);
  if (validEmail || validPassword || validName) return(validEmail || validPassword || validName);
  return null;
};

const validateAdminRegisterInfos = (email, password, name, role) => {
  const validName = validateName(name);
  const validEmail = validateEmail(email);
  const validPassword = validatePassword(password);
  const validRole = validateRole(role);
  if (validEmail || validPassword || validName || validRole) return(validEmail || validPassword || validName || validRole);
  return null;
}

module.exports = {
  validateLoginInfos,
  validateRegisterInfos,
  validateAdminRegisterInfos,
};