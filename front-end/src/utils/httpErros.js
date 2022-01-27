const httpErros = [
  {
    message: 'User already registered',
    comp: `<b data-testid="common_register__element-invalid_register" >
    User already exists</b>`,
  },
  {
    message: 'Email ou password inválidos',
    comp: `<b data-testid="common_login__element-invalid-email">
    Email ou password inválidos</b>`,
  },
];

export default httpErros;
