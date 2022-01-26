import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton,] = useState(true);

  function buttonValid() {
    const passwordLength = 6;
    const regexEmail = /\S+@\S+\.\S+/;
    if (password.length >= passwordLength && regexEmail.test(email)) {
      setDisableButton(false);
      return;
    }
    setDisableButton(true);
  }


  return (
    <form>
    <label htmlFor="common_login__input-email">
      Login
      <input
        data-testid="common_login__input-email"
        id="common_login__input-email"
        type="email"
        onChange={ (e) => setEmail(e.target.value) }
      />
    </label>
    <label htmlFor="common_login__input-password">
      Senha
      <input
        data-testid="common_login__input-password"
        id="common_login__input-password"
        type="password"
        onChange={ (e) => setPassword(e.target.value) }
      />
    </label>
      <button
        data-testid="common_login__element-invalid-email"
        type="button"
        disabled={ disableButton }
      >
        LOGIN
      </button>
      <button
        data-testid="common_login__button-register"
        type="button"
      >
        Ainda não tenho conta
      </button>
  </form>
);
}


export default Login;