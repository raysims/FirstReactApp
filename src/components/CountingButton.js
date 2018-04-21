import React, { Component } from 'react';


export default class CountingButton extends Component {

  constructor(props) {
  super(props);
  this.state = { counter: 1 };
  }

  handleClick = () => {
    console.log('Button is clicked!!');
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  };

  render() {
    return (
      <div>Click Me!
      <button className="App-button"onClick={this.handleClick}>
        {this.state.counter}
      </button>
      </div>
    );
}
}
