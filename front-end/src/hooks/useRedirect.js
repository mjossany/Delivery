import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';

const useRedirect = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) return null;
    navigate('/customer/products');
  }, [user, navigate]);
};

export default useRedirect;
