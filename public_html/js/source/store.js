import {createStore, combineReducers} from 'redux';
import {
  UPDATE_SELECTOR_FILTERED1,
  REMOVE_SELECTOR_FILTERED1,
  GET_DATEN} from './actions';


function getDaten() {
  return {
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
  };
}


export function changeSelectorFiltered1(state=[], action) {
  switch (action.type) {
    case UPDATE_SELECTOR_FILTERED1:
      console.log(action.filtered1);
      return action.filtered1;
    case REMOVE_SELECTOR_FILTERED1:
      return [];
    default:
      return state;
  };
}

export function handleDaten(state=getDaten(), action) {
  switch (action.type) {
    case GET_DATEN:
      return state;
    default:
      return state;
  };
}

const store = createStore(combineReducers({
    filtered1: changeSelectorFiltered1,
    daten: handleDaten
  }), {
    filtered1: [],
    daten: getDaten()
  }
);

export default store;
