import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import List from './pages/List/List.js';


class App extends Component {
  constructor(props){
    super(props)
    this.tit = React.createRef()
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route exact path = '/list' component = {List}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
