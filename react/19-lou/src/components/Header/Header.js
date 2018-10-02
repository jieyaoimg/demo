import React, { Component } from 'react';
import './Header.scss'
import { connect } from 'react-redux'
import Search from '../Search/Search.js'
import { Menu } from "antd";
import logo from '../../assets/images/logo.png'

class Header extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render(){
    return(
      <div className='header-root'>
        <div className='float-left'><a href='/'><img alt='logo' src={logo} width='100' height= '56'/></a></div>
        <div className='float-left nav'>
          <Menu>
            <Menu.Item><a href='/'>首页</a></Menu.Item>
          </Menu>
        </div>
        <div className='float-left search-pc'>
          <Search></Search>
        </div>
        <ul className='float-right nav-sub'>
          <li className='float-right'><a href='/'>注册</a></li>
          <li className='float-right'><a href='/'>登陆</a></li>
        </ul>
        <div className='search-mobile'>
          <Search></Search>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)