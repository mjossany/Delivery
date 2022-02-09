import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import NavBar from '../../components/navbar';
import ConditionalComponent from '../../components/ConditionalComponent';
import {
  OrderDetailsContainer,
  OrderDetailsBoard,
  OrderDetailsBoardHeader,
  OrderDetailsBoardHeaderSubContainers,
  OrderDetailsBoardHeaderButton,
  OrderDetailsBoardTable,
  OrderDetailsBoardTableHeader,
  OrderDetailsBoardRow,
  OrderDetailsBoardHeaderCell,
  OrderDetailsBoardTableBody,
  OrderDetailsBoardTableRow,
  OrderDetailsBoardTableCell,
  OrderDetailsBoardTotalPrice,
} from './style';
import { OrdersContext } from '../../context/orders';

const SellerOrderDetails = () => {
  const { id } = useParams();
  const {
    sellerOrders,
    saleOrder,
    getSaleById,
    generateOrderNumber,
    toPreparing,
    inTransit,
  } = useContext(OrdersContext);

  useEffect(() => {
    getSaleById(id);
  }, [getSaleById, id, sellerOrders]);

  if (!saleOrder) {
    return <h1>Loading</h1>;
  }

  const headersArray = ['Item', 'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];
  const mask = '0000';
  const saleStatuId = 'seller_order_details__element-order-details-label-delivery-status';

  console.log(sellerOrders);
  console.log(saleOrder);

  return (
    <OrderDetailsContainer>
      <NavBar />
      <h3>Detalhes do Pedido</h3>
      <OrderDetailsBoard>
        <OrderDetailsBoardHeader>
          <OrderDetailsBoardHeaderSubContainers
            data-testid="seller_order_details__element-order-details-label-order-id"
          >
            {`Pedido ${generateOrderNumber(mask, saleOrder.id)}`}
          </OrderDetailsBoardHeaderSubContainers>
          <OrderDetailsBoardHeaderSubContainers
            data-testid="seller_order_details__element-order-details-label-order-date"
          >
            {moment(saleOrder.saleDate).format('DD/MM/YYYY')}
          </OrderDetailsBoardHeaderSubContainers>
          <OrderDetailsBoardHeaderSubContainers
            data-testid={ saleStatuId }
          >
            {saleOrder.status}
          </OrderDetailsBoardHeaderSubContainers>
          <OrderDetailsBoardHeaderButton
            onClick={ () => toPreparing(id) }
            data-testid="seller_order_details__button-preparing-check"
            disabled={
              saleOrder.status === 'Entregue' || saleOrder.status === 'Preparando'
            }
          >
            Preparar pedido
          </OrderDetailsBoardHeaderButton>
          <OrderDetailsBoardHeaderButton
            onClick={ () => inTransit(id) }
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ saleOrder.status !== 'Preparando' }
          >
            Saiu para entrega
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
            <ConditionalComponent
              condition={
                saleOrder && saleOrder.products.length > 0
              }
            >
              { saleOrder.products.map((product, index) => (
                <OrderDetailsBoardTableRow key={ product.id }>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `seller_order_details__element-order-table-item-number-${index}`
                    }
                  >
                    { index }
                  </OrderDetailsBoardTableCell>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `seller_order_details__element-order-table-name-${index}`
                    }
                  >
                    { product.name }
                  </OrderDetailsBoardTableCell>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `seller_order_details__element-order-table-quantity-${index}`
                    }
                  >
                    { product.SaleProduct.quantity }
                  </OrderDetailsBoardTableCell>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `seller_order_details__element-order-table-unit-price-${index}`
                    }
                  >
                    { `R$ ${String((+product.price).toFixed(2).replace('.', ','))}` }
                  </OrderDetailsBoardTableCell>
                  <OrderDetailsBoardTableCell
                    data-testid={
                      `seller_order_details__element-order-table-sub-total-${index}`
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
          data-testid="seller_order_details__element-order-total-price"
        >
          { `Total: R$ ${String((+saleOrder.totalPrice).toFixed(2).replace('.', ','))}` }
        </OrderDetailsBoardTotalPrice>
      </OrderDetailsBoard>
    </OrderDetailsContainer>
  );
};

export default SellerOrderDetails;
