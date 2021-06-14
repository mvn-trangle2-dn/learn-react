import React, { Component } from 'react'

export default class Circle extends Component {

  constructor(props){
    super(props);
    this.state = {
      count: this.props.number,
      isStarted: true,
    }
    this.interval = null;
    this.countDown = this.countDown.bind(this);
    this.startCount = this.startCountDown.bind(this);
    this.stopCount = this.stopCountDown.bind(this);
  }

  startCountDown() {
    this.countDown();
    this.setState({ isStarted: true });
  }

  stopCountDown() {
    clearInterval(this.interval);
    this.setState({ isStarted: false });
  }

  countDown() {
    this.interval = setInterval(() =>{
      if (this.state.count === 0) {
        clearInterval(this.interval);
        return;
      }
      this.setState((prevState) => ({count: prevState.count - 1})); 
    }, 1000);
    
  }

  componentDidMount() {
    this.countDown();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const styles = {
      background: '#000',
      color: '#fff',
      border: '2px solid',
      borderRadius: '50%',
      fontSize: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80px',
      height: '80px'
    }
    return (
      <div className="text-center btn-block">
        <button className="btn" onClick={this.state.isStarted ? this.stopCount : this.startCount}>
          {this.state.isStarted ? 'Stop now' : 'Start now'}
        </button>
        <span style={styles}>{this.state.count}</span>
      </div>
    )
  }
}
