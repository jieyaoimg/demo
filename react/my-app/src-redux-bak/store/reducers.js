import {
  CHANGE_INPUT_VALUE,
  STUDENT_BUTTON_ADD_LIST,
  INIT_LIST
} from './actions'

const initialState = {
  InputValue: "请输入",
  data: '[1111, 2222, 3333, 4444]'
};

const reducers = (state = initialState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    return Object.assign({}, state, {
      InputValue: action.value
    })
  } else if (action.type === INIT_LIST) {
    const newState = Object.assign({}, state)
    newState.data = action.data
    return newState
  } else if (action.type === STUDENT_BUTTON_ADD_LIST) {
    const newState = Object.assign({}, state)
    newState.data.push(newState.InputValue)
    newState.InputValue = ''
    return newState
  } else {
    return state 
  }
}

export default reducers
