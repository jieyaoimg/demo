import axios from 'axios';

export const ADD_TODO = 'ADD_TODO'
export const GET_AJAX_LIST = 'GET_AJAX_LIST'

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text: text
  }
}
export const getAjaxList = () => {
  return (dispatch, getState) => {

  }
}

const defaultState = {
  value: '我是初始值'
}
const HomeActionReducer = (state = defaultState, action) => {
  if(action.type === ADD_TODO) {
    const newState = Object.assign({}, state)
    return newState
  }else{
    return state
  }
}
export default HomeActionReducer