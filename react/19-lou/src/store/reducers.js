import { combineReducers } from 'redux';
import HomeActionsReducers from '../pages/Home/HomeActionsReducers';

const reducers = combineReducers({
  HomeActionsReducers, // 外部需要通过state.headerReducer.xxx获取headerReducer里的数据
});

export default reducers;
