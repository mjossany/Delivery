import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../context/user';
import { AllOrdersContainer } from './styles';

const AllCustomerOrders = () => {
  const { user } = useContext(UserContext);
  const { customerOrders, getAllCustomerOrders } = useOrders();

  useEffect(() => {
    getAllCustomerOrders();
    console.log(user, customerOrders);
  });

  return (
    <AllOrdersContainer>
      oi
    </AllOrdersContainer>
  );
};

export default AllCustomerOrders;
