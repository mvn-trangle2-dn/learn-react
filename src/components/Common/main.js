import React, { Component } from "react";
import FetchApi from "./fetchApi";
// import Circle from './Circle';
// import Form from "./form";
// import FormHooks from "./formHooks";
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
    // const { page, listArticle } = this.state;
    return (
      <main className="page-main">
        <div className="container">
          {/* <Form/> */}
          {/* <FormHooks/> */}
          <FetchApi/>
        </div>
      </main>
    );
  }
}

export default Main;
