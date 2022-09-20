import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toggle } from '../store/loginSlice';

const useAuth = () => {
  const history = useHistory();
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLogined, setIsLogined] = useState(!!user);
  const dispatch = useDispatch();

  const login = (email, pass) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(email));
        setUser({email});
        history.push('/account');
        res({email});
        dispatch(toggle(true));
      }, 1000);
    });
  }
  const logout = () => {
    localStorage.removeItem('user');
    setIsLogined(false);
    dispatch(toggle(false));
    history.push('/auth/login');
  }
  return { isLogined, login, logout };
}
export default useAuth;
