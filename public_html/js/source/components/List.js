'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header,
      daten: props.daten,
      descending: false,
      sorting: props.sorting
    };
    this.headOnClick = this.headOnClick.bind(this);
    this.testFc = this.testFc.bind(this);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>{
              this.state.header.map(function (hdtext, idx) {
                return <th onClick={this.headOnClick} key={idx}>{hdtext}</th>;
              }, this)
            }</tr>{
              this.state.daten.map(function (o_dat, o_idx) {
                return (
                  <tr key={o_idx}>{
                    o_dat.map(function (i_dat, i_idx) {
                      return <td key={i_idx} data-row={o_idx} onClick={this.testFc}>{i_dat}</td>;
                    }, this)
                  }</tr>
                );
              }, this)
          }</tbody>
        </table>
      </div>
    );
  }

  headOnClick(event) {
    let daten = this.state.daten,
        descending = !this.state.descending,
        cellIndex = event.target.cellIndex,
        sortBy = this.state.sorting[cellIndex];
    if (sortBy === 'number') {
      daten.sort(function(a, b) {
        return descending ? (a[cellIndex] - b[cellIndex]) : (b[cellIndex] - a[cellIndex]);
      });
    } else {
      daten.sort();
      if (descending) {
        daten.reverse();
      }
    }
    this.setState({
      daten: daten,
      descending: descending
    });
  }

  testFc(event) {
    console.log(event.target.dataset.row);
  }
}



List.defaultProps = {
  header: ['Keine Daten übergeben!'],
  sorting: ['abc', 'number'],
  daten: [
    ['Bitte Daten an List Componente übergeben!']
  ]
};

export default List;



/*
'Bundesland', 'Fläche in km²'
Bayern 	70.549,19
Niedersachsen 	47.618,24
Baden-Württemberg 	35.751,65
Nordrhein-Westfalen 	34.083,52
Brandenburg 	29.477,16
Mecklenburg-Vorpommern 	23.174,17
Hessen 	21.114,72
Sachsen-Anhalt 	20.445,26
Rheinland-Pfalz 	19.847,39
Sachsen 	18.414,82
Thüringen 	16.172,14
Schleswig-Holstein 	15.763,18
Saarland 	2.568,65
Berlin 	891,75
Hamburg 	755,16
Bremen 	404,23


Land		Fläche in km2   Ew. insgesamt	Ew. männlich	Ew. weiblich	Ew. je km²


['Schleswig-Holstein', 15802.49, 2858714, 1399458, 1459256, 181],
['Hamburg', 755.30, 1787408, 873062, 914346, 2366],
['Niedersachsen', 47615.85	7926599	3915398	4011201	166],
['Bremen', 419.84, 671489, 330895, 340594, 1599],
['Nordrhein-Westfalen', 34112.52, 17865516, 8768019, 9097497, 524],
['Hessen', 21114.90, 6176172, 3047730, 3128442, 293],
['Rheinland-Pfalz', 19854.46, 4052803, 1999333, 2053470, 204],
['Baden-Württemberg', 35751.33, 10879618, 5393388	5486230, 304],
['Bayern', 70550.07, 12843514, 6352172, 6491342, 182],
['Saarland', 2568.69, 995597, 488631, 506966, 388],
['Berlin', 891.68, 3520031, 1726533, 1793498, 3948],
['Brandenburg', 29654.36, 2484826, 1228283, 1256543, 84],
['Mecklenburg-Vorpommern', 23213.74, 1612362, 797832, 814530	69],
['Sachsen', 18449.39, 4084851, 2011561, 2073290, 221],
['Sachsen-Anhalt', 20451.74, 2245470, 1106689, 1138781, 110],
['Thüringen', 16202.38, 2170714, 1075139, 1095575, 134]
*/
