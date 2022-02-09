import React, { createContext } from 'react';
import { PropTypes } from 'prop-types';
import useOrders from '../hooks/useOrders';

export const OrdersContext = createContext({});

const OrdersProvider = ({ children }) => {
  const {
    generateOrderNumber,
    formatData,
    getAllSellerOrders,
    sellerOrders,
    saleOrder,
    getSaleById,
    toPreparing,
    inTransit,
    getOrderById,
    order,
    delivered,
  } = useOrders();

  return (
    <OrdersContext.Provider
      value={ {
        generateOrderNumber,
        formatData,
        getAllSellerOrders,
        sellerOrders,
        saleOrder,
        getSaleById,
        toPreparing,
        inTransit,
        getOrderById,
        order,
        delivered,
      } }
    >
      { children }
    </OrdersContext.Provider>
  );
};

OrdersProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OrdersProvider;
