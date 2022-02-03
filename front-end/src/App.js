import React, { useContext } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup';
import Login from './pages/Login';
import CustomerProducts from './pages/customerProducts';
import './globalStyles.css';
import Checkout from './pages/checkout';
import CustomerOrders from './pages/customerOrders';
import { UserContext } from './context/user';

function App() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        {
          user && (
            <>
              <Route path="/customer/products" element={ <CustomerProducts /> } />
              <Route path="/customer/orders" element={ <CustomerOrders /> } />
              <Route path="/customer/checkout" element={ <Checkout /> } />
              <Route path="/customer/orders/:id" element={ <CustomerOrders /> } />
              <Route path="/*" element={ <Navigate to="/customer/products" /> } />
            </>
          )
        }
        {
          !user && (
            <>
              <Route exact path="/login" element={ <Login /> } />
              <Route exact path="/register" element={ <Signup /> } />
              <Route path="*" element={ <Navigate to="/login" /> } />
            </>
          )
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
