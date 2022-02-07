const getLocalStorage = () => {
  const ls = localStorage.getItem('user');
  return JSON.parse(ls);
};

export default getLocalStorage;
