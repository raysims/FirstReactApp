import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Footer from "./Footer.js";
import Header from "../components/Header";
import LinkedInWidget from "./LinkedInWidget.js";

export default class MeetMembers extends Component {


  render() {
    return (
      <body className="App">
      <div className="App">
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
          <Header className="App" />
        </AppBar>
      </div>
      <div >
        <p title="intro" className="App">Members page goes here<br />
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
