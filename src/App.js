import React from 'react';
import { Routes, Route } from "react-router";
import Login from './pages/Login';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';


const AppRoutes = ([
    <Routes>
      <Route index element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
]);

function App(){
  return AppRoutes;
}

export default App;
