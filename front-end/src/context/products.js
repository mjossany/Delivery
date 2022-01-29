import React, { createContext, useContext } from 'react';
import { PropTypes } from 'prop-types';
import useProducts from '../hooks/useProducts';
import { UserContext } from './user';

export const ProductsContext = createContext({});

const ProductsProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const { setProducts, setCart, cart, products } = useProducts(user);
  return (
    <ProductsContext.Provider
      value={ {
        setProducts, setCart, cart, products,
      } }
    >
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductsProvider;
