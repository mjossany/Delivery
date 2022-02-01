const { BAD_REQUEST, NOT_FOUND, CONFLICT, UNAUTHORIZED } = require('http-status-codes').StatusCodes;

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

const NAME_MAX_LENGTH = {
  status: BAD_REQUEST,
  message: 'O name deve possuir no máximo 11 caracteres',
};

const ALREADY_REGISTERED = {
  status: CONFLICT,
  message: 'User already registered',
};

const SAME_USER = {
  staus: CONFLICT,
  message: 'Customer and Seller are the same. Impossible to make the order.',
};

const TOKEN_NOT_FOUND = {
  status: UNAUTHORIZED,
  message: 'Token not found',
};

const INVALID_TOKEN = {
  status: UNAUTHORIZED,
  message: 'Expired or invalid token',
};

const SALE_NOT_FOUND = {
  status: NOT_FOUND,
  message: 'Sale not found',
};

const REQUIRED_ROLE = {
  status: BAD_REQUEST,
  message: 'Role field must not be empty'
};

const PERMISSION_DENIED = {
  status: BAD_REQUEST,
  message: 'You must be an administrator to execute this action'
};

const USERS_NOT_FOUND = {
  status: NOT_FOUND,
  message: 'User not found'
}

module.exports = {
  PASSWORD_MIN_LENGTH,
  EMAIL_FORMAT,
  UNREGISTERED_USER,
  NAME_MAX_LENGTH,
  ALREADY_REGISTERED,
  SAME_USER,
  TOKEN_NOT_FOUND,
  INVALID_TOKEN,
  SALE_NOT_FOUND,
  REQUIRED_ROLE,
  PERMISSION_DENIED,
  USERS_NOT_FOUND,
};