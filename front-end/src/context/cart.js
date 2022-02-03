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
