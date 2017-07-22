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
    //this.do = this.do.bind(this);
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>{
              this.state.header.map(function (hdtext, idx) {
                return <th onClick={this.headOnClick.bind(this)} key={idx}>{hdtext}</th>;
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
    console.log('headOnClick');
    let daten = this.state.daten,
        descending = this.state.descending;
    daten.sort(function (a, b) {
      return descending ? a < b : b < a;
    });
    this.setState({
      daten: daten,
      descending: !descending
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
