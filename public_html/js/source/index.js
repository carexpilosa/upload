'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Uploader from './components/Uploader';
import List from './components/List';

let header = ['Bundesland', 'Fläche in km²'],
    sorting = ['abc', 'number'],
    daten = [
      ['Bayern', 70549.19],
      ['Berlin', 891.75],
      ['Schleswig-Holsten', 15763.18],
      ['Niedersachsen', 47618.24],
      ['Baden-Württemberg', 35751.65],
      ['Nordrhein-Westfalen', 34083.52],
      ['Brandenburg', 29477.16],
      ['Mecklenburg-Vorpommern', 23174.17],
      ['Hessen', 21114.72],
      ['Sachsen-Anhalt', 20445.26],
      ['Rheinland-Pfalz', 19847.39],
      ['Sachsen', 18414.82],
      ['Thüringen', 16172.14],
      ['Saarland', 2568.65],
      ['Hamburg', 755.16],
      ['Bremen', 404.23]
    ];


ReactDOM.render(
  <span>
    <Uploader />
    <br/>
    <br/>
    <br/>
    <List header={header} sorting={sorting} daten={daten}/>
  </span>,
  document.getElementById('app')
);
