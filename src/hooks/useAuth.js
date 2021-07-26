import { useState } from 'react';
import { useHistory } from "react-router-dom";

const useAuth = () => {
  const history = useHistory();
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [isLogined, setIsLogined] = useState(!!user);

  const login = (email, pass) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify(email));
        setUser({email});
        history.push('/account');
        res({email});
      }, 1000);
    });
  }
  const logout = () => {
    localStorage.removeItem('user');
    setIsLogined(false);
    history.push('/auth/login');
  }
  return { isLogined, login, logout };
}
export default useAuth;
