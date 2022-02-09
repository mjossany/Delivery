import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import UserProvider from './context/user';
import ProductsProvider from './context/products';
import CartProvider from './context/cart';
import OrdersProvider from './context/orders';

ReactDOM.render(
  <React.StrictMode>
    <OrdersProvider>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </OrdersProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
