import { ACTION_INPUT_VALUE, ACTION_HANDLE_BUTTON } from './actions'

const initialState = {
  InputValue: "请输入",
  data: [1111, 2222, 3333, 4444]
};

const reducers = (state = initialState, action) => {
  if(action.type === ACTION_INPUT_VALUE){
    return Object.assign({}, state, {
      InputValue: action.value
    })
  }else if(action.type === ACTION_HANDLE_BUTTON){
    const newState = Object.assign({}, state)
    newState.data.push(newState.InputValue)
    newState.InputValue = '' //少了这一步，input内容在下次发生变化时，页面才会渲染出新增的内容，不明白为什么
    return newState
  }else{
    return state 
  }
}

export default reducers
