import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Admin from './Admin.js';
import Cart from './cart.js';
import Menu from './Menu.js';
import Test from './Component/test.js';
import Table from './Component/Table';
import Dish from './Component/dish';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/menu" element={<Menu/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/test" element={<Test/>}></Route>
      <Route path="/table" element={<Table/>}></Route>
      <Route path="/menu/dish" element={<Dish/>}></Route>
      

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
