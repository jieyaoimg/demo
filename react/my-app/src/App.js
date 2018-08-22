import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable'
import ReduxForm from './components/ReduxForm.jsx'

const Loading = () => <div>Loading...</div>;

const Demo = Loadable({
  loader:()=>import('./components/Demo'),
  loading:Loading
})
const Demo2 = Loadable({
  loader:()=>import('./components/Demo2'),
  loading:Loading
})
const RefsDemo = Loadable({
  loader:()=>import('./components/RefsDemo'),
  loading:Loading
})
const SlotParent = Loadable({
  loader:()=>import('./components/SlotParent'),
  loading:Loading
})

class App extends Component {
  render() {
    const arr = [111,222,333]
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <div>
                <Link to='/' style={{color:'#fff', padding:'5px'}}>首页</Link>
                <Link to='/Demo' style={{color:'#fff', padding:'5px'}}>Demo</Link>
                <Link to='/Demo2' style={{color:'#fff', padding:'5px'}}>Demo2</Link>
                <Link to='/RefsDemo' style={{color:'#fff', padding:'5px'}}>RefsDemo</Link>
                <NavLink to='/slotparent' style={{color:'#fff', padding:'5px'}} activeStyle={{color: '#fff'}}>slotparent</NavLink>
                <Link to='/ReduxForm' style={{color:'#fff', padding:'5px'}}>ReduxForm</Link>
              </div>
            </header>
            <Switch>
              <Route path='/Demo' component={Demo}/>
              <Route exact path='/Demo2' render={()=><Demo2 numbers={arr} ref={(e)=>{this.con = e}}></Demo2>}/>
              <Route exact path='/RefsDemo' component={RefsDemo}/>
              <Route exact path='/slotparent' component={SlotParent}/>
              <Route exact path='/ReduxForm' component={ReduxForm}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
