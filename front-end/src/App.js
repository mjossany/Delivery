import React, { useContext } from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css';
import { UserContext } from './context/user';
import Signup from './pages/signup';
import Login from './pages/Login';
import CustomerProducts from './pages/customerProducts';
import './globalStyles.css';

function App() {
  const { user } = useContext(UserContext);

  if (user && user.role === 'customer') {
    console.log(user);
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/customer/products" element={ <CustomerProducts /> } />
          <Route path="/login" element={ <Navigate to="/customer/products" /> } />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="/register" element={ <Signup /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
