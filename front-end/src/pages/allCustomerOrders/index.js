import React from 'react';
import { AllOrdersContainer } from './styles';
import useOrders from '../../hooks/useOrders';

const AllCustomerOrders = () => {
  const { customerOrders } = useOrders();
  console.log(customerOrders);

  return (
    <AllOrdersContainer>
      oi
    </AllOrdersContainer>
  );
};

export default AllCustomerOrders;
