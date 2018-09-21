export const DEMO = 'DEMO'
export const demo = (value) => {
  return{
    type: DEMO,
    value
  }
}
export const initState = {
  
}
const reducer = (state = initState, action) => {
  if(action === DEMO){
    const newState = JSON.parse(JSON.stringify(state))
    return newState
  }else{
    return state
  }
}

export default reducer;