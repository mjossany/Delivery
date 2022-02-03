import React, { createContext } from 'react';
import { PropTypes } from 'prop-types';
import useCart from '../hooks/useCart';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
  const { addToCart, cart, setCart,
    setTotal, total,
    removeFromCart,
    removeProduct,
    postNewSale,
    setDeliveryAddress,
    setDeliveryNumber,
    setSellerName,
    sellerName,
    deliveryAddress,
    deliveryNumber,
    manualHandleAddToCart,
    sellers,
    fetchSellers,
  } = useCart();
  return (
    <CartContext.Provider
      value={ {
        addToCart,
        cart,
        setCart,
        setTotal,
        total,
        removeFromCart,
        removeProduct,
        postNewSale,
        setDeliveryAddress,
        setDeliveryNumber,
        setSellerName,
        sellerName,
        deliveryAddress,
        deliveryNumber,
        manualHandleAddToCart,
        sellers,
        fetchSellers,
      } }
    >
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
