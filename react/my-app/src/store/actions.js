export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export function changeIputValue(value) {
  return {
    type: CHANGE_INPUT_VALUE,
    value: value
  }
}
