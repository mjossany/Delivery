import { useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import api from '../services/api';
import httpErros from '../utils/httpErros';
import getLocalStorage from '../utils/getLocalStorage';

const useUser = () => {
  const lsUser = getLocalStorage();
  const [user, setUser] = useState(lsUser);
  const [errMessage, setErrMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [valid, setValid] = useState(false);
  const [validName, setValidName] = useState(false);

  const handleLogin = async () => {
    try {
      const { data } = await api.post('/login', {
        email, password,
      });
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
    } catch (err) {
      if (err.response) {
        setErrMessage(err.response.data.message);
      } else {
        setErrMessage('Algo deu errado, tente novamente mais tarde.');
      }
    }
  };

  const handleRegister = async () => {
    try {
      const { data } = await api.post('/register', {
        email, password, name,
      });
      console.log(data);
    } catch (err) {
      if (err.response) {
        setErrMessage(err.response.data.message);
      } else {
        setErrMessage('Algo deu errado, tente novamente mais tarde.');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(undefined);
  };

  useEffect(() => {
    if (errMessage) {
      Swal.fire({
        title: 'Usuário inválido!',
        icon: 'warning',
        confirmButtonText: 'Ok',
        html: httpErros.find(({ message }) => message === errMessage),
      });
      setErrMessage('');
    }
  }, [errMessage]);

  const validateData = useCallback(() => {
    const re = /\S+@\S+\.\S+/;
    const SIX = 6;
    switch (true) {
    case !email:
      return setValid(false);
    case !re.test(email):
      return setValid(false);
    case !password:
      return setValid(false);
    case password.length < SIX:
      return setValid(false);
    default:
      return setValid(true);
    }
  }, [email, password]);

  useEffect(() => {
    validateData();
  }, [email, password, validateData]);

  const validateName = useCallback(() => {
    console.log('salve');
    const DOUZE = 12;
    switch (true) {
    case !name:
      return setValidName(false);
    case name.length < DOUZE:
      return setValidName(false);
    default:
      return setValidName(true);
    }
  }, [name]);

  useEffect(() => {
    validateName();
  }, [name, validateName]);

  return {
    user,
    setUser,
    handleLogin,
    errMessage,
    email,
    setEmail,
    password,
    setPassword,
    setName,
    handleRegister,
    valid,
    validName,
    handleLogout,
  };
};

export default useUser;
