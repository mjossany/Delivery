const { BAD_REQUEST, NOT_FOUND } = require('http-status-codes').StatusCodes;

const PASSWORD_MIN_LENGTH = {
  status: BAD_REQUEST,
  message: 'O password deve possuir pelo menos 6 caracteres',
};

const EMAIL_FORMAT = {
  status: BAD_REQUEST,
  message: 'O email deve cumprir o padrão <email>@<domínioPrincipal>.<domínioGenérico>',
};

const UNREGISTERED_USER = {
  status: NOT_FOUND,
  message: 'Email ou password inválidos'
};

module.exports = {
  PASSWORD_MIN_LENGTH,
  EMAIL_FORMAT,
  UNREGISTERED_USER,
};