import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';

function Login() {
  const { handleLogin,
    email, password, setEmail, setPassword, valid } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <form>
      <label htmlFor="common_login__input-email">
        Login
        <input
          data-testid="common_login__input-email"
          id="common_login__input-email"
          type="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </label>
      <label htmlFor="common_login__input-password">
        Senha
        <input
          data-testid="common_login__input-password"
          id="common_login__input-password"
          type="text"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
      </label>
      <button
        required
        data-testid="common_login__element-invalid-email"
        type="button"
        onClick={ () => handleLogin() }
        disabled={ !valid }

      >
        LOGIN
      </button>
      <button
        required
        data-testid="common_login__button-register"
        type="button"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </button>
    </form>
  );
}

export default Login;
