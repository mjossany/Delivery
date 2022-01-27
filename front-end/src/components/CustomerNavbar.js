// // import React, { useEffect, useState } from 'react';
// // import { useHistory } from 'react-router-dom';

// function CustomerNavBar() {
//   // const [initialMessage, setInitialMessage] = useState('');
//   // const { name, role } = JSON.parse(localStorage.getItem('user')); // isso tira do localstorage o que foi salvo la no login
//   // const history = useHistory();

//   // depois da alteracao de estao, se o role (que eh pego do objeto salvo do local storage no login) for uma coisa, exibe uma mensagem especifica.
//   useEffect(() => {
//     if (role === 'customer') {
//       setInitialMessage('MEUS PEDIDOS');
//     } else if (role === 'administrator') {
//       setInitialMessage('GERENCIAR USUÁRIOS');
//     } else if (role === 'seller') {
//       setInitialMessage('PEDIDOS');
//     }
//   }, []);

//   // Dai faco duas funcoes que redirecionam para as paginas de pedidos

//   return (
//     <div>
//       <div>
//         <div
//           hidden={ role !== 'customer' }
//           // onClick={ (e) => FuncDeRedirecionarPraProdutos(e) }
//           data-testid="customer_products__element-navbar-link-products"
//         >
//           PRODUTOS
//         </div>
//         <div
//           // onClick={ (e) => FuncDeRedirecionarPraPedidos(e) }
//           data-testid="customer_products__element-navbar-link-orders"
//         >
//           // ESTADO COM USESTATE
//         </div>
//         <div
//           data-testid="customer_products__element-navbar-user-full-name"
//         >
//           // PROVAVELMENTE DO LOCALSTORAGE
//         </div>
//         <div
//           // onClick={ handleClickQueRemoveOUserDoLocalStorage}
//           data-testid="customer_products__element-navbar-link-logout"
//         >
//           SAIR
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerNavBar;
