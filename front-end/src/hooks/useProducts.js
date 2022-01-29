import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

const useProducts = (user) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = useCallback(async () => {
    console.log(user);
    if (!user) return;
    const { data } = await api.get(`${user.role}/products`);
    setProducts(data);
    console.log(data);
  }, [user]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
    setProducts,
    setCart,
    cart,
  };
};

export default useProducts;
