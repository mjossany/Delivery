const { BAD_REQUEST } = require('http-status-codes').StatusCodes;

const PASSWORD_MIN_LENGTH = {
  status: BAD_REQUEST,
  message: 'O password deve possuir pelo menos 6 caracteres',
};

const EMAIL_FORMAT = {
  status: BAD_REQUEST,
  message: 'O email deve cumprir o padrão <email>@<domínioPrincipal>.<domínioGenérico>',
};

module.exports = {
  PASSWORD_MIN_LENGTH,
  EMAIL_FORMAT,
};