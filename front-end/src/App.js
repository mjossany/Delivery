import React, { useContext } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import Signup from './pages/signup';
import Login from './pages/Login';
import CustomerProducts from './pages/customerProducts';
import './globalStyles.css';
import Checkout from './pages/checkout';
import CustomerOrder from './pages/customerOrder';
import Admin from './pages/admin';
import { UserContext } from './context/user';
import AllCustomerOrders from './pages/allCustomerOrders';
import AllSellerOrders from './pages/allSellerOrders';
import SellerOrderDetails from './pages/sellerOrderDetails';

function App() {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        {
          !user && (
            <>
              <Route exact path="/login" element={ <Login /> } />
              <Route exact path="/register" element={ <Signup /> } />
              <Route path="*" element={ <Navigate to="/login" /> } />
            </>
          )
        }
        {
          (user && user.role === 'seller') && (
            <>
              <Route path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
              <Route path="/seller/orders" element={ <AllSellerOrders /> } />
              <Route path="/*" element={ <Navigate to="/seller/orders" /> } />
            </>
          )
        }
        {
          (user && user.role === 'customer') && (
            <>
              <Route path="/customer/products" element={ <CustomerProducts /> } />
              <Route path="/customer/orders" element={ <AllCustomerOrders /> } />
              <Route path="/customer/checkout" element={ <Checkout /> } />
              <Route path="/customer/orders/:id" element={ <CustomerOrder /> } />
              <Route path="/*" element={ <Navigate to="/customer/products" /> } />
            </>
          )
        }
        { (user && user.role === 'administrator') && (
          <>
            <Route path="/admin/manage" element={ <Admin /> } />
            <Route path="/*" element={ <Navigate to="/admin/manage" /> } />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
