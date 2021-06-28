import React, { Component } from "react";
import Circle from './Circle';
// import logo from './logo.svg';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      listArticle: [
        {
          id: 1,
          color: 'red',
          title: 'This is title 1',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          id: 2,
          color: 'green',
          title: 'This is title 2',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          id: 3,
          color: 'yellow',
          title: 'This is title 3',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          id: 4,
          color: 'blue',
          title: 'This is title 4',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        },
        {
          id: 5,
          color: 'violet',
          title: 'This is title 5',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        }
      ]
    };
  }

  redirectPage(page) {
    this.setState({
      page
    });
  }

  removeItem(index) {
    var { listArticle }  = this.state;
    listArticle.splice(index, 1);
    this.setState({
      listArticle
    });
  }

  render() {
    const { page, listArticle } = this.state;
    return (
      <main className="page-main">
        <div className="container">
          <div className="main-content">
            <div className="navigate-block text-center">
              <a className="navigate-item" onClick={() => this.redirectPage('home')} href="#">Home</a>
              <a className="navigate-item" onClick={() => this.redirectPage('about')} href="#">About</a>
              <a className="navigate-item" onClick={() => this.redirectPage('list')} href="#">List</a>
            </div>
            {
              (page === 'home') && 
              <div className="circle-block d-flex justify-center">
                <Circle number="30"></Circle>
                <Circle number="40"></Circle>
                <Circle number="50"></Circle>
              </div>
            }
            {(page === 'about') && <p className="text-center">About Page</p>}
            {
              (page === 'list') && 
              <div>
                {listArticle.length ?
                <ul>
                  {listArticle.map((i, index) => 
                    <li className="d-flex">
                      <span style={{backgroundColor: i.color}} className="color-label"></span>
                      <div className="d-flex">
                        <div>
                          <h3>{i.title}</h3>
                          <p>{i.description}</p>
                        </div>
                        <button onClick={() => this.removeItem(index)}>X</button>
                      </div>
                    </li>
                  )}
                </ul>
                : <p>Empty List!</p>}
              </div>
            }
            {/* { this.state.page === 'home' ?
              <div className="circle-block d-flex justify-center">
                <Circle number="30"></Circle>
                <Circle number="40"></Circle>
                <Circle number="50"></Circle>
              </div> : 
              <p className="text-center">About Page</p>
            } */}
            
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
