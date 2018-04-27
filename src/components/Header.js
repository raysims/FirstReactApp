import React, { Component } from 'react';
import NavBar from "../components/Navbar";

export default class Header extends Component {

  render() {
    return (
      <div>
        <h1 >
          <p >Delaware Subaru Club</p>
          <NavBar />
        </h1>
      </div>
    );
  }
}
