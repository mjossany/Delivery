import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';
import { OrdersContext } from '../../context/orders';
import { UserContext } from '../../context/user';
import {
  AllOrdersContainer,
  OrderContainer,
  IdContainer,
  IdContainerText,
  IdContainerOrderNumber,
  OrderStatusContainer,
  OrderStatusText,
  OrderDateContainer,
  OrderDateDate,
  OrderDatePrice,
  OrderAddressContainer,
  OrderAddressContainerText,
} from './styles';

const mask = '0000';
const AllSellerOrders = () => {
  const {
    generateOrderNumber,
    formatData,
    getAllSellerOrders,
    sellerOrders,
  } = useContext(OrdersContext);

  const {
    user: { id },
  } = useContext(UserContext);

  useEffect(() => {
    getAllSellerOrders(id);
  }, [getAllSellerOrders, id]);

  const navigate = useNavigate();

  console.log(sellerOrders);

  return (
    <AllOrdersContainer>
      <NavBar />
      {
        sellerOrders.map((order) => (
          <OrderContainer
            key={ order.id }
            onClick={ () => navigate(`/seller/orders/${order.id}`) }
          >
            <IdContainer
              data-testid={ `seller_orders__element-order-id-${order.id}` }
            >
              <IdContainerText>Pedido</IdContainerText>
              <IdContainerOrderNumber>
                { generateOrderNumber(mask, order.id) }
              </IdContainerOrderNumber>
            </IdContainer>
            <OrderStatusContainer>
              <OrderStatusText
                data-testid={ `seller_orders__element-delivery-status-${order.id}` }
              >
                { order.status }
              </OrderStatusText>
            </OrderStatusContainer>
            <OrderDateContainer>
              <OrderDateDate
                data-testid={ `seller_orders__element-order-date-${order.id}` }
              >
                { formatData(order.saleDate) }
              </OrderDateDate>
              <OrderDatePrice
                data-testid={ `seller_orders__element-card-price-${order.id}` }
              >
                { `R$ ${String((+order.totalPrice).toFixed(2).replace('.', ','))}` }
              </OrderDatePrice>
            </OrderDateContainer>
            <OrderAddressContainer>
              <OrderAddressContainerText
                data-testid={ `seller_orders__element-card-address-${order.id}` }
              >
                { (order.deliveryAddress && order.deliveryAddress.length > 0) && (
                  `${order.deliveryAddress}, ${order.deliveryNumber}`
                ) }
              </OrderAddressContainerText>
            </OrderAddressContainer>
          </OrderContainer>
        ))
      }
    </AllOrdersContainer>
  );
};
export default AllSellerOrders;
