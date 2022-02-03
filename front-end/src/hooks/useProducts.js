import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

const useProducts = (user) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = useCallback(async () => {
    if (!user) return;
    const { data } = await api.get('customer/products');
    setProducts(data);
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
