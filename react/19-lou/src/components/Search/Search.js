
import React, { Component } from 'react';
import './Search.scss';
import { connect } from 'react-redux';
import { SearchActionsReducers } from './SearchActionsReducers';
import { Row, Col, Input } from "antd";

class Search extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  // ab = 1
  render(){
    const Search = Input.Search;
    return(
      <Row>
        <Col xs = {{span: 4}}>LOGO</Col>
        <Col xs = {{span: 2, push: 16}}>登录</Col>
        <Col xs = {{span: 2, push: 16}}>注册</Col>
        <Col xs = {{span: 24, pull: 0}} sm = {{span: 8, pull: 4}}>
          <Search 
            placeholder="input search text"
            onSearch={(value) => {console.log(value)}}
            enterButton
          />
        </Col>
      </Row>
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
export default connect(mapStateToProps, mapDispatchToProps)(Search)