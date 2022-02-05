import { useCallback, useEffect, useState } from 'react';
// import axios from 'axios';
import api from '../services/api';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sellerId, setSellerId] = useState(2);
  const [sellers, setSellers] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');

  const manualHandleAddToCart = (product, value) => {
    const numValue = +value;
    const productExists = cart.find((p) => p.id === product.id);
    if (productExists && numValue <= 0) {
      return setCart(cart.filter((p) => p.id !== product.id));
    }
    if (productExists) {
      setCart(cart.map(
        (p) => (p.id === product.id ? { ...product, quantity: numValue } : p),
      ));
    } else {
      setCart([...cart, { ...product, quantity: numValue }]);
    }
  };

  const addToCart = (product) => {
    const productExists = cart.find((p) => p.id === product.id);
    if (productExists) {
      setCart(cart.map(
        (p) => (p.id === product.id ? { ...product, quantity: p.quantity + 1 } : p),
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeProduct = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
  };

  const removeFromCart = (product) => {
    const productExists = cart.find((p) => p.id === product.id);
    if (productExists) {
      return productExists.quantity === 1
        ? setCart(cart.filter((p) => p.id !== product.id))
        : setCart(cart.map((p) => (p.id === product.id
          ? { ...product, quantity: p.quantity - 1 }
          : p)));
    }
  };

  const totalPrice = useCallback(() => {
    const cartTotal = cart.reduce(
      (acc, product) => acc + product.price * product.quantity, 0,
    );
    setTotal(cartTotal);
  }, [cart]);

  useEffect(() => {
    totalPrice();
    console.log(cart);
  }, [cart, totalPrice]);

  const fetchSellers = async () => {
    try {
      const { data } = await api.get('/customer/checkout/sellers');
      setSellers([...data]);
    } catch (err) {
      console.log(err);
    }
  };

  // const getAuth = () => {
  //   const auth = JSON.parse(localStorage.getItem('user'));
  //   if (!auth) return '';
  //   return auth.token || {};
  // };

  const postNewSale = async () => {
    try {
      // const authorization = getAuth();
      const { data } = await api.post('/customer/checkout', {
        products: cart.map(({ id, ...product }) => ({ ...product, productId: id })),
        totalPrice: total,
        sellerId,
        deliveryAddress,
        deliveryNumber,
      });
      if (data.id) {
        return data.id;
      }
      return null;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    cart,
    setCart,
    total,
    setTotal,
    addToCart,
    removeFromCart,
    removeProduct,
    postNewSale,
    setSellerId,
    setDeliveryAddress,
    setDeliveryNumber,
    sellerId,
    deliveryAddress,
    deliveryNumber,
    manualHandleAddToCart,
    sellers,
    fetchSellers,
  };
};

export default useCart;
