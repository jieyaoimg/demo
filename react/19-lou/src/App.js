import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    );
  }
}

export default App;
