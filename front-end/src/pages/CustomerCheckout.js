import React from 'react';

function CustomerCheckout() {
  return (
    <div>
      // Aqui vai ter o componente de barra de navegacao 
      <h3>Finalizar Pedido</h3>
      <table>
        <thead>
          <tr>
            <th>item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            // funcao que altera o valor do cart com as quantidades
          }
        </tbody>
      </table>
       // componente do botao de checkout com o testId="customer_checkout__element-order-total-price"
    </div>
  );
}

export default CustomerCheckout;