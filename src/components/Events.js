import React, { Component } from 'react';

import Footer from "./Footer.js";
import Header from "./Header";
import EventCalendar from "./EventCalendar.js";
import LinkedInWidget from "./LinkedInWidget.js";

export default class Events extends Component {


  render() {
    return (


      <body>
        <div className="wrapper">
          <Header />
          <p title="intro" className="App">This is currently mocked data. Data is static until I wrote the backend<br />
            However until then I can just add events to the mocked data file.
        </p>
          <EventCalendar />
          <LinkedInWidget />
          <Footer />
        </div>
      </body>
    );
  }
}
