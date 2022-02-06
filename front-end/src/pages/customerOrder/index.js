import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useOrders from '../../hooks/useOrders';

const CustomerOrders = () => {
  const { id } = useParams();
  const { getOrderById, order } = useOrders();

  useEffect(() => {
    getOrderById(id);
  }, [getOrderById, id]);

  if (!order) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <h1>Detalhes do pedido</h1>
      <div style={ { display: 'flex' } }>
        {console.log(order)}
        <h2>
          Pedido :
          {' '}
          {order.id }
        </h2>

        <h2>
          {
            order.saleDate
          }
        </h2>
        <h2>
          {
            order.status
          }
        </h2>
        <h2>
          Marcar como entregue
        </h2>
      </div>
      <h1>Items</h1>
      <div style={ { display: 'flex' } }>
        {
          order && order.products.length > 0 ? (
            order.products.map((product) => (
              <div
                key={ product.name }
                style={ { display: 'flex', flexDirection: 'column' } }
              >
                <h2>
                  {product.name}
                </h2>
              </div>
            ))
          ) : (
            <h2>
              Nenhum item encontrado
            </h2>
          )
        }
      </div>
      <h1>
        Total :
        {' '}
        { order.totalPrice }
      </h1>
    </div>
  );
};

export default CustomerOrders;
