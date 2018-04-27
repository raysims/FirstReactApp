import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "../components/Home.js";
import Events from "../components/Events.js";
import MeetMembers from "../components/MeetMembers";
import MemberCars from "../components/MemberCars";
import Shop from '../components/Shop.js';

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/events" exact component={Events} />
      <Route path="/meetmembers" exact component={MeetMembers} />
      <Route path="/membercars" exact component={MemberCars} />
      <Route path="/shop" exact component={Shop} />
    </div>
  </BrowserRouter>
);
