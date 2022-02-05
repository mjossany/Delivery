import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';

const Signup = () => {
  const { setName, handleRegister, handleLogin,
    setEmail, setPassword, valid, validName } = useContext(UserContext);

  const navigate = useNavigate();

  const handleRegisterAndNavigate = async () => {
    try {
      await handleRegister();
      await handleLogin();
      navigate('/customer/products');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            data-testid="common_register__input-name"
            onChange={ (e) => setName(e.target.value) }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            name="email"
            data-testid="common_register__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>

        <label htmlFor="password">
          <span>Senha</span>
          <input
            type="password"
            name="password"
            data-testid="common_register__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        {console.log(valid, validName)}
        <button
          type="button"
          data-testid="common_register__button-register"
          onClick={ () => handleRegisterAndNavigate() }
          disabled={ !valid || !validName }
        >
          Cadastrar
        </button>
        <span
          data-testid="common_register__element-invalid_register"
        />
      </div>
    </div>
  );
};

export default Signup;
