import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import LinkedInWidget from "./components/LinkedInWidget.js"
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Intro from "./components/Intro.js";
import Subaru from "./subaru.jpg";

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
      <body className="App">
        <div className="App">
          <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
            <Header className="App"/>
          </AppBar>
        </div>
        <div>
          <Button variant="raised" color="primary">Meet Our Members</Button>
          <Button variant="raised" color="primary">Event Calendar</Button>
          <Button variant="raised" color="primary">Our Cars</Button>
          <Button variant="raised" color="primary">Shop</Button>
        </div>
        <div className="App">
          <img src={require('./subaru.jpg')} />
        </div>
        <div>
          <LinkedInWidget />
          <Footer />
        </div>
      </body>
    );

}
}

export default App;
