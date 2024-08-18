import React, { useRef, useState, useCallback, useEffect, useMemo, memo } from 'react';
import InputText from './InputLogin';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../store/reducers/actions';

import store, { AppDispatch } from '../store';
import { fetchAuth } from '../store/reducers/authReducer';
import { loginValidation } from '../FormRex';
import Button from '@mui/material/Button';


//import { RootState } from '../store';


const LoginForm: React.FC = () => {
  const [errors, setErrors] = useState({ email: '', password: '' });
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);



  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
        e.preventDefault();
        const emailValue = emailRef.current?.value || '';
        const passwordValue = passwordRef.current?.value || '';

        if (!emailValue || !passwordValue) {
            setErrors({
                email: !emailValue ? 'Email is required' : '',
                password: !passwordValue ? 'Password is required' : '',
            });
            return;
        }


      dispatch(fetchAuth({ username: emailValue, password: passwordValue }))
            .then(() => {
              navigate('/Product');
            })
            .catch((error) => {
              setErrors({ email: '', password: 'email or password is not correct' });
            });
    },
    [dispatch, navigate]


);
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input ref={emailRef} type="text" />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password</label>
        <input ref={passwordRef} type="password" />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit" disabled={auth.loading === 'pending'}>
        {auth.loading === 'pending' ? 'Logging in...' : 'Login'}
      </button>
      {auth.error && <span>{auth.error}</span>}
    </form>
  );
};

export default LoginForm;