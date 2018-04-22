import React, { Component } from 'react';
import './App.css';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Footer from "./Footer.js";
import Header from "./Header.js";
import Intro from "./Intro.js";
import LinkedInWidget from "./LinkedInWidget.js";
import Subaru from "./subaru.jpg";

export default class Home extends Component {

  componentDidMount() {
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
            <Header className="App" />
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
