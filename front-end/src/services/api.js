import axios from 'axios';

const API_URL = 'http://localhost:3001/';

const getAuth = () => {
  const token = localStorage.getItem('token');
  return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
};

const api = axios.create({
  baseURL: API_URL,
});

api.defaults.headers = {
  Authorization: `Bearer ${getAuth().token}`,
};

api.interceptors.request.use((config) => {
  const { token } = getAuth();
  const axiosConfig = config;
  if (token) {
    axiosConfig.headers.Authorization = `Bearer ${token}`;
  }
  return axiosConfig;
});

export default api;
