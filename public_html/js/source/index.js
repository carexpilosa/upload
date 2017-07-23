'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Uploader from './components/Uploader';
import List from './components/List';


ReactDOM.render(
  <span>
    <Uploader />
    <br/>
    <br/>
    <br/>
    <List />
  </span>,
  document.getElementById('app')
);
