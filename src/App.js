import React, { Component } from 'react';
import './App.css';
import CountingButton from "./components/CountingButton.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import LinkedInWidget from "./components/LinkedInWidget.js"


class App extends Component {

  componentDidMount () {
      const script = document.createElement("script");

      script.src = "//platform.linkedin.com/in.js";
      script.async = true;

      document.body.appendChild(script);
  }

  render() {

    return (
        <div className="App">
          <Header></Header>
          <CountingButton className="App"></CountingButton>
          <LinkedInWidget></LinkedInWidget>
          <Footer></Footer>
        </div>
    );

}
}

export default App;
