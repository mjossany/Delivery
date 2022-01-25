const { PASSWORD_MIN_LENGTH, EMAIL_FORMAT } = require("../errors");

const validateEmail = (email) => {
const regexEmail = /^[\w_\-.]+@[a-z]+\.[a-z]+(\.[a-z]{2,4})?$/;
const validEmail = regexEmail.test(email);
if (!validEmail) return EMAIL_FORMAT;
return null;
};

const validatePassword = (password) => {
  if (password.length === 6) return null;
  return PASSWORD_MIN_LENGTH;
}

module.exports = (email, password) => {
  const validEmail = validateEmail(email);
  const validPassword = validatePassword(password);
  if (validEmail || validPassword) return(validEmail || validPassword);
  return null;
};
