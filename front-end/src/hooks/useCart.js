import { useCallback, useEffect, useState } from 'react';
import api from '../services/api';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [sellerName, setSellerName] = useState('Fulana Pereira');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');

  const addToCart = (product) => {
    const productExists = cart.find((p) => p.id === product.id);
    if (productExists) {
      setCart(cart.map(
        (p) => (p.id === product.id ? { ...product, quantity: p.quantity + 1 } : p),
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log(cart);
  };

  const removeFromCart = (product) => {
    const productExists = cart.find((p) => p.id === product.id);
    if (productExists && productExists.quantity > 0) {
      setCart(cart.map(
        (p) => (p.id === product.id ? { ...product, quantity: p.quantity - 1 } : p),
      ));
    } else {
      setCart(cart.filter((p) => p.id !== product.id));
    }
    console.log(cart);
  };

  const totalPrice = useCallback(() => {
    const cartTotal = cart.reduce(
      (acc, product) => acc + product.price * product.quantity, 0,
    );
    setTotal(cartTotal);
  }, [cart]);

  const removeProduct = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
  };

  useEffect(() => {
    totalPrice();
  }, [cart, totalPrice]);

  const postNewSale = async () => {
    try {
      const { data } = await api.post('/customer/checkout', {
        products: cart,
        totalPrice: total,
        sellerName,
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
    setSellerName,
    setDeliveryAddress,
    setDeliveryNumber,
    sellerName,
    deliveryAddress,
    deliveryNumber,
  };
};

export default useCart;
