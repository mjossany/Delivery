import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function CustomerNavBar() {
  const [initialMessage, setInitialMessage] = useState('');
  const { name, role } = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  
  useEffect(() => {
    if (role === 'customer') {
      setInitialMessage('MEUS PEDIDOS');
    } else if (role === 'administrator') {
      setInitialMessage('GERENCIAR USUÁRIOS');
    } else if (role === 'seller') {
      setInitialMessage('PEDIDOS');
    }
  }, [role]);

  // Dai faco duas funcoes que redirecionam para as paginas de pedidos 


  return (
    <div>
      <div>
        <div
          hidden={ role !== 'customer' }
          // onClick={ (e) => FuncDeRedirecionarPraProdutos(e) }
          data-testid="customer_products__element-navbar-link-products"
        >
          PRODUTOS
        </div>
        <div
          // onClick={ (e) => FuncDeRedirecionarPraPedidos(e) }
          data-testid="customer_products__element-navbar-link-orders"
        >
          // ESTADO COM USESTATE
        </div>
        <div
          data-testid="customer_products__element-navbar-user-full-name"
        >
          // PROVAVELMENTE DO LOCALSTORAGE
        </div>
        <div
          // onClick={ handleClickQueRemoveOUserDoLocalStorage}
          data-testid="customer_products__element-navbar-link-logout"
        >
          SAIR
        </div>
      </div>
    </div>
  );
}

export default CustomerNavBar;