import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup';
import Login from './pages/Login';
import CustomerProducts from './pages/customerProducts';
import './globalStyles.css';
import Checkout from './pages/checkout';
import CustomerOrders from './pages/customerOrders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/register" element={ <Signup /> } />
        <Route path="/customer/products" element={ <CustomerProducts /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/customer/orders/:id" element={ <CustomerOrders /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
