export const UPDATE_SELECTOR_FILTERED1 = 'UPDATE_SELECTOR_FILTERED1';
export const REMOVE_SELECTOR_FILTERED1 = 'UPDATE_SELECTOR_FILTERED1';

export function updateSelectorFiltered1(filtered1) {
  console.log(filtered1)
  return {
    type: UPDATE_SELECTOR_FILTERED1,
    filtered1: filtered1
  };
}

export function removeSelectorFiltered() {
  return {
    type: REMOVE_SELECTOR_FILTERED1
  };
}
