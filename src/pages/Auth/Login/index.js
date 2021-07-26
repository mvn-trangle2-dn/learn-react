import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

  const [form, setForm] = useState({email: '', password: ''});
  const auth = useAuth();

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setForm({...form, [key]: value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.login(form.email, form.password);
  }

  return (
    <div className="container">
      <h2>Login Form</h2>
      <form className="login-form pd-2" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input type="text" name="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} />
        </div>
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login;
