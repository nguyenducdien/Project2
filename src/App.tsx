import React, { useState, MouseEvent, useContext } from 'react';
import LoginForm from './compoments/FormLogin';
import InputLogin from './compoments/InputLogin';
import logo from './logo.svg';
import './App.css';
import store from './store/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
//import data from './data.json'
import Product from './pages/product/product';
import TransitionsSnackbar from './compoments/Nabar';


const router =createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
        path: '/seller/products',
        element: <Product />,
      }
    ]
  },
  {
    path: '/login',
    element: <LoginForm />,
  }
])

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
     
      <RouterProvider router={router} />

     
    </div>
  );
}

export default App;
