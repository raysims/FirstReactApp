import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './App.css';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import LinkedInWidget from "../components/LinkedInWidget.js";
import Subaru from "../images/subaru.jpg";
import MeetMembers from './MeetMembers';

export default class Home extends Component {

  componentWillMount() {
    this.props.history.push('/home');
  }
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
        <div className="App">
          <img src={require('../images/subaru.jpg')} />
        </div>
        <div>
          <LinkedInWidget />
          <Footer />
        </div>
      </body>
    );

  }
}
