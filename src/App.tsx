import React, { useState, MouseEvent, useContext } from 'react';
import LoginForm from './compoments/FormLogin';
import InputLogin from './compoments/InputLogin';
import logo from './logo.svg';
import './App.css';
import store from './store/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
//import data from './data.json'
import ProductTable from './pages/product/product';
import TransitionsSnackbar from './compoments/Nabar';
import path from 'path';
import CategoriesTable from './pages/Categories';
import Color from './pages/Color';


const router =createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children:[
      {
        path:'/Product',
        element: <ProductTable />
      },
      {
        path:'/Categories',
        element: <CategoriesTable/>
      },
      {
        path:'/Color',
       element : <Color/>
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
