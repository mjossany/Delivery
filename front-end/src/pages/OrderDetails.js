import React from 'react';


function OrdersDetails() {
  return (
  <tr>
    <th>
      PEDIDO 000
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        //id
      </span>
    </th>
    <th
      data-testid="customer_order_details__element-order-details-label-seller-name"
    >
      //
    </th>
    <th
      data-testid="customer_order_details__element-order-details-label-order-date"
    >
      // data
    </th>
    <th
    >
      // status do pedido
    </th>
    <th>
      <Button
        data-testid="customer_order_details__button-delivery-check"
      >
        MARCAR COMO ENTREGUE
      </Button>
    </th>
  </tr>
);
}