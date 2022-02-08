import React, { useEffect } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import ConditionalComponent from '../../components/ConditionalComponent';
import NavBar from '../../components/navbar';
import useOrders from '../../hooks/useOrders';
import {
  OrderDetailsBoard,
  OrderDetailsBoardHeader,
  OrderDetailsBoardHeaderButton,
  OrderDetailsBoardHeaderCell,
  OrderDetailsBoardHeaderSubContainers,
  OrderDetailsBoardRow,
  OrderDetailsBoardTable,
  OrderDetailsContainer,
  OrderDetailsBoardTableBody,
  OrderDetailsBoardTableRow,
  OrderDetailsBoardTableCell,
  OrderDetailsBoardTableHeader,
  OrderDetailsBoardTotalPrice,
} from './styles';

const CustomerOrders = () => {
  const { id } = useParams();
  const { getOrderById, order, generateOrderNumber } = useOrders();
  console.log(order);

  useEffect(() => {
    getOrderById(id);
  }, [getOrderById, id]);

  if (!order) {
    return <h1>Loading</h1>;
  }

  const headersArray = ['Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];
  const mask = '0000';
  const dSId = 'customer_order_details__element-order-details-label-delivery-status';

  return (
    <OrderDetailsContainer>
      <NavBar />
      <h3>Detalhes do Pedido</h3>
      <OrderDetailsBoard>
        <OrderDetailsBoardHeader>
          <OrderDetailsBoardHeaderSubContainers
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`Pedido ${generateOrderNumber(mask, order.id)}`}
          </OrderDetailsBoardHeaderSubContainers>
          <OrderDetailsBoardHeaderSubContainers
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P. Vend: ${order.seller.name}`}
          </OrderDetailsBoardHeaderSubContainers>
          <OrderDetailsBoardHeaderSubContainers
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {moment(order.saleDate).format('DD/MM/YYYY')}
          </OrderDetailsBoardHeaderSubContainers>
          <OrderDetailsBoardHeaderSubContainers
            data-testid={ dSId }
          >
            {order.status}
          </OrderDetailsBoardHeaderSubContainers>
          <OrderDetailsBoardHeaderButton
            data-testid="customer_order_details__button-delivery-check"
            disabled
          >
            Marcar como entregue
          </OrderDetailsBoardHeaderButton>
        </OrderDetailsBoardHeader>
        <OrderDetailsBoardTable>
          <OrderDetailsBoardTableHeader>
            <OrderDetailsBoardRow>
              {
                headersArray.map((header) => (
                  <OrderDetailsBoardHeaderCell key={ header }>
                    { header }
                  </OrderDetailsBoardHeaderCell>
                ))
              }
            </OrderDetailsBoardRow>
          </OrderDetailsBoardTableHeader>
          <OrderDetailsBoardTableBody>
            <ConditionalComponent condition={ order && order.products.length > 0 }>
              { order.products.map((product, index) => (
                <OrderDetailsBoardTableRow key={ product.id }>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `customer_order_details__element-order-table-item-number-${index}`
                    }
                  >
                    { index }
                  </OrderDetailsBoardTableCell>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `customer_order_details__element-order-table-name-${index}`
                    }
                  >
                    { product.name }
                  </OrderDetailsBoardTableCell>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `customer_order_details__element-order-table-quantity-${index}`
                    }
                  >
                    { product.SaleProduct.quantity }
                  </OrderDetailsBoardTableCell>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `customer_order_details__element-order-table-sub-total-${index}`
                    }
                  >
                    { `R$ ${String((+product.price).toFixed(2).replace('.', ','))}` }
                  </OrderDetailsBoardTableCell>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `customer_order_details__element-order-total-price-${index}`
                    }
                  >
                    { `R$ ${String(
                      (+product.SaleProduct.quantity * +product.price)
                        .toFixed(2)
                        .replace('.', ','),
                    )}` }
                  </OrderDetailsBoardTableCell>
                </OrderDetailsBoardTableRow>
              ))}
            </ConditionalComponent>
          </OrderDetailsBoardTableBody>
        </OrderDetailsBoardTable>
        <OrderDetailsBoardTotalPrice
          data-testid="customer_order_details__element-order-total-price"
        >
          { `Total: R$ ${String((+order.totalPrice).toFixed(2).replace('.', ','))}` }
        </OrderDetailsBoardTotalPrice>
      </OrderDetailsBoard>
    </OrderDetailsContainer>
  );
};

export default CustomerOrders;
