import React from 'react';
import useAuth from '../../hooks/useAuth';

const Account = () => {
  const auth = useAuth();
  const email = localStorage.getItem('user');
  const handelLogout = () => {
    auth.logout();
  }
  return (
    <div className="container">
      <span>You are login successfully </span>
      <p>Your account: {email} </p>
      <button className="btn" onClick={handelLogout}>Logout</button>
    </div>
  )
}
export default Account;
