import React, { Component } from 'react';

import Footer from "./Footer.js";
import Header from "./Header";
import LinkedInWidget from "./LinkedInWidget.js";

export default class MemberCars extends Component {


  render() {
    return (
      <body>
      <div className="wrapper">
        <Header />
          <p>Similar to the members page, this could feature weekly or monthly reviews/interviews about member's cars</p>
        <LinkedInWidget />
        <Footer />
      </div>
    </body>
    );
  }
}
