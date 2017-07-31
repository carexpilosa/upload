'use strict';

import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import store from '../store';
import * as Actions from '../actions';

//const action = updateSelectorFiltered1([]);
//store.dispatch(action);

class Selector extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.onChangeFunc = this.onChangeFunc.bind(this);
  }

  render() {
    const { updateSelectorFiltered1, removeSelectorFiltered1, daten } = this.props;
    return (
      <form>
        <input type="search" list="Tiere" onChange={this.onChangeFunc}/>
        <datalist id="Tiere">{
          daten.Tiergruppen.map((group, idx) => {
            return <option key={idx} value={group.name} />;
          })
        }</datalist>
          {
            this.props.filtered1.length
              ? <span>
                   <input type="search" list="Filter1" />
                   <datalist id="Filter1">{
                     this.props.filtered1.map((item, idx) => {
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
    const { updateSelectorFiltered1, removeSelectorFiltered1, daten } = this.props;
    let filtered = [];
    
    daten.Tiergruppen.map(group => {
      if (e.target.value === group.name) {
        group.items.map(function (item) {
          filtered.push(item);
        });
      }
    });
    console.log(filtered);
    if (filtered.length) {
      updateSelectorFiltered1(filtered);
    } else {
      //this.setState({filtered1: []});
      removeSelectorFiltered1();
    }
  }
}

function mapStateToProps(state) {
  return {
    filtered1: state.filtered1,
    daten: state.daten
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Selector);

//export default Selector;
