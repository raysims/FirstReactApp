import React, { Component } from 'react';
import './App.css';
import CountingButton from "./components/CountingButton.js";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
class App extends Component {

  render() {
    return (
      <body>
        <div className="App">
          <Header></Header>
          <CountingButton></CountingButton>
        </div>
      <Footer></Footer>
    </body>
    );

}
}

export default App;
