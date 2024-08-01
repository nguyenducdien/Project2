/** @format */
import { AppContext } from './contexs';
import React, {
    ChangeEvent,
    forwardRef,
    memo,
    useState,
    useContext,
  } from 'react';
 
  
  type InputProps = {
    label: string;
    type?: string;
    value?: string;
    error?: string;
    // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };

  
  const InputText = forwardRef<HTMLInputElement, InputProps>(
    ({ label, type = 'text', value, error }, ref) => {
      const [valueInpput, setValueInput] = useState(value || '');
      const { displayListPost } = useContext(AppContext);
  
      console.log('displayListPost ', displayListPost);
      const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
      };
  
      return (
        <div className='login-input-group'>
          <label className='login-label'>{label}</label>
          <input
            ref={ref}
            type={type}
            value={valueInpput}
            onChange={onChangeInput}
            className='login-input'
          />
          {error && <p className='error'>{error}</p>}
        </div>
      );
    }
  );
  
  export default InputText;