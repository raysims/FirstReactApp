import React, { Component } from 'react';
import NavBar from "../components/Navbar";

export default class Header extends Component {

  render() {
    return (
      <div>
        <h1 className="App-header" >Delaware Subaru Club</h1>
        <NavBar />
      </div>
    );
  }
}
