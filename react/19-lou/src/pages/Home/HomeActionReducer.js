import axios from 'axios';

//Actions
export const ADD_TODO = 'ADD_TODO'
export const HANDLE_VALUE = 'HANDLE_VALUE'
export const GET_AJAX_LIST = 'GET_AJAX_LIST'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text: text
  }
}
export const handleValue = (value) => {
  return {
    type: HANDLE_VALUE,
    value
  }
}
export const getAjaxList = () => {
  return (dispatch, getState) => {

  }
}

//Reducers
const defaultState = {
  value: '我是初始值'
}
const HomeActionReducer = (state = defaultState, action) => {
  if(action.type === ADD_TODO) {
    const newState = Object.assign({}, state)
    return newState
  }else if(action.type === HANDLE_VALUE){
    const newState = Object.assign({}, state)
    newState.value = action.value
    return newState
  }else{
    return state
  }
}
export default HomeActionReducer