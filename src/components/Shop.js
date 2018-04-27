import React, { Component } from 'react';
import Footer from "./Footer.js";
import Header from "./Header";
import LinkedInWidget from "./LinkedInWidget.js";

export default class Shop extends Component {


  render() {
    return (
        <body>
          <div className="wrapper">
            <Header />
              <p>Maybe this could be like a local subaru craigslist with a search function?</p>
            <LinkedInWidget />
            <Footer />
          </div>
        </body>
    );
  }
}
