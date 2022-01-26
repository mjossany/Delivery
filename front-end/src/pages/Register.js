import React from 'react';

function Signup() {
  return (
    <div>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            data-testid="common_register__input-name"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            data-testid="common_register__input-email"
          />
        </label>

        <label htmlFor="password">
          <span>Senha</span>
          <input
            type="password"
            name="password"
            data-testid="common_register__input-password"
          />
        </label>

        <button
          type="button"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
        <span
          data-testid="common_register__element-invalid_register"
        >
        </span>
      </div>
    </div>
  );
}

export default Signup;