/** @format */

export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const loginValidation = (email: string, password: string) => {
    let newErrors = { username: '', password: '' };
  
    if (!email) {
      newErrors.username = 'Gmail is required';
    } else if (!validateEmail(email)) {
      newErrors.username = 'Username must be a valid email';
    }
  
    if (!password) {
      newErrors.password = 'Password is required';
    }
  
      return newErrors
  };