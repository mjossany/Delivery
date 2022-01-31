import { useCallback, useEffect, useState } from 'react';

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

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
    cart.reduce((t, product) => t + product.price * product.quantity, 0);
  }, [cart]);

  const removeProduct = (product) => {
    setCart(cart.filter((p) => p.id !== product.id));
  };

  useEffect(() => {
    totalPrice();
  }, [cart, totalPrice]);
  return {
    cart,
    setCart,
    total,
    setTotal,
    addToCart,
    removeFromCart,
    removeProduct,
  };
};

export default useCart;
