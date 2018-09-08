import { combineReducers } from 'redux';
import HomeActionReducer from '../pages/Home/HomeActionReducer';
import SlideshowActionReducer from '../components/Slideshow/SlideshowActionReducer';

const reducer = combineReducers({
  HomeActionReducer, // 外部需要通过state.HomeActionReducer.xxx获取HomeActionReducer里的数据
  SlideshowActionReducer
});
export default reducer;
