import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./Home.js";
import Events from "./Events.js";
import MeetMembers from "./MeetMembers";
import MemberCars from "./MemberCars";

export default () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/events" exact component={Events} />
      <Route path="/meetmembers" exact component={MeetMembers} />
      <Route path="/membercars" exact component={MemberCars} />
    </div>
  </BrowserRouter>
);
