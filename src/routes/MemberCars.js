import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Footer from "../components/Footer.js";
import Header from "../components/Header";
import LinkedInWidget from "../components/LinkedInWidget.js";

export default class MemberCars extends Component {


  render() {
    return (
      <body className="App">
      <div className="App">
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
          <Header className="App" />
        </AppBar>
      </div>
      <div >
        <p title="intro" className="App">Members cars go here<br />
        </p>
      </div>
      <div>
          <LinkedInWidget />
          <Footer />
        </div>
      </body>
    );
  }
}
