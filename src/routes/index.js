import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./Home.js";

export default () => (
  <BrowserRouter>
    <Route path="/" component={Home} />
  </BrowserRouter>
);
