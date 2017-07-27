export const UPDATE_SELECTOR_FILTERED1 = 'UPDATE_SELECTOR_FILTERED1';
export const REMOVE_SELECTOR_FILTERED1 = 'UPDATE_SELECTOR_FILTERED1';

export function updateSelectorFiltered1(filtered1) {
  type: UPDATE_SELECTOR_FILTERED1,
  filtered1
}

export function removeSelectorFiltered() {
  type: REMOVE_SELECTOR_FILTERED1
}
