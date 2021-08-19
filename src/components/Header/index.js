import React, { useState }  from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Header = () => {
  const [logo] = useState('https://image.pngaaa.com/930/2507930-middle.png');
  const favs = useSelector(state => state.favorite.value);
  const isLogin = useSelector((state) => state.isLogin.value);

  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <header className="page-header d-flex justify-between">
        <Link to="/"><img className="logo" src={logo} alt="header-logo" /></Link>
        <ul className="header-nav d-flex">
          <li>
            <NavLink to="/" exact className="nav-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="nav-link" activeClassName="active">About us</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link" activeClassName="active">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="nav-link" activeClassName="active">Product</NavLink>
          </li>
        </ul>
        <ul className="header-actions d-flex">
          <li>
            <Link to={`/${isLogin ? 'account' : 'auth/login'}`}><i className="fa fa-user"></i></Link>
          </li>
          <li className="header-favorite">
            <a href="/">
              <i className="fa fa-heart"></i>
              <span>{favs.length}</span>
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header;
