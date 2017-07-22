'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Uploader from './components/Uploader';
import Liste from './components/Liste';


ReactDOM.render(
  <span>
    <Uploader />
    <br/>
    <br/>
    <br/>
    <Liste />
  </span>,
  document.getElementById('app')
);
