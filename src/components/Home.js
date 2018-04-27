import React, { Component } from 'react';

import Footer from "./Footer.js";
import Header from "./Header";
import LinkedInWidget from "./LinkedInWidget.js";

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

  render() {

    return (
      <body>
        <div className="wrapper">
          <Header />
          <img alt="subaru.jpg" src={require('../images/subaru.jpg')}/>
          <LinkedInWidget />
          <Footer />
        </div>
      </body>
    );

  }
}
