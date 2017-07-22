'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: props.header,
      daten: props.daten,
      descending: false
    };
    this.headOnClick = this.headOnClick.bind(this);
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
                  <tr key={o_idx}>
                    <td key={o_idx}>{o_dat[0]}</td>
                  </tr>
                );
              }, this)
          }</tbody>
        </table>
      </div>
    );
  }

  headOnClick() {
    let daten = this.state.daten,
        descending = !this.state.descending;
    daten.sort(function (a, b) {
      return descending ? a < b : b < a;
    });
    this.setState({
      daten: daten,
      descending: descending
    });
  }
}

Liste.defaultProps = {
  header: ['Bundesland'],
  daten: [
    ['Bayern'],
    ['Berlin'],
    ['Schleswig-Holsten']
  ]
};

export default Liste;



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
*/
