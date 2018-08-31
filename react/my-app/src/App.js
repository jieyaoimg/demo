import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactReduxForm from './components/ReactReduxForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ReactReduxForm></ReactReduxForm>
      </div>
    );
  }
}

export default App;
