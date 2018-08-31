export const ACTION_INPUT_VALUE = 'ACTION_INPUT_VALUE'
export const ACTION_HANDLE_BUTTON = 'ACTION_HANDLE_BUTTON'


export const actionInputValue = (value)=>{
  return {
    type: ACTION_INPUT_VALUE,
    value: value
  }
}
export const actionHandleButton = ()=>{
  return {
    type: ACTION_HANDLE_BUTTON
  }
}