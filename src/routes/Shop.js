import React, { Component } from 'react';
import Button from 'material-ui/Button';

import AppBar from 'material-ui/AppBar';
import Footer from "./Footer.js";
import Header from "../components/Header";
import LinkedInWidget from "./LinkedInWidget.js";

export default class Shop extends Component {


  render() {
    return (
      <body className="App">
      <div className="App">
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more">
          <Header className="App" />
        </AppBar>
      </div>
      <div >
        <p title="intro" className="App">Maybe I could put a store here, or a reference to delaware subaru classifieds?<br />
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
