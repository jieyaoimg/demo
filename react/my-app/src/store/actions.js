export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'; //用export导出是为了给reducers用
export const STUDENT_BUTTON_ADD_LIST = 'STUDENT_BUTTON_ADD_LIST';


export const changeIputValue = (value) => { //用export导出是为了给components用
  return {
    type: CHANGE_INPUT_VALUE,
    value: value
  }
}
export const studentButtonAddList = () => {
  return {
    type: STUDENT_BUTTON_ADD_LIST
  }
}
