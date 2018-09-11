import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux" 
import store from "./store/index" 
import Home from "./pages/Home/Home" 
import List from "./pages/List/List.js" 
import {BrowserRouter, Route, Switch} from "react-router-dom";

class App extends Component {
  constructor(props){
    super(props)
    this.tit = React.createRef()
  }
  handleFocus = () => {
    console.log(111)
    this.tit.current.className += ' change-width'
  }
  render() {
    return (
      <Provider store = {store}>
        <div>
          <BrowserRouter>
            <Switch>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/list" component={List}/>
            </Switch>
          </BrowserRouter>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 ref={this.tit} className="App-title">Welcome to React</h1>
            </header>
            <input type='text' placeholder='请输入' onFocus = {this.handleFocus}/>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
