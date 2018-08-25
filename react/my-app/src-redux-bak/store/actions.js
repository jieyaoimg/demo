import axios from "axios"

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'; //用export导出是为了给reducers用
export const STUDENT_BUTTON_ADD_LIST = 'STUDENT_BUTTON_ADD_LIST';
export const INIT_LIST = 'INIT_LIST';


export const changeIputValue = (value) => { //用export导出是为了给components中store.dispatch()用
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
export const initList = (data) => {
  return {
    type: INIT_LIST,
    data: data
  }
}
export const getAjaxList = () =>{
  return (dispatch, getState) => {
    axios.get('https://jieyaoimg.github.io/demo/react/my-app/src/api/list.json').then(
      (res)=>{
        const data = res.data.list.split(',')
        dispatch(initList(data))//把异步获取的data传给initList，然后initList对应的reducer就可以利用data更新state了
      }
    )
  }
}
