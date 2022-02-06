import React, { useContext } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup';
import Login from './pages/Login';
import CustomerProducts from './pages/customerProducts';
import './globalStyles.css';
import Checkout from './pages/checkout';
import CustomerOrder from './pages/customerOrder';
import { UserContext } from './context/user';
import AllCustomerOrders from './pages/allCustomerOrders';

function App() {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        {
          user && (
            <>
              <Route path="/customer/products" element={ <CustomerProducts /> } />
              <Route path="/customer/orders" element={ <AllCustomerOrders /> } />
              <Route path="/customer/checkout" element={ <Checkout /> } />
              <Route path="/customer/orders/:id" element={ <CustomerOrder /> } />
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
