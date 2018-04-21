import React, { Component } from 'react';
import './App.css';
import CountingButton from "./components/CountingButton.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import LinkedInWidget from "./components/LinkedInWidget.js"
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';

class App extends Component {

  componentDidMount () {
      const script = document.createElement("script");

      script.src = "//platform.linkedin.com/in.js";
      script.async = true;

      document.body.appendChild(script);
  }

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
      <body>
        <div className="App">
          <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
            <Header />
          </AppBar>
        </div>
        <div className="App">
          <Button variant="raised" color="primary"onClick={this.handleClick}>
            How many times can you click me? {this.state.counter}</Button>
          <CountingButton className="App"></CountingButton>
          <LinkedInWidget />
          <Footer />
        </div>
      </body>
    );

}
}

export default App;
