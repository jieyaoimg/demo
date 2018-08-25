import { createStore, applyMiddleware } from 'redux'; //引入applyMiddleware
import thunk from 'redux-thunk'; //引入中间件redux-thunk
import reducers from './reducers';

const store = createStore(
  reducers,
  applyMiddleware(thunk) //对store使用redux-thunk中间件
)
export default store