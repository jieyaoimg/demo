import {
  CHANGE_INPUT_VALUE,
  STUDENT_BUTTON_ADD_LIST
} from './actions'

const initialState = {
  InputValue: "请输入",
  data: [1111, 2222, 3333, 4444]
};

const changeInputValue = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return Object.assign({}, state, {
        InputValue: action.value
      })
    case STUDENT_BUTTON_ADD_LIST:
      const newState = Object.assign({}, state)
       newState.data.push(newState.InputValue)
       newState.InputValue = ''
       return newState
    default:
      return state
  }
}

export default changeInputValue