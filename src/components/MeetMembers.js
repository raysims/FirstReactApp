import React, { Component } from 'react';

import Footer from "./Footer.js";
import Header from "./Header";
import LinkedInWidget from "./LinkedInWidget.js";

export default class MeetMembers extends Component {


  render() {
    return (
      <body>
      <div className="wrapper">
        <Header />
          <p>We could have a weekly/monthly member spot light or have a short profiles of active members</p>
        <LinkedInWidget />
        <Footer />
      </div>
    </body>
    );
  }
}
