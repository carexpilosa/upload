export const
  [ UPDATE_SELECTOR_FILTERED1,   REMOVE_SELECTOR_FILTERED1,   GET_DATEN ] =
  ['UPDATE_SELECTOR_FILTERED1', 'REMOVE_SELECTOR_FILTERED1', 'GET_DATEN'];

export function updateSelectorFiltered1(filtered1) {
  return {
    type: UPDATE_SELECTOR_FILTERED1,
    filtered1
  };
}

export function removeSelectorFiltered1() {
  return {
    type: REMOVE_SELECTOR_FILTERED1
  };
}

export function getDaten() {
  return {
    type: GET_DATEN
  };
}
