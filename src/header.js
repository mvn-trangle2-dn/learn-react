import React, { Component } from "react";
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <header className="page-header d-flex justify-between">
          <a href="/" className="logo">
            <img src={logo} alt="header-logo"/>
          </a>
          <ul className="header-nav d-flex">
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
          <ul className="header-actions d-flex">
            <li><a href="/"><i className="fa fa-search"></i></a></li>
            <li><a href="/"><i className="fa fa-user"></i></a></li>
            <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
          </ul>
        </header>
      </div>
    )
  }
}

export default Header;
