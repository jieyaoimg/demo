import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux" // （1）引入Provider
import store from "./store/index" // （2）引入store
/** （3）用Provider组件包裹整个应用，并且绑定store  **/
ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
