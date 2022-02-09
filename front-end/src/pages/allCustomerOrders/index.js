import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
import NavBar from '../../components/navbar';

const mask = '0000';
const AllCustomerOrders = () => {
  const {
    customerOrders,
    generateOrderNumber,
    formatData,
    getAllCustomerOrders,
  } = useOrders();

  useEffect(() => {
    getAllCustomerOrders();
  }, [getAllCustomerOrders]);

  const navigate = useNavigate();

  return (
    <AllOrdersContainer>
      <NavBar />
      {
        customerOrders.map((order) => (
          <OrderContainer
            key={ order.id }
            onClick={ () => navigate(`/customer/orders/${order.id}`) }
          >
            <IdContainer
              data-testid={ `customer_orders__element-order-id-${order.id}` }
            >
              <IdContainerText>Pedido</IdContainerText>
              <IdContainerOrderNumber>
                { generateOrderNumber(mask, order.id) }
              </IdContainerOrderNumber>
            </IdContainer>
            <OrderStatusContainer>
              <OrderStatusText
                data-testid={ `customer_orders__element-delivery-status-${order.id}` }
              >
                { order.status }
              </OrderStatusText>
            </OrderStatusContainer>
            <OrderDateContainer>
              <OrderDateDate
                data-testid={ `customer_orders__element-order-date-${order.id}` }
              >
                { formatData(order.saleDate) }
              </OrderDateDate>
              <OrderDatePrice
                data-testid={ `customer_orders__element-card-price-${order.id}` }
              >
                { `R$ ${String((+order.totalPrice).toFixed(2).replace('.', ','))}` }
              </OrderDatePrice>
            </OrderDateContainer>
          </OrderContainer>
        ))
      }
    </AllOrdersContainer>
  );
};

export default AllCustomerOrders;
