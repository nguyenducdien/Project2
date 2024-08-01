import React, { useState, MouseEvent, useContext } from 'react';
import LoginForm from './compoments/FormLogin';
import InputLogin from './compoments/InputLogin';
import logo from './logo.svg';
import './App.css';
import store from './store/index';


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <LoginForm></LoginForm>
     
    </div>
  );
}

export default App;
