import { createStore } from 'redux'
import changeInputValue from './reducers'
let store = createStore(changeInputValue, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //

export default store