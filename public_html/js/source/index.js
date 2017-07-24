'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Uploader from './components/Uploader';
import List from './components/List';

let header = ['Bundesland', 'Fläche in km²', 'Ew. insgesamt','Ew. männlich',
              'Ew. weiblich', 'Ew. je km²'],
    sorting = ['abc', 'number', 'number', 'number', 'number', 'number'],
    daten = [
      ['Schleswig-Holstein', 15802.49, 2858714, 1399458, 1459256, 181],
      ['Hamburg', 755.30, 1787408, 873062, 914346, 2366],
      ['Niedersachsen', 47615.85, 7926599, 3915398, 4011201, 166],
      ['Bremen', 419.84, 671489, 330895, 340594, 1599],
      ['Nordrhein-Westfalen', 34112.52, 17865516, 8768019, 9097497, 524],
      ['Hessen', 21114.90, 6176172, 3047730, 3128442, 293],
      ['Rheinland-Pfalz', 19854.46, 4052803, 1999333, 2053470, 204],
      ['Baden-Württemberg', 35751.33, 10879618, 5393388, 5486230, 304],
      ['Bayern', 70550.07, 12843514, 6352172, 6491342, 182],
      ['Saarland', 2568.69, 995597, 488631, 506966, 388],
      ['Berlin', 891.68, 3520031, 1726533, 1793498, 3948],
      ['Brandenburg', 29654.36, 2484826, 1228283, 1256543, 84],
      ['Mecklenburg-Vorpommern', 23213.74, 1612362, 797832, 814530, 69],
      ['Sachsen', 18449.39, 4084851, 2011561, 2073290, 221],
      ['Sachsen-Anhalt', 20451.74, 2245470, 1106689, 1138781, 110],
      ['Thüringen', 16202.38, 2170714, 1075139, 1095575, 134]
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
