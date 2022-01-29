const getAuth = () => {
  const auth = localStorage.getItem('token');
  return auth;
};

export default getAuth;
