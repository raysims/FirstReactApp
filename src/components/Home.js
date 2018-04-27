import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Button from 'material-ui/Button';
import Footer from "./Footer.js";
import Header from "./Header";
import EventCalendar from "./EventCalendar.js";
import LinkedInWidget from "./LinkedInWidget.js";
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
  }

  render() {

    return (
      <body>
        <div className="wrapper">
          <Header />
          <img src={require('../images/subaru.jpg')}/>
          <LinkedInWidget />
          <Footer />
        </div>
      </body>
    );

  }
}
