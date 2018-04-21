import React, { Component } from 'react';
import Button from 'material-ui/Button';

export default class Footer extends Component {


  render() {
    return (

      <footer className="App-footer">The more you know, the more there is to learn
        <br />
        <Button href='http://github.com/raysims' alt='http://github.com/raysims' variant="raised" color="primary" text="bold">Click Here for my GitHub</Button>
      </footer>
    );
  }
}
