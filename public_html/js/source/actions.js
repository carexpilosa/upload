export const UPDATE_SELECTOR_FILTERED1 = 'UPDATE_SELECTOR_FILTERED1';
export const REMOVE_SELECTOR_FILTERED1 = 'UPDATE_SELECTOR_FILTERED1';
export const GET_DATEN = 'GET_DATEN';

export function updateSelectorFiltered1(filtered1) {
  console.log(filtered1);
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
