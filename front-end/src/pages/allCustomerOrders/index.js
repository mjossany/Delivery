import React from 'react';
import {
  AllOrdersContainer,
  IdContainer,
  IdContainerOrderNumber,
  IdContainerText,
  OrderContainer,
  OrderDateContainer,
  OrderDateDate,
  OrderDatePrice,
  OrderStatusContainer,
  OrderStatusText,
} from './styles';
import useOrders from '../../hooks/useOrders';

const mask = '0000';
const AllCustomerOrders = () => {
  const { customerOrders, generateOrderNumber } = useOrders();
  console.log(customerOrders);

  return (
    <AllOrdersContainer>
      {
        customerOrders.map((order) => (
          <OrderContainer key={ order.id }>
            <IdContainer
              data-testid={ `customer_orders__element-order-id-${order.id}` }
            >
              <IdContainerText>Pedido</IdContainerText>
              <IdContainerOrderNumber>
                { generateOrderNumber(mask, order.id) }
              </IdContainerOrderNumber>
            </IdContainer>
            <OrderStatusContainer>
              <OrderStatusText>
                { order.status }
              </OrderStatusText>
            </OrderStatusContainer>
            <OrderDateContainer>
              <OrderDateDate>
                Oi
              </OrderDateDate>
              <OrderDatePrice>
                Oi
              </OrderDatePrice>
            </OrderDateContainer>
          </OrderContainer>
        ))
      }
    </AllOrdersContainer>
  );
};

export default AllCustomerOrders;
