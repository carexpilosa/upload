import {createStore, combineReducers} from 'redux';
import {UPDATE_SELECTOR_FILTERED1, REMOVE_SELECTOR_FILTERED1} from './actions';

export function changeSelectorFiltered1(state=[], action) {
  switch (action.type) {
    case UPDATE_SELECTOR_FILTERED1:
      return action.filtered1;
    case REMOVE_SELECTOR_FILTERED1:
      return [];
    default:
      return state;
  };
}

const store = createStore(combineReducers({
  filtered1: changeSelectorFiltered1
}));

export default store;
