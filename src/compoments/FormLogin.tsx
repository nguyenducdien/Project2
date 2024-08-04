import React, { useRef, useState, useCallback, useEffect, useMemo, memo } from 'react';
import InputText from './InputLogin';
import { loginValidation } from '../FormRex';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../store/reducers/actions';
//import './styles.css';
import store from '../store';
console.log(store)
const LoginForm = () => {
  const [errors, setErrors] = useState({ username: '', password: '' });

  
  const auth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  console.log('form login ');
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const usernameValue = usernameRef.current?.value || '';
    const passwordValue = passwordRef.current?.value || '';
    let newErrors = loginValidation(usernameValue, passwordValue);
    setErrors(newErrors);

    if (!newErrors.username && !newErrors.password) {
      console.log('Form submitted:', {
        username: usernameValue,
        password: passwordValue,
      });
      dispatch({
        type: AuthAction.LOGIN,
        data: {
          username: usernameValue,
          password: passwordValue,
        },
      });
      navigate('/');
    }
  }, []); //

  return (
    <form className='form' onSubmit={handleSubmit}>
      <InputText label='Email' ref={usernameRef} error={errors.username} />
      <InputText
        label='Password'
        type='password'
        ref={passwordRef}
        error={errors.password}
      />

      <button className='submit-btn' type='submit'>
        Login
      </button>
    </form>
  );
};

export default LoginForm;