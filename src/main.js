import React, { Component } from "react";
import Circle from './Circle';
// import logo from './logo.svg';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    };
  }

  redirectPage(page) {
    this.setState({
      page
    });
  }

  render() {
    const { page } = this.state;
    return (
      <main className="page-main">
        <div className="container">
          <div className="main-content">
            <div className="navigate-block text-center">
              <a className="navigate-item" onClick={() => this.redirectPage('home')} href="#">Home</a>
              <a className="navigate-item" onClick={() => this.redirectPage('about')} href="#">About</a>
            </div>
            { this.state.page === 'home' ?
              <div className="circle-block d-flex justify-center">
                <Circle number="30"></Circle>
                <Circle number="40"></Circle>
                <Circle number="50"></Circle>
              </div> : 
              <p className="text-center">About Page</p>
            }
            
            {/* <a href="/">
              <img src={logo} className="react-logo" alt="react-logo"/>
            </a>
            <h2>Hello React!</h2> */}
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
