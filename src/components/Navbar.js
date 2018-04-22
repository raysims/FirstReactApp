import React, { Component } from 'react';
import Button from 'material-ui/Button';

export default class Header extends Component {

  render() {
    return (
        <div>
          <Button variant="raised" color="primary" href="/home">Home</Button>
          <Button variant="raised" color="primary" href="/meetmembers">Member Spotlight</Button>
          <Button variant="raised" color="primary" href="/events">Event Calendar</Button>
          <Button variant="raised" color="primary" href="/membercars">Our Cars</Button>
          <Button variant="raised" color="primary" href="/shop">Shop</Button>
        </div>
    );
  }
}
