'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import * as Actions from '../actions';

const action = changeSelectorFiltered1();
store.dispatch(action);

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daten: {
        Tiergruppen: [
          { name: 'Käfer',
            items: ['Bombardierkäfer', 'Marienkäfer', 'Weichkäfer', 'Schnellkäfer']
          },
          { name: 'Vögel',
            items: ['Singvögel', 'Eulen', 'Spechte', 'Watvögel', 'Störche']
          },
          {
            name: 'Schmetterlinge',
            items: ['Tagfalter', 'Nachtfalter']
          },
          {
            name: 'Krokodile',
            items: ['Nilkrokodil', 'Flusskrokodil']
          }
        ]
      },
      filtered1: []
    };
    this.onChangeFunc = this.onChangeFunc.bind(this);
  }

  render() {
    return (
      <form>
        <input type="search" list="Tiere" onChange={this.onChangeFunc}/>
        <datalist id="Tiere">{
          this.state.daten.Tiergruppen.map((group, idx) => {
            return <option key={idx} value={group.name} />;
          })
        }</datalist>
          {
            this.state.filtered1.length
              ? <span>
                   <input type="search" list="Filter1" />
                   <datalist id="Filter1">{
                     this.state.filtered1[0].items.map((item,idx) => {
                       console.log(item);
                       return <option key={idx} value={item} />;
                     })
                   }</datalist>
                </span>
              : <span></span>
          }
        <button>lookup</button>
      </form>
    );
  }

  onChangeFunc(e) {
    let filtered1 = this.state.daten.Tiergruppen.filter(group => {
      return e.target.value === group.name;
    });
    if (filtered1.length) {
      //this.setState({filtered1: filtered1});
      updateSelectorFiltered(filtered1);
    } else {
      //this.setState({filtered1: []});
      removeSelectorFiltered();
    }
  }
}

function mapStateToProps(state) {
  return {
    filtered1: state.filtered1
  };
}

export default Selector;
